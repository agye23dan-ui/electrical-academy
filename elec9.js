(function(){
// Certificate Two depth expansion (part 2): e2e-e2h. Plain-text maths only.
const Q=(q,c,w)=>[q,[c,...w],0,'Answer: '+c];
const add=(id,n,q,w)=>{const m=Z.mods.find(x=>x.id==id);if(!m)return;m.n+=n;m.q=m.q.concat(q);m.w=(m.w||[]).concat(w)};

add('e2e',
`<h3>Resistor Colour Code</h3><p>Colours: black 0, brown 1, red 2, orange 3, yellow 4, green 5, blue 6, violet 7, grey 8, white 9. The first two bands are digits, the third is the multiplier, and the fourth is tolerance (gold 5%, silver 10%). <b>Brown, black, red, gold</b> = 10 × 100 = 1,000 Ω (1 kΩ) ±5%. <b>Yellow, violet, orange</b> = 47 × 1,000 = 47 kΩ. Resistor power rating must exceed the power dissipated: P = I²R.</p>
<h3>Diodes, Transistors and Thyristors</h3><p>• <b>Diode</b>: conducts one way only (about 0.7 V drop for silicon). An LED needs a series resistor: R = (Vsupply − VLED) ÷ I. For a 12 V supply, 2 V LED and 20 mA: R = 10 ÷ 0.02 = <b>500 Ω</b>.<br>• <b>Transistor (BJT)</b>: a small base current controls a larger collector current; used as a switch (fully on or off) or an amplifier. A relay driven by a transistor needs a flywheel diode across the coil to absorb the back-EMF.<br>• <b>Thyristor (SCR)</b>: a latching switch triggered by a gate pulse; stays on until current falls to zero. Used in rectifiers, dimmers and motor controllers. A <b>triac</b> controls both halves of an AC wave.<br>• Always observe polarity of electrolytic capacitors and diodes to avoid damage.</p>
<h3>Boolean Algebra and Binary</h3><p>Basic laws: A + 0 = A, A · 1 = A, A + A' = 1, A · A' = 0, A + A = A, A · A = A. De Morgan: (A · B)' = A' + B' and (A + B)' = A' · B'. NAND and NOR are <b>universal gates</b> because any logic function can be built from either. Binary place values are 1, 2, 4, 8, 16, so 1011 in binary = 8 + 2 + 1 = <b>11</b>. Decimal 13 = 8 + 4 + 1 = <b>1101</b> in binary.</p>
<h3>Maximum Demand and Diversity</h3><p>Not all loads run together, so the <b>maximum demand</b> is less than the connected load. Maximum demand = connected load × diversity factor. Example: 40 kW connected with a diversity of 0.6 gives 24 kW. Current on a 400 V three-phase supply at pf 0.9 = 24,000 ÷ (1.732 × 400 × 0.9) = <b>38.5 A</b>. Using diversity avoids oversizing cables and boards, but too little allowance leads to overload.</p>
<h3>Trade Calculations</h3><p>Area of a rectangle = L × W; volume of a trench = L × W × D; circle circumference = π × d. Cost estimates include materials, labour, wastage (usually 5-10%) and profit. A 30 m cable run needs about 10% extra for terminations and mistakes. Percentage = part ÷ whole × 100.</p>`,
[Q('A resistor coloured brown, black, red, gold is…','1 kΩ ±5%',['10 Ω ±5%','100 kΩ ±10%','12 Ω ±1%']),
Q('A resistor coloured yellow, violet, orange is…','47 kΩ',['470 Ω','4.7 kΩ','47 Ω']),
Q('The silver tolerance band on a resistor means…','±10%',['±5%','±1%','±20%']),
Q('A 12 V supply drives a 2 V, 20 mA LED. The series resistor should be…','500 Ω',['50 Ω','5 kΩ','10 Ω']),
Q('A flywheel diode across a relay coil protects the transistor from…','back-EMF when the coil is switched off',['overheating of the supply','low current gain','static electricity']),
Q('A thyristor, once triggered, turns off when…','the current falls to zero (below holding current)',['the gate voltage is removed','the supply frequency is doubled','another thyristor is fitted']),
Q('Which gate is called a universal gate?','NAND',['AND','OR','NOT only']),
Q('Binary 1011 in decimal is…','11',['13','9','10']),
Q('Decimal 13 in binary is…','1101',['1011','1110','1001']),
Q('A + A\' in Boolean algebra equals…','1',['0','A','2A']),
Q('A connected load of 40 kW with a diversity factor of 0.6 gives a maximum demand of…','24 kW',['40 kW','66.7 kW','16 kW']),
Q('Wastage allowance on a cable estimate is normally…','5 to 10%',['0%','50%','100%'])],
[['Write the colour code of a 2.2 kΩ ±5% resistor.','Red, red, red, gold.'],
['Explain how a transistor is used as a switch.','A small base current drives the transistor fully on (saturation), allowing a large collector current to flow through the load. With no base current it is off.'],
['A workshop has 60 kW connected and a diversity factor of 0.7. Find the maximum demand current on 400 V three-phase at 0.85 power factor.','MD = 60 x 0.7 = 42 kW. I = 42,000 / (1.732 x 400 x 0.85) = 71.3 A.'],
['State De Morgan\'s theorem.','The inverse of an AND is the OR of the inverted inputs, and the inverse of an OR is the AND of the inverted inputs: (A.B)\' = A\' + B\' and (A+B)\' = A\'.B\'.']]);

add('e2f',
`<h3>Drawing Standards and Paper Sizes</h3><p>Paper sizes follow the A series: <b>A4 = 210 × 297 mm</b>, A3 = 297 × 420 mm, A2 = 420 × 594 mm, A1 = 594 × 841 mm, A0 = 841 × 1189 mm (1 m²). Each size is half the area of the one above. Every drawing has a <b>title block</b> showing project, drawing number, scale, date, drawn by, checked by and <b>revision</b>. Line types: thick continuous for outlines, thin continuous for dimensions, dashed for hidden detail, and chain-dotted for centre lines.</p>
<h3>Scale Calculations</h3><p>Real length = drawing length × scale number. A 45 mm line on a 1:50 drawing is 45 × 50 = 2,250 mm = <b>2.25 m</b>. To draw a 12 m wall at 1:200: 12,000 ÷ 200 = <b>60 mm</b>. Use a scale rule rather than guessing. When a drawing is photocopied to a different size the scale is no longer correct, so always read the dimensions written on the plan first.</p>
<h3>Types of Electrical Drawing</h3><p>• <b>Layout (installation) drawing</b>: where equipment and cable routes go on the building plan.<br>• <b>Circuit or schematic diagram</b>: how the circuit works, with components in logical order.<br>• <b>Wiring diagram</b>: terminal-to-terminal connections of equipment.<br>• <b>Ladder diagram</b>: control circuits drawn between two vertical lines (supply rails) with each rung showing one control path.<br>• <b>Block diagram</b>: simplified functional parts.<br>• <b>As-built (record) drawing</b>: updated at the end of the job to show what was actually installed. It is handed to the client with test certificates.</p>
<h3>Control Circuit Drawing Practice</h3><p>Draw power circuits and control circuits separately. Label contactors K1, K2, overloads F, and terminals with matching numbers on both drawing and equipment. In a ladder diagram, normally closed stop contacts are placed first in the rung, start contacts are in parallel with the hold-in contact, and the coil is on the right end. Always draw contacts in the <b>de-energised</b> state. Cables are identified with ferrules, and a cable schedule lists size, length, type and route.</p>`,
[Q('The dimensions of A4 paper are…','210 × 297 mm',['297 × 420 mm','148 × 210 mm','420 × 594 mm']),
Q('Which paper size is 297 × 420 mm?','A3',['A4','A2','A1']),
Q('A 45 mm line on a 1:50 drawing represents a real length of…','2.25 m',['0.9 m','22.5 m','2.25 mm']),
Q('A 12 m wall drawn at 1:200 measures…','60 mm',['600 mm','6 mm','2.4 m']),
Q('A dashed line on a drawing normally shows…','hidden detail',['the outline of the building','a centre line','the dimension line']),
Q('The title block of a drawing includes…','drawing number, scale, date and revision',['only the electrician\'s name','cable prices','the client\'s bank details']),
Q('A drawing that shows how a control circuit works with rungs between supply rails is a…','ladder diagram',['layout drawing','site plan','block diagram']),
Q('An as-built drawing shows…','what was actually installed at the end of the job',['what was planned at tender','the cost estimate','the contractor\'s timetable']),
Q('In a ladder diagram contacts are drawn in the…','de-energised state',['energised state','the running state','the overload state']),
Q('In a motor control rung, the stop button (NC) is placed…','in series, first in the rung',['in parallel with the coil','after the coil','in the power circuit only']),
Q('A cable schedule lists…','cable size, type, length and route',['the bank loan','lamp colours','customer complaints']),
Q('After a drawing is enlarged or reduced on a photocopier you should…','use the written dimensions, because the scale is no longer correct',['trust the printed scale','assume nothing has changed','discard the dimensions'])],
[['Convert a measurement of 62 mm on a 1:100 drawing to a real length.','62 x 100 = 6,200 mm = 6.2 m.'],
['List five items found in a drawing title block.','Project name, drawing number, scale, date, drawn by, checked by, revision.'],
['Explain the difference between a schematic diagram and a wiring diagram.','A schematic shows how the circuit works with components arranged logically; a wiring diagram shows actual terminal-to-terminal connections of equipment.'],
['State the purpose of an as-built drawing.','To record the actual installation, including changes made during construction, for the client and future maintenance.']]);

add('e2g',
`<h3>DC Motor Principles and Back-EMF</h3><p>When an armature rotates it generates a <b>back-EMF (Eb)</b> that opposes the supply voltage. <b>Eb = V − Ia × Ra</b>. Example: supply 230 V, armature current 20 A, armature resistance 0.5 Ω: Eb = 230 − 10 = <b>220 V</b>. At standstill Eb is zero, so starting current = V ÷ Ra = 230 ÷ 0.5 = <b>460 A</b>, which would damage the machine, so a <b>starter</b> adds series resistance that is cut out as the motor accelerates.</p>
<h3>Torque and Speed Control</h3><p>Torque T is proportional to flux × armature current. Speed N is proportional to Eb ÷ flux, so: <b>weakening the field raises the speed</b>, armature resistance control lowers the speed, and lowering the armature voltage reduces speed with little loss of torque. A shunt motor is near-constant speed, a series motor has high starting torque but races dangerously without load, and a compound motor combines both. To reverse rotation, reverse <b>either</b> the armature connections <b>or</b> the field connections, never both.</p>
<h3>DC Starter and Protection</h3><p>The three-point starter has a handle that moves over resistance studs. It contains a <b>no-volt release coil</b> in series with the shunt field (holds the handle on) and an <b>overload release</b>. The field must be at full strength at start-up so the motor does not race, and open-circuiting the field of a running shunt motor makes it overspeed dangerously.</p>
<h3>Losses and Efficiency</h3><p>Losses are: <b>copper losses</b> (Ia²Ra in the armature and field), <b>iron losses</b> (hysteresis and eddy currents), <b>mechanical losses</b> (friction and windage) and brush contact loss. Efficiency = output ÷ input × 100%. A motor taking 5 kW and delivering 4.3 kW is 86% efficient. Interpoles and compensating windings reduce <b>armature reaction</b> and sparking.</p>
<h3>Maintenance and Testing</h3><p>Check brushes for wear (replace at the minimum length), spring pressure, commutator condition and cleanliness, and bearing noise. A commutator should be smooth and a polished brown colour; undercut the mica if it stands proud. Use a megger to check insulation of windings to frame, and a low-resistance ohmmeter to check armature winding continuity. Isolate and lock off before opening a machine.</p>`,
[Q('The back-EMF of a DC motor is calculated as…','Eb = V − Ia × Ra',['Eb = V + Ia × Ra','Eb = Ia ÷ Ra','Eb = V × Ia']),
Q('A motor on 230 V with Ia = 20 A and Ra = 0.5 Ω has a back-EMF of…','220 V',['240 V','10 V','230 V']),
Q('The starting current of the same motor with no starter (230 V, Ra = 0.5 Ω) would be…','460 A',['20 A','230 A','115 A']),
Q('The purpose of a DC motor starter is to…','limit starting current by adding series resistance',['increase the field current','reverse the rotation','reduce the iron losses']),
Q('Weakening the field of a DC shunt motor…','increases the speed',['reduces the speed to zero','reverses the rotation','has no effect']),
Q('To reverse a DC motor you should reverse…','either the armature connections or the field connections, not both',['both armature and field','the supply neutral','the earth lead only']),
Q('A DC series motor must never be run…','without a load (it will race dangerously)',['at full load','with a starter','with brushes fitted']),
Q('The no-volt release coil in a three-point starter is wired in series with the…','shunt field',['armature','supply neutral','earth']),
Q('Armature reaction and sparking are reduced by fitting…','interpoles (commutating poles)',['longer brushes','thicker frames','extra bearings']),
Q('A motor takes 5 kW and delivers 4.3 kW. Its efficiency is…','86%',['116%','43%','5%']),
Q('A healthy commutator surface should be…','smooth with a polished brown colour',['black and pitted','coated with oil','covered with copper dust']),
Q('Which test checks the insulation of motor windings to the frame?','insulation resistance (megger) test',['continuity test with a bell','oscilloscope test','speed test'])],
[['Calculate the back-EMF of a motor on 220 V with Ia = 15 A and Ra = 0.8 Ω.','Eb = 220 - 15 x 0.8 = 208 V.'],
['Why is a starter needed for a DC motor?','At standstill there is no back-EMF, so the starting current is V/Ra, which is very high. The starter limits this until the motor speeds up.'],
['State three methods of controlling the speed of a DC shunt motor.','Field weakening (raises speed), armature resistance (lowers speed), and armature voltage control.'],
['List maintenance checks for a DC machine commutator and brushes.','Check brush length and spring pressure, commutator smoothness and colour, mica undercut, cleanliness and sparking.']]);

add('e2h',
`<h3>Solar PV System Sizing Example</h3><p>A home uses 3 kWh a day. The site has 5 peak sun hours and system losses of 20% (wiring, temperature, dirt, inverter).<br>Array size = daily energy ÷ (peak sun hours × system efficiency) = 3 ÷ (5 × 0.8) = <b>0.75 kWp</b>. Using 400 W panels, that is 2 panels (0.8 kWp).<br>Battery: for 2 days autonomy, 3 × 2 = 6 kWh usable. With lead-acid limited to 50% depth of discharge, the nominal capacity is 6 ÷ 0.5 = <b>12 kWh</b>. At 48 V, that is 12,000 ÷ 48 = <b>250 Ah</b>. Lithium iron phosphate allows about 80-90% depth of discharge, so needs a smaller bank.</p>
<h3>Array Design: Strings and Ratings</h3><p>• Modules in <b>series</b> add voltage (current stays the same); in <b>parallel</b> add current (voltage stays the same).<br>• Example: 400 W module, Vmp = 40 V, Imp = 10 A. Four in series make 160 V and 10 A. Two such strings in parallel make 160 V and 20 A (3.2 kW).<br>• The coldest day gives the highest Voc, so the string Voc (corrected for low temperature) must stay below the maximum input voltage of the inverter or controller.<br>• Size cables and protection for <b>1.25 × Isc</b> (and a further 1.25 for continuous operation).<br>• STC (standard test conditions) are irradiance 1000 W/m², cell temperature 25°C and air mass 1.5, so field output is usually 75-85% of the rating.</p>
<h3>Installation Practice</h3><p>• Face modules towards the equator (south in the northern hemisphere); the tilt angle is about the site latitude, with at least 10° for self-cleaning near the equator, including Ghana.<br>• Avoid shading, since one shaded cell can reduce a whole string; bypass diodes limit the loss.<br>• Use UV-resistant, double-insulated solar cable (PV1-F), MC4-type connectors of the same make, and secure cables to avoid chafing.<br>• Use DC-rated isolators, fuses and surge protection devices; DC arcs do not extinguish at a zero crossing like AC arcs.<br>• Fit warning labels, a shutdown procedure, and a clearly marked AC and DC isolation point.</p>
<h3>Grid-Tied, Off-Grid and Hybrid Systems</h3><p>• <b>Grid-tied</b>: inverter synchronised with the utility; anti-islanding shuts it off when the grid fails. Excess energy can be exported under net metering rules.<br>• <b>Off-grid</b>: battery-based, with a charge controller and inverter, sized for all-day and night loads.<br>• <b>Hybrid</b>: grid-tied with battery backup, so critical loads stay on during outages.</p>
<h3>Maintenance</h3><p>Clean modules with water and a soft brush, inspect connectors for heat damage, record string voltages and currents, check battery terminals and water levels (flooded types), and keep inverters ventilated. Performance logs help find underperforming strings.</p>`,
[Q('A home uses 3 kWh a day with 5 sun hours and 80% system efficiency. The array size needed is about…','0.75 kWp',['3 kWp','15 kWp','0.15 kWp']),
Q('For 6 kWh usable energy from lead-acid at 50% depth of discharge, the nominal battery capacity is…','12 kWh',['3 kWh','6 kWh','24 kWh']),
Q('A 12 kWh battery at 48 V has a capacity of…','250 Ah',['576 Ah','25 Ah','2,500 Ah']),
Q('Modules connected in series give…','higher voltage with the same current',['higher current with the same voltage','lower voltage','no output']),
Q('Four 40 V, 10 A modules in series have a string output of…','160 V at 10 A',['40 V at 40 A','160 V at 40 A','10 V at 160 A']),
Q('The highest open-circuit voltage of a string occurs on…','the coldest day',['the hottest day','a night with no sun','a day with heavy cloud']),
Q('Conductor and protective device ratings in PV circuits are commonly based on…','1.25 × Isc',['0.5 × Isc','Voc','Vmp']),
Q('Standard test conditions (STC) for PV modules include an irradiance of…','1000 W/m²',['100 W/m²','10,000 W/m²','500 W/m²']),
Q('DC arcs are more dangerous than AC arcs because…','DC has no zero crossing to extinguish the arc',['DC has a higher frequency','DC voltage is always higher','DC cables are shorter']),
Q('Modules in Ghana should be tilted at least…','about 10° so rain washes the dust off',['90° vertical','0° flat','45° only'] ),
Q('Anti-islanding in a grid-tied inverter means…','it shuts down when the grid supply fails',['it keeps supplying the street','it stores energy at night','it reverses polarity']),
Q('Which system keeps critical loads running during a power cut and also connects to the grid?','hybrid',['grid-tied without battery','a standalone torch','a generator-only system'])],
[['Size a PV array for a load of 4.5 kWh/day with 5 peak sun hours and 75% system efficiency.','Array = 4.5 / (5 x 0.75) = 1.2 kWp, which is 3 x 400 W panels.'],
['Explain why a DC isolator must be DC-rated.','DC arcs do not self-extinguish at a zero crossing, so a switch designed only for AC may not break the arc and can burn or cause fire.'],
['State the effect of shading one module in a string and how it is reduced.','It cuts the current of the whole string. Bypass diodes let current flow around the shaded cells, and correct siting avoids shade.'],
['Describe the differences between grid-tied, off-grid and hybrid systems.','Grid-tied exports to the utility and shuts down when the grid fails; off-grid uses batteries and is independent; hybrid is grid-tied with battery backup.']]);
})();
