(function(){
// City & Guilds 2365 Level 2 track: shared helpers and the unit/test specification map.
// Structure (unit numbers, test lengths, learning-outcome weightings) follows a third-party summary of the
// 2365-02 handbook; check every figure against the current City & Guilds handbook before relying on it.
const SERIES='City & Guilds 2365 Level 2';
const CG={
 series:SERIES,
 units:{
  '201':{title:'Health and safety in building services engineering',glh:26,test:{n:25,min:40,pass:60,book:'closed'},
   los:[['LO1','Legislation in the workplace',4],['LO2','Environmental and health and safety situations',6],['LO3','Establishing a safe working environment',7],['LO4','Identifying and dealing with hazards',8]],
   modules:['cg201a','cg201b']},
  '202':{title:'Principles of electrical science',glh:89,test:{n:40,min:90,pass:50,book:'closed'},
   los:[['LO1','Mathematical principles',2],['LO2','Units of measurement',5],['LO3','Mechanics: force, work, energy and power',7],['LO4','Resistance, resistivity, voltage, current and power',15],['LO5','Magnetism and electricity',7],['LO6','Electronic components',4]],
   modules:['cg202a','cg202b','cg202c']},
  '203':{title:'Electrical installations technology',glh:115,test:{n:40,min:75,pass:60,book:'open (IET On-Site Guide)'},
   los:[['LO1','Electrical industry regulations',3],['LO2','Obtaining technical information',5],['LO3','Wiring systems',15],['LO4','Earthing systems',9],['LO5','How electricity is supplied',5],['LO6','Micro-renewable energies',3]],
   modules:['cg203a','cg203b','cg203c','cg203d']},
  '204':{title:'Installation of wiring systems and enclosures',glh:196,test:null,practical:true,
   los:[['PA','Externally set practical assignment, marked locally and externally verified',0]],
   modules:['cg204a','cg204b']},
  '210':{title:'Communicating with others within building services engineering',glh:28,test:{n:20,min:40,pass:60,book:'closed'},
   los:[['LO1','The construction team',5],['LO2','Information sources',9],['LO3','Communicating with others',6]],
   modules:['cg210']}
 }
};
const Q=(lo,q,c,w,why)=>[q,[c,...w],0,'Answer: '+c+(why?'. '+why:''),lo];
const tbl=(head,rows)=>`<div style="overflow-x:auto;margin:10px 0;"><table style="width:100%;border-collapse:collapse;font-size:0.9rem;"><tr>${head.map(h=>`<th style="text-align:left;padding:6px 8px;border-bottom:2px solid var(--line-strong);">${h}</th>`).join('')}</tr>${rows.map(r=>`<tr>${r.map(c=>`<td style="padding:6px 8px;border-bottom:1px solid var(--line);vertical-align:top;">${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
const mod=(id,title,unit,notes,figs,q,w)=>{Z.mods.push({id,t:title,s:SERIES+' · Unit '+unit,n:notes,f:figs||[],q,w})};
const note=t=>`<div class="note">${t}</div>`;
window.CG=CG;window.CGH={Q,tbl,mod,note};
})();
