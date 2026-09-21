import { cp, mkdir, rm, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('site', 'dist', { recursive: true });
async function pages(dir) { const result=[]; for (const e of await readdir(dir,{withFileTypes:true})) {const p=path.join(dir,e.name);if(e.isDirectory()) result.push(...await pages(p));else if(e.name==='index.html')result.push('/'+p.slice(5,-10));} return result; }
const routes=await pages('site');
await writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+routes.map(r=>'<url><loc>https://mymedicalclinicmn.com'+r+'</loc></url>').join('')+'</urlset>');
await writeFile('dist/robots.txt','User-agent: *\nDisallow: /\n');
console.log(`Built ${routes.length} routes.`);
