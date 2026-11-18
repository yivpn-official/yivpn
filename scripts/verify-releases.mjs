import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const manifestPath = path.resolve(__dirname, '../manifest/releases-v1.0.8.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

assert.equal(manifest.version, '1.0.8');
assert.equal(manifest.packages.length, 4);

for (const pkg of manifest.packages) {
  assert.match(pkg.sha256, /^[a-f0-9]{64}$/, `Invalid SHA-256 for ${pkg.filename}`);
  assert.ok(pkg.directUrl.startsWith('https://yivpn.net/downloads/'));
  assert.ok(pkg.githubReleaseUrl.startsWith('https://github.com/yivpn-official/yivpn/releases/download/'));
}

console.log('Offline manifest schema & SHA-256 format check passed (' + manifest.packages.length + ' packages).');

if (process.argv.includes('--remote')) {
  for (const pkg of manifest.packages) {
    const res = await fetch(pkg.directUrl + '.sha256');
    assert.equal(res.status, 200, `Remote SHA-256 fetch failed for ${pkg.filename}`);
    const text = (await res.text()).trim().toLowerCase();
    assert.ok(text.includes(pkg.sha256), `SHA-256 mismatch on remote for ${pkg.filename}`);
    console.log('Verified remote SHA-256 match:', pkg.filename, pkg.sha256);
  }
}
