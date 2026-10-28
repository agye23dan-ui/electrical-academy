(function(){
// Virtual Bench: extra interactive simulators, mounted under the two original ones on #/sims.
const q=s=>document.querySelector(s);
const AMBER='#d97706';
const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
const f=(x,d=2)=>{if(!isFinite(x))return '∞';const a=Math.abs(x);return a>=1000?x.toFixed(0):a>=100?x.toFixed(1):x.toFixed(d)};
const play=()=>{try{window.playClick&&window.playClick()}catch(e){}};

/* ---------- small builders ---------- */
const svg=(vb,body,label)=>`<svg viewBox="${vb}" width="100%" style="max-width:680px;display:block;margin:0 auto;" role="img" aria-label="${label}">${body}</svg>`;
const t=(x,y,s,a,x2)=>`<text x="${x}" y="${y}"${a?` text-anchor="${a}"`:''}${x2?' '+x2:''}>${s}</text>`;
const wire=(d,on,col)=>`<path d="${d}" stroke="${on?AMBER:(col||'var(--ink)')}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
const box=(x,y,w,h,label,fill)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="${fill||'var(--bg-subtle)'}" stroke="var(--line-strong)" stroke-width="2"/>`+(label?t(x+w/2,y+h/2+4,label,'middle','font-weight="700"'):'');
const dc=(x,y,on)=>`<circle cx="${x}" cy="${y}" r="5" fill="${on?AMBER:'var(--ink)'}"/>`;
const tile=(l,v,c)=>`<div style="padding:8px 10px;background:var(--bg-subtle);border:1px solid var(--line);border-radius:8px;"><div style="font-size:0.72rem;color:var(--mut);">${l}</div><div style="font-weight:700;font-size:1.02rem;${c?'color:'+c+';':''}">${v}</div></div>`;
const tiles=a=>`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(118px,1fr));gap:8px;margin-top:12px;">${a.join('')}</div>`;
const banner=(ok,msg)=>`<div style="margin-top:12px;padding:12px;border-radius:8px;font-weight:700;text-align:center;background:${ok===true?'var(--ok-subtle)':ok===false?'var(--hot-subtle)':'var(--bg-subtle)'};color:${ok===true?'var(--ok)':ok===false?'var(--hot)':'var(--mut)'};">${msg}</div>`;
const btn=(label,fn,sec)=>`<button${sec?' class="secondary"':''} onclick="Bench.${fn}">${label}</button>`;
const row=(...b)=>`<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:14px;">${b.join('')}</div>`;
const sl=(sim,id,label,min,max,step,v,unit)=>`<div style="margin:8px 0;"><label style="display:flex;justify-content:space-between;font-size:0.85rem;font-weight:600;"><span>${label}</span><span id="${sim}-${id}-v">${v} ${unit}</span></label><input type="range" id="${sim}-${id}" min="${min}" max="${max}" step="${step}" value="${v}" data-unit="${unit}" style="width:100%;accent-color:var(--cold);" oninput="Bench.up('${sim}')"></div>`;
const sel=(sim,id,label,opts,def)=>`<label style="display:flex;flex-direction:column;gap:4px;font-size:0.85rem;font-weight:600;">${label}<select id="${sim}-${id}" onchange="Bench.up('${sim}')" style="padding:8px;border-radius:8px;border:1px solid var(--line-strong);background:var(--card);color:var(--ink);font:inherit;">${opts.map(o=>`<option value="${o}"${String(o)===String(def)?' selected':''}>${o}</option>`).join('')}</select></label>`;
const rv=(sim,id)=>{const e=q('#'+sim+'-'+id);const v=parseFloat(e.value);const l=q('#'+sim+'-'+id+'-v');if(l)l.textContent=(e.step&&e.step<1?v.toFixed(2):v)+' '+(e.dataset.unit||'');return v};
const sv=(sim,id)=>q('#'+sim+'-'+id).value;
const set=(id,html)=>{const e=q('#'+id);if(e)e.innerHTML=html};
const card=(id,n,title,intro,body,tip)=>`<div class="card" id="sim-${id}" style="margin-top:28px;"><h2 style="margin:0 0 4px;">${n}. ${title}</h2><p style="color:var(--mut);font-size:0.9rem;margin:4px 0 12px;">${intro}</p>${body}${tip?`<p style="margin-top:14px;font-size:0.85rem;color:var(--ink-secondary);"><b>Try this:</b> ${tip}</p>`:''}</div>`;

/* ---------- 3. Intermediate switching ---------- */
const I={a:0,i:0,b:0};
function inter(){
 const sA=I.a,x=I.i,sB=I.b,o=sA^x,on=o===sB;
 const la=[sA===0,sA===1],lo=[o===0,o===1];
 const blade=(cx,cy,tx,ty,live)=>`<path d="M${cx} ${cy} L${tx} ${ty}" stroke="${live?AMBER:'var(--ink)'}" stroke-width="4" stroke-linecap="round"/>`;
 let s=box(40,50,90,100,'')+box(260,50,120,100,'')+box(500,50,90,100,'')+
  t(85,40,'Switch A','middle','font-weight="700"')+t(320,40,'Intermediate switch','middle','font-weight="700"')+t(545,40,'Switch B','middle','font-weight="700"');
 s+=wire('M10 100H62',true)+t(10,92,'230V L')+
  wire('M120 72H270',la[0])+wire('M120 128H270',la[1])+
  (x?wire('M270 72L370 128',la[0])+wire('M270 128L370 72',la[1]):wire('M270 72H370',la[0])+wire('M270 128H370',la[1]))+
  wire('M370 72H510',lo[0])+wire('M370 128H510',lo[1])+
  dc(62,100,true)+dc(120,72,la[0])+dc(120,128,la[1])+dc(270,72,la[0])+dc(270,128,la[1])+dc(370,72,lo[0])+dc(370,128,lo[1])+dc(510,72,lo[0])+dc(510,128,lo[1])+dc(578,100,on)+
  blade(62,100,120,sA?128:72,true)+blade(578,100,510,sB?128:72,on)+
  t(62,122,'COM','middle')+t(120,66,'L1','middle')+t(120,144,'L2','middle')+t(85,168,'COM to L'+(sA+1),'middle','fill="var(--mut)"')+
  t(270,66,'L1','middle')+t(270,144,'L2','middle')+t(370,66,'L1','middle')+t(370,144,'L2','middle')+t(320,168,x?'Crossed over':'Straight through','middle','fill="var(--mut)"')+
  t(510,66,'L1','middle')+t(510,144,'L2','middle')+t(578,122,'COM','middle')+t(545,168,'COM to L'+(sB+1),'middle','fill="var(--mut)"')+
  wire('M578 100H630V114',on)+`<circle cx="630" cy="130" r="16" fill="${on?'#facc15':'var(--bg-subtle)'}" stroke="var(--ink)" stroke-width="2"/><path d="M619 119L641 141M641 119L619 141" stroke="var(--ink)" stroke-width="2"/>`+t(656,134,'Lamp')+
  wire('M630 146V212H10',false,'var(--cold)')+t(10,206,'Neutral N');
 set('inter-svg',svg('0 0 690 224',s,'Intermediate switching with two two-way switches'));
 set('inter-msg',banner(on,`Strapper ${sA+1} is live from Switch A. The intermediate switch ${x?'crosses it over onto':'passes it straight to'} strapper ${o+1}. Switch B is on L${sB+1}, so the lamp is ${on?'ON':'OFF'}.`));
}

/* ---------- 4. DOL starter ---------- */
const D={supply:1,ol:0,k:0,start:0,stop:0,msg:'Press Start to energise coil K.'};
function dolCalc(){let n1,n2,coil;for(let i=0;i<3;i++){n1=D.supply&&!D.stop;n2=n1&&(D.start||D.k);coil=n2&&!D.ol;D.k=coil?1:0}return {n1,n2,coil}}
function dol(){
 const c=dolCalc(),run=!!D.k;
 const st=(x,y,s)=>t(x,y,s,'middle','fill="var(--mut)"');
 let s='';
 s+=t(10,62,'L')+wire('M10 70H50',D.supply)+
  box(50,58,70,24,'Stop (NC)',D.stop?'var(--hot-subtle)':'')+st(85,98,D.stop?'open':'closed')+wire('M120 70H150',c.n1)+
  wire('M150 70H180',c.n1)+wire('M150 70V122H180',c.n1)+dc(150,70,c.n1)+
  box(180,58,78,24,'Start (NO)',D.start?'var(--cu-subtle)':'')+st(219,98,D.start?'closed':'open')+
  box(180,110,78,24,'K hold-in',D.k?'var(--cu-subtle)':'')+st(219,148,D.k?'closed':'open')+
  wire('M258 70H290',c.n2)+wire('M258 122H270V70',c.n2&&D.k)+dc(270,70,c.n2)+
  box(290,58,60,24,'Coil K',c.coil?'var(--cu-subtle)':'')+st(320,98,c.coil?'energised':'off')+
  wire('M350 70H380',c.coil)+box(380,58,70,24,'O/L (NC)',D.ol?'var(--hot-subtle)':'')+st(415,98,D.ol?'tripped':'closed')+
  wire('M450 70H540V230H10',false,'var(--cold)')+t(10,224,'N')+
  `<circle cx="440" cy="170" r="30" fill="var(--bg-subtle)" stroke="${run?AMBER:'var(--ink)'}" stroke-width="3"/>`+
  `<g${run?' class="b-spin"':''} style="transform-box:fill-box;transform-origin:center;"><path d="M440 150V190M420 170H460" stroke="var(--ink)" stroke-width="3"/></g>`+t(440,174,'M','middle','style="paint-order:stroke"')+
  t(440,214,run?'Motor RUNNING':'Motor stopped','middle','font-weight="700"')+
  t(290,172,'K main contacts','middle')+t(290,186,run?'closed':'open','middle','fill="var(--mut)"');
 set('dol-svg',`<style>@keyframes bspin{to{transform:rotate(360deg)}}.b-spin{animation:bspin .8s linear infinite}</style>`+svg('0 0 560 240',s,'DOL starter control circuit'));
 set('dol-msg',banner(run?true:null,D.msg));
}
function dolEv(ev){
 play();
 if(ev==='start'){if(D.ol||!D.supply||D.stop){D.msg=!D.supply?'No supply: nothing can start.':D.ol?'Overload tripped: the O/L contact is open, so the coil cannot energise.':'Stop is pressed.'}else{D.start=1;D.msg='Start pressed: coil K energises. The K hold-in contact closes across Start.';setTimeout(()=>{D.start=0;if(D.k)D.msg='Start released: the hold-in contact keeps coil K energised, so the motor keeps running.';dol()},500)}}
 if(ev==='stop'){D.stop=1;D.msg='Stop pressed: the NC contact opens, coil K drops out and the hold-in opens.';setTimeout(()=>{D.stop=0;D.msg='Stop released: the hold-in is open, so the motor stays stopped.';dol()},500)}
 if(ev==='ol'){D.ol^=1;D.msg=D.ol?'Overload tripped: the O/L (NC) contact opens in the coil circuit and the motor stops.':'Overload reset: the motor will not restart until Start is pressed.'}
 if(ev==='supply'){D.supply^=1;D.msg=D.supply?'Supply restored: the motor stays OFF until Start is pressed (no-volt release).':'Supply failed: coil K drops out and the motor stops.'}
 dol();
}

/* ---------- 5. Star-delta ---------- */
const SD={ph:'off',t:0,speed:0,cur:0,id:null,msg:''};
function sdStop(){if(SD.id){clearInterval(SD.id);SD.id=null}}
function sdTick(){
 if(!q('#sd-bars')){sdStop();return}
 const T=parseFloat(sv('sd','timer'));SD.t+=0.1;
 if(SD.ph==='star'){SD.speed+=(0.82-SD.speed)*0.07;SD.cur=2*(1-0.75*SD.speed)+0.35;if(SD.t>=T){SD.ph='trans';SD.t=0;SD.msg='Transition: K3 opens, then K2 closes. The motor coasts for a moment.'}}
 else if(SD.ph==='trans'){SD.speed*=0.995;SD.cur=0.1;if(SD.t>=0.3){SD.ph='delta';SD.t=0;SD.msg='Delta: K1 and K2 closed. The windings now see full line voltage.'}}
 else if(SD.ph==='delta'){SD.speed+=(1-SD.speed)*0.12;SD.cur=1+3.2*(1-SD.speed)*(SD.t<0.5?1:0.5);}
 sd();
}
function sd(){
 const ph=SD.ph,star=ph==='star',delta=ph==='delta',k1=ph!=='off',k2=delta,k3=star;
 const p=(on,l)=>`<span class="pill${on?' ok':''}" style="margin-right:6px;">${l} ${on?'ON':'off'}</span>`;
 let s='',cx=[70,170,270];
 const top=['U1','V1','W1'],bot=['W2','U2','V2'];
 cx.forEach((x,i)=>{s+=box(x-20,40,40,26,top[i])+box(x-20,110,40,26,bot[i])+wire(`M${x} 40V22`,k1,'var(--ink)')+t(x,16,['L1','L2','L3'][i],'middle')});
 if(star)s+=wire('M70 136V158H270M170 136V158M270 136V158',true);
 if(delta)cx.forEach(x=>{s+=wire(`M${x} 66V110`,true)});
 s+=t(170,190,star?'Star: bottom row linked':delta?'Delta: vertical links':ph==='trans'?'Open transition':'Not connected','middle','font-weight="700"');
 const T=rv('sd','timer');
 set('sd-svg',svg('0 0 340 198',s,'Motor terminal block changing from star to delta'));
 set('sd-bars',`<div style="margin-top:6px;">${p(k1,'K1 main')}${p(k3,'K3 star')}${p(k2,'K2 delta')}</div>
  <div style="margin-top:12px;font-size:0.8rem;font-weight:600;">Motor speed: ${f(SD.speed*100,0)}%</div><div style="height:12px;background:var(--bg-subtle);border-radius:6px;overflow:hidden;"><div style="height:100%;width:${SD.speed*100}%;background:var(--cold);"></div></div>
  <div style="margin-top:10px;font-size:0.8rem;font-weight:600;">Line current: ${f(SD.cur,1)} × full-load current <span style="color:var(--mut);font-weight:500;">(a DOL start would be about 6×)</span></div><div style="height:12px;background:var(--bg-subtle);border-radius:6px;overflow:hidden;"><div style="height:100%;width:${clamp(SD.cur/6*100,0,100)}%;background:${AMBER};"></div></div>
  <div style="margin-top:10px;font-size:0.8rem;color:var(--mut);">${ph==='star'?`Timer: ${f(Math.max(0,T-SD.t),1)} s to changeover`:ph==='off'?'Press Start to begin.':''}</div>`);
 set('sd-msg',banner(delta?true:null,SD.msg||'Set the timer, then press Start.'));
}
function sdEv(ev){
 play();
 if(ev==='start'){SD.ph='star';SD.t=0;SD.speed=0;SD.cur=2.35;SD.msg='Star: K1 and K3 closed. Each winding sees 230 V, so the starting current is about one third of DOL.';if(!SD.id)SD.id=setInterval(sdTick,100)}
 if(ev==='stop'){SD.ph='off';SD.speed=0;SD.cur=0;SD.msg='Stopped: all contactors open.';sdStop()}
 if(ev==='try'){SD.msg='BLOCKED: K2 and K3 are electrically and mechanically interlocked. Closing both would short-circuit the supply through the windings.'}
 sd();
}

/* ---------- 6. Series-parallel lab ---------- */
function ohm(){
 const V=rv('ohm','v'),R1=rv('ohm','r1'),R2=rv('ohm','r2'),R3=rv('ohm','r3'),mode=sv('ohm','mode');
 let Rt,I,V1,V2,V3,I1,I2,I3,body;
 const rb=(x,y,n,R,v,i)=>box(x,y,112,44,'')+t(x+56,y+17,`${n} = ${R} Ω`,'middle','font-weight="700"')+t(x+56,y+34,`${f(v)} V · ${f(i)} A`,'middle','fill="var(--mut)"');
 if(mode==='Series'){Rt=R1+R2+R3;I=V/Rt;I1=I2=I3=I;V1=I*R1;V2=I*R2;V3=I*R3;
  body=wire('M60 60V30H100M212 30H230M342 30H360M472 30H520V150H60V110',true)+rb(100,8,'R1',R1,V1,I1)+rb(230,8,'R2',R2,V2,I2)+rb(360,8,'R3',R3,V3,I3);}
 else if(mode==='Parallel'){V1=V2=V3=V;I1=V/R1;I2=V/R2;I3=V/R3;I=I1+I2+I3;Rt=V/I;
  body=wire('M60 60V20H150M60 110V150H150',true)+wire('M150 20V150M450 20V150',true)+wire('M150 20H190M302 20H450M150 85H190M302 85H450M150 150H190M302 150H450',true)+rb(190,0,'R1',R1,V1,I1)+rb(190,63,'R2',R2,V2,I2)+rb(190,128,'R3',R3,V3,I3);}
 else{const Rp=R2*R3/(R2+R3);Rt=R1+Rp;I=V/Rt;V1=I*R1;const Vp=I*Rp;V2=V3=Vp;I1=I;I2=Vp/R2;I3=Vp/R3;
  body=wire('M60 60V30H100M212 30H300V72H320M212 30H300V150H320',true)+wire('M300 72V150',true)+rb(100,8,'R1',R1,V1,I1)+rb(320,50,'R2',R2,V2,I2)+rb(320,128,'R3',R3,V3,I3)+wire('M432 72H480V150H432M480 110V190H60V110',true);}
 const bat=`<rect x="40" y="60" width="40" height="50" rx="5" fill="var(--bg-subtle)" stroke="var(--line-strong)" stroke-width="2"/>`+t(60,89,V+' V','middle','font-weight="700"')+t(88,66,'+')+t(88,116,'−');
 set('ohm-svg',svg('0 -8 540 208',bat+body,'Series-parallel resistor circuit'));
 const P1=V1*I1,P2=V2*I2,P3=V3*I3,Pt=V*I;
 const sumV=mode==='Series'?V1+V2+V3:mode==='Parallel'?V:V1+V2;
 set('ohm-out',tiles([tile('Total resistance',f(Rt)+' Ω'),tile('Total current',f(I)+' A'),tile('Total power',f(Pt)+' W'),tile('R1 power',f(P1)+' W'),tile('R2 power',f(P2)+' W'),tile('R3 power',f(P3)+' W')])+
  banner(true,mode==='Parallel'?`Same ${V} V across every branch; branch currents add to ${f(I)} A.`:`Voltage drops add to ${f(sumV)} V, which equals the supply (Kirchhoff's voltage law).`));
}

/* ---------- 7. Earth fault loop ---------- */
const KX={B:5,C:10,D:20};
function zs(){
 const ty=sv('zs','type'),In=parseFloat(sv('zs','in')),Ze=rv('zs','ze'),r=rv('zs','r'),Z=Ze+r,k=KX[ty];
 const If=230/Z,trip=k*In,max=230*0.95/trip,work=0.8*max,ok=Z<=work,hardOk=Z<=max;
 const pct=clamp(Z/max*100,0,140);
 set('zs-out',`<div style="margin-top:8px;font-size:0.8rem;font-weight:600;">Zs ${f(Z)} Ω against the 0.4 s limit ${f(max)} Ω</div>
  <div style="position:relative;height:16px;background:var(--bg-subtle);border-radius:8px;overflow:hidden;"><div style="height:100%;width:${Math.min(pct,100)}%;background:${ok?'var(--ok)':hardOk?AMBER:'var(--hot)'};"></div><div style="position:absolute;left:80%;top:0;bottom:0;width:2px;background:var(--ink);"></div></div>
  <div style="display:flex;justify-content:space-between;font-size:0.72rem;color:var(--mut);"><span>0</span><span>working limit 80% (${f(work)} Ω)</span><span>limit ${f(max)} Ω</span></div>`+
  tiles([tile('Zs = Ze + (R1+R2)',f(Z)+' Ω'),tile('Earth fault current',f(If,0)+' A'),tile('Needed to trip fast',f(trip,0)+' A (≥ '+k+' × In)'),tile('Max Zs (BS 7671)',f(max)+' Ω'),tile('80% working limit',f(work)+' Ω')])+
  banner(ok,ok?`PASS: ${f(If,0)} A is above the ${f(trip,0)} A magnetic trip level, so the device disconnects in well under 0.4 s.`:hardOk?`MARGINAL: Zs is under the table limit but over 80% of it. Conductors heat up in service, so this reading is not acceptable.`:`FAIL: Zs is too high. The fault current ${f(If,0)} A is below the ${f(trip,0)} A trip level, so the device may take seconds to clear a fault. Use a shorter or larger cable, improve Ze, or fit a lower-rated device or an RCD.`));
}

/* ---------- 8. RCD tester ---------- */
const R={log:[],rate:30};
function rcdTest(mult){
 play();
 const rate=parseFloat(sv('rcd','rate')),bad=q('#rcd-bad').checked,cur=rate*mult;
 let trip,limit,pass,txt;
 if(mult===0.5){trip=bad&&Math.random()<0.8;limit='must NOT trip';pass=!trip;txt=trip?'tripped':'no trip (held)';}
 else if(mult===1){const ms=bad?350+Math.random()*250:40+Math.random()*180;limit='≤ 300 ms';pass=ms<=300;txt=Math.round(ms)+' ms'}
 else{const ms=bad?55+Math.random()*60:8+Math.random()*24;limit='≤ 40 ms';pass=ms<=40;txt=Math.round(ms)+' ms'}
 R.log.unshift({m:mult,cur,txt,limit,pass});R.log=R.log.slice(0,8);rcd();
}
function rcd(){
 const rate=parseFloat(sv('rcd','rate'));
 set('rcd-out',`<div style="overflow-x:auto;margin-top:12px;"><table style="width:100%;border-collapse:collapse;font-size:0.85rem;"><tr style="text-align:left;color:var(--mut);"><th style="padding:6px;">Test</th><th>Current</th><th>Result</th><th>Limit</th><th></th></tr>${R.log.map(l=>`<tr style="border-top:1px solid var(--line);"><td style="padding:6px;">× ${l.m}</td><td>${f(l.cur,0)} mA</td><td>${l.txt}</td><td>${l.limit}</td><td style="font-weight:700;color:${l.pass?'var(--ok)':'var(--hot)'};">${l.pass?'PASS':'FAIL'}</td></tr>`).join('')||'<tr><td colspan="5" style="padding:10px;color:var(--mut);">Press a test button to apply a leakage current.</td></tr>'}</table></div>
  <div style="font-size:0.8rem;color:var(--mut);margin-top:8px;">Rated residual current I∆n = ${rate} mA. Test currents: ½ × ${f(rate/2,0)} mA, 1 × ${rate} mA, 5 × ${rate*5} mA.</div>`);
}

/* ---------- 9. Power factor correction ---------- */
function pf(){
 const P=rv('pf','p'),p1=rv('pf','pf1'),p2=Math.max(rv('pf','pf2'),p1),V=400;
 const t1=Math.tan(Math.acos(p1)),t2=Math.tan(Math.acos(p2)),Qc=P*(t1-t2),Q1=P*t1,Q2=P*t2,S1=P/p1,S2=P/p2;
 const I1=P*1000/(Math.sqrt(3)*V*p1),I2=P*1000/(Math.sqrt(3)*V*p2);
 const sc=Math.min(300/Math.max(P,1),165/Math.max(Q1,1)),x0=50,y0=190;
 let s=`<path d="M${x0} ${y0}H${x0+P*sc}V${y0-Q1*sc}Z" fill="none" stroke="var(--hot)" stroke-width="2.5"/>`+
  `<path d="M${x0} ${y0}H${x0+P*sc}V${y0-Q2*sc}Z" fill="var(--cold-subtle)" stroke="var(--cold)" stroke-width="2.5" stroke-dasharray="6 4"/>`+
  t(x0+P*sc/2,y0+18,`P = ${f(P,0)} kW`,'middle')+t(x0+P*sc+8,y0-Q1*sc/2,`Q before ${f(Q1,0)} kVAr`)+t(x0+P*sc+8,y0-Q2*sc/2+14,`Q after ${f(Q2,0)} kVAr`,'start','fill="var(--cold)"')+
  t(x0+8,y0-8,'φ')+t(x0+P*sc/2-40,y0-Q1*sc/2-6,`S ${f(S1,0)} kVA`,'end','fill="var(--hot)"');
 set('pf-svg',svg('0 0 520 215',s,'Power triangle before and after correction'));
 set('pf-out',tiles([tile('Capacitor needed',f(Qc,1)+' kVAr',Qc>0?AMBER:''),tile('Current before',f(I1,1)+' A'),tile('Current after',f(I2,1)+' A'),tile('Current saved',f((1-I2/I1)*100,0)+'%'),tile('Apparent power',f(S1,0)+' → '+f(S2,0)+' kVA')])+
  banner(true,`Adding ${f(Qc,1)} kVAr of capacitors in parallel raises the power factor from ${p1.toFixed(2)} to ${p2.toFixed(2)}. The real power P stays at ${f(P,0)} kW, but the supply current falls.`));
}

/* ---------- 10. Logic gate lab ---------- */
const G={a:0,b:0};
const GATES=['AND','OR','NOT','NAND','NOR','XOR'];
const gf=(g,a,b)=>({AND:a&b,OR:a|b,NOT:a?0:1,NAND:(a&b)?0:1,NOR:(a|b)?0:1,XOR:a^b})[g];
function logic(){
 const g=sv('logic','gate'),a=G.a,b=G.b,y=gf(g,a,b),two=g!=='NOT';
 const AND='M15 8H40A17 17 0 0 1 40 42H15Z',OR='M12 8Q30 8 55 25Q30 42 12 42Q24 25 12 8Z',TRI='M15 8L50 25L15 42Z';
 const body=g==='AND'||g==='NAND'?AND:g==='NOT'?TRI:OR;
 const bub=g==='NAND'||g==='NOR'||g==='NOT';
 const outX=g==='AND'||g==='NAND'?57:g==='NOT'?50:55;
 const col=v=>v?AMBER:'var(--ink)';
 let s=`<g transform="translate(70,30) scale(3)" fill="none" stroke-linecap="round" stroke-linejoin="round">`+
  `<path d="${body}" stroke="var(--ink)" stroke-width="1.4" fill="var(--bg-subtle)"/>`+(g==='XOR'?'<path d="M6 8Q18 25 6 42" stroke="var(--ink)" stroke-width="1.4"/>':'')+
  (bub?`<circle cx="${outX+4}" cy="25" r="4" stroke="var(--ink)" stroke-width="1.4" fill="var(--bg-subtle)"/>`:'')+
  (two?`<path d="M0 16H${g==='AND'||g==='NAND'?15:g==='XOR'?10:16}" stroke="${col(a)}" stroke-width="1.8"/><path d="M0 34H${g==='AND'||g==='NAND'?15:g==='XOR'?10:16}" stroke="${col(b)}" stroke-width="1.8"/>`:`<path d="M0 25H15" stroke="${col(a)}" stroke-width="1.8"/>`)+
  `<path d="M${outX+(bub?8:0)} 25H${outX+30}" stroke="${col(y)}" stroke-width="1.8"/></g>`+
  t(34,two?82:109,'A = '+a,'middle','font-weight="700"')+(two?t(34,136,'B = '+b,'middle','font-weight="700"'):'')+
  `<circle cx="${70+(outX+36)*3}" cy="105" r="18" fill="${y?'#facc15':'var(--bg-subtle)'}" stroke="var(--ink)" stroke-width="2"/>`+t(70+(outX+36)*3,140,'Y = '+y,'middle','font-weight="700"');
 set('logic-svg',svg('0 0 420 160',s,g+' gate'));
 const rows=two?[[0,0],[0,1],[1,0],[1,1]]:[[0,0],[1,0]].slice(0,2).map((r,i)=>[i,0]);
 set('logic-out',`<table style="margin:12px auto 0;border-collapse:collapse;font-size:0.9rem;text-align:center;"><tr style="color:var(--mut);"><th style="padding:4px 14px;">A</th>${two?'<th style="padding:4px 14px;">B</th>':''}<th style="padding:4px 14px;">Y</th></tr>${rows.map(r=>{const hit=r[0]===a&&(!two||r[1]===b);return `<tr style="border-top:1px solid var(--line);${hit?'background:var(--cu-subtle);font-weight:700;':''}"><td style="padding:4px 14px;">${r[0]}</td>${two?`<td>${r[1]}</td>`:''}<td>${gf(g,r[0],r[1])}</td></tr>`}).join('')}</table>`);
 const bB=q('#logic-btnb');if(bB)bB.style.display=two?'':'none';
}

/* ---------- 11. AC waveform lab ---------- */
function wave(){
 const Vp=rv('wave','vp'),fr=rv('wave','f'),three=q('#wave-3').checked;
 const W=460,H=110,x0=50,y0=120,T=40; // 40 ms window
 const path=(ph,col)=>{let d='';for(let px=0;px<=W;px+=2){const ms=px/W*T,v=Math.sin(2*Math.PI*fr*ms/1000-ph);d+=(px?'L':'M')+(x0+px)+' '+(y0-v*H*0.85).toFixed(1)}return `<path d="${d}" fill="none" stroke="${col}" stroke-width="2.5"/>`};
 let s=`<path d="M${x0} ${y0}H${x0+W}M${x0} ${y0-H}V${y0+H}" stroke="var(--line-strong)" stroke-width="1.5"/>`+t(x0-6,y0-H*0.85+4,'+'+Vp+' V','end')+t(x0-6,y0+H*0.85+4,'−'+Vp+' V','end')+t(x0+W,y0+H+14,'window: 40 ms','end','fill="var(--mut)"');
 const rms=Vp/Math.SQRT2;
 s+=`<path d="M${x0} ${y0-rms/Vp*H*0.85}H${x0+W}M${x0} ${y0+rms/Vp*H*0.85}H${x0+W}" stroke="var(--mut)" stroke-width="1.2" stroke-dasharray="5 4"/>`+t(x0+W,y0-rms/Vp*H*0.85-4,'RMS '+f(rms,0)+' V','end','fill="var(--mut)"');
 if(three)s+=path(0,'var(--live,#92400e)')+path(2*Math.PI/3,'var(--ink)')+path(4*Math.PI/3,'var(--p3,#64748b)')+t(x0,y0+H+14,'L1 brown · L2 black · L3 grey');
 else s+=path(0,AMBER);
 set('wave-svg',svg('0 0 530 250',s,'AC waveform'));
 set('wave-out',tiles([tile('Peak',f(Vp,0)+' V'),tile('RMS (0.707 × peak)',f(rms)+' V'),tile('Average, half cycle',f(Vp*0.637)+' V'),tile('Period',f(1000/fr,1)+' ms'),tile('Peak-to-peak',f(2*Vp,0)+' V')].concat(three?[tile('Line voltage (√3 × phase)',f(rms*Math.sqrt(3))+' V RMS')]:[])));
}

/* ---------- 12. Transformer lab ---------- */
function xfmr(){
 const Vp=rv('xf','vp'),Np=rv('xf','np'),Ns=rv('xf','ns'),VA=rv('xf','va'),eta=rv('xf','eta')/100;
 const Vs=Vp*Ns/Np,Is=VA/Vs,Pin=VA/eta,Ip=Pin/Vp,type=Ns>Np?'Step-up':Ns<Np?'Step-down':'Isolating (1:1)';
 const coil=(x,n,label,col)=>{const m=clamp(Math.round(n/150),2,14);let s='';for(let i=0;i<m;i++)s+=`<ellipse cx="${x}" cy="${50+i*(100/m)+50/m}" rx="26" ry="${Math.max(2,50/m)}" fill="none" stroke="${col}" stroke-width="2.2"/>`;return s+t(x,24,label,'middle','font-weight="700"')};
 const s=`<rect x="110" y="40" width="200" height="130" fill="none" stroke="var(--ink)" stroke-width="12"/><rect x="150" y="62" width="120" height="86" fill="var(--card)"/>`+
  coil(110,Np,`Primary ${Np} turns`,'var(--cold)')+coil(310,Ns,`Secondary ${Ns} turns`,AMBER)+
  t(30,110,Vp+' V','middle','font-weight="700"')+t(390,110,f(Vs)+' V','middle','font-weight="700"');
 set('xf-svg',svg('0 0 420 200',s,'Transformer with primary and secondary windings'));
 set('xf-out',tiles([tile('Type',type),tile('Turns ratio Np:Ns',f(Np/Ns)+' : 1'),tile('Secondary voltage',f(Vs)+' V',AMBER),tile('Secondary current',f(Is)+' A'),tile('Primary current',f(Ip)+' A'),tile('Losses',f(Pin-VA,1)+' W')])+
  banner(null,`Vs = Vp × Ns ÷ Np = ${Vp} × ${Ns} ÷ ${Np} = ${f(Vs)} V. A step-down transformer has a higher current on the secondary than on the primary.`));
}

/* ---------- page assembly ---------- */
const CARDS=[
 ['inter','Intermediate Switching Simulator','Control one lamp from three places: two two-way switches with an intermediate (crossover) switch between them.',
  `<div class="svg-wrap" id="inter-svg" style="text-align:center;"></div>${row(btn('Toggle Switch A','tg(\'a\')'),btn('Toggle Intermediate','tg(\'i\')'),btn('Toggle Switch B','tg(\'b\')'),btn('Reset','tg(\'r\')',1))}<div id="inter-msg"></div>`,
  'With the lamp ON, flip each switch in turn. Any single change turns it OFF, which is why a lamp can be controlled from three places.'],
 ['dol','DOL Motor Starter','Direct-on-line control circuit: Stop (NC), Start (NO) with a hold-in contact, coil K and the overload contact.',
  `<div class="svg-wrap" id="dol-svg" style="text-align:center;"></div>${row(btn('Press Start','dolEv(\'start\')'),btn('Press Stop','dolEv(\'stop\')'),btn('Trip / Reset Overload','dolEv(\'ol\')',1),btn('Supply Fail / Restore','dolEv(\'supply\')',1))}<div id="dol-msg"></div>`,
  'Start the motor, release Start (it keeps running), then fail and restore the supply. The motor stays stopped: that is no-volt release.'],
 ['sd','Star-Delta Starting Sequence','Watch the contactors, motor terminal links, current and speed through a star-delta start.',
  `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px;align-items:start;"><div id="sd-svg"></div><div id="sd-bars"></div></div>${sl('sd','timer','Changeover timer',2,10,0.5,5,'s')}${row(btn('Start','sdEv(\'start\')'),btn('Stop','sdEv(\'stop\')',1),btn('Try K2 + K3 together','sdEv(\'try\')',1))}<div id="sd-msg"></div>`,
  'Compare the current peak in star with the DOL value of about 6 × full load, then watch the small spike at changeover.'],
 ['ohm','Series-Parallel Circuit Lab','Change the supply and resistor values; every voltage, current and power updates and Kirchhoff\'s laws are checked.',
  `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;">${sel('ohm','mode','Circuit',['Series','Parallel','Series-parallel'],'Series-parallel')}</div><div class="svg-wrap" id="ohm-svg" style="margin-top:10px;"></div>${sl('ohm','v','Supply voltage',1,48,1,24,'V')}${sl('ohm','r1','R1',1,100,1,6,'Ω')}${sl('ohm','r2','R2',1,100,1,12,'Ω')}${sl('ohm','r3','R3',1,100,1,4,'Ω')}<div id="ohm-out"></div>`,
  'Choose Series-parallel with 24 V, R1 = 6 Ω, R2 = 12 Ω, R3 = 4 Ω. The total resistance is 9 Ω, matching the worked example in E1·E.'],
 ['zs','Earth Fault Loop and Protective Device Checker','Choose a device, then set Ze and R1+R2. The checker applies the BS 7671 maximum Zs for 0.4 s disconnection with the 80% working limit.',
  `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">${sel('zs','type','MCB type',['B','C','D'],'B')}${sel('zs','in','Rating In (A)',[6,10,16,20,25,32,40],32)}</div>${sl('zs','ze','Ze (supply earth loop)',0.05,3,0.01,0.35,'Ω')}${sl('zs','r','R1 + R2 (circuit)',0.01,3,0.01,0.39,'Ω')}<div id="zs-out"></div>`,
  'Set a type B 32 A device with Ze 0.35 Ω and R1+R2 0.39 Ω: Zs = 0.74 Ω passes. Now raise R1+R2 until it fails.'],
 ['rcd','RCD Trip Tester','Apply ½ ×, 1 × and 5 × the rated residual current like a real RCD tester, and compare the trip time with the limit.',
  `<div style="display:grid;grid-template-columns:1fr auto;gap:10px;align-items:end;">${sel('rcd','rate','Rated residual current I∆n (mA)',[10,30,100,300],30)}<label style="font-size:0.85rem;font-weight:600;display:flex;gap:6px;align-items:center;padding-bottom:10px;"><input type="checkbox" id="rcd-bad" onchange="Bench.up('rcd')"> Faulty RCD</label></div>${row(btn('Test × ½','rcdT(0.5)',1),btn('Test × 1','rcdT(1)'),btn('Test × 5','rcdT(5)'),btn('Clear','rcdC()',1))}<div id="rcd-out"></div>`,
  'Run the three tests on a good RCD, then tick Faulty RCD and run them again to see failures.'],
 ['pf','Power Factor Correction','Set the load and its power factor. The simulator finds the capacitor kVAr needed and shows the power triangle before and after.',
  `<div class="svg-wrap" id="pf-svg"></div>${sl('pf','p','Load real power P',5,200,5,50,'kW')}${sl('pf','pf1','Power factor now (lagging)',0.5,0.95,0.01,0.7,'')}${sl('pf','pf2','Target power factor',0.9,1,0.01,0.95,'')}<div id="pf-out"></div>`,
  '50 kW at pf 0.70 corrected to 0.95 needs about 34.6 kVAr, as in E2·C.'],
 ['logic','Logic Gate Lab','Choose a gate, toggle the inputs and read the output. The truth-table row for the current inputs is highlighted.',
  `<div style="max-width:220px;">${sel('logic','gate','Gate',GATES,'AND')}</div><div class="svg-wrap" id="logic-svg" style="margin-top:8px;"></div>${row(btn('Toggle A','lg(\'a\')'),`<button id="logic-btnb" onclick="Bench.lg('b')">Toggle B</button>`)}<div id="logic-out"></div>`,
  'Find the gate whose output is 1 only when the inputs are different. Then find the two gates that are inverted versions of AND and OR.'],
 ['wave','AC and Three-Phase Waveform Lab','Change the peak voltage and frequency, and switch on three phases to see the 120° spacing.',
  `<div class="svg-wrap" id="wave-svg"></div>${sl('wave','vp','Peak voltage',10,400,5,325,'V')}${sl('wave','f','Frequency',10,100,1,50,'Hz')}<label style="font-size:0.85rem;font-weight:600;display:flex;gap:6px;align-items:center;margin-top:6px;"><input type="checkbox" id="wave-3" onchange="Bench.up('wave')"> Show three phases</label><div id="wave-out"></div>`,
  'At 325 V peak the RMS is 230 V. Tick three phases to see line voltage = √3 × phase voltage = about 400 V.'],
 ['xf','Transformer Lab','Set the primary voltage and turns, and the load. The secondary voltage, currents and losses are calculated.',
  `<div class="svg-wrap" id="xf-svg"></div>${sl('xf','vp','Primary voltage',24,440,1,230,'V')}${sl('xf','np','Primary turns',100,3000,10,1000,'')}${sl('xf','ns','Secondary turns',10,3000,10,100,'')}${sl('xf','va','Load',10,5000,10,120,'VA')}${sl('xf','eta','Efficiency',85,99.5,0.5,97,'%')}<div id="xf-out"></div>`,
  '1,000 primary turns on 230 V with 100 secondary turns gives about 23 V. Swap the turns to build a step-up transformer.']
];
const NAMES={inter:'Intermediate Switching',dol:'DOL Starter',sd:'Star-Delta',ohm:'Series-Parallel Lab',zs:'Earth Fault Loop',rcd:'RCD Tester',pf:'Power Factor',logic:'Logic Gates',wave:'AC Waveforms',xf:'Transformer'};

const B={
 html(){return `<div style="margin:18px 0 0;display:flex;gap:8px;flex-wrap:wrap;"><span style="font-weight:700;font-size:0.85rem;align-self:center;">Jump to:</span>${[['twoway-svg-wrap','Two-Way'],['iso-pool','Isolation']].map(a=>`<button class="secondary" style="padding:4px 10px;font-size:0.8rem;" onclick="Bench.go('${a[0]}')">${a[1]}</button>`).join('')}${CARDS.map(c=>`<button class="secondary" style="padding:4px 10px;font-size:0.8rem;" onclick="Bench.go('sim-${c[0]}')">${NAMES[c[0]]}</button>`).join('')}</div>`},
 mount(app){
  sdStop();Object.assign(I,{a:0,i:0,b:0});Object.assign(D,{supply:1,ol:0,k:0,start:0,stop:0,msg:'Press Start to energise coil K.'});Object.assign(SD,{ph:'off',t:0,speed:0,cur:0,msg:''});R.log=[];G.a=0;G.b=0;
  const p=app.querySelector('p');if(p){p.textContent='Hands-on virtual circuits. Click switches to test live current flow, practise motor starting and protection, run test instruments and explore the calculations behind the trade.';p.insertAdjacentHTML('afterend',B.html())}
  app.insertAdjacentHTML('beforeend',CARDS.map((c,i)=>card(c[0],i+3,c[1],c[2],c[3],c[4])).join(''));
  inter();dol();sd();ohm();zs();rcd();pf();logic();wave();xfmr();
 },
 go(id){const e=document.getElementById(id);if(e)e.scrollIntoView({behavior:'smooth',block:'start'})},
 tg(w){play();if(w==='r'){I.a=0;I.i=0;I.b=0}else I[w]^=1;inter()},
 up(s){({ohm,zs,pf,wave,logic,sd,rcd,xf:xfmr})[s]();},
 dolEv,sdEv,rcdT:rcdTest,rcdC(){R.log=[];rcd()},lg(w){play();G[w]^=1;logic()}
};
// the page has no 'sd' sliders until mounted; 'sd' slider just re-renders the status panel
window.Bench=B;
})();
