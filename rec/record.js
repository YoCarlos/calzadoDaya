// Graba el modo demo de la landing cuadro a cuadro (en cámara lenta) y arma un MP4 fluido a 30 fps.
const puppeteer=require('puppeteer-core'),fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const [,,file,outDir,variant='clean',speedArg='0.2']=process.argv;
const SPEED=parseFloat(speedArg);
const frames=path.join(outDir,'frames-'+variant); fs.rmSync(frames,{recursive:true,force:true}); fs.mkdirSync(frames,{recursive:true});
(async()=>{
  const b=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--hide-scrollbars','--force-color-profile=srgb']});
  const p=await b.newPage(); p.on('pageerror',e=>console.error('PAGEERR',e.message));
  await p.emulateMediaFeatures([{name:'prefers-color-scheme',value:'light'}]);
  await p.setViewport({width:1920,height:1080,deviceScaleFactor:1});
  const q=`?demo&rec&speed=${SPEED}`+(variant==='frame'?'&frame':'');
  await p.goto('file:///'+file+q,{waitUntil:'networkidle0'});
  await p.evaluate(()=>document.fonts.ready); await new Promise(r=>setTimeout(r,800));
  const c=await p.createCDPSession(); await c.send('Animation.enable'); await c.send('Animation.setPlaybackRate',{playbackRate:SPEED});
  await p.evaluate(()=>{window.__startDemo();});
  const times=[]; let i=0, done=false;
  while(!done){
    const t1=await p.evaluate(()=>window.__dnow());
    const {data}=await c.send('Page.captureScreenshot',{format:'jpeg',quality:93,optimizeForSpeed:true});
    const [t2,d]=await p.evaluate(()=>[window.__dnow(),window.__demoDone]);
    fs.writeFileSync(path.join(frames,`f${String(i).padStart(5,'0')}.jpg`),Buffer.from(data,'base64'));
    times.push((t1+t2)/2); i++; done=d;
  }
  const marks=await p.evaluate(()=>window.__marks);
  await b.close();
  // concat list con duraciones reales (tiempo de demo)
  let list='';
  for(let k=0;k<times.length;k++){
    const dur=k<times.length-1?(times[k+1]-times[k])/1000:0.5;
    list+=`file 'f${String(k).padStart(5,'0')}.jpg'\nduration ${Math.max(dur,0.001).toFixed(4)}\n`;
  }
  list+=`file 'f${String(times.length-1).padStart(5,'0')}.jpg'\n`;
  fs.writeFileSync(path.join(frames,'list.txt'),list);
  const t0=times[0]; const M={}; for(const k in marks) M[k]=(marks[k]-t0)/1000;
  fs.writeFileSync(path.join(outDir,`marks-${variant}.json`),JSON.stringify({marks:M,frames:times.length,span:(times.at(-1)-t0)/1000},null,1));
  const out=path.join(outDir,`rexell-demo-${variant}.mp4`);
  execFileSync('ffmpeg',['-y','-loglevel','error','-f','concat','-safe','0','-i',path.join(frames,'list.txt'),'-vf','fps=30,scale=1920:1080:flags=lanczos,format=yuv420p','-c:v','libx264','-preset','slow','-crf','16','-an','-movflags','+faststart',out]);
  console.log(JSON.stringify({variant,frames:times.length,marks:M}));
})().catch(e=>{console.error(e);process.exit(1);});
