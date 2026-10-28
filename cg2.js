(function(){
// City & Guilds 2365 Level 2, Unit 202: Principles of electrical science. Plain-text maths only.
const {Q,tbl,mod,note}=CGH;

mod('cg202a','202·A Mathematics, units and mechanics','202',
`<p><b>City & Guilds 2365 Level 2, Unit 202, LO1 to LO3.</b> This lesson covers the number skills, SI units and mechanics that every electrical calculation relies on. In the 202 test you cannot use notes, so learn the formulas and practise until the steps are automatic.</p>
<h3>LO1: Mathematical Principles</h3>
<p><b>Order of operations (BODMAS):</b> Brackets, Orders (powers and roots), Division and Multiplication, Addition and Subtraction. So 3 + 4 × 2 = 11 (not 14), and (3 + 4) × 2 = 14.</p>
<p><b>Fractions, decimals and percentages.</b> 15% of 240 = 0.15 × 240 = 36. Efficiency 85% of 2,000 W input = 1,700 W output. A fraction such as 3/8 = 0.375 = 37.5%.</p>
<p><b>Ratio and proportion.</b> Share 50 in the ratio 3:2: total parts 5, one part 10, so 30 and 20. Direct proportion: double the length of a cable doubles its resistance. Inverse proportion: double the cross-sectional area halves the resistance.</p>
<p><b>Powers of ten and standard form.</b> 4,700 = 4.7 × 10³. 0.000 25 = 2.5 × 10⁻⁴. When multiplying, add the powers; when dividing, subtract them. Engineering notation uses powers that are multiples of 3 so they match the SI prefixes.</p>
<p><b>Transposition of formulae.</b> Whatever you do to one side you must do to the other. Examples:<br>
V = I × R. Divide both sides by I: R = V ÷ I. Divide both sides by R: I = V ÷ R.<br>
P = I² × R. Divide by R: I² = P ÷ R, so I = the square root of (P ÷ R).<br>
R = (resistivity × length) ÷ area. Multiply by area and divide by R: area = (resistivity × length) ÷ R.<br>
P = V² ÷ R. Multiply by R: V² = P × R, so V = the square root of (P × R).</p>
<p><b>Solving simple equations.</b> 2x + 5 = 17. Subtract 5: 2x = 12. Divide by 2: x = 6.</p>
<p><b>Geometry for electricians.</b> Rectangle area = length × width. Circle area = π × diameter² ÷ 4 (use π = 3.142). A cable of 10 mm diameter has a cross-sectional area of 3.142 × 100 ÷ 4 = 78.5 mm². Volume of a cylinder = area × length. <b>Pythagoras:</b> in a right-angled triangle the square on the longest side (hypotenuse) = sum of the squares on the other two sides, so a 3-4-5 triangle works and an impedance of resistance 30 Ω with reactance 40 Ω has an impedance of 50 Ω.</p>
<p><b>Graphs.</b> A straight-line graph has the form y = mx + c, where m is the slope (gradient) and c is where the line crosses the y-axis. Ohm's law gives a straight line through the origin when voltage is plotted against current for a constant resistor; the gradient equals the resistance.</p>
<h3>LO2: Units of Measurement</h3>
<p>The <b>SI (Systeme International)</b> base units include the metre (m), kilogram (kg), second (s), ampere (A) and kelvin (K). Other units are derived from them.</p>
${tbl(['Quantity','Symbol','Unit','Unit symbol'],[
['Length','l','metre','m'],['Mass','m','kilogram','kg'],['Time','t','second','s'],['Force','F','newton','N'],['Work or energy','W','joule','J'],['Power','P','watt','W'],['Electric charge','Q','coulomb','C'],['Current','I','ampere','A'],['Potential difference (voltage)','V','volt','V'],['Resistance','R','ohm','Ω'],['Resistivity','ρ (rho)','ohm metre','Ω m'],['Capacitance','C','farad','F'],['Inductance','L','henry','H'],['Magnetic flux','Φ (phi)','weber','Wb'],['Magnetic flux density','B','tesla','T'],['Frequency','f','hertz','Hz'],['Temperature','T','kelvin (or degree Celsius)','K (or C)']])}
<p><b>Prefixes:</b> tera (T) 10¹²; giga (G) 10⁹; <b>mega (M) 1,000,000</b>; <b>kilo (k) 1,000</b>; <b>milli (m) 0.001</b>; <b>micro (µ) 0.000 001</b>; nano (n) 10⁻⁹; pico (p) 10⁻¹².<br>
Examples: 2.5 kΩ = 2,500 Ω; 0.5 A = 500 mA; 50 µF = 0.000 05 F; 1 MW = 1,000,000 W; 1 mm² = 0.000 001 m² (1 × 10⁻⁶); 1 m² = 1,000,000 mm².<br>
<b>Energy:</b> 1 kWh = 1,000 W × 3,600 s = 3,600,000 J = 3.6 MJ. <b>Temperature:</b> kelvin = degree Celsius + 273.</p>
<h3>LO3: Mechanics: Force, Work, Energy and Power</h3>
<p><b>Mass and weight.</b> Mass (kg) is the amount of matter. Weight (N) is the force of gravity on it: <b>W = m × g</b>, with g = 9.81 m per second². A 20 kg mass weighs 196.2 N.<br>
<b>Force.</b> F = m × a. To accelerate 50 kg at 2 m per second² needs 100 N.<br>
<b>Work.</b> Work done = force × distance moved in the direction of the force. Lifting 30 kg through 4 m: force = 30 × 9.81 = 294.3 N, work = 294.3 × 4 = 1,177 J.<br>
<b>Energy.</b> Energy is the ability to do work and has the same unit (joule). Potential energy = m × g × h; kinetic energy = half × m × v². A 10 kg mass lifted 5 m has 10 × 9.81 × 5 = 490.5 J; a 10 kg mass moving at 4 m/s has 0.5 × 10 × 16 = 80 J. Energy cannot be created or destroyed, only converted from one form to another (electrical to heat, light, movement).<br>
<b>Power.</b> Power is the rate of doing work: P = W ÷ t. The 1,177 J of work done in 10 s is 117.7 W. For a body moving at constant speed, P = F × v.<br>
<b>Efficiency</b> = (output ÷ input) × 100%. A motor taking 2,000 W and delivering 1,700 W is 85% efficient. The "lost" 300 W becomes heat.</p>
<p><b>Torque and moments.</b> A turning force: torque = force × radius (N m). A force of 150 N on a spanner 0.4 m long gives 60 N m. For rotating machines: P = 2 × π × n × T ÷ 60, with n in revolutions per minute (rpm) and T in N m. A motor producing 20 N m at 1,500 rpm delivers 2 × 3.142 × 1,500 × 20 ÷ 60 = 3,142 W. A moment is force × perpendicular distance from the pivot.</p>
<p><b>Levers.</b> At balance, effort × effort arm = load × load arm. With a load of 400 N, load arm 0.3 m and effort arm 1.2 m, effort = 400 × 0.3 ÷ 1.2 = 100 N. <b>Mechanical advantage (MA)</b> = load ÷ effort = 4. <b>Velocity ratio (VR)</b> = distance moved by effort ÷ distance moved by load (for a pulley system it equals the number of rope sections supporting the load). <b>Efficiency</b> = MA ÷ VR × 100%. A pulley with VR 4 lifting 500 N with 150 N of effort has MA 3.33 and efficiency 83%.</p>
<p><b>Gears and belts.</b> Gear ratio = teeth on driven gear ÷ teeth on driver. A 20-tooth driver at 1,200 rpm driving a 60-tooth gear gives a speed of 1,200 × 20 ÷ 60 = 400 rpm (a 3:1 reduction, with the torque increased about three times). For belt drives the speeds are inversely proportional to the pulley diameters.</p>
<p><b>Friction</b> opposes motion; friction force = coefficient of friction × normal force. <b>Pressure</b> = force ÷ area (pascal, Pa = N per square metre).</p>
<h3>Heat and Electrical Energy</h3>
<p>Heat energy needed to warm a substance: <b>Q = m × c × change in temperature</b>. The specific heat capacity of water is about 4,180 J per kg per degree. To heat 2 kg of water from 20 to 100 degrees: Q = 2 × 4,180 × 80 = 668,800 J. A 3 kW element that is 100% efficient does this in 668,800 ÷ 3,000 = 223 seconds. A real heater takes longer because some heat is lost.</p>
${note('<b>Exam tip:</b> write the formula, substitute the numbers with their units, then calculate. Check that the answer is sensible and that the unit is correct.')}`,
[],
[
Q('LO1','Transposing V = I × R to make R the subject gives…','R = V ÷ I',['R = V × I','R = I ÷ V','R = V + I']),
Q('LO1','Transposing P = I² × R to make I the subject gives…','I = the square root of (P ÷ R)',['I = P × R','I = P ÷ R²','I = R ÷ P']),
Q('LO1','What is 15% of 240?','36',['15','24','360']),
Q('LO1','Sharing 50 in the ratio 3:2 gives…','30 and 20',['25 and 25','40 and 10','35 and 15']),
Q('LO1','4,700 in standard form is…','4.7 × 10³',['47 × 10²','0.47 × 10⁴','4.7 × 10⁴']),
Q('LO1','Using BODMAS, 3 + 4 × 2 equals…','11',['14','10','24']),
Q('LO1','The cross-sectional area of a round conductor of 10 mm diameter is about…','78.5 mm²',['31.4 mm²','314 mm²','10 mm²']),
Q('LO1','The solution to 2x + 5 = 17 is…','x = 6',['x = 11','x = 12','x = 5']),
Q('LO1','An impedance triangle has resistance 30 Ω and reactance 40 Ω. The impedance is…','50 Ω',['70 Ω','10 Ω','35 Ω']),
Q('LO1','If the length of a cable doubles but everything else stays the same, its resistance…','doubles',['halves','stays the same','quadruples']),
Q('LO2','The SI unit of power is the…','watt',['joule','newton','volt']),
Q('LO2','The SI unit of energy is the…','joule',['watt','newton','coulomb']),
Q('LO2','The SI unit of force is the…','newton',['joule','watt','pascal']),
Q('LO2','The SI unit of electric charge is the…','coulomb',['ampere','volt','farad']),
Q('LO2','The SI unit of capacitance is the…','farad',['henry','tesla','weber']),
Q('LO2','The SI unit of inductance is the…','henry',['farad','Ω','tesla']),
Q('LO2','The SI unit of magnetic flux density is the…','tesla',['weber','henry','hertz']),
Q('LO2','The prefix "kilo" means…','1,000',['100','0.001','1,000,000']),
Q('LO2','The prefix "milli" means…','one thousandth (0.001)',['one thousand','one millionth','one hundredth']),
Q('LO2','2.5 kΩ is equal to…','2,500 Ω',['250 Ω','25 Ω','25,000 Ω']),
Q('LO2','0.5 A is equal to…','500 mA',['50 mA','5 mA','5,000 mA']),
Q('LO2','One kilowatt-hour is equal to…','3.6 megajoules',['3.6 kilojoules','360 joules','36 megajoules']),
Q('LO2','50 µF (microfarads) is equal to…','0.000 05 F',['0.005 F','0.5 F','50,000 F']),
Q('LO2','1 mm² is equal to…','0.000 001 m²',['0.001 m²','0.01 m²','1,000 m²']),
Q('LO2','To convert degrees Celsius to kelvin…','add 273',['subtract 273','multiply by 273','divide by 273']),
Q('LO3','The weight of a 20 kg mass (g = 9.81 m per second²) is…','196.2 N',['20 N','2.04 N','19.6 kg']),
Q('LO3','Work done is calculated as…','force × distance moved in the direction of the force',['force ÷ distance','mass × speed','power ÷ time']),
Q('LO3','Lifting 30 kg through 4 m requires about…','1,177 J of work',['120 J','294 J','4,709 J']),
Q('LO3','Power is the…','rate of doing work',['total work done','force applied','distance travelled']),
Q('LO3','Work of 1,177 J done in 10 s represents a power of…','117.7 W',['11,770 W','1.18 W','1,177 W']),
Q('LO3','A motor takes 2,000 W and delivers 1,700 W. Its efficiency is…','85%',['15%','117%','1.18%']),
Q('LO3','A force of 150 N acts at the end of a 0.4 m spanner. The torque is…','60 N m',['375 N m','600 N m','6 N m']),
Q('LO3','A motor produces 20 N m at 1,500 rpm. Its power output is about…','3.14 kW',['30 kW','314 W','300 kW']),
Q('LO3','A 400 N load is balanced on a lever with a load arm of 0.3 m and an effort arm of 1.2 m. The effort needed is…','100 N',['1,600 N','400 N','25 N']),
Q('LO3','A 20-tooth driver gear at 1,200 rpm drives a 60-tooth gear. The driven gear speed is…','400 rpm',['3,600 rpm','1,200 rpm','40 rpm']),
Q('LO3','The potential energy of a 10 kg mass lifted 5 m is about…','490 J',['50 J','50 kJ','98 J']),
Q('LO3','The kinetic energy of a 10 kg mass moving at 4 m/s is…','80 J',['40 J','160 J','400 J']),
Q('LO3','Mechanical advantage is…','load ÷ effort',['effort ÷ load','distance × force','output × input']),
Q('LO3','A pulley system has a velocity ratio of 4. A load of 500 N is raised by an effort of 150 N. The efficiency is about…','83%',['30%','75%','120%']),
Q('LO3','The energy needed to heat 2 kg of water by 80 degrees (c = 4,180 J per kg per degree) is about…','669 kJ',['6.7 kJ','167 kJ','334 kJ']),
Q('LO3','A 3 kW heater that is 100% efficient heats the above water in about…','223 seconds',['2.2 seconds','22 minutes','2 hours']),
Q('LO3','Pressure is calculated as…','force ÷ area',['force × area','area ÷ force','mass × speed'])
],
[['Transpose P = V² ÷ R to make V the subject, then find V for P = 2,000 W and R = 26.45 Ω.','V² = P × R, so V = the square root of (P × R) = the square root of 52,900 = 230 V.'],
['Calculate the work done and the power when a 50 kg mass is lifted 6 m in 15 s (g = 9.81).','Force = 50 × 9.81 = 490.5 N. Work = 490.5 × 6 = 2,943 J. Power = 2,943 ÷ 15 = 196.2 W.'],
['A 15 kW motor delivers 12.9 kW of useful power. Calculate its efficiency.','Efficiency = 12.9 ÷ 15 × 100 = 86%.'],
['A driver gear with 24 teeth runs at 900 rpm and drives a gear with 72 teeth. Find the speed of the driven gear and the ratio.','Speed = 900 × 24 ÷ 72 = 300 rpm. Ratio 3:1 reduction.'],
['Explain the difference between mass and weight.','Mass is the quantity of matter in kg and is constant. Weight is the force of gravity on that mass in newtons, W = m × g, and changes with gravity.']]);

mod('cg202b','202·B Resistance, resistivity, voltage, current and power','202',
`<p><b>City & Guilds 2365 Level 2, Unit 202, LO4.</b> This is the largest part of the 202 test (15 of the 40 questions), so spend the most time on it. It covers Ohm's law, series and parallel circuits, resistivity, temperature effects, power, energy, cells and meters.</p>
<h3>Charge, Current, EMF and Potential Difference</h3>
<p><b>Charge</b> Q (coulomb). <b>Current</b> I (ampere) is the rate of flow of charge: <b>Q = I × t</b>. A current of 5 A flowing for 20 s moves 100 C. Conventional current flows from positive to negative; electrons flow the other way. <b>EMF (electromotive force)</b> is the voltage a source produces with no current flowing. <b>Potential difference (pd)</b> is the voltage measured across a component while current flows. Voltage is the "pressure" that pushes current round a circuit; resistance opposes current.</p>
<h3>Ohm's Law</h3>
<p><b>V = I × R</b>, so I = V ÷ R and R = V ÷ I. At constant temperature the current in a conductor is proportional to the pd across it. Examples: 230 V across 46 Ω gives 5 A; 12 V producing 0.5 A means R = 24 Ω; 2 A through 15 Ω gives 30 V.</p>
<h3>Series and Parallel Circuits</h3>
<p><b>Series:</b> one path. The same current flows through every component; the voltages add (V total = V1 + V2 + V3); the resistances add (R total = R1 + R2 + R3). Example: 10 + 20 + 30 Ω on 120 V gives R total 60 Ω, current 2 A, and drops of 20 V, 40 V and 60 V (total 120 V). If one component fails open, the whole circuit stops.<br>
<b>Parallel:</b> several paths. The same voltage appears across every branch; the currents add (I total = I1 + I2 + I3); the reciprocal of total resistance is the sum of the reciprocals: <b>1 ÷ R total = 1 ÷ R1 + 1 ÷ R2 + 1 ÷ R3</b>. For two resistors: R total = (R1 × R2) ÷ (R1 + R2). 12 Ω and 4 Ω gives 48 ÷ 16 = 3 Ω. Three equal 30 Ω resistors in parallel give 10 Ω. The total resistance is always smaller than the smallest branch. Domestic lighting and sockets are wired in parallel so each has the full supply voltage and one failing does not stop the others.</p>
<p><b>Series-parallel:</b> reduce the parallel part first, then add the series part. A 6 Ω resistor in series with 12 Ω and 4 Ω in parallel gives 6 + 3 = 9 Ω. On 24 V the current is 2.67 A.</p>
<p><b>Potential divider:</b> two resistors in series divide the voltage in proportion to their sizes. V out across R2 = V × R2 ÷ (R1 + R2). With 12 V across 1 kΩ and 3 kΩ, the pd across the 3 kΩ resistor is 12 × 3 ÷ 4 = 9 V.</p>
<p><b>Two identical lamps in series</b> on their rated supply each get half the voltage, so they glow dimly (about one quarter of rated power each).</p>
<h3>Resistivity</h3>
<p>The resistance of a conductor is <b>R = (resistivity × length) ÷ cross-sectional area</b>, or R = ρ × L ÷ A, with L in metres and A in square metres. Resistivity (ρ, Ω m) depends on the material: copper about 1.72 × 10⁻⁸, aluminium about 2.8 × 10⁻⁸, nichrome (heating wire) about 1.1 × 10⁻⁶.<br>
Example: 100 m of 1.5 mm² copper: R = 1.72 × 10⁻⁸ × 100 ÷ 1.5 × 10⁻⁶ = 1.15 Ω. Resistance increases with length and decreases as the area increases.</p>
<h3>Effect of Temperature</h3>
<p>For metals, resistance rises with temperature. <b>R at temperature t = R at 20 degrees × [1 + (temperature coefficient × temperature rise)]</b>. For copper the temperature coefficient is about 0.004 per degree. A conductor of 0.5 Ω at 20 degrees heated to 70 degrees has R = 0.5 × (1 + 0.004 × 50) = 0.6 Ω. Carbon, semiconductors and insulators have a <b>negative temperature coefficient</b>: their resistance falls as temperature rises (this is how an NTC thermistor works).</p>
<h3>Power and Energy</h3>
<p><b>P = V × I = I² × R = V² ÷ R</b> (watts). Examples: 230 V at 13 A = 2,990 W (about 3 kW); 5 A through 8 Ω = 5² × 8 = 200 W; 230 V across 52.9 Ω = 52,900 ÷ 52.9 = 1,000 W. A 3 kW, 230 V heater takes I = 3,000 ÷ 230 = 13 A, so a 13 A plug fuse is the right choice, and its resistance is 230² ÷ 3,000 = 17.6 Ω.<br>
<b>Energy</b> = power × time. In kilowatt-hours: kWh = kW × hours. A 3 kW heater for 4 hours uses 12 kWh; at 25 pence per kWh this costs 300 pence, or 3.00 pounds. The <b>heating effect</b> of current is I² × R × t joules, which is why a cable carrying too much current gets hot.</p>
<h3>Voltage Drop in Cables</h3>
<p>A cable has resistance, so there is a drop of V = I × R along its length. The current flows out and back, so use twice the route length for a two-core circuit. A 25 m run of 2.5 mm² copper carrying 16 A has a loop length of 50 m: R = 1.72 × 10⁻⁸ × 50 ÷ 2.5 × 10⁻⁶ = 0.344 Ω, so the drop is 16 × 0.344 = 5.5 V (2.4% of 230 V).</p>
<h3>Cells and Batteries</h3>
<p><b>Primary cells</b> (zinc-carbon, alkaline) cannot be recharged. <b>Secondary cells</b> (lead-acid, nickel-cadmium, lithium-ion) can. A lead-acid cell gives about 2 V; a car battery has six cells in series (12 V). <b>Cells in series</b> add their voltages (four 1.5 V cells give 6 V); <b>cells in parallel</b> give the same voltage with more current capacity. Capacity is in ampere-hours (Ah).<br>
Every source has <b>internal resistance (r)</b>. Terminal voltage = E − I × r. A 12 V battery with r = 0.1 Ω supplying 20 A gives 12 − 2 = 10 V at its terminals. This is why battery voltage falls when a starter motor draws a heavy current.</p>
<h3>Meters</h3>
<p>An <b>ammeter</b> is connected in <b>series</b> and has a very low resistance. A <b>voltmeter</b> is connected in <b>parallel</b> and has a very high resistance. A <b>shunt</b> (a low-value resistor in parallel) extends an ammeter range; a <b>multiplier</b> (a high-value resistor in series) extends a voltmeter range. An ohmmeter measures resistance on a dead circuit only. A wattmeter measures true power. An insulation resistance tester applies a high DC voltage (for example 500 V) to measure insulation.</p>
${note('<b>Common mistakes:</b> forgetting to convert mm² to m²; using one-way instead of loop length for voltage drop; adding parallel resistances instead of reciprocals; mixing up kW and W.')}`,
['serpar'],
[
Q('LO4','A 230 V supply across a 46 Ω resistor gives a current of…','5 A',['10 A','0.2 A','46 A']),
Q('LO4','A circuit passes 0.5 A at 12 V. The resistance is…','24 Ω',['6 Ω','0.04 Ω','12.5 Ω']),
Q('LO4','2 A flowing through 15 Ω produces a potential difference of…','30 V',['7.5 V','17 V','0.13 V']),
Q('LO4','Three resistors of 10, 20 and 30 Ω in series have a total resistance of…','60 Ω',['5.45 Ω','6 Ω','20 Ω']),
Q('LO4','12 Ω and 4 Ω in parallel have a total resistance of…','3 Ω',['16 Ω','8 Ω','48 Ω']),
Q('LO4','Three 30 Ω resistors in parallel give…','10 Ω',['90 Ω','30 Ω','3.3 Ω']),
Q('LO4','The total resistance of resistors in parallel is always…','less than the smallest resistor',['greater than the largest resistor','equal to the average','equal to the sum']),
Q('LO4','In a series circuit the…','current is the same through all components',['voltage is the same across all components','power is the same in all components','resistance is divided']),
Q('LO4','In a parallel circuit the…','voltage is the same across every branch',['current is the same in every branch','resistance is the same in every branch','power is always zero']),
Q('LO4','A 120 V supply feeds 10, 20 and 30 Ω in series. The current is…','2 A',['12 A','0.5 A','6 A']),
Q('LO4','A 6 Ω resistor in series with 12 Ω and 4 Ω in parallel has a total resistance of…','9 Ω',['22 Ω','1.5 Ω','3 Ω']),
Q('LO4','12 V is applied across 1 kΩ and 3 kΩ in series. The pd across the 3 kΩ resistor is…','9 V',['3 V','4 V','6 V']),
Q('LO4','Two identical 230 V lamps are wired in series across 230 V. Each lamp has…','half the voltage and is dim',['the full voltage','twice the voltage','no voltage']),
Q('LO4','Charge moved by 5 A flowing for 20 seconds is…','100 C',['4 C','25 C','0.25 C']),
Q('LO4','The unit of resistivity is…','Ω metre',['Ω per metre','Ω','siemens']),
Q('LO4','The resistance of 100 m of 1.5 mm² copper (resistivity 1.72 × 10⁻⁸ Ω metre) is about…','1.15 Ω',['11.5 Ω','0.115 Ω','115 Ω']),
Q('LO4','Doubling the cross-sectional area of a conductor will…','halve its resistance',['double its resistance','have no effect','quadruple its resistance']),
Q('LO4','Copper has…','a positive temperature coefficient: resistance rises with temperature',['a negative temperature coefficient','zero temperature coefficient','resistance that falls when heated']),
Q('LO4','A 0.5 Ω copper conductor at 20 degrees is heated to 70 degrees (coefficient 0.004 per degree). Its resistance is…','0.6 Ω',['0.4 Ω','0.7 Ω','0.5 Ω']),
Q('LO4','Which material has a negative temperature coefficient?','Carbon',['Copper','Aluminium','Nichrome']),
Q('LO4','The power taken by a 230 V appliance drawing 13 A is about…','3 kW',['300 W','30 kW','17.7 W']),
Q('LO4','5 A flowing through 8 Ω dissipates…','200 W',['40 W','320 W','1.6 W']),
Q('LO4','A 3 kW, 230 V heater draws a current of about…','13 A',['0.13 A','76.7 A','690 A']),
Q('LO4','A 3 kW heater used for 4 hours consumes…','12 kWh',['0.75 kWh','7 kWh','120 kWh']),
Q('LO4','At 25 pence per kWh, 12 kWh costs…','3.00 pounds',['0.30 pounds','30 pounds','0.03 pounds']),
Q('LO4','The heating effect of a current is proportional to…','current² × resistance × time',['voltage × time only','resistance only','current only']),
Q('LO4','A 25 m run of 2.5 mm² copper twin cable carries 16 A. The voltage drop is about…','5.5 V',['0.55 V','55 V','2 V']),
Q('LO4','Four 1.5 V cells in series give…','6 V',['1.5 V','0.375 V','9 V']),
Q('LO4','Cells connected in parallel give…','the same voltage with greater current capacity',['the sum of the voltages','zero voltage','a lower voltage']),
Q('LO4','A battery of 12 V and internal resistance 0.1 Ω delivers 20 A. Its terminal voltage is…','10 V',['12 V','14 V','2 V']),
Q('LO4','A nominal lead-acid cell has a voltage of about…','2 V',['1.5 V','6 V','12 V']),
Q('LO4','An ammeter is connected…','in series with the circuit',['in parallel with the circuit','across the supply only','to earth']),
Q('LO4','A voltmeter is connected…','in parallel with the component',['in series with the load','only to a dead circuit','in the neutral only']),
Q('LO4','An ideal voltmeter has…','very high resistance',['very low resistance','zero resistance','resistance equal to the load']),
Q('LO4','A shunt resistor used to extend the range of an ammeter is connected…','in parallel with the meter',['in series with the meter','across the supply','to earth']),
Q('LO4','Ohm\'s law states that at constant temperature, the current in a conductor is…','proportional to the potential difference across it',['inversely proportional to voltage','independent of voltage','proportional to resistance']),
Q('LO4','A primary cell is one that…','cannot be recharged',['can be recharged many times','needs an external charger','has no electrolyte'])
],
[['Three resistors of 6, 12 and 4 Ω are connected as 6 Ω in series with the other two in parallel across 24 V. Calculate the total resistance and the current in each resistor.','Parallel part = 12 × 4 ÷ 16 = 3 Ω. Total = 9 Ω. Total current = 2.67 A. The pd across the parallel part = 2.67 × 3 = 8 V. Current in 12 Ω = 0.67 A; in 4 Ω = 2 A.'],
['Calculate the resistance of 50 m of 2.5 mm² copper conductor (resistivity 1.72 × 10⁻⁸ Ω metre).','R = 1.72 × 10⁻⁸ × 50 ÷ 2.5 × 10⁻⁶ = 0.344 Ω.'],
['A 2.2 kW kettle is on 230 V. Find the current, the resistance and the cost of using it for 6 minutes at 25 pence per kWh.','I = 2,200 ÷ 230 = 9.57 A. R = 230² ÷ 2,200 = 24 Ω. Energy = 2.2 × 0.1 = 0.22 kWh. Cost = 5.5 pence.'],
['A copper winding has a resistance of 20 Ω at 20 degrees. Find its resistance at 60 degrees (coefficient 0.004).','R = 20 × (1 + 0.004 × 40) = 20 × 1.16 = 23.2 Ω.'],
['Explain why the terminal voltage of a battery falls when it supplies a large current.','The internal resistance causes a voltage drop I × r inside the battery, so terminal voltage = E − I × r.']]);

mod('cg202c','202·C Magnetism, electromagnetism and electronic components','202',
`<p><b>City & Guilds 2365 Level 2, Unit 202, LO5 and LO6.</b> This lesson covers magnetism and its uses, electromagnetic induction, transformers, AC basics and the common electronic components, including the resistor colour code.</p>
<h3>LO5: Magnetism and Electricity</h3>
<h3>Magnetic Fields</h3>
<p>Like poles repel; unlike poles attract. Magnetic lines of force leave the north pole and enter the south pole, forming closed loops. <b>Magnetic flux</b> (phi) is measured in <b>webers (Wb)</b>. <b>Flux density</b> B is the flux per unit area, in <b>tesla (T)</b>: B = flux ÷ area. If 0.002 Wb passes through 0.01 square metres, B = 0.2 T.<br>
A current-carrying conductor has a circular magnetic field around it. Its direction is given by the <b>right-hand grip (corkscrew) rule</b>: with the thumb along the current, the fingers curl in the direction of the field. A coil (solenoid) behaves like a bar magnet, and its field is stronger with more turns, more current or an iron core.<br>
<b>Magnetic materials.</b> Soft iron is easy to magnetise and demagnetise, so it is used for electromagnet and transformer cores. Steel and alloys such as Alnico keep their magnetism (high retentivity) and are used for permanent magnets. Non-magnetic materials such as copper and aluminium do not concentrate flux.<br>
<b>Uses of electromagnetism:</b> relays, contactors, door bells, solenoid valves, lifting magnets, loudspeakers, motors and generators.</p>
<h3>Motor and Generator Action</h3>
<p><b>Force on a conductor.</b> A conductor carrying current in a magnetic field experiences a force: <b>F = B × I × L</b> (newtons) when it is at right angles to the field. With B = 0.5 T, I = 10 A and L = 0.2 m, F = 1 N. The direction is given by <b>Fleming's left-hand rule</b> (motors): the <b>F</b>irst finger is the <b>F</b>ield, the se<b>C</b>ond finger the <b>C</b>urrent, and the thu<b>M</b>b the <b>M</b>otion (force).</p>
<p><b>Induced EMF.</b> If a conductor cuts magnetic flux, an EMF is induced. For a straight conductor moving at right angles: <b>e = B × L × v</b>. With B = 0.8 T, L = 0.5 m and v = 10 m/s, e = 4 V. The direction is given by <b>Fleming's right-hand rule</b> (generators). <b>Faraday's law:</b> the induced EMF is proportional to the rate of change of flux linkage: e = N × (change in flux ÷ time). With 200 turns and a flux change of 0.005 Wb in 0.1 s, e = 10 V. <b>Lenz's law:</b> the induced EMF acts in a direction that opposes the change producing it.</p>
<p><b>Self and mutual induction.</b> A coil opposes a change in its own current (self-inductance, in henry); when current in one coil induces an EMF in a neighbouring coil, this is mutual inductance, the principle of the transformer. Switching off an inductive load such as a relay coil produces a high back-EMF, which is why suppression diodes and arc suppressors are fitted.</p>
<h3>Transformers</h3>
<p>A transformer has primary and secondary windings on a laminated iron core. It works only with AC, because the changing flux induces the secondary EMF. <b>V1 ÷ V2 = N1 ÷ N2 = I2 ÷ I1</b>. A 230 V supply with 1,000 primary turns and 100 secondary turns gives 23 V. To supply 12 V from 230 V with 1,000 primary turns needs about 52 secondary turns. A step-down transformer has more turns on the primary; a step-up has more on the secondary.<br>
<b>Losses:</b> copper loss (I² × R in the windings, varies with load) and iron loss (hysteresis and eddy currents in the core, roughly constant). <b>Laminating</b> the core in thin insulated sheets cuts eddy currents. Efficiency = output ÷ input × 100%. Transformers are rated in kVA.</p>
<h3>Alternating Current Basics</h3>
<p>An alternator produces a sine wave as coils rotate in a magnetic field. <b>Frequency f = p × n ÷ 60</b> (p = pairs of poles, n = rpm); a 4-pole (2 pairs) machine at 1,500 rpm produces 50 Hz. The period T = 1 ÷ f (20 ms at 50 Hz). The <b>RMS value</b> is the equivalent heating value of DC: <b>RMS = 0.707 × peak</b>, so a 325 V peak is 230 V RMS. Average value over a half cycle = 0.637 × peak.<br>
<b>Inductive reactance</b> X(L) = 2 × π × f × L. For 0.2 H at 50 Hz it is 62.8 Ω. <b>Capacitive reactance</b> X(C) = 1 ÷ (2 × π × f × C). In a pure inductor the current <b>lags</b> the voltage by 90 degrees; in a pure capacitor it <b>leads</b> by 90 degrees (remember "ELI the ICE man"). In a resistor they are in phase.<br>
<b>Three-phase</b> supplies have three windings 120 degrees apart. In <b>star</b>, line voltage = √3 × phase voltage (400 V = 1.732 × 230 V) and line current = phase current. In <b>delta</b>, line voltage = phase voltage and line current = √3 × phase current.</p>
<h3>Effects of an Electric Current</h3>
<p>Heating (cookers, fuses), magnetic (relays, motors), chemical (batteries, electroplating, corrosion) and lighting effects. Heating and magnetic effects are used most in installation work.</p>
<h3>LO6: Electronic Components</h3>
<h3>Resistors and the Colour Code</h3>
<p>Resistors limit current and divide voltage. Types: carbon film, metal film, wire-wound (high power) and variable (potentiometer, rheostat). Special resistors: <b>LDR</b> (resistance falls in light), <b>thermistor</b> (NTC falls with temperature; PTC rises), <b>varistor</b> (resistance falls sharply at high voltage, used for surge protection).</p>
${tbl(['Colour','Digit','Multiplier','Tolerance'],[['Black','0','×1',''],['Brown','1','×10','1%'],['Red','2','×100','2%'],['Orange','3','×1,000',''],['Yellow','4','×10,000',''],['Green','5','×100,000',''],['Blue','6','×1,000,000',''],['Violet','7','',''],['Grey','8','',''],['White','9','',''],['Gold','','×0.1','5%'],['Silver','','×0.01','10%']])}
<p>The first two bands give the digits, the third the multiplier, the fourth the tolerance. <b>Red, red, brown, gold</b> = 22 × 10 = 220 Ω ±5%. <b>Yellow, violet, red, gold</b> = 47 × 100 = 4.7 kΩ ±5%. <b>Brown, black, orange, silver</b> = 10 × 1,000 = 10 kΩ ±10%. A resistor must also have a power rating higher than the power it dissipates (P = I² × R).</p>
<h3>Capacitors</h3>
<p>A capacitor stores charge on two plates separated by a dielectric. <b>C = Q ÷ V</b>, in farads (usually microfarads). <b>Parallel:</b> capacitances add. <b>Series:</b> 1 ÷ C total = 1 ÷ C1 + 1 ÷ C2. Energy stored = half × C × V²; a 1,000 µF capacitor at 25 V stores 0.5 × 0.001 × 625 = 0.3125 J. The <b>time constant</b> is <b>tau = R × C</b>: a capacitor charges to about 63% of the supply in one time constant and is virtually full after 5 time constants. A 10 kΩ resistor with 100 µF gives tau = 1 s, full charge after about 5 s. Electrolytic capacitors are polarised and must be connected the right way round; ceramic and film capacitors are not. Uses: smoothing, timing, power factor correction, motor starting, filtering and tuning.</p>
<h3>Inductors</h3>
<p>Coils such as chokes oppose changes in current. Uses: fluorescent lamp chokes, filters, relays, transformers and motors.</p>
<h3>Diodes</h3>
<p>A diode conducts in one direction only (forward-biased, anode positive); it blocks in the reverse direction. A silicon diode drops about <b>0.7 V</b> when conducting. A <b>light-emitting diode (LED)</b> needs a series resistor: R = (supply voltage − LED voltage) ÷ current. For a 12 V supply, a 2 V LED and 20 mA: R = 10 ÷ 0.02 = 500 Ω (use the nearest standard value, 470 or 560 Ω). A <b>Zener diode</b> conducts in reverse at its breakdown voltage and is used for voltage reference and regulation.<br>
<b>Rectification:</b> half-wave uses one diode (one pulse per cycle); full-wave bridge uses four diodes (two pulses per cycle, so 100 Hz ripple from a 50 Hz supply). A smoothing capacitor reduces the ripple, and a regulator then gives a steady DC output.</p>
<h3>Transistors, Thyristors and Triacs</h3>
<p>A <b>transistor</b> (NPN or PNP) has a base, collector and emitter. A small base current controls a larger collector current, so it can amplify or act as an electronic switch. A relay driven by a transistor needs a flywheel diode across its coil. A <b>thyristor (SCR)</b> is a controlled rectifier: a gate pulse turns it on and it stays on until the current falls to zero. A <b>triac</b> controls both halves of an AC wave, as in light dimmers. An <b>optocoupler</b> isolates control circuits from power circuits using light.</p>
<p>Take care of static: handle sensitive devices by their bodies, use anti-static precautions, and observe polarity. Check diodes with a multimeter diode range, and check resistors out of circuit.</p>`,
['rect','dcmachine'],
[
Q('LO5','The SI unit of magnetic flux is the…','weber',['tesla','henry','farad']),
Q('LO5','The SI unit of flux density is the…','tesla',['weber','henry','ampere']),
Q('LO5','Fleming\'s left-hand rule is used to find the direction of…','force on a current-carrying conductor (motor action)',['induced EMF in a generator','flux in a transformer','current in a capacitor']),
Q('LO5','Fleming\'s right-hand rule is used for…','the direction of induced EMF (generator action)',['motor force','capacitor charge','magnetic saturation']),
Q('LO5','The force on a 0.2 m conductor carrying 10 A at right angles to a field of 0.5 T is…','1 N',['100 N','10 N','0.1 N']),
Q('LO5','A conductor 0.5 m long moves at 10 m/s at right angles to a field of 0.8 T. The induced EMF is…','4 V',['40 V','0.4 V','8 V']),
Q('LO5','Lenz\'s law states that the induced EMF…','acts to oppose the change that produces it',['aids the change that produces it','is always zero','is always DC']),
Q('LO5','A transformer has 1,000 primary turns and 100 secondary turns on 230 V. The secondary voltage is…','23 V',['2,300 V','230 V','10 V']),
Q('LO5','Laminating a transformer core reduces…','eddy current loss',['copper loss','secondary voltage','frequency']),
Q('LO5','Soft iron is used for transformer cores because…','it magnetises and demagnetises easily',['it keeps its magnetism permanently','it is a poor magnetic material','it is a good insulator']),
Q('LO5','A 4-pole alternator running at 1,500 rpm produces a frequency of…','50 Hz',['25 Hz','100 Hz','60 Hz']),
Q('LO5','A sine wave with a peak of 325 V has an RMS value of about…','230 V',['460 V','163 V','325 V']),
Q('LO5','In a purely inductive AC circuit, the current…','lags the voltage by 90 degrees',['leads the voltage by 90 degrees','is in phase with the voltage','is zero']),
Q('LO5','In a purely capacitive AC circuit, the current…','leads the voltage by 90 degrees',['lags the voltage by 90 degrees','is in phase with the voltage','is zero']),
Q('LO5','The inductive reactance of a 0.2 H coil at 50 Hz is about…','62.8 Ω',['10 Ω','628 Ω','6.28 Ω']),
Q('LO5','Windings in a three-phase generator are displaced by…','120 degrees',['90 degrees','180 degrees','60 degrees']),
Q('LO5','In a star connection the line voltage is…','√3 times the phase voltage',['equal to the phase voltage','half the phase voltage','three times the phase voltage']),
Q('LO5','A transformer will only work on…','alternating current, because a changing flux is needed',['direct current only','both AC and DC equally','pulsed light']),
Q('LO5','The direction of the magnetic field around a straight current-carrying conductor is found with…','the right-hand grip (corkscrew) rule',['Ohm\'s law','Kirchhoff\'s law','Lenz\'s law only']),
Q('LO5','Electroplating is an example of which effect of current?','chemical',['magnetic','heating','lighting']),
Q('LO6','A resistor coloured red, red, brown, gold has a value of…','220 Ω ±5%',['22 Ω ±5%','2.2 kΩ ±10%','221 Ω ±1%']),
Q('LO6','A resistor coloured yellow, violet, red, gold has a value of…','4.7 kΩ ±5%',['470 Ω ±5%','47 kΩ ±5%','4.7 Ω ±5%']),
Q('LO6','A resistor coloured brown, black, orange, silver has a value of…','10 kΩ ±10%',['100 Ω ±5%','103 Ω ±10%','1 kΩ ±10%']),
Q('LO6','A diode conducts when it is…','forward-biased',['reverse-biased','open-circuit','overheated']),
Q('LO6','The forward voltage drop of a silicon diode is about…','0.7 V',['7 V','0.07 V','2.3 V']),
Q('LO6','A 12 V supply drives a 2 V, 20 mA LED. The series resistor is…','500 Ω',['50 Ω','5 kΩ','10 Ω']),
Q('LO6','Capacitors connected in parallel have a total capacitance that…','is the sum of the individual values',['is less than the smallest','is the product of the values','is zero']),
Q('LO6','The time constant of a 10 kΩ resistor and a 100 µF capacitor is…','1 second',['1 millisecond','1,000 seconds','10 seconds']),
Q('LO6','A full-wave bridge rectifier uses…','four diodes',['one diode','two thyristors','six diodes']),
Q('LO6','A thyristor is turned on by…','a pulse at its gate',['a reverse voltage','an LDR','heat only']),
Q('LO6','A component whose resistance falls when light falls on it is a…','light-dependent resistor (LDR)',['varistor','Zener diode','choke']),
Q('LO6','An electrolytic capacitor must be…','connected with the correct polarity',['connected in either direction','used only on AC','used without a resistor']),
Q('LO6','A Zener diode is mainly used for…','voltage reference and regulation',['rectifying AC','amplifying signals','storing charge']),
Q('LO6','The energy stored in a 1,000 µF capacitor charged to 25 V is…','0.3125 J',['31.25 J','3.125 J','0.025 J']),
Q('LO6','A transistor can be used as a switch because…','a small base current controls a larger collector current',['it has no resistance','it blocks DC','it has no base'])
],
[['Draw and label the colour bands for a 4.7 kΩ ±5% resistor.','Yellow, violet, red, gold: 4 and 7 then times 100, tolerance 5%.'],
['A transformer has 2,300 primary turns on 230 V and 120 secondary turns. Calculate the secondary voltage and, for a 5 A secondary load, the primary current.','Vs = 230 × 120 ÷ 2,300 = 12 V. Ip = 5 × 120 ÷ 2,300 = 0.26 A.'],
['State Fleming\'s left-hand rule and one use for it.','First finger = field, second finger = current, thumb = motion (force). It gives the direction of force on a conductor, so it is used for motors.'],
['Calculate the capacitor charging time constant for 47 kΩ and 22 µF and state when it is effectively fully charged.','tau = 47,000 × 0.000022 = 1.03 s. Fully charged after about 5 time constants, about 5 s.'],
['Explain how a bridge rectifier and a smoothing capacitor produce DC from AC.','Four diodes steer both half-cycles of the AC in the same direction through the load, giving pulses at twice the supply frequency; a capacitor charges on each peak and discharges between peaks, smoothing the output.']]);
})();
