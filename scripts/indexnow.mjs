// Submits every sitemap URL to IndexNow (Bing, Yandex, Seznam, Naver…) so
// changes get recrawled within hours. Run after a production deploy:
//   npm run indexnow
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HOST = 'franceiptv.stream';
const KEY = '8fbd22c74835cc6c6bc2db0dd394e92a'; // must match public/<KEY>.txt

const sitemap = fs.readFileSync(path.join(root, 'public/sitemap.xml'), 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`[indexnow] ${urlList.length} URLs -> HTTP ${res.status}`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
