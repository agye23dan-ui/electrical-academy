(function(){
// City & Guilds track views: the hub (#/cg), timed unit tests (#/cgexam/<unit>) and the banner shown on C&G lessons.
const unitOf=id=>Object.keys(CG.units).find(u=>CG.units[u].modules.includes(id));
const seriesOf=u=>CG.units[u].series||CG.series;
const tHint=u=>{const U=CG.units[u],t=U.test;if(!t)return 'Practical assignment, marked locally and externally verified';return t.practice?`practice test of ${t.n} questions in ${t.min} minutes (length chosen by this app; check the handbook for the real assessment)`:`${t.n} questions in ${t.min} minutes, ${t.book} book, pass mark about ${t.pass}%`};
const jobsFor=()=>Y.jobs.map((j,i)=>[j,i]).filter(a=>a[0].t.startsWith('C&G 204'));
const levelMods=lv=>M.filter(m=>m.id.startsWith('cg')&&CG.units[unitOf(m.id)]&&CG.units[unitOf(m.id)].level===lv);

window.cgBanner=function(m){
 const u=unitOf(m.id);if(!u)return '';
 const U=CG.units[u];
 const los=[...new Set(m.q.map(q=>q[4]).filter(Boolean))];
 const lo=los.map(l=>{const f=U.los.find(x=>x[0]===l);return f?`${l} ${f[1]}`:l}).join('; ');
 return `<div class="note" style="margin:14px 0;"><b>${seriesOf(u)} · Unit ${u}: ${U.title}.</b>${lo?` This lesson covers ${lo}.`:''} Unit format: ${tHint(u)}. ${U.test?`<a href="#/cgexam/${u}">Take the timed Unit ${u} ${U.test.practice?'practice ':''}test →</a>`:`<a href="#/jobs">Open the Unit 204 practical job sheets →</a>`} · <a href="#/cg">All units</a></div>`;
};

function unitCard(u){
 const U=CG.units[u],ms=U.modules.map(id=>M.find(m=>m.id===id)).filter(Boolean);
 const lo=U.los.filter(l=>l[2]>0).map(l=>`<tr><td style="padding:4px 8px;">${l[0]}</td><td style="padding:4px 8px;">${l[1]}</td><td style="padding:4px 8px;text-align:right;">${l[2]}</td></tr>`).join('');
 const sc=best('cgx'+u);
 const jobs=jobsFor();
 return `<div class="card" style="margin-bottom:16px;">
  <div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;align-items:flex-start;">
   <div><span class="module-code-badge">UNIT ${u}</span> <b style="font-size:1.08rem;">${U.title}</b>
    <div style="font-size:0.85rem;color:var(--mut);margin-top:4px;">${U.glh?U.glh+' guided learning hours · ':''}${tHint(u)}</div></div>
   ${U.test?`<a class="btn" href="#/cgexam/${u}">⏱️ ${U.test.practice?'Practice test':'Timed test'}${sc!=null?' (best '+sc+'%)':''}</a>`:`<a class="btn secondary" href="#/jobs">🛠️ Practical job sheets</a>`}
  </div>
  ${lo?`<table style="width:100%;border-collapse:collapse;font-size:0.86rem;margin:12px 0 4px;"><tr style="text-align:left;color:var(--mut);"><th style="padding:4px 8px;">${U.level===3?'Topic':'LO'}</th><th style="padding:4px 8px;">${U.topicLabel||'Learning outcome'}</th><th style="padding:4px 8px;text-align:right;">Test questions</th></tr>${lo}</table>`:''}
  <div style="margin-top:10px;display:flex;flex-wrap:wrap;gap:8px;">${ms.map(m=>{const s=best(m.id);return `<a class="btn secondary" style="padding:6px 12px;font-size:0.85rem;" href="#/m/${m.id}">${m.id.toUpperCase()} · ${m.t.replace(/^[A-Z0-9·]+\s*/,'')}${s!=null?' · '+s+'%':''}</a>`}).join('')}</div>
  ${u==='204'?`<div style="margin-top:12px;font-size:0.88rem;">${jobs.map(a=>{const st=((P.j||{})[a[1]]||[]).filter(Boolean).length;const sg=!!(P.sig&&P.sig[a[1]]);return `<div style="display:flex;justify-content:space-between;gap:8px;padding:4px 0;border-top:1px solid var(--line);"><a href="#/job/${a[1]}">${a[0].t}</a><span class="pill ${sg?'ok':''}">${st}/${a[0].steps.length}${sg?' · signed off':''}</span></div>`}).join('')}</div>`:''}
 </div>`}

const progress=lv=>{const mods=levelMods(lv);const done=mods.filter(m=>(best(m.id)||0)>=70).length;const pct=Math.round(done/(mods.length||1)*100);return `<div class="card" style="margin:12px 0;"><b>Level ${lv} progress:</b> ${done} of ${mods.length} lessons passed (${pct}%)<div class="hero-progress-track" style="margin-top:8px;"><div class="hero-progress-fill" style="width:${pct}%"></div></div></div>`};
const mapTable=rows=>`<div class="card"><table style="width:100%;border-collapse:collapse;font-size:0.9rem;"><tr style="text-align:left;color:var(--mut);"><th style="padding:6px 8px;">City & Guilds unit</th><th style="padding:6px 8px;">Related NVTI lessons</th></tr>${rows.map(r=>`<tr style="border-top:1px solid var(--line);"><td style="padding:6px 8px;">${r[0]}</td><td style="padding:6px 8px;">${r[1]}</td></tr>`).join('')}</table></div>`;

window.cgHub=function(){
 updateActiveNav('home');
 const l2=Object.keys(CG.units).filter(u=>CG.units[u].level===2),l3=Object.keys(CG.units).filter(u=>CG.units[u].level===3);
 app.innerHTML=`<div class="breadcrumb"><a href="#/">← Home</a> / <span>City & Guilds 2365</span></div>
  <h1>🏅 City & Guilds 2365 Electrical Installations Track</h1>
  <p style="color:var(--mut);">Detailed lessons, topic-based question banks and timed unit tests following the unit structure of the City & Guilds 2365 Level 2 and Level 3 Diplomas in Electrical Installations (Buildings and Structures). It is built on UK regulations, so it is also useful for NVTI students who want international standards.</p>
  <div class="note"><b>Please note:</b> this is an independent study resource and is not produced or endorsed by City & Guilds. Unit titles, test lengths, pass marks and question weightings come from published summaries of the qualifications and must be checked against the current City & Guilds handbooks. For Level 3, published sources disagree on how some units are assessed (online test, written paper or practical), so the Level 3 tests here are <b>practice tests</b> whose length and topic weights were chosen by this app. For open-book tests you need your own copy of the IET On-Site Guide. Always use the edition and amendment of BS 7671 that your centre assesses.</div>
  <div style="display:flex;gap:8px;flex-wrap:wrap;margin:12px 0;"><button class="secondary" onclick="document.getElementById('cg-l2').scrollIntoView({behavior:'smooth'})">Level 2</button><button class="secondary" onclick="document.getElementById('cg-l3').scrollIntoView({behavior:'smooth'})">Level 3</button></div>
  <h2 id="cg-l2">Level 2 Diploma (2365-02)</h2>
  ${progress(2)}
  ${l2.map(unitCard).join('')}
  <h3>How the NVTI lessons map to Level 2 units</h3>
  ${mapTable([['201 Health and safety','E1·A, INT·A'],['202 Principles of electrical science','E1·E, E1·G, E2·C, E2·E, E2·G'],['203 Electrical installations technology','E1·B, E1·C, E1·D, E1·F, E2·A, E2·B, E2·D, INT·B, E2·H'],['204 Installation of wiring systems and enclosures','E2·F drawing practice, practical job sheets'],['210 Communicating with others','General Paper practice']])}
  <h2 id="cg-l3" style="margin-top:28px;">Level 3 Diploma (2365-03)</h2>
  <div class="note">Unit 201 (Health and safety in building services engineering) is also part of the Level 3 diploma. Use the Level 2 lessons <a href="#/m/cg201a">201·A</a> and <a href="#/m/cg201b">201·B</a> and the <a href="#/cgexam/201">Unit 201 test</a>.</div>
  ${progress(3)}
  ${l3.map(unitCard).join('')}
  <h3>How the NVTI lessons map to Level 3 units</h3>
  ${mapTable([['301 Environmental technology systems','E2·H solar PV'],['302 Principles of electrical science (Level 3)','E2·B, E2·C, E2·G'],['303 Fault diagnosis and rectification','E1·C, E2·G, INT·B'],['304 Inspection, testing and commissioning','E1·C, INT·B'],['305 Electrical systems design','E2·D, E2·E, INT·B'],['308 Career awareness','General Paper practice']])}`;
};

window.cgExam=function(u){
 updateActiveNav('home');
 const U=CG.units[u];
 if(!U||!U.test)return cgHub();
 const pool=M.filter(m=>U.modules.includes(m.id)).flatMap(m=>m.q);
 let picked=[];
 U.los.forEach(l=>{picked.push(...shuffle(pool.filter(q=>q[4]===l[0])).slice(0,l[2]))});
 if(picked.length<U.test.n)picked.push(...shuffle(pool.filter(q=>!picked.includes(q))).slice(0,U.test.n-picked.length));
 const qs=shuffle(picked).slice(0,U.test.n);
 const pr=U.test.practice;
 app.innerHTML=`<div class="breadcrumb"><a href="#/cg">← City & Guilds track</a> / <span>Unit ${u} ${pr?'practice ':''}test</span></div>
  <h1>Unit ${u} Practice Test: ${U.title}</h1>
  <p style="color:var(--mut);">${qs.length} questions drawn across the ${pr?'topic areas in proportions chosen by this app':'learning outcomes in the same proportions as the real test'}. Time allowed: ${U.test.min} minutes. Pass mark ${pr?'used here':'about'} ${U.test.pass}% (check your handbook). Book: ${U.test.book}.${U.test.book.startsWith('open')?' Use your own copy of the IET On-Site Guide.':''}${pr?' The real assessment for this unit may be a different format.':''}</p>
  <div class="exam-hud" id="exam-hud"><div class="timer-box" id="tm-box"><span>⏱️</span><span id="tm-val">${U.test.min}:00</span></div><div style="font-size:0.85rem;font-weight:700;color:var(--mut);">Pass Mark: <span style="color:var(--ok);">${U.test.pass}%</span></div></div>
  <div id="qz"></div>`;
 quiz($('#qz'),qs,'cgx'+u,{pass:U.test.pass,bench:'City & Guilds Unit '+u+' practice',retake:'#/cgexam/'+u});
 let t=U.test.min*60;
 const upd=()=>{const el=$('#tm-val');if(el)el.textContent=Math.floor(t/60)+':'+String(t%60).padStart(2,'0');const box=$('#tm-box');if(box&&t<Math.min(300,U.test.min*60*0.15))box.classList.add('urgent')};
 upd();
 window.T=setInterval(()=>{t--;upd();if(t<=0){clearInterval(window.T);const b=$('#chk');if(b)b.click()}},1000);
};
})();
