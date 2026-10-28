(function(){
// Realistic insulation resistance test drawings: an insulation tester with leads and clips, and shaded cables.
// irtest: three tests on a flat twin and earth cable. irtestcable: each core of a three-core screened cable in turn.
// Text uses inline styles so it stays readable in light and dark themes (the drawings sit on their own light panels).
const TX=(x,y,s,o)=>{o=o||{};return `<text x="${x}" y="${y}"${o.a?` text-anchor="${o.a}"`:''} style="fill:${o.c||'#0f172a'};stroke:none;font-size:${o.s||12}px;font-weight:${o.w||600};${o.f?'font-family:'+o.f+';':''}${o.i?'font-style:italic;':''}">${s}</text>`};
const rounded=(pts,r)=>{let d=`M${pts[0][0]} ${pts[0][1]}`;for(let i=1;i<pts.length-1;i++){const a=pts[i-1],b=pts[i],c=pts[i+1];const l1=Math.hypot(b[0]-a[0],b[1]-a[1]),l2=Math.hypot(c[0]-b[0],c[1]-b[1]),k=Math.min(r,l1/2,l2/2);d+=` L${b[0]-(b[0]-a[0])/l1*k} ${b[1]-(b[1]-a[1])/l1*k} Q${b[0]} ${b[1]} ${b[0]+(c[0]-b[0])/l2*k} ${b[1]+(c[1]-b[1])/l2*k}`}const z=pts[pts.length-1];return d+` L${z[0]} ${z[1]}`};
const lead=(pts,col)=>{const d=rounded(pts,14);return `<path d="${d}" fill="none" stroke="#0b1220" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${col}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="1.4" stroke-linecap="round" transform="translate(-1.2 -1.2)"/>`};
// crocodile clip with its tip at (x,y), pointing right (rot 0), up (-90) or down (90)
const clip=(x,y,col,rot)=>`<g transform="translate(${x} ${y}) rotate(${rot||0})"><rect x="-36" y="-8" width="28" height="16" rx="6" fill="${col}" stroke="#0b1220" stroke-width="1.6"/><rect x="-33" y="-6" width="22" height="4" rx="2" fill="rgba(255,255,255,.35)"/><path d="M-8 -6 L16 -3.4 L16 -1 L-8 1.5Z" fill="#cbd5e1" stroke="#475569" stroke-width=".9"/><path d="M-8 6 L16 3.4 L16 1 L-8 -1.5Z" fill="#94a3b8" stroke="#475569" stroke-width=".9"/></g>`;
const grads=p=>`
<linearGradient id="${p}yel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset=".5" stop-color="#facc15"/><stop offset="1" stop-color="#c99a06"/></linearGradient>
<linearGradient id="${p}boot" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4b5563"/><stop offset="1" stop-color="#1f2937"/></linearGradient>
<radialGradient id="${p}knob" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#6b7280"/><stop offset="1" stop-color="#111827"/></radialGradient>
<radialGradient id="${p}btn" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#fca5a5"/><stop offset=".6" stop-color="#dc2626"/><stop offset="1" stop-color="#7f1d1d"/></radialGradient>
<linearGradient id="${p}cu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde3b4"/><stop offset=".4" stop-color="#d9903f"/><stop offset="1" stop-color="#7c4a16"/></linearGradient>
<linearGradient id="${p}brn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9a066"/><stop offset=".45" stop-color="#8b5a2b"/><stop offset="1" stop-color="#4a2c12"/></linearGradient>
<linearGradient id="${p}blu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#93c5fd"/><stop offset=".45" stop-color="#2f6fe0"/><stop offset="1" stop-color="#1e3a8a"/></linearGradient>
<linearGradient id="${p}blk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b7280"/><stop offset=".45" stop-color="#1f2937"/><stop offset="1" stop-color="#030712"/></linearGradient>
<linearGradient id="${p}gry" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3f4f6"/><stop offset=".45" stop-color="#9ca3af"/><stop offset="1" stop-color="#5b6470"/></linearGradient>
<linearGradient id="${p}shg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f8fafc"/><stop offset=".5" stop-color="#cbd5e1"/><stop offset="1" stop-color="#8b9bb0"/></linearGradient>
<linearGradient id="${p}shk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b7280"/><stop offset=".5" stop-color="#1f2937"/><stop offset="1" stop-color="#030712"/></linearGradient>
<pattern id="${p}braid" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(40)"><rect width="7" height="7" fill="#dbe3ee"/><path d="M0 1.5H7M0 5H7" stroke="#7b8aa0" stroke-width="1.3"/><path d="M2 0V7M5.5 0V7" stroke="#a9b6c8" stroke-width="1.3"/></pattern>
<filter id="${p}sh" x="-10%" y="-10%" width="130%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="2.2" flood-color="#0f172a" flood-opacity=".28"/></filter>
`;
const defs=p=>`<defs>${grads(p)}${tester(p,false)}${tester(p,true)}</defs>`;
// the tester, drawn in a 220 x 150 box. Sockets E, (G), L sit at the bottom.
function tester(p,withG){
 const socks=withG?[[44,'#111827','E'],[110,'#16a34a','G'],[176,'#dc2626','L']]:[[62,'#111827','E'],[158,'#dc2626','L']];
 let ticks='';for(let a=-150;a<=150;a+=30){const r=a*Math.PI/180,x1=168+Math.sin(r)*27,y1=52-Math.cos(r)*27,x2=168+Math.sin(r)*31,y2=52-Math.cos(r)*31;ticks+=`<path d="M${x1} ${y1}L${x2} ${y2}" stroke="#e5e7eb" stroke-width="1.4"/>`}
 const t=(x,y,s,o)=>TX(x,y,s,Object.assign({s:7,w:700,c:'#1f2937'},o||{}));
 return `<g id="${p}t${withG?'g':'e'}">
 <rect x="0" y="0" width="220" height="150" rx="18" fill="url(#${p}boot)"/>
 <rect x="9" y="9" width="202" height="132" rx="12" fill="url(#${p}yel)" stroke="#9a6f04" stroke-width="1.5"/>
 ${t(110,19,'INSULATION TESTER',{a:'middle',s:7.5})}
 <rect x="20" y="24" width="112" height="48" rx="6" fill="#111827"/><rect x="24" y="28" width="104" height="40" rx="3" fill="#c9ddc0" stroke="#0f172a" stroke-width=".8"/>
 <circle cx="168" cy="54" r="33" fill="#374151" stroke="#0b1220" stroke-width="2"/>${ticks}
 <circle cx="168" cy="54" r="23" fill="url(#${p}knob)" stroke="#0b1220" stroke-width="1.5"/>
 <path d="M168 54L178 37" stroke="#fde047" stroke-width="4.2" stroke-linecap="round"/><circle cx="168" cy="54" r="5" fill="#1f2937"/>
 ${t(180,99,'INS 500 V',{a:'middle',s:7})}
 <circle cx="52" cy="96" r="14" fill="url(#${p}btn)" stroke="#5b1414" stroke-width="2"/>${t(52,99,'TEST',{a:'middle',c:'#fff',s:6.5})}
 <rect x="82" y="86" width="30" height="14" rx="4" fill="#9ca3af" stroke="#4b5563"/>${t(97,96,'MODE',{a:'middle',s:6.5})}
 <rect x="118" y="86" width="30" height="14" rx="4" fill="#9ca3af" stroke="#4b5563"/>${t(133,96,'LOCK',{a:'middle',s:6.5})}
 ${socks.map(s=>`<circle cx="${s[0]}" cy="119" r="10.5" fill="${s[1]}" stroke="#0b1220" stroke-width="1.5"/><circle cx="${s[0]}" cy="119" r="5.5" fill="#030712"/><circle cx="${s[0]}" cy="119" r="2" fill="#6b7280"/>${t(s[0],139,s[2],{a:'middle',s:9})}`).join('')}
 </g>`}
const testerAt=(p,g,x,y,s,top,big,unit)=>`<use href="#${p}t${g?'g':'e'}" transform="translate(${x} ${y}) scale(${s})" filter="url(#${p}sh)"/><g transform="translate(${x} ${y}) scale(${s})">${TX(29,39,'DC 500 V',{s:7,c:'#1f2937',w:700,f:'monospace'})}${TX(29,63,big,{s:20,c:'#14231a',w:700,f:'monospace'})}${TX(121,63,unit,{s:9,c:'#14231a',w:700,a:'end'})}${top?TX(124,39,top,{s:7,c:'#1f2937',w:700,a:'end'}):''}</g>`;
const panel=(y,h,title,sub)=>`<rect x="4" y="${y}" width="632" height="${h}" rx="12" fill="#f4f7fb" stroke="#c3cedc"/>${TX(20,y+25,title,{s:15,w:800})}${sub?TX(20,y+43,sub,{s:11,c:'#475569',w:600}):''}`;
const cu=(p,x,y,w,h)=>`<rect x="${x}" y="${y-h/2}" width="${w}" height="${h}" rx="${h/2}" fill="url(#${p}cu)" stroke="#6b3d10" stroke-width=".8"/>`;
const core=(p,gr,x0,x1,y,h)=>`<rect x="${x0}" y="${y-h/2}" width="${x1-x0}" height="${h}" rx="${h/2}" fill="url(#${p}${gr})" stroke="#111827" stroke-opacity=".55" stroke-width=".9"/>`;

/* ---------- Figure 1: three insulation tests on a flat twin and earth cable ---------- */
function irtest(){
 const p='ir1';let s=defs(p);
 s+=TX(20,24,'Insulation resistance tests on a flat twin and earth cable (circuit isolated, 500 V DC)',{s:13,w:800});
 const tests=[
  ['Test 1: Line (brown) to earth','Red lead on the line conductor, black lead on the earth (CPC). Neutral left free.',0,2,'>999','MΩ'],
  ['Test 2: Neutral (blue) to earth','Red lead on the neutral conductor, black lead on the earth (CPC). Line left free.',1,2,'>999','MΩ'],
  ['Test 3: Line (brown) to neutral (blue)','Red lead on the line conductor, black lead on the neutral conductor.',0,1,'>999','MΩ']];
 tests.forEach((t,i)=>{
  const py=38+i*228,y=[py+92,py+116,py+140],tx=22,ty=py+52,S=.82;
  s+=panel(py,216,t[0],t[1]);
  // cable: grey PVC sheath running off to the right, three conductors stripped back to the left
  s+=`<g filter="url(#${p}sh)"><rect x="432" y="${py+66}" width="196" height="92" rx="16" fill="url(#${p}shg)" stroke="#7b8aa0" stroke-width="1.2"/></g>`;
  s+=core(p,'brn',372,436,y[0],13)+core(p,'blu',372,436,y[1],13)+`<rect x="352" y="${y[2]-3.5}" width="84" height="7" rx="3.5" fill="url(#${p}cu)" stroke="#6b3d10" stroke-width=".8"/>`;
  s+=cu(p,346,y[0],28,7)+cu(p,346,y[1],28,7);
  s+=TX(452,y[0]+4,'Line (brown)',{s:11})+TX(452,y[1]+4,'Neutral (blue)',{s:11})+TX(452,y[2]+4,'Earth (bare CPC)',{s:11});
  // leads: red from L, black from E, ending at clips on the copper
  const eX=tx+S*62,lX=tx+S*158,sy=ty+S*134,rY=y[t[2]],bY=y[t[3]];
  s+=lead([[eX,sy],[eX,py+206],[304,py+206],[304,bY],[322,bY]],'#1f2937');
  s+=lead([[lX,sy],[lX,py+190],[264,py+190],[264,rY],[322,rY]],'#dc2626');
  s+=clip(358,bY,'#1f2937')+clip(358,rY,'#dc2626');
  s+=testerAt(p,false,tx,ty,S,'',t[4],t[5]);
  s+=TX(430,py+190,'Reads above 200 MΩ: PASS',{s:12,c:'#166534',w:800})+TX(430,py+206,'(minimum 1 MΩ at 500 V DC)',{s:11,c:'#475569'});
 });
 const fy=38+3*228;
 s+=`<rect x="4" y="${fy}" width="632" height="86" rx="12" fill="#fffbe6" stroke="#e7d37a"/>`+
  TX(20,fy+24,'Before testing: isolate and prove dead, lamps out, switches closed, electronic equipment disconnected.',{s:12})+
  TX(20,fy+44,'You can also link line and neutral together and test both to earth in one go (Test 1 and 2 combined),',{s:12})+
  TX(20,fy+62,'but still test line to neutral separately. Repeat for every circuit at the distribution board.',{s:12});
 return `<svg viewBox="0 0 640 ${fy+96}" width="100%" role="img" aria-label="Insulation resistance tests on a twin and earth cable using an insulation tester">${s}</svg>`;
}

/* ---------- Figure 2: each core of a three-core screened cable tested in turn ---------- */
function irtestcable(){
 const p='ir2';let s=defs(p);
 s+=TX(20,24,'Insulation resistance of a multi-core screened cable: each core in turn',{s:13,w:800});
 const names=['brown','black','grey'],tests=[0,1,2];
 tests.forEach(i=>{
  const py=38+i*246,y=[py+90,py+120,py+150],tx=22,ty=py+52,S=.82;
  s+=panel(py,234,'Test '+'ABC'[i]+': '+names[i][0].toUpperCase()+names[i].slice(1)+' core under test','Red lead on this core; the other cores, braid and sheath are joined on the black lead.');
  // cable: black sheath on the right, silver braid, then three cores
  s+=`<g filter="url(#${p}sh)"><rect x="504" y="${py+64}" width="124" height="108" rx="14" fill="url(#${p}shk)" stroke="#030712" stroke-width="1.2"/><rect x="474" y="${py+72}" width="34" height="92" rx="6" fill="url(#${p}braid)" stroke="#64748b" stroke-width="1.2"/></g>`;
  const gr=['brn','blk','gry'];
  s+=`<rect x="372" y="${y[0]-7}" width="106" height="14" rx="7" fill="url(#${p}${gr[0]})" stroke="#111827" stroke-opacity=".55" stroke-width=".9"/><rect x="372" y="${y[1]-7}" width="106" height="14" rx="7" fill="url(#${p}${gr[1]})" stroke="#111827" stroke-opacity=".55" stroke-width=".9"/><rect x="372" y="${y[2]-7}" width="106" height="14" rx="7" fill="url(#${p}${gr[2]})" stroke="#111827" stroke-opacity=".55" stroke-width=".9"/>`;
  y.forEach(yy=>{s+=cu(p,346,yy,30,7)});
  s+=TX(514,y[0]+4,'Brown core',{s:11,c:'#f8fafc'})+TX(514,y[1]+4,'Black core',{s:11,c:'#f8fafc'})+TX(514,y[2]+4,'Grey core',{s:11,c:'#f8fafc'});
  s+=TX(512,py+192,'Braid and sheath',{s:11,c:'#334155'});
  // leads
  const eX=tx+S*44,lX=tx+S*176,sy=ty+S*134,rY=y[i];
  const others=[0,1,2].filter(k=>k!==i);
  const jumper=[];let bar='',braidWire='',eEnd,clipR;
  if(i===0){ // others are y1,y2
    bar=[[350,y[1]],[338,y[1]],[338,y[2]],[350,y[2]]];eEnd=[338,(y[1]+y[2])/2];
    braidWire=lead([[338,y[2]],[338,py+196],[490,py+196],[490,py+170]],'#1f2937')+clip(490,py+166,'#1f2937',-90);
  } else if(i===1){ // others are y0,y2, bracket goes around the left of the red clip
    bar=[[350,y[0]],[316,y[0]],[316,y[2]],[350,y[2]]];eEnd=[316,y[2]];
    braidWire=lead([[330,y[2]],[330,py+196],[490,py+196],[490,py+170]],'#1f2937')+clip(490,py+166,'#1f2937',-90);
  } else { // others are y0,y1
    bar=[[350,y[0]],[338,y[0]],[338,y[1]],[350,y[1]]];eEnd=[338,(y[0]+y[1])/2];
    braidWire=lead([[338,y[0]],[338,py+62],[490,py+62],[490,py+68]],'#1f2937')+clip(490,py+80,'#1f2937',90);
  }
  s+=`<path d="M${bar.map(b=>b.join(' ')).join(' L')}" fill="none" stroke="#0b1220" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><path d="M${bar.map(b=>b.join(' ')).join(' L')}" fill="none" stroke="#6b7280" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>`;
  s+=braidWire;
  s+=lead([[tx+S*44,sy],[tx+S*44,py+216],[eEnd[0]<330?eEnd[0]:300,py+216],[eEnd[0]<330?eEnd[0]:300,eEnd[1]],[eEnd[0],eEnd[1]]],'#1f2937');
  s+=lead([[lX,sy],[lX,py+206],[262,py+206],[262,rY],[322,rY]],'#dc2626')+clip(358,rY,'#dc2626');
  s+=testerAt(p,true,tx,ty,S,'',' >999','MΩ');
 });
 const fy=38+3*246;
 s+=`<rect x="4" y="${fy}" width="632" height="88" rx="12" fill="#fffbe6" stroke="#e7d37a"/>`+
  TX(20,fy+24,'Repeat for every core. A reading above the minimum (for example 1 MΩ at the',{s:12})+
  TX(20,fy+44,'cable test voltage) shows the insulation between that core and all the others',{s:12})+
  TX(20,fy+64,'and the screen is sound. The G (guard) socket is not used in this test.',{s:12});
 return `<svg viewBox="0 0 640 ${fy+98}" width="100%" role="img" aria-label="Insulation resistance test of a three-core screened cable, one core at a time">${s}</svg>`;
}

window.DRAW={TX,rounded,lead,clip,cu,core,panel,grads,tester,testerAt,defs};
Z.figs.irtest=irtest();Z.figs.irtestcable=irtestcable();
Object.assign(Z.names,{irtest:'Insulation resistance test: line, neutral and earth',irtestcable:'Insulation resistance test of a multi-core cable'});
Object.assign(Z.tasks,{irtest:'Draw the three insulation resistance tests on a twin and earth cable: line to earth, neutral to earth and line to neutral. Show the tester and which lead goes where.',irtestcable:'Draw how each core of a three-core screened cable is tested: one core on the L lead, the other cores, the braid and the sheath joined on the E lead. Repeat for each core.'});
Object.assign(Z.marks,{irtest:['Insulation tester with an L lead and an E lead','Test 1: line to earth with the neutral left free','Test 2: neutral to earth with the line left free','Test 3: line to neutral; 500 V DC and minimum 1 MΩ noted'],irtestcable:['Core under test on the L lead','The other cores joined together on the E lead','Braid and sheath joined to the E lead','Test repeated for each core in turn']});
const fig=(id,k)=>{const m=Z.mods.find(x=>x.id===id);if(m){m.f=m.f||[];if(!m.f.includes(k))m.f.push(k)}};
['cg304a','cg204b','intb'].forEach(id=>fig(id,'irtest'));['cg304a','cg303b'].forEach(id=>fig(id,'irtestcable'));
})();
