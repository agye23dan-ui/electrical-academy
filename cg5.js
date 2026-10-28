(function(){
// City & Guilds 2365 Level 2: Unit 204 (practical installation) and Unit 210 (communication), plus practical job sheets.
const {Q,tbl,mod,note}=CGH;

mod('cg204a','204·A Practical skills: tools, setting out, containment and cables','204',
`<p><b>City & Guilds 2365 Level 2, Unit 204.</b> Unit 204 is assessed by an externally set <b>practical assignment</b> that is marked locally and verified externally. You build a wiring installation to a drawing within a set time while working safely. This lesson covers the skills, tools and methods. The next lesson covers terminations, inspection and testing, and how to avoid losing marks. Your assignment brief gives the exact tasks, times and tolerances: always follow it.</p>
<h3>Working Safely in the Workshop</h3>
<p>Before you start: read the brief and the drawing; complete a risk assessment and method statement; wear the PPE for the job (safety glasses when drilling or cutting, hearing protection with noisy tools, gloves where needed, safety footwear); check tools and leads; keep the work area tidy; and agree where you will isolate and prove dead before connecting to any supply. If you are unsure, ask the assessor before you act: safety failures are treated seriously.</p>
<h3>Tools and Their Safe Use</h3>
${tbl(['Tool','Used for','Safe use'],[
['Insulated screwdrivers, pliers and side cutters','Terminating and cutting cable','Check insulation is undamaged; use the correct size so the screw head is not damaged'],
['Wire strippers','Removing insulation without damaging the conductor','Set to the cable size; do not nick the copper'],
['Hacksaw and tube cutter','Cutting conduit, trunking, tray','Cut square; fit a new blade; deburr after cutting'],
['Stock and die','Threading steel conduit','Use cutting oil; clean threads'],
['Conduit bender and bending spring','Forming bends, offsets and saddles','Use the correct size; mark the start of the bend; do not kink'],
['Reamer and file','Deburring cut ends','Remove sharp edges inside and outside the tube'],
['Hammer drill, SDS drill and bits','Drilling masonry fixings','Wear eye and hearing protection; check for hidden services; use dust control'],
['Spirit level, plumb line, laser level','Making work level and plumb','Check the tool is accurate before use'],
['Tape measure, steel rule, try square, scriber, pencil','Measuring and marking out','Measure twice, cut once'],
['Voltage indicator and proving unit; low-resistance ohmmeter; insulation tester','Proving dead and testing','Follow GS 38; prove before and after use; check leads']])}
<h3>Reading the Drawing and Brief</h3>
<p>Identify: dimensions and positions of accessories, containment and boards; the cable types and sizes; the circuit numbers and cable references; heights of switches and sockets; the sequence the brief requires; the time allowed; and the tolerances the assessor will check. Work from the <b>latest revision</b>. If a drawing and the brief disagree, ask.</p>
<h3>Setting Out and Marking Out</h3>
<p>Set out before you drill or cut. Use a datum (a fixed starting line), a <b>chalk line</b> or laser for long straight runs, a <b>spirit level</b> for level and plumb, a <b>try square</b> for right angles. Mark: the positions of accessory boxes and distribution boards; the line of each containment run; saddle and clip positions; bends and joints. Typical expectations are that switches and sockets are at consistent heights, aligned with each other, and that runs are straight, level or plumb and parallel. Mark carefully so that cable and containment fit the final position.</p>
<h3>Fixings</h3>
<p>Choose fixings for the material and load. Screws into wood: wood screws. Into masonry: wall plug and screw. Typical plug colours: yellow for a 5 mm hole, red for 6 mm, brown for 7 mm, grey for 8 mm and blue for 10 mm. Drill to the right size and depth, clear the dust, and make the screw length longer than the plug. Check for hidden cables or pipes before drilling. Use saddles, clips or cleats at the spacing given by the manufacturer or the On-Site Guide. Fix securely: the work should not move when pulled gently.</p>
<h3>Installing Conduit</h3>
<p>1. Mark out the run and the saddle or clip positions; fix boxes first.<br>
2. <b>Cut</b> the conduit square with a hacksaw or tube cutter; <b>deburr</b> both ends (inside and outside) with a reamer or file.<br>
3. <b>Bend</b> using a conduit bender (steel) or spring (PVC): mark the start of the bend, allow for the take-up, bend slightly past the angle and relax to the angle, check with a protractor or square. Common forms are the 90-degree bend (set), the <b>offset</b> (two equal bends to get round an obstacle), the <b>saddle</b> (to pass over a pipe) and the <b>kick</b>. Bends must be smooth, not flattened or kinked; keep the number of bends and the length of a run within the limits that let cables be drawn in.<br>
4. <b>Join</b> with couplers, tight and in line, so that steel conduit is mechanically and electrically continuous; PVC joints are fitted with solvent cement.<br>
5. <b>Fix</b> with saddles at the correct spacing (including each side of a bend and at boxes); fit spacer-bar saddles if the conduit is to stand off the wall.<br>
6. <b>Earth</b> steel conduit and boxes and check continuity with a low-resistance ohmmeter.<br>
7. Draw in the cables with a drawing-in tape after the conduit is complete; do not draw in over sharp edges; use cable lubricant if needed.</p>
<h3>Installing Trunking</h3>
<p>Cut to length and mitre corners neatly; fit internal and external angles, tees and stop ends; fix at the manufacturer's spacing; keep joints tight and in line; fit <b>dividers</b> where circuits of different bands share a trunking; fit grommets where cables enter; fit <b>fire barriers</b> where required; make <b>earth continuity</b> across joints for steel trunking using links or bonding; do not exceed the 45% space factor; fit the lids after installing and testing so cables are protected.</p>
<h3>Installing Cable Tray</h3>
<p>Measure and cut tray with a hacksaw or tray cutter, and deburr. Join sections with couplers. Make bends with tray fittings or by cutting and forming (following manufacturer rules). Fix with brackets or cantilever arms at the correct spacing. Lay cables flat and straight, secured with cable ties, clips or cleats at the right spacing; cables of different bands should be segregated.</p>
<h3>Installing Cables</h3>
<p><b>Flat twin and earth:</b> clip at the correct spacing with the proper clips for the diameter; keep cable runs straight, parallel and neat, with smooth bends of at least the minimum radius; do not cross cables unnecessarily; leave adequate length for connection; protect with grommets, conduit or capping where required; do not damage the sheath. <b>SWA:</b> support with cleats on tray or saddles; gland at each end. <b>Flexible cord:</b> use a cord grip at the accessory so the load is not on the terminals.</p>
${note('<b>Quality is judged by looking:</b> straight lines, even spacing, tight fixings, no damaged cable, nothing sharp left unprotected, and a tidy finish.')}`,
['swa'],
[
Q('PA','Before drilling into a wall you should…','check for hidden cables and pipes',['switch off the lights only','use the largest drill bit','remove your safety glasses']),
Q('PA','When cutting conduit, the end should be…','cut square and deburred inside and outside',['left rough','cut at an angle','painted']),
Q('PA','A set or bend in conduit should…','be smooth and not kinked or flattened',['be as sharp as possible','be flattened to save space','have a sharp corner']),
Q('PA','An offset in conduit is made with…','two equal bends to get round an obstruction',['one 90-degree bend','three bends in different planes','a coupling only']),
Q('PA','A saddle bend in conduit is used to…','pass over an obstruction such as a pipe',['join two conduits','make a 180-degree turn','terminate a cable']),
Q('PA','Cutting oil is used when…','threading steel conduit with a stock and die',['cutting PVC','bending PVC','fixing trunking']),
Q('PA','The correct tool to form a bend in PVC conduit is…','a bending spring (with care)',['a hammer','a hacksaw','a tin snips']),
Q('PA','The steel conduit system must be…','mechanically strong and electrically continuous and earthed',['isolated from earth','joined by tape','used only for lighting']),
Q('PA','A red wall plug is used for a hole of…','6 mm',['3 mm','12 mm','20 mm']),
Q('PA','Trunking lids are normally fitted…','after the cables are installed and tested',['before the trunking is fixed','only if the customer asks','never']),
Q('PA','Trunking dividers are fitted to…','keep circuits of different bands separated',['support the lid','increase the space factor','add earth']),
Q('PA','On a steel trunking run, earth continuity across joints is provided by…','links or bonding connections',['plastic washers','paint','tape']),
Q('PA','When setting out, a datum is…','a fixed starting line or point from which measurements are taken',['the last cable fitted','the finishing line','a type of tool']),
Q('PA','The most useful tool to check that a run is level is a…','spirit level',['hammer','scriber','stripper']),
Q('PA','The first thing to do before starting a practical assignment is to…','read the brief and drawing and complete the risk assessment',['start drilling','wire the board','test the circuit']),
Q('PA','A cable passing through a metal box edge should be protected by…','a grommet or bush',['a coat of paint','a knot','a bigger screw']),
Q('PA','Cable clips on flat PVC cable should be…','evenly spaced, tight and of the correct size',['placed randomly','omitted','pushed over the cable edge']),
Q('PA','Cable tray is cut with…','a hacksaw or tray cutter and the edges are deburred',['scissors','a hammer','your hands']),
Q('PA','At a cable tray, cables should be…','fixed securely at the correct spacing with ties, clips or cleats',['left loose','tied in a knot','covered with plaster']),
Q('PA','Cables entering a trunking from outside should have…','grommets or a bush to protect the insulation',['no protection','extra solder','only tape'])
],
[['List the steps for installing a conduit run from marking out to earthing.','Mark out; fix boxes; cut and deburr; bend; join with couplers; fix with saddles; earth the system and check continuity; draw in cables.'],
['Describe how to make an offset in conduit.','Mark the two bend positions; bend the first angle; bend the second angle in the opposite direction with the correct spacing; check that the conduit lies flat and parallel.'],
['Explain why trunking requires fire barriers and dividers.','Fire barriers stop fire and smoke spreading between compartments through the trunking; dividers separate circuits of different voltage bands.'],
['State what you would check before drilling into a wall.','Hidden cables, pipes or services; correct bit size, depth and dust control; PPE.'],
['Explain what is meant by setting out.','Marking on the wall or board the positions of boxes, containment and fixings before installation, using a datum, level and square.']]);

mod('cg204b','204·B Terminations, inspection, testing and the practical assignment','204',
`<p><b>City & Guilds 2365 Level 2, Unit 204 (continued).</b> This lesson covers cable terminations, labelling, inspection and testing, how to plan and carry out the assessed practical tasks, and the common reasons candidates lose marks. Check your assignment brief for the exact tasks and time limit.</p>
<h3>Stages of a Practical Assignment</h3>
<p>1. <b>Read the brief and drawing</b>; check materials and tools; identify the tasks and time limit.<br>
2. <b>Risk assessment and method statement</b> (RAMS); PPE; check the work area.<br>
3. <b>Plan the time</b>: aim to finish installation with time left for inspection, testing and tidy-up.<br>
4. <b>Set out</b> and mark the positions.<br>
5. <b>Install containment</b> (conduit, trunking, tray) and boxes.<br>
6. <b>Install cables</b> (draw in or lay in).<br>
7. <b>Terminate</b> neatly and correctly.<br>
8. <b>Identify and label</b> circuits and cables.<br>
9. <b>Inspect</b>, then <b>test</b> (dead tests first), then <b>functional test</b> if required.<br>
10. <b>Record</b> the test results.<br>
11. <b>Tidy up</b>, segregate waste, return tools.</p>
<h3>Terminating Cables</h3>
<p>For each termination:<br>
&bull; Strip the outer sheath to the length needed, taking care not to damage the cores.<br>
&bull; Strip each insulated core just enough so the bare copper fills the terminal and <b>no bare copper is visible</b> outside it. No insulation is trapped in the terminal.<br>
&bull; <b>Sleeve the bare CPC</b> in green-and-yellow sleeving and leave it long enough to reach the earth terminal.<br>
&bull; Place the conductor fully into the terminal, <b>tighten the screw</b> to the manufacturer's torque, and tug the conductor to check it is secure.<br>
&bull; <b>Stranded conductors:</b> make sure all strands are in the terminal; fit a ferrule or crimp where required.<br>
&bull; Use only one conductor per terminal unless the terminal is designed for two.<br>
&bull; Use a cord grip with flexible cord; support cables so the terminals carry no strain.<br>
&bull; Fit cable <b>glands</b> and <b>grommets</b> at entries.</p>
<p><b>Correct terminal positions:</b> <b>Socket outlet:</b> line to L, neutral to N, CPC to E. <b>Light switch:</b> line and switched line to the two terminals, CPC to the earth terminal where fitted. <b>Lampholder:</b> line to the centre contact of an Edison screw lampholder, neutral to the thread, CPC to the earth terminal. <b>Two-way switches:</b> live feed to COM of one switch, strappers L1 to L1 and L2 to L2, lamp wire to COM of the other. Brown, blue and green-and-yellow in the correct positions and any re-identified cores sleeved.</p>
<h3>SWA Gland Termination (Typical Method)</h3>
<p>1. Strip the outer sheath back to expose the armour, allowing for the gland body. 2. Slide on the gland shroud (if fitted), the locknut and the gland body parts in order. 3. Bend the armour wires back over the cone. 4. Tighten the gland so the armour is clamped between the cone and the gland body (this provides earth continuity). 5. Fit the shroud. 6. Strip the cores and terminate; fit an earth tail from the gland to the earth terminal using a lug and tag. 7. Fit the gland to the enclosure with a locknut and washer; use a banjo or earthing ring if a plastic enclosure is used.</p>
<h3>Labelling and Identification</h3>
<p>Label distribution boards and circuits; use cable markers or ferrules; identify re-purposed cores with brown sleeving; fit warning labels where needed (such as "Safety Electrical Connection" at earth clamps and a notice about mixed cable colours).</p>
<h3>Inspection</h3>
<p>Before testing inspect the installation: correct type and size of cable for the circuit; cables correctly supported and routed (safe zones); correct protective devices; connections tight, with no damage to insulation or bare copper showing; conductors identified; earth connections made; containment fitted properly and lids on; no sharp edges; labelling; no damage to equipment.</p>
<h3>Testing: The Order Matters</h3>
<p>Isolate and prove dead (and keep your lock on) before connecting any test instrument to a circuit. Use calibrated instruments; prove leads and instruments are working. The <b>dead tests</b> are carried out first, in this sequence:</p>
<p>1. <b>Continuity of protective conductors (R1 + R2):</b> measure from the origin to the end of each circuit with a low-resistance ohmmeter. Record the value, which should match the expected resistance of the cables.<br>
2. <b>Ring final circuit continuity</b> (if one is installed): measure the end-to-end resistances of line (r1), neutral (rn) and CPC (r2); cross-connect and measure at each socket (readings should be nearly equal around the ring). For 2.5 mm² cable with a 1.5 mm² CPC, r2 is about 1.67 times r1.<br>
3. <b>Insulation resistance:</b> with the circuit isolated, lamps removed and sensitive equipment disconnected, apply <b>500 V DC</b> between line and neutral together and earth, and between line and neutral. The reading must be <b>at least 1 MΩ</b> (and anything below about 2 MΩ should be investigated). For SELV and PELV circuits use 250 V and at least 0.5 MΩ.<br>
4. <b>Polarity:</b> check that switches and single-pole protective devices are in the line conductor, that Edison screw lampholders are wired correctly, and that sockets are correct.<br>
Then (if the assignment and safety permit) <b>live tests</b>: confirm the supply polarity, measure the earth fault loop impedance Zs, test any RCD, and carry out a functional test of switches and circuit controls.</p>
<h3>Common Reasons for Losing Marks</h3>
<p>&bull; Not isolating, proving dead or following safe working rules.<br>
&bull; Uneven or loose cable clips, crossed or untidy cables, damaged sheath or insulation.<br>
&bull; Bare CPCs not sleeved; copper showing at terminals; insulation trapped in terminals; wrong colour in a terminal; loose terminals.<br>
&bull; Conduit not deburred, bends kinked, joints loose, saddles missing or too far apart.<br>
&bull; Trunking lids not fitted, gaps at mitres, no dividers or barriers where required.<br>
&bull; Accessories not level or aligned; fixings missing.<br>
&bull; Wrong cable size or type; wrong protective device; poor labelling.<br>
&bull; Test results missing, wrong or altered without explanation.<br>
&bull; Working beyond the time limit; leaving the work area untidy.</p>
${note('<b>Final check:</b> read the brief again. Compare the installation with the drawing. Look at it as the assessor will: from the front, level, straight, tidy and safe.')}`,
['twoway','plan'],
[
Q('PA','The first dead test normally carried out on a circuit is…','continuity of protective conductors (R1 + R2)',['RCD operating time','insulation resistance of the supply','Zs with the supply on']),
Q('PA','Insulation resistance on a 230 V circuit is tested with…','500 V DC',['12 V AC','50 V AC','5,000 V DC']),
Q('PA','The minimum acceptable insulation resistance for an LV circuit is…','1 MΩ',['10 Ω','100 Ω','1 kΩ']),
Q('PA','Before an insulation resistance test the lamps should be…','removed and sensitive equipment disconnected',['left in place','replaced with brighter lamps','wrapped in tape']),
Q('PA','The bare CPC of flat twin and earth must be…','sleeved green-and-yellow at the terminations',['left bare','sleeved red','cut short']),
Q('PA','When making a termination, the correct amount of insulation is stripped so that…','no bare copper is visible outside the terminal and no insulation is trapped inside',['plenty of bare copper shows','insulation is clamped under the screw','the conductor is cut short']),
Q('PA','In an Edison screw lampholder, the line conductor connects to…','the centre contact',['the screw thread','the earth terminal','either terminal']),
Q('PA','In a socket outlet the line conductor connects to the terminal marked…','L',['N','E','S']),
Q('PA','A cord grip on a flexible cord is used to…','remove strain from the terminals',['earth the cord','insulate the cord','identify the circuit']),
Q('PA','An SWA gland provides earth continuity by…','clamping the armour wires between the cone and gland body',['painting the armour','using only the sheath','using plastic only']),
Q('PA','A circuit is tested for polarity to check that…','switches and protective devices are in the line conductor and connections are correct',['the circuit has the right colour cable','the lamp is bright','the cable is long enough']),
Q('PA','In the ring final circuit test, r2 for 2.5/1.5 mm² cable is about… times r1.','1.67',['0.5','5','10']),
Q('PA','During testing of the circuit you should keep your own lock on the isolator because…','it prevents anyone energising the circuit while you test',['it improves test readings','it is a legal requirement for fuses only','it keeps the instrument warm']),
Q('PA','The last step of a practical assignment should be…','tidy up and segregate waste after the final checks',['start another task','leave the tools on the floor','remove the labels'])
],
[['List in order the dead tests carried out on a new circuit.','Continuity of protective conductors (R1 + R2), ring final continuity (if a ring), insulation resistance, polarity.'],
['Explain how to terminate a flat twin and earth cable in a socket outlet.','Strip the sheath; strip the cores; sleeve the bare CPC in green-and-yellow; place the brown in L, blue in N, CPC in E; tighten to torque; check there is no bare copper showing; fix the cable in the box.'],
['Describe how to terminate an SWA cable with a gland.','Strip the sheath; slide on the gland parts; bend the armour back over the cone; clamp and tighten; fit the shroud; terminate the cores; fit an earth tail from the gland to the earth terminal.'],
['List six common reasons for losing marks in a practical assignment.','Not isolating or proving dead, loose or untidy cables, copper showing, bare CPC not sleeved, kinked or undeburred conduit, missing labels or test results.'],
['State the insulation resistance test voltage and minimum acceptable value for a 230 V circuit.','500 V DC and at least 1 MΩ.']]);

mod('cg210','210 Communicating with others in building services engineering','210',
`<p><b>City & Guilds 2365 Level 2, Unit 210.</b> This unit is assessed by a short online test (20 questions in 40 minutes, closed book). It is about working in a team on a construction project, finding the right information, and communicating clearly and safely. The learning outcomes are the construction team, information sources, and communicating with others.</p>
<h3>LO1: The Construction Team</h3>
<p>A construction project involves many people, each with a role. Building services (electrical, plumbing, heating, ventilation, air conditioning) work alongside the building trades.</p>
${tbl(['Role','Main responsibility'],[
['Client','Pays for and owns the project; sets the requirements and budget'],
['Architect','Designs the building and its appearance; produces drawings and specifications for the building'],
['Structural engineer','Designs the structure so it is safe and stable'],
['Building services (M&E) consulting engineer','Designs the mechanical and electrical services; specifies equipment and systems'],
['Quantity surveyor','Measures work, prepares the bill of quantities, manages costs and valuations'],
['Project manager','Plans, co-ordinates and controls time, cost and quality'],
['Main contractor','Takes overall responsibility for building the project; appoints and manages subcontractors'],
['Site manager or agent','Runs the site day to day; manages programme, safety and the trades'],
['Subcontractor (for example the electrical contractor)','Carries out a defined part of the work for the main contractor'],
['Electrician (installer)','Installs, tests and commissions electrical systems to the drawings, specification and regulations'],
['Apprentice or trainee','Learns the trade under supervision'],
['Building control and inspectors','Check compliance with the Building Regulations and standards'],
['Health and safety adviser; principal designer; principal contractor','Plan and monitor safety under CDM 2015'],
['Suppliers and merchants','Provide materials and equipment'],
['Distribution network operator (DNO)','Provides and connects the electrical supply']])}
<p><b>Working in a team.</b> Co-ordination avoids clashes: electricians need to agree access and timing with other trades, such as first fix (before plastering) and second fix (after). Report delays, changes and problems to your supervisor early. Be reliable, punctual, polite and tidy, respect other trades and the customer's property, and follow the site rules. Everyone is entitled to fair treatment under equality law, and discrimination or harassment is not acceptable.</p>
<h3>LO2: Information Sources</h3>
<p><b>Drawings:</b> layout, location, assembly, detail, wiring and circuit drawings; the <b>key</b>, <b>scale</b>, <b>revision</b> and date matter. <b>Specification:</b> standards for materials and work. <b>Schedules and bill of quantities.</b> <b>Programme:</b> the order and timing of work (often a bar chart). <b>Health and safety documents:</b> risk assessments, method statements, the construction phase plan. <b>Technical information:</b> manufacturers' data and installation instructions, BS 7671 and guidance (On-Site Guide), trade association information. <b>Commercial documents:</b> purchase order, delivery note (check quantities and condition on delivery), invoice, timesheet, daywork sheet, variation order (a written instruction that changes the work or the cost). <b>Completion documents:</b> certificates, test results, as-fitted drawings, O&M manuals.<br>
Check that information is the <b>latest version</b>, that it comes from a reliable source, and that you understand it. Ask if anything is unclear or conflicts.</p>
<h3>LO3: Communicating with Others</h3>
<p><b>Methods:</b> <b>verbal</b> (face to face, phone, radio, toolbox talks and meetings); <b>written</b> (emails, letters, job sheets, reports, notes); <b>graphical</b> (sketches, drawings, diagrams); <b>electronic</b> (text messages, messaging apps and project software); <b>non-verbal</b> (body language and tone of voice).<br>
<b>Good communication</b> is clear, short, accurate, polite and suited to the audience. Use correct trade terms with colleagues and plain language with customers. <b>Active listening:</b> pay attention, do not interrupt, ask questions and repeat key points to confirm you understood. <b>Barriers:</b> noise, distance, jargon, language differences, assumptions, distractions, stress and poor handwriting. Overcome them by choosing the right place and method, speaking clearly, writing things down and confirming.<br>
<b>On site:</b> report hazards and accidents at once; follow instructions given in toolbox talks and inductions; record work and materials on job sheets; confirm verbal instructions in writing if they change cost or time; keep records for handover.<br>
<b>Customers:</b> be polite, dress and behave professionally, explain what you will do and the likely mess or disruption, listen to their requirements, give honest advice, keep promises and keep the work area clean and safe. Handle complaints calmly, listen, apologise where appropriate, record them and pass them to your supervisor. Respect confidentiality and customer data.<br>
<b>Telephone and email:</b> identify yourself; speak clearly; note messages with date, time, name and number; write clear subject lines and brief messages; check spelling and attachments before sending.</p>
${note('<b>Test tip:</b> in Unit 210 questions, the best answer is usually the one that is safe, polite, clear and confirms understanding.')}`,
[],
[
Q('LO1','Who is responsible for the overall design of the building and its appearance?','Architect',['Client','Electrician','Quantity surveyor']),
Q('LO1','Who pays for and owns the project?','Client',['Architect','Main contractor','Site manager']),
Q('LO1','Which member of the construction team prepares the bill of quantities and manages costs?','Quantity surveyor',['Structural engineer','Electrician','Site manager']),
Q('LO1','The main contractor is responsible for…','overall delivery of the project and managing subcontractors',['designing the building','paying all the suppliers only','collecting electricity meters']),
Q('LO1','An electrical contractor working for a main contractor is a…','subcontractor',['client','architect','building inspector']),
Q('LO1','Who designs the mechanical and electrical services of a large building?','Building services (M&E) consulting engineer',['Architect','Quantity surveyor','Site agent']),
Q('LO1','Who runs the site day to day, including the programme and site safety?','Site manager',['Client','Architect','Supplier']),
Q('LO1','The distribution network operator (DNO) is responsible for…','providing and connecting the electrical supply',['installing the lighting','designing the building','inspecting plastering']),
Q('LO1','Good teamwork on site includes…','co-ordinating access and timing with other trades',['working in secret','blocking access for others','ignoring site rules']),
Q('LO1','First fix work is done…','before plastering and finishes',['after the building is complete','after decoration','only by the client']),
Q('LO1','Discrimination and harassment on site are…','unacceptable and against the law',['acceptable if joking','tolerated if the job is urgent','a matter of opinion']),
Q('LO2','The key (legend) on a drawing explains…','the symbols and abbreviations used',['the price','the programme','the names of workers']),
Q('LO2','A specification gives…','the standard and quality of materials and work',['the weather forecast','the site telephone numbers','the delivery driver']),
Q('LO2','A programme shows…','the order and timing of work',['the quality of the cables','the price of equipment','the staff holidays']),
Q('LO2','A delivery note should be checked for…','quantity and condition of goods on delivery',['the colour of the vehicle','the driver\'s name only','the weather']),
Q('LO2','A variation order is…','a written instruction that changes the scope, time or cost of the work',['a delivery note','a safety sign','a wage slip']),
Q('LO2','A timesheet is used to record…','hours worked',['materials in stock','weather conditions','drawing scales']),
Q('LO2','Manufacturers\' installation instructions provide…','details of how to fit, wire and use the product',['the site programme','the client\'s name','the tax rate']),
Q('LO2','Before using a drawing you should check…','that it is the latest revision',['that it is the oldest copy','that no one else has seen it','that it is folded']),
Q('LO2','As-fitted drawings show…','the installation as completed',['the first design idea','the cost plan','the staff plan']),
Q('LO2','A bill of quantities lists…','the items and quantities of work and materials',['the staff addresses','the safety signs','the weather']),
Q('LO2','Information about the safe way to carry out a task is found in the…','risk assessment and method statement',['delivery note','invoice','timesheet']),
Q('LO2','If two drawings disagree you should…','ask your supervisor or the designer before continuing',['guess which is right','ignore both','follow the cheaper one']),
Q('LO3','Which is an example of verbal communication?','A toolbox talk',['An email','A drawing','A job sheet']),
Q('LO3','Which is an example of written communication?','An email or job sheet',['A phone call','A toolbox talk','Body language']),
Q('LO3','Active listening involves…','paying attention, asking questions and confirming understanding',['interrupting often','looking at your phone','talking only']),
Q('LO3','A barrier to communication is…','noise or jargon',['clear speech','good lighting','a written note']),
Q('LO3','When taking a telephone message you should note…','the date, time, caller\'s name, number and message',['only the weather','only the first name','nothing']),
Q('LO3','If you are given a verbal instruction that changes the cost, you should…','confirm it in writing',['ignore it','assume it is correct','tell a colleague only']),
Q('LO3','When dealing with a customer complaint you should…','listen calmly, record it and pass it to your supervisor',['argue with the customer','ignore the complaint','walk off the site']),
Q('LO3','Body language is a form of…','non-verbal communication',['written communication','electronic communication','drawing']),
Q('LO3','A hazard found on site should be…','reported immediately',['kept secret','left for someone else','reported next month']),
Q('LO3','With customers you should use…','plain language and avoid unexplained jargon',['only technical jargon','slang','whispers']),
Q('LO3','An email to a colleague should have…','a clear subject line and a brief, polite message',['no subject and a long rambling message','all capital letters','no greeting or name']),
Q('LO3','Good communication on site helps to…','prevent mistakes and accidents',['hide errors','increase costs','delay the job'])
],
[['List five members of a construction team and state the role of each.','Client (pays and owns), architect (designs the building), M&E engineer (designs services), main contractor (builds), electrician (installs and tests the electrical system), quantity surveyor (costs).'],
['Explain what a variation order is and why it matters.','It is a written instruction that changes the work, time or cost. It provides a record and is the basis for payment.'],
['Describe two barriers to communication on a noisy site and how to overcome them.','Noise: move to a quieter place or use clear hand signals; jargon: use plain language and confirm understanding by repeating back.'],
['State what to check when goods are delivered to site.','Check quantity, type, condition and the delivery note against the order, and report shortages or damage straight away.'],
['Describe how to handle a complaint from a customer.','Listen without interrupting, stay calm and polite, record the details, apologise where appropriate and pass it to your supervisor.']]);

Z.mods.find(m=>m.id==='cg210').q.push(
Q('LO1','Which person checks on behalf of the client that the work is built to the required quality?','The clerk of works (or client inspector)',['The supplier','The apprentice','The delivery driver']),
Q('LO1','Under CDM 2015 the principal contractor is mainly responsible for…','planning, managing and co-ordinating the construction phase and its health and safety',['designing the electrical system','paying the client','selling materials']),
Q('LO1','Building control officers visit a site to…','check that the work complies with the Building Regulations',['order materials','supervise the apprentices','set the wages']),
Q('LO1','An apprentice on site should…','work under supervision and ask when unsure',['work alone on live systems','ignore instructions','take over the supervisor role']),
Q('LO2','A purchase order is…','a document sent to a supplier to order goods',['a delivery note','a timesheet','a safety sign']),
Q('LO2','A cable schedule lists…','the cable types, sizes, lengths and routes for the circuits',['the staff addresses','the delivery times','the site hours only']),
Q('LO2','The revision letter on a drawing tells you…','which version of the drawing it is',['who bought it','the weather on the day','the cost of the job']),
Q('LO2','A daywork sheet is used to record…','extra work done on a time-and-materials basis',['the weather','the safety rules','the programme only']),
Q('LO2','A site plan shows…','the position of the building and services on the site',['the wiring of one socket','a circuit diagram','the safety signs']),
Q('LO2','Which document gives the order and timing of tasks and is often a bar chart?','The programme',['The delivery note','The invoice','The specification']),
Q('LO2','Where would you find how a particular consumer unit must be wired?','In the manufacturer installation instructions',['On the delivery note','In the timesheet','On the invoice']),
Q('LO2','The abbreviation O&M manual stands for…','operation and maintenance manual',['order and material list','owner and manager','outside and main']),
Q('LO3','Which is an example of graphical communication?','A sketch or drawing',['A phone call','A toolbox talk','A handshake']),
Q('LO3','Repeating an instruction back to the person who gave it shows…','that you have understood it',['that you disagree','that you have forgotten it','nothing']),
Q('LO3','A toolbox talk is…','a short briefing on a safety topic given on site',['a type of drawer','an invoice','a lesson in Maths only']),
Q('LO3','At handover the customer should be given…','certificates, test results and an explanation of how to use the installation',['nothing','only the invoice','only the keys'])
);

/* ---------- Practical job sheets (Unit 204 style) with instructor sign-off ---------- */
const J=(t,tools,steps)=>({t,tools,steps});
Y.jobs.push(
J('C&G 204: Steel conduit and trunking circuit with a switched light and a socket','Steel conduit, bender, stock and die, hacksaw, reamer, trunking, singles, accessories, spirit level, voltage indicator, ohmmeter, insulation tester',[
'Read the drawing and brief, complete the risk assessment and method statement, and put on PPE',
'Set out the datum and mark the positions of boxes, conduit runs, saddles and trunking',
'Fix the accessory boxes and distribution point level and plumb',
'Cut, deburr, bend (including an offset) and fix the steel conduit with saddles at correct spacing',
'Fit the trunking with mitred joints, dividers where required, and earth continuity links',
'Draw in the single-core cables in the correct colours; sleeve the CPC green-and-yellow',
'Terminate at the accessories: no bare copper showing and terminals tight; fit labels',
'Isolate, prove dead and lock off; test R1 + R2, insulation resistance (500 V, at least 1 MΩ) and polarity; record the results',
'Fit trunking lids, tidy up and segregate waste; ask the instructor to inspect']),
J('C&G 204: SWA cable with cable tray to a distribution enclosure','SWA cable, glands, shroud, cable tray, brackets, cable ties, spanners, side cutters, armour cutters, ohmmeter',[
'Read the brief and drawing and complete the risk assessment',
'Set out and fix the cable tray brackets at correct spacing, level and in line',
'Cut and deburr the tray; join with couplers; fit bends',
'Cut the SWA to length and lay it on the tray, secured with ties or cleats at the correct spacing',
'Terminate the SWA with glands at both ends: clamp the armour on the cone, fit the shroud and earth tail',
'Terminate the cores in the enclosure with the correct colours and terminal torque',
'Isolate, prove dead and lock off; test continuity of the armour/CPC and insulation resistance; record',
'Tidy the work area and ask the instructor to sign off']),
J('C&G 204: Flat twin and earth lighting circuit with two-way switching','Flat twin and earth, three-core and earth, clips, accessories, ceiling roses, lamp, strippers, ohmmeter, insulation tester',[
'Read the drawing; set out the positions of both switches, the ceiling rose and the lamp',
'Fix the accessory boxes level and clip the cables neatly, straight and evenly spaced',
'Label COM, L1 and L2 on each two-way switch and plan the strapper connections',
'Connect the live feed to COM of switch A, strappers L1 to L1 and L2 to L2, COM of switch B to the lamp',
'Connect the neutral and CPC to the lampholder; sleeve the CPC and re-identify any blue switch wire with brown sleeving',
'Isolate, prove dead and lock off; test R1 + R2, insulation resistance and polarity; record the results',
'Energise only as instructed and check the lamp is controlled from both switches (functional test)',
'Tidy up and ask the instructor to inspect']),
J('C&G 204: Ring final circuit with sockets and a fused connection unit','Flat twin and earth, sockets, FCU, consumer unit or enclosure, strippers, ohmmeter, insulation tester',[
'Read the drawing and brief; complete the risk assessment',
'Fix the accessory boxes and the enclosure; clip the cable runs straight and tidy',
'Install the ring: both ends return to the same protective device; terminate the sockets L, N and E',
'Connect the FCU and its fuse; sleeve CPCs and terminate neatly',
'Isolate, prove dead and lock off; measure end-to-end r1, rn and r2 at the origin and record',
'Cross-connect and measure at each socket to prove the ring (readings nearly equal); measure R1 + R2 at the sockets',
'Test insulation resistance (500 V, at least 1 MΩ) and polarity; record all results',
'Label the circuit, tidy up and ask the instructor to sign off'])
);
})();
