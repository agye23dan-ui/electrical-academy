(function(){
// More realistic test drawings, in the same style as elec12.js: continuity (R1+R2 and R2), the ring final circuit test,
// loop impedance (Ze and Zs), RCD tests and a three-phase insulation test.
const D=window.DRAW;if(!D)return;
const {TX,lead,clip,cu,panel}=D;
const extra=p=>`
<linearGradient id="${p}wht" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dbe3ee"/></linearGradient>
<linearGradient id="${p}met" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e5e7eb"/><stop offset=".5" stop-color="#b8c0cc"/><stop offset="1" stop-color="#8b95a5"/></linearGradient>
<linearGradient id="${p}brs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset=".5" stop-color="#d4a017"/><stop offset="1" stop-color="#8a6508"/></linearGradient>
<linearGradient id="${p}dev" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#cbd5e1"/><stop offset=".3" stop-color="#ffffff"/><stop offset="1" stop-color="#cbd5e1"/></linearGradient>
<linearGradient id="${p}plg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4b5563"/><stop offset="1" stop-color="#111827"/></linearGradient>`;
// multifunction tester with the sockets along the TOP edge. socks: [[x,colour,label],...]
function mft(p,id,socks){
 const t=(x,y,s,o)=>TX(x,y,s,Object.assign({s:7,w:700,c:'#1f2937'},o||{}));
 return `<g id="${p}${id}">
 <rect x="0" y="0" width="220" height="150" rx="18" fill="url(#${p}boot)"/>
 <rect x="9" y="9" width="202" height="132" rx="12" fill="url(#${p}yel)" stroke="#9a6f04" stroke-width="1.5"/>
 ${t(110,23,'MULTIFUNCTION TESTER',{a:'middle',s:7.5})}
 ${socks.map(s=>`<circle cx="${s[0]}" cy="40" r="10.5" fill="${s[1]}" stroke="#0b1220" stroke-width="1.5"/><circle cx="${s[0]}" cy="40" r="5.5" fill="#030712"/><circle cx="${s[0]}" cy="40" r="2" fill="#6b7280"/>${t(s[0],59,s[2],{a:'middle',s:9})}`).join('')}
 <rect x="20" y="66" width="112" height="48" rx="6" fill="#111827"/><rect x="24" y="70" width="104" height="40" rx="3" fill="#c9ddc0" stroke="#0f172a" stroke-width=".8"/>
 <circle cx="170" cy="96" r="29" fill="#374151" stroke="#0b1220" stroke-width="2"/><circle cx="170" cy="96" r="21" fill="url(#${p}knob)" stroke="#0b1220" stroke-width="1.5"/>
 <path d="M170 96L180 80" stroke="#fde047" stroke-width="4" stroke-linecap="round"/><circle cx="170" cy="96" r="4.5" fill="#1f2937"/>
 <rect x="20" y="121" width="42" height="15" rx="4" fill="#dc2626" stroke="#7f1d1d"/>${t(41,131,'TEST',{a:'middle',c:'#fff',s:7})}
 <rect x="70" y="121" width="32" height="15" rx="4" fill="#9ca3af" stroke="#4b5563"/>${t(86,131,'MODE',{a:'middle',s:6.5})}
 <rect x="108" y="121" width="32" height="15" rx="4" fill="#9ca3af" stroke="#4b5563"/>${t(124,131,'LOCK',{a:'middle',s:6.5})}
 </g>`}
const mftAt=(p,id,x,y,S,top,big,unit)=>`<use href="#${p}${id}" transform="translate(${x} ${y}) scale(${S})" filter="url(#${p}sh)"/><g transform="translate(${x} ${y}) scale(${S})">${TX(28,80,top,{s:7,c:'#1f2937',w:700,f:'monospace'})}${TX(28,104,big,{s:20,c:'#14231a',w:700,f:'monospace'})}${TX(124,104,unit,{s:9,c:'#14231a',w:700,a:'end'})}</g>`;
// 13 A socket outlet (front view) with its L, N and E holes. Returns markup; hole centres are returned by sockHoles.
const sock=(p,x,y,w,label,below)=>{const k=w/92;return `<g filter="url(#${p}sh)"><rect x="${x}" y="${y}" width="${w}" height="${w}" rx="${12*k}" fill="url(#${p}wht)" stroke="#a3afbf" stroke-width="1.5"/><rect x="${x+8*k}" y="${y+8*k}" width="${w-16*k}" height="${w-16*k}" rx="${8*k}" fill="#f8fafc" stroke="#d3dbe6"/></g>`+
 [[x+10*k,y+w/2],[x+w-10*k,y+w/2]].map(c=>`<circle cx="${c[0]}" cy="${c[1]}" r="${3.5*k}" fill="#cbd5e1" stroke="#94a3b8"/><path d="M${c[0]-2.4*k} ${c[1]-2.4*k}L${c[0]+2.4*k} ${c[1]+2.4*k}" stroke="#64748b" stroke-width="1"/>`).join('')+
 `<rect x="${x+w/2-4*k}" y="${y+20*k}" width="${8*k}" height="${16*k}" rx="2" fill="#0f172a"/><rect x="${x+w/2-27*k}" y="${y+52*k}" width="${8*k}" height="${14*k}" rx="2" fill="#0f172a"/><rect x="${x+w/2+19*k}" y="${y+52*k}" width="${8*k}" height="${14*k}" rx="2" fill="#0f172a"/>`+
 TX(x+w/2,y+17*k,'E',{a:'middle',s:9*k+1,c:'#475569'})+TX(x+w/2-23*k,y+76*k,'N',{a:'middle',s:9*k+1,c:'#475569'})+TX(x+w/2+23*k,y+76*k,'L',{a:'middle',s:9*k+1,c:'#475569'})+(label?TX(x+w/2,below?y+w+15:y-8,label,{a:'middle',s:11}):'')};
const holes=(x,y,w)=>{const k=w/92;return {E:[x+w/2,y+28*k],N:[x+w/2-23*k,y+59*k],L:[x+w/2+23*k,y+59*k]}};
// consumer unit: devs = [[width,type,label,highlight],...]
const cuBox=(p,x,y,w,h,devs,title)=>{let s=`<g filter="url(#${p}sh)"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7" fill="url(#${p}met)" stroke="#6b7280" stroke-width="1.6"/><rect x="${x+8}" y="${y+10}" width="${w-16}" height="${h-20}" rx="4" fill="#e9edf3" stroke="#aab4c2"/></g>`;let dx=x+14;
 devs.forEach(d=>{const dh=h*.52,dy=y+h*.26;s+=`<rect x="${dx}" y="${dy}" width="${d[0]}" height="${dh}" rx="2.5" fill="url(#${p}dev)" stroke="${d[3]?'#ea580c':'#64748b'}" stroke-width="${d[3]?2.4:1}"/>`;
  if(d[1]==='main')s+=`<rect x="${dx+d[0]/2-6}" y="${dy+5}" width="12" height="${dh*.4}" rx="2" fill="#dc2626" stroke="#7f1d1d"/>`;else if(d[1]==='rcd')s+=`<rect x="${dx+d[0]/2-6}" y="${dy+5}" width="12" height="${dh*.34}" rx="2" fill="#111827"/><rect x="${dx+d[0]/2-4}" y="${dy+dh-16}" width="8" height="8" rx="2" fill="#2563eb" stroke="#1e3a8a"/>`;else s+=`<rect x="${dx+d[0]/2-4}" y="${dy+5}" width="8" height="${dh*.4}" rx="1.5" fill="#111827"/>`;
  s+=TX(dx+d[0]/2,dy+dh+10,d[2],{a:'middle',s:6.5,c:'#334155',w:700});dx+=d[0]+3});
 return s+(title?TX(x+w/2,y-6,title,{a:'middle',s:11,c:'#334155'}):'')};
// grey PVC cable drawn as a tube along a polyline
const tube=(pts,w)=>{const d=D.rounded(pts,16);return `<path d="${d}" fill="none" stroke="#64748b" stroke-width="${w+3}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="#cbd5e1" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="#f8fafc" stroke-width="${w*.3}" stroke-linecap="round" stroke-linejoin="round" transform="translate(-1.5 -2)"/>`};
// test probe with its tip at (x,y); rot 0 points right, 180 points left, 90 down, -90 up
const probe=(x,y,col,rot)=>`<g transform="translate(${x} ${y}) rotate(${rot||0})"><rect x="-34" y="-6" width="24" height="12" rx="5" fill="${col}" stroke="#0b1220" stroke-width="1.4"/><path d="M-10 -2.5H0V2.5H-10Z" fill="#9ca3af" stroke="#475569" stroke-width=".8"/><path d="M0 -1.6L9 0L0 1.6Z" fill="#e5e7eb" stroke="#475569" stroke-width=".7"/></g>`;
const brassScrew=(p,x,y,r)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="url(#${p}brs)" stroke="#6b4a06" stroke-width="1"/><path d="M${x-r*.6} ${y}L${x+r*.6} ${y}" stroke="#5a3d05" stroke-width="1.6"/>`;
const wrap=(h,body,label)=>`<svg viewBox="0 0 640 ${h}" width="100%" role="img" aria-label="${label}">${body}</svg>`;
const head=(t)=>TX(20,24,t,{s:13,w:800});
const foot=(y,lines,h)=>`<rect x="4" y="${y}" width="632" height="${h||(lines.length*20+22)}" rx="12" fill="#fffbe6" stroke="#e7d37a"/>`+lines.map((l,i)=>TX(20,y+24+i*20,l,{s:12})).join('');
const result=(x,y,ok,small)=>TX(x,y,ok,{s:12,c:'#166534',w:800})+(small?TX(x,y+16,small,{s:11,c:'#475569'}):'');

/* ================= Figure: continuity of protective conductors ================= */
function contest(){
 const p='ct';let s=`<defs>${D.grads(p)}${extra(p)}${mft(p,'m2',[[62,'#111827','E'],[158,'#dc2626','L']])}</defs>`+head('Continuity of protective conductors (circuit isolated)');
 [0,1].forEach(i=>{
  const py=36+i*318,m1=i===0;
  s+=panel(py,306,m1?'Method 1: R1 + R2 at the furthest socket':'Method 2: R2 alone with a long test lead',m1?'Line and CPC are linked at the consumer unit, then the tester measures between line and earth at the socket.':'One lead goes back to the main earthing terminal; the other probes the earth at the socket.');
  s+=cuBox(p,20,py+62,150,88,[[28,'main','Main'],[28,'rcd','RCD'],[17,'mcb','1'],[17,'mcb','2'],[17,'mcb','Circuit',true],[17,'mcb','4']]);
  s+=tube([[170,py+106],[300,py+106],[412,py+106]],12);
  if(m1){
   s+=`<rect x="36" y="${py+160}" width="110" height="30" rx="5" fill="#475569" stroke="#1e293b"/>`+brassScrew(p,62,py+175,8)+brassScrew(p,120,py+175,8);
   s+=`<path d="M62 ${py+175}V${py+166}H120V${py+175}" fill="none" stroke="#0b1220" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M62 ${py+175}V${py+166}H120V${py+175}" fill="none" stroke="#16a34a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M62 ${py+175}V${py+166}H120V${py+175}" fill="none" stroke="#facc15" stroke-width="4" stroke-dasharray="5 5" stroke-linecap="round" stroke-linejoin="round"/>`;
   s+=TX(36,py+206,'Link the line and the CPC of the circuit',{s:11})+TX(36,py+221,'at the consumer unit with a short link wire',{s:11});
  } else {
   s+=`<rect x="36" y="${py+160}" width="116" height="16" rx="3" fill="url(#${p}brs)" stroke="#6b4a06"/>`+[52,76,100,124,142].map(x=>`<circle cx="${x}" cy="${py+168}" r="3.6" fill="#8a6508" stroke="#5a3d05"/>`).join('');
   s+=TX(94,py+196,'MET (main earthing terminal)',{a:'middle',s:11});
  }
  s+=sock(p,412,py+60,92,m1?'Furthest socket':'Socket under test');
  s+=TX(190,py+134,m1?'Test every point on the circuit':'Repeat at each point on the circuit',{s:11,c:'#475569'});
  const H=holes(412,py+60,92),tx=372,ty=py+168,S=.78;
  const eS=[tx+S*62,ty+S*40],lS=[tx+S*158,ty+S*40];
  if(m1){
   s+=lead([[eS[0],eS[1]],[eS[0],py+158],[392,py+158],[392,H.E[1]],[H.E[0]-20,H.E[1]]],'#1f2937')+probe(H.E[0]-8,H.E[1],'#1f2937',0);
   s+=lead([[lS[0],lS[1]],[lS[0],py+158],[524,py+158],[524,H.L[1]],[H.L[0]+22,H.L[1]]],'#dc2626')+probe(H.L[0]+8,H.L[1],'#dc2626',180);
  } else {
   s+=lead([[eS[0],eS[1]],[eS[0],py+212],[200,py+212],[200,py+168],[160,py+168]],'#1f2937')+clip(150,py+168,'#1f2937',180);
   s+=lead([[lS[0],lS[1]],[lS[0],py+158],[524,py+158],[524,H.E[1]],[H.E[0]+22,H.E[1]]],'#dc2626')+probe(H.E[0]+8,H.E[1],'#dc2626',180);
  }
  s+=mftAt(p,'m2',tx,ty,S,'RANGE 200mA',m1?'0.39':'0.24','Ω');
  s+=result(20,py+260,m1?'Expected R1+R2 = 20 m × 19.5 mΩ/m = 0.39 Ω':'Expected R2 = 20 m × 12.1 mΩ/m = 0.24 Ω',m1?'Compare the reading with the cable data (2.5/1.5 mm² flat cable).':'Method 2 gives R2 on its own; add R1 to get R1 + R2.');
 });
 const fy=36+2*318;
 s+=foot(fy,['Null the leads first, use a test current of at least 200 mA, and record the highest value on the circuit.','A very high reading means a poor joint or a long route; a very low one suggests a parallel earth path.']);
 return wrap(fy+70,s,'Continuity of protective conductors measured with a low-resistance ohmmeter');
}


/* ================= Figure: ring final circuit test ================= */
function ringtest(){
 const p='rg';let s=`<defs>${D.grads(p)}${extra(p)}${mft(p,'m2',[[62,'#111827','E'],[158,'#dc2626','L']])}</defs>`+head('Ring final circuit test in three steps (circuit isolated)');
 const L1=46,N1=72,E1=98,L2=128,N2=154,E2=180;
 const steps=[
  ['Step 1: end-to-end resistance','Red lead on the line of leg 1, black lead on the line of leg 2. Then repeat for the neutrals and the CPCs.','0.45','r1 line',null,['r1 = 0.45 Ω','rn = 0.45 Ω','r2 = 0.73 Ω (about 1.67 × r1)']],
  ['Step 2: line of leg 1 joined to neutral of leg 2','Link L1 to N2 at the board, then measure line to neutral at every socket.','0.22','L to N',[N2,'N'],['Expected at each socket:','(r1 + rn) ÷ 4 = 0.22 Ω','Readings should be almost equal']],
  ['Step 3: line of leg 1 joined to CPC of leg 2','Link L1 to E2 at the board, then measure line to earth at every socket.','0.29','L to E',[E2,'E'],['Expected at each socket:','(r1 + r2) ÷ 4 = 0.29 Ω','The highest reading is R1 + R2']]];
 steps.forEach((st,i)=>{
  const py=36+i*356;
  s+=panel(py,344,st[0],st[1]);
  // terminal block at the consumer unit
  s+=`<g filter="url(#${p}sh)"><rect x="24" y="${py+64}" width="176" height="52" rx="6" fill="url(#${p}wht)" stroke="#8b97a8" stroke-width="1.4"/></g>`;
  [[L1,'L'],[N1,'N'],[E1,'E'],[L2,'L'],[N2,'N'],[E2,'E']].forEach(c=>{s+=brassScrew(p,c[0],py+97,8.5)+TX(c[0],py+80,c[1],{a:'middle',s:9,c:'#475569'})});
  s+=TX(72,py+134,'Leg 1',{a:'middle',s:11})+TX(154,py+134,'Leg 2',{a:'middle',s:11});
  // the ring: two legs leave the board, run round the room and meet at the last socket
  s+=tube([[200,py+80],[236,py+80],[236,py+70],[560,py+70],[560,py+212],[430,py+212]],11)+tube([[200,py+102],[262,py+102],[262,py+212],[430,py+212]],11);
  s+=sock(p,380,py+194,36)+sock(p,244,py+138,36)+sock(p,382,py+52,36)+sock(p,522,py+98,76,'Socket under test',true);
  // tester and leads
  const tx=262,ty=py+232,S=.8,eS=[tx+S*62,ty+S*40],lS=[tx+S*158,ty+S*40];
  if(i===0){
   s+=lead([[eS[0],eS[1]],[eS[0],py+234],[L2,py+234],[L2,py+122]],'#1f2937')+clip(L2,py+119,'#1f2937',-90);
   s+=lead([[lS[0],lS[1]],[lS[0],py+226],[L1,py+226],[L1,py+122]],'#dc2626')+clip(L1,py+119,'#dc2626',-90);
  } else {
   const link=`M${L1} ${py+97}V${py+(i===1?56:50)}H${st[4][0]}V${py+97}`;
   s+=`<path d="${link}" fill="none" stroke="#0b1220" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="${link}" fill="none" stroke="#a8692d" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`;
   s+=TX(st[4][0]+9,py+(i===1?60:54),'link wire',{s:10,c:'#7c4a16',w:700});
   const H=holes(522,py+98,76);
   const other=st[4][1]==='N'?H.N:H.E;
   s+=lead([[eS[0],eS[1]],[eS[0],py+214],[498,py+214],[498,other[1]],[other[0]-22,other[1]]],'#1f2937')+probe(other[0]-8,other[1],'#1f2937',0);
   s+=lead([[lS[0],lS[1]],[lS[0],py+226],[630,py+226],[630,H.L[1]],[H.L[0]+22,H.L[1]]],'#dc2626')+probe(H.L[0]+8,H.L[1],'#dc2626',180);
  }
  s+=mftAt(p,'m2',tx,ty,S,'RANGE 200mA',st[2],'Ω');
  s+=st[5].map((t,k)=>TX(450,py+272+k*17,t,{s:11,c:k===0&&i>0?'#475569':'#0f172a',w:k===0&&i>0?600:700})).join('');
 });
 const fy=36+3*356;
 s+=foot(fy,['A socket that reads higher than the others in steps 2 and 3 is probably on a spur, or has a loose joint.','Open-circuit readings in step 1 mean a break in that conductor; r1 and rn should be nearly equal.']);
 return wrap(fy+70,s,'Ring final circuit test in three steps');
}

Z.figs.ringtest=ringtest();

/* ================= Figure: earth fault loop impedance (Ze and Zs) ================= */
const plugOn=(p,x,y,w)=>{const k=w/92,px=x+w/2-27*k,py=y+w/2-30*k;return `<g filter="url(#${p}sh)"><rect x="${px}" y="${py}" width="${54*k}" height="${62*k}" rx="${9*k}" fill="url(#${p}plg)" stroke="#030712" stroke-width="1.4"/><rect x="${px+8*k}" y="${py+8*k}" width="${38*k}" height="${12*k}" rx="3" fill="rgba(255,255,255,.14)"/><rect x="${px+10*k}" y="${py+26*k}" width="${34*k}" height="${22*k}" rx="4" fill="#e5e7eb" stroke="#6b7280"/>${TX(px+27*k,py+41*k,'13 A',{a:'middle',s:9,c:'#111827',w:800})}</g>`};
const cord=(pts)=>{const d=D.rounded(pts,14);return `<path d="${d}" fill="none" stroke="#030712" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="#374151" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="1.3" stroke-linecap="round" transform="translate(-1.2 -1.2)"/>`};
function loopz(){
 const p='lz';let s=`<defs>${D.grads(p)}${extra(p)}${mft(p,'m2',[[62,'#111827','E'],[158,'#dc2626','L']])}${mft(p,'m1',[[110,'#374151','MAINS']])}</defs>`+head('Earth fault loop impedance: Ze at the origin and Zs at a socket');
 let py=36;
 s+=panel(py,330,'Ze: external loop impedance at the origin','Installation isolated, earthing conductor disconnected so only the supply path is measured.');
 s+=tube([[24,py+128],[140,py+128]],12)+TX(24,py+114,'Incoming supply cable',{s:10,c:'#475569'});
 s+=cuBox(p,140,py+96,200,92,[[36,'main','Main',true],[36,'rcd','RCD'],[17,'mcb','1'],[17,'mcb','2'],[17,'mcb','3'],[17,'mcb','4']]);
 s+=brassScrew(p,162,py+90,6)+brassScrew(p,184,py+90,6)+TX(162,py+80,'L',{a:'middle',s:9,c:'#475569'})+TX(184,py+80,'N',{a:'middle',s:9,c:'#475569'});
 s+=`<rect x="160" y="${py+210}" width="132" height="16" rx="3" fill="url(#${p}brs)" stroke="#6b4a06"/>`+[176,198,220,242,274].map(x=>`<circle cx="${x}" cy="${py+218}" r="3.6" fill="#8a6508" stroke="#5a3d05"/>`).join('')+TX(226,py+242,'MET (main earthing terminal)',{a:'middle',s:11});
 const ey=(d)=>`<path d="${d}" fill="none" stroke="#0b1220" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="#16a34a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="#facc15" stroke-width="5" stroke-dasharray="6 6" stroke-linecap="round" stroke-linejoin="round"/>`;
 s+=ey(`M176 ${py+218}L120 ${py+218}L96 ${py+200}`)+`<circle cx="96" cy="${py+200}" r="6" fill="url(#${p}brs)" stroke="#6b4a06"/>`;
 s+=ey(`M52 ${py+270}V${py+232}H84`)+`<circle cx="84" cy="${py+232}" r="6" fill="url(#${p}brs)" stroke="#6b4a06"/>`;
 s+=`<path d="M38 ${py+270}H66M43 ${py+277}H61M48 ${py+284}H56" stroke="#0f172a" stroke-width="2.4" stroke-linecap="round"/>`;
 s+=TX(72,py+268,'Earthing conductor',{s:11})+TX(72,py+284,'disconnected for this test',{s:11});
 const tx=410,ty=py+150,S=.8,eS=[tx+S*62,ty+S*40],lS=[tx+S*158,ty+S*40];
 s+=lead([[lS[0],lS[1]],[lS[0],py+74],[162,py+74],[162,py+50]],'#dc2626')+clip(162,py+84,'#dc2626',90);
 s+=lead([[eS[0],eS[1]],[eS[0],py+140],[372,py+140],[372,py+218],[330,py+218]],'#1f2937')+clip(284,py+218,'#1f2937',180);
 s+=mftAt(p,'m2',tx,ty,S,'LOOP  Zs/Ze','0.35','Ω');
 s+=result(404,py+300,'Ze = 0.35 Ω: within the limit',null);
 py=36+342;
 s+=panel(py,330,'Zs: loop impedance of the circuit at a socket','Plug-in lead into the socket, no-trip setting if an RCD is present. Supply on.');
 s+=cuBox(p,20,py+62,150,88,[[28,'main','Main'],[28,'rcd','RCD'],[17,'mcb','1'],[17,'mcb','2'],[17,'mcb','Circuit',true],[17,'mcb','4']]);
 s+=tube([[170,py+106],[300,py+106],[412,py+106]],12);
 s+=sock(p,412,py+60,92,'Furthest socket')+plugOn(p,412,py+60,92);
 const tx2=372,ty2=py+186,S2=.78;
 s+=cord([[tx2+S2*110,ty2+S2*40],[tx2+S2*110,py+170],[458,py+170],[458,py+128]]);
 s+=mftAt(p,'m1',tx2,ty2,S2,'LOOP NO-TRIP','0.74','Ω');
 s+=TX(20,py+190,'Zs = Ze + (R1 + R2)',{s:13,w:800})+TX(20,py+210,'Predicted: 0.35 + 0.39 = 0.74 Ω',{s:12})+TX(20,py+234,'Limit for a type B 32 A MCB: 1.37 Ω',{s:12})+TX(20,py+251,'(use 80% of the limit: 1.10 Ω)',{s:12})+TX(20,py+279,'Earth fault current = 230 ÷ 0.74 = 311 A',{s:12,c:'#166534',w:800});
 const fy=36+2*342;
 s+=foot(fy,['Measure Ze at the origin and Zs at the furthest point of every circuit.','Zs must not exceed the maximum value for the protective device.']);
 return wrap(fy+70,s,'Measuring Ze at the origin and Zs at a socket with a loop impedance tester');
}

/* ================= Figure: RCD tests ================= */
function rcdtest(){
 const p='rc';let s=`<defs>${D.grads(p)}${extra(p)}${mft(p,'m1',[[110,'#374151','MAINS']])}</defs>`+head('RCD tests: one half, one and five times the rated current');
 const tests=[
  ['Test 1: one half of the rated current (15 mA)','The RCD must NOT trip. Test at 0 and 180 degrees.','RCD x1/2','15','mA',['Result: stays on','PASS (no trip)'],'#166534'],
  ['Test 2: the rated current (30 mA)','A general-type RCD must trip within 300 ms.','RCD x1','112','ms',['Result: tripped in 112 ms','PASS (limit 300 ms)'],'#166534'],
  ['Test 3: five times the rated current (150 mA)','A 30 mA RCD giving additional protection must trip within 40 ms.','RCD x5','19','ms',['Result: tripped in 19 ms','PASS (limit 40 ms)'],'#166534']];
 tests.forEach((t,i)=>{
  const py=36+i*318;
  s+=panel(py,306,t[0],t[1]);
  s+=cuBox(p,20,py+62,150,88,[[28,'main','Main'],[28,'rcd','RCD',true],[17,'mcb','1'],[17,'mcb','2'],[17,'mcb','Circuit'],[17,'mcb','4']]);
  s+=tube([[170,py+106],[300,py+106],[412,py+106]],12);
  s+=sock(p,412,py+60,92,'Socket on the RCD circuit')+plugOn(p,412,py+60,92);
  const tx=372,ty=py+186,S=.78;
  s+=cord([[tx+S*110,ty+S*40],[tx+S*110,py+170],[458,py+170],[458,py+128]]);
  s+=mftAt(p,'m1',tx,ty,S,t[2],t[3],t[4]);
  s+=TX(20,py+190,t[5][0],{s:13,w:800,c:'#0f172a'})+TX(20,py+210,t[5][1],{s:13,w:800,c:t[6]});
  s+=TX(20,py+240,'Rated residual current I∆n = 30 mA',{s:11,c:'#475569'})+TX(20,py+257,'Press TEST on the tester, then reset the RCD.',{s:11,c:'#475569'});
 });
 const fy=36+3*318;
 s+=foot(fy,['A ramp test finds the real trip current: a 30 mA RCD should trip between about 15 and 30 mA.','The RCD test button only checks the mechanism; it does not replace these tests.']);
 return wrap(fy+70,s,'RCD tests at one half, one and five times the rated residual current');
}

/* ================= Figure: three-phase insulation tests ================= */
function ir3ph(){
 const p='tp';let s=D.defs(p)+head('Insulation resistance of a three-phase cable (L1, L2, L3, N and earth)');
 const tests=[
  ['Test 1: all live conductors linked, to earth','L1, L2, L3 and N joined together on the red lead; black lead on the earth conductor.','link',4],
  ['Test 2: L1 to L2','Red lead on L1 (brown), black lead on L2 (black). Other conductors left free.',0,1],
  ['Test 3: L2 to L3','Red lead on L2 (black), black lead on L3 (grey). Other conductors left free.',1,2],
  ['Test 4: L3 to L1','Red lead on L3 (grey), black lead on L1 (brown). Other conductors left free.',2,0]];
 const names=['L1 (brown)','L2 (black)','L3 (grey)','Neutral (blue)','Earth (bare CPC)'],gr=['brn','blk','gry','blu'];
 tests.forEach((t,i)=>{
  const py=36+i*244,y=[0,1,2,3,4].map(k=>py+76+k*22),tx=22,ty=py+54,S=.82;
  s+=panel(py,232,t[0],t[1]);
  s+=`<g filter="url(#${p}sh)"><rect x="436" y="${py+58}" width="192" height="130" rx="16" fill="url(#${p}shk)" stroke="#030712" stroke-width="1.2"/></g>`;
  [0,1,2,3].forEach(k=>{s+=`<rect x="372" y="${y[k]-6.5}" width="68" height="13" rx="6.5" fill="url(#${p}${gr[k]})" stroke="#111827" stroke-opacity=".55" stroke-width=".9"/>`+cu(p,346,y[k],30,7)});
  s+=`<rect x="352" y="${y[4]-3.5}" width="88" height="7" rx="3.5" fill="url(#${p}cu)" stroke="#6b3d10" stroke-width=".8"/>`+cu(p,346,y[4],12,7);
  names.forEach((n,k)=>{s+=TX(448,y[k]+4,n,{s:11,c:'#f8fafc'})});
  const eX=tx+S*62,lX=tx+S*158,sy=ty+S*134;
  if(t[2]==='link'){
   const bar=`M344 ${y[0]}H336V${y[3]}H344`;
   s+=`<path d="${bar}" fill="none" stroke="#0b1220" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"/><path d="${bar}" fill="none" stroke="#6b7280" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>`;
   s+=lead([[eX,sy],[eX,py+216],[304,py+216],[304,y[4]],[322,y[4]]],'#1f2937')+clip(358,y[4],'#1f2937');
   s+=lead([[lX,sy],[lX,py+198],[262,py+198],[262,(y[1]+y[2])/2],[330,(y[1]+y[2])/2]],'#dc2626');
  } else {
   s+=lead([[eX,sy],[eX,py+216],[304,py+216],[304,y[t[3]]],[322,y[t[3]]]],'#1f2937')+clip(358,y[t[3]],'#1f2937');
   s+=lead([[lX,sy],[lX,py+198],[262,py+198],[262,y[t[2]]],[322,y[t[2]]]],'#dc2626')+clip(358,y[t[2]],'#dc2626');
  }
  s+=D.testerAt(p,false,tx,ty,S,'','>999','MΩ');
 });
 const fy=36+4*244;
 s+=foot(fy,['Also test each live conductor to earth and the neutral to earth. Test voltage 500 V DC, minimum 1 MΩ.','Disconnect electronic equipment and protect or remove surge devices before testing.']);
 return wrap(fy+70,s,'Insulation resistance tests on a three-phase four-core cable');
}

Z.figs.loopz=loopz();Z.figs.rcdtest=rcdtest();Z.figs.ir3ph=ir3ph();

/* ================= Figure: three-phase loop impedance and fault current ================= */
// round 3P+N+E industrial socket (red, 400 V). Returns markup; hole centres from ind().
const indHoles=(cx,cy)=>({E:[cx,cy+27],L1:[cx-16,cy-22],L2:[cx+16,cy-22],L3:[cx+26,cy+8],N:[cx-26,cy+8]});
const indSock=(p,cx,cy)=>{const H=indHoles(cx,cy);let s=`<g filter="url(#${p}sh)"><circle cx="${cx}" cy="${cy}" r="52" fill="url(#${p}red)" stroke="#5b1010" stroke-width="2"/><circle cx="${cx}" cy="${cy}" r="42" fill="#7f1d1d" stroke="#450a0a"/><circle cx="${cx}" cy="${cy}" r="38" fill="#f1f5f9" stroke="#94a3b8"/><rect x="${cx-5}" y="${cy-44}" width="10" height="9" rx="2" fill="#450a0a"/></g>`;
 Object.keys(H).forEach(k=>{s+=`<circle cx="${H[k][0]}" cy="${H[k][1]}" r="${k==='E'?6.5:5.5}" fill="#0f172a"/>`+TX(H[k][0]+(k==='L2'||k==='L3'?0:0),H[k][1]+(k==='E'?20:-9),k,{a:'middle',s:8,c:'#334155',w:800})});
 return s+TX(cx,cy+68,'3P+N+E socket, 400 V',{a:'middle',s:10,c:'#475569'})};
function loop3ph(){
 const p='l3';let s=`<defs>${D.grads(p)}${extra(p)}<radialGradient id="${p}red" cx=".4" cy=".35" r=".9"><stop offset="0" stop-color="#ef4444"/><stop offset=".7" stop-color="#b91c1c"/><stop offset="1" stop-color="#7f1d1d"/></radialGradient>${mft(p,'m3',[[44,'#111827','E'],[110,'#2563eb','N'],[176,'#dc2626','L']])}</defs>`+head('Three-phase earth fault loop impedance and fault current at a 400 V socket');
 const tests=[
  ['Test 1: Zs of L1 to earth','Red lead on L1, black lead on earth. Supply on, no-trip setting.','L1','E','0.74','Ω','LOOP L1-E',['Zs (L1-E) = 0.74 Ω','Compare with the','maximum Zs of the device']],
  ['Test 2: Zs of L2 to earth','Red lead on L2, black lead on earth.','L2','E','0.76','Ω','LOOP L2-E',['Zs (L2-E) = 0.76 Ω','Test every phase of','a three-phase circuit']],
  ['Test 3: Zs of L3 to earth','Red lead on L3, black lead on earth.','L3','E','0.75','Ω','LOOP L3-E',['Zs (L3-E) = 0.75 Ω','Record the highest value','on the schedule']],
  ['Test 4: prospective short-circuit current between lines','Red lead on L1, blue lead on L2. The tester measures the line-to-line fault current.','L1','L2','2.0','kA','PSCC L1-L2',['L1-L2 fault = 2.0 kA','Every device must have','a breaking capacity above this']]];
 tests.forEach((t,i)=>{
  const py=36+i*336,cx=500,cy=py+126;
  s+=panel(py,324,t[0],t[1]);
  s+=indSock(p,cx,cy);
  const H=indHoles(cx,cy),tx=40,ty=py+190,S=.78,eS=[tx+S*44,ty+S*40],nS=[tx+S*110,ty+S*40],lS=[tx+S*176,ty+S*40];
  const probeTo=(sock,col,col2,key,i2)=>{const h=H[key];const right=(key==='L2'||key==='L3');const below=key==='E';
   if(below){return lead([[sock[0],sock[1]],[sock[0],py+(i2?290:270)],[h[0],py+(i2?290:270)],[h[0],h[1]+24]],col)+probe(h[0],h[1]+8,col,-90)}
   if(right){return lead([[sock[0],sock[1]],[sock[0],py+(i2?280:262)],[cx+72,py+(i2?280:262)],[cx+72,h[1]],[h[0]+24,h[1]]],col)+probe(h[0]+8,h[1],col,180)}
   return lead([[sock[0],sock[1]],[sock[0],h[1]],[h[0]-24,h[1]]],col)+probe(h[0]-8,h[1],col,0)};
  const second=t[3]==='E'?probeTo(eS,'#1f2937','#1f2937','E',true):probeTo(nS,'#2563eb','#2563eb',t[3],true);
  s+=second+probeTo(lS,'#dc2626','#dc2626',t[2],false);
  s+=mftAt(p,'m3',tx,ty,S,t[6],t[4],t[5]);
  s+=t[7].map((x,k)=>TX(20,py+82+k*18,x,{s:12,w:k===0?800:600,c:k===0?'#0f172a':'#475569'})).join('');
 });
 const fy=36+4*336;
 s+=foot(fy,['Measure every phase and record the highest Zs and the highest fault current.','Check Zs against the maximum for each device, and the fault current against its breaking capacity.']);
 return wrap(fy+70,s,'Earth fault loop impedance for each phase and the line-to-line fault current at a three-phase socket');
}

/* ================= Figure: RCD tests on a three-phase board ================= */
function rcd3ph(){
 const p='r3';let s=`<defs>${D.grads(p)}${extra(p)}${mft(p,'m2',[[62,'#111827','E'],[158,'#dc2626','L']])}</defs>`+head('RCD tests on a four-pole RCD in a three-phase board');
 const tests=[
  ['Test 1: one half of the rated current (50 mA)','Red lead on L1 at the load side of the RCD, black lead on the earth bar. The RCD must NOT trip.','RCD x1/2','50','mA',['Result: stays on','PASS (no trip)']],
  ['Test 2: the rated current (100 mA)','Same leads. A general-type RCD must trip within 300 ms.','RCD x1','126','ms',['Result: tripped in 126 ms','PASS (limit 300 ms)']],
  ['Test 3: five times the rated current (500 mA)','Same leads. Repeat each test with the red lead on L2, then L3.','RCD x5','31','ms',['Result: 31 ms on L1','Repeat on L2 and L3']]];
 tests.forEach((t,i)=>{
  const py=36+i*372;
  s+=panel(py,360,t[0],t[1]);
  s+=cuBox(p,20,py+62,250,92,[[30,'main','Main 4P'],[56,'rcd','RCD 4P',true],[24,'mcb','Motor'],[24,'mcb','Heater'],[24,'mcb','Lights'],[24,'mcb','Spare']]);
  // load-side terminals of the RCD and the earth bar
  s+=`<rect x="70" y="${py+156}" width="70" height="32" rx="4" fill="url(#${p}wht)" stroke="#8b97a8"/>`+[82,98,114,130].map(x=>brassScrew(p,x,py+178,5.5)).join('')+[82,98,114,130].map((x,k)=>TX(x,py+167,['L1','L2','L3','N'][k],{a:'middle',s:9,c:'#334155',w:700})).join('');
  s+=`<rect x="166" y="${py+160}" width="96" height="16" rx="3" fill="url(#${p}brs)" stroke="#6b4a06"/>`+[180,200,220,240].map(x=>`<circle cx="${x}" cy="${py+168}" r="3.6" fill="#8a6508" stroke="#5a3d05"/>`).join('')+TX(268,py+172,'Earth bar',{s:10,c:'#475569'});
  const tx=250,ty=py+246,S=.78,eS=[tx+S*62,ty+S*40],lS=[tx+S*158,ty+S*40];
  s+=lead([[eS[0],eS[1]],[eS[0],py+234],[240,py+234],[240,py+226]],'#1f2937')+clip(240,py+182,'#1f2937',-90);
  s+=lead([[lS[0],lS[1]],[lS[0],py+244],[82,py+244],[82,py+226]],'#dc2626')+clip(82,py+190,'#dc2626',-90);
  s+=mftAt(p,'m2',tx,ty,S,t[2],t[3],t[4]);
  s+=t[5].map((x,k)=>TX(450,py+280+k*20,x,{s:13,w:800,c:k===0?'#0f172a':'#166534'})).join('')+TX(450,py+324,'Rated residual current: 100 mA',{s:11,c:'#475569'});
 });
 const fy=36+3*372;
 s+=foot(fy,['Test at the output of the RCD between each line and earth, at 0 and 180 degrees on the supply wave.','The ramp test should give a trip current between about half and the full rated current.']);
 return wrap(fy+70,s,'RCD tests with the tester connected between a line conductor and earth on a three-phase board');
}

Z.figs.loop3ph=loop3ph();Z.figs.rcd3ph=rcd3ph();
Z.figs.contest=contest();
const fig=(id,k)=>{const m=Z.mods.find(x=>x.id===id);if(m){m.f=m.f||[];if(!m.f.includes(k))m.f.push(k)}};
[['contest',['cg304a','cg204b','intb']],['ringtest',['cg304b','cg204b','cg303b','intb']],['loopz',['cg304b','cg203d','e1c','intb']],['rcdtest',['cg304b','cg203c','e1c','intb']],['ir3ph',['cg304a']],['loop3ph',['cg304b','cg305c','intb']],['rcd3ph',['cg304b','intb']]].forEach(a=>a[1].forEach(id=>fig(id,a[0])));
window.DRAW13={extra,mft,mftAt,sock,holes,cuBox,tube,probe,brassScrew,wrap,head,foot,result};
Object.assign(Z.names,{loop3ph:'Three-phase loop impedance and fault current',rcd3ph:'RCD tests on a three-phase board',loopz:'Earth fault loop impedance: Ze and Zs',rcdtest:'RCD tests (half, one and five times)',ir3ph:'Three-phase insulation resistance tests',ringtest:'Ring final circuit test (three steps)',contest:'Continuity of protective conductors (R1+R2 and R2)'});
Object.assign(Z.tasks,{loop3ph:'Draw the loop impedance test of each phase (L1, L2, L3 to earth) at a three-phase socket and the line-to-line fault current test.',rcd3ph:'Draw the RCD tests on a four-pole RCD in a three-phase board, with the tester between a line conductor and the earth bar.',loopz:'Draw how Ze is measured at the origin (earthing conductor disconnected) and how Zs is measured at a socket with a plug-in lead.',rcdtest:'Draw the three RCD tests at half, one and five times the rated current and state the trip time limits.',ir3ph:'Draw the insulation resistance tests on a three-phase cable: all live conductors to earth, then each pair of lines.',ringtest:'Draw the three steps of the ring final circuit test: end-to-end readings, line-to-neutral cross-connection and line-to-CPC cross-connection, with the tester leads, the link and the expected readings.',contest:'Draw how R1 + R2 is measured at a socket (line and CPC linked at the board) and how R2 alone is measured with a long lead from the main earthing terminal.'});
Object.assign(Z.marks,{loop3ph:['Zs measured for L1, L2 and L3 to earth','Tester leads on the correct socket contacts','Line-to-line fault current measured between two lines','Highest value recorded and compared with the device'],rcd3ph:['Four-pole RCD in the board','Red lead on a line at the load side, black lead on the earth bar','Half, one and five times the rated current','Repeat on each phase'],loopz:['Ze: leads on the supply line and the MET with the earthing conductor disconnected','Zs: plug-in tester at the furthest socket','Zs = Ze + (R1 + R2) shown with an example','Comparison with the maximum Zs for the device'],rcdtest:['Tester plugged into a socket on the RCD circuit','Half rated current: must not trip','Rated current: within 300 ms','Five times: within 40 ms for a 30 mA RCD'],ir3ph:['All live conductors linked and tested to earth','Line to line tests L1-L2, L2-L3 and L3-L1','Neutral and earth conductors identified','500 V DC and minimum 1 MOhm noted'],ringtest:['Step 1: end-to-end line, neutral and CPC readings','Step 2: line of one leg linked to neutral of the other, readings at sockets','Step 3: line linked to CPC, readings at sockets','Expected values (r1+rn)/4 and (r1+r2)/4 shown'],contest:['Line and CPC linked at the consumer unit (Method 1)','Probes on line and earth at the socket','Method 2: lead to the main earthing terminal and probe on earth','Reading compared with expected value from cable data']});
})();
