(function(){
// City & Guilds 2365 Level 2, Unit 203 (part 1): regulations, technical information, cables and containment.
const {Q,tbl,mod,note}=CGH;

mod('cg203a','203·A Industry regulations and technical information','203',
`<p><b>City & Guilds 2365 Level 2, Unit 203, LO1 and LO2.</b> The 203 test is <b>open book</b>: you may use the IET On-Site Guide. This lesson explains which regulations apply and how to find information in drawings, specifications and reference books. Learn to find things quickly: know which part and which table you need.</p>
<h3>LO1: Electrical Industry Regulations</h3>
<h3>Statutory Regulations and Standards</h3>
${tbl(['Document','Status and purpose'],[
['Health and Safety at Work etc. Act 1974','Law. Duties of employers, employees and the self-employed.'],
['Electricity at Work Regulations 1989 (EAWR)','Law. Electrical systems must be safe; work on or near live conductors only when justified; people must be competent.'],
['Electricity Safety, Quality and Continuity Regulations 2002 (ESQCR)','Law. Covers the supply network operators: safe and reliable supply, supply voltage 230 V +10% to -6%, 50 Hz, and protection of the public.'],
['Building Regulations (for example Approved Document P, electrical safety in dwellings in England)','Law. Electrical installation work in dwellings must be designed, installed, inspected and tested to meet BS 7671. Some work is <b>notifiable</b> to building control or must be done by a registered competent person (for example a new circuit or consumer unit replacement). Part L covers conservation of fuel and power.'],
['BS 7671 Requirements for Electrical Installations (IET Wiring Regulations)','A British Standard (not law itself). The national standard for electrical installation design, erection and verification. Compliance with it is normally accepted as meeting the EAWR.'],
['IET On-Site Guide and Guidance Notes','Non-statutory guides that explain how to apply BS 7671. The On-Site Guide gives practical tables (cable ratings, voltage drop, circuit types, maximum Zs, and test procedures).'],
['HSE guidance (GS 38 for test equipment; HSR 25 memorandum of guidance on the EAWR)','Guidance that explains how to meet the law.']])}
<h3>The Structure of BS 7671</h3>
<p><b>Part 1</b> Scope, object and fundamental principles; <b>Part 2</b> Definitions; <b>Part 3</b> Assessment of general characteristics (supply, circuits, external influences); <b>Part 4</b> Protection for safety (electric shock, thermal effects, overcurrent, overvoltage); <b>Part 5</b> Selection and erection of equipment (wiring systems, isolation, earthing); <b>Part 6</b> Inspection and testing; <b>Part 7</b> Special installations or locations (bathrooms, swimming pools, construction sites, solar PV, EV charging). <b>Appendices</b> give tables and forms, for example Appendix 3 (time-current curves of protective devices), Appendix 4 (current-carrying capacity and voltage drop of cables), Appendix 6 (model certificates and report forms) and Appendix 7 (harmonised cable colours).<br>
Regulation numbers read Part, Chapter, Section, Regulation: for example 411.3.2 means Part 4, Chapter 41, Section 411, sub-regulation 3.2. The standard is amended from time to time; always use the current edition and amendment that your assessment is based on.</p>
<h3>Certification and Competence</h3>
<p>After new work the installer (with the designer and inspector) completes an <b>Electrical Installation Certificate (EIC)</b> with a schedule of inspections and a schedule of test results. For additions or alterations that do <b>not</b> include a new circuit, a <b>Minor Electrical Installation Works Certificate</b> is used. For checking the condition of an existing installation, an <b>Electrical Installation Condition Report (EICR)</b> is issued, with observations coded by urgency. A <b>competent person scheme</b> (such as those run by NICEIC, NAPIT or Certsure) allows registered electricians to self-certify notifiable work and issue a Building Regulations compliance certificate (normally within 30 days). <b>Competence</b> means having the knowledge, skill, experience and training to do the work safely.</p>
<h3>LO2: Obtaining Technical Information</h3>
<h3>Types of Drawing</h3>
${tbl(['Drawing','Shows'],[
['Layout (installation) drawing','Where equipment, accessories, cable routes and containment go in the building, drawn to scale'],
['Circuit diagram','How the circuit works, in symbol form, in logical order, not physical layout'],
['Wiring diagram','The connections between terminals and cores as they will be wired'],
['Block diagram','Parts of a system and how they relate, using simple blocks'],
['Site plan','Position of the building and services on the site'],
['As-fitted (record) drawings','The installation as actually completed, including changes made during the work']])}
<p><b>Symbols</b> follow <b>BS EN 60617</b> (older drawings may use BS 3939). Always check the <b>key (legend)</b>, scale, revision number and date, and use the latest revision. <b>Scale:</b> real length = measured length × scale factor. On a 1:50 drawing a 40 mm line is 40 × 50 = 2,000 mm = 2 m; on a 1:100 drawing, a 6 m wall measures 60 mm. Use a scale rule, and do not scale from a photocopy that may have been enlarged or reduced.</p>
<h3>Other Information Sources</h3>
<p><b>Specification:</b> describes the quality and standard of materials and workmanship, and the regulations to follow. <b>Bill of quantities (BoQ) or schedule:</b> lists items and quantities. <b>Schedules:</b> circuit schedules and cable schedules. <b>Manufacturers' data sheets and installation instructions:</b> give ratings, dimensions, fixing details and wiring. <b>Programme:</b> shows the order and timing of work. <b>Method statements and risk assessments:</b> safe working. <b>Test and commissioning records.</b> <b>Operation and maintenance (O&M) manuals</b> for the client.</p>
<h3>Using the IET On-Site Guide</h3>
<p>The On-Site Guide is a practical summary of BS 7671 for common installations. It contains: guidance on circuit design; <b>tables of cable current-carrying capacity and voltage drop</b> (Appendix 4 material); maximum earth fault loop impedance (Zs) for protective devices; correction factors for ambient temperature, grouping and thermal insulation; typical circuit arrangements (ring finals, radials, lighting, cooker, shower); information on conduit, trunking and clip spacing; and inspection and testing procedures. In an open-book test: find the contents page, find the right table name and conditions (reference method, number of cores, cable type), read down the correct column, and always check the units.</p>
<h3>Terms and Symbols You Must Know</h3>
${tbl(['Symbol','Meaning'],[
['Ib','Design current of the circuit (the current the load will draw)'],
['In','Nominal current (rating) of the protective device'],
['Iz','Current-carrying capacity of the cable in the installed conditions'],
['It','Tabulated current-carrying capacity of the cable before correction factors'],
['Ca, Cg, Ci, Cc','Correction factors: ambient temperature, grouping, thermal insulation, and BS 3036 semi-enclosed fuse'],
['Ze','Earth fault loop impedance of the part of the supply external to the installation'],
['Zs','Total earth fault loop impedance, Zs = Ze + (R1 + R2)'],
['R1 + R2','Resistance of the line conductor plus the circuit protective conductor of the circuit'],
['PFC (prospective fault current)','The highest current that would flow if a fault of negligible impedance occurred at that point'],
['CPC','Circuit protective conductor (earth wire in a circuit)'],
['MET','Main earthing terminal'],
['ADS','Automatic disconnection of supply'],
['SELV / PELV','Separated or protected extra-low voltage (not exceeding 50 V AC or 120 V ripple-free DC)'],
['RCD / RCBO','Residual current device / RCD with overcurrent protection in one unit'],
['IP code','Ingress protection: first digit solids, second digit water (IPXXB means finger-safe)'],
['Class I / II / III equipment','Class I: basic insulation and earth; Class II: double or reinforced insulation (square within a square symbol); Class III: supplied at SELV']])}
${note('<b>Exam tip (open book):</b> do not search for the answer to a question you have not understood. First work out what is being asked: which circuit, which cable type, which installation method, which table.')}`,
[],
[
Q('LO1','Which regulations place duties on all electrical work to ensure safety and require competent people?','Electricity at Work Regulations 1989',['BS 7671 only','Building Regulations Part L','The Highways Act']),
Q('LO1','BS 7671 is published by…','the Institution of Engineering and Technology (IET) and BSI',['City & Guilds','The HSE','The Electrical Contractors Association']),
Q('LO1','BS 7671 is…','a British Standard that is not law in itself',['an Act of Parliament','a prohibition notice','an EU regulation']),
Q('LO1','Part 6 of BS 7671 deals with…','inspection and testing',['definitions','special locations','protection for safety']),
Q('LO1','Part 7 of BS 7671 deals with…','special installations or locations',['definitions','selection of wiring systems only','scope']),
Q('LO1','Part 4 of BS 7671 deals with…','protection for safety (shock, thermal effects, overcurrent)',['inspection and testing','definitions','cable colours']),
Q('LO1','Approved Document P of the Building Regulations covers…','electrical safety in dwellings',['conservation of fuel and power','fire safety','access for disabled people']),
Q('LO1','An Electrical Installation Certificate is issued for…','new installations or alterations that include new circuits',['periodic inspection reports only','repairs to a plug','lamp replacement']),
Q('LO1','A Minor Electrical Installation Works Certificate is used for…','additions or alterations that do not include a new circuit',['a new installation','periodic inspection','a full rewire']),
Q('LO1','An Electrical Installation Condition Report (EICR) is issued after…','periodic inspection of an existing installation',['installing a new circuit','replacing a lamp','buying a house']),
Q('LO1','A competent person scheme allows registered installers to…','self-certify notifiable electrical work',['ignore BS 7671','work without insurance','exempt work from testing']),
Q('LO1','The declared UK supply voltage tolerance is…','230 V +10% and -6%',['230 V ±1%','230 V ±20%','240 V ±0%']),
Q('LO1','The Electricity Safety, Quality and Continuity Regulations apply mainly to…','electricity network operators and suppliers',['domestic customers only','car manufacturers','telephone engineers']),
Q('LO2','A drawing showing the positions of luminaires, switches and sockets on a floor plan is a…','layout (installation) drawing',['circuit diagram','block diagram','wiring diagram']),
Q('LO2','A drawing showing how a circuit works in symbol form is a…','circuit diagram',['layout drawing','site plan','as-fitted drawing']),
Q('LO2','A drawing showing connections between terminals as they will be wired is a…','wiring diagram',['block diagram','layout drawing','circuit board']),
Q('LO2','Symbols for electrical drawings follow…','BS EN 60617',['BS 5499 only','BS 1363','GS 38']),
Q('LO2','On a 1:50 scale drawing, a 40 mm line represents…','2 m',['0.8 m','20 m','200 m']),
Q('LO2','On a 1:100 drawing, a wall 6 m long measures…','60 mm',['6 mm','600 mm','6 m']),
Q('LO2','A specification describes…','the standard of materials and workmanship required',['only the price','only the timescale','only the names of the workers']),
Q('LO2','A bill of quantities lists…','items and quantities required for the work',['only labour costs','only drawings','only certificates']),
Q('LO2','As-fitted drawings show…','the installation as actually completed',['the original idea only','the cost estimate','the site rules']),
Q('LO2','In BS 7671 terminology, Ib means…','design current of the circuit',['nominal current of the protective device','cable current-carrying capacity','earth fault current']),
Q('LO2','In BS 7671 terminology, In means…','nominal current (rating) of the protective device',['design current','tabulated current','correction factor']),
Q('LO2','In BS 7671 terminology, Iz means…','current-carrying capacity of the cable in the installed conditions',['earth fault current','design current','fuse rating']),
Q('LO2','Zs is…','the total earth fault loop impedance',['external loop impedance only','insulation resistance','supply voltage']),
Q('LO2','Ze is…','the external earth fault loop impedance of the supply',['the total loop impedance','the cable resistance','the circuit protective conductor']),
Q('LO2','R1 + R2 is…','line conductor resistance plus circuit protective conductor resistance',['insulation resistance','earth electrode resistance','supply resistance']),
Q('LO2','Ca is the correction factor for…','ambient temperature',['grouping','thermal insulation','voltage drop']),
Q('LO2','The "IP" in an IP rating stands for…','ingress protection',['insulation protection','installed power','isolated phase']),
Q('LO2','The symbol of a square inside a square on an appliance indicates…','Class II (double insulated) equipment',['Class I equipment','Class III equipment','waterproof equipment']),
Q('LO2','Prospective fault current is…','the highest current that would flow in a fault of negligible impedance at that point',['the normal load current','the leakage current','the earth electrode current'])
],
[['List three types of drawing used in electrical installation work and state what each shows.','Layout drawing: positions and routes; circuit diagram: how the circuit works; wiring diagram: terminal connections; block diagram: system relationships; as-fitted drawing: the final installation.'],
['Explain the difference between an Electrical Installation Certificate and an Electrical Installation Condition Report.','The EIC is for new work or alterations with a new circuit. The EICR is a report on the condition of an existing installation, coded by urgency.'],
['State what Ib, In and Iz mean and give the relationship between them.','Ib is the design current, In is the rating of the protective device, and Iz is the cable current-carrying capacity. Ib ≤ In ≤ Iz.'],
['Scale a 52 mm line on a 1:50 drawing and a 3.5 m wall onto a 1:100 drawing.','52 × 50 = 2,600 mm = 2.6 m; 3,500 ÷ 100 = 35 mm.'],
['Explain how you would use the IET On-Site Guide to find the current rating of a cable.','Find the correct cable type and installation (reference method) table, read the current rating for the cable size and number of loaded conductors, then apply the correction factors for ambient temperature, grouping and thermal insulation.']]);

mod('cg203b','203·B Cables, containment and lighting circuits','203',
`<p><b>City & Guilds 2365 Level 2, Unit 203, LO3 (part 1).</b> This lesson covers cable types and construction, colours, termination, support, wiring systems and containment, and the wiring of lighting circuits. Wiring systems carry 15 of the 40 questions in the test, so work through this and the next lesson carefully.</p>
<h3>Cable Construction</h3>
<p>A cable has <b>conductors</b> (copper or, for large cables, aluminium), <b>insulation</b> around each conductor, and usually an <b>outer sheath</b>. Some have <b>armour</b> (steel wire) or a <b>screen</b>. Conductors may be solid (rigid cables up to about 6 mm²) or <b>stranded</b> (more flexible; flexible cords use many fine strands). Standard sizes (mm²) are 1.0, 1.5, 2.5, 4, 6, 10, 16 and larger.</p>
${tbl(['Cable','Construction and use','Max conductor temp'],[
['PVC insulated and sheathed flat twin and earth (6242Y)','Domestic and commercial lighting, sockets, clipped or in walls. The bare CPC must be sleeved green-and-yellow at terminations.','70 C'],
['PVC single-core (6491X)','Drawn into conduit and trunking; colour-coded cores.','70 C'],
['Flexible cord and cable','Fine strands, PVC or rubber; for portable appliances, pendants and connections to equipment. Not for fixed wiring.','60 to 70 C (higher for heat-resistant types)'],
['Steel wire armoured (SWA)','XLPE or PVC insulated, bedded, galvanised steel wire armour, PVC sheath. Buried, outdoors, submains, areas at risk of mechanical damage. The armour can serve as the CPC (check its size).','90 C (XLPE) or 70 C (PVC)'],
['Mineral insulated (MI or MICC)','Copper conductors in magnesium oxide inside a copper sheath. Fire-resistant, waterproof, very robust. Used for fire alarms, emergency lighting and high temperatures. Terminated with sealed pots and glands.','Up to 250 C sheath temperature'],
['Fire-resistant LSZH (such as FP200 Gold)','Low smoke and zero halogen, circuit-integrity cable for fire alarms and emergency systems.','Varies by type'],
['LSZH / LSF sheathed cables','Low smoke emission; used in escape routes, public buildings, tunnels.','70 to 90 C']])}
<p><b>Insulation types:</b> PVC (thermoplastic, 70 C), XLPE and EPR (thermosetting, 90 C), rubber, silicone (high temperature), and magnesium oxide in MI cable.</p>
<h3>Harmonised Cable Colours</h3>
${tbl(['Circuit','Line','Neutral','Protective (earth)'],[['Single-phase (current)','Brown','Blue','Green-and-yellow'],['Three-phase (current)','L1 brown, L2 black, L3 grey','Blue','Green-and-yellow'],['Older single-phase','Red','Black','Green-and-yellow'],['Older three-phase','Red, yellow, blue','Black','Green-and-yellow']])}
<p>Where a core is used for a different purpose (for example a blue switch-wire used as a live), it must be <b>identified</b> with brown sleeving or tape at the terminals. In an extension or alteration where older and harmonised cables meet, a notice must be fitted at the consumer unit to warn of the two colour schemes.</p>
<h3>Selecting a Wiring System</h3>
<p>Choose the cable and installation method for: the <b>current</b> carried; the <b>environment</b> (temperature, damp, corrosive atmosphere, dust, UV light, chemicals); <b>mechanical protection</b> needed; <b>fire performance</b> (LSZH, fire-resistant); <b>appearance</b> and cost; the possibility of <b>alterations</b>; and <b>BS 7671 requirements</b> such as segregation of different voltage bands. For example: flat twin and earth under plaster or clipped in a house; singles in conduit or trunking in a workshop; SWA outdoors or buried; MI for fire alarms.</p>
<h3>Cable Support, Fixing and Bending</h3>
<p>Cables must be supported so they are not damaged and do not put strain on terminals. Clip spacing for non-armoured thermoplastic cables (the <b>On-Site Guide</b> has the table) is typically:</p>
${tbl(['Overall cable diameter','Horizontal spacing','Vertical spacing'],[['Up to 9 mm','250 mm','400 mm'],['Over 9 mm to 15 mm','300 mm','400 mm'],['Over 15 mm to 20 mm','350 mm','450 mm'],['Over 20 mm to 40 mm','400 mm','550 mm']])}
<p><b>Bending radius:</b> do not bend cables more tightly than the minimum permitted. A typical internal radius for non-armoured PVC cable is 4 times the overall diameter for cables up to 10 mm diameter, and 6 times for larger ones. Armoured cables need larger radii (typically 8 times). Do not install PVC cable in temperatures below 0 degrees, when it becomes brittle. Protect cable at sharp edges with grommets or bushes, avoid contact with hot pipes, and keep away from damp and sharp surfaces. Use cable ties only as a secondary support and not for load-bearing.</p>
<h3>Cables Concealed in Walls</h3>
<p>Cables concealed in walls and partitions less than 50 mm from the surface must be installed in <b>safe zones</b>: within 150 mm of the top of the wall or partition (or the angle of two walls), or running horizontally or vertically (not diagonally) to or from an accessory, switch or luminaire. Otherwise they must have <b>mechanical protection</b> (earthed metal covering or substantial enclosure) or be protected by a <b>30 mA RCD</b>, depending on the installation. Marking the accessory position helps others know where cables run. Cables in <b>thermal insulation</b> must be derated, because heat cannot escape.</p>
<h3>Containment</h3>
<p><b>Conduit</b> (steel or PVC, 16, 20, 25 or 32 mm): protects cables and allows rewiring. Steel conduit must be earthed and have tight joints for continuity. Conduit ends must be <b>deburred</b> to protect insulation. Use bends, couplers, saddles and boxes; make bends with a conduit bender or spring (PVC with a bending spring or a heat gun); fit inspection fittings; do not exceed the number of bends allowed between draw-in points. Cable capacity is found from <b>cable factors</b>; the sum of the factors must not exceed the conduit factor for the run length and number of bends.<br>
<b>Trunking</b> (PVC or steel; skirting, dado, floor or overhead): holds many circuits. <b>Space factor:</b> the total cross-sectional area of cables (including insulation) must not exceed <b>45%</b> of the internal cross-sectional area of the trunking. Fit the lids, fit <b>fire barriers</b> where trunking passes through floors or fire compartments, use dividers to segregate circuits of different bands, keep joints tight and earthed if metal.<br>
<b>Cable tray and ladder</b> support armoured and multicore cables: perforated tray, return-flange tray, basket, ladder rack. Support at the spacings in the manufacturer's data and keep cables secured. Good for heavy cables and for cooling.<br>
<b>Underground:</b> cables are buried at a suitable depth (typically at least 450 mm, deeper under driveways and roads), on a sand bed, protected by cover tiles and marked with warning tape. Ducts allow cables to be replaced.</p>
<h3>Cable Terminations and Joints</h3>
<p>Terminate to the manufacturer's instructions: strip the insulation without nicking the conductor; use the correct terminal size; place the conductor fully in the terminal with no bare copper outside and no insulation trapped under the screw; tighten to the right torque; fit ferrules or crimps where stranded conductors are used; support the cable so no strain is on the termination. <b>Joints and connections</b> must be accessible for inspection and maintenance, unless they are maintenance-free types (for example compression joints or soldered joints in suitable enclosures). Cable glands for SWA terminate the sheath and armour (earth continuity); MI cables are sealed with pots to keep moisture out.</p>
<h3>Lighting Circuits</h3>
<p>Typical lighting circuits are <b>radial</b>, protected by a <b>6 A</b> device and wired in 1.0 or 1.5 mm² flat cable. The common wiring methods are the <b>loop-in</b> method (the supply is looped from ceiling rose to ceiling rose) and the <b>junction-box</b> method. All switches must interrupt the <b>line</b> conductor, never the neutral. The neutral and the CPC are connected to every light fitting. In the <b>two-way</b> arrangement two switches each with terminals COM, L1 and L2 are connected by two strapper cores (L1 to L1 and L2 to L2); the live feed goes to COM of switch A and COM of switch B goes to the lamp. Adding an <b>intermediate switch</b> between the strappers allows control from three or more positions.</p>
<h3>Sockets, Spurs and Fixed Appliances</h3>
<p>Socket outlets to BS 1363 are used with 13 A fused plugs. <b>Fused connection units (FCUs)</b> supply fixed appliances and use a fuse chosen for the appliance (for example 3 A for a clock, 13 A for a 3 kW heater). Cooker circuits use a control unit with a socket option; showers and immersion heaters are on dedicated circuits.</p>`,
['twoway','swa'],
[
Q('LO3','In single-phase installations the harmonised colour for the line conductor is…','brown',['red','black','grey']),
Q('LO3','The harmonised colour for the neutral conductor is…','blue',['brown','black','green']),
Q('LO3','In a three-phase system the harmonised colours of L1, L2 and L3 are…','brown, black and grey',['red, yellow and blue','brown, blue and green','black, red and grey']),
Q('LO3','The bare CPC in flat twin and earth cable must be sleeved…','green-and-yellow at terminations',['red','blue','brown']),
Q('LO3','The maximum continuous conductor operating temperature of PVC cable is…','70 degrees Celsius',['30 degrees Celsius','105 degrees Celsius','250 degrees Celsius']),
Q('LO3','XLPE insulation allows a maximum conductor temperature of…','90 degrees Celsius',['40 degrees Celsius','60 degrees Celsius','250 degrees Celsius']),
Q('LO3','Which cable has steel wire armour that can act as a protective conductor?','SWA cable',['Flat twin and earth','Flexible cord','PVC single']),
Q('LO3','Which cable is used for fire alarm circuits that must keep working in a fire?','MI or FP200-type fire-resistant cable',['Flat twin and earth','Flexible cord','Telephone cable']),
Q('LO3','LSZH stands for…','low smoke zero halogen',['low surge zero heat','light switch zone high','long span zinc heavy']),
Q('LO3','Flexible cord must not be used for…','fixed wiring',['portable appliances','pendants','connecting equipment']),
Q('LO3','Cut ends of conduit are deburred to…','avoid damage to cable insulation',['reduce earth resistance','increase space factor','improve appearance only']),
Q('LO3','The maximum space factor for trunking is…','45%',['10%','25%','90%']),
Q('LO3','The clip spacing for non-armoured cable up to 9 mm diameter run horizontally is…','250 mm',['100 mm','500 mm','1,000 mm']),
Q('LO3','Cable of 9 to 15 mm overall diameter run vertically has a clip spacing of…','400 mm',['300 mm','250 mm','550 mm']),
Q('LO3','PVC cables should not be installed when the temperature is below…','0 degrees Celsius',['20 degrees Celsius','15 degrees Celsius','-30 degrees Celsius']),
Q('LO3','A cable concealed in a wall at less than 50 mm depth should run…','within a safe zone (horizontally or vertically to an accessory or near the ceiling or corner), or be otherwise protected',['diagonally across the wall','anywhere in the wall','only behind the plaster at 60 mm']),
Q('LO3','Fire barriers are fitted in trunking…','where it passes through floors and fire compartment walls',['at each lid','at each clip','where it turns a corner']),
Q('LO3','Cable tray is mainly used to…','support heavy armoured and multicore cables',['house bell wire only','protect cables from rain','carry water']),
Q('LO3','Armoured cable buried underground is typically installed at a depth of at least…','450 mm',['50 mm','150 mm','50 cm below water table only']),
Q('LO3','Warning tape above a buried cable is used to…','warn people digging that a cable is below',['hold the cable in place','keep the cable cool','mark property boundaries']),
Q('LO3','Switches in a lighting circuit must break the…','line conductor',['neutral conductor','CPC','bonding conductor']),
Q('LO3','The loop-in method of wiring lighting means that…','the supply cable is looped from one ceiling rose to the next',['every lamp has its own fuse','lamps are wired in series','the neutral is switched']),
Q('LO3','A typical protective device for a domestic lighting circuit is…','6 A',['32 A','63 A','100 A']),
Q('LO3','In a two-way switching circuit the live feed goes to…','the common (COM) terminal of the first switch',['an L1 terminal of the second switch','the neutral bar','the CPC']),
Q('LO3','The strappers in a two-way circuit connect…','L1 to L1 and L2 to L2',['COM to COM','L1 to L2 only','COM to L1 on each']),
Q('LO3','A cable passing through a metal box should be fitted with…','a grommet or bush',['a sleeve of paint','extra tape only','a larger fuse']),
Q('LO3','Joints and connections must be accessible for inspection unless they are…','maintenance-free types',['soldered with tape','hidden for appearance','buried in plaster']),
Q('LO3','Cables in thermal insulation must be…','derated, because heat cannot escape',['given a larger fuse','used at the same rating','buried']),
Q('LO3','MI cable ends are sealed to…','keep moisture out of the magnesium oxide',['reduce weight','improve colour','increase flexibility']),
Q('LO3','If a blue core is used as a switch live in a lighting circuit it must be…','identified with brown sleeving or tape at its terminals',['left as blue','painted green','tied in a knot']),
Q('LO3','The typical minimum bending radius for non-armoured PVC cable of up to 10 mm diameter is…','4 times the overall diameter',['half the diameter','equal to the diameter','10 times the diameter']),
Q('LO3','Steel conduit systems must be…','electrically continuous and earthed',['isolated from earth','painted with insulating paint','used only outdoors']),
Q('LO3','A fused connection unit (FCU) for a 3 kW heater would use a fuse of…','13 A',['3 A','1 A','30 A'])
],
[['List the harmonised colours for single-phase and three-phase circuits.','Single-phase: brown line, blue neutral, green-and-yellow earth. Three-phase: L1 brown, L2 black, L3 grey, blue neutral, green-and-yellow earth.'],
['State the clip spacings for a 7 mm diameter flat PVC cable run horizontally and vertically.','250 mm horizontally and 400 mm vertically.'],
['Describe the safe zones for cables concealed in a wall less than 50 mm deep.','Within 150 mm of the top of the wall or partition (or of a wall angle), or run horizontally or vertically (not diagonally) to or from an accessory, switch or luminaire; otherwise protect with earthed mechanical protection or a 30 mA RCD.'],
['Explain what the space factor of trunking is and give the limit.','The total cross-sectional area of the cables (with insulation) as a percentage of the internal cross-sectional area of the trunking; the limit is 45%.'],
['Explain how a two-way lighting circuit is wired.','The live feed goes to COM of switch A; strappers join L1 to L1 and L2 to L2; COM of switch B goes to the lamp; the neutral goes directly to the lamp; the CPC to every fitting.']]);
})();
