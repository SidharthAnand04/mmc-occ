import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve(process.argv[2]||'site');
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.woff2':'font/woff2','.ttf':'font/ttf','.xml':'application/xml'};
http.createServer(async(req,res)=>{try{let p=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!p.startsWith(root+path.sep)&&p!==root)throw Error();if((await stat(p)).isDirectory())p=path.join(p,'index.html');res.setHeader('Content-Type',types[path.extname(p)]||'application/octet-stream');res.end(await readFile(p));}catch{res.writeHead(404,{'Content-Type':'text/html'});try{res.end(await readFile(path.join(root,'404.html')));}catch{res.end('<h1>Page not found</h1><a href="/">Home</a>');}}}).listen(Number(process.env.PORT||4321),'0.0.0.0',()=>console.log('Site: http://localhost:'+(process.env.PORT||4321)));
