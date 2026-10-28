(function(){
// House wiring simulation engine. The wiring is solved as a resistive network (cables, terminals, switches, loads),
// so shorts, earth leakage and overloads give realistic currents. Devices then trip by their own characteristics.
const U0=230;
const CSA=[1,1.5,2.5,4,6,10];
const R_LINE={1:18.1,1.5:12.1,2.5:7.41,4:4.61,6:3.08,10:1.83};   // mΩ per metre, copper at 20 °C
const R_CPC ={1:18.1,1.5:18.1,2.5:12.1,4:12.1,6:7.41,10:4.61};   // flat twin and earth CPC sizes
const IZ={1:15.5,1.5:20,2.5:27,4:37,6:47,10:64};                  // Reference Method C, two loaded cores
const VDROP={1:44,1.5:29,2.5:18,4:11,6:7.3,10:4.4};               // mV/A/m
const RS={l:0.10,n:0.10,e:0.25};                                  // supply: Ze = 0.10 + 0.25 = 0.35 ohm
const APPL={kettle:{n:'Kettle',w:2200,metal:true},heater:{n:'Fan heater',w:2000,metal:true},toaster:{n:'Toaster',w:1000,metal:true},microwave:{n:'Microwave',w:1200,metal:true},washer:{n:'Washing machine',w:2200,metal:true},hairdryer:{n:'Hairdryer',w:2000,metal:false},tv:{n:'Television',w:150,metal:false},fridge:{n:'Fridge',w:120,metal:true}};
const FIXED={cooker:{n:'Cooker',w:7000},shower:{n:'Electric shower',w:8500},immersion:{n:'Immersion heater',w:3000}};
const LAMP_W=10;
const TERMS={light:['PL','N','E','SL'],switch:['COM','L1','E'],socket:['L','N','E'],cooker:['L','N','E'],shower:['L','N','E'],immersion:['L','N','E'],cu:['L','N','E']};
const ROLE={PL:'L',L:'L',COM:'L',SL:'S',L1:'S',N:'N',E:'E'};
const CORES={tne:['L','N','E'],drop:['L','S','E']};
const CURVE={B:[3,5],C:[5,10],D:[10,20]};
const NAMES={light:'Light',switch:'Light switch',socket:'Double socket',cooker:'Cooker',shower:'Shower',immersion:'Immersion heater',cu:'Consumer unit'};
const OPENR=1e12;

/* ---------- helpers ---------- */
const comp=(m,id)=>m.comps.find(c=>c.id===id);
const way=(m,id)=>m.cu.ways.find(w=>w.id===id);
const roomOf=(m,c)=>m.rooms.find(r=>r.id===c.room);
const where=(m,ep)=>{if(ep.t==='cu')return 'consumer unit way '+(m.cu.ways.findIndex(w=>w.id===ep.way)+1);const c=comp(m,ep.id);if(!c)return '?';const r=roomOf(m,c);return NAMES[c.type]+(r?' in the '+r.name.toLowerCase():'')};
function epPos(m,ep){if(ep.t==='cu'){const i=Math.max(0,m.cu.ways.findIndex(w=>w.id===ep.way));return [m.cu.x+16+i*16,m.cu.y+30]}const c=comp(m,ep.id);return c?[c.x,c.y]:[0,0]}
function cableLength(m,k){const a=epPos(m,k.a),b=epPos(m,k.b);const ppm=m.ppm||40;const horiz=(Math.abs(a[0]-b[0])+Math.abs(a[1]-b[1]))/ppm;const drops=(k.a.t==='cu'||k.b.t==='cu'?1.2:1.8)+(k.kind==='drop'?0.6:1.2);return Math.max(0.5,(horiz+drops)*1.1)}
const termOf=(m,k,end,core)=>{const key=k.id+'|'+end+'|'+core;const ep=k[end.toLowerCase()];if(m.terms&&m.terms[key]!==undefined)return m.terms[key];if(ep.t==='cu')return core==='E'?'E':core==='N'?'N':'L';return m.auto?autoTerm(m,k,end,core):''};
function autoTerm(m,k,end,core){const ep=k[end.toLowerCase()];if(ep.t==='cu')return core==='E'?'E':core==='N'?'N':'L';const c=comp(m,ep.id);if(!c)return '';
 if(core==='E')return 'E';
 if(c.type==='light')return k.kind==='drop'?(core==='L'?'PL':'SL'):(core==='L'?'PL':'N');
 if(c.type==='switch')return core==='L'?'COM':'L1';
 return core==='L'?'L':'N'}
function autoTerminate(m){m.terms=m.terms||{};m.cables.forEach(k=>{['A','B'].forEach(end=>{CORES[k.kind].forEach(core=>{m.terms[k.id+'|'+end+'|'+core]=autoTerm(m,k,end,core)})})})}
const epNode=(m,ep,term)=>{if(ep.t==='cu'){const w=way(m,ep.way);if(term==='L')return 'W_'+ep.way+'_L';if(term==='N')return w&&w.type==='RCBO'?'W_'+ep.way+'_N':'N_BAR';return 'E_BAR'}return ep.id+'.'+term};
const validTerm=(m,ep,term)=>{if(!term)return false;if(ep.t==='cu')return ['L','N','E'].includes(term);const c=comp(m,ep.id);return !!c&&TERMS[c.type].includes(term)};

/* ---------- network ---------- */
class Net{constructor(){this.idx=new Map();this.names=[];this.els=[];this.fixed=new Map()}
 id(n){let i=this.idx.get(n);if(i===undefined){i=this.names.length;this.idx.set(n,i);this.names.push(n)}return i}
 fix(n,v){this.fixed.set(this.id(n),v)}
 res(a,b,r,tag,meta){const A=this.id(a),B=this.id(b);if(!(r<OPENR))return;this.els.push({a:A,b:B,r,tag:tag||'wire',meta})}}
function solve(net){
 const n=net.names.length,pos=new Array(n).fill(-1),unk=[];
 for(let i=0;i<n;i++)if(!net.fixed.has(i)){pos[i]=unk.length;unk.push(i)}
 const m=unk.length,G=Array.from({length:m},()=>new Float64Array(m+1));
 const stamp=(a,b,g)=>{const pa=pos[a],pb=pos[b];
  if(pa>=0){G[pa][pa]+=g;if(pb>=0)G[pa][pb]-=g;else G[pa][m]+=g*net.fixed.get(b)}
  if(pb>=0){G[pb][pb]+=g;if(pa>=0)G[pb][pa]-=g;else G[pb][m]+=g*net.fixed.get(a)}};
 net.els.forEach(e=>stamp(e.a,e.b,1/e.r));
 for(let i=0;i<m;i++)G[i][i]+=1e-9;
 for(let c=0;c<m;c++){let p=c,best=Math.abs(G[c][c]);for(let r=c+1;r<m;r++){const v=Math.abs(G[r][c]);if(v>best){best=v;p=r}}
  if(p!==c){const t=G[c];G[c]=G[p];G[p]=t}
  const d=G[c][c];if(d===0)continue;
  for(let r=c+1;r<m;r++){const f=G[r][c]/d;if(f===0)continue;const Gr=G[r],Gc=G[c];for(let k=c;k<=m;k++)Gr[k]-=f*Gc[k]}}
 const x=new Float64Array(m);
 for(let r=m-1;r>=0;r--){let s=G[r][m];for(let k=r+1;k<m;k++)s-=G[r][k]*x[k];x[r]=s/G[r][r]}
 const V=new Float64Array(n);for(let i=0;i<n;i++)V[i]=pos[i]>=0?x[pos[i]]:net.fixed.get(i);
 return {V,net,v:name=>{const i=net.idx.get(name);return i===undefined?0:V[i]},i:e=>(V[e.a]-V[e.b])/e.r,el:tag=>net.els.find(e=>e.tag===tag)};
}

function build(m,st,opts){
 opts=opts||{};st=st||{tripped:{}};const N=new Net();
 N.fix('SRC_L',U0);N.fix('GND',0);
 N.res('SRC_L','S_L',RS.l,'src_l');N.res('GND','S_N',RS.n,'src_n');N.res('GND','MET',RS.e,'src_e');
 const rcd=m.cu.rcd&&m.cu.rcd.present;
 N.res('S_L','BUS_L',rcd&&st.tripped.rcd?OPENR:0.001,'rcd_l');N.res('BUS_N','S_N',rcd&&st.tripped.rcd?OPENR:0.001,'rcd_n');
 N.res('BUS_N','N_BAR',0.001);N.res('MET','E_BAR',0.001);
 m.cu.ways.forEach(w=>{const open=!!st.tripped[w.id];N.res('BUS_L','W_'+w.id+'_L',open?OPENR:0.005,'mcb_'+w.id);if(w.type==='RCBO')N.res('BUS_N','W_'+w.id+'_N',open?OPENR:0.001,'rcbo_n_'+w.id)});
 const faults=m.faults||[];
 // cables
 m.cables.forEach(k=>{const len=cableLength(m,k),csa=k.csa;
  CORES[k.kind].forEach(core=>{
   const r=((core==='E'?R_CPC:R_LINE)[csa])*len/1000;
   const A=k.id+'.'+core+'.A',B=k.id+'.'+core+'.B',M=k.id+'.'+core+'.M';
   const open=faults.find(f=>f.type==='open'&&f.cable===k.id&&f.core===core);
   const nail=faults.find(f=>(f.type==='nail')&&f.cable===k.id);
   if(open){N.res(A,M,r*(open.f||.5),'wire',{cable:k.id,core});N.res(M,B,OPENR);N.id(B);return}
   if(nail&&(nail.kind==='LE'?['L','S','E']:nail.kind==='LN'?['L','S','N']:['N','E']).includes(core)){const f=nail.f||.5;N.res(A,M,r*f,'wire',{cable:k.id,core});N.res(M,B,r*(1-f),'wire',{cable:k.id,core});return}
   N.res(A,B,r,'wire',{cable:k.id,core})});
  faults.filter(f=>f.type==='nail'&&f.cable===k.id).forEach(f=>{const cs=f.kind==='LE'?[k.kind==='drop'?'S':'L','E']:f.kind==='LN'?['L',k.kind==='drop'?'S':'N']:['N','E'];
   N.res(k.id+'.'+cs[0]+'.M',k.id+'.'+cs[1]+'.M',f.ohm||0.05,'fault',{fault:f})});
  ['A','B'].forEach(end=>{const ep=k[end.toLowerCase()];CORES[k.kind].forEach(core=>{
   const term=termOf(m,k,end,core);if(!validTerm(m,ep,term))return;
   let rc=0.001;const lf=faults.find(f=>f.type==='loose'&&ep.t==='comp'&&f.comp===ep.id&&(term==='L'||term==='N'||term==='PL'));if(lf)rc=lf.ohm||3;
   N.res(k.id+'.'+core+'.'+end,epNode(m,ep,term),rc,'term',{cable:k.id,end,core,term})})})});
 // components
 const dead=new Set();if(st.tripped)circuitsOf(m).forEach(ci=>{if(st.tripped[ci.way.id])ci.comps.forEach(c=>dead.add(c.id))});
 m.comps.forEach(c=>{
  N.id(c.id+'.E');
  if(c.type==='switch'&&c.on!==false&&!opts.switchesOff)N.res(c.id+'.COM',c.id+'.L1',0.001,'switch');
  if(opts.noLoads||dead.has(c.id))return;
  if(c.type==='light'){const lf=faults.find(f=>f.type==='water'&&f.comp===c.id);
   if(!(c.blown))N.res(c.id+'.SL',c.id+'.N',U0*U0/LAMP_W,'load',{comp:c.id,w:LAMP_W});
   if(lf)N.res(c.id+'.SL',c.id+'.E',U0/(lf.mA/1000),'fault',{fault:lf})}
  else if(c.type==='socket'){(c.appl||[]).forEach((a,i)=>{const A=APPL[a];if(!A)return;const case_=c.id+'.CASE'+i;
    N.res(c.id+'.L',c.id+'.N',U0*U0/A.w,'load',{comp:c.id,i,w:A.w,name:A.n});
    if(A.metal)N.res(case_,c.id+'.E',0.001,'wire');else N.id(case_);
    const lf=faults.find(f=>f.type==='leak'&&f.comp===c.id&&(f.i===undefined||f.i===i));
    if(lf)N.res(c.id+'.L',case_,U0/(lf.mA/1000),'fault',{fault:lf})})}
  else if(FIXED[c.type]){const A=FIXED[c.type];const case_=c.id+'.CASE0';
   N.res(c.id+'.L',c.id+'.N',U0*U0/A.w,'load',{comp:c.id,i:0,w:A.w,name:A.n});N.res(case_,c.id+'.E',0.001,'wire');
   const lf=faults.find(f=>f.type==='leak'&&f.comp===c.id);if(lf)N.res(c.id+'.L',case_,U0/(lf.mA/1000),'fault',{fault:lf})}
  if(opts.extra)return});
 (opts.extra||[]).forEach(e=>N.res(e.a,e.b,e.r,e.tag||'extra'));
 m.cu.ways.forEach(w=>{N.id('W_'+w.id+'_L')});
 for(let i=0;i<N.names.length;i++){const nm=N.names[i];if(nm!=='SRC_L'&&nm!=='GND')N.els.push({a:i,b:N.id('GND'),r:1e9,tag:'gmin'})}
 return N}

/* ---------- device characteristics ---------- */
function mcbTime(I,rating,curve){const r=I/rating,mag=CURVE[curve||'B'];
 if(r>=mag[1])return 0.008;if(r>=(mag[0]+mag[1])/2)return 0.02;
 if(r<1.13)return Infinity;
 const pts=[[1.13,7200],[1.45,3000],[2,120],[3,30],[4,12],[5,6],[8,1.5],[10,0.5]];
 if(r<=pts[0][0])return Infinity;
 for(let i=1;i<pts.length;i++)if(r<=pts[i][0]){const a=pts[i-1],b=pts[i],f=(Math.log(r)-Math.log(a[0]))/(Math.log(b[0])-Math.log(a[0]));return Math.exp(Math.log(a[1])+f*(Math.log(b[1])-Math.log(a[1])))}
 return 0.5}
function rcdTime(I,idn){const ratio=I/(idn||0.03);if(ratio<1)return Infinity;return Math.min(0.3,Math.max(0.012,0.3*Math.pow(1/ratio,1.5)))}
function trips(m,sol,st){const c=[];
 const rcd=m.cu.rcd&&m.cu.rcd.present;
 if(rcd&&!st.tripped.rcd){const il=sol.i(sol.el('rcd_l')),inn=sol.i(sol.el('rcd_n'));const d=Math.abs(il-inn),t=rcdTime(d,(m.cu.rcd.mA||30)/1000);if(t<Infinity)c.push({dev:'rcd',t,I:d,reason:'residual current',kind:'rcd'})}
 m.cu.ways.forEach(w=>{if(st.tripped[w.id])return;const e=sol.el('mcb_'+w.id);if(!e)return;const I=Math.abs(sol.i(e));
  const t=mcbTime(I,w.rating,w.curve);if(t<Infinity)c.push({dev:w.id,t,I,reason:t<0.05?'short-circuit or earth fault current':'overload',kind:'mcb'});
  if(w.type==='RCBO'){const en=sol.el('rcbo_n_'+w.id);if(en){const d=Math.abs(I-Math.abs(sol.i(en))),t2=rcdTime(d,0.03);if(t2<Infinity)c.push({dev:w.id,t:t2,I:d,reason:'residual current',kind:'rcd'})}}});
 return c}

/* ---------- connectivity (for earth and hazards) ---------- */
function dsu(net,skip){const p=net.names.map((_,i)=>i);const f=x=>{while(p[x]!==x){p[x]=p[p[x]];x=p[x]}return x};
 net.els.forEach(e=>{if(skip.includes(e.tag))return;if(e.r>1)return;p[f(e.a)]=f(e.b)});return f}

/* ---------- mismatches (wrong terminations) ---------- */
function mismatches(m){const out=[];m.cables.forEach(k=>{['A','B'].forEach(end=>{const ep=k[end.toLowerCase()];CORES[k.kind].forEach(core=>{
 const term=termOf(m,k,end,core);if(!validTerm(m,ep,term))return;
 const want=core,have=ep.t==='cu'?(term==='E'?'E':term==='N'?'N':'L'):ROLE[term];
 if(want!==have){out.push({cable:k.id,end,core,term,where:where(m,ep),ep,text:coreName(core,k.kind)+' connected to the '+termName(term)+' terminal'})}})})});return out}
const coreName=(c,kind)=>c==='L'?'Line (brown) core':c==='N'?'Neutral (blue) core':c==='S'?'Switched-line core':'Earth (CPC) core';
const termName=t=>({PL:'permanent line',N:'neutral',E:'earth',SL:'switched line',COM:'common',L1:'L1',L:'line'}[t]||t);
function unterminated(m){const out=[];m.cables.forEach(k=>{['A','B'].forEach(end=>{const ep=k[end.toLowerCase()];CORES[k.kind].forEach(core=>{
 const term=termOf(m,k,end,core);if(!validTerm(m,ep,term))out.push({cable:k.id,end,core,where:where(m,ep),text:coreName(core,k.kind)+' not connected at the '+where(m,ep).toLowerCase()})})})});return out}

/* ---------- simulation ---------- */
function simulate(m,opts){
 opts=opts||{};const st={tripped:Object.assign({},opts.forced||{})};const events=[];let sol,net,clock=0;
 for(let it=0;it<12;it++){net=build(m,st,opts);sol=solve(net);const cs=opts.forced?[]:trips(m,sol,st);if(!cs.length)break;cs.sort((a,b)=>a.t-b.t);const c=cs[0];st.tripped[c.dev]=true;clock+=c.t;
  events.push({t:clock,dt:c.t,dev:c.dev,kind:c.kind,reason:c.reason,I:c.I,name:c.dev==='rcd'?'RCD':'MCB '+(m.cu.ways.findIndex(w=>w.id===c.dev)+1)+' ('+way(m,c.dev).label+')'})}
 const loads=net.els.filter(e=>e.tag==='load').map(e=>{const V=sol.V[e.a]-sol.V[e.b];return {comp:e.meta.comp,i:e.meta.i,name:e.meta.name||'Lamp',w:e.meta.w,V,P:V*V/e.r,on:Math.abs(V)>150}});
 const hazards=[];const f=dsu(net,['load','gmin','fault']);
 m.comps.forEach(c=>{const E=sol.v(c.id+'.E');
  if(Math.abs(E)>50)hazards.push({comp:c.id,text:NAMES[c.type]+' ('+(roomOf(m,c)||{name:''}).name+'): exposed metalwork at '+Math.round(E)+' V to earth',sev:'danger'});
  if((c.type==='socket'&&(c.appl||[]).some(a=>APPL[a]&&APPL[a].metal))||FIXED[c.type]){const hasCase=net.idx.has(c.id+'.CASE0')||(c.appl||[]).some((a,i)=>net.idx.has(c.id+'.CASE'+i));
   if(hasCase&&f(net.idx.get(c.id+'.E'))!==f(net.idx.get('MET')))hazards.push({comp:c.id,text:NAMES[c.type]+' ('+(roomOf(m,c)||{name:''}).name+'): metal-cased equipment is not connected to earth',sev:'danger'});
   for(let i=0;i<8;i++){const cv=sol.v(c.id+'.CASE'+i);if(Math.abs(cv)>50&&net.idx.has(c.id+'.CASE'+i))hazards.push({comp:c.id,text:'Case of the '+(FIXED[c.type]?FIXED[c.type].n:(APPL[(c.appl||[])[i]]||{n:'appliance'}).n).toLowerCase()+' is live at '+Math.round(cv)+' V',sev:'danger'})}}
  if(['socket','cooker','shower','immersion'].includes(c.type)){const L=sol.v(c.id+'.L'),Nn=sol.v(c.id+'.N');if(L<60&&Nn>150&&!Object.keys(st.tripped).length)hazards.push({comp:c.id,text:NAMES[c.type]+' ('+(roomOf(m,c)||{name:''}).name+'): line and neutral are reversed',sev:'danger'})}});
 // cables carrying more than their rating, and loose terminals that heat up
 m.cables.forEach(k=>{const e=net.els.find(x=>x.tag==='wire'&&x.meta&&x.meta.cable===k.id&&x.meta.core==='L');if(!e)return;const I=Math.abs(sol.i(e));if(I>IZ[k.csa]*1.05)hazards.push({cable:k.id,text:'Cable of '+k.csa+' mm² between '+where(m,k.a).toLowerCase()+' and '+where(m,k.b).toLowerCase()+' carries '+I.toFixed(1)+' A but is rated '+IZ[k.csa]+' A: it will overheat',sev:'danger'})});
 net.els.filter(e=>e.tag==='term'&&e.r>0.5).forEach(e=>{const I=Math.abs(sol.i(e)),P=I*I*e.r;if(P>5){const k=m.cables.find(x=>x.id===e.meta.cable);const ep=k?k[e.meta.end.toLowerCase()]:null;hazards.push({comp:ep&&ep.t==='comp'?ep.id:undefined,text:'Loose connection at the '+(ep?where(m,ep).toLowerCase():'terminal')+': '+P.toFixed(0)+' W of heat in the terminal (fire risk)',sev:'danger'})}});
 // lamps live when the switch is off
 if(!opts.switchesOff&&m.comps.some(c=>c.type==='switch')){const off=build(m,{tripped:Object.assign({},st.tripped)},Object.assign({},opts,{switchesOff:true}));const so=solve(off);
  m.comps.filter(c=>c.type==='light').forEach(c=>{if(Math.abs(so.v(c.id+'.SL'))>50||Math.abs(so.v(c.id+'.N'))>50)hazards.push({comp:c.id,text:'Light ('+(roomOf(m,c)||{name:''}).name+'): lamp holder is live when the switch is off',sev:'danger'})})}
 return {events,tripped:Object.assign({},st.tripped),loads,hazards,sol,net,V:name=>sol.v(name)}}

/* ---------- where the problems are (for the screen) ---------- */
function causes(m){const out=[];const mid=k=>{const a=epPos(m,k.a),b=epPos(m,k.b);return [(a[0]+b[0])/2,(a[1]+b[1])/2]};
 mismatches(m).forEach(x=>out.push({kind:'wiring',pos:epPos(m,x.ep),text:x.text+' ('+x.where+')',comp:x.ep.t==='comp'?x.ep.id:null}));
 unterminated(m).forEach(x=>{const k=m.cables.find(c=>c.id===x.cable);out.push({kind:'open',pos:epPos(m,k[x.end.toLowerCase()]),text:x.text})});
 (m.faults||[]).forEach(f=>{const k=m.cables.find(c=>c.id===f.cable),c=comp(m,f.comp);
  if(f.type==='nail'&&k)out.push({kind:'fault',pos:mid(k),cable:k.id,text:(f.kind==='LE'?'A nail has damaged the cable: line touches earth':f.kind==='LN'?'The cable is crushed: line touches neutral':'Damage: neutral touches earth')+' (between '+where(m,k.a).toLowerCase()+' and '+where(m,k.b).toLowerCase()+')'});
  if(f.type==='open'&&k)out.push({kind:'fault',pos:mid(k),cable:k.id,text:'A '+(f.core==='L'?'line':'neutral')+' conductor is broken inside the cable ('+where(m,k.a).toLowerCase()+' to '+where(m,k.b).toLowerCase()+')'});
  if(f.type==='leak'&&c)out.push({kind:'fault',pos:[c.x,c.y],comp:c.id,text:'Leakage of '+f.mA+' mA from the line to the metal case at the '+where(m,{t:'comp',id:c.id}).toLowerCase()});
  if(f.type==='water'&&c)out.push({kind:'fault',pos:[c.x,c.y],comp:c.id,text:'Water in the light fitting leaks '+f.mA+' mA to earth ('+where(m,{t:'comp',id:c.id}).toLowerCase()+')'});
  if(f.type==='loose'&&c)out.push({kind:'fault',pos:[c.x,c.y],comp:c.id,text:'A loose terminal ('+f.ohm+' Ω) at the '+where(m,{t:'comp',id:c.id}).toLowerCase()})});
 return out}

/* ---------- loop impedance test at a component ---------- */
function loopTest(m,compId){const c=comp(m,compId);if(!c)return null;
 const Lt=c.type==='light'?'PL':c.type==='switch'?'COM':'L';
 const noTrip={tripped:{}};
 const mm=Object.assign({},m,{faults:[]});
 const net=build(mm,noTrip,{noLoads:true,extra:[{a:c.id+'.'+Lt,b:c.id+'.E',r:0.001,tag:'test'}]});const sol=solve(net);
 const e=sol.el('src_l');const I=Math.abs(sol.i(e));
 const net2=build(mm,noTrip,{noLoads:true,extra:[{a:c.id+'.'+(c.type==='light'?'SL':c.type==='switch'?'L1':'L'),b:c.id+'.N',r:0.001,tag:'test'}]});const s2=solve(net2);const I2=Math.abs(s2.i(s2.el('src_l')));
 return {zs:U0/Math.max(I,1e-9),I,pscc:I2,zsOK:I>1e-6}}

/* ---------- design review ---------- */
function circuitsOf(m){const res=[];m.cu.ways.forEach(w=>{
 const seen=new Set(),q=[],ks=m.cables.filter(k=>(k.a.t==='cu'&&k.a.way===w.id)||(k.b.t==='cu'&&k.b.way===w.id));
 const cabs=new Set(ks.map(k=>k.id));const comps=new Set();
 const frontier=[];ks.forEach(k=>{[k.a,k.b].forEach(ep=>{if(ep.t==='comp')frontier.push(ep.id)})});
 while(frontier.length){const id=frontier.pop();if(comps.has(id))continue;comps.add(id);m.cables.forEach(k=>{if(k.a.t==='comp'&&k.a.id===id){cabs.add(k.id);if(k.b.t==='comp')frontier.push(k.b.id)}if(k.b.t==='comp'&&k.b.id===id){cabs.add(k.id);if(k.a.t==='comp')frontier.push(k.a.id)}})}
 res.push({way:w,cables:[...cabs].map(id=>m.cables.find(k=>k.id===id)),comps:[...comps].map(id=>comp(m,id)),feeds:ks.length})});return res}
function maxLoad(c){let w=0,a=[];if(c.type==='light')w=LAMP_W;else if(c.type==='socket')(c.appl||[]).forEach(x=>{w+=APPL[x]?APPL[x].w:0});else if(FIXED[c.type])w=FIXED[c.type].w;return w}
function review(m){
 const issues=[],circuits=[];const add=(sev,text,ref)=>issues.push({sev,text,ref});
 if(!m.cu.rcd||!m.cu.rcd.present){if(!m.cu.ways.some(w=>w.type==='RCBO'))add('error','There is no RCD in the consumer unit. Socket circuits and lighting in a home need 30 mA RCD protection.','BS 7671 411.3.3, 411.3.4')}
 if(!m.cu.ways.length)add('error','The consumer unit has no circuits. Add a way for each circuit and connect a cable to it.');
 unterminated(m).forEach(u=>add('error','Open circuit: '+u.text+'.'));
 mismatches(m).forEach(x=>add('error','Wrong connection: '+x.text+' ('+x.where+').'));
 const cs=circuitsOf(m);
 m.comps.forEach(c=>{const connected=m.cables.some(k=>(k.a.t==='comp'&&k.a.id===c.id)||(k.b.t==='comp'&&k.b.id===c.id));if(!connected)add('warn',NAMES[c.type]+' in the '+(roomOf(m,c)||{name:'house'}).name.toLowerCase()+' is not connected by any cable.')});
 m.comps.filter(c=>c.type==='light').forEach(c=>{const hasSw=m.cables.some(k=>k.kind==='drop'&&((k.a.t==='comp'&&k.a.id===c.id)||(k.b.t==='comp'&&k.b.id===c.id)));if(!hasSw)add('warn','Light in the '+(roomOf(m,c)||{name:''}).name.toLowerCase()+' has no switch.')});
 cs.forEach(ci=>{const w=ci.way;const csaMin=ci.cables.length?Math.min.apply(null,ci.cables.map(k=>k.csa)):0;const Ib=ci.comps.reduce((s,c)=>s+maxLoad(c)/U0,0);
  const kinds=ci.comps.map(c=>c.type);const kind=kinds.includes('shower')?'shower':kinds.includes('cooker')?'cooker':kinds.includes('immersion')?'immersion':kinds.includes('socket')?(ci.feeds>=2?'ring':'radial'):kinds.includes('light')?'lighting':'empty';
  const Iz=csaMin?IZ[csaMin]:0;const hasRCD=(m.cu.rcd&&m.cu.rcd.present)||w.type==='RCBO';
  let vd=0,zs=null,zsMax=230*0.95/(CURVE[w.curve||'B'][1]*w.rating);
  const dist={};m.cables.filter(k=>(k.a.t==='cu'&&k.a.way===w.id)||(k.b.t==='cu'&&k.b.way===w.id)).forEach(k=>{const ep=k.a.t==='comp'?k.a:k.b;if(ep.t==='comp')dist[ep.id]=Math.min(dist[ep.id]===undefined?1e9:dist[ep.id],cableLength(m,k))});
  for(let pass=0;pass<ci.comps.length;pass++)m.cables.forEach(k=>{if(k.a.t==='comp'&&k.b.t==='comp'){const l=cableLength(m,k);if(dist[k.a.id]!==undefined&&(dist[k.b.id]===undefined||dist[k.a.id]+l<dist[k.b.id]))dist[k.b.id]=dist[k.a.id]+l;if(dist[k.b.id]!==undefined&&(dist[k.a.id]===undefined||dist[k.b.id]+l<dist[k.a.id]))dist[k.a.id]=dist[k.b.id]+l}});
  ci.comps.filter(c=>c.type!=='switch').sort((a,b)=>(dist[b.id]||0)-(dist[a.id]||0)).slice(0,3).forEach(c=>{const lt=loopTest(m,c.id);if(lt&&lt.zsOK){if(zs===null||lt.zs>zs)zs=lt.zs}});
  // voltage drop at full load
  const sim=simulate(Object.assign({},m,{faults:[]}));const origin=sim.V('BUS_L')-sim.V('BUS_N');vd=0;ci.comps.forEach(c=>{if(c.type==='switch')return;const t=c.type==='light'?'SL':'L';const v=sim.V(c.id+'.'+t)-sim.V(c.id+'.N');if(v>20&&origin-v>vd)vd=origin-v});
  const lim=kind==='lighting'?6.9:11.5;
  const row={way:w,label:w.label,kind,Ib,In:w.rating,csa:csaMin,Iz,vd,vdLimit:lim,zs,zsMax,hasRCD,comps:ci.comps.length,issues:[]};
  const label='Circuit '+(m.cu.ways.indexOf(w)+1)+' ('+w.label+')';
  if(kind==='empty'){add('warn',label+' has a protective device but no connected equipment.')}
  else{
   if(Ib>w.rating&&['lighting','shower','cooker','immersion'].includes(kind))add('error',label+': the load ('+Ib.toFixed(1)+' A) is more than the '+w.rating+' A device, so it will trip.');
   if(w.rating>Iz&&!(kind==='ring'&&w.rating<=32&&csaMin>=2.5)){add('error',label+': the '+w.rating+' A device is too big for the '+csaMin+' mm² cable (rated '+Iz+' A). The cable can overheat without the device tripping.','BS 7671 433.1');row.issues.push('cable not protected')}
   if(kind==='lighting'&&w.rating>10)add('warn',label+': lighting circuits are normally protected by 6 A or 10 A devices.');
   if(kind==='ring'&&(w.rating!==32||csaMin<2.5))add('warn',label+': a ring final circuit is normally a 32 A device with 2.5 mm² cable.');
   if(kind==='radial'&&((w.rating>20&&csaMin<4)||csaMin<2.5))add('warn',label+': a socket radial is normally 20 A with 2.5 mm² cable (or 32 A with 4 mm²).');
   if(kind==='cooker'&&(w.rating<32||csaMin<6))add('warn',label+': a cooker circuit is normally 32 A with 6 mm² cable.');
   if(kind==='shower'&&(w.rating<40||csaMin<10)&&Ib>32)add('error',label+': a shower of this size needs a 40 A or 45 A device and 10 mm² cable.');
   if(vd>lim)add('error',label+': voltage drop is '+vd.toFixed(1)+' V, over the '+lim+' V limit. Use a larger cable or a shorter run.','BS 7671 Appendix 4');
   if(zs!==null&&zs>zsMax*0.8)add('error',label+': the loop impedance Zs is '+zs.toFixed(2)+' Ω, above 80% of the '+zsMax.toFixed(2)+' Ω limit for this device.','BS 7671 411.4');
   if(!hasRCD&&['socket','ring','radial','lighting'].includes(kind))row.issues.push('no RCD');
   if(kind==='ring'){const ringOK=ci.feeds>=2;if(!ringOK)add('warn',label+': a ring needs both ends back at the consumer unit.')}
  }
  circuits.push(row)});
 return {issues,circuits}}

window.HouseSim={causes,U0,CSA,R_LINE,R_CPC,IZ,VDROP,RS,APPL,FIXED,LAMP_W,TERMS,ROLE,CORES,CURVE,NAMES,comp,way,roomOf,where,epPos,cableLength,termOf,autoTerm,autoTerminate,build,solve,simulate,mismatches,unterminated,loopTest,review,mcbTime,rcdTime,circuitsOf,maxLoad,validTerm};
})();
