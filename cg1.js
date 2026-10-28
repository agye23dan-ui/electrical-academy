(function(){
// City & Guilds 2365 Level 2, Unit 201: Health and safety in building services engineering.
const {Q,tbl,mod,note}=CGH;

mod('cg201a','201·A Legislation, fire, first aid and the environment','201',
`<p><b>City & Guilds 2365 Level 2, Unit 201, LO1 and LO2.</b> This lesson covers the laws that apply to electrical work, how they are enforced, and how to deal with fire, electric shock, injury and waste. The law described here is the law of the United Kingdom, which the City & Guilds tests are written for.</p>
<h3>LO1: Legislation in the Workplace</h3>
<p><b>Acts and regulations.</b> An <b>Act</b> is primary legislation passed by Parliament. <b>Regulations</b> are secondary legislation made under an Act. An <b>Approved Code of Practice (ACOP)</b> explains how to comply with regulations and has a special legal status: if you are prosecuted and have not followed it, you must show you complied in an equally effective way. <b>Guidance</b> (for example HSE guidance notes) is advice and is not compulsory. <b>British Standards</b> such as BS 7671 are not law themselves, but following them is the normal way to show you have met the law.</p>
<h3>The Health and Safety at Work etc. Act 1974 (HSWA)</h3>
<p>This is the main law. It applies to everyone at work, whatever the trade.</p>
<p><b>Employers must (section 2)</b> provide: safe equipment and safe systems of work; safe use, handling, storage and transport of articles and substances; information, instruction, training and supervision; a safe workplace with safe access and exit; a safe working environment with adequate welfare facilities. An employer with five or more employees must have a <b>written health and safety policy</b>.<br>
<b>Employees must (sections 7 and 8)</b>: take reasonable care of their own health and safety and that of others who may be affected by what they do or fail to do; co-operate with their employer so the employer can meet their duties; and never interfere with or misuse anything provided for health and safety.<br>
<b>The self-employed (section 3)</b> must not put themselves or others at risk.</p>
<p><b>Enforcement.</b> The Health and Safety Executive (HSE) and local authorities enforce the law. An inspector may enter premises, take samples, photographs and statements, and issue notices:</p>
${tbl(['Action','What it means'],[
['Informal advice','Verbal or written guidance to put things right'],
['Improvement notice','Fix the problem within a stated time (usually at least 21 days)'],
['Prohibition notice','Stop the activity immediately (or after a short delay) where there is a risk of serious personal injury'],
['Prosecution','A court case; penalties include unlimited fines and, for some offences, imprisonment']])}
<h3>Key Regulations for Electricians</h3>
${tbl(['Law','Main requirement'],[
['Electricity at Work Regulations 1989','Systems must be safe to use and maintain; work must not be done live unless it is unreasonable to make it dead, it is reasonable to work live, and suitable precautions are taken; people working on electrical systems must be competent. Applies to all work activities and all voltages.'],
['Management of Health and Safety at Work Regulations 1999','Employers must carry out risk assessments, appoint competent people, and train staff. Significant findings are recorded when there are five or more employees.'],
['Provision and Use of Work Equipment Regulations 1998 (PUWER)','Equipment must be suitable, maintained, inspected where necessary, and used only by trained people.'],
['Lifting Operations and Lifting Equipment Regulations 1998 (LOLER)','Lifting equipment must be strong, stable, marked with safe working loads, and examined by a competent person.'],
['Work at Height Regulations 2005','Avoid work at height if possible; if not, prevent falls; if a fall cannot be prevented, reduce its distance and consequences.'],
['Manual Handling Operations Regulations 1992','Avoid hazardous manual handling; assess the risk if it cannot be avoided; reduce the risk as far as reasonably practicable.'],
['Personal Protective Equipment at Work Regulations 1992','PPE is the last line of defence. The employer provides it free, it must fit and be maintained, and people must be trained to use it.'],
['Control of Substances Hazardous to Health Regulations 2002 (COSHH)','Assess and control exposure to hazardous substances such as solder fumes, flux, solvents, adhesives, and dust.'],
['Control of Noise at Work Regulations 2005','Lower exposure action value 80 dB(A) (hearing protection available), upper exposure action value 85 dB(A) (hearing protection mandatory), exposure limit 87 dB(A) taking hearing protection into account.'],
['RIDDOR 2013','Employers must report work-related deaths, specified serious injuries, injuries causing more than seven days off work, certain diseases, and dangerous occurrences to the HSE. Records are kept for at least three years.'],
['Construction (Design and Management) Regulations 2015 (CDM)','Duty holders (client, principal designer, principal contractor, contractors, workers) plan and manage health and safety on construction projects. The principal contractor prepares the construction phase plan.'],
['Control of Asbestos Regulations 2012','Do not disturb suspected asbestos: stop, leave the area and report.'],
['Health and Safety (First-Aid) Regulations 1981','Employers must provide adequate first-aid equipment, facilities and trained people.'],
['Regulatory Reform (Fire Safety) Order 2005','The responsible person must carry out a fire risk assessment and provide fire precautions, alarms, extinguishers, signs and escape routes.']])}
${note('<b>Statutory or not?</b> The Electricity at Work Regulations 1989 are law. BS 7671 (the IET Wiring Regulations) is a British Standard: it is not statutory, but an installation that complies with it is likely to satisfy the Electricity at Work Regulations.')}
<h3>LO2: Environmental and Health and Safety Situations</h3>
<h3>Fire</h3>
<p>A fire needs three things, the <b>fire triangle</b>: heat (ignition), fuel and oxygen. Remove one and the fire goes out. Starve (remove fuel), smother (remove oxygen) or cool (remove heat).<br>
<b>Fire classes:</b> A = ordinary solids (wood, paper, cloth); B = flammable liquids (petrol, paint); C = flammable gases; D = metals; F = cooking oils and fats. Electrical fires are not a separate class: first make the equipment dead if it is safe to do so, then treat the fire according to what is burning.</p>
${tbl(['Extinguisher','Label colour','Use on','Never use on'],[
['Water','Red','Class A (wood, paper, textiles)','Live electrical equipment, flammable liquids, cooking oils'],
['Foam','Cream','Class A and B','Live electrical equipment'],
['Dry powder','Blue','Class A, B, C and live electrical equipment (it can obscure vision and make a mess)','Enclosed spaces (powder cloud)'],
['Carbon dioxide (CO2)','Black','Class B and live electrical equipment (no residue)','Class A deep-seated fires; hold the horn carefully because it gets very cold'],
['Wet chemical','Yellow','Class F (cooking oil and fat) and Class A','Live electrical equipment']])}
<p><b>On discovering a fire:</b> raise the alarm (operate the nearest call point); call the fire service (999); leave by the nearest safe exit to the assembly point; only attempt to fight a small fire if it is safe, you are trained and you have a clear escape route behind you. Never use lifts. Keep escape routes and fire doors clear.</p>
<h3>Electric Shock and First Aid</h3>
<p>The effect of shock depends on the current, the time, the path through the body, and the frequency. Approximate effects of 50 Hz AC: about 1 mA is the threshold of feeling; around 10 mA causes painful muscle contraction and may prevent letting go; around 30 mA or more through the chest can cause ventricular fibrillation if it lasts long enough; much higher currents cause burns, cardiac arrest and death. This is why 30 mA is the standard trip rating for additional protection RCDs. Body resistance depends on skin condition: wet skin may have a resistance of only a few hundred ohms.</p>
<p><b>Dealing with a shock casualty:</b><br>1. Do not touch the casualty until the supply is off or you are sure it is safe.<br>2. Switch off at the nearest point or isolator. If you cannot, push the casualty clear using dry, non-conducting material (wood, rubber, folded dry cloth).<br>3. Call for help and ring 999.<br>4. Check for danger, response, airway, breathing. If there is no breathing, start CPR at about 30 chest compressions to 2 rescue breaths and use an AED if available.<br>5. Treat burns by cooling with clean running water for at least 10 minutes and covering loosely.<br>6. Anyone who has had a shock should be examined by a doctor.<br>Report the incident and record it in the <b>accident book</b>.</p>
<p><b>First-aid kit contents</b> include sterile dressings, bandages, plasters, safety pins, gloves and eye wash. They do not include tablets or medicine. A first aider holds a valid first-aid certificate; an appointed person takes charge in an emergency and looks after equipment.</p>
<h3>Safety Signs</h3>
${tbl(['Sign','Shape and colour','Meaning','Example'],[
['Prohibition','Red circle with diagonal line','Must not do','No smoking'],
['Mandatory','Blue circle, white symbol','Must do','Wear eye protection'],
['Warning','Yellow triangle with black border','Be careful of a hazard','Danger: electric shock'],
['Safe condition','Green rectangle or square','Escape routes and first aid','Fire exit, first-aid post'],
['Fire equipment','Red rectangle or square','Where fire equipment is','Fire extinguisher']])}
<h3>Environmental Responsibilities</h3>
<p>Waste from electrical work includes cable off-cuts, packaging, old accessories, batteries and discharge lamps. Under the <b>duty of care</b> you must keep waste safely, pass it only to an authorised carrier, and keep waste transfer records. Segregate waste: copper and aluminium cable off-cuts are recycled for value; fluorescent and other discharge lamps contain mercury and are <b>hazardous waste</b>; old electrical equipment is dealt with under the WEEE (Waste Electrical and Electronic Equipment) rules; batteries are collected separately. Control noise, dust and spills; use a spill kit, wet cutting or extraction when cutting masonry, and never pour chemicals down drains.</p>
<p>Specifying energy-efficient equipment and controls (LED lamps, presence detection, daylight sensing) reduces energy use and carbon emissions and is part of Building Regulations Part L.</p>`,
['isolate'],
[
Q('LO1','Which Act is the main piece of health and safety legislation covering all workplaces in the UK?','The Health and Safety at Work etc. Act 1974',['BS 7671','The Electricity at Work Regulations 1989','The Building Regulations']),
Q('LO1','Under the Health and Safety at Work etc. Act 1974, employees must…','take reasonable care of themselves and others, and co-operate with their employer',['only follow rules they agree with','report all hazards to the client only','look after only their own safety']),
Q('LO1','The Electricity at Work Regulations 1989 apply to…','all electrical systems and equipment in all work activities',['domestic installations only','installations above 1,000 V only','construction sites only']),
Q('LO1','Which organisation enforces health and safety law on construction sites?','The Health and Safety Executive (HSE)',['The IET','City & Guilds','The Electrical Contractors Association']),
Q('LO1','A prohibition notice issued by an HSE inspector requires…','the activity to stop immediately because of a risk of serious injury',['a fix within 21 days','a fine to be paid to the inspector','the company to close permanently']),
Q('LO1','An improvement notice requires the person served to…','put right the problem within a stated time',['stop all work for a month','buy new equipment','appoint a new director']),
Q('LO1','The legal status of an Approved Code of Practice (ACOP) is that…','it is not itself law, but failing to follow it can be used as evidence of failing to comply unless you show another equally effective way',['it is optional advice with no legal weight','it replaces the regulation it supports','it only applies to the HSE']),
Q('LO1','BS 7671 is…','a British Standard that is not law in itself, but following it helps show compliance with statutory regulations',['an Act of Parliament','a European Regulation','an HSE prohibition']),
Q('LO1','Which regulations cover the safe selection, maintenance and use of tools and machines at work?','PUWER 1998',['COSHH 2002','RIDDOR 2013','CDM 2015']),
Q('LO1','RIDDOR requires certain incidents to be reported to…','the HSE (or the local authority)',['the IET','the supplier of the tools','the client\'s insurance only']),
Q('LO1','COSHH regulations are concerned with…','hazardous substances such as solvents, fumes and dust',['working at height','manual handling','electrical isolation']),
Q('LO1','Under the Work at Height Regulations 2005 the first step is to…','avoid working at height where it is reasonably practicable',['always use a ladder','use a harness for every task','provide a safety net in all cases']),
Q('LO1','Who must have a written health and safety policy?','Employers with five or more employees',['Only construction firms','Only firms with more than 50 employees','Only the self-employed']),
Q('LO1','Under CDM 2015, the construction phase plan is prepared by the…','principal contractor',['client\'s accountant','electrician on site','HSE inspector']),
Q('LO1','Under the Health and Safety at Work etc. Act, an employee who deliberately misuses a safety device…','is committing an offence by interfering with something provided for health and safety',['is protected because it is the employer\'s equipment','is only guilty if injured','is not responsible']),
Q('LO2','The three elements of the fire triangle are…','heat, fuel and oxygen',['smoke, heat and water','fuel, carbon and wind','oxygen, nitrogen and heat']),
Q('LO2','Which extinguisher is safe to use on live electrical equipment?','Carbon dioxide (CO2)',['Water','Foam','Wet chemical']),
Q('LO2','The label colour of a carbon dioxide extinguisher is…','black',['red','cream','blue']),
Q('LO2','The label colour of a foam extinguisher is…','cream',['black','yellow','blue']),
Q('LO2','A water extinguisher is suitable for…','Class A fires (wood, paper, textiles)',['live electrical equipment','flammable liquids','cooking oil fires']),
Q('LO2','Dry powder extinguishers are identified by a…','blue label',['black label','cream label','yellow label']),
Q('LO2','On discovering a fire, the first action is to…','raise the alarm',['go back for your tools','fight the fire with water','use the lift to leave']),
Q('LO2','An electric current of around 30 mA or more through the chest may…','cause ventricular fibrillation of the heart',['have no effect','only tingle the skin','warm the muscle']),
Q('LO2','The first thing to do when a person is in contact with live equipment is to…','switch off the supply, or free them with dry non-conducting material if you cannot',['grab their hand and pull','throw water on them','wait for the fuse to blow']),
Q('LO2','A blue circular sign with a white symbol indicates…','a mandatory action that must be carried out',['a prohibition','a warning','a safe condition']),
Q('LO2','A green rectangular sign shows…','a safe condition such as an exit or first-aid point',['a danger','a prohibited action','a mandatory action']),
Q('LO2','A yellow triangle with a black border is a…','warning sign',['prohibition sign','mandatory sign','fire-equipment sign']),
Q('LO2','Used fluorescent tubes are classed as…','hazardous waste because they contain mercury',['general waste','food waste','harmless glass']),
Q('LO2','The duty of care for waste means you must…','pass waste only to an authorised carrier and keep records',['bury it on site','burn it on site','give it to anyone who will take it']),
Q('LO2','Which item should NOT be in a workplace first-aid kit?','Tablets and medicines',['Sterile dressings','Bandages','Disposable gloves']),
Q('LO2','Burns from an electric shock should be cooled with…','clean running water for at least 10 minutes',['butter','ice directly on the skin','toothpaste']),
Q('LO2','The upper exposure action value for noise (hearing protection mandatory) is…','85 dB(A)',['60 dB(A)','100 dB(A)','120 dB(A)'])
],
[['List the duties of an employer and an employee under the Health and Safety at Work etc. Act 1974.','Employer: safe plant and systems, safe handling and storage, information, instruction, training and supervision, safe workplace and access, welfare, a written policy if five or more employees. Employee: take reasonable care of self and others, co-operate with the employer, do not interfere with or misuse safety equipment.'],
['Explain the difference between an improvement notice and a prohibition notice.','An improvement notice requires a problem to be put right within a stated time; a prohibition notice stops an activity at once because there is a risk of serious injury.'],
['Describe how to deal with a person who is being shocked by live equipment.','Do not touch them until safe; switch off the supply; if you cannot, free them with dry insulating material; call 999; check breathing and start CPR (30 compressions to 2 breaths) if needed; cool burns with running water; record in the accident book.'],
['State which extinguisher you would choose for a live electrical fire and why you would not use water.','Carbon dioxide (or dry powder). Water conducts electricity, so using it on live equipment could shock the user.'],
['Explain how waste from an electrical job should be handled.','Segregate it: recycle cable off-cuts, treat discharge lamps as hazardous waste, dispose of old equipment and batteries as WEEE or battery waste, use an authorised carrier and keep waste transfer records.']]);

mod('cg201b','201·B Safe working: risk assessment, isolation, working at height and hazards','201',
`<p><b>City & Guilds 2365 Level 2, Unit 201, LO3 and LO4.</b> This lesson covers how to set up and keep a safe place of work, and how to spot and deal with the hazards you meet on electrical jobs.</p>
<h3>LO3: Establishing a Safe Working Environment</h3>
<h3>Hazard, Risk and Risk Assessment</h3>
<p>A <b>hazard</b> is anything with the potential to cause harm (a live conductor, a ladder, solvent fumes). The <b>risk</b> is the chance that the hazard will harm someone, combined with how serious the harm would be. A <b>risk assessment</b> follows five steps:<br>1. Identify the hazards.<br>2. Decide who might be harmed and how.<br>3. Evaluate the risks and decide on precautions.<br>4. Record the findings and put them into practice.<br>5. Review and update the assessment when things change.</p>
<p><b>Hierarchy of control</b> (best to last resort): <b>eliminate</b> the hazard; <b>substitute</b> something less hazardous; use <b>engineering controls</b> (guards, isolation, extraction); use <b>administrative controls</b> (training, signs, permits, safe working procedures, limiting exposure time); and finally <b>PPE</b>, which protects only the wearer and relies on being used properly.</p>
<p>A <b>method statement</b> sets out the safe order in which a job will be done. Together with the risk assessment they form <b>RAMS</b>. A <b>permit to work</b> is a formal written authority to carry out specific hazardous work (hot work, confined spaces, work near high voltage) in a defined place and time, with precautions listed and signed off. A <b>toolbox talk</b> is a short briefing on a particular safety topic. A <b>site induction</b> tells new arrivals about site rules, hazards, emergency arrangements and welfare.</p>
<h3>Safe Isolation Procedure</h3>
<p>The law (Electricity at Work Regulations 1989) requires electrical work to be done dead unless live working is fully justified. Isolation must be <b>proved</b> for every job. The procedure, summarised in HSE guidance (GS 38) and industry best practice, is:</p>
<p>1. <b>Identify</b> the circuit or equipment and its source of supply, using drawings, labels and the installation records.<br>
2. <b>Select</b> a suitable voltage indicator and proving unit; check the instrument and leads for damage.<br>
3. <b>Isolate</b> the supply (switch off and open the isolator or remove the fuse or MCB).<br>
4. <b>Secure the isolation</b>: fit a personal lock and a warning notice (for example "Danger: Electricians at Work"). Keep the key on you.<br>
5. <b>Prove</b> the voltage indicator on the proving unit (or a known live source) so you know it works.<br>
6. <b>Test</b> that the circuit is dead between all conductors: line to neutral, line to earth, neutral to earth (and between all phases on three-phase work).<br>
7. <b>Re-prove</b> the voltage indicator on the proving unit to show it still works.<br>
Only then is it safe to start work. Depending on how steps are grouped, you may see this described as six steps; the order and purpose are the same.</p>
<p><b>Test equipment must follow GS 38:</b> a two-pole voltage indicator (not a multimeter or a "neon screwdriver"); leads that are insulated, colour-coded, and sturdy; probes with finger guards; exposed probe tips no longer than <b>4 mm</b> (2 mm or less, and spring-loaded, is better); and fused leads (a suitable low-current high-breaking-capacity fuse, with the fuse rating no more than 500 mA).</p>
<h3>Working at Height</h3>
<p>Use a ladder only for low-risk, short-duration work (up to about 30 minutes). Before use, check: stiles not bent, rungs not damaged, feet in place, no cracks, no paint hiding defects, and the ladder is the right class (EN 131 for professional use).<br>
<b>Set-up:</b> angle of 75 degrees, which is the <b>1-in-4 rule</b> (one metre out from the wall for every four metres of height); firm, level base; tie at the top (or secure at the foot); the ladder should extend at least <b>1 m</b> above the landing place (or provide a secure handhold); keep three points of contact; do not overreach (keep your belt buckle between the stiles).<br>
<b>Stepladders:</b> fully open, on a level surface, do not work from the top three steps unless there is a suitable handrail or platform, and do not use a stepladder as a straight ladder.<br>
<b>Mobile access towers</b> should be erected by trained people (PASMA), with the brakes on, correct bracing and guard rails, and used only on firm level ground. The maximum platform height is about 3.5 times the shortest base dimension indoors and 3 times outdoors. <b>Scaffolding</b> must be erected, inspected and tagged by competent scaffolders. Mobile elevating work platforms (MEWPs) are operated only by trained people (IPAF).</p>
<h3>PPE (Personal Protective Equipment)</h3>
${tbl(['Hazard','PPE'],[['Falling objects','Hard hat'],['Flying particles, dust, splashes (drilling, chasing, cutting)','Safety glasses or goggles'],['Noise from tools','Ear defenders or plugs'],['Cuts, sharp edges','Gloves'],['Dropped or sharp objects, nails','Safety boots with toe protection and mid-sole'],['Dust, fumes, silica','Respirator (FFP2 or FFP3 as assessed)'],['Traffic or plant on site','High-visibility clothing'],['Live work (only where justified)','Insulated gloves, insulated tools, face shield']])}
<h3>Manual Handling</h3>
<p>Reduce injury risk by assessing <b>TILE</b>: <b>T</b>ask, <b>I</b>ndividual, <b>L</b>oad, <b>E</b>nvironment. Safe lifting: plan the lift; use a trolley or lifting aid where possible; get help for heavy or awkward loads such as cable drums, switchgear and containment; feet apart with one foot slightly forward; bend the knees, keep the back straight; get a firm grip; keep the load close; lift smoothly without twisting.</p>
<h3>Tools and Equipment on Site</h3>
<p>Site tools are normally powered from a <b>110 V centre-tapped earth (CTE)</b> supply. The 110 V transformer is centre-tapped so each line is at 55 V to earth, which reduces the shock voltage. Check tools and leads before each use (plug, cable, casing, switch, guards), and look for a recent inspection or PAT label. Do not use damaged tools: remove them, tag them as defective and report them. Hand tools used near live parts must be insulated (rated to 1,000 V). Keep tools sharp, use the right tool for the job, and carry them safely.</p>
<h3>COSHH on Electrical Jobs</h3>
<p>Typical substances: solder and flux fumes, PVC cement and solvents, adhesives, sealants, cleaning fluids, dust from chasing and drilling masonry (silica). Read the <b>safety data sheet</b>, check the hazard pictograms on the container, use the least hazardous product, ventilate or extract, use PPE as the last step, and store safely.</p>
<h3>LO4: Identifying and Dealing with Hazards</h3>
<h3>Electrical Hazards</h3>
<p>Electric <b>shock</b> can result from <b>direct contact</b> (touching live parts) or <b>indirect contact</b> (touching a metal part such as an appliance case that has become live because of a fault). Other electrical hazards: <b>burns</b>, <b>arcing and arc blast</b> from short circuits, <b>fire</b> from overheating or loose connections, <b>stored energy</b> in capacitors, <b>back-feed</b> from generators and solar PV (PV arrays stay live in daylight), induced voltages, damaged or worn cables, wet conditions, and falling after a shock.<br>
<b>Controls:</b> isolate and lock off; prove dead; use RCD protection and 110 V CTE tools; inspect leads; keep cables off the floor; keep water away; discharge capacitors; mark solar DC circuits as live; never assume a circuit is dead.</p>
<h3>Hazards When Digging and Near Overhead Lines</h3>
<p>Before digging, get <b>plans of underground services</b>, use a <b>cable avoidance tool</b> (CAT and signal generator), dig trial holes by hand, and follow HSE safe digging guidance. Near <b>overhead lines</b> keep well away, do not use long ladders, scaffold poles or machinery under them, and contact the network operator for advice. Treat any buried cable as live until proved dead.</p>
<h3>Other Site Hazards</h3>
<p><b>Slips, trips and falls</b> (keep the area tidy, tape or protect cables, clear spills); <b>falling objects</b>; <b>noise</b>; <b>hand-arm vibration</b> from hammer drills (limit exposure and take breaks); <b>dust</b> from chasing and cutting (use extraction, wet cutting and a suitable respirator); <b>asbestos</b> in older buildings (if you find or suspect it, <b>stop work, leave the area and report</b> to your supervisor; never drill or disturb it); <b>confined spaces</b> (permit and rescue plan); <b>hot work</b> (permit, fire watch, extinguisher); <b>vehicles and plant</b>; <b>lone working</b> (tell someone where you are, check in regularly).</p>
<h3>Dealing with Hazards and Emergencies</h3>
<p>If you find a hazard: <b>stop</b> if it is unsafe; make the area safe if you can do so without risk; warn others (barriers, signs); report it to your supervisor; and record it if required. Report <b>near misses</b> as well as accidents, because they warn of problems before someone is hurt. If equipment is damaged, remove it from use, label it and report it. In an emergency follow the site procedure: raise the alarm, call the emergency services, give first aid if trained, and go to the assembly point.</p>
${note('<b>Golden rule:</b> never assume a circuit is dead. Identify, isolate, secure the isolation, prove the tester, test, then re-prove the tester.')}`,
['isolate'],
[
Q('LO3','The first step in a five-step risk assessment is to…','identify the hazards',['record the findings','review the assessment','issue the PPE']),
Q('LO3','A hazard is…','something with the potential to cause harm',['the chance of being injured','a type of PPE','a legal notice']),
Q('LO3','Risk is best described as…','the likelihood of harm occurring combined with how serious the harm would be',['anything that can cause harm','a safety sign','a type of accident']),
Q('LO3','In the hierarchy of control, which is used last?','PPE',['eliminate the hazard','substitute a safer product','engineering controls']),
Q('LO3','A method statement describes…','the safe order in which the job will be carried out',['the price of the job','the hazards on site only','the client\'s requirements']),
Q('LO3','A permit to work is…','formal written authority to carry out specific hazardous work with listed precautions',['a licence to drive on site','an invoice','a delivery note']),
Q('LO3','The first step of safe isolation is to…','identify the circuit and its source of supply',['prove the tester','secure the isolation','start work']),
Q('LO3','After isolating a circuit you should…','secure the isolation with a personal lock and warning notice',['leave it unattended','tell a colleague to watch it','start work immediately']),
Q('LO3','Why is the voltage indicator proved before and after testing?','to show that it was working when you tested the circuit',['to charge its battery','to calibrate it','to clean the probes']),
Q('LO3','To confirm a circuit is dead, voltage is tested between…','all conductors: line to neutral, line to earth and neutral to earth',['line and neutral only','earth and neutral only','line and the lock only']),
Q('LO3','GS 38 recommends the maximum exposed length of voltage-indicator probe tips is…','4 mm (2 mm or less is better)',['20 mm','40 mm','No limit']),
Q('LO3','A ladder should be set at an angle of about…','75 degrees (1 in 4)',['45 degrees','60 degrees','90 degrees']),
Q('LO3','The 1-in-4 rule means…','the ladder base is 1 m out for every 4 m of height',['4 m out for every 1 m of height','1 m of ladder for 4 m of wall','4 rungs for every metre']),
Q('LO3','A ladder used to reach a landing should extend above it by at least…','1 m',['10 cm','25 cm','3 m']),
Q('LO3','Site hand tools are normally powered from…','110 V centre-tapped earth supply',['400 V without protection','230 V unprotected','12 V DC only']),
Q('LO3','Why is the 110 V supply for site tools centre-tapped to earth?','each line is only 55 V to earth, reducing the risk of a fatal shock',['it doubles the power','it saves cable','it removes the need for an earth']),
Q('LO3','TILE in manual handling stands for…','Task, Individual, Load, Environment',['Time, Injury, Lift, Effort','Tools, Items, Loads, Equipment','Train, Inspect, Lift, End']),
Q('LO3','Which PPE protects the eyes when drilling masonry?','Safety glasses or goggles',['Ear defenders','Hard hat','Gloves']),
Q('LO3','A safety data sheet (SDS) gives information about…','a hazardous substance and how to use and store it safely',['a tool\'s price','a worker\'s training','the site programme']),
Q('LO3','A mobile access tower should only be erected by…','trained, competent people',['anyone available','the first person on site','the client']),
Q('LO4','Direct contact means touching…','live conductive parts',['a metal case made live by a fault','earthed metalwork','a plastic enclosure']),
Q('LO4','Indirect contact means touching…','a metal part that has become live due to a fault',['a live conductor','the supply cable','a neutral conductor directly']),
Q('LO4','Before digging, you should…','obtain service plans, use a cable avoidance tool and dig trial holes by hand',['start with a mechanical digger','assume there are no services','ask the neighbours']),
Q('LO4','Suspected asbestos is found when you start drilling. You should…','stop work, leave the area and report it to your supervisor',['carry on carefully','sweep it up','cover it with paint']),
Q('LO4','A damaged extension lead should be…','removed from use, labelled as defective and reported',['repaired with tape','used for light loads only','left where it is']),
Q('LO4','Solar PV panels remain live in daylight, so…','isolate the DC circuit and treat the array as live while light is falling on it',['they are dead when the inverter is off','they cannot be dangerous','they only carry AC']),
Q('LO4','A near miss should be…','reported so that causes can be removed before someone is hurt',['ignored because no one was injured','hidden','recorded only if there was damage']),
Q('LO4','Hand-arm vibration is a risk when using…','a hammer drill for long periods',['a screwdriver','a multimeter','a pencil']),
Q('LO4','Dust from chasing walls is controlled by…','extraction or wet cutting and a suitable respirator',['sweeping with a dry brush','removing eye protection','opening a window only']),
Q('LO4','Before working near a large capacitor you should…','make sure it is safely discharged',['assume it is empty','touch it to check','test it live']),
Q('LO4','A lone worker should…','tell someone where they are and check in at agreed times',['work without telling anyone','switch off their phone','avoid keeping records']),
Q('LO4','If you find an unlabelled underground cable while digging, you should…','treat it as live and stop work until it is identified',['cut it to test it','pull it out','bury it again']),
Q('LO4','What is the main danger of overhead power lines on a job?','touching or coming close to them with ladders, poles or machinery',['they make noise','they are too low in voltage','they block radio signals']),
Q('LO4','A trailing cable across a walkway is a hazard because…','it can cause trips and the cable may be damaged',['it makes noise','it overheats the floor','it costs more']),
Q('LO4','Which action helps keep an escape route safe?','keeping it clear of materials at all times',['storing spare cable there','locking the exit door','parking vehicles there']),
Q('LO4','If an emergency occurs on site, the correct sequence is…','raise the alarm, call the emergency services, give first aid if trained, go to the assembly point',['finish the job first','go home','try to hide the problem'])
],
[['Describe the five steps of a risk assessment.','Identify the hazards; decide who may be harmed and how; evaluate the risks and decide on precautions; record the findings and implement them; review and update.'],
['List the steps of the safe isolation procedure in order.','Identify the circuit, select the test equipment, isolate, secure the isolation (lock and notice), prove the tester, test dead, re-prove the tester.'],
['Explain why a multimeter is not suitable for proving dead.','A voltage indicator to GS 38 has a fuse, finger guards, short probe tips and a dedicated test function, and is less likely to be left on a wrong range; a multimeter can give a false reading if set incorrectly.'],
['Describe how to set up and use a ladder safely.','Check the ladder before use; set at 75 degrees (1 in 4); stand on firm level ground; tie it; extend 1 m above the landing; keep three points of contact; do not overreach.'],
['Describe what to do if you discover damage to a buried cable while digging.','Stop work, keep everyone away, treat it as live, report to the supervisor and the network operator, and do not touch or repair it.']]);
})();
