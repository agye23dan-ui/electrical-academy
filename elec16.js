// Twelve extra diagrams for City & Guilds modules that had none: PV system, heat pump, sine wave, capacitor charging,
// half-split fault finding, certificates, Ib/In/Iz, design steps, project team, drawing types, BS 7671 parts, career path.
(function(){
if(!window.Z||!Z.figs)return;
const S=(vb,b,l)=>`<svg class="sm" viewBox="${vb}" width="100%" role="img" aria-label="${l}">${b}</svg>`;
const T=(x,y,t,a,st)=>`<text x="${x}" y="${y}"${a?` text-anchor="${a}"`:''}${st?` style="${st}"`:''}>${t}</text>`;
const B=(x,y,w,h,t,hi)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="${hi||'var(--card,#fff)'}" stroke="var(--ink,#12303f)" stroke-width="2"/>`+t.split('|').map((l,i,a)=>T(x+w/2,y+h/2+4+(i-(a.length-1)/2)*13,l,'middle',hi?'fill:#1b2430':'')).join('');
const A=(x1,y1,x2,y2)=>`<path d="M${x1} ${y1}L${x2} ${y2}" stroke="var(--ink,#12303f)" stroke-width="2" fill="none" marker-end="url(#ar16)"/>`;
const DEF='<defs><marker id="ar16" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ink,#12303f)"/></marker></defs>';
const HI='#fde68a';
const F={};

// 1 PV system block diagram
F.pvsys=S('0 0 460 150',DEF+B(4,20,70,44,'PV array|(DC)',HI)+B(100,20,70,44,'DC|isolator')+B(196,20,70,44,'Inverter|(DC to AC)',HI)+B(292,20,70,44,'AC|isolator')+B(388,20,68,44,'Consumer|unit + RCD')+
A(74,42,98,42)+A(170,42,194,42)+A(266,42,290,42)+A(362,42,386,42)+
B(292,92,70,40,'Generation|meter')+B(388,92,68,40,'Grid')+A(422,64,422,90)+A(327,64,327,90)+
T(4,100,'Array is live in daylight.','start','font-size:10px')+T(4,114,'Isolate both DC and AC.','start','font-size:10px')+T(230,142,'Order of the main parts of a grid-tied PV system','middle','font-size:10px'),'Block diagram of a grid tied solar PV system from array to consumer unit and grid');

// 2 Heat pump cycle
F.hpcycle=S('0 0 460 170',DEF+B(10,10,120,44,'Evaporator|takes heat from source')+B(330,10,120,44,'Condenser|gives heat to heating',HI)+B(10,110,120,44,'Expansion|valve')+B(330,110,120,44,'Compressor|uses electricity',HI)+
A(130,32,328,32)+A(390,54,390,108)+A(328,132,132,132)+A(70,110,70,56)+
T(230,22,'refrigerant vapour','middle')+T(230,152,'liquid refrigerant','middle')+T(230,76,'1 kW electrical in + 2.5 kW from the source','middle','font-weight:700')+T(230,92,'= 3.5 kW heat out (COP 3.5)','middle','font-weight:700'),'Heat pump cycle showing evaporator, compressor, condenser and expansion valve with a coefficient of performance example');

// 3 Sine wave
let sp='';for(let i=0;i<=120;i++){const x=40+i*3,y=90-60*Math.sin(i/120*2*Math.PI);sp+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}
F.sinewave=S('0 0 460 190','<path d="M40 90H410" stroke="var(--ink,#12303f)" stroke-width="1"/><path d="M40 20V160" stroke="var(--ink,#12303f)" stroke-width="1"/>'+`<path d="${sp}" fill="none" stroke="#1f78a6" stroke-width="3"/>`+
'<path d="M40 47.6H410" stroke="#d2452f" stroke-width="1.5" stroke-dasharray="5 4"/>'+T(408,43,'RMS = 0.707 × peak','end','fill:#d2452f;font-size:10px')+
'<path d="M100 30V90" stroke="var(--ink,#12303f)" stroke-width="1"/>'+T(104,46,'peak')+'<path d="M40 176H400" stroke="var(--ink,#12303f)" stroke-width="1.5" marker-end="url(#ar16)"/>'+DEF+T(220,188,'one period T = 1 ÷ f (20 ms at 50 Hz)','middle')+'<path d="M300 30V150" stroke="var(--ink,#12303f)" stroke-width="1" stroke-dasharray="3 3"/>'+T(306,166,'peak-to-peak = 2 × peak'),'Sine wave with peak, RMS value, peak to peak and one period marked');

// 4 Capacitor charging
let cp='';for(let i=0;i<=200;i++){const t=i/200*5,y=150-120*(1-Math.exp(-t)),x=50+i*1.8;cp+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}
F.rccharge=S('0 0 460 190','<path d="M50 20V150H420" fill="none" stroke="var(--ink,#12303f)" stroke-width="2"/>'+`<path d="${cp}" fill="none" stroke="#1f78a6" stroke-width="3"/>`+
'<path d="M50 30H410" stroke="#d2452f" stroke-width="1" stroke-dasharray="4 4"/>'+T(412,34,'supply V','start','fill:#d2452f;font-size:10px')+
'<path d="M122 150V74.2H50" fill="none" stroke="var(--ink,#12303f)" stroke-width="1" stroke-dasharray="3 3"/>'+T(54,70,'63% at 1 τ')+T(122,166,'1 τ','middle')+T(230,166,'about 5 τ','middle')+T(230,182,'fully charged after about 5 time constants (τ = R × C)','middle'),'Capacitor charging curve reaching 63 percent of supply voltage after one time constant and full charge after five');

// 5 Half-split fault finding
let pts='';for(let i=0;i<8;i++){const x=40+i*55;pts+=`<circle cx="${x}" cy="60" r="8" fill="${i===5?'#d2452f':'var(--card,#fff)'}" stroke="var(--ink,#12303f)" stroke-width="2"/>`+T(x,64,String(i+1),'middle',i===5?'fill:#fff;font-size:10px':'font-size:10px')+(i<7?`<path d="M${x+8} 60H${x+47}" stroke="var(--ink,#12303f)" stroke-width="2"/>`:'')}
F.halfsplit=S('0 0 460 190',pts+T(40,40,'supply','middle')+T(370,40,'load','middle')+
T(230,95,'Test 1: the middle (point 4). Good, so the fault is after it.','middle')+T(230,112,'Test 2: the middle of the remaining half (point 6).','middle')+T(230,129,'Test 3: narrow down to the faulty section (point 6 to 7).','middle')+T(230,160,'Each test halves the search area. Isolate and prove dead first.','middle','font-weight:700'),'Half split fault finding method on a circuit with eight points where the fault is found in three tests');

// 6 Certificates
F.certflow=S('0 0 460 190',DEF+B(150,6,160,34,'What was done?',HI)+B(4,76,140,44,'New installation or|new circuit')+B(160,76,140,44,'Alteration with|no new circuit')+B(316,76,140,44,'Existing installation|periodic inspection')+
A(200,40,80,74)+A(230,40,230,74)+A(260,40,380,74)+B(4,142,140,40,'EIC|Electrical Installation Cert.',HI)+B(160,142,140,40,'MEIWC|Minor Works Certificate',HI)+B(316,142,140,40,'EICR|Condition Report',HI)+A(74,120,74,140)+A(230,120,230,140)+A(386,120,386,140),'Decision chart for choosing the certificate: EIC for new circuits, minor works certificate for alterations, EICR for existing installations');

// 7 Ib, In, Iz
F.ibinizz=S('0 0 460 150','<path d="M20 60H440" stroke="var(--ink,#12303f)" stroke-width="3"/>'+
[['Ib',80,'design current'],['In',220,'device rating'],['Iz',360,'cable capacity']].map(([a,x,b])=>`<circle cx="${x}" cy="60" r="12" fill="${HI}" stroke="var(--ink,#12303f)" stroke-width="2"/>`+T(x,64,a,'middle','fill:#1b2430;font-weight:700')+T(x,92,b,'middle')).join('')+
T(150,52,'≤','middle','font-size:18px')+T(290,52,'≤','middle','font-size:18px')+T(230,20,'Ib ≤ In ≤ Iz','middle','font-size:14px;font-weight:700')+
T(230,124,'Check: Iz = tabulated rating × Ca × Cg × Ci × Cc','middle')+T(230,142,'Then check voltage drop and Zs.','middle'),'Number line showing design current less than or equal to device rating less than or equal to cable capacity');

// 8 Design steps
const steps=['Client needs and loads','Maximum demand (Ib, diversity)','Protective device (In)','Cable size (Iz, Ca Cg Ci)','Voltage drop check','Zs and fault protection','Test and certificate'];
F.designflow=S('0 0 460 220',DEF+steps.map((t,i)=>B(10+(i%2)*230,6+Math.floor(i/2)*52,220,40,(i+1)+'. '+t,i===6?HI:null)).join('')+T(230,214,'Work through the steps in order, then check each result.','middle'),'Seven step electrical design sequence from client needs to testing and certificate');

// 9 Project team
F.team=S('0 0 460 190',DEF+B(170,4,120,30,'Client',HI)+B(10,64,120,34,'Architect')+B(170,64,120,34,'Building services|M&amp;E engineer')+B(330,64,120,34,'Quantity|surveyor')+B(120,128,220,32,'Main contractor (site manager)',HI)+B(40,166,150,22,'Electrical subcontractor')+B(200,166,110,22,'Other trades')+
A(230,34,70,62)+A(230,34,230,62)+A(230,34,390,62)+A(70,98,170,126)+A(230,98,230,126)+A(390,98,300,126)+A(200,160,115,164)+A(260,160,255,164),'Construction project team: client, architect, engineer and quantity surveyor, main contractor and subcontractors');

// 10 Drawing types
F.layoutdrw=S('0 0 460 170',B(4,10,140,110,'')+B(160,10,140,110,'')+B(316,10,140,110,'')+
'<rect x="20" y="30" width="108" height="70" fill="none" stroke="var(--ink,#12303f)" stroke-width="2"/><circle cx="50" cy="55" r="7" fill="none" stroke="var(--ink,#12303f)" stroke-width="2"/><rect x="80" y="76" width="12" height="12" fill="none" stroke="var(--ink,#12303f)" stroke-width="2"/><rect x="104" y="40" width="10" height="10" fill="none" stroke="var(--ink,#12303f)" stroke-width="2"/>'+
'<path d="M176 40H284M176 40V90M284 40V90M176 65H210M230 65H284" stroke="var(--ink,#12303f)" stroke-width="2" fill="none"/><circle cx="220" cy="65" r="8" fill="none" stroke="var(--ink,#12303f)" stroke-width="2"/><path d="M214 59L226 71M226 59L214 71" stroke="var(--ink,#12303f)" stroke-width="2"/>'+
'<path d="M332 40H440M332 60H440M332 80H440" stroke="#8b5a2b" stroke-width="3"/><path d="M332 100H440" stroke="#1f78a6" stroke-width="3"/><circle cx="372" cy="40" r="4" fill="var(--ink,#12303f)"/><circle cx="372" cy="60" r="4" fill="var(--ink,#12303f)"/>'+
T(74,138,'Layout','middle','font-weight:700')+T(74,154,'where things go','middle','font-size:10px')+T(230,138,'Circuit diagram','middle','font-weight:700')+T(230,154,'how it works','middle','font-size:10px')+T(386,138,'Wiring diagram','middle','font-weight:700')+T(386,154,'how it is connected','middle','font-size:10px'),'Three drawing types: layout drawing, circuit diagram and wiring diagram');

// 11 BS 7671 parts
const parts=['Part 1|Scope','Part 2|Definitions','Part 3|General characteristics','Part 4|Protection for safety','Part 5|Selection and erection','Part 6|Inspection and testing','Part 7|Special locations'];
F.bsparts=S('0 0 460 170',parts.map((p,i)=>{const x=4+(i%4)*115,y=6+Math.floor(i/4)*76;return B(x,y,108,66,p.replace('|','|'),i===3||i===5?HI:null)}).join('')+T(230,164,'Highlighted: the parts used most in design (4) and testing (6).','middle'),'The seven parts of BS 7671 with protection for safety and inspection and testing highlighted');

// 12 Career ladder
const lad=['Apprentice or Level 2 diploma','Level 3 and experience, AM2','Approved electrician (ECS card)','Inspector and tester (2391)','EngTech, IEng, CEng'];
F.career=S('0 0 460 200',lad.map((t,i)=>B(10+i*14,150-i*35,380-i*14,30,t,i===2?HI:null)).join('')+T(230,194,'Keep learning: CPD and BS 7671 updates apply at every step.','middle'),'Career path ladder from apprentice to approved electrician, inspector and professional registration');

// 13 Torque and levers
F.torque=S('0 0 460 170','<circle cx="60" cy="90" r="22" fill="var(--card,#fff)" stroke="var(--ink,#12303f)" stroke-width="3"/><rect x="60" y="82" width="300" height="16" rx="6" fill="#9aa6b4" stroke="var(--ink,#12303f)" stroke-width="2"/>'+DEF+
'<path d="M360 40V80" stroke="#d2452f" stroke-width="4" marker-end="url(#ar16)" transform="rotate(180 360 60)"/>'+T(372,52,'force F','start','fill:#d2452f;font-weight:700')+
'<path d="M60 130H360" stroke="var(--ink,#12303f)" stroke-width="1.5" marker-start="url(#ar16)" marker-end="url(#ar16)"/>'+T(210,148,'distance r','middle')+
T(230,20,'Torque = force × distance (N m)','middle','font-weight:700')+T(230,164,'150 N × 0.4 m = 60 N m','middle'),'A spanner with a force at its end showing torque equals force times distance');

Object.assign(Z.figs,F);
const N={pvsys:'Grid-tied PV system',hpcycle:'Heat pump cycle',sinewave:'Sine wave terms',rccharge:'Capacitor charging curve',halfsplit:'Half-split fault finding',certflow:'Choosing the certificate',ibinizz:'Ib, In and Iz',designflow:'Design steps',team:'Construction project team',layoutdrw:'Three drawing types',bsparts:'Parts of BS 7671',career:'Career path',torque:'Torque on a spanner'};
const K={pvsys:'Draw the PV system from array to grid, naming each part in order.',hpcycle:'Draw the four parts of the cycle and label heat in and heat out.',sinewave:'Draw one cycle and label peak, peak-to-peak, RMS and the period.',rccharge:'Draw the charging curve and mark 63% at one time constant.',halfsplit:'Draw a circuit as points and show three half-split tests.',certflow:'Draw the decision chart for EIC, minor works certificate and EICR.',ibinizz:'Draw the number line and label Ib, In and Iz.',designflow:'List the seven design steps in order.',team:'Draw the project team and show who reports to whom.',layoutdrw:'Sketch a layout, a circuit diagram and a wiring diagram of one lamp.',bsparts:'List the seven parts of BS 7671 and say what each covers.',career:'Draw the career ladder and add the qualification at each step.',torque:'Draw a spanner and show force, distance and the torque equation.'};
const MK={pvsys:['Array, DC isolator, inverter, AC isolator, consumer unit','Generation meter and grid shown','Arrows show direction of power'],hpcycle:['Evaporator, compressor, condenser, expansion valve','Heat in and heat out labelled','COP example'],sinewave:['One full cycle drawn','Peak and peak-to-peak marked','RMS = 0.707 × peak','Period T = 1 ÷ f'],rccharge:['Axes and supply line','Curve rises and flattens','63% at one time constant','Full charge about 5 time constants'],halfsplit:['Circuit as a line of points','Test at the middle first','Each test halves the search','Fault section identified'],certflow:['Three outcomes: EIC, MEIWC, EICR','Question: what was done','Each arrow correct'],ibinizz:['Ib ≤ In ≤ Iz','Each term named','Correction factors mentioned'],designflow:['Seven steps in order','Voltage drop and Zs checks included','Testing at the end'],team:['Client at the top','Architect, engineer, quantity surveyor','Main contractor and subcontractors'],layoutdrw:['Layout shows positions','Circuit diagram shows operation','Wiring diagram shows connections'],bsparts:['Seven parts named','Part 4 and Part 6 purpose stated'],career:['Apprentice to professional','Qualification at each step','Approved electrician step'],torque:['Spanner with force and distance','Torque = F × r','Worked example']};
Object.assign(Z.names,N);Object.assign(Z.tasks,K);Object.assign(Z.marks,MK);
// Attach each diagram to the modules that had none, plus a few that benefit.
const ATT={cg202a:['torque'],cg203a:['layoutdrw','bsparts'],cg210:['team'],cg301a:['pvsys'],cg301b:['hpcycle'],cg302a:['sinewave'],cg302c:['rccharge'],cg303a:['halfsplit'],cg304c:['certflow'],cg305a:['designflow'],cg305b:['ibinizz'],cg308:['career']};
Object.keys(ATT).forEach(id=>{const m=Z.mods.find(x=>x.id===id);if(!m)return;m.f=m.f||[];ATT[id].forEach(k=>{if(!m.f.includes(k))m.f.push(k)})});
})();
