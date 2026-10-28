(function(){
// Redrawn schematics: consistent colour code, a colour key, and labels that do not overlap lines or box edges.
// Colour code (as taught in E1·B): live and L1 brown (.lv/.p1), L2 black (.p2), L3 grey (.p3),
// neutral blue (.c), earth green with yellow dashes, DC positive red (.h), DC negative blue (.c).
const S=(vb,b,l)=>`<svg class="sm" viewBox="${vb}" width="100%" role="img" aria-label="${l}">${b}</svg>`;
const T=(x,y,t,a,c)=>`<text x="${x}" y="${y}"${a?` text-anchor="${a}"`:''}${c?` class="${c}"`:''}>${t}</text>`;
const P=(d,c)=>`<path class="f${c?' '+c:''}" d="${d}"/>`;
const E=d=>`<path class="f e" d="${d}"/><path d="${d}" fill="none" stroke="var(--earthy)" stroke-width="2.2" stroke-dasharray="5 5"/>`;
const dot=(x,y)=>`<circle class="t" cx="${x}" cy="${y}" r="3"/>`;
const B=(x,y,w,h,t)=>{const l=String(t).split('|'),cy=y+h/2;
 const tx=l.length==1?T(x+w/2,cy+4,l[0],'middle'):l.length==2?T(x+w/2,cy-2,l[0],'middle')+T(x+w/2,cy+10,l[1],'middle'):T(x+w/2,cy-8,l[0],'middle')+T(x+w/2,cy+5,l[1],'middle')+T(x+w/2,cy+18,l[2],'middle');
 return `<rect class="f w" x="${x}" y="${y}" width="${w}" height="${h}" rx="3"/>${tx}`};
const PEN=d=>`<path class="f c" d="${d}"/><path d="${d}" fill="none" stroke="var(--earth)" stroke-width="2.2" stroke-dasharray="5 5"/>`;
const gnd=(x,y)=>P(`M${x-14} ${y}H${x+14}M${x-9} ${y+7}H${x+9}M${x-4} ${y+14}H${x+4}`);
const note=(lines,x,y)=>lines.map((t,i)=>T(x,y+i*13,t)).join('');
const KEY={lv:'Live',p1:'L1 (brown)',p2:'L2 (black)',p3:'L3 (grey)',c:'Neutral / DC −',h:'DC +',e:'Earth'};
const legend=(items,y)=>{let x=10,o='';items.forEach(k=>{const lab=KEY[k]||k;o+=(k=='e'?E(`M${x} ${y-3}H${x+22}`):P(`M${x} ${y-3}H${x+22}`,k=='ink'?'':k))+T(x+28,y,lab);x+=28+lab.length*5.9+16});return o};
// flow of boxes with arrows; steps may contain '|' for two lines; 4 per row
const flow=(rows,y0)=>{let o='';const W=88,H=38,G=18,ST=W+G;rows.forEach((r,ri)=>{const y=y0+ri*62;
 r.forEach((t,i)=>{const x=10+i*ST;o+=B(x,y,W,H,t);if(i<r.length-1)o+=P(`M${x+W+2} ${y+19}H${x+ST-3}`)+`<path class="f" d="M${x+ST-9} ${y+14}L${x+ST-3} ${y+19}L${x+ST-9} ${y+24}"/>`});
 if(ri<rows.length-1){const xe=10+(r.length-1)*ST+W/2,xs=10+W/2,ys=y+H;o+=P(`M${xe} ${ys}V${ys+12}H${xs}V${ys+22}`)+`<path class="f" d="M${xs-5} ${ys+17}L${xs} ${ys+23}L${xs+5} ${ys+17}"/>`}});return o};

const F={
twoway:S('0 0 440 232',
 T(12,72,'L (live)')+P('M12 78H86','lv')+T(112,30,'Switch A','middle')+T(328,30,'Switch B','middle')+
 `<rect class="f w" x="70" y="36" width="84" height="84" rx="4"/><rect class="f w" x="286" y="36" width="84" height="84" rx="4"/>`+
 P('M86 78L144 56')+P('M354 78L296 56')+
 `<circle class="t" cx="86" cy="78" r="3.5"/><circle class="t" cx="144" cy="56" r="3.5"/><circle class="t" cx="144" cy="100" r="3.5"/><circle class="t" cx="354" cy="78" r="3.5"/><circle class="t" cx="296" cy="56" r="3.5"/><circle class="t" cx="296" cy="100" r="3.5"/>`+
 T(86,98,'COM','middle')+T(144,50,'L1','middle')+T(144,114,'L2','middle')+T(354,98,'COM','middle')+T(296,50,'L1','middle')+T(296,114,'L2','middle')+
 P('M144 56H296','lv')+P('M144 100H296','lv')+T(220,50,'Strapper 1 (L1–L1)','middle')+T(220,116,'Strapper 2 (L2–L2)','middle')+
 P('M354 78H400V124','lv')+`<circle class="f w" cx="400" cy="140" r="16"/>`+P('M389 129L411 151M411 129L389 151')+T(376,150,'Lamp','end')+
 P('M400 156V176H12','c')+T(12,170,'N (neutral)')+
 note(['Real switch terminals: COM (common), L1 and L2. Live feeds COM of A;','COM of B feeds the lamp. Switches are shown in position 1 (COM to L1).'],10,194)+legend(['lv','c'],226),'Two-way switching with COM, L1 and L2 terminals'),

ring:S('0 0 440 252',
 T(10,14,'Ring final: both ends return to the same MCB')+B(10,86,60,52,'Consumer|unit')+
 P('M70 100H110V50H380V190H110V124H70','lv')+B(170,40,36,20,'S1')+B(290,40,36,20,'S2')+B(362,110,36,20,'S3')+B(250,180,36,20,'S4')+
 dot(160,190)+P('M160 190V213','lv')+B(140,213,40,20,'Spur')+
 T(245,122,'32 A MCB, 2.5 mm² cable','middle')+T(245,137,'(N and CPC follow the same route)','middle')+legend(['lv'],246),'Ring final circuit with four sockets and a spur'),

radial:S('0 0 440 170',
 T(10,14,'Radial: one cable out, ending at the last socket')+B(10,60,60,50,'Consumer|unit')+
 P('M70 85H386','lv')+B(110,75,36,20,'S1')+B(190,75,36,20,'S2')+B(270,75,36,20,'S3')+B(350,75,36,20,'S4')+
 T(228,128,'MCB 20 A or 32 A, 2.5 mm² cable','middle')+legend(['lv'],160),'Radial circuit with four sockets'),

db:S('0 0 440 252',
 P('M95 8V62','lv')+T(103,26,'Supply (from meter)')+`<rect class="f" x="40" y="50" width="360" height="160" rx="6"/>`+
 B(52,62,86,28,'Main switch')+B(152,62,50,28,'RCD')+P('M138 76H152','lv')+P('M177 90V106M91 106H361','lv')+dot(177,106)+
 [91,181,271,361].map(x=>P(`M${x} 106V118`,'lv')).join('')+
 B(52,118,78,34,'Lighting|6 A MCB')+B(142,118,78,34,'Sockets|32 A MCB')+B(232,118,78,34,'Cooker|32 A MCB')+B(322,118,78,34,'Spare|way')+
 P('M60 172H390','c')+T(60,167,'Neutral bar')+E('M60 194H390')+T(60,189,'Earth bar')+
 T(10,228,'Each MCB feeds one circuit; the RCD protects the circuits it feeds.')+legend(['lv','c','e'],246),'Consumer unit'),

bell:S('0 0 440 194',
 T(66,14,'Mains 230 V','middle')+T(45,34,'L','middle')+T(85,34,'N','middle')+P('M45 70V40','lv')+P('M85 70V40','c')+
 B(20,70,92,34,'Transformer')+P('M112 87H140V50H196')+B(196,38,84,24,'Push button')+P('M280 50H368V70')+B(333,70,70,34,'Bell')+P('M368 104V150H66V104')+
 T(220,140,'Low-voltage (ELV) circuit','middle')+T(10,172,'Push button in series with the bell and the transformer secondary.')+legend(['lv','c'],188),'Electric bell circuit'),

fluor:S('0 0 440 238',
 T(12,22,'L (via switch)')+P('M10 40H50','lv')+B(50,28,60,24,'Choke')+`<rect class="f w" x="140" y="62" width="230" height="48" rx="22"/>`+
 P('M110 40H146V86H156','lv')+P('M156 86l6-8l6 16l6-16l6 16l6-8')+P('M354 86l-6-8l-6 16l-6-16l-6 16l-6-8')+T(255,82,'Fluorescent tube','middle')+
 P('M354 86H396V190H10','c')+T(12,184,'N (neutral)')+B(205,128,100,26,'Starter')+P('M186 86V141H205')+P('M305 141H324V86')+
 note(['Choke limits the current; the starter heats the filaments,','then opens so the choke kicks a high voltage to strike the arc.'],10,208)+legend(['lv','c'],234),'Switch-start fluorescent lamp circuit'),

dol:S('0 0 440 262',
 T(10,14,'Power circuit')+T(10,48,'L1')+T(10,66,'L2')+T(10,84,'L3')+
 B(60,28,76,70,'Isolator')+B(166,28,76,70,'Contactor|K main')+B(272,28,76,70,'Overload|relay')+B(372,28,60,70,'Motor|3~')+
 ['p1','p2','p3'].map((c,i)=>{const y=44+i*18;return P(`M34 ${y}H60M136 ${y}H166M242 ${y}H272M348 ${y}H372`,c)}).join('')+
 T(10,132,'Control circuit (supply from L1 and N)')+T(8,146,'L1')+P('M10 160H20','lv')+B(20,148,70,24,'Stop (NC)')+P('M90 160H110','lv')+B(110,148,78,24,'Start (NO)')+P('M188 160H216','lv')+B(216,148,60,24,'Coil K')+
 P('M276 160H300','c')+B(300,148,70,24,'O/L (NC)')+P('M370 160H410V222H10','c')+T(10,216,'N')+
 dot(100,160)+P('M100 160V194H110','lv')+B(110,182,78,24,'K hold-in')+P('M188 194H198V160','lv')+dot(198,160)+
 T(10,242,'Coil K closes the K main contacts and the K hold-in contact.')+legend(['p1','p2','p3','c'],258),'Direct-on-line starter power and control circuits'),

rect:S('0 0 460 252',
 P('M60 115L210 55L360 115L210 175Z')+
 `<g transform="translate(135,85) rotate(-21.8)"><path class="f w" d="M-9 -8L9 0L-9 8Z"/><path class="f" d="M10 -8V8"/></g>`+
 `<g transform="translate(285,85) rotate(21.8)"><path class="f w" d="M-9 -8L9 0L-9 8Z"/><path class="f" d="M10 -8V8"/></g>`+
 `<g transform="translate(285,145) rotate(-21.8)"><path class="f w" d="M-9 -8L9 0L-9 8Z"/><path class="f" d="M10 -8V8"/></g>`+
 `<g transform="translate(135,145) rotate(21.8)"><path class="f w" d="M-9 -8L9 0L-9 8Z"/><path class="f" d="M10 -8V8"/></g>`+
 T(118,70,'D1','end')+T(302,70,'D2')+T(302,164,'D3')+T(118,164,'D4','end')+
 P('M210 55V30','lv')+T(220,40,'AC in')+P('M210 175V200','c')+T(220,196,'AC in')+
 P('M360 115H425V135','h')+T(372,109,'+')+P('M60 115H30V212H425V165','c')+T(38,109,'−')+B(400,135,50,30,'Load')+
 T(10,236,'Diodes steer both half-cycles the same way through the load.')+legend(['lv','c','h'],250),'Bridge rectifier'),

irtest:S('0 0 440 204',
 B(10,50,90,60,'Megger|500 V DC')+`<rect class="f w" x="240" y="36" width="180" height="110" rx="4"/>`+T(330,54,'Installation','middle')+
 P('M100 70H240','lv')+E('M100 92H240')+T(170,62,'Lead 1: to L + N','middle')+T(170,108,'Lead 2: to earth','middle')+
 T(252,76,'L + N linked')+T(252,98,'Earth (CPC)')+
 note(['Before testing: lamps out, switches on, supply isolated.','Pass reading: at least 1 MΩ at 500 V DC.'],10,170)+legend(['lv','e'],200),'Insulation resistance test connections'),

swa:S('0 0 440 206',
 `<rect class="f w" x="10" y="70" width="80" height="30"/><rect class="f w" x="90" y="66" width="50" height="38"/><rect class="f w" x="140" y="60" width="70" height="50"/><rect class="f w" x="210" y="66" width="26" height="38"/><rect class="f w" x="246" y="30" width="14" height="110"/><rect class="f w" x="92" y="48" width="110" height="12"/>`+
 T(147,42,'Shroud','middle')+T(253,24,'Wall','middle')+
 P('M260 78H330','lv')+P('M260 90H330','c')+E('M260 102H330')+B(330,64,80,48,'Terminal|bars')+T(302,124,'Cores to bars','middle')+
 T(50,128,'Cable sheath','middle')+P('M50 100V116','th')+T(175,128,'Gland body','middle')+P('M175 110V116','th')+
 T(115,154,'Armour + cone','middle')+P('M115 104V143','th')+T(215,154,'Locknut','middle')+P('M223 104V143','th')+
 T(10,186,'The armour is clamped for earth continuity; the shroud seals the gland.')+legend(['lv','c','e'],202),'Armoured cable gland'),

stardelta:S('0 0 440 214',
 T(105,12,'Star (Y)','middle')+T(325,12,'Delta (Δ)','middle')+
 [55,105,155].map((x,i)=>P(`M${x} 60V38`,['p1','p2','p3'][i])+T(x,34,['L1','L2','L3'][i],'middle')).join('')+
 [55,105,155].map((x,i)=>B(x-18,60,36,24,['U1','V1','W1'][i])+B(x-18,118,36,24,['W2','U2','V2'][i])+P(`M${x} 142V160`,'k')).join('')+P('M55 160H155','k')+
 [275,325,375].map((x,i)=>P(`M${x} 60V38`,['p1','p2','p3'][i])+T(x,34,['L1','L2','L3'][i],'middle')+B(x-18,60,36,24,['U1','V1','W1'][i])+B(x-18,118,36,24,['W2','U2','V2'][i])+P(`M${x} 84V118`,'k')).join('')+
 note(['Star: link bar joins W2, U2 and V2 (starting connection).','Delta: three vertical links U1-W2, V1-U2, W1-V2 (running connection).'],10,182)+legend(['p1','p2','p3'],208),'Motor terminal block star and delta links'),

standby:S('0 0 440 192',
 B(10,35,90,36,'Mains|supply')+B(10,97,90,36,'Generator|set')+P('M100 53H170','lv')+P('M100 115H170','lv')+
 `<rect class="f w" x="170" y="25" width="110" height="100" rx="4"/>`+T(225,66,'Change-over','middle')+T(225,79,'switch','middle')+T(225,96,'(interlocked)','middle')+
 P('M280 75H340','lv')+B(340,55,90,40,'Load|board')+
 note(['The change-over switch is interlocked so the generator','can never back-feed the mains.'],10,160)+legend(['lv'],188),'Mains and standby generator change-over'),

earth:S('0 0 440 226',
 B(10,34,80,90,'Substation')+B(260,34,150,90,'Installation')+
 P('M90 60H260','lv')+T(175,54,'Line (L)','middle')+P('M90 96H260','c')+T(175,90,'Neutral (N)','middle')+
 E('M50 124V150')+gnd(50,150)+T(50,184,'Source earth','middle')+E('M335 124V150')+gnd(335,150)+T(335,184,'Own earth rod','middle')+
 P('M72 168H312','th dsh')+T(192,160,'Fault current returns through the soil','middle')+
 T(10,206,'TT: no earth conductor from the supply; an RCD is required.')+legend(['lv','c','e'],222),'TT earthing system'),

alarm:S('0 0 440 214',
 B(10,40,70,150,'Control|panel')+
 T(90,36,'Closed circuit (series): break = alarm')+P('M80 60H400V90H80')+B(130,50,36,20,'NC')+B(210,50,36,20,'NC')+B(290,50,36,20,'NC')+
 T(90,118,'Open circuit (parallel): closure = alarm')+P('M80 130H400M80 160H400')+P('M140 130V160M230 130V160M320 130V160')+B(122,137,36,16,'NO')+B(212,137,36,16,'NO')+B(302,137,36,16,'NO')+
 T(10,208,'NC = normally closed contact; NO = normally open contact.'),'Alarm circuit types'),

plan:S('0 0 440 246',
 `<rect class="f" x="30" y="30" width="380" height="170" style="stroke-width:3"/>`+P('M210 30V200M30 115H210')+
 T(120,108,'Kitchen','middle')+T(120,192,'Store','middle')+T(310,192,'Workshop','middle')+
 B(35,36,30,20,'DB')+P('M65 46H270V90','lv dsh')+dot(120,46)+P('M120 46V60','lv dsh')+P('M50 56V155H110','lv dsh')+
 `<circle class="f w" cx="120" cy="70" r="10"/>`+P('M113 63L127 77M127 63L113 77')+
 `<circle class="f w" cx="120" cy="155" r="10"/>`+P('M113 148L127 162M127 148L113 162')+
 `<circle class="f w" cx="270" cy="100" r="10"/>`+P('M263 93L277 107M277 93L263 107')+
 `<circle class="f w" cx="350" cy="100" r="10"/>`+P('M343 93L357 107M357 93L343 107')+
 P('M280 100H340','lv dsh')+B(176,63,24,14,'SW')+P('M130 70H176','lv dsh')+B(176,148,24,14,'SW')+P('M130 155H176','lv dsh')+
 B(222,126,24,14,'SW')+P('M270 110V133H246','lv dsh')+B(45,85,24,14,'SO')+B(372,150,24,14,'SO')+P('M350 110V157H372','lv dsh')+
 note(['Key: X in a circle = luminaire; SW = switch; SO = socket; dashed = conduit run.','Lighting: 1.5 mm² cable, 6 A MCB.  Sockets: 2.5 mm² cable, 32 A MCB.'],10,220),'Electrical installation layout plan'),

twostart:S('0 0 440 206',
 T(10,52,'L')+P('M10 60H20','lv')+B(20,48,56,24,'Stop 1')+P('M76 60H90','lv')+B(90,48,56,24,'Stop 2')+P('M146 60H164','lv')+
 dot(150,60)+P('M150 60V136','lv')+B(164,48,72,24,'Start 1')+B(164,86,72,24,'Start 2')+B(164,124,72,24,'K hold-in')+
 P('M150 60H164M150 98H164M150 136H164','lv')+P('M236 60H250M236 98H250M236 136H250M250 60V136','lv')+dot(250,60)+
 P('M250 60H272','lv')+B(272,48,50,24,'Coil K')+P('M322 60H336','c')+B(336,48,50,24,'O/L')+P('M386 60H420V182H10','c')+T(10,176,'N')+
 T(10,200,'Stop buttons in series; start buttons in parallel with the K hold-in contact.'),'DOL control with two start and two stop buttons'),

tpn:S('0 0 440 252',
 `<rect class="f" x="70" y="24" width="360" height="176" rx="6"/>`+
 [['L1','p1',50],['L2','p2',64],['L3','p3',78],['N','c',92]].map(a=>T(10,a[2]+4,a[0])+P(`M34 ${a[2]}H90M154 ${a[2]}H398`,a[1])+T(406,a[2]+4,a[0])).join('')+
 B(90,38,64,66,'4-pole|main|switch')+
 P('M212 50V128','p1')+dot(212,50)+P('M282 64V128','p2')+dot(282,64)+P('M352 78V128','p3')+dot(352,78)+
 B(190,128,44,26,'MCB')+B(260,128,44,26,'MCB')+B(330,128,44,26,'MCB')+
 P('M212 154V164','p1')+P('M282 154V164','p2')+P('M352 154V164','p3')+T(212,178,'Way 1','middle')+T(282,178,'Way 2','middle')+T(352,178,'Way 3','middle')+
 B(82,150,80,24,'Earth bar')+
 note(['Single-phase circuits are spread across L1, L2 and L3','to balance the load.'],10,216)+legend(['p1','p2','p3','c'],246),'TPN distribution board'),

sdpower:S('0 0 440 252',
 T(10,48,'L1')+T(10,66,'L2')+T(10,84,'L3')+
 B(60,28,76,70,'K1|main')+B(176,28,76,70,'Overload|relay')+B(332,28,76,70,'Motor|3~')+
 ['p1','p2','p3'].map((c,i)=>{const y=44+i*18;return P(`M34 ${y}H60M136 ${y}H176M252 ${y}H332`,c)}).join('')+
 B(60,140,76,34,'Timer')+B(250,140,76,34,'K3 star')+B(340,140,76,34,'K2 delta')+
 P('M345 98V120H288V140','dsh')+P('M378 98V140','dsh')+
 note(['Start: K1 + K3 (star). After the timer: K3 off, K2 on (delta).','K2 and K3 are interlocked so they never close together.','Dashed lines: contactors connect the motor windings.'],10,200)+legend(['p1','p2','p3'],246),'Star-delta starter power circuit'),

fwdrev:S('0 0 440 244',
 T(10,48,'L1')+T(10,66,'L2')+T(10,84,'L3')+B(90,30,80,62,'F|contactor')+
 ['p1','p2','p3'].map((c,i)=>P(`M34 ${44+i*18}H90M170 ${44+i*18}H250`,c)).join('')+
 T(10,138,'L3')+T(10,156,'L2')+T(10,174,'L1')+B(90,120,80,62,'R|contactor')+
 [['p3',134],['p2',152],['p1',170]].map(a=>P(`M34 ${a[1]}H90M170 ${a[1]}H250`,a[0])).join('')+
 `<rect class="f w" x="250" y="30" width="100" height="152" rx="4"/>`+T(300,100,'Motor','middle')+T(300,114,'terminals','middle')+
 T(256,48,'U')+T(256,66,'V')+T(256,84,'W')+T(256,138,'U')+T(256,156,'V')+T(256,174,'W')+
 note(['F and R are interlocked mechanically and electrically.','R swaps two phases (L1 and L3), so the motor reverses.'],10,206)+legend(['p1','p2','p3'],240),'Forward and reverse starter power circuit'),

planDim:S('0 0 440 306',
 T(30,20,'Scale 1:100 (1 cm = 1 m)')+`<rect class="f" x="30" y="36" width="288" height="216" style="stroke-width:3"/>`+P('M156 36V144M30 144H318')+
 `<rect x="96" y="141" width="18" height="6" fill="var(--card)"/>`+P('M96 144V126M96 126A18 18 0 0 1 114 144','th')+
 `<rect x="250" y="141" width="18" height="6" fill="var(--card)"/>`+P('M268 144V126M268 126A18 18 0 0 0 250 144','th')+
 `<rect class="f w th" x="60" y="32" width="40" height="8"/><rect class="f w th" x="220" y="32" width="40" height="8"/><rect class="f w th" x="130" y="248" width="60" height="8"/>`+
 T(93,76,'Bedroom 1','middle')+T(93,90,'3.5 m × 3.0 m','middle')+T(237,76,'Bedroom 2','middle')+T(237,90,'4.5 m × 3.0 m','middle')+T(174,196,'Living room','middle')+T(174,210,'8.0 m × 3.0 m','middle')+
 P('M30 276H318M30 270V282M318 270V282','th')+T(174,271,'8.0 m','middle')+P('M345 36V252M339 36H351M339 252H351','th')+T(354,148,'6.0 m')+
 T(10,300,'Door arcs show the swing of each door; thin double lines are windows.'),'Floor plan with dimensions'),

isolate:S('0 0 440 150',flow([['1 Identify','2 Isolate','3 Lock off|and tag','4 Prove|tester'],['5 Test dead','6 Re-prove|tester']],10),'Safe isolation steps'),
testseq:S('0 0 440 150',flow([['Inspect','Continuity|R1 + R2','Ring final|continuity','Insulation|resistance'],['Polarity','Zs loop|impedance','RCD test','Function|test']],10),'Initial verification test order'),
quoteflow:S('0 0 440 150',flow([['Enquiry','Site visit','Estimate','Quotation'],['Acceptance','Work + test','Invoice','Payment']],10),'Job quotation to payment flow'),

earthsys:S('0 0 440 306',
 T(20,16,'TN-S: separate neutral and earth all the way')+B(20,24,70,50,'Supply')+B(330,24,90,50,'Installation')+
 P('M90 38H330','lv')+T(100,34,'L')+P('M90 54H330','c')+T(100,50,'N')+E('M90 70H330')+T(100,66,'PE')+
 T(20,106,'TN-C-S: combined PEN, split at the installation')+B(20,114,70,50,'Supply')+B(330,114,90,50,'Installation')+
 P('M90 128H330','lv')+T(100,124,'L')+PEN('M90 144H250')+T(100,140,'PEN')+P('M250 144L270 144H330','c')+T(278,140,'N')+E('M250 144L270 160H330')+T(278,174,'PE')+
 T(20,196,'TT: local earth electrode, no earth conductor from the supply')+B(20,204,70,50,'Supply')+B(330,204,90,50,'Installation')+
 P('M90 218H330','lv')+T(100,214,'L')+P('M90 234H330','c')+T(100,230,'N')+E('M55 254V268')+gnd(55,268)+E('M375 254V268')+gnd(375,268)+
 T(105,282,'Source earth','middle')+T(375,298,'Own earth rod','middle')+legend(['lv','c','e'],302),'TN-S, TN-C-S and TT earthing systems'),

solarpv:S('0 0 440 262',
 T(45,30,'PV array','middle')+`<rect class="f w" x="10" y="36" width="70" height="64"/>`+P('M45 36V100M10 68H80','th')+
 P('M80 60H108','h')+P('M80 78H108','c')+B(108,44,62,48,'DC|isolator')+P('M170 60H198','h')+P('M170 78H198','c')+
 B(198,44,70,48,'MPPT|controller')+P('M215 92V132','h')+P('M251 92V132','c')+B(198,132,70,40,'Battery|bank')+
 P('M268 146H325V92','h')+P('M268 160H341V92','c')+B(300,44,66,48,'Inverter')+
 P('M366 60H388','lv')+P('M366 78H388','c')+B(388,44,46,48,'AC|board')+P('M411 92V112','lv')+T(404,126,'Loads','middle')+
 E('M20 100V200H428V92')+E('M358 92V200')+E('M225 200V210')+gnd(225,210)+T(250,224,'System earth')+
 note(['PV array → DC isolator → MPPT controller → battery → inverter → AC board.'],10,244).replace('y="244"','y="244"')+'' ,'Off-grid solar PV single-line schematic'),

serpar:S('0 0 440 214',
 B(10,72,56,40,'24 V')+T(46,66,'+')+T(46,126,'−')+P('M38 72V30H110','h')+B(110,18,70,24,'R1 6 Ω')+P('M180 30H245V122','h')+P('M245 52H270M245 122H270','h')+
 B(270,40,80,24,'R2 12 Ω')+B(270,110,80,24,'R3 4 Ω')+P('M350 52H375M350 122H375M375 52V160H38V112','c')+
 note(['R2 and R3 in parallel give 3 Ω; in series with R1 the total is 9 Ω.'],10,186)+legend(['h','c'],206),'Series-parallel resistor circuit'),

dcmachine:S('0 0 440 218',
 T(20,14,'Yoke (frame)')+`<rect class="f" x="20" y="20" width="230" height="160" rx="6"/>`+`<circle class="f w" cx="135" cy="100" r="38"/>`+T(135,104,'Armature','middle')+
 B(100,28,70,24,'N pole')+B(100,148,70,24,'S pole')+P('M173 100H288')+
 `<circle class="f w" cx="300" cy="100" r="22"/>`+`<rect class="f w" x="292" y="70" width="16" height="12"/><rect class="f w" x="292" y="118" width="16" height="12"/>`+
 T(322,80,'Brush')+T(322,128,'Brush')+T(300,156,'Commutator','middle')+
 note(['Poles with field windings make the flux; the commutator and','brushes carry current to the rotating armature.'],10,198),'DC machine parts'),

powertri:S('0 0 400 214',
 P('M50 150H270V60Z')+P('M80 150A30 30 0 0 0 77.8 138.7','th')+T(88,146,'φ')+
 T(160,172,'P (kW) true power','middle','tc')+T(278,108,'Q (kVAr)',null,'tr')+T(150,98,'S (kVA)','end')+
 note(['cos φ = P ÷ S (the power factor).','Capacitors reduce Q, so the angle φ gets smaller.'],10,196),'Power triangle'),

shuntmotor:S('0 0 440 232',
 T(10,24,'+')+P('M10 30H130M210 30H330V66','h')+B(130,18,80,24,'Starter')+dot(80,30)+P('M80 30V80','h')+B(60,80,40,56,'Shunt|field')+P('M80 136V170','c')+
 `<circle class="f w" cx="330" cy="100" r="34"/>`+T(330,104,'M','middle')+T(372,104,'Armature')+P('M330 134V170H10','c')+T(10,164,'−')+
 note(['The shunt field is connected across the supply; the starter','is in series with the armature.'],10,192)+legend(['h','c'],226),'DC shunt motor with starter')
};
Object.assign(Z.figs,F);
Object.assign(Z.tasks,{twoway:'Draw two-way switching. Label COM, L1 and L2 on both switches, then show the two strappers, the live feed, the lamp and the neutral.'});
Object.assign(Z.marks,{
twoway:['Both switches with COM, L1 and L2 labelled','Strapper 1 joins L1 to L1 and strapper 2 joins L2 to L2','Live feeds COM of Switch A; COM of Switch B feeds the lamp','Lamp returns to neutral'],
stardelta:['Six terminals in two rows','Star: bottom row W2, U2, V2 linked','Delta: vertical links U1-W2, V1-U2, W1-V2','Supply L1, L2, L3 to the top row'],
solarpv:['PV array with DC isolator shown','MPPT charge controller and battery correctly connected','Inverter with DC input and AC output','AC board and system earthing shown'],
planDim:['Walls and room names','Dimensions in metres','Door swings and windows','Scale shown']});
})();
