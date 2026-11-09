/* ---------------- shoe svg ---------------- */
const UPPER="M150 168 C175 160 215 180 250 192 C290 203 335 185 372 170 L392 168 C450 182 540 196 615 222 C690 246 742 268 756 300 C764 322 758 342 730 348 L150 348 C132 338 126 292 130 250 C133 210 140 182 150 168 Z";
const QUARTER="M150 168 C175 160 215 180 250 192 C290 203 335 185 372 170 L392 168 C420 186 452 206 478 222 C474 262 446 306 408 348 L150 348 C132 338 126 292 130 250 C133 210 140 182 150 168 Z";
const HEELC="M131 244 C165 236 208 244 236 262 C258 278 262 316 254 348 L150 348 C132 338 126 292 131 244 Z";
const SOLE="M124 338 L748 342 C774 344 784 362 766 374 C744 386 640 388 520 388 L150 388 C130 388 118 378 118 360 C118 350 120 343 124 338 Z";
const EYE=[[400,183],[420,195],[439,208],[458,220]];
function shoeSVG(k){
  const laces=EYE.map(([x,y])=>`<path class="lace" d="M${x} ${y} L${x+17} ${y-13}" stroke-width="5" stroke-linecap="round" fill="none"/>`).join('');
  const eyes=EYE.map(([x,y])=>`<circle cx="${x}" cy="${y}" r="4.3" fill="#1a1715" stroke="#b9ad9c" stroke-width="1.3"/>`).join('');
  return `<svg class="shoe" viewBox="96 118 700 292" aria-hidden="true">
<defs>
<clipPath id="up${k}"><path d="${UPPER}"/></clipPath>
<clipPath id="so${k}"><path d="${SOLE}"/></clipPath>
<linearGradient id="sv${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset=".42" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".42"/></linearGradient>
<linearGradient id="sh${k}" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".38"/><stop offset=".17" stop-color="#000" stop-opacity="0"/><stop offset=".82" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".3"/></linearGradient>
<radialGradient id="gl${k}"><stop offset="0" stop-color="#fff" stop-opacity=".8"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
<linearGradient id="sg${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".3"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></linearGradient>
<filter id="fn${k}" filterUnits="userSpaceOnUse" x="100" y="118" width="780" height="292"><feTurbulence type="fractalNoise" baseFrequency=".75" numOctaves="2" seed="4"/><feColorMatrix type="saturate" values="0"/></filter>
<filter id="pb${k}" filterUnits="userSpaceOnUse" x="100" y="118" width="780" height="292"><feTurbulence type="turbulence" baseFrequency=".11" numOctaves="2" seed="9"/><feColorMatrix type="saturate" values="0"/></filter>
<filter id="sd${k}" filterUnits="userSpaceOnUse" x="100" y="118" width="780" height="292"><feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="3" seed="2"/><feColorMatrix type="saturate" values="0"/></filter>
<filter id="ed${k}" x="-5%" y="-5%" width="110%" height="110%"><feDropShadow dx="2.5" dy="1.5" stdDeviation="1.6" flood-color="#000" flood-opacity=".45"/></filter>
<filter id="bl${k}" x="-20%" y="-200%" width="140%" height="500%"><feGaussianBlur stdDeviation="9"/></filter>
</defs>
<ellipse cx="445" cy="392" rx="335" ry="13" fill="#000" opacity=".3" filter="url(#bl${k})"/>
<path d="M152 166 C177 157 216 176 251 188 C291 199 334 181 371 166" fill="none" stroke="#d8c7ab" stroke-width="7" stroke-linecap="round"/>
<path class="lc" d="M370 172 C374 154 390 146 408 147 C428 149 440 160 444 176 L478 220 L392 168 Z"/>
<path d="M370 172 C374 154 390 146 408 147 C428 149 440 160 444 176 L478 220 L392 168 Z" fill="#000" opacity=".22"/>
<path class="lc" d="${UPPER}"/>
<path class="lc" d="${QUARTER}" filter="url(#ed${k})"/>
<path class="lc" d="${HEELC}" filter="url(#ed${k})"/>
<g clip-path="url(#up${k})">
 <rect class="tx tx-fine" x="100" y="118" width="780" height="292" filter="url(#fn${k})" style="mix-blend-mode:overlay"/>
 <rect class="tx tx-pebble" x="100" y="118" width="780" height="292" filter="url(#pb${k})" style="mix-blend-mode:overlay"/>
 <rect class="tx tx-suede" x="100" y="118" width="780" height="292" filter="url(#sd${k})" style="mix-blend-mode:soft-light"/>
 <rect x="100" y="118" width="780" height="292" fill="url(#sv${k})"/>
 <rect x="100" y="118" width="780" height="292" fill="url(#sh${k})"/>
 <g class="gloss">
  <ellipse cx="690" cy="252" rx="64" ry="13" transform="rotate(20 690 252)" fill="url(#gl${k})"/>
  <ellipse cx="530" cy="200" rx="72" ry="6" transform="rotate(12 530 200)" fill="url(#gl${k})" opacity=".7"/>
  <ellipse cx="150" cy="232" rx="10" ry="46" fill="url(#gl${k})" opacity=".8"/>
  <ellipse cx="300" cy="198" rx="60" ry="4" transform="rotate(-6 300 198)" fill="url(#gl${k})" opacity=".6"/>
 </g>
</g>
<g fill="none" stroke-width="1.6" stroke-dasharray="5 4" class="thread">
 <path class="thread" d="M386 175 C413 192 443 211 469 227 C465 263 439 303 401 343"/>
 <path class="thread" d="M154 175 C178 168 216 186 251 198 C290 209 333 192 368 178"/>
 <path class="thread" d="M137 252 C168 245 204 252 228 268 C247 282 251 314 245 343"/>
</g>
${laces}${eyes}
<path class="lace" d="M402 171 C382 150 362 156 372 171 C380 180 394 177 402 171 M402 171 C421 149 446 151 438 166 C432 177 414 177 402 171 M402 171 C396 189 387 204 381 221 M402 171 C409 191 405 209 411 227" fill="none" stroke-width="4.2" stroke-linecap="round"/>
<circle cx="402" cy="171" r="4.5" class="lace" stroke-width="3" fill="none"/>
<path class="sole" d="${SOLE}"/>
<g clip-path="url(#so${k})"><rect x="100" y="330" width="780" height="70" fill="url(#sg${k})"/></g>
<path d="M126 339 L748 343" stroke="#fff" stroke-opacity=".5" stroke-width="1.5" fill="none"/>
<path d="M140 352 L752 356" stroke="#000" stroke-opacity=".3" stroke-width="1.5" stroke-dasharray="5 5" fill="none"/>
<path d="M128 380 L520 383 C640 383 735 380 768 372" stroke="#000" stroke-opacity=".28" stroke-width="3" fill="none"/>
</svg>`;
}

/* ---------------- insole svg ---------------- */
const INS="M150 20 C215 20 255 70 262 150 C268 230 250 300 236 370 C226 420 232 470 236 520 C242 600 210 670 150 680 C92 690 62 640 64 570 C66 500 82 450 84 400 C86 350 52 290 46 210 C40 110 80 20 150 20 Z";
function insoleSVG(){
  let layers='';
  for(let i=7;i>=1;i--) layers+=`<svg viewBox="0 0 300 700" style="transform:translateZ(${-i*2.2}px)"><path class="edge" d="${INS}"/></svg>`;
  const anchors=[['a-perf',190,215],['a-arch',78,410],['a-heel',150,595]];
  let anc=anchors.map(([id,x,y])=>`<div class="anc" id="${id}" style="left:${x/3}%;top:${y/7}%"></div>`).join('');
  return `<svg viewBox="0 0 300 700" class="floorshadow" style="transform:translateZ(-40px) translate(14px,22px)"><path d="${INS}" fill="#000"/></svg>
${layers}
<svg viewBox="0 0 300 700" class="insole" style="transform:translateZ(0)">
<defs>
<clipPath id="insc"><path d="${INS}"/></clipPath>
<pattern id="perf" width="17" height="17" patternUnits="userSpaceOnUse" patternTransform="rotate(30)"><circle cx="8.5" cy="8.5" r="2.5" fill="#06173a" fill-opacity=".6"/></pattern>
<pattern id="mesh" width="5" height="5" patternUnits="userSpaceOnUse"><path d="M0 5 L5 0" stroke="#fff" stroke-opacity=".09" stroke-width="1"/></pattern>
<radialGradient id="insShade" cx=".45" cy=".38" r=".75"><stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></radialGradient>
<radialGradient id="gelG"><stop offset="0" stop-color="#FFC75A" stop-opacity=".95"/><stop offset=".7" stop-color="#FFB02E" stop-opacity=".55"/><stop offset="1" stop-color="#FFB02E" stop-opacity="0"/></radialGradient>
<radialGradient id="archG"><stop offset="0" stop-color="#9FD1FF" stop-opacity=".95"/><stop offset="1" stop-color="#9FD1FF" stop-opacity="0"/></radialGradient>
</defs>
<path id="insMain" d="${INS}" fill="var(--insole)"/>
<g clip-path="url(#insc)">
 <rect width="300" height="700" fill="url(#mesh)"/>
 <rect class="perf" width="300" height="700" fill="url(#perf)"/>
 <ellipse class="z-arch" cx="66" cy="405" rx="62" ry="125" fill="url(#archG)"/>
 <ellipse class="z-heel" cx="150" cy="592" rx="80" ry="70" fill="url(#gelG)"/>
 <ellipse cx="150" cy="592" rx="70" ry="62" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width="2"/>
 <rect width="300" height="700" fill="url(#insShade)"/>
</g>
<path d="${INS}" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="3"/>
<text x="150" y="505" text-anchor="middle" fill="#fff" fill-opacity=".9" style="font:800 30px var(--font-display);font-stretch:125%;letter-spacing:2px">REXELL</text>
<text class="badge" x="150" y="536" text-anchor="middle" fill="#fff" fill-opacity=".8" style="font:500 13px var(--font-mono);letter-spacing:2px">HIGIENE ACTIVA</text>
</svg>${anc}<div id="ptAnchors"></div>`;
}

