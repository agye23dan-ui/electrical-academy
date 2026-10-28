(function(){
// City & Guilds 2365 Level 3, Unit 303: Fault diagnosis and rectification.
const {Q,tbl,note}=CGH, mod=CGH.mod3;

mod('cg303a','303·A Fault-finding process, safe working and instruments','303',
`<p><b>City & Guilds 2365 Level 3, Unit 303 (topic areas T1 and T2).</b> Fault diagnosis is a structured, safe and repeatable method, not guesswork. This lesson covers what faults are and how to find them safely, the instruments you will use, and how to interpret what they tell you. The next lesson applies the method to the commonest faults.</p>
<h3>Types of Fault and Their Causes</h3>
${tbl(['Fault','Meaning','Typical causes'],[
['Open circuit','A break in a conductor or connection; current cannot flow','Loose or burnt terminal, broken conductor, cable cut by a nail or drill, failed lamp or heater element, blown fuse, operated overload'],
['Short circuit','Line and neutral (or two lines) connected with very low impedance; very high current','Damaged insulation, crushed cable, wrongly wired accessory, tools dropped in switchgear'],
['Earth fault','Line (or neutral) connected to earth or exposed metal','Damaged insulation, moisture, appliance fault, cable damaged by fixings'],
['High-resistance connection','A joint with abnormal resistance; heats up and may arc','Loose terminal, corrosion, damaged strands, poor crimp'],
['Insulation breakdown or leakage','Insulation resistance falls; leakage current flows','Moisture, age, heat, rodents, mechanical damage'],
['Overload','Current above the circuit rating, but with no direct fault','Too many loads, wrong device or cable size, motor mechanical overload'],
['Cross-connection or borrowed neutral','A neutral shared between circuits or RCDs; interconnected circuits','Wiring errors, alterations by others'],
['Reversed polarity or lost phase','Line and neutral swapped, or one phase of three missing','Wiring errors, blown fuse, loose terminal']])}
<p><b>Symptoms</b> include: no power; an MCB or RCD tripping (immediately, on reset, or at intervals); lights flickering or dim; equipment overheating; a burning smell, discolouration or buzzing; a tingle from earthed metalwork; hot sockets or plugs; motors tripping on overload; and alarms operating.</p>
<h3>A Systematic Fault-Finding Process</h3>
<p>1. <b>Gather information</b>: talk to the client or operator (when did it start, what changed, how often, what else was on), look at previous test results, drawings, schedules and circuit charts.<br>
2. <b>Analyse the evidence</b>: decide which parts are affected and which parts are working, and list the likely causes.<br>
3. <b>Check the supply and the obvious</b>: is there a supply? Are devices operated? Look for visible damage, burning, signs of water or recent building work.<br>
4. <b>Collect further evidence</b> by inspection and by test. Make a plan to test the most likely or easiest causes first.<br>
5. <b>Interpret</b> the results and identify the fault. Compare readings with expected values.<br>
6. <b>Locate and rectify</b> the fault (repair or replace) while keeping the installation safe.<br>
7. <b>Test and verify</b> that the fault is cleared and that the circuit meets BS 7671 (continuity, insulation resistance, polarity, loop impedance and RCD tests as relevant).<br>
8. <b>Record and report</b>: write what was found and done, restore the supply and tell the client.</p>
<p><b>Methods.</b> <b>Input to output:</b> start at the supply and work forwards until the condition changes. <b>Output to input:</b> start at the fault and work back. <b>Half-split</b> (bisecting): test at the middle of the circuit; if it is good the fault is downstream, and if it is bad the fault is upstream; repeat on the half that contains the fault. This is the quickest method for a long circuit. <b>Zonal or sectional</b>: divide the system into areas and isolate them in turn. <b>Comparison</b>: compare with an identical working circuit or the original test results. <b>Replacement</b> of a suspected component with a known-good one is quick but must not hide an underlying cause.</p>
<h3>Safe Working During Fault Finding</h3>
<p>The Electricity at Work Regulations 1989 require work on or near conductors to be done dead unless live work is justified. For fault finding: carry out a <b>risk assessment</b>; use the <b>safe isolation procedure</b> (identify, isolate, secure with a lock, prove the tester, test dead, re-prove); do the <b>dead tests</b> first (continuity, insulation resistance, polarity). Live tests are sometimes unavoidable (loop impedance, voltage readings, RCD tests, checks on control circuits). When working live: use test equipment and leads that meet <b>GS 38</b>; use insulated tools and suitable PPE; keep one hand free; do not work alone on live parts; keep the area clear of unauthorised people and warn others; and never defeat protective devices or bypass interlocks. Take care with <b>stored energy</b> (capacitors, batteries and PV), with <b>back-feeds</b> from generators or solar, and with <b>induced voltages</b> on long cable runs. Stop if it is unsafe to continue, and make the circuit safe.</p>
<h3>Instruments</h3>
${tbl(['Instrument','Used for','Notes'],[
['Voltage indicator and proving unit','Proving dead and live-state checks','GS 38 type with fused leads and finger guards; prove before and after use'],
['Low-resistance ohmmeter (continuity tester)','Continuity of conductors and protective conductors (R1+R2, ring circuits)','Test current at least 200 mA; null the leads; read in ohms or milliohms'],
['Insulation resistance tester','Insulation between conductors and to earth','Test at 250 V, 500 V or 1,000 V DC; circuit isolated; sensitive equipment disconnected'],
['Earth fault loop impedance tester','Ze and Zs','Live test; low-current (no-trip) setting avoids tripping RCDs'],
['RCD tester','Trip time and trip current of RCDs','Tests at one half, one and five times the rated current'],
['Multifunction tester (MFT)','Combines the above','Check calibration and the leads before use'],
['Multimeter (true RMS, CAT III or CAT IV rated)','Voltage, current and resistance readings','Not a substitute for a voltage indicator when proving dead'],
['Clamp meter (and leakage clamp)','Measuring load and leakage current without breaking the circuit','Leakage clamps read down to milliamps and help trace RCD problems'],
['Thermal imaging camera','Finding hot joints and overloaded conductors','Look at loaded circuits; do not rely on it alone'],
['Cable locator and tracer','Tracing cable routes and faults','Signal generator on the cable and a receiver'],
['Time domain reflectometer (TDR)','Locating open-circuit or short-circuit faults on long cables','Distance = (velocity × echo time) ÷ 2'],
['Phase rotation meter','Checking the phase sequence for three-phase motors','Avoids reverse rotation']])}
<p><b>TDR example.</b> The signal travels at about 67% of the speed of light (velocity factor 0.67, so 2 × 10⁸ m/s). An echo returns after 2 microseconds: distance = 2 × 10⁸ × 2 × 10⁻⁶ ÷ 2 = 200 m to the fault.</p>
<p><b>Instrument care.</b> Use calibrated instruments (typically recalibrated each year); check leads and probes; zero or null the leads on continuity tests; check batteries; choose the right range and voltage; and keep records of readings. Using the wrong instrument or range can give a false result or damage the equipment.</p>
${note('<b>Rule:</b> never assume a fault is where it first appears. Gather evidence, test systematically and check your conclusions with a second test.')}`,
[],
[
Q('T1','An open-circuit fault is…','a break in a conductor or connection',['a short between line and neutral','a leakage to earth','a circuit overload only']),
Q('T1','A short circuit between line and neutral typically causes…','a very high current that operates the protective device',['no current','a small leakage current only','a voltage drop only']),
Q('T1','A high-resistance connection is dangerous mainly because it…','heats up and may cause fire or arcing',['reduces the supply voltage to zero','causes the RCD to be more sensitive','makes the cable shorter']),
Q('T1','The first step in the fault-finding process is to…','gather information from the client and records',['replace components at random','start cutting cables','buy new equipment']),
Q('T1','After finding the fault and repairing it, you should…','test and verify the circuit before restoring it to service',['leave it','assume it is fine','wait to see if it fails again']),
Q('T1','In the half-split method you…','test at the middle of the circuit and then repeat on the half that holds the fault',['replace every component','test only the first and last points','always start at the lamp']),
Q('T1','Fault finding on a circuit normally starts with…','safe isolation and dead tests where possible',['live testing with a multimeter','removing the earth','shorting out the fuse']),
Q('T1','A fault that causes the RCD to trip is most likely to involve…','current leaking to earth',['a short between two lines only','an open circuit','low frequency']),
Q('T1','A borrowed neutral means that…','a neutral is shared between two circuits',['the neutral is borrowed from another street','the earth is used as a neutral','the neutral is not connected']),
Q('T1','Stored energy hazards during fault finding include…','capacitors, batteries and PV arrays',['water pipes','curtains','paintwork']),
Q('T2','A low-resistance ohmmeter used for continuity tests should have a test current of at least…','200 mA',['2 mA','20 µA','2 A']),
Q('T2','An insulation resistance test on a 230 V circuit uses…','500 V DC',['12 V AC','5,000 V DC','230 V AC']),
Q('T2','Voltage indicators for proving dead should comply with…','GS 38',['BS 1363','BS 3036','Part L']),
Q('T2','A leakage clamp meter is used to…','measure small leakage currents without disconnecting conductors',['measure insulation resistance','test earth electrode resistance','prove dead']),
Q('T2','A thermal imaging camera is useful for finding…','hot joints and overloaded conductors',['insulation resistance','polarity','RCD trip times']),
Q('T2','A time domain reflectometer is used to…','locate the distance to a cable fault',['measure power factor','test a lamp','check phase sequence']),
Q('T2','A TDR echo returns after 2 µs on a cable with a signal speed of 2 × 10⁸ m/s. The fault is at…','200 m',['400 m','20 m','2 km']),
Q('T2','A phase rotation meter is used to…','check the phase sequence for a three-phase motor',['measure RCD trip time','prove dead','measure Zs']),
Q('T2','A multifunction tester should be…','calibrated regularly and its leads checked before use',['used without checking','used only once a year','never calibrated']),
Q('T2','A loop impedance tester on a low-current (no-trip) setting is used to…','measure Zs without tripping the RCD',['trip every RCD','measure insulation','measure frequency']),
Q('T2','The test leads of a continuity tester are nulled to…','remove the resistance of the leads from the reading',['increase the reading','recharge the battery','protect the circuit']),
Q('T2','A clamp meter measures current by…','sensing the magnetic field round a conductor without breaking the circuit',['connecting in series','using a shunt','measuring voltage drop'])
],
[['List the stages of a systematic fault-finding process.','Gather information; analyse the evidence; check the supply and obvious items; collect evidence by test; interpret results; locate and rectify; test and verify; record and report.'],
['Explain the half-split method and when it is useful.','Test at the middle of the circuit; if the reading is good the fault is downstream, if bad it is upstream; repeat on the faulty half. Useful for long circuits and cables.'],
['State the safe isolation steps used before dead testing.','Identify the circuit, select a GS 38 indicator, isolate, secure with a lock and notice, prove the indicator, test dead, re-prove the indicator.'],
['Calculate the distance to a fault from a TDR echo time of 1.5 µs where the signal velocity is 2 × 10⁸ m/s.','Distance = 2 × 10⁸ × 1.5 × 10⁻⁶ ÷ 2 = 150 m.'],
['Give three reasons why an MCB may trip repeatedly.','A short circuit, an overload (too many loads or a faulty appliance), or an earth fault or leakage on circuits protected by RCBOs; also a faulty or loose connection heating the device.']]);

mod('cg303b','303·B Locating faults in circuits, cables, RCDs, earthing and motors, and reporting','303',
`<p><b>City & Guilds 2365 Level 3, Unit 303 (topic areas T3 to T6).</b> This lesson applies the fault-finding method to the commonest faults: ring and lighting circuits, cables and insulation, RCD tripping, earthing problems and motor control faults, and ends with rectification, testing and reporting.</p>
<h3>T3: Circuit and Cable Faults</h3>
<p><b>Ring final circuits.</b> For 2.5 mm² line and neutral with a 1.5 mm² CPC, approximate resistances at 20 degrees are 7.41 mΩ per metre (2.5 mm²) and 12.1 mΩ per metre (1.5 mm²). For a 60 m ring: r1 = rn = 60 × 7.41 = 0.445 Ω and r2 = 60 × 12.1 = 0.726 Ω. (The end-to-end value of the CPC r2 is roughly 1.6 to 1.7 times r1.) After cross-connecting line and neutral, readings at every socket should be about (r1 + rn) ÷ 4 = 0.22 Ω; after cross-connecting line and CPC, about (r1 + r2) ÷ 4 = 0.29 Ω.</p>
${tbl(['Observation','Likely fault'],[
['End-to-end line, neutral or CPC reads open-circuit (infinite)','A break in that conductor. The ring may still work as two radial legs, which can overload the cable, so find and repair the break.'],
['End-to-end values are very different from expected','Wrong cable size or length, a joint with high resistance, or an interconnection'],
['Line-neutral readings at sockets are about the same around the ring','Ring is continuous with no spurs on the section tested'],
['One socket reads higher than the rest in the cross-connected test','A spur, a loose joint or high-resistance connection at that point'],
['Readings vary widely from socket to socket and do not follow the pattern','The ring may be interconnected with another circuit, or conductors may be crossed; trace each socket and each cable route']])}
<p><b>Lighting circuits.</b> <i>No light:</i> check the lamp, the holder, the switch, the supply to the rose, the neutral and the MCB. <i>Lamp lit but cannot be switched off:</i> switch in the wrong place or the switch wire connected to the permanent live. <i>Flickering:</i> loose connection, dimmer incompatible with LED lamps, or a failing driver. <i>MCB trips:</i> a short between line and neutral (or an earth fault if RCD-protected). <i>Switch in the neutral</i> (a fault in the wiring): the lamp is off but the lampholder is live, which is dangerous. <i>Two-way faults:</i> the lamp works from only one switch if one strapper is open-circuit or L1 and L2 are crossed (check COM, L1 and L2 at each switch).</p>
<p><b>Insulation resistance faults.</b> Disconnect equipment and test line to earth, neutral to earth and line to neutral separately to see which pair is low. Divide the circuit in sections (half-split) to find the damaged section. A reading below 1 MΩ fails; below about 2 MΩ should be investigated. Causes include moisture, mechanical damage, heat, and connected equipment (surge protection or electronic equipment gives misleading low readings if left connected).</p>
<p><b>Cable faults.</b> Open and short circuits on long or buried cables are located with a TDR or cable tracing equipment. For SWA cables, test the armour continuity, and the insulation between cores and armour. Look for damage where cables pass through walls, glands, near fixings, and where excavations have taken place.</p>
<h3>T4: RCD, Earthing and Protection Faults</h3>
<p><b>RCD tripping.</b> Establish the pattern first. <i>Trips immediately and will not reset:</i> a hard earth fault; disconnect circuits and appliances one at a time until it resets. <i>Trips at intervals or in damp weather:</i> leakage to earth; test insulation (line and neutral to earth at 500 V) and check outdoor equipment and cables. <i>Trips when particular appliances run:</i> a faulty appliance; test it with a portable appliance tester or insulation tester. <i>Trips when several appliances run:</i> the total leakage of many electronic appliances adds up, and can exceed the 30 mA trip current; split the circuit onto separate RCBOs. <i>Neutral–earth faults</i> and <i>shared neutrals between RCD-protected circuits</i> make an RCD trip when load is applied because the load current takes a path other than through the RCD. Use a leakage clamp to measure the milliamps flowing in the CPC. Finally check the RCD itself with an RCD tester.</p>
<p><b>Earthing faults.</b> A <b>high Zs</b> is caused by a loose or damaged CPC, a high-resistance joint, wrong cable size or length, or a poor supply earth; compare R1 + R2 with the cable’s expected resistance. On a <b>TT</b> installation, corrosion of the earth electrode or dry soil raises the electrode resistance. On a <b>PME (TN-C-S)</b> supply, an <b>open-circuit PEN</b> conductor in the network is dangerous: exposed metalwork and bonded services can rise to a dangerous voltage. Warning signs include tingling from taps or metalwork and flickering lights; stop work, make safe, and inform the network operator immediately.<br>
<b>Protective devices:</b> check the rating is correct, that nuisance tripping is not caused by a type B device on a motor start (use type C or D), and that the device has not been replaced by a larger one.</p>
<h3>T5: Motor and Control Faults</h3>
<p><b>Power circuit.</b> <i>Overload relay trips:</i> mechanical overload (seized bearing, blocked fan, jammed machine), single-phasing, low supply voltage, motor winding fault, or a wrongly set overload (it should match the nameplate full-load current). Use a clamp meter on each phase: balanced currents should be within a few per cent of each other and within the nameplate current. <i>Motor hums but does not start:</i> single-phasing (a phase missing at the supply, contactor or motor terminals) or a mechanical jam. <i>Wrong direction:</i> phase sequence; swap any two lines. <i>Motor overheats:</i> overload, blocked ventilation, high ambient temperature, harmonics from a drive, or insulation failure. <i>Windings:</i> test each winding to earth at 500 V (readings of at least 1 MΩ) and compare winding resistances, which should be equal to within a few per cent.<br>
<b>Control circuit.</b> <i>Contactor will not pull in:</i> check the control supply, stop button (NC), overload contact (NC), interlocks and coil resistance (an open coil reads infinity). <i>Contactor chatters:</i> low control voltage, loose control connection, or a weak or dirty contact. <i>Starts but drops out when the start button is released:</i> the hold-in (auxiliary) contact is open or wired wrongly. Use the circuit diagram and test with the supply isolated where possible; use the half-split method along the control rung.</p>
<h3>T6: Rectification, Testing and Reporting</h3>
<p>Repair or replace the faulty part using the right material, make the connections properly and restore insulation and enclosure integrity. After rectification <b>re-test</b> the circuit (continuity, insulation resistance, polarity, Zs and RCD tests as appropriate) and check that it works properly under load. Look for the <b>root cause</b> so that the fault does not return (for example, why did the cable overheat?). Record: client and location, symptoms, tests and results, the cause found, the repair made, tests after repair, and recommendations. Use a <b>Minor Electrical Installation Works Certificate</b> if the repair involved altering the installation. Report other defects found to the client, with a code for urgency (C1 danger present, C2 potentially dangerous, C3 improvement recommended, FI further investigation), and if a danger remains, make it safe and disconnect.</p>
${note('<b>Worked scenario:</b> a 30 mA RCD protecting the kitchen circuits trips when the dishwasher and tumble dryer run together but not separately. Each appliance leaks about 18 mA in normal use, so together they exceed 30 mA. The installation is not faulty; the cure is to separate the loads on their own RCBOs, or to check whether either appliance has a leakage fault.')}`,
[],
[
Q('T3','A 60 m ring using 2.5 mm² cable has an end-to-end line resistance of about…','0.44 Ω (7.41 mΩ per metre × 60 m)',['4.4 Ω','0.044 Ω','44 Ω']),
Q('T3','Cross-connecting line and neutral at the consumer unit, the reading at each socket should be about…','(r1 + rn) ÷ 4',['r1 + rn','r1 × rn','(r1 − rn)']),
Q('T3','If the line conductor of a ring final circuit reads open-circuit end to end, the circuit…','may still work as two radial legs but there is a break to find and repair',['must be completely dead','is perfect','has a short circuit']),
Q('T3','One socket reading higher than the others in the ring cross-connection test suggests…','a spur or a loose or high-resistance connection at that socket',['a perfect ring','a blown lamp','a fault in the meter']),
Q('T3','A lamp is off but the lampholder remains live. The likely fault is…','the switch is in the neutral conductor',['the lamp is too bright','the cable is too large','the CPC is open']),
Q('T3','A lamp that works from only one of two two-way switches suggests…','an open-circuit strapper or crossed L1 and L2',['a faulty lamp','a high supply voltage','a short circuit']),
Q('T3','Flickering LED lighting on a dimmer is often caused by…','an incompatible dimmer or a failing driver',['a high earth resistance','a large cable','an RCD fault']),
Q('T3','A low insulation resistance reading is traced by…','testing line-earth, neutral-earth and line-neutral separately and sectioning the circuit',['replacing the consumer unit','repainting the walls','testing only the lamp']),
Q('T3','An insulation resistance reading of 0.3 MΩ on a 230 V circuit is…','a fail and the fault must be found',['acceptable','excellent','a reading for DC only']),
Q('T3','Low insulation readings can be misleading if…','surge protection or electronic equipment is left connected during the test',['the cable is too long','the earth is open','the test is repeated']),
Q('T3','A TDR is most useful for…','finding a fault on a long or buried cable',['measuring RCD trip time','measuring insulation of a lamp','checking phase sequence']),
Q('T3','Before testing SWA cable insulation you should…','isolate and prove dead and test between cores and between cores and armour',['test with the supply on','remove the armour','paint the sheath']),
Q('T3','The CPC end-to-end resistance of a 2.5/1.5 mm² ring is about… times r1.','1.6 to 1.7',['0.5','5','10']),
Q('T3','A short circuit between line and neutral will normally…','operate the MCB (overcurrent protection)',['operate only the RCD','have no effect','make the RCD more sensitive']),
Q('T3','A burnt terminal at a socket is most likely caused by…','a loose connection with high resistance',['low voltage','a bright lamp','a wide cable']),
Q('T3','A reading of 0.22 Ω at every socket on a ring cross-connected L-N indicates…','a continuous ring with no spurs on the section tested',['an open ring','a cross-connection','a short circuit']),
Q('T4','An RCD that trips immediately and will not reset suggests…','a hard earth fault',['low voltage','overheating of a lamp','a high Zs']),
Q('T4','An RCD that trips only when several appliances run together may indicate…','the combined leakage of the appliances exceeds the RCD rating',['a failed supply','an open neutral','a lamp fault']),
Q('T4','To avoid nuisance tripping on a circuit with high combined leakage, you can…','divide the loads over separate RCBOs',['fit a larger MCB','remove the RCD','bypass the RCD']),
Q('T4','A shared neutral between two RCD-protected circuits can cause…','the RCD to trip when load is applied',['the lamp to stay on','no effect','a lower Zs']),
Q('T4','A high earth fault loop impedance may be caused by…','a loose or damaged CPC or a high-resistance joint',['too many sockets','a large cable','a bright lamp']),
Q('T4','On a PME supply, an open-circuit PEN conductor in the network may…','raise exposed metalwork to a dangerous voltage',['have no effect','lower the supply voltage','reduce the loop impedance']),
Q('T4','If you suspect an open PEN you should…','stop work, make safe and inform the network operator',['carry on with the work','touch the metalwork to check','replace the lamp']),
Q('T4','Nuisance tripping of a type B MCB on a motor start is solved by…','using a type C or D device suited to the starting current',['using a smaller MCB','removing the earth','removing the overload relay']),
Q('T4','The earth electrode resistance in a TT system may rise because of…','corrosion or dry soil',['wet cables','large conductors','a high supply voltage']),
Q('T5','An overload relay should be set to…','the motor nameplate full-load current',['twice the full-load current','the starting current','zero']),
Q('T5','A three-phase motor that hums but will not start often has…','a missing phase (single-phasing) or a mechanical jam',['a high voltage','too many poles','a bright lamp']),
Q('T5','To reverse the direction of a three-phase motor…','swap any two of the three supply lines',['swap neutral and earth','reduce the voltage','change the frequency to 25 Hz']),
Q('T5','A motor starts but stops when the start button is released. The likely fault is…','the hold-in (auxiliary) contact is open or wrongly wired',['the motor is overloaded','the supply is too high','the cable is too thick']),
Q('T5','Winding insulation resistance of a motor tested at 500 V should be at least…','1 MΩ',['1 Ω','10 Ω','100 Ω']),
Q('T5','A contactor that chatters (rapidly clicks) may have…','low control voltage or a loose control connection',['too high a voltage','a large motor','a TT earth']),
Q('T6','After rectifying a fault you should…','re-test the circuit and record the findings',['restore the supply without testing','tell nobody','delete the old test results']),
Q('T6','If a repair alters an installation, the certificate used is…','a Minor Electrical Installation Works Certificate',['an EICR only','no certificate','a gas safety certificate']),
Q('T6','Code C1 on an inspection report means…','danger present and immediate remedial action required',['improvement recommended','satisfactory','no action needed']),
Q('T6','Finding the root cause after a repair is important because…','it prevents the same fault from recurring',['it costs more','it is not needed','it delays the job'])
],
[['A 60 m ring final circuit of 2.5 mm² line and neutral with a 1.5 mm² CPC is tested. State the expected r1, rn, r2 and the expected socket readings for the line-neutral and line-CPC cross-connection tests (7.41 and 12.1 mΩ per metre).','r1 = rn = 0.445 Ω; r2 = 0.726 Ω. Line-neutral at sockets ≈ (0.445 + 0.445) ÷ 4 = 0.22 Ω. Line-CPC ≈ (0.445 + 0.726) ÷ 4 = 0.29 Ω.'],
['Describe how you would find the cause of an RCD that trips when a washing machine runs.','Disconnect the appliance and see if the RCD holds; test the appliance and circuit insulation; use a leakage clamp; check for neutral-earth faults or shared neutrals; replace or repair the faulty part.'],
['A motor overload relay trips after a few minutes. List four checks.','Clamp meter readings on each phase, the nameplate current against the relay setting, supply voltage and balance, mechanical load and bearings, ventilation, winding insulation.'],
['Explain why a type B MCB may be unsuitable for a motor circuit.','The starting current (5 to 8 times full load) exceeds its instantaneous trip level and trips it; a type C or D device tolerates the starting surge.'],
['List the information you should record in a fault report.','Client and site, date, symptoms, tests made and results, cause found, repair carried out, tests after repair, recommendations and any remaining defects or danger.']]);
})();
