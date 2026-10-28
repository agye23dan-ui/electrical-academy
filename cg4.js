(function(){
// City & Guilds 2365 Level 2, Unit 203 (part 2): circuits and protection, earthing, supply, micro-renewables.
const {Q,tbl,mod,note}=CGH;

mod('cg203c','203·C Final circuits, protective devices and cable selection','203',
`<p><b>City & Guilds 2365 Level 2, Unit 203, LO3 (part 2).</b> This lesson covers common circuit types, protective devices, the requirements for shock and fault protection, and the steps to select a cable. It includes worked examples you can reproduce with the On-Site Guide tables. The values below are typical; in an open-book test always take them from the current table.</p>
<h3>Common Final Circuits</h3>
${tbl(['Circuit','Typical protective device','Typical cable (copper, flat twin and earth)','Notes'],[
['Lighting','6 A','1.0 or 1.5 mm²','Radial; loop-in or junction-box method; switches in the line conductor'],
['Ring final (sockets)','32 A','2.5 mm²','Floor area up to about 100 m²; both ends return to the same device; unfused spurs limited to the number of sockets on the ring'],
['Radial, sockets','20 A with 2.5 mm² (floor area about 50 m²), or 32 A with 4 mm² (about 75 m²)','2.5 or 4 mm²','Ends at the last socket'],
['Cooker','32 A (after diversity)','6 mm²','Cooker control unit; allowance for diversity'],
['Electric shower (7 to 10 kW)','40 A or 45 A (check rating)','10 mm² (typical, depends on route)','Dedicated circuit; 30 mA RCD protection'],
['Immersion heater','16 A (typically 3 kW)','2.5 mm²','Dedicated double-pole switch'],
['Fixed appliance on a fused spur','Fuse in the connection unit (for example 3 A or 13 A)','1.5 or 2.5 mm²','FCU rated for the load']])}
<p><b>Diversity</b> allows for the fact that not all connected loads operate at once, so cables and protective devices need not be sized for the full connected load. For a cooker, a common allowance is 10 A, plus 30% of the remainder of the full load, plus 5 A if the control unit has a socket. The result is the design current. Without diversity, installations would be over-sized and uneconomic; too much diversity would create an overload risk.</p>
<h3>Protective Devices</h3>
${tbl(['Device','Standard','Notes'],[
['Rewireable (semi-enclosed) fuse','BS 3036','Cheap but slow and less accurate; cable correction factor Cc = 0.725 applies; older installations'],
['Cartridge fuse','BS 1361, BS 88, BS EN 60269','High breaking capacity; replace after operating'],
['Miniature circuit breaker (MCB)','BS EN 60898','Resets; thermal element for overload and magnetic element for short circuit'],
['Residual current device (RCD / RCCB)','BS EN 61008','Detects imbalance between line and neutral currents (earth leakage); gives no overload or short-circuit protection'],
['RCBO','BS EN 61009','MCB and RCD in one unit'],
['Isolator / switch-disconnector','BS EN 60947','For isolation and switching; does not protect']])}
<p><b>MCB types</b> by magnetic trip level: <b>Type B</b> trips at 3 to 5 times the rated current (domestic and light commercial); <b>Type C</b> 5 to 10 times (inductive loads, small motors, fluorescent lighting); <b>Type D</b> 10 to 20 times (high inrush such as transformers and welders).<br>
<b>RCDs.</b> A 30 mA RCD trips at about 30 mA and must clear in no more than 300 ms at its rated residual current and 40 ms at five times that value. RCD types include AC, A, F and B depending on the waveform of the fault current. Additional 30 mA RCD protection is required, for example, for <b>socket outlets of rating up to 32 A</b> for use by ordinary persons, mobile equipment outdoors, <b>cables concealed in walls</b> not meeting the safe-zone or mechanical protection rules, and <b>AC final circuits supplying luminaires in domestic premises</b>. <b>AFDDs</b> (arc fault detection devices) detect dangerous arcing and may be recommended in higher-risk premises. <b>Surge protective devices (SPDs)</b> limit transient overvoltages from lightning or switching. In <b>domestic premises</b>, consumer units must have a <b>non-combustible (metal) enclosure</b>.</p>
<h3>Protection for Safety</h3>
<p><b>Basic protection</b> (against contact with live parts): insulation, barriers or enclosures (IP2X or IPXXB, finger-safe), obstacles, placing out of reach. <b>Fault protection</b> (against touching exposed conductive parts that have become live): <b>automatic disconnection of supply (ADS)</b> with earthing and bonding, double or reinforced insulation (Class II), SELV, or electrical separation. <b>Additional protection</b>: RCDs of 30 mA or less, and supplementary bonding. <b>Overload protection</b> requires <b>Ib ≤ In ≤ Iz</b>. <b>Short-circuit protection</b> requires a device with a <b>breaking capacity</b> at least equal to the prospective fault current at its point of installation. <b>Fault protection by ADS</b> requires the measured earth fault loop impedance <b>Zs ≤ the maximum value</b> for the device so it disconnects within <b>0.4 s</b> for final circuits up to 32 A on TN systems (<b>5 s</b> for distribution circuits).</p>
<p><b>Maximum Zs (0.4 s, Ω, typical values)</b></p>
${tbl(['Rating','Type B','Type C','Type D'],[['6 A','7.28','3.64','1.82'],['10 A','4.37','2.19','1.09'],['16 A','2.73','1.37','0.68'],['20 A','2.19','1.09','0.55'],['25 A','1.75','0.87','0.44'],['32 A','1.37','0.68','0.34'],['40 A','1.09','0.55','0.27']])}
<p>Measured values should not exceed about <b>80%</b> of these because conductors heat up in service and their resistance rises.</p>
<h3>Selecting a Cable: The Steps</h3>
<p>1. Find the <b>design current Ib</b> (power ÷ voltage for single-phase).<br>
2. Choose a protective device <b>In ≥ Ib</b>.<br>
3. Find the <b>reference installation method</b> (clipped direct = Method C; in conduit on a wall = Method B; in thermal insulation = Method A).<br>
4. Apply the correction factors: <b>It ≥ In ÷ (Ca × Cg × Ci × Cc)</b>.<br>
5. Choose the cable whose tabulated rating It is at least this value.<br>
6. Check the <b>voltage drop</b>: Vd = (mV per A per m × Ib × length) ÷ 1,000. Limits for a 230 V supply: <b>3% for lighting (6.9 V)</b> and <b>5% for other circuits (11.5 V)</b>.<br>
7. Check the <b>earth fault loop impedance</b>: Zs = Ze + (R1 + R2) must not exceed the device limit.<br>
8. Check the cable can withstand the fault current until the device operates.</p>
<p><b>Typical 2-core copper PVC (70 C) ratings (A) and voltage drop (mV/A/m):</b></p>
${tbl(['Size (mm²)','Method A','Method B','Method C','Volt drop (mV/A/m)'],[['1.0','11.5','13.5','15.5','44'],['1.5','14.5','17.5','20','29'],['2.5','20','24','27','18'],['4','26','32','37','11'],['6','34','41','47','7.3'],['10','46','57','64','4.4'],['16','61','76','85','2.8']])}
<p><b>Correction factors (typical).</b> Ca (ambient temperature, 70 C PVC): 25 degrees 1.03; 30 degrees 1.00; 35 degrees 0.94; 40 degrees 0.87; 45 degrees 0.79; 50 degrees 0.71. Cg (grouping, bunched on a surface): 2 circuits 0.80; 3 circuits 0.70; 4 circuits 0.65; 5 circuits 0.60; 6 circuits 0.57. Ci: cables surrounded by thermal insulation over their whole length: 0.5. Cc: BS 3036 semi-enclosed fuse: 0.725.</p>
<h3>Worked Example 1: Electric Shower</h3>
<p>A 7.2 kW shower on 230 V, cable run 15 m, clipped direct (Method C), ambient 30 degrees, not grouped.<br>
Ib = 7,200 ÷ 230 = 31.3 A. Choose a 32 A MCB (In = 32 A).<br>
Correction factors all 1.0, so It must be at least 32 A. The 6 mm² cable (47 A, Method C) is adequate; 4 mm² (37 A) would also meet the current but is not enough once voltage drop is checked for longer runs.<br>
Voltage drop = 7.3 × 31.3 × 15 ÷ 1,000 = 3.43 V (1.5%), within 11.5 V. Pass.<br>
Earth fault loop: 6/2.5 mm² flat cable has R1 + R2 of about 10.49 mΩ per metre, so for 15 m about 0.157 Ω. With Ze = 0.35 Ω, Zs = 0.51 Ω, below the 1.37 Ω limit for a Type B 32 A device (and below 80% of it, 1.10 Ω). Pass.</p>
<h3>Worked Example 2: Heater Circuit with Correction Factors</h3>
<p>A 4.6 kW heater (Ib = 20 A) on a 20 A device, cable run 18 m clipped direct (Method C), ambient temperature 35 degrees (Ca = 0.94), grouped with one other circuit (Cg = 0.80).<br>
It must be at least 20 ÷ (0.94 × 0.80) = 20 ÷ 0.752 = 26.6 A. The 2.5 mm² cable has It = 27 A, which is just enough.<br>
Voltage drop = 18 × 20 × 18 ÷ 1,000 = 6.48 V (2.8%). Pass.</p>
<h3>Isolation and Switching</h3>
<p>Every circuit must be capable of <b>isolation</b>. An <b>isolator</b> is a mechanical switching device for safety; <b>functional switching</b> controls normal operation (a light switch); <b>emergency switching</b> stops a hazard quickly. A consumer unit has a <b>main switch</b> (isolator for the whole installation), RCDs or RCBOs, and MCBs for the circuits. Circuits are labelled and a circuit chart is provided.</p>`,
['ring','radial','db'],
[
Q('LO3','A typical ring final circuit is protected by a…','32 A device',['6 A device','63 A device','100 A device']),
Q('LO3','A ring final circuit wired in 2.5 mm² flat cable can serve a floor area of about…','100 m²',['10 m²','500 m²','1,000 m²']),
Q('LO3','A 20 A radial socket circuit in 2.5 mm² cable serves a floor area of up to about…','50 m²',['100 m²','200 m²','10 m²']),
Q('LO3','The number of unfused spurs from a ring circuit must not exceed…','the total number of sockets and fixed appliances connected directly on the ring',['four per ring','one per room','no limit']),
Q('LO3','A Type B MCB trips instantly at…','3 to 5 times its rated current',['10 to 20 times','1.45 times','0.5 times']),
Q('LO3','A Type C MCB trips instantly at…','5 to 10 times its rated current',['3 to 5 times','10 to 20 times','2 times']),
Q('LO3','Which MCB type would you choose for a circuit with high inrush current such as a transformer?','Type D',['Type B','Type A','No MCB']),
Q('LO3','The relationship that must be met for overload protection is…','Ib ≤ In ≤ Iz',['Iz ≤ In ≤ Ib','In ≤ Ib ≤ Iz','Ib = Iz']),
Q('LO3','The breaking capacity of a protective device must be…','at least the prospective fault current at its location',['less than the prospective fault current','the same as the load current','50 A for all devices']),
Q('LO3','An RCD detects…','an imbalance between line and neutral currents',['overload only','a short circuit only','voltage fluctuations']),
Q('LO3','Additional protection by RCD of 30 mA is required for…','socket outlets rated up to 32 A for use by ordinary persons',['fixed bell transformers only','busbars only','HV equipment only']),
Q('LO3','A 30 mA RCD should disconnect within… at its rated residual current.','300 ms',['3 ms','30 s','3 s']),
Q('LO3','A 30 mA RCD should disconnect within… at five times its rated residual current.','40 ms',['4 s','400 ms','4 µs']),
Q('LO3','What is the maximum earth fault loop impedance for a Type B 32 A MCB (0.4 s)?','About 1.37 Ω',['13.7 Ω','0.137 Ω','137 Ω']),
Q('LO3','Measured Zs values are usually compared with about… of the tabulated maximum.','80%',['10%','150%','200%']),
Q('LO3','The maximum disconnection time for a final circuit of 32 A or less on a TN system is…','0.4 s',['5 s','0.04 s','4 s']),
Q('LO3','A 7.2 kW shower on 230 V has a design current of about…','31.3 A',['3.2 A','165 A','0.03 A']),
Q('LO3','Voltage drop limits for a 230 V installation are normally…','3% for lighting and 5% for other uses',['10% for all circuits','1% for lighting','20% for power circuits']),
Q('LO3','A 5% voltage drop on a 230 V supply is…','11.5 V',['2.3 V','5 V','23 V']),
Q('LO3','The voltage drop for 18 mV/A/m, 20 A and 18 m is…','6.48 V',['64.8 V','0.648 V','3.6 V']),
Q('LO3','A cable must carry It ≥ In ÷ (Ca × Cg × Ci). If In = 20 A, Ca = 0.94 and Cg = 0.80, the minimum tabulated rating is about…','26.6 A',['20 A','15 A','37.6 A']),
Q('LO3','Cable surrounded by thermal insulation has a correction factor (Ci) of about…','0.5',['1.0','2.0','1.5']),
Q('LO3','The correction factor for a BS 3036 semi-enclosed fuse is…','0.725',['1.0','1.45','0.5']),
Q('LO3','Fault protection for Class II equipment is provided by…','double or reinforced insulation',['a bonding conductor','an earth electrode','a lock-off device']),
Q('LO3','Basic protection means protection against…','contact with live parts',['fire','overvoltage only','mechanical damage only']),
Q('LO3','Consumer units in domestic premises should have…','a non-combustible (metal) enclosure',['a wooden enclosure','a paper cover','no enclosure']),
Q('LO3','The purpose of diversity is…','to avoid over-sizing cables and devices because not all loads operate at once',['to increase the supply voltage','to reduce earth resistance','to add more circuits']),
Q('LO3','A surge protective device (SPD) protects against…','transient overvoltages',['overload','earth leakage','undervoltage only']),
Q('LO3','A cooker circuit is typically protected by…','32 A and wired in 6 mm² cable',['6 A and 1.0 mm²','100 A and 25 mm²','2 A and 0.5 mm²']),
Q('LO3','In a consumer unit the main switch is used for…','isolating the whole installation',['protecting against faults only','measuring energy','earthing']),
Q('LO3','A device that provides isolation but no overcurrent protection is…','an isolator',['an MCB','a fuse','an RCBO'])
],
[['A 9.2 kW shower on 230 V is to be installed. Calculate the design current and choose the protective device.','Ib = 9,200 ÷ 230 = 40 A. Choose a 40 A device (check the shower manufacturer\'s rating).'],
['Calculate the voltage drop for a 25 m run of 4 mm² cable (11 mV/A/m) carrying 25 A and say whether it is acceptable for a non-lighting circuit.','Vd = 11 × 25 × 25 ÷ 1,000 = 6.9 V. Under the 11.5 V (5%) limit, so acceptable.'],
['State the difference between basic protection, fault protection and additional protection.','Basic: insulation, barriers, enclosures. Fault: automatic disconnection with earthing and bonding, Class II insulation, SELV. Additional: 30 mA RCD or supplementary bonding.'],
['Calculate the minimum tabulated cable rating for In = 32 A, Ca = 0.94 and Cg = 0.80.','It ≥ 32 ÷ (0.94 × 0.80) = 42.6 A.'],
['List five facts about a ring final circuit.','Protected by a 32 A device, 2.5 mm² cable, floor area up to about 100 m², both ends return to the same device, spurs limited in number.']]);

mod('cg203d','203·D Earthing, the electricity supply and micro-renewable energy','203',
`<p><b>City & Guilds 2365 Level 2, Unit 203, LO4 to LO6.</b> This lesson covers earthing arrangements and bonding, how electricity is generated and delivered to a building, and the micro-renewable technologies installed on or at homes and small commercial buildings.</p>
<h3>LO4: Earthing Systems</h3>
<h3>Purpose of Earthing and Bonding</h3>
<p>Earthing gives a low-impedance path so that, in an earth fault, enough current flows to operate the protective device quickly (<b>automatic disconnection of supply</b>). <b>Equipotential bonding</b> connects metalwork together so there are no dangerous voltage differences between simultaneously accessible conductive parts during a fault.</p>
<p><b>Terms.</b> The <b>main earthing terminal (MET)</b> is where the earthing conductor, protective conductors and main bonding conductors meet. The <b>earthing conductor</b> joins the MET to the means of earthing (the supply earth terminal or electrode). The <b>circuit protective conductor (CPC)</b> links the exposed-conductive-parts of equipment to the MET. <b>Exposed-conductive-part:</b> a metal part of equipment that can be touched and is not normally live but could become live in a fault (a motor frame, a metal luminaire). <b>Extraneous-conductive-part:</b> a metal part that is not part of the electrical installation but may introduce an earth potential (an incoming water or gas pipe, structural steel).</p>
<h3>Types of Supply Earthing</h3>
<p><b>TN-S:</b> the supply has a separate neutral and earth for its whole length; the earth is usually the cable sheath or armour from the source. <b>TN-C-S (PME, protective multiple earthing):</b> the supply uses a combined neutral and earth (PEN) conductor, which is split into a separate neutral and CPC at the origin of the installation. The DNO connects the PEN to earth at several points. <b>TT:</b> the supply gives no earth terminal; the installation has its own <b>earth electrode</b> (usually a rod). The fault path includes the ground, so fault current is lower, and an <b>RCD is required</b> for fault protection.</p>
${tbl(['System','Earth for the installation','Typical Ze (Ω)','Notes'],[
['TN-S','Supply cable sheath or armour','Up to about 0.8','Separate N and PE all the way back to the source'],
['TN-C-S (PME)','Combined PEN at the origin, split in the installation','Up to about 0.35','Most common; main bonding must be to the larger size; an open-circuit PEN can raise metalwork to a dangerous voltage'],
['TT','The consumer own earth electrode (rod)','Typically tens to hundreds of Ω','RCD protection required; no connection of the supply neutral to the installation earth']])}
<h3>Bonding Conductors</h3>
<p><b>Main protective bonding</b> connects the MET to incoming metal services (gas, water, oil), structural steel and other extraneous-conductive-parts. The conductor must be at least <b>6 mm² copper</b> (for TN-S and TT). For <b>TN-C-S (PME)</b> supplies it is sized from the neutral of the supply: <b>10 mm²</b> where the supply neutral is up to 35 mm², and larger for bigger supply neutrals. The connection to a service is made at the point where it enters the building, on the consumer side of any meter, using a <b>BS 951 earth clamp</b> with a "Safety Electrical Connection: Do Not Remove" label.<br>
<b>Supplementary bonding</b> is an extra link between exposed and extraneous parts in a location where additional protection is needed, and is <b>2.5 mm²</b> if mechanically protected (for example a sheathed cable) and <b>4 mm²</b> if not. Earthing conductors to an electrode are typically 16 mm² copper (insulated) where protected against corrosion and mechanical damage, and 25 mm² where buried.</p>
<h3>TT Systems and Earth Electrodes</h3>
<p>For a TT system the electrode resistance must satisfy <b>Ra × I∆n ≤ 50 V</b>. With a 30 mA RCD, Ra could be up to 1,667 Ω, although a value of 200 Ω or less is the recommended practical limit for stability. Electrode types include rods (copper-bonded steel, usually 1.2 m long), plates and tapes. Resistance can be improved by driving the rod deeper, using more rods spaced at least their own length apart, or treating the soil.<br>
<b>Disconnection times:</b> TN systems, final circuits up to 32 A: <b>0.4 s</b>; distribution circuits: <b>5 s</b>. TT systems, final circuits up to 32 A: <b>0.2 s</b>; distribution: 1 s.</p>
<h3>Earth Fault Loop Impedance</h3>
<p>The loop is the path of fault current from the source through the line conductor, to the fault, back along the CPC and the earthing path to the source. <b>Zs = Ze + (R1 + R2)</b>. Fault current = U0 ÷ Zs, where U0 is 230 V. <b>Ze</b> is measured at the origin with the installation isolated; <b>R1 + R2</b> is measured with a low-resistance ohmmeter on each circuit during testing.</p>
<h3>LO5: How Electricity is Supplied</h3>
<h3>Generation, Transmission and Distribution</h3>
<p>Power stations (gas, nuclear, hydro, wind, solar, biomass) generate at around 11 to 25 kV. <b>Step-up transformers</b> raise this to <b>400 kV or 275 kV</b> for the national transmission grid because, for the same power, a higher voltage means a lower current (I = P ÷ V), and <b>I² × R heating losses</b> fall sharply. <b>Step-down transformers</b> at grid supply points feed regional networks at <b>132 kV</b> and <b>33 kV</b>, and primary substations feed <b>11 kV</b> distribution networks. Local substations step 11 kV down to <b>400/230 V</b> for customers. Lines are carried overhead on pylons and poles or underground in cables. The frequency of the UK system is 50 Hz.</p>
<h3>The Supply to a Building</h3>
<p>The local distribution transformer secondary is star-connected with its neutral earthed, giving <b>three line conductors and a neutral</b>: 400 V between lines and 230 V between a line and neutral. Homes are normally supplied with a single phase (230 V, often 100 A). Larger premises and industry take all three phases (400 V). The <b>service cable</b> terminates in the <b>cut-out</b> (the network operator's fuse, typically 60 A to 100 A) and the <b>meter</b> belongs to the supplier. <b>Meter tails</b> link the meter to the consumer unit; they are sized for the supply (for example 25 mm² for 100 A). The DNO provides the <b>earth terminal</b> in TN-S and TN-C-S supplies. Under the Electricity Safety, Quality and Continuity Regulations, the declared voltage is 230 V +10% and -6% (253 V to 216.2 V) at 50 Hz.</p>
<h3>Voltage Bands</h3>
${tbl(['Band','AC rms','DC (ripple-free)'],[['Extra-low voltage (ELV)','Not exceeding 50 V','Not exceeding 120 V'],['Low voltage (LV)','Above 50 V up to 1,000 V','Above 120 V up to 1,500 V'],['High voltage (HV)','Above 1,000 V','Above 1,500 V']])}
<h3>LO6: Micro-renewable Energy</h3>
<p><b>Micro-generation</b> is small-scale generation, typically at or near the point of use. In the UK, connection arrangements depend on size: small generators up to <b>16 A per phase</b> use the simpler <b>G98</b> notification process (connect, then notify the network operator); larger systems need the DNO's approval under <b>G99</b>. Under the Smart Export Guarantee (SEG) suppliers pay for electricity exported to the grid, and installations are usually certified under the <b>Microgeneration Certification Scheme (MCS)</b>.</p>
${tbl(['Technology','How it works','Notes'],[
['Solar photovoltaic (PV)','Cells convert sunlight directly into DC electricity. An <b>inverter</b> changes DC to AC at 230 V 50 Hz.','Typical house system 3 to 4 kW. DC isolators and AC isolators needed; the array is live whenever light falls on it. The inverter has loss-of-mains protection so it shuts down when the grid fails (anti-islanding).'],
['Wind turbine','Turbine blades turn a generator; the output is conditioned by an inverter.','Needs good average wind speed and a clear site. Planning permission and noise should be considered.'],
['Micro-hydro','Falling or flowing water turns a turbine generator.','Needs a stream with enough head or flow.'],
['Heat pump (air or ground source)','Moves heat from the air or ground into a building using a compressor and refrigerant.','Uses electricity to move heat; the coefficient of performance (COP) is typically 3 to 4, so 1 kW of electrical input gives 3 to 4 kW of heat.'],
['Solar thermal','Collectors heat water directly using sunlight.','Produces heat, not electricity.'],
['Biomass boiler','Burns wood pellets or logs to heat water.','Heat only; fuel storage and flue needed.'],
['Micro-CHP','Produces heat and electricity from one fuel source.','Efficient when heat is needed all year.']])}
<p><b>Battery storage</b> stores surplus electricity for use later. <b>Electric vehicle charge points</b> are covered by BS 7671 Section 722. Installations must follow BS 7671 Section 712 (solar PV systems) and Section 551 (low-voltage generating sets). Install warning labels at the consumer unit, meter and isolation points, and keep records and certificates. Remember that <b>DC circuits can sustain arcs</b> and solar DC cable remains live in daylight, so work on PV requires careful isolation and DC-rated equipment.</p>`,
['earthsys','earth'],
[
Q('LO4','In a TN-S system the earth return path for the installation is…','a separate earth conductor or cable sheath back to the source',['a combined neutral-and-earth conductor','the installation\'s own earth electrode','the water main']),
Q('LO4','TN-C-S is also known as…','protective multiple earthing (PME)',['TT earthing','IT earthing','isolated earthing']),
Q('LO4','In a TT system the earth connection is provided by…','the consumer\'s own earth electrode',['the supply cable sheath','the combined neutral','the gas pipe']),
Q('LO4','Which system must have RCD protection for fault protection?','TT',['TN-S only','TN-C-S only','none of these']),
Q('LO4','Main protective bonding connects…','incoming metal services and structural steel to the main earthing terminal',['all light switches together','the neutral to the line','the CPC to the neutral only']),
Q('LO4','The minimum size of copper main bonding conductor for a TN-S system is…','6 mm²',['1.5 mm²','2.5 mm²','35 mm²']),
Q('LO4','A typical main bonding conductor for a PME (TN-C-S) domestic supply with a neutral up to 35 mm² is…','10 mm²',['2.5 mm²','6 mm² only','25 mm²']),
Q('LO4','Supplementary bonding with mechanical protection is a minimum of…','2.5 mm²',['4 mm²','10 mm²','16 mm²']),
Q('LO4','Supplementary bonding without mechanical protection is a minimum of…','4 mm²',['2.5 mm²','1.5 mm²','10 mm²']),
Q('LO4','For a TT system the electrode resistance condition is…','Ra × I∆n ≤ 50 V',['Ra + I∆n ≥ 50 V','Ra ÷ I∆n ≤ 50 V','Ra ≥ 1,000 Ω']),
Q('LO4','The maximum disconnection time for TN final circuits up to 32 A is…','0.4 s',['5 s','0.2 s','10 s']),
Q('LO4','The maximum disconnection time for TT final circuits up to 32 A is…','0.2 s',['0.4 s','5 s','2 s']),
Q('LO4','The maximum disconnection time for distribution circuits on a TN system is…','5 s',['0.4 s','0.1 s','60 s']),
Q('LO4','Total earth fault loop impedance is…','Zs = Ze + (R1 + R2)',['Zs = Ze × (R1 + R2)','Zs = Ze − R1','Zs = R2 ÷ Ze']),
Q('LO4','A metal incoming water pipe is an example of…','an extraneous-conductive-part',['an exposed-conductive-part','a CPC','a neutral conductor']),
Q('LO4','A metal motor frame is an example of…','an exposed-conductive-part',['an extraneous-conductive-part','a supply conductor','a live part']),
Q('LO4','The main earthing terminal is where…','the earthing conductor, CPCs and main bonding conductors are connected',['the meter is connected','the switch is fitted','the lamps are connected']),
Q('LO4','A BS 951 clamp is used to…','connect a bonding conductor to a metal pipe',['clamp a cable to a wall','hold a lamp','join two cables']),
Q('LO4','A concern with PME supplies is that…','an open-circuit PEN conductor can raise metalwork to a dangerous voltage',['they have no neutral','they cannot be used in houses','they have no earth']),
Q('LO5','Electricity is transmitted at high voltage to…','reduce the current and so the I² R losses',['increase the frequency','increase the current','avoid the use of transformers']),
Q('LO5','The UK transmission grid operates at…','400 kV and 275 kV',['230 V','1,000 V','5 kV']),
Q('LO5','Local substations normally step 11 kV down to…','400/230 V',['33 kV','132 kV','48 V']),
Q('LO5','The voltage between a line and neutral in a UK supply is…','230 V',['400 V','110 V','690 V']),
Q('LO5','The voltage between two lines of the UK three-phase supply is…','400 V',['230 V','11 kV','110 V']),
Q('LO5','The declared UK supply voltage tolerance is…','230 V +10% and -6%',['230 V ±20%','230 V ±1%','230 V ±50%']),
Q('LO5','The cut-out is…','the network operator\'s fuse and service termination at the origin',['the consumer unit','a type of lamp','a bonding clamp']),
Q('LO5','Extra-low voltage (ELV) is defined as not exceeding…','50 V AC or 120 V ripple-free DC',['230 V AC','1,000 V AC','12 V AC']),
Q('LO5','Low voltage (LV) AC is above 50 V and up to…','1,000 V',['230 V','11 kV','400 V']),
Q('LO5','The frequency of the UK mains supply is…','50 Hz',['60 Hz','25 Hz','100 Hz']),
Q('LO6','A solar photovoltaic panel produces…','direct current (DC)',['alternating current only','heat only','no electricity']),
Q('LO6','The component that converts DC from PV panels to AC is the…','inverter',['transformer only','rectifier','fuse']),
Q('LO6','Loss-of-mains protection in a PV inverter is intended to…','shut down the inverter when the grid supply fails',['increase output','charge batteries','measure energy']),
Q('LO6','A heat pump with a COP of 3.5 delivers…','3.5 kW of heat for each 1 kW of electrical input',['1 kW of heat for 3.5 kW input','3.5 kW electrical for 1 kW heat','no heat']),
Q('LO6','Small generators connected to the network up to 16 A per phase are covered by…','G98 (connect and notify)',['G99 approval only','no rules','BS 3036']),
Q('LO6','Solar thermal collectors produce…','heat',['AC electricity','DC electricity','wind power']),
Q('LO6','Which BS 7671 section covers solar PV installations?','Section 712',['Section 100','Section 411','Section 722']),
Q('LO6','Which BS 7671 section covers EV charging installations?','Section 722',['Section 712','Section 411','Section 551']),
Q('LO6','The Smart Export Guarantee (SEG) is…','payment by suppliers for exported renewable electricity',['a type of cable','a safety test','a fuse standard']),
Q('LO6','Which of these is a micro-renewable that produces heat only?','Biomass boiler',['Solar PV','Wind turbine','Micro-hydro'])
],
[['Describe the three types of supply earthing arrangement TN-S, TN-C-S and TT.','TN-S: separate neutral and earth in the supply. TN-C-S: combined PEN split at the origin. TT: no earth from the supply; the installation has its own earth electrode and requires RCD protection.'],
['State the earth electrode resistance limit using a 100 mA RCD on a TT system.','Ra ≤ 50 ÷ 0.1 = 500 Ω.'],
['Explain why electricity is transmitted at high voltage.','The same power can be carried at a lower current, so heating losses (I² × R) are reduced and smaller conductors can be used.'],
['List four micro-renewable technologies and say what each produces.','Solar PV (electricity), wind turbine (electricity), micro-hydro (electricity), heat pump or biomass boiler or solar thermal (heat).'],
['Explain the difference between main protective bonding and supplementary bonding.','Main bonding connects incoming services and structural steel to the main earthing terminal. Supplementary bonding links exposed and extraneous parts within a location where extra protection is needed.']]);
})();
