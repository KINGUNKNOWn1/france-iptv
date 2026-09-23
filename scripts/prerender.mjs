// Post-build prerender: renders every sitemap route in headless Chrome and
// writes the resulting HTML to dist/<route>/index.html so crawlers get real
// titles, meta tags, JSON-LD and body content without executing JavaScript.
//
// Skips (exit 0) when no Chrome is available, so remote builds never fail.
// For a prerendered deploy: `vercel build --prod && vercel deploy --prebuilt --prod`.
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
const executablePath = CHROME_CANDIDATES.find((p) => fs.existsSync(p));
if (!executablePath) {
  console.warn('[prerender] No Chrome found — skipping (site stays client-rendered).');
  process.exit(0);
}

const { default: puppeteer } = await import('puppeteer-core');

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

const browser = await puppeteer.launch({ executablePath, headless: 'new', args: ['--no-sandbox'] });
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
