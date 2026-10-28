(function(){
// House Wiring Practice: choose the rooms, place accessories, draw and terminate cables, then switch on and watch what the protection does.
const H=window.HouseSim;if(!H)return;
const CW=230,CH=170,M0=10,PPM=40;
const ROOM_TYPES=['Living room','Kitchen','Bathroom','Bedroom 1','Bedroom 2','Hall','Utility','Dining room'];
const DEFAULT_ORDER=['Living room','Kitchen','Bathroom','Bedroom 1','Hall','Bedroom 2','Utility','Dining room'];
const CSA_COL={1:'#94a3b8',1.5:'#d97706',2.5:'#2563eb',4:'#7c3aed',6:'#16a34a',10:'#dc2626'};
const TOOLS=[['select','Select / move'],['light','Light'],['switch','Switch'],['socket','Socket'],['cooker','Cooker'],['shower','Shower'],['immersion','Immersion'],['cable','Cable'],['terminate','Terminate'],['loop','Loop test'],['delete','Delete']];
const TNAME={PL:'PL permanent line',N:'N neutral',E:'E earth',SL:'SL switched line',COM:'COM common',L1:'L1 switch output',L:'L line'};
const CORECOL={L:'#92400e',N:'#2563eb',E:'#16a34a',S:'#92400e'};
const CORETXT={L:'Brown (line)',N:'Blue (neutral)',S:'Blue sleeved brown (switched line)',E:'Green and yellow (earth)'};
const PRESETS={'Lighting':[6,'B'],'Sockets (ring)':[32,'B'],'Sockets (radial)':[20,'B'],'Cooker':[32,'B'],'Shower':[45,'B'],'Immersion heater':[16,'B'],'Smoke alarms':[6,'B']};
const KEY='ela-house-v1';
let S=null,app$=null;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const el=id=>document.getElementById(id);
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const fmtT=t=>t<1?Math.round(t*1000)+' ms':t<90?t.toFixed(t<10?1:0)+' s':Math.floor(t/60)+' min '+Math.round(t%60)+' s';

function ensureStyle(){if(el('hs-style'))return;const st=document.createElement('style');st.id='hs-style';st.textContent=`
.hs-wrap{display:grid;grid-template-columns:minmax(0,1fr) 330px;gap:16px;align-items:start}
@media(max-width:960px){.hs-wrap{grid-template-columns:1fr}}
.hs-toolbar{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}
.hs-tool{padding:6px 10px!important;font-size:.82rem!important}
.hs-tool.on{outline:3px solid var(--cold);outline-offset:1px}
.hs-canvas{padding:8px!important}
.hs-canvas svg{width:100%;height:auto;display:block;touch-action:none;background:#f8fafc;border-radius:10px;user-select:none}
.hs-status{padding:8px 12px;border-radius:8px;background:var(--bg-subtle);font-size:.9rem;margin:6px 0}
.hs-status.bad{background:var(--hot-subtle);color:var(--hot)}.hs-status.good{background:var(--ok-subtle);color:var(--ok)}
.hs-log{list-style:none;padding:0;margin:8px 0}.hs-log li{padding:6px 10px;border-left:4px solid var(--line-strong);margin:5px 0;font-size:.9rem;background:var(--bg-subtle);border-radius:0 8px 8px 0}
.hs-log li.trip{border-color:var(--hot)}.hs-log li.ok{border-color:var(--ok)}.hs-log li.warn{border-color:var(--gold)}
.hs-pulse{animation:hspulse 1s ease-in-out infinite}@keyframes hspulse{50%{opacity:.25}}
.hs-modal{position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;z-index:300}
.hs-modal>div{background:var(--card);color:var(--ink);border-radius:12px;padding:18px;max-width:600px;width:94%;max-height:88vh;overflow:auto}
.hs-grid2{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.hs-row .hs-sel{padding:5px 3px}
.hs-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:6px 0}
.hs-sel,.hs-in{padding:6px 8px;border-radius:8px;border:1px solid var(--line-strong);background:var(--card);color:var(--ink);font:inherit;font-size:.85rem}
.hs-table{width:100%;border-collapse:collapse;font-size:.82rem}.hs-table th{text-align:left;color:var(--mut);padding:4px 6px}.hs-table td{padding:4px 6px;border-top:1px solid var(--line)}
.hs-chip{display:inline-block;padding:2px 8px;border-radius:999px;font-size:.75rem;font-weight:700}
.hs-chip.e{background:var(--hot-subtle);color:var(--hot)}.hs-chip.w{background:var(--cu-subtle);color:var(--cu)}.hs-chip.o{background:var(--ok-subtle);color:var(--ok)}
`;document.head.appendChild(st)}

/* ---------- model ---------- */
function newModel(types,manual){
 const n=types.length,cols=n<=2?n:n<=4?2:3;
 const rooms=types.map((t,i)=>({id:'r'+(i+1),name:t,type:t,x:M0+(i%cols)*CW,y:M0+Math.floor(i/cols)*CH,w:CW,h:CH}));
 const cr=rooms.find(r=>r.type==='Hall')||rooms[0];
 return {ppm:PPM,auto:!manual,rooms,cu:{x:cr.x+12,y:cr.y+12,room:cr.id,rcd:{present:false,mA:30},ways:[]},comps:[],cables:[],terms:{},faults:[],seq:{c:0,k:0,w:0}}}
const uid=p=>{S.model.seq[p]++;return p+S.model.seq[p]};
function persist(){try{localStorage.setItem(KEY,JSON.stringify({model:S.model}))}catch(e){}}
function say(t,kind){S.msg=t;S.kind=kind||'';const e=el('hs-status');if(e){e.textContent=t;e.className='hs-status '+(kind||'')}}
const roomAt=(x,y)=>S.model.rooms.find(r=>x>=r.x&&x<=r.x+r.w&&y>=r.y&&y<=r.y+r.h);
const compOf=id=>S.model.comps.find(c=>c.id===id);
const cableOf=id=>S.model.cables.find(k=>k.id===id);
function removeCable(id){const m=S.model;m.cables=m.cables.filter(k=>k.id!==id);Object.keys(m.terms).forEach(key=>{if(key.startsWith(id+'|'))delete m.terms[key]});m.faults=m.faults.filter(f=>f.cable!==id)}
function removeComp(id){const m=S.model;m.cables.filter(k=>(k.a.t==='comp'&&k.a.id===id)||(k.b.t==='comp'&&k.b.id===id)).forEach(k=>removeCable(k.id));m.comps=m.comps.filter(c=>c.id!==id);m.faults=m.faults.filter(f=>f.comp!==id)}
function removeWay(id){const m=S.model;m.cables.filter(k=>(k.a.t==='cu'&&k.a.way===id)||(k.b.t==='cu'&&k.b.way===id)).forEach(k=>removeCable(k.id));m.cu.ways=m.cu.ways.filter(w=>w.id!==id)}
const unterminatedComps=()=>{const set={};if(S.model.auto)return set;H.unterminated(S.model).forEach(u=>{const k=cableOf(u.cable);if(!k)return;const ep=k[u.end.toLowerCase()];if(ep.t==='comp')set[ep.id]=1});return set};

/* ---------- entry ---------- */
window.houseView=function(){
 ensureStyle();app$=document.getElementById('app')||window.app;
 if(typeof updateActiveNav==='function')updateActiveNav('sims');
 if(!S)S={model:null,tool:'select',csa:1.5,sel:null,pend:null,view:null,res:null,msg:'',kind:'',token:0,log:[],report:null,setup:{n:3,types:DEFAULT_ORDER.slice(0,3),manual:false},ptr:null,drag:null};
 S.token++;if(S.model)workshop();else setupView()};

/* ---------- setup ---------- */
function setupView(){
 const st=S.setup;let saved=null;try{saved=JSON.parse(localStorage.getItem(KEY))}catch(e){}
 app$.innerHTML=`<div class="breadcrumb"><a href="#/">← Home</a> / <span>House wiring practice</span></div>
 <h1>🏠 House Wiring Practice</h1>
 <p style="color:var(--mut);">Wire a house like an electrician. Choose the rooms, place the accessories, run and terminate the cables, set up the consumer unit, then switch on. The simulator solves the real circuit: it shows what works, where the faults are, and how the RCD and MCBs trip.</p>
 <div class="card"><h2 style="margin-top:0;">1. How many rooms?</h2>
  <div class="hs-row">${[1,2,3,4,5,6,7,8].map(n=>`<button class="${n===st.n?'':'secondary'}" onclick="HouseUI.setN(${n})">${n}</button>`).join('')}</div>
  <h2>2. What is each room?</h2>
  <div class="hs-grid2">${st.types.map((t,i)=>`<label style="font-size:.85rem;font-weight:600;">Room ${i+1}<select class="hs-sel" style="width:100%" onchange="HouseUI.setType(${i},this.value)">${ROOM_TYPES.map(o=>`<option${o===t?' selected':''}>${o}</option>`).join('')}</select></label>`).join('')}</div>
  <h2>3. How will you terminate the cables?</h2>
  <label class="hs-row"><input type="checkbox" ${st.manual?'checked':''} onchange="HouseUI.setManual(this.checked)"> I will connect every cable core to its terminal myself (harder: wrong connections cause real faults)</label>
  <p style="color:var(--mut);font-size:.85rem;margin:4px 0;">If this is off, cables are connected correctly as you draw them, and you concentrate on the design: circuits, cable sizes and protective devices.</p>
  <div class="hs-row" style="margin-top:14px;"><button onclick="HouseUI.start(false)">Start wiring ➜</button><button class="secondary" onclick="HouseUI.start(true)">Start with a worked example</button>${saved&&saved.model?`<button class="secondary" onclick="HouseUI.loadSaved()">Continue saved house</button>`:''}</div></div>
 <div class="card"><h3 style="margin-top:0;">What a good design has</h3>
  <ul style="margin:0 0 0 18px;font-size:.9rem;line-height:1.6;">
   <li>A <b>lighting circuit</b>: 1.5 mm² cable, 6 A device, each light with a switch (use the switch drop cable between light and switch).</li>
   <li>A <b>socket ring</b>: 2.5 mm² cable, 32 A device, both ends back at the consumer unit. Or radials: 2.5 mm² and 20 A.</li>
   <li>A <b>cooker</b> circuit (6 mm², 32 A) and a <b>shower</b> circuit (10 mm², 40 A or 45 A) where needed.</li>
   <li>A <b>30 mA RCD</b> protecting the circuits, and an <b>earth</b> connected at every accessory.</li>
   <li>Cable size and device rating that match the load, and voltage drop within limits.</li></ul></div>`}
const U={
 setN(n){const st=S.setup;st.n=n;st.types=DEFAULT_ORDER.slice(0,n).map((d,i)=>st.types[i]||d);setupView()},
 setType(i,v){S.setup.types[i]=v},
 setManual(v){S.setup.manual=v},
 start(example){const st=S.setup;S.model=newModel(st.types,st.manual);if(example){H.buildExample(S.model);S.model.auto=true;S.example=true}else S.example=false;
  S.sel=null;S.view=null;S.res=null;S.report=null;S.log=[];persist();workshop();say(example?'A correct example has been built. Study it, switch on, or inject a failure.':'Pick a tool and click in a room to place an accessory.')},
 loadSaved(){try{const sv=JSON.parse(localStorage.getItem(KEY));S.model=sv.model;S.setup.manual=!S.model.auto;S.view=null;S.res=null;workshop()}catch(e){}}
};
window.HouseUI=U;

/* ---------- workshop skeleton ---------- */
function workshop(){
 app$.innerHTML=`<div class="breadcrumb"><a href="#/">← Home</a> / <a href="#/house" onclick="HouseUI.newHouse();return false;">House wiring practice</a> / <span>Workshop</span></div>
 <h1>🏠 House Wiring Practice</h1>
 <div class="hs-wrap"><div>
  <div class="hs-toolbar" id="hs-toolbar"></div>
  <div class="hs-status" id="hs-status"></div>
  <div class="card hs-canvas" id="hs-plan"></div>
  <div class="hs-row" id="hs-runbar" style="margin-top:10px;"></div>
  <div id="hs-results"></div>
 </div><div>
  <div class="card" id="hs-cu"></div>
  <div class="card" id="hs-insp"></div>
  <div class="card" id="hs-fail"></div>
 </div></div>`;
 drawToolbar();drawPlan();drawCU();drawInsp();drawFail();drawRunbar();say(S.msg||'Pick a tool and click in a room to place an accessory.',S.kind);drawResults()}
U.newHouse=()=>{if(S.model&&!confirm('Leave this house? Your work is saved on this device.'))return;S.model=null;S.view=null;S.res=null;S.token++;setupView()};

function drawToolbar(){
 const e=el('hs-toolbar');if(!e)return;
 e.innerHTML=TOOLS.map(t=>`<button class="secondary hs-tool ${S.tool===t[0]?'on':''}" onclick="HouseUI.tool('${t[0]}')">${t[1]}</button>`).join('')+
 `<select class="hs-sel" title="Cable size" onchange="HouseUI.csa(this.value)">${[1,1.5,2.5,4,6,10].map(c=>`<option value="${c}"${c===S.csa?' selected':''}>${c} mm² cable</option>`).join('')}</select>`}
const HINT={select:'Click an accessory to inspect it. Drag it to move it.',light:'Click inside a room to place a ceiling light.',switch:'Click inside a room to place a light switch.',socket:'Click inside a room to place a double socket.',cooker:'Click inside a room to place a cooker.',shower:'Click inside a room to place an electric shower.',immersion:'Click inside a room to place an immersion heater.',cable:'Click a circuit point on the consumer unit or an accessory, then click where the cable ends.',terminate:'Click an accessory to connect its cable cores to its terminals.',loop:'Click an accessory to measure its earth fault loop impedance with a loop tester.',delete:'Click an accessory or a cable to remove it.'};
U.tool=t=>{S.tool=t;S.pend=null;drawToolbar();drawPlan();say(HINT[t])};
U.csa=v=>{S.csa=parseFloat(v)};

/* ---------- plan drawing ---------- */
const tx=(x,y,s,o)=>{o=o||{};return `<text x="${x}" y="${y}"${o.a?` text-anchor="${o.a}"`:''} style="font-size:${o.s||9}px;fill:${o.c||'#0f172a'};stroke:none;font-weight:${o.w||700};pointer-events:none">${s}</text>`};
function loadMaps(){const snap=S.view&&S.view.snap,on={},byComp={};if(snap)snap.loads.forEach(l=>{(byComp[l.comp]=byComp[l.comp]||[]).push(l);if(l.on)on[l.comp]=Math.max(on[l.comp]||0,Math.min(1,(l.V*l.V)/(230*230)))});return {on,byComp}}
function icon(c,lm,unt){
 const sel=S.sel&&S.sel.t==='comp'&&S.sel.id===c.id,on=lm.on[c.id];let s=`<g data-k="comp:${c.id}" transform="translate(${c.x} ${c.y})" style="cursor:pointer">`;
 if(sel)s+=`<circle r="22" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="4 3"/>`;
 if(c.type==='light'){if(on)s+=`<circle r="26" fill="rgba(253,224,71,${.18+.4*on})"/>`;s+=`<circle r="10" fill="${on?'#fde047':'#fff'}" stroke="#0f172a" stroke-width="2"/><path d="M-7 -7L7 7M7 -7L-7 7" stroke="#0f172a" stroke-width="1.6"/>`}
 else if(c.type==='switch'){s+=`<rect x="-9" y="-9" width="18" height="18" rx="3" fill="#fff" stroke="#0f172a" stroke-width="2"/><path d="M0 4L${c.on===false?'-5 -3':'5 -6'}" stroke="${c.on===false?'#64748b':'#dc2626'}" stroke-width="2.4" stroke-linecap="round"/>`}
 else if(c.type==='socket'){s+=`<rect x="-12" y="-9" width="24" height="18" rx="4" fill="#fff" stroke="#0f172a" stroke-width="2"/><rect x="-1.5" y="-6" width="3" height="5" fill="#0f172a"/><rect x="-7" y="1" width="3" height="5" fill="#0f172a"/><rect x="4" y="1" width="3" height="5" fill="#0f172a"/>`;
  (c.appl||[]).forEach((a,i)=>{const l=(lm.byComp[c.id]||[]).find(x=>x.i===i);const run=l&&l.on;s+=tx(0,19+i*9,H.APPL[a]?H.APPL[a].n:a,{s:7.5,c:run?'#b45309':'#475569'})})}
 else if(c.type==='cooker'){s+=`<rect x="-16" y="-13" width="32" height="26" rx="3" fill="${on?'#fed7aa':'#fff'}" stroke="#0f172a" stroke-width="2"/>`+[[-7,-5],[7,-5],[-7,6],[7,6]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="${on?'#ea580c':'none'}" stroke="#0f172a" stroke-width="1.4"/>`).join('')}
 else if(c.type==='shower'){s+=`<circle r="13" fill="${on?'#bae6fd':'#fff'}" stroke="#0f172a" stroke-width="2"/><path d="M-6 -2V6M0 -2V8M6 -2V6" stroke="#0284c7" stroke-width="2" stroke-linecap="round"/>`}
 else if(c.type==='immersion'){s+=`<rect x="-8" y="-13" width="16" height="26" rx="6" fill="${on?'#fecaca':'#fff'}" stroke="#0f172a" stroke-width="2"/><path d="M-4 -5Q0 -9 4 -5T-4 3T4 9" fill="none" stroke="${on?'#dc2626':'#475569'}" stroke-width="1.6"/>`}
 if(unt)s+=`<circle cx="12" cy="-12" r="6" fill="#dc2626"/>${tx(12,-9,'!',{a:'middle',s:9,c:'#fff'})}`;
 return s+`<title>${esc(H.NAMES[c.type])}</title></g>`}
function cablePts(k){const m=S.model,a=H.epPos(m,k.a),b=H.epPos(m,k.b);
 if(k.b.t==='cu')return [a,[b[0],a[1]],b];if(k.a.t==='cu')return [a,[a[0],b[1]],b];
 return Math.abs(a[0]-b[0])>Math.abs(a[1]-b[1])?[a,[b[0],a[1]],b]:[a,[a[0],b[1]],b]}
function planSvg(){
 const m=S.model;let W=0,Hh=0;m.rooms.forEach(r=>{W=Math.max(W,r.x+r.w);Hh=Math.max(Hh,r.y+r.h)});W+=M0;Hh+=M0;
 const lm=loadMaps(),unt=unterminatedComps();
 let s=`<svg id="hs-svg" viewBox="0 0 ${W} ${Hh}" role="img" aria-label="House plan">`;
 m.rooms.forEach(r=>{s+=`<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="#fffdf6" stroke="#475569" stroke-width="3"/>`+tx(r.x+r.w/2,r.y+14,esc(r.name),{a:'middle',s:11,c:'#64748b'})});
 // cables
 const idx={};m.cables.forEach(k=>{const pts=cablePts(k);const sel=S.sel&&S.sel.t==='cable'&&S.sel.id===k.id;const d='M'+pts.map(p=>p.join(' ')).join(' L');
  const faultCab=S.view&&S.view.markers&&S.view.markers.some(x=>x.cable===k.id);
  s+=`<path d="${d}" fill="none" stroke="${faultCab?'#dc2626':CSA_COL[k.csa]}" stroke-width="${sel?5:3}" ${k.kind==='drop'?'stroke-dasharray="6 3"':''} stroke-linejoin="round" stroke-linecap="round" opacity=".9"/><path d="${d}" fill="none" stroke="transparent" stroke-width="14" data-k="cable:${k.id}" style="cursor:pointer"/>`;
  const a=pts[0],b=pts[2],mid=[(a[0]+b[0])/2,(a[1]+b[1])/2];if(sel)s+=tx(mid[0]+3,mid[1]-3,k.csa+' mm² '+H.cableLength(m,k).toFixed(0)+' m',{s:7.5,c:'#334155',w:600})});
 // consumer unit
 const cu=m.cu;s+=`<g data-k="cu"><rect x="${cu.x}" y="${cu.y}" width="140" height="44" rx="4" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>${tx(cu.x+70,cu.y+13,'Consumer unit'+(cu.rcd.present?' + RCD':''),{a:'middle',s:9})}`;
 cu.ways.forEach((w,i)=>{const px=cu.x+16+i*16,py=cu.y+30,pend=S.pend&&S.pend.t==='cu'&&S.pend.way===w.id;const tr=S.view&&S.view.tripped&&S.view.tripped[w.id];
  s+=`<circle cx="${px}" cy="${py}" r="6.5" fill="${tr?'#fecaca':pend?'#fdba74':'#fff'}" stroke="#0f172a" stroke-width="1.6" data-k="port:${w.id}" style="cursor:pointer"/>`+tx(px,py+2.8,i+1,{a:'middle',s:8})});
 s+='</g>';
 m.comps.forEach(c=>{s+=icon(c,lm,unt[c.id])});
 if(S.pend&&S.pend.t==='comp'){const c=compOf(S.pend.id);if(c)s+=`<circle cx="${c.x}" cy="${c.y}" r="18" fill="none" stroke="#f97316" stroke-width="3"/>`}
 s+=`<path id="hs-rubber" d="" fill="none" stroke="#f97316" stroke-width="2.5" stroke-dasharray="5 4" pointer-events="none"/>`;
 // markers
 const mk=S.view&&S.view.markers||[];mk.forEach((x,i)=>{s+=`<g class="hs-pulse"><circle cx="${x.pos[0]}" cy="${x.pos[1]}" r="17" fill="rgba(220,38,38,.18)" stroke="#dc2626" stroke-width="3"/></g>`+tx(x.pos[0],x.pos[1]+4,i+1,{a:'middle',s:12,c:'#b91c1c'})});
 const hz=S.view&&S.view.hazards||[];hz.forEach(h=>{const p=h.comp?(compOf(h.comp)?[compOf(h.comp).x,compOf(h.comp).y]:null):h.cable?(cableOf(h.cable)?(()=>{const q=cablePts(cableOf(h.cable));return [(q[0][0]+q[2][0])/2,(q[0][1]+q[2][1])/2]})():null):null;if(p)s+=`<g class="hs-pulse"><path d="M${p[0]} ${p[1]-27}l11 19h-22z" fill="#f59e0b" stroke="#92400e" stroke-width="1.5"/></g>`+tx(p[0],p[1]-12,'!',{a:'middle',s:11})});
 return s+'</svg>'}
function drawPlan(){const e=el('hs-plan');if(!e)return;e.innerHTML=planSvg();bindPlan()}
const svgPt=(ev)=>{const svg=el('hs-svg'),p=svg.createSVGPoint();p.x=ev.clientX;p.y=ev.clientY;return p.matrixTransform(svg.getScreenCTM().inverse())};
function epFromKey(k){if(!k)return null;if(k.startsWith('comp:'))return {t:'comp',id:k.slice(5)};if(k.startsWith('port:'))return {t:'cu',way:k.slice(5)};return null}
function bindPlan(){
 const svg=el('hs-svg');if(!svg)return;
 svg.addEventListener('pointerdown',ev=>{
  const pt=svgPt(ev),tg=ev.target.closest('[data-k]'),key=tg?tg.dataset.k:null,t=S.tool,m=S.model;
  if(S.res&&S.view&&!S.running&&t!=='select'&&t!=='loop'&&['light','switch','socket','cooker','shower','immersion','cable','delete','terminate'].includes(t))clearRun();
  if(['light','switch','socket','cooker','shower','immersion'].includes(t)){const r=roomAt(pt.x,pt.y);if(!r){say('Click inside a room.','bad');return}
   if(m.comps.length>=70){say('That is enough accessories for one house.','bad');return}
   const c={id:uid('c'),type:t,room:r.id,x:Math.round(pt.x/10)*10,y:Math.round(pt.y/10)*10};if(t==='socket')c.appl=[];if(t==='switch')c.on=true;m.comps.push(c);S.sel={t:'comp',id:c.id};persist();drawPlan();drawInsp();say(H.NAMES[t]+' placed in the '+r.name.toLowerCase()+'.','good');return}
  if(t==='cable'){const ep=epFromKey(key);if(!ep){S.pend=null;drawPlan();say('Click a circuit point on the consumer unit, or an accessory.');return}
   if(!S.pend){S.pend=ep;drawPlan();say('Now click where the cable ends.');return}
   addCable(S.pend,ep);S.pend=null;drawPlan();drawInsp();drawCU();return}
  if(t==='delete'){if(key&&key.startsWith('comp:')){removeComp(key.slice(5));S.sel=null;persist();drawPlan();drawInsp();say('Accessory removed.')}else if(key&&key.startsWith('cable:')){removeCable(key.slice(6));S.sel=null;persist();drawPlan();drawInsp();say('Cable removed.')}return}
  if(t==='terminate'){if(key&&key.startsWith('comp:'))openTerminate(key.slice(5));else say('Click an accessory to terminate its cables.');return}
  if(t==='loop'){if(key&&key.startsWith('comp:'))loopReading(key.slice(5));else say('Click an accessory to test it.');return}
  // select tool
  if(key&&key.startsWith('comp:')){S.sel={t:'comp',id:key.slice(5)};const c=compOf(S.sel.id);S.drag={id:c.id,dx:pt.x-c.x,dy:pt.y-c.y,moved:false};drawInsp();drawPlan()}
  else if(key&&key.startsWith('cable:')){S.sel={t:'cable',id:key.slice(6)};drawInsp();drawPlan()}
  else{S.sel=null;drawInsp();drawPlan()}});
 svg.addEventListener('pointermove',ev=>{
  const pt=svgPt(ev);
  if(S.drag){const c=compOf(S.drag.id);if(!c)return;c.x=Math.round((pt.x-S.drag.dx)/5)*5;c.y=Math.round((pt.y-S.drag.dy)/5)*5;S.drag.moved=true;const r=roomAt(c.x,c.y);if(r)c.room=r.id;drawPlanKeepDrag();return}
  if(S.pend){const a=S.pend.t==='cu'?H.epPos(S.model,S.pend):[compOf(S.pend.id).x,compOf(S.pend.id).y];const rb=el('hs-rubber');if(rb)rb.setAttribute('d','M'+a[0]+' '+a[1]+' L'+pt.x+' '+pt.y)}});
 const end=()=>{if(S.drag){if(S.drag.moved)persist();S.drag=null}};
 svg.addEventListener('pointerup',end);svg.addEventListener('pointerleave',end)}
function drawPlanKeepDrag(){const e=el('hs-plan');if(!e)return;const d=S.drag;e.innerHTML=planSvg();bindPlan();S.drag=d}
function clearRun(){S.token++;S.view=null;S.res=null;S.report=null;S.running=false;drawResults();drawCU()}

function addCable(a,b){
 const m=S.model,ca=a.t==='comp'?compOf(a.id):null,cb=b.t==='comp'?compOf(b.id):null;
 if(a.t==='cu'&&b.t==='cu')return say('A cable has to run between the consumer unit and an accessory.','bad');
 if(a.t==='comp'&&b.t==='comp'&&a.id===b.id)return say('That cable would start and end at the same place.','bad');
 const sw=[ca,cb].filter(c=>c&&c.type==='switch');
 let kind='tne';
 if(sw.length){const other=ca&&ca.type==='switch'?cb:ca;if(!other||other.type!=='light')return say('A light switch can only be connected to a light (a switch drop cable).','bad');kind='drop';
  const sc=sw[0];if(m.cables.some(k=>(k.a.t==='comp'&&k.a.id===sc.id)||(k.b.t==='comp'&&k.b.id===sc.id)))return say('That switch already has its cable.','bad')}
 const k={id:uid('k'),kind,csa:S.csa,a,b};m.cables.push(k);if(m.auto)['A','B'].forEach(e=>H.CORES[kind].forEach(core=>{m.terms[k.id+'|'+e+'|'+core]=H.autoTerm(m,k,e,core)}));
 S.sel={t:'cable',id:k.id};persist();say((kind==='drop'?'Switch drop':'Cable')+' of '+k.csa+' mm² and '+H.cableLength(m,k).toFixed(1)+' m added.'+(!m.auto?' Use the Terminate tool to connect the cores.':''),'good')}

/* ---------- consumer unit panel ---------- */
function boardSvg(){
 const m=S.model,ways=m.cu.ways,tr=(S.view&&S.view.tripped)||{};const n=ways.length+1+(m.cu.rcd.present?1:0);const W=Math.max(300,24+n*34);
 let s=`<svg viewBox="0 0 ${W} 120" width="100%" role="img" aria-label="Consumer unit"><rect x="2" y="2" width="${W-4}" height="116" rx="8" fill="#cbd5e1" stroke="#475569" stroke-width="2"/><rect x="10" y="12" width="${W-20}" height="96" rx="5" fill="#e5e7eb"/>`;
 let x=18;const dev=(w,label,sub,on,col,tripped)=>{s+=`<rect x="${x}" y="22" width="${w}" height="62" rx="3" fill="#fff" stroke="${tripped?'#dc2626':'#64748b'}" stroke-width="${tripped?2.4:1.2}"/><rect x="${x+w/2-6}" y="${on?28:52}" width="12" height="22" rx="2" fill="${tripped?'#dc2626':col}"/>`+tx(x+w/2,96,label,{a:'middle',s:8})+tx(x+w/2,106,sub,{a:'middle',s:7,c:'#475569',w:600});x+=w+4};
 dev(30,'Main','100 A',true,'#dc2626',false);
 if(m.cu.rcd.present)dev(30,'RCD',m.cu.rcd.mA+' mA',!tr.rcd,'#111827',!!tr.rcd);
 ways.forEach((w,i)=>dev(30,(i+1)+'',w.rating+'A '+(w.type==='RCBO'?'RCBO':w.curve),!tr[w.id],'#111827',!!tr[w.id]));
 return s+'</svg>'}
function drawCU(){
 const e=el('hs-cu');if(!e)return;const m=S.model,cu=m.cu;
 const ratings=[6,10,16,20,25,32,40,45,50];
 e.innerHTML=`<h3 style="margin:0 0 6px;">Consumer unit</h3>${boardSvg()}
 <label class="hs-row"><input type="checkbox" ${cu.rcd.present?'checked':''} onchange="HouseUI.rcd(this.checked)"> Fit a 30 mA RCD (protects every circuit)</label>
 ${cu.ways.map((w,i)=>`<div class="hs-row" style="border-top:1px solid var(--line);padding-top:6px;gap:5px;"><b style="min-width:16px;">${i+1}</b>
  <input class="hs-in" style="width:96px;flex:1 1 96px" value="${esc(w.label)}" onchange="HouseUI.wayLabel('${w.id}',this.value)" aria-label="Circuit name">
  <select class="hs-sel" onchange="HouseUI.wayType('${w.id}',this.value)"><option${w.type==='MCB'?' selected':''}>MCB</option><option${w.type==='RCBO'?' selected':''}>RCBO</option></select>
  <select class="hs-sel" onchange="HouseUI.wayRating('${w.id}',this.value)">${ratings.map(r=>`<option${r===w.rating?' selected':''}>${r}</option>`).join('')}</select><span style="font-size:.8rem">A</span>
  <select class="hs-sel" onchange="HouseUI.wayCurve('${w.id}',this.value)">${['B','C','D'].map(c=>`<option${c===w.curve?' selected':''}>${c}</option>`).join('')}</select>
  <button class="secondary hs-tool" onclick="HouseUI.delWay('${w.id}')" aria-label="Remove circuit">✕</button></div>`).join('')}
 <div class="hs-row"><select class="hs-sel" id="hs-preset">${Object.keys(PRESETS).map(p=>`<option>${p}</option>`).join('')}</select><button class="secondary hs-tool" onclick="HouseUI.addWay()">+ Add circuit</button></div>
 <p style="color:var(--mut);font-size:.8rem;margin:4px 0 0;">To connect a cable, use the Cable tool and click the numbered circuit point on the consumer unit in the plan.</p>`}
U.rcd=v=>{S.model.cu.rcd.present=v;persist();clearRun();drawCU();drawPlan()};
U.addWay=()=>{const m=S.model;if(m.cu.ways.length>=8)return say('The consumer unit has eight ways.','bad');const p=el('hs-preset').value,pr=PRESETS[p];m.cu.ways.push({id:uid('w'),label:p,type:'MCB',rating:pr[0],curve:pr[1]});persist();clearRun();drawCU();drawPlan();say('Circuit '+m.cu.ways.length+' added. Use the Cable tool from its numbered point.','good')};
U.delWay=id=>{removeWay(id);persist();clearRun();drawCU();drawPlan();drawInsp()};
U.wayLabel=(id,v)=>{H.way(S.model,id).label=v;persist()};
U.wayType=(id,v)=>{H.way(S.model,id).type=v;persist();clearRun();drawCU()};
U.wayRating=(id,v)=>{H.way(S.model,id).rating=parseInt(v);persist();clearRun();drawCU()};
U.wayCurve=(id,v)=>{H.way(S.model,id).curve=v;persist();clearRun();drawCU()};

/* ---------- inspector ---------- */
function drawInsp(){
 const e=el('hs-insp');if(!e)return;const m=S.model,sel=S.sel;
 if(!sel){e.innerHTML=`<h3 style="margin:0 0 6px;">Inspector</h3><p style="color:var(--mut);font-size:.88rem;margin:0;">Select an accessory or a cable to see its details. Cables are coloured by size: <span style="color:${CSA_COL[1.5]}">1.5</span> · <span style="color:${CSA_COL[2.5]}">2.5</span> · <span style="color:${CSA_COL[4]}">4</span> · <span style="color:${CSA_COL[6]}">6</span> · <span style="color:${CSA_COL[10]}">10 mm²</span>. A dashed cable is a switch drop.</p>`;return}
 if(sel.t==='cable'){const k=cableOf(sel.id);if(!k){e.innerHTML='';return}
  e.innerHTML=`<h3 style="margin:0 0 6px;">Cable</h3><p style="margin:0;font-size:.88rem;">${esc(H.where(m,k.a))} ⟷ ${esc(H.where(m,k.b))}<br>Length about <b>${H.cableLength(m,k).toFixed(1)} m</b>. Type: ${k.kind==='drop'?'switch drop (line and switched line)':'flat twin and earth'}.</p>
  <div class="hs-row"><label style="font-size:.85rem;">Size <select class="hs-sel" onchange="HouseUI.cableCsa('${k.id}',this.value)">${[1,1.5,2.5,4,6,10].map(c=>`<option value="${c}"${c===k.csa?' selected':''}>${c} mm²</option>`).join('')}</select></label><button class="secondary hs-tool" onclick="HouseUI.delCable('${k.id}')">Remove cable</button></div>
  <p style="color:var(--mut);font-size:.8rem;margin:2px 0;">Rated ${H.IZ[k.csa]} A. Fitting a smaller cable than the device rating allows is dangerous.</p>`;return}
 const c=compOf(sel.id);if(!c){e.innerHTML='';return}
 let h=`<h3 style="margin:0 0 6px;">${esc(H.NAMES[c.type])}</h3><p style="margin:0;font-size:.88rem;color:var(--mut);">${esc((H.roomOf(m,c)||{name:''}).name)}</p>`;
 if(c.type==='socket'){h+=`<p style="font-size:.85rem;margin:6px 0 2px;font-weight:700;">Plugged in:</p><div class="hs-row">${Object.keys(H.APPL).map(a=>`<label style="font-size:.8rem;"><input type="checkbox" ${(c.appl||[]).includes(a)?'checked':''} onchange="HouseUI.appl('${c.id}','${a}',this.checked)"> ${H.APPL[a].n} ${H.APPL[a].w} W</label>`).join('')}</div>`}
 if(c.type==='switch')h+=`<label class="hs-row"><input type="checkbox" ${c.on!==false?'checked':''} onchange="HouseUI.swOn('${c.id}',this.checked)"> Switch is on</label>`;
 if(H.FIXED[c.type])h+=`<p style="font-size:.85rem;margin:6px 0;">${H.FIXED[c.type].n}: ${H.FIXED[c.type].w} W (${(H.FIXED[c.type].w/230).toFixed(1)} A).</p>`;
 if(c.type==='light')h+=`<p style="font-size:.85rem;margin:6px 0;">LED lamp, ${H.LAMP_W} W.</p>`;
 const sv=S.view&&S.view.snap;if(sv){const ls=sv.loads.filter(l=>l.comp===c.id);if(ls.length)h+=`<p style="font-size:.85rem;margin:6px 0;"><b>Now:</b> ${ls.map(l=>`${esc(l.name)} ${l.on?'running at '+Math.round(l.V)+' V, '+Math.round(l.P)+' W':'off'}`).join('; ')}</p>`}
 h+=`<div class="hs-row"><button class="secondary hs-tool" onclick="HouseUI.tool('terminate');HouseUI.openTerm('${c.id}')">Terminals</button><button class="secondary hs-tool" onclick="HouseUI.loop('${c.id}')">Loop test</button><button class="secondary hs-tool" onclick="HouseUI.delComp('${c.id}')">Remove</button></div>`;
 e.innerHTML=h}
U.cableCsa=(id,v)=>{cableOf(id).csa=parseFloat(v);persist();clearRun();drawPlan();drawInsp()};
U.delCable=id=>{removeCable(id);S.sel=null;persist();clearRun();drawPlan();drawInsp()};
U.delComp=id=>{removeComp(id);S.sel=null;persist();clearRun();drawPlan();drawInsp()};
U.appl=(id,a,on)=>{const c=compOf(id);c.appl=c.appl||[];if(on&&!c.appl.includes(a))c.appl.push(a);if(!on)c.appl=c.appl.filter(x=>x!==a);persist();clearRun();drawPlan()};
U.swOn=(id,on)=>{compOf(id).on=on;persist();if(S.view)reSnap();else drawPlan()};
U.openTerm=id=>openTerminate(id);
U.loop=id=>loopReading(id);

/* ---------- terminating ---------- */
function openTerminate(id){
 const m=S.model,c=compOf(id);if(!c)return;
 const ends=[];m.cables.forEach(k=>{['A','B'].forEach(e=>{const ep=k[e.toLowerCase()];if(ep.t==='comp'&&ep.id===id)ends.push({k,e})})});
 let h=`<h3 style="margin-top:0;">Terminate: ${esc(H.NAMES[c.type])} in the ${esc((H.roomOf(m,c)||{name:''}).name.toLowerCase())}</h3>`;
 if(!ends.length)h+='<p>No cable is connected to this accessory yet. Use the Cable tool first.</p>';
 ends.forEach(x=>{const other=x.k[(x.e==='A'?'b':'a')];h+=`<div style="border:1px solid var(--line);border-radius:8px;padding:8px;margin:8px 0;"><b>${x.k.kind==='drop'?'Switch drop':'Cable'} ${x.k.csa} mm²</b> from ${esc(H.where(m,other).toLowerCase())}`;
  H.CORES[x.k.kind].forEach(core=>{const key=x.k.id+'|'+x.e+'|'+core,cur=H.termOf(m,x.k,x.e,core);
   h+=`<div class="hs-row"><span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:${CORECOL[core]};${core==='S'?'outline:2px solid #2563eb;':''}"></span><span style="min-width:200px;font-size:.85rem;">${CORETXT[core]}</span>
   <select class="hs-sel" data-key="${key}"><option value="">not connected</option>${H.TERMS[c.type].map(t=>`<option value="${t}"${cur===t?' selected':''}>${TNAME[t]}</option>`).join('')}</select></div>`});
  h+='</div>'});
 h+=`<div class="hs-row"><button class="secondary" id="hs-tauto">Connect this accessory correctly</button><button id="hs-tdone">Done</button></div>`;
 const mo=document.createElement('div');mo.className='hs-modal';mo.innerHTML='<div>'+h+'</div>';document.body.appendChild(mo);
 const close=()=>{mo.remove();clearRun();drawPlan();drawInsp()};
 mo.addEventListener('change',ev=>{const k=ev.target.dataset&&ev.target.dataset.key;if(k){m.terms[k]=ev.target.value;persist()}});
 mo.querySelector('#hs-tdone').onclick=close;
 mo.querySelector('#hs-tauto').onclick=()=>{ends.forEach(x=>H.CORES[x.k.kind].forEach(core=>{m.terms[x.k.id+'|'+x.e+'|'+core]=H.autoTerm(m,x.k,x.e,core)}));persist();mo.remove();openTerminate(id)};
 mo.addEventListener('pointerdown',ev=>{if(ev.target===mo)close()})}

/* ---------- loop test ---------- */
function loopReading(id){
 const m=S.model,c=compOf(id);if(!c)return;const r=H.loopTest(m,id);
 if(!r||!r.zsOK){say('The loop tester reads open circuit: the line or earth of this accessory is not connected back to the consumer unit.','bad');return}
 const ci=H.circuitsOf(m).find(x=>x.comps.some(y=>y.id===id));const w=ci&&ci.way,lim=w?230*0.95/(H.CURVE[w.curve][1]*w.rating):null;
 const ok=lim!==null?r.zs<=0.8*lim:true;
 say('Loop test at the '+H.NAMES[c.type].toLowerCase()+': Zs = '+r.zs.toFixed(2)+' Ω, earth fault current '+Math.round(r.I)+' A, prospective short-circuit current '+Math.round(r.pscc)+' A.'+(lim!==null?' Limit for the '+w.rating+' A type '+w.curve+' device: '+lim.toFixed(2)+' Ω (80%: '+(0.8*lim).toFixed(2)+' Ω). '+(ok?'PASS':'FAIL'):' This accessory is on no circuit yet.'),ok?'good':'bad')}

/* ---------- failures ---------- */
const FAILS=[['nail','A nail goes through a cable (line to earth)'],['crush','A cable is crushed (line to neutral)'],['leak','An appliance leaks current to its case'],['water','Water gets into a light fitting'],['loose','A loose terminal at an accessory'],['open','A conductor breaks inside a cable'],['overload','Too many appliances on one socket'],['lostearth','An appliance loses its earth and then leaks']];
function drawFail(){
 const e=el('hs-fail');if(!e)return;const fs=S.model.faults;
 e.innerHTML=`<h3 style="margin:0 0 6px;">Real-life failures</h3><p style="color:var(--mut);font-size:.82rem;margin:0 0 6px;">Add a failure to your wiring, then switch on to see what the protection does. If you have selected a cable or accessory, the failure goes there.</p>
 <div class="hs-row"><select class="hs-sel" id="hs-failsel" style="max-width:100%">${FAILS.map(f=>`<option value="${f[0]}">${f[1]}</option>`).join('')}</select></div>
 <div class="hs-row"><button class="secondary hs-tool" onclick="HouseUI.addFail()">Add failure</button>${fs.length?`<button class="secondary hs-tool" onclick="HouseUI.clearFails()">Clear all</button>`:''}</div>
 ${fs.map((f,i)=>`<div class="hs-row" style="font-size:.82rem;border-top:1px solid var(--line);padding-top:4px;"><span style="flex:1">${esc(failText(f))}</span><button class="secondary hs-tool" onclick="HouseUI.rmFail(${i})">✕</button></div>`).join('')}`}
function failText(f){const m=S.model;if(f.type==='nail')return (f.kind==='LN'?'Crushed cable (line to neutral)':f.kind==='LE'?'Nail through a cable (line to earth)':'Damaged cable')+': '+H.where(m,cableOf(f.cable)?cableOf(f.cable).a:{t:'comp',id:''}).toLowerCase()+' run';
 const c=f.comp&&compOf(f.comp);const w=c?H.where(m,{t:'comp',id:c.id}).toLowerCase():'';
 return f.type==='leak'?'Appliance leaking '+f.mA+' mA: '+w:f.type==='water'?'Water in light, '+f.mA+' mA: '+w:f.type==='loose'?'Loose terminal ('+f.ohm+' Ω): '+w:f.type==='open'?'Broken '+(f.core==='L'?'line':'neutral')+' conductor in a cable':'Failure'}
const pick=a=>a[Math.floor(Math.random()*a.length)];
U.addFail=()=>{const m=S.model,t=el('hs-failsel').value,sel=S.sel;let f=null;
 const comps=(types)=>sel&&sel.t==='comp'&&types.includes(compOf(sel.id).type)?[compOf(sel.id)]:m.comps.filter(c=>types.includes(c.type)&&m.cables.some(k=>(k.a.t==='comp'&&k.a.id===c.id)||(k.b.t==='comp'&&k.b.id===c.id)));
 const cabs=()=>sel&&sel.t==='cable'?[cableOf(sel.id)]:m.cables.filter(k=>k.kind==='tne');
 if(t==='nail'||t==='crush'){const k=pick(cabs());if(!k)return say('Draw a cable first.','bad');f={type:'nail',cable:k.id,kind:t==='nail'?'LE':'LN',f:.3+Math.random()*.4}}
 else if(t==='leak'||t==='lostearth'){const c=pick(comps(['socket','cooker','shower','immersion']));if(!c)return say('Place and connect a socket or an appliance first.','bad');
  let ai=0;if(c.type==='socket'){c.appl=c.appl||[];ai=c.appl.findIndex(a=>H.APPL[a]&&H.APPL[a].metal);if(ai<0){c.appl.push('kettle');ai=c.appl.length-1}}
  f={type:'leak',comp:c.id,i:ai,mA:t==='lostearth'?60:45};
  if(t==='lostearth'){m.cables.forEach(k=>['A','B'].forEach(e=>{const ep=k[e.toLowerCase()];if(ep.t==='comp'&&ep.id===c.id)m.terms[k.id+'|'+e+'|E']=''}))}}
 else if(t==='water'){const c=pick(comps(['light']));if(!c)return say('Place and connect a light first.','bad');f={type:'water',comp:c.id,mA:80}}
 else if(t==='loose'){const c=pick(comps(['socket','cooker','shower','immersion']));if(!c)return say('Place and connect a socket or an appliance first.','bad');f={type:'loose',comp:c.id,ohm:3}}
 else if(t==='open'){const k=pick(cabs());if(!k)return say('Draw a cable first.','bad');f={type:'open',cable:k.id,core:Math.random()<.5?'L':'N',f:.5}}
 else if(t==='overload'){const c=pick(comps(['socket']));if(!c)return say('Place and connect a socket first.','bad');['kettle','heater','toaster','microwave','washer'].forEach(a=>{if(!(c.appl||[]).includes(a))c.appl.push(a)});persist();clearRun();drawPlan();drawInsp();return say('Five heavy appliances are now plugged into one socket. Switch on to see the result.','good')}
 if(f){m.faults.push(f);persist();clearRun();drawFail();drawPlan();say('Failure added: '+failText(f)+'. Now press Switch on.','good')}};
U.rmFail=i=>{S.model.faults.splice(i,1);persist();clearRun();drawFail()};
U.clearFails=()=>{S.model.faults=[];persist();clearRun();drawFail()};

/* ---------- run bar ---------- */
function drawRunbar(){const e=el('hs-runbar');if(!e)return;
 e.innerHTML=`<button onclick="HouseUI.check()">✔ Check my wiring</button><button onclick="HouseUI.on()">⚡ Switch on</button><button class="secondary" onclick="HouseUI.reset()">Reset</button><button class="secondary" onclick="HouseUI.example()">Show a correct example</button><button class="secondary" onclick="HouseUI.clearAll()">Clear everything</button>`}
U.reset=()=>{clearRun();drawPlan();drawInsp();say('Reset. The consumer unit is switched off and the plan is back to editing.')};
U.example=()=>{if(S.model.comps.length&&!confirm('Replace your wiring with a correct example for these rooms?'))return;const m=S.model;m.faults=[];H.buildExample(m);m.auto=true;S.sel=null;persist();clearRun();drawCU();drawPlan();drawInsp();drawFail();say('A correct example has been built. Study it, then press Switch on.','good')};
U.clearAll=()=>{if(!confirm('Remove all accessories, cables and circuits?'))return;const m=S.model;m.comps=[];m.cables=[];m.terms={};m.faults=[];m.cu.ways=[];m.cu.rcd.present=false;S.sel=null;persist();clearRun();drawCU();drawPlan();drawInsp();drawFail();say('Everything removed.')};
function reSnap(){if(!S.view)return;const forced=S.view.tripped||{};S.view.snap=H.simulate(S.model,{forced});S.view.hazards=S.view.snap.hazards;drawPlan();drawInsp()}

/* ---------- check my wiring ---------- */
U.check=()=>{
 clearRun();const m=S.model,rv=H.review(m);S.report=rv;
 const errs=rv.issues.filter(i=>i.sev==='error').length,wr=rv.issues.filter(i=>i.sev==='warn').length,score=Math.max(0,100-errs*15-wr*5);
 S.checked={score,errs,wr};drawResults();el('hs-results').scrollIntoView({behavior:'smooth',block:'start'});
 say(errs?errs+' error'+(errs>1?'s':'')+' found in the design.':wr?'No errors, but '+wr+' warning'+(wr>1?'s':'')+'.':'The design review found no problems.',errs?'bad':'good')};
function drawResults(){
 const e=el('hs-results');if(!e)return;let h='';
 if(S.report){const rv=S.report,ck=S.checked||{score:0};
  h+=`<div class="card"><h2 style="margin-top:0;">Wiring check <span class="hs-chip ${ck.errs?'e':ck.wr?'w':'o'}">score ${ck.score}/100</span></h2>`;
  h+=rv.issues.length?`<ul class="hs-log">${rv.issues.map(i=>`<li class="${i.sev==='error'?'trip':'warn'}"><b>${i.sev==='error'?'Error':'Warning'}:</b> ${esc(i.text)}${i.ref?` <span style="color:var(--mut)">(${esc(i.ref)})</span>`:''}</li>`).join('')}</ul>`:'<p class="hs-ok" style="color:var(--ok);font-weight:700;">No problems found. Switch on to test it.</p>';
  if(rv.circuits.length)h+=`<div style="overflow-x:auto"><table class="hs-table"><tr><th>Circuit</th><th>Type</th><th>Load</th><th>Device</th><th>Cable</th><th>Volt drop</th><th>Zs</th><th>RCD</th></tr>${rv.circuits.map(c=>`<tr><td>${esc(c.label)}</td><td>${c.kind}</td><td>${c.Ib.toFixed(1)} A</td><td>${c.In} A ${c.way.curve}</td><td>${c.csa||'-'} mm² (${c.Iz} A)</td><td>${c.vd.toFixed(1)} V / ${c.vdLimit}</td><td>${c.zs===null?'-':c.zs.toFixed(2)+' / '+(0.8*c.zsMax).toFixed(2)+' Ω'}</td><td>${c.hasRCD?'yes':'<span class="hs-chip e">no</span>'}</td></tr>`).join('')}</table></div>`;
  h+='</div>'}
 if(S.log&&S.log.length){h+=`<div class="card"><h2 style="margin-top:0;">What happened</h2><ul class="hs-log" id="hs-loglist">${S.log.map(l=>`<li class="${l.c}">${l.t}</li>`).join('')}</ul>${S.summary||''}</div>`}
 e.innerHTML=h}

/* ---------- switch on ---------- */
U.on=async()=>{
 const m=S.model;if(S.running)return;
 if(!m.cu.ways.length){say('Add at least one circuit to the consumer unit and connect a cable to it first.','bad');return}
 clearRun();const token=S.token;S.running=true;S.report=null;S.log=[];S.summary='';
 const res=H.simulate(m);S.res=res;const snap0=H.simulate(m,{forced:{}});
 const markers=H.causes(m);
 S.view={snap:snap0,tripped:{},markers:[],hazards:[]};drawPlan();drawCU();
 const L=(t,c)=>{S.log.push({t,c:c||''});drawResults()};
 L('⚡ Supply switched on at the consumer unit.','ok');
 await sleep(900);if(token!==S.token)return;
 const bad=snap0.hazards.length||markers.length||res.events.length;
 if(markers.length||snap0.hazards.length){S.view.markers=markers;S.view.hazards=snap0.hazards;drawPlan()}
 if(!res.events.length){await sleep(500);if(token!==S.token)return;S.view={snap:res.events.length?snap0:H.simulate(m,{forced:{}}),tripped:{},markers,hazards:res.hazards};S.running=false;drawPlan();drawCU();finish(res,markers);return}
 let forced={};
 for(const e of res.events){
  const cur=H.simulate(m,{forced:Object.assign({},forced)});
  const big=e.kind==='mcb'&&e.dt<0.05;
  L(`⚡ ${e.kind==='rcd'?'Leakage':big?'Fault current':'Overload'}: ${e.I>=1?e.I.toFixed(e.I>=100?0:1)+' A':Math.round(e.I*1000)+' mA'} flowing…`,'warn');
  await sleep(1100);if(token!==S.token)return;
  forced[e.dev]=true;const snap=H.simulate(m,{forced:Object.assign({},forced)});
  S.view={snap,tripped:Object.assign({},forced),markers,hazards:snap.hazards};drawPlan();drawCU();
  L(`🔴 <b>${esc(e.name)} tripped</b> after ${fmtT(e.dt)} ${explainTrip(e)}`,'trip');await sleep(900);if(token!==S.token)return}
 S.running=false;S.view.markers=markers;drawPlan();finish(res,markers)};
function explainTrip(e){
 const m=S.model;
 if(e.kind==='rcd'){return `(${Math.round(e.I*1000)} mA leaking to earth, above the 30 mA limit). The RCD compares the current out and back; when some escapes it cuts the supply before anyone can be hurt.`}
 const w=H.way(m,e.dev),r=e.I/w.rating;
 if(e.dt<0.05)return `(${Math.round(e.I)} A, about ${r.toFixed(0)} times its ${w.rating} A rating). A short circuit or an earth fault: the magnetic trip opens the circuit at once.`;
 return `(${e.I.toFixed(1)} A, ${(r*100).toFixed(0)}% of its ${w.rating} A rating). An overload: the thermal element heats up and trips after a delay. The longer the overload, the hotter the cables get.`}
function finish(res,markers){
 const m=S.model;let h='';const hz=res.hazards;
 const off=res.loads.filter(l=>!l.on);
 const seenTxt={},caus=markers.filter(c=>seenTxt[c.text]?false:(seenTxt[c.text]=1));
 if(!res.events.length&&!hz.length&&!off.length&&!caus.length){h+=`<p style="color:var(--ok);font-weight:700;">Everything works: all lights and appliances are running, nothing tripped and no dangers were found.</p><p style="font-size:.9rem;">Now add a real-life failure from the list on the right and switch on again to see how the RCD and MCBs protect the house.</p>`;S.log.push({t:'✅ All loads are running normally.',c:'ok'})}
 if(caus.length){h+=`<h3>Where the problem is</h3><ol style="font-size:.9rem;">${caus.map(c=>`<li>${esc(c.text)}</li>`).join('')}</ol>`}
 if(hz.length){h+=`<h3>Dangers found</h3><ul class="hs-log">${hz.map(x=>`<li class="trip">⚠️ ${esc(x.text)}</li>`).join('')}</ul>`}
 if(off.length&&!res.events.length){const names={};off.forEach(l=>{names[l.name+' ('+(((H.roomOf(m,H.comp(m,l.comp))||{}).name)||'')+')']=1});h+=`<p style="font-size:.9rem;"><b>Not working:</b> ${esc(Object.keys(names).join(', '))}. Nothing tripped, so check that each one has a complete circuit: a cable from the consumer unit, every core connected, and for lights a switch that is on.</p>`}
 const noRCD=!(m.cu.rcd&&m.cu.rcd.present)&&!m.cu.ways.some(w=>w.type==='RCBO');
 if(noRCD&&(m.faults.length||hz.length))h+=`<p style="font-size:.9rem;"><b>No RCD:</b> without a 30 mA RCD a leakage to earth does not trip the MCB. People touching the faulty equipment can receive a dangerous shock. Fit an RCD and try again.</p>`;
 S.summary=h;drawResults();say(res.events.length?'Switched on: '+res.events.map(e=>e.name+' tripped').join(', ')+'.':hz.length||off.length||caus.length?'Switched on: problems were found. Read the results below.':'Switched on: everything works.',res.events.length||hz.length?'bad':'good')}
})();
