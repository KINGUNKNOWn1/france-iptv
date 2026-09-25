// Writes the payloads used by the /test-debit-iptv page into dist/speedtest/.
// Random bytes (incompressible) so CDN/browser compression can't inflate the
// measured speed. Generated at build time to keep binaries out of git.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist', 'speedtest');
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'ping.txt'), 'ok');
fs.writeFileSync(path.join(dir, 'payload-8mb.bin'), crypto.randomBytes(8 * 1024 * 1024));
console.log('[speedtest] wrote dist/speedtest/ping.txt and payload-8mb.bin');
