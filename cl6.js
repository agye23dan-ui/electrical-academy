(function(){
// Level 3 question-bank top-ups so every topic area has at least twice the questions a practice test draws.
const {Q}=CGH;
const add=(id,qs)=>{const m=Z.mods.find(x=>x.id===id);if(m)m.q.push(...qs)};

add('cg303a',[
Q('T1','Which fault-finding method starts at the supply and works along the circuit until the condition changes?','Input to output',['Output to input','Random replacement','Guesswork']),
Q('T1','The safe isolation procedure is used before dead fault-finding tests to…','make sure the circuit cannot be energised while it is being tested',['make the readings higher','save time','charge the instrument'])
]);
add('cg303b',[
Q('T4','An RCD that trips only in wet weather most probably has…','leakage to earth through moisture in outdoor equipment or cables',['a high supply voltage','a short circuit in the neutral','a faulty switch'])
]);
add('cg304a',[
Q('T2','If continuity leads are not nulled, the reading will…','include the lead resistance and be too high',['be too low','be exact','be zero']),
Q('T2','Insulation resistance tests must not be made…','with lamps and electronic equipment still connected, because they may be damaged or give false readings',['with the circuit isolated','at 500 V','with the switches closed']),
Q('T2','A reading of 999 MΩ (above range) on a new circuit indicates…','excellent insulation',['a fault','an open circuit CPC','a short circuit']),
Q('T2','The R2 method of continuity testing uses…','a long test lead from the main earthing terminal to measure the CPC resistance',['a bridge rectifier','a voltage indicator','an RCD tester'])
]);
add('cg304b',[
Q('T3','A loop impedance tester on a high-current setting on an RCD-protected circuit may…','trip the RCD during the test',['improve the reading','measure insulation','not operate'])
]);
add('cg305b',[
Q('T4','An 8 kW single-phase resistive load at 230 V has a design current of about…','34.8 A',['3.5 A','348 A','8 A']),
Q('T4','A cable with a tabulated rating of 62 A, Ca = 0.94 and Cg = 0.80 has an installed capacity of about…','46.6 A',['62 A','80 A','33 A'])
]);
add('cg308',[
Q('T1','A facilities management company mainly…','maintains buildings and their services such as electrical systems',['designs power stations','manufactures cables only','sells tools only']),
Q('T1','Infrastructure work for electricians includes…','rail, road and energy network electrical systems',['only domestic lighting','only toys','only furniture']),
Q('T1','A data centre needs electricians because it relies on…','highly reliable power distribution, standby supplies and cooling',['no electricity','candles','only battery torches']),
Q('T1','An estimator in an electrical firm…','prepares costs and quotations for work',['installs every cable','repairs vans','tests every circuit']),
Q('T2','Which assessment is a practical test of competence for electricians?','The AM2 or AM2E',['A driving theory test','A first aid quiz','A multiple-choice quiz on cables']),
Q('T2','A portfolio of evidence for an NVQ records…','the work experience and tasks the learner has carried out',['only exam results','only the price of materials','only holidays']),
Q('T2','The IET offers…','professional registration such as EngTech, IEng and CEng',['dental treatment','car insurance','tool hire']),
Q('T2','Level 3 competence assessment is mainly carried out…','in the workplace or an assessment centre by observation of practical work',['only by reading a book','by post','by guessing']),
Q('T3','The apprentice rate of the minimum wage applies to…','apprentices under 19 or in the first year of their apprenticeship',['all electricians','only managers','nobody']),
Q('T3','A worker on a zero-hours contract…','still has employment rights such as the minimum wage and paid holiday',['has no rights','cannot be paid','must work 100 hours'])
]);
})();
