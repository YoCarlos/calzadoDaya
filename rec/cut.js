// Corta las escenas 2–5 de cada grabación y arma el animatic de 15 s.
const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const V=process.argv[2]; // carpeta video
const ff=a=>execFileSync('ffmpeg',['-y','-loglevel','error',...a]);
const enc=['-c:v','libx264','-preset','slow','-crf','17','-pix_fmt','yuv420p','-r','30','-an'];
const esc=path.join(V,'escenas'); fs.mkdirSync(esc,{recursive:true});
const tmp=path.join(V,'tmp'); fs.mkdirSync(tmp,{recursive:true});

for(const variant of ['clean','frame']){
  const {marks:m,span}=JSON.parse(fs.readFileSync(path.join(V,`marks-${variant}.json`)));
  const src=path.join(V,`rexell-demo-${variant}.mp4`);
  const parts=[['escena2-descubrimiento',0,m.s3],['escena3-estetica',m.s3,m.s4],['escena4-confort',m.s4,m.s5],['escena5-confirmacion',m.s5,span]];
  for(const [name,a,b] of parts) ff(['-ss',a.toFixed(3),'-to',b.toFixed(3),'-i',src,...enc,path.join(esc,`${name}-${variant}.mp4`)]);
}

// ---- animatic ----
const {marks:m}=JSON.parse(fs.readFileSync(path.join(V,'marks-frame.json')));
const ui=path.join(V,'rexell-demo-frame.mp4');
const P=n=>path.join(V,'panels',`p${n}.png`);
const segs=[];
let k=0;
function still(img,dur,label){
  const out=path.join(tmp,`s${k++}.mp4`); const fr=Math.round(dur*30);
  if(!label){ ff(['-loop','1','-i',img,'-vf','scale=1920:1080,fps=30','-frames:v',String(fr),...enc,out]); segs.push(out); return; }
  const txt=`,drawtext=text='${label}':x=48:y=h-80:fontsize=30:fontcolor=white:box=1:boxcolor=black@0.55:boxborderw=14:fontfile='C\\:/Windows/Fonts/arial.ttf'`;
  ff(['-loop','1','-i',img,'-filter_complex',
    `[0]split[a][b];[a]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,boxblur=30:3,eq=brightness=-0.08[bg];`+
    `[b]scale=-2:1080,zoompan=z='1+0.06*on/${fr}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${fr}:s=1076x1080:fps=30[fg];`+
    `[bg][fg]overlay=(W-w)/2:0${txt}`,'-frames:v',String(fr),...enc,out]);
  segs.push(out);
}
function clip(a,b,speed){
  const out=path.join(tmp,`s${k++}.mp4`);
  ff(['-ss',a.toFixed(3),'-to',b.toFixed(3),'-i',ui,'-vf',`setpts=PTS/${speed},fps=30`,...enc,out]);
  segs.push(out);
}
still(P(1),2.0,'1 · Rutina y fatiga (toma IA)');
still(P(2),0.7,'2 · Descubrimiento (toma IA)');
clip(1.6,3.2,2);                       // clic en "Diseñar mi par"
clip(m.s3+0.9,m.s3+6.9,3);             // cambio de color
clip(m.s4,m.s4+6,3);                   // confort / Higiene activa
clip(m.s5_modal-0.2,m.s5_modal+1.0,2); // pedido confirmado
still(P(5),0.9,'5 · Empaque (toma IA)');
still(P(6),2.0,'6 · Entrega y unboxing (toma IA)');
still(P(7),2.0,'7 · Inspección de calidad (toma IA)');
still(P(8),1.4,'8 · Uso y confort (toma IA)');
still(path.join(V,'panels','endcard.png'),0.6,'');
fs.writeFileSync(path.join(tmp,'list.txt'),segs.map(s=>`file '${s.replace(/\\/g,'/')}'`).join('\n'));
ff(['-f','concat','-safe','0','-i',path.join(tmp,'list.txt'),...enc,'-movflags','+faststart',path.join(V,'rexell-animatic-15s.mp4')]);
console.log('ok');
