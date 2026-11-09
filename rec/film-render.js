// Renderiza film.html cuadro a cuadro. Uso: node film-render.js <film.html> <outdir> [fps] [t1,t2,...]
const puppeteer=require('puppeteer-core'),fs=require('fs'),path=require('path');
const [,,file,out,fpsArg='30',only]=process.argv; const FPS=+fpsArg;
fs.mkdirSync(out,{recursive:true});
(async()=>{
  const b=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--hide-scrollbars','--force-color-profile=srgb','--autoplay-policy=no-user-gesture-required']});
  const p=await b.newPage(); p.on('pageerror',e=>console.error('PAGEERR',e.message)); p.on('console',m=>{if(m.type()==='error')console.error('CONSOLE',m.text())});
  await p.setViewport({width:1920,height:1080,deviceScaleFactor:1});
  await p.goto('file:///'+file,{waitUntil:'networkidle0'});
  await p.evaluate(()=>window.ready);
  const c=await p.createCDPSession();
  const times=only?only.split(',').map(Number):[...Array(Math.round(15*FPS)).keys()].map(i=>i/FPS);
  for(let i=0;i<times.length;i++){
    await p.evaluate(t=>window.seek(t),times[i]);
    const {data}=await c.send('Page.captureScreenshot',{format:only?'png':'jpeg',quality:only?undefined:95});
    fs.writeFileSync(path.join(out,only?`t${times[i].toFixed(2)}.png`:`f${String(i).padStart(5,'0')}.jpg`),Buffer.from(data,'base64'));
    if(!only&&i%60===0) console.log('frame',i);
  }
  await b.close();
})().catch(e=>{console.error(e);process.exit(1)});
