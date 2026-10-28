(function(){
// Builds a correct example wiring job for the rooms in a model (used as a worked solution and for testing).
const H=window.HouseSim;if(!H)return;
H.buildExample=function(m){
 m.comps=[];m.cables=[];m.terms={};m.faults=[];m.cu.ways=[];m.cu.rcd={present:true,mA:30};
 let cn=0,kn=0,wn=0;const nc=()=>'c'+(++cn),nk=()=>'k'+(++kn),nw=()=>'w'+(++wn);
 const addC=(type,r,x,y,extra)=>{const c=Object.assign({id:nc(),type,room:r.id,x:Math.round(x),y:Math.round(y)},extra||{});m.comps.push(c);return c};
 const addK=(kind,csa,a,b)=>{const k={id:nk(),kind,csa,a,b};m.cables.push(k);return k};
 const lights=[],sockets=[],fixed=[];const have={};
 m.rooms.forEach(r=>{
  const cuRoom=r.id===m.cu.room;
  const L=addC('light',r,r.x+r.w/2,r.y+r.h/2+(cuRoom?22:0));
  const S=addC('switch',r,r.x+26,r.y+r.h-28,{on:true});
  lights.push({L,S});
  if(r.type==='Bathroom'){if(!have.shower){have.shower=1;fixed.push({c:addC('shower',r,r.x+r.w-34,r.y+40),w:{label:'Shower',rating:45,csa:10}})}}
  else{
   const s1=addC('socket',r,r.x+r.w-28,r.y+r.h-30,{appl:[]}),s2=addC('socket',r,r.x+r.w-30,r.y+r.h/2-6,{appl:[]});
   if(r.type==='Living room')s2.appl=['tv'];
   if(r.type==='Kitchen'){s1.appl=['kettle'];if(!have.cooker){have.cooker=1;fixed.push({c:addC('cooker',r,r.x+r.w-70,r.y+44),w:{label:'Cooker',rating:32,csa:6}})}}
   if(r.type==='Utility'){s1.appl=['washer'];if(!have.imm){have.imm=1;fixed.push({c:addC('immersion',r,r.x+70,r.y+44),w:{label:'Immersion heater',rating:16,csa:2.5}})}}
   sockets.push(s1,s2)}});
 const wl={id:nw(),label:'Lighting',type:'MCB',rating:6,curve:'B'};m.cu.ways.push(wl);
 let prev={t:'cu',way:wl.id};
 lights.forEach(o=>{addK('tne',1.5,prev,{t:'comp',id:o.L.id});prev={t:'comp',id:o.L.id};addK('drop',1.5,{t:'comp',id:o.L.id},{t:'comp',id:o.S.id})});
 if(sockets.length){const w={id:nw(),label:'Sockets (ring)',type:'MCB',rating:32,curve:'B'};m.cu.ways.push(w);let p={t:'cu',way:w.id};sockets.forEach(s=>{addK('tne',2.5,p,{t:'comp',id:s.id});p={t:'comp',id:s.id}});addK('tne',2.5,p,{t:'cu',way:w.id})}
 fixed.forEach(f=>{if(m.cu.ways.length>=8)return;const w={id:nw(),label:f.w.label,type:'MCB',rating:f.w.rating,curve:'B'};m.cu.ways.push(w);addK('tne',f.w.csa,{t:'cu',way:w.id},{t:'comp',id:f.c.id})});
 m.seq={c:cn,k:kn,w:wn};H.autoTerminate(m);return m};
})();
