import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(process.argv[2]||'site');
function files(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const all=files(root),html=all.filter(p=>p.endsWith('.html'));let refs=0;const errors=[];
for(const file of all){if(!/\.(html|css|js|svg)$/.test(file))continue;const text=fs.readFileSync(file,'utf8');
 if(file.endsWith('.html')){if(!/<title>[^<]+<\/title>/i.test(text))errors.push(`${file}: missing title`);if(!/<body/i.test(text))errors.push(`${file}: missing body`);}
 const matches=[...text.matchAll(/(?:href|src|poster)=["']([^"']+)["']/g),...text.matchAll(/url\(["']?([^\s)'";]+)["']?\)/g)];
 for(const m of matches){const ref=m[1].replaceAll('&amp;','&');if(!ref.startsWith('/')||ref.startsWith('//'))continue;const p=path.join(root,decodeURIComponent(ref.split(/[?#]/)[0]));if(!fs.existsSync(p))errors.push(`${path.relative(root,file)}: missing ${ref}`);else if(fs.statSync(p).isDirectory()&&!fs.existsSync(path.join(p,'index.html')))errors.push(`${file}: incomplete route ${ref}`);refs++;}
}
if(html.length<80)errors.push(`Expected full page set; found ${html.length}`);
if(errors.length){console.error(errors.join('\n'));process.exit(1);}console.log(`PASS: ${html.length} HTML documents and ${refs} local asset/link references.`);
