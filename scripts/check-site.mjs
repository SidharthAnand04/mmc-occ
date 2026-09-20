import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import assert from 'node:assert/strict';
const root = resolve('dist');
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((e) =>
        e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
      ),
    )
  ).flat();
}
const files = (await walk(root)).filter((f) => f.endsWith('.html'));
let links = 0;
for (const file of files) {
  const html = await readFile(file, 'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `one H1: ${file}`);
  assert.match(html, /<html lang="en"/);
  assert.match(html, /<title>[^<]+<\/title>/);
  assert.match(html, /<meta name="description" content="[^"]+"/);
  assert.match(html, /noindex,nofollow/);
  assert.match(html, /id="main"/);
  for (const [, url] of html.matchAll(/(?:href|src)="([^"<>]+)"/g)) {
    if (url.startsWith('#')) {
      assert.ok(html.includes(`id="${url.slice(1)}"`), `anchor ${url}`);
      continue;
    }
    if (!url.startsWith('/') || url.startsWith('//')) continue;
    const pathname = url.split(/[?#]/)[0];
    const target = join(
      root,
      pathname,
      pathname.endsWith('/') ? 'index.html' : '',
    );
    assert.ok(
      await stat(target).catch(() => false),
      `broken link ${url} in ${file}`,
    );
    links++;
  }
  for (const [, attrs] of html.matchAll(/<img\s([^>]+)>/g)) {
    assert.match(attrs, /alt="[^"]*"/);
    assert.match(attrs, /width="\d+"/);
    assert.match(attrs, /height="\d+"/);
  }
  for (const [, data] of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  )) {
    assert.equal(JSON.parse(data)['@type'], 'MedicalClinic');
  }
  assert.ok(
    !/href="#"|lorem ipsum|TODO|coming soon/i.test(html),
    `placeholder in ${file}`,
  );
}
assert.equal(files.length, 18);
console.log(
  `PASS: ${files.length} HTML pages; ${links} internal link/asset references; metadata, H1s, skip targets, image attributes, structured data and preview noindex.`,
);
