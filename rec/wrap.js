const fs=require('fs'),path=require('path');
const src=process.argv[2], out=process.argv[3];
const body=fs.readFileSync(src,'utf8');
fs.writeFileSync(out,`<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><style>[hidden]{display:none!important}body{margin:0}</style></head><body>${body}</body></html>`);
