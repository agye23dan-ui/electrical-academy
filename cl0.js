(function(){
// City & Guilds 2365 Level 3 units. Unit titles follow published course summaries; the official handbook is the authority.
// Sources disagree on how units 301 to 305 are assessed (online multiple choice, written paper or practical), so the
// tests here are PRACTICE tests: their length and topic weights are chosen by this app and are not the official ones.
const S3='City & Guilds 2365 Level 3';
const un=(title,test,topics,modules,extra)=>Object.assign({level:3,series:S3,title,test,los:topics,modules,topicLabel:'Topic area'},extra||{});
Object.assign(CG.units,{
 '301':un('Environmental technology systems',{n:27,min:60,pass:60,book:'closed',practice:true},
  [['T1','Principles, legislation and certification',5],['T2','Solar photovoltaic systems',6],['T3','Wind and micro-hydro',3],['T4','Heat pumps and solar thermal',5],['T5','Rainwater harvesting and greywater recycling',3],['T6','Storage, EV charging, CHP and biomass',5]],['cg301a','cg301b']),
 '302':un('Principles of electrical science (Level 3)',{n:30,min:90,pass:60,book:'closed',practice:true},
  [['T1','AC waveforms and phasors',5],['T2','R-L-C circuits and resonance',7],['T3','Power and power factor',5],['T4','Three-phase systems',4],['T5','Transformers and machines',5],['T6','Capacitance, inductance and transients',4]],['cg302a','cg302b','cg302c']),
 '303':un('Fault diagnosis and rectification',{n:30,min:60,pass:60,book:'closed',practice:true},
  [['T1','Safe fault-finding process',6],['T2','Instruments and techniques',6],['T3','Circuit and cable faults',8],['T4','RCD, earthing and protection faults',5],['T5','Motor and control faults',3],['T6','Reporting and rectification',2]],['cg303a','cg303b']),
 '304':un('Inspection, testing and commissioning',{n:40,min:90,pass:60,book:'closed',practice:true},
  [['T1','Inspection and verification principles',6],['T2','Dead tests',10],['T3','Live tests',10],['T4','Ring final circuits and instruments',6],['T5','Certification, periodic inspection and commissioning',8]],['cg304a','cg304b','cg304c']),
 '305':un('Electrical systems design',{n:40,min:90,pass:60,book:'closed',practice:true},
  [['T1','Design process, demand and diversity',7],['T2','Supply characteristics and earthing design',6],['T3','Protective devices',8],['T4','Cable selection and voltage drop',10],['T5','Fault levels and the adiabatic equation',4],['T6','Lighting, power factor and documentation',5]],['cg305a','cg305b','cg305c']),
 '308':un('Career awareness in building services engineering',{n:20,min:40,pass:60,book:'closed',practice:true},
  [['T1','The electrotechnical industry',5],['T2','Qualifications and progression',6],['T3','Employment rights and responsibilities',5],['T4','Self-employment and professionalism',4]],['cg308'])
});
// the Level 2 units keep their own series label
Object.keys(CG.units).forEach(u=>{const U=CG.units[u];if(!U.level){U.level=2;U.series=CG.series;U.topicLabel='Learning outcome'}});
CG.seriesL3=S3;
const base=CGH.mod;
CGH.mod3=(id,title,unit,notes,figs,q,w)=>{Z.mods.push({id,t:title,s:S3+' · Unit '+unit,n:notes,f:figs||[],q,w})};
})();
