// Post-build prerender: renders every sitemap route in headless Chrome and
// writes the resulting HTML to dist/<route>/index.html so crawlers get real
// titles, meta tags, JSON-LD and body content without executing JavaScript.
//
// Uses local Chrome when present (dev machines); on Vercel's build image it
// falls back to the bundled @sparticuz/chromium binary, so git-push deploys
// ship prerendered HTML too. Elsewhere with no Chrome it skips (exit 0).
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const SITE = 'https://franceiptv.stream';

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);
const { default: puppeteer } = await import('puppeteer-core');

let launchOptions;
const localChrome = CHROME_CANDIDATES.find((p) => fs.existsSync(p));
if (localChrome) {
  launchOptions = { executablePath: localChrome, headless: 'new', args: ['--no-sandbox'] };
} else if (process.env.VERCEL) {
  // Never skip on Vercel: failing the build keeps the previous (prerendered)
  // deployment live instead of shipping an empty client-rendered shell.
  const { default: chromium } = await import('@sparticuz/chromium');
  launchOptions = {
    executablePath: await chromium.executablePath(),
    headless: 'shell',
    args: await puppeteer.defaultArgs({ args: chromium.args, headless: 'shell' }),
  };
  console.log('[prerender] Using @sparticuz/chromium');
} else {
  console.warn('[prerender] No Chrome found — skipping (site stays client-rendered).');
  process.exit(0);
}

const sitemap = fs.readFileSync(path.join(root, 'public/sitemap.xml'), 'utf8');
const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain' };
const spaShell = fs.readFileSync(path.join(dist, 'index.html'));

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  const file = path.join(dist, urlPath);
  if (file.startsWith(dist) && fs.existsSync(file) && fs.statSync(file).isFile() && !file.endsWith('.br') && !file.endsWith('.gz')) {
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    return fs.createReadStream(file).pipe(res);
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(spaShell); // always the untouched SPA shell, never a prerendered file
});
await new Promise((r) => server.listen(0, r));
const origin = `http://localhost:${server.address().port}`;

const browser = await puppeteer.launch(launchOptions);
let failed = 0;

for (const route of routes) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  // Pretend consent was already given so the cookie banner isn't baked into the HTML.
  await page.evaluateOnNewDocument(() => localStorage.setItem('cookieConsent', '{"essential":true}'));
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const u = req.url();
    // Block third-party scripts (analytics, tracker) so they don't run or get baked in.
    if (u.startsWith(origin) || u.startsWith('data:') || /fonts\.(googleapis|gstatic)\.com/.test(u) || /images\.unsplash\.com/.test(u)) req.continue();
    else req.abort();
  });
  try {
    await page.goto(origin + route, { waitUntil: 'networkidle0', timeout: 30000 });
    // Wait for lazy route + Helmet to set a canonical for this route, and loader to be gone.
    const canonical = route === '/' ? SITE : SITE + route;
    await page.waitForFunction(
      (c) => document.querySelector('link[rel="canonical"]')?.href.replace(/\/$/, '') === c && document.querySelector('h1'),
      { timeout: 15000 },
      canonical
    );
    let html = await page.content();
    html = '<!DOCTYPE html>' + html.replace(/^<!DOCTYPE html>/i, '');
    // Drop transient UI that must not be baked into static HTML.
    html = html.replace(/<script[^>]+src="https:\/\/(www\.googletagmanager\.com|analytics-backend[^"]*)"[^>]*><\/script>/g, '');
    // The Meta Pixel snippet injects fbevents.js at runtime; a baked-in copy can
    // run before the snippet defines fbq ("fbq is not defined") and loads twice.
    html = html.replace(/<script[^>]+src="https:\/\/connect\.facebook\.net\/[^"]*"[^>]*><\/script>/g, '');
    const outDir = route === '/' ? dist : path.join(dist, route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    console.log('[prerender] ok  ', route);
  } catch (e) {
    failed++;
    console.error('[prerender] FAIL', route, e.message);
  }
  await page.close();
}

await browser.close();
server.close();
console.log(`[prerender] ${routes.length - failed}/${routes.length} routes written`);
process.exit(failed ? 1 : 0);
