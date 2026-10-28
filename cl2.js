(function(){
// City & Guilds 2365 Level 3, Unit 302: Principles of electrical science. Plain-text maths; typographic apostrophes only.
const {Q,tbl,note}=CGH, mod=CGH.mod3;

mod('cg302a','302·A AC theory: waveforms, phasors, R-L-C circuits, resonance and power','302',
`<p><b>City & Guilds 2365 Level 3, Unit 302 (topic areas T1 to T3).</b> This lesson covers alternating current in detail: waveform values, phasor diagrams, series and parallel R-L-C circuits, resonance, and power and power factor. Calculation practice is essential: work every example yourself before reading the answer.</p>
<h3>T1: AC Waveforms and Phasors</h3>
<p><b>The sine wave.</b> An alternating voltage can be written <b>e = Em × sin(ωt)</b>, where Em is the peak value and <b>ω = 2πf</b> is the angular frequency in radians per second. At 50 Hz, ω = 314.2 rad/s. Example: for a 325 V peak supply, at t = 2 ms, ωt = 314.16 × 0.002 = 0.628 rad = 36 degrees, so e = 325 × sin 36 = 325 × 0.588 = 191 V.<br>
<b>Standard values (sine wave):</b> RMS = 0.707 × peak; average over a half cycle = 0.637 × peak; <b>form factor</b> = RMS ÷ average = 1.11; <b>peak (crest) factor</b> = peak ÷ RMS = 1.414. The RMS value is the DC value that would produce the same heating, which is why 230 V RMS has a peak of 325 V. An oscilloscope shows peak-to-peak and period: 4 divisions at 50 V per division is 200 V peak-to-peak (100 V peak, 70.7 V RMS), and 5 divisions at 2 ms per division is a 10 ms period, so f = 100 Hz.</p>
<p><b>Phase angle.</b> Two waves of the same frequency can be displaced in time. If i = 5 sin(ωt − 30°) and v = 100 sin(ωt), the current <b>lags</b> the voltage by 30 degrees. A positive angle means leading.</p>
<p><b>Phasors.</b> A phasor is a rotating arrow whose length is the (RMS or peak) value and whose angle is the phase. Phasors are added like vectors: draw to scale tip-to-tail, or resolve into horizontal and vertical components. Example: v1 = 100 sin(ωt) and v2 = 60 sin(ωt + 90°). Horizontal component 100, vertical 60, so the resultant is √(100² + 60²) = 116.6 V at an angle of tan⁻¹(60 ÷ 100) = 31.0 degrees leading v1.</p>
<h3>T2: R-L-C Circuits and Resonance</h3>
<p><b>Reactance.</b> Inductive reactance X(L) = 2πfL (ohms). Capacitive reactance X(C) = 1 ÷ (2πfC). In a resistor the current is in phase with the voltage; in an inductor the current <b>lags</b> by 90 degrees; in a capacitor the current <b>leads</b> by 90 degrees (ELI the ICE man).</p>
<p><b>Series R-L.</b> Z = √(R² + X(L)²); the current lags the supply voltage by φ = tan⁻¹(X ÷ R); power factor cos φ = R ÷ Z. Example: R = 30 Ω, L = 0.1 H, 230 V, 50 Hz. X(L) = 2π × 50 × 0.1 = 31.42 Ω. Z = √(30² + 31.42²) = 43.44 Ω. I = 230 ÷ 43.44 = 5.29 A. φ = tan⁻¹(31.42 ÷ 30) = 46.3 degrees lagging. cos φ = 30 ÷ 43.44 = 0.69. Voltage across R = 5.29 × 30 = 158.9 V; across L = 5.29 × 31.42 = 166.4 V; these add as phasors (√(158.9² + 166.4²) = 230 V), not arithmetically.</p>
<p><b>Series R-C.</b> Example: R = 100 Ω, C = 20 µF, 230 V, 50 Hz. X(C) = 1 ÷ (2π × 50 × 20 × 10⁻⁶) = 159.2 Ω. Z = √(100² + 159.2²) = 188.0 Ω. I = 230 ÷ 188.0 = 1.22 A leading by tan⁻¹(159.2 ÷ 100) = 57.9 degrees. cos φ = 100 ÷ 188.0 = 0.53.</p>
<p><b>Series R-L-C.</b> The net reactance is X = X(L) − X(C), and Z = √(R² + X²). Example: R = 40 Ω, X(L) = 100 Ω, X(C) = 70 Ω: X = 30 Ω, Z = √(1,600 + 900) = 50 Ω. On 230 V, I = 4.6 A, lagging by tan⁻¹(30 ÷ 40) = 36.9 degrees, cos φ = 0.8.</p>
<p><b>Parallel circuits.</b> The voltage is common, and the branch currents add as phasors. Example: R = 40 Ω in parallel with X(L) = 30 Ω on 120 V: I(R) = 3 A, I(L) = 4 A (lagging by 90 degrees). Total I = √(3² + 4²) = 5 A, lagging by tan⁻¹(4 ÷ 3) = 53.1 degrees, so cos φ = 0.6 and Z = 120 ÷ 5 = 24 Ω. Another: R = 100 Ω in parallel with C = 20 µF on 230 V, 50 Hz: I(R) = 2.3 A, I(C) = 230 ÷ 159.2 = 1.445 A, I = √(2.3² + 1.445²) = 2.72 A leading by 32.1 degrees.</p>
<p><b>Series resonance.</b> When X(L) = X(C), the reactances cancel and Z = R, the minimum value. The current is a maximum and is in phase with the voltage. <b>f0 = 1 ÷ (2π√(LC))</b>. Example: L = 50 mH, C = 20 µF: f0 = 1 ÷ (2π × √(0.05 × 20 × 10⁻⁶)) = 1 ÷ (2π × 0.001) = 159.2 Hz. At resonance X(L) = 2π × 159.2 × 0.05 = 50 Ω. The <b>quality factor Q = X(L) ÷ R</b>: with R = 10 Ω, Q = 5. The voltages across L and C are each Q times the supply voltage (10 V supply gives 50 V across each), which is the voltage magnification of a series resonant circuit. The <b>bandwidth</b> = f0 ÷ Q = 31.8 Hz. <b>Parallel resonance</b> (a coil in parallel with a capacitor) occurs at about the same frequency for a high-Q circuit; the impedance is a <b>maximum</b> and the supply current a minimum. Uses: radio tuning, filters.</p>
<h3>T3: Power and Power Factor</h3>
<p>In an AC circuit: <b>true (real) power P = V × I × cos φ</b> (watts); <b>apparent power S = V × I</b> (volt-amperes); <b>reactive power Q = V × I × sin φ</b> (vars). The power triangle gives S² = P² + Q² and power factor = P ÷ S = cos φ. For the series R-L example above: S = 230 × 5.29 = 1,217 VA; P = 1,217 × 0.69 = 841 W (check: I² × R = 5.29² × 30 = 841 W); Q = 1,217 × sin 46.3° = 880 var. Only the resistance dissipates real power.</p>
<p><b>Why power factor matters.</b> For the same real power a low power factor means a higher current, larger cables, bigger transformers and more I²R losses; suppliers may penalise low power factor for large consumers. Inductive loads (motors, transformers, chokes) have a <b>lagging</b> power factor.<br>
<b>Correction with capacitors in parallel.</b> Required kVAr = P × (tan φ1 − tan φ2), and the capacitance needed on a single-phase supply is C = Q(C) ÷ (2πfV²). Example: 841 W at pf 0.69 corrected to 0.95: tan φ1 = 1.047 (from 31.42 ÷ 30), tan φ2 = 0.329. Q(C) = 841 × (1.047 − 0.329) = 604 var. C = 604 ÷ (2π × 50 × 230²) = 36.4 µF. Over-correction gives a leading power factor.</p>
<p><b>Harmonics.</b> Non-linear loads (switch-mode supplies, LED drivers, variable speed drives) draw non-sinusoidal currents that contain <b>harmonics</b>, whole-number multiples of the supply frequency. Third harmonic currents add in the neutral of a three-phase four-wire system instead of cancelling, so the neutral can carry as much current as, or more than, the lines; this affects cable sizing, and the neutral may need to be at least the size of the line conductors.</p>
${note('<b>Method for AC problems:</b> sketch the circuit, find the reactances, find Z, find I = V ÷ Z, find the phase angle, then check the answer with a phasor sketch or the power triangle.')}`,
[],
[
Q('T1','The angular frequency ω of a 50 Hz supply is…','314.2 rad/s',['50 rad/s','100 rad/s','3.14 rad/s']),
Q('T1','The RMS value of a sine wave with a peak of 325 V is about…','230 V',['460 V','163 V','325 V']),
Q('T1','The average value over a half cycle of a sine wave is…','0.637 × the peak value',['0.707 × the peak value','1.11 × the peak value','1.414 × the peak value']),
Q('T1','The form factor of a sine wave is…','1.11',['1.414','0.637','0.707']),
Q('T1','The peak (crest) factor of a sine wave is…','1.414',['1.11','0.637','0.5']),
Q('T1','For e = 325 sin(ωt) at 50 Hz, the instantaneous voltage at t = 2 ms is about…','191 V',['325 V','230 V','0 V']),
Q('T1','If i = 5 sin(ωt − 30°) and v = 100 sin(ωt), the current…','lags the voltage by 30 degrees',['leads the voltage by 30 degrees','is in phase with the voltage','lags by 90 degrees']),
Q('T1','Two voltages 100 V and 60 V are 90 degrees apart. Their phasor sum is about…','116.6 V',['160 V','40 V','80 V']),
Q('T1','An oscilloscope shows 4 divisions peak-to-peak at 50 V per division. The RMS value is about…','70.7 V',['200 V','100 V','141 V']),
Q('T1','A trace has a period of 5 divisions at 2 ms per division. The frequency is…','100 Hz',['10 Hz','500 Hz','5 Hz']),
Q('T2','In a purely inductive circuit the current…','lags the voltage by 90 degrees',['leads the voltage by 90 degrees','is in phase with the voltage','is zero']),
Q('T2','In a purely capacitive circuit the current…','leads the voltage by 90 degrees',['lags the voltage by 90 degrees','is in phase with the voltage','is zero']),
Q('T2','The inductive reactance of 0.1 H at 50 Hz is about…','31.4 Ω',['5 Ω','314 Ω','3.14 Ω']),
Q('T2','The capacitive reactance of 20 µF at 50 Hz is about…','159 Ω',['6.3 Ω','1,590 Ω','15.9 Ω']),
Q('T2','A series circuit has R = 30 Ω and X(L) = 31.42 Ω. The impedance is about…','43.4 Ω',['61.4 Ω','1.4 Ω','30 Ω']),
Q('T2','That circuit on 230 V draws a current of about…','5.3 A',['7.7 A','0.2 A','53 A']),
Q('T2','The power factor of the same circuit is about…','0.69',['0.96','0.31','1.0']),
Q('T2','A series circuit has R = 40 Ω, X(L) = 100 Ω and X(C) = 70 Ω. The impedance is…','50 Ω',['170 Ω','110 Ω','30 Ω']),
Q('T2','A 40 Ω resistor in parallel with an inductive reactance of 30 Ω on 120 V draws a total current of…','5 A',['7 A','1 A','3.5 A']),
Q('T2','The resonant frequency of a series L-C circuit is…','1 ÷ (2π√(LC))',['2π√(LC)','√(LC) ÷ 2π','1 ÷ (LC)']),
Q('T2','The resonant frequency of 50 mH and 20 µF is about…','159 Hz',['50 Hz','1,590 Hz','15.9 Hz']),
Q('T2','At series resonance the impedance is…','a minimum, equal to R',['a maximum','infinite','zero']),
Q('T2','At series resonance the current is…','a maximum and in phase with the voltage',['a minimum','leading by 90 degrees','lagging by 90 degrees']),
Q('T2','The quality factor of a series resonant circuit with X(L) = 50 Ω and R = 10 Ω is…','5',['0.2','500','50']),
Q('T2','At parallel resonance the circuit impedance is…','a maximum',['a minimum','zero','equal to R']),
Q('T2','A 100 Ω resistor in series with 20 µF at 230 V and 50 Hz has a power factor of about…','0.53 leading',['0.85 lagging','1.0','0.53 lagging']),
Q('T3','True power in an AC circuit is calculated as…','V × I × cos φ',['V × I × sin φ','V ÷ I','I × R ÷ V']),
Q('T3','Apparent power is measured in…','volt-amperes (VA)',['watts','vars only','joules']),
Q('T3','Reactive power Q is calculated as…','V × I × sin φ',['V × I × cos φ','V × I','I squared × R']),
Q('T3','A load of 230 V and 5.29 A at a power factor of 0.69 takes real power of about…','841 W',['1,217 W','5.29 W','230 W']),
Q('T3','Power factor is defined as…','real power ÷ apparent power',['apparent power ÷ real power','V ÷ I','reactive ÷ real power']),
Q('T3','Power factor correction capacitors are connected…','in parallel with the load',['in series with the load','in the neutral only','to earth']),
Q('T3','The reactive power needed to correct 841 W from pf 0.69 to 0.95 is about…','604 var',['841 var','1,217 var','60 var']),
Q('T3','The capacitor for that correction on 230 V, 50 Hz is about…','36 µF',['3.6 µF','360 µF','3,600 µF']),
Q('T3','A low lagging power factor results in…','higher current for the same real power',['lower current','higher efficiency','no change']),
Q('T3','Third harmonic currents in a three-phase four-wire system…','add in the neutral conductor',['cancel in the neutral','flow only in the earth','disappear']),
Q('T3','Non-linear loads such as LED drivers and switch-mode supplies produce…','harmonic currents',['pure sine waves only','no current','DC only'])
],
[['A coil of resistance 12 Ω and inductance 0.05 H is connected to 230 V, 50 Hz. Calculate the impedance, current, phase angle and power factor.','X(L) = 2π × 50 × 0.05 = 15.71 Ω. Z = √(12² + 15.71²) = 19.77 Ω. I = 230 ÷ 19.77 = 11.63 A. φ = tan⁻¹(15.71 ÷ 12) = 52.6 degrees lagging. cos φ = 12 ÷ 19.77 = 0.61.'],
['Calculate the resonant frequency and Q factor of a series circuit with L = 0.2 H, C = 10 µF and R = 20 Ω.','f0 = 1 ÷ (2π√(0.2 × 10 × 10⁻⁶)) = 1 ÷ (2π × 0.001414) = 112.5 Hz. X(L) = 2π × 112.5 × 0.2 = 141.4 Ω. Q = 141.4 ÷ 20 = 7.07.'],
['A motor takes 12 A from 230 V at a power factor of 0.7 lagging. Calculate its real, apparent and reactive power.','S = 230 × 12 = 2,760 VA. P = 2,760 × 0.7 = 1,932 W. Q = 2,760 × sin(cos⁻¹ 0.7) = 2,760 × 0.714 = 1,971 var.'],
['Explain why a low power factor is undesirable.','It increases the current drawn for a given real power, causing larger voltage drop and I²R losses and needing bigger cables and equipment.'],
['Explain why a neutral conductor may need to be larger in an installation with many LED drivers.','Triplen (third) harmonic currents add in the neutral instead of cancelling, so the neutral current can equal or exceed the line current.']]);

mod('cg302b','302·B Three-phase systems, transformers and rotating machines','302',
`<p><b>City & Guilds 2365 Level 3, Unit 302 (topic areas T4 and T5).</b> This lesson covers three-phase relationships and power, transformers (EMF, losses, efficiency, regulation and fault level), induction motors, DC machines, alternators and three-phase power measurement.</p>
<h3>T4: Three-Phase Systems</h3>
<p>Three windings 120 degrees apart give three sinusoidal voltages of equal size. <b>Star:</b> V(L) = √3 × V(ph), I(L) = I(ph) (400 V = 1.732 × 230 V). <b>Delta:</b> V(L) = V(ph), I(L) = √3 × I(ph). For a balanced load, <b>P = √3 × V(L) × I(L) × cos φ</b>, S = √3 × V(L) × I(L), Q = √3 × V(L) × I(L) × sin φ. Example: 20 A at 400 V and power factor 0.8: P = 1.732 × 400 × 20 × 0.8 = 11.1 kW; S = 13.9 kVA.</p>
<p><b>Star versus delta load.</b> Three 20 Ω resistors on a 400 V supply: in <b>star</b> each has 400 ÷ √3 = 231 V, I = 11.55 A, P = 3 × 11.55² × 20 = 8.0 kW. In <b>delta</b> each has the full 400 V, I(ph) = 20 A, I(L) = 34.6 A, P = 3 × 20² × 20 = 24 kW, exactly <b>three times</b> the star power.</p>
<p><b>Unbalanced loads.</b> With unequal line currents the neutral carries the phasor sum: I(N) = √(I1² + I2² + I3² − I1I2 − I2I3 − I3I1) for resistive loads. With 10 A, 8 A and 6 A: √(100 + 64 + 36 − 80 − 48 − 60) = √12 = 3.46 A. A neutral broken in an unbalanced star system causes some phases to rise and others to fall in voltage, which is dangerous. Single-phase loads should be spread evenly across the phases.</p>
<p><b>Phase sequence</b> (L1-L2-L3 or reversed) decides the direction of rotation of a three-phase motor: swapping any two lines reverses it. A phase-sequence indicator confirms it.</p>
<p><b>Power measurement (two-wattmeter method).</b> Total power = W1 + W2. The power factor angle follows from tan φ = √3 × (W1 − W2) ÷ (W1 + W2). With W1 = 5 kW and W2 = 2 kW: P = 7 kW, tan φ = 1.732 × 3 ÷ 7 = 0.742, φ = 36.6 degrees, cos φ = 0.80.</p>
<h3>T5: Transformers</h3>
<p><b>EMF equation.</b> E = 4.44 × f × N × Φm (volts, RMS), with Φm the peak flux in webers. Example: 50 Hz, N = 500 turns, Φm = 2.5 mWb: E = 4.44 × 50 × 500 × 0.0025 = 277.5 V. The turns ratio gives V1 ÷ V2 = N1 ÷ N2 = I2 ÷ I1.<br>
<b>Losses.</b> <b>Iron (core) losses</b>, from hysteresis and eddy currents, are almost constant while the supply voltage and frequency are constant; they are measured by the <b>open-circuit test</b>. <b>Copper losses</b> are I²R in the windings and vary with the square of the load current; they are measured by the <b>short-circuit test</b>. <b>Efficiency</b> = output ÷ (output + iron loss + copper loss). Example: a 50 kVA transformer, full load at power factor 0.8, iron loss 400 W, full-load copper loss 700 W: output = 40 kW, losses = 1.1 kW, efficiency = 40 ÷ 41.1 = 97.3%. <b>Maximum efficiency</b> occurs when copper loss equals iron loss, at a load fraction of √(400 ÷ 700) = 0.756, or 37.8 kVA.<br>
<b>Voltage regulation</b> = (no-load voltage − full-load voltage) ÷ no-load voltage × 100%. If a secondary falls from 240 V to 230 V on load, the regulation is 4.2%.<br>
<b>Fault level.</b> A transformer of rating S and per-unit (percentage) impedance Z% limits the fault current. For a 500 kVA, 400 V transformer with 4% impedance: full-load current = 500,000 ÷ (1.732 × 400) = 722 A; maximum fault current = 722 ÷ 0.04 = 18.0 kA. This figure helps choose the breaking capacity of the switchgear.<br>
<b>Connections.</b> Distribution transformers are usually <b>delta-primary, star-secondary</b> (for example Dyn11), giving a neutral for 400/230 V. <b>Autotransformers</b> use one winding with a tap and give no electrical isolation. <b>Instrument transformers</b> (CTs and VTs) step current and voltage for meters and protection.</p>
<h3>Induction Motors</h3>
<p><b>Synchronous speed N(s) = 120 × f ÷ p</b> (p = number of poles). <b>Slip s = (N(s) − N) ÷ N(s)</b>. A 4-pole motor at 50 Hz has N(s) = 1,500 rpm; at 1,450 rpm the slip is 50 ÷ 1,500 = 3.33%. Rotor frequency = s × f = 1.67 Hz. Output power P = 2πNT ÷ 60, so an 11 kW motor at 1,450 rpm gives T = 11,000 ÷ 151.8 = 72.4 N m. Input power = √3 × V × I × cos φ. With 88% efficiency and cos φ = 0.85 on 400 V: input = 12.5 kW and the line current is 12,500 ÷ (1.732 × 400 × 0.85) = 21.2 A; losses are 1.5 kW.<br>
<b>Starting methods:</b> direct-on-line (starting current 5 to 8 times full load); <b>star-delta</b> (about one third of the DOL current and torque); autotransformer (reduced voltage); soft starter (thyristor ramp); variable speed drive (varies frequency and voltage, giving control of speed and full torque at low speed); rotor resistance starting for slip-ring machines. Protection: overload relay (set to the full-load current), short-circuit protection with a device that tolerates the starting current (for example type C or D MCB, or motor-rated fuses), and under-voltage release.</p>
<h3>DC Machines and Alternators</h3>
<p>A DC machine's generated EMF is proportional to flux and speed: E = kΦN. For a motor, <b>E(b) = V − I(a)R(a)</b> and torque is proportional to flux × armature current. Example: V = 230 V, I(a) = 40 A, R(a) = 0.3 Ω: E(b) = 218 V; mechanical power developed = 218 × 40 = 8,720 W; at 1,200 rpm, T = 8,720 ÷ 125.7 = 69.4 N m. Speed is proportional to E(b) ÷ Φ, so weakening the field raises the speed. A <b>shunt</b> motor has nearly constant speed; a <b>series</b> motor has very high starting torque but races without load; a <b>compound</b> motor combines the two. A starter limits the starting current.<br>
An <b>alternator</b> generates an EMF at f = p × n ÷ 60 (p = pole pairs, n = rpm). A 4-pole alternator at 1,500 rpm gives 50 Hz. Terminal voltage falls with load because of armature resistance and reactance.</p>`,
['dcmachine'],
[
Q('T4','In a star connection the line voltage is…','√3 times the phase voltage',['equal to the phase voltage','one third of the phase voltage','three times the phase voltage']),
Q('T4','In a delta connection the line current is…','√3 times the phase current',['equal to the phase current','one third of the phase current','half the phase current']),
Q('T4','The power in a balanced three-phase load is…','√3 × V(L) × I(L) × cos φ',['3 × V(L) × I(L)','V(L) × I(L) ÷ cos φ','√3 × V(ph) × I(L)']),
Q('T4','A three-phase load draws 20 A at 400 V and power factor 0.8. The real power is about…','11.1 kW',['13.9 kW','32 kW','6.4 kW']),
Q('T4','Three 20 Ω resistors on 400 V in star dissipate about…','8 kW',['24 kW','2.7 kW','4 kW']),
Q('T4','The same three resistors in delta dissipate…','three times the star power',['the same as star','one third of the star power','nine times the star power']),
Q('T4','The neutral current of line currents 10 A, 8 A and 6 A (resistive) is about…','3.5 A',['24 A','8 A','0 A']),
Q('T4','To reverse a three-phase motor you…','swap any two of the three lines',['swap the neutral and earth','reduce the voltage','add a capacitor']),
Q('T4','In the two-wattmeter method, total power is…','W1 + W2',['W1 − W2','W1 × W2','W1 ÷ W2']),
Q('T4','Readings of 5 kW and 2 kW in the two-wattmeter method give a total of…','7 kW',['3 kW','10 kW','2.5 kW']),
Q('T5','The transformer EMF equation is…','E = 4.44 × f × N × Φm',['E = f × N ÷ Φm','E = 2 × f × N','E = V ÷ I']),
Q('T5','A transformer has 500 turns, 50 Hz and peak flux 2.5 mWb. The EMF is about…','277.5 V',['27.75 V','2,775 V','55 V']),
Q('T5','Transformer iron losses are measured by…','the open-circuit test',['the short-circuit test','the insulation test','the earth test']),
Q('T5','Transformer copper losses are measured by…','the short-circuit test',['the open-circuit test','the polarity test','the earth loop test']),
Q('T5','Copper losses in a transformer vary with…','the square of the load current',['the supply frequency','nothing','the core size only']),
Q('T5','A transformer is most efficient when…','copper loss equals iron loss',['copper loss is zero','iron loss is zero','the load is zero']),
Q('T5','A 50 kVA transformer at full load and pf 0.8 has iron loss 400 W and copper loss 700 W. The efficiency is about…','97.3%',['89%','100%','80%']),
Q('T5','A secondary falling from 240 V to 230 V on load has a regulation of…','4.2%',['10%','0.4%','24%']),
Q('T5','A 500 kVA, 400 V transformer with 4% impedance has a maximum fault current of about…','18 kA',['722 A','180 A','1.8 kA']),
Q('T5','A distribution transformer that provides a neutral is usually connected…','delta primary and star secondary',['star primary and delta secondary','delta to delta','star to star with no earth']),
Q('T5','The synchronous speed of a 4-pole motor on 50 Hz is…','1,500 rpm',['3,000 rpm','1,000 rpm','750 rpm']),
Q('T5','A 4-pole motor running at 1,450 rpm on 50 Hz has a slip of…','3.33%',['5%','1.45%','33%']),
Q('T5','Star-delta starting reduces the starting current to about…','one third of the DOL value',['double the DOL value','one tenth of the DOL value','the same as DOL']),
Q('T5','An 11 kW motor at 88% efficiency, 400 V and pf 0.85 draws a current of about…','21 A',['32 A','11 A','63 A']),
Q('T5','A DC motor on 230 V with 40 A armature current and 0.3 Ω armature resistance has a back-EMF of…','218 V',['242 V','230 V','12 V']),
Q('T5','Weakening the field of a DC shunt motor…','increases its speed',['decreases its speed','stops it','reverses it']),
Q('T5','A DC series motor must never be run…','without a load, because it will overspeed',['with a load','on a starter','at low voltage']),
Q('T5','A 4-pole alternator at 1,500 rpm produces a frequency of…','50 Hz',['25 Hz','100 Hz','60 Hz'])
],
[['A 400 V three-phase motor takes 30 A at a power factor of 0.82. Calculate the real power and the apparent power.','S = 1.732 × 400 × 30 = 20.8 kVA. P = 20.8 × 0.82 = 17.0 kW.'],
['Calculate the efficiency of a transformer delivering 20 kW at full load, with iron loss 250 W and full-load copper loss 450 W.','Losses = 700 W. Efficiency = 20,000 ÷ 20,700 = 96.6%.'],
['A 6-pole induction motor runs at 960 rpm on 50 Hz. Find the synchronous speed and the slip.','N(s) = 120 × 50 ÷ 6 = 1,000 rpm. Slip = 40 ÷ 1,000 = 4%.'],
['Explain why star-delta starting reduces the starting current and what disadvantage it has.','In star each winding has 1 ÷ √3 of the line voltage, so the line current and torque fall to about one third. The disadvantage is a lower starting torque and a transition surge when it changes to delta.'],
['State the equation for the back-EMF of a DC motor and calculate it for V = 220 V, I(a) = 25 A and R(a) = 0.4 Ω.','E(b) = V − I(a) × R(a) = 220 − 10 = 210 V.']]);

mod('cg302c','302·C Capacitance, inductance, transients and magnetic circuits','302',
`<p><b>City & Guilds 2365 Level 3, Unit 302 (topic area T6).</b> This lesson covers the construction and calculation of capacitors and inductors, how they charge and discharge (time constants), magnetic circuits, and DC network calculations and measurement.</p>
<h3>Capacitance</h3>
<p><b>C = Q ÷ V</b> (farads). For a parallel-plate capacitor <b>C = ε0 × εr × A ÷ d</b>, with ε0 = 8.85 × 10⁻¹² F/m, εr the relative permittivity of the dielectric, A the plate area (m²) and d the separation (m). Example: A = 0.01 m², d = 0.5 mm, εr = 5: C = 8.85 × 10⁻¹² × 5 × 0.01 ÷ 0.0005 = 885 pF. <b>Parallel:</b> C total = C1 + C2 + …. <b>Series:</b> 1 ÷ C total = 1 ÷ C1 + 1 ÷ C2 + …, so two equal capacitors in series give half the capacitance. <b>Energy stored:</b> W = ½CV². A 100 µF capacitor charged to 50 V holds Q = 5 mC and W = 0.125 J.</p>
<h3>Charging and Discharging (Transients)</h3>
<p>When a capacitor charges through a resistor, the voltage rises exponentially. The <b>time constant τ = R × C</b> is the time for the voltage to reach 63.2% of the final value. Formulas: <b>charging v(C) = V × (1 − e^(−t ÷ τ))</b>; <b>discharging v(C) = V × e^(−t ÷ τ)</b>; the current falls as i = (V ÷ R) × e^(−t ÷ τ). After 2.3τ the capacitor is at 90%; after 5τ it is at 99.3%, regarded as fully charged. Example: R = 50 kΩ, C = 100 µF, so τ = 5 s. With a 12 V supply, at t = 5 s the voltage is 12 × 0.632 = 7.58 V; at t = 10 s it is 12 × 0.865 = 10.38 V; it takes about 11.5 s to reach 90% (10.8 V). Applications: timing circuits, smoothing, motor start and run capacitors, and power factor correction.</p>
<h3>Inductance</h3>
<p>An inductor opposes a change of current: the induced EMF <b>e = L × (change in current ÷ change in time)</b>. With L = 0.5 H and a current changing at 20 A/s, e = 10 V. <b>Energy stored: W = ½LI²</b>: 0.5 H at 4 A holds 4 J. For an inductor with resistance, the current rises as i = (V ÷ R) × (1 − e^(−t ÷ τ)) with <b>τ = L ÷ R</b>: for L = 2 H and R = 10 Ω, τ = 0.2 s. Switching off an inductive load too quickly produces a high back-EMF, which is why diodes and surge suppressors are fitted across relay coils and contactors. <b>Mutual inductance</b> couples two coils: <b>M = k × √(L1 × L2)</b>, where k (at most 1) is the coupling coefficient. With L1 = 0.2 H, L2 = 0.5 H and k = 0.8, M = 0.8 × 0.316 = 0.253 H.</p>
<h3>Magnetic Circuits</h3>
<p><b>Magnetomotive force (mmf) = N × I</b> (ampere-turns). <b>Magnetic field strength H = N × I ÷ l</b> (A/m). <b>Flux density B = μ0 × μr × H</b> (tesla), where μ0 = 4π × 10⁻⁷ H/m. <b>Flux Φ = B × A</b>. <b>Reluctance S = mmf ÷ Φ = l ÷ (μ0 × μr × A)</b>. Example: a ring with N = 500 turns, I = 2 A and mean length 0.4 m gives H = 500 × 2 ÷ 0.4 = 2,500 A/m. With a core of μr = 400: B = 4π × 10⁻⁷ × 400 × 2,500 = 1.26 T. If the area is 4 cm² (4 × 10⁻⁴ m²), Φ = 0.50 mWb and the reluctance = 1,000 ÷ 0.0005 = 2.0 × 10⁶ A/Wb. Real magnetic materials <b>saturate</b>: beyond a certain B, increasing H adds little flux. The <b>hysteresis loop</b> of a material shows that magnetisation lags the field; the loop area is the energy lost per cycle, so transformer cores use materials with narrow loops (soft iron, silicon steel) and are <b>laminated</b> to reduce eddy currents; permanent magnets use materials with wide loops.</p>
<h3>DC Network Calculations</h3>
<p><b>Kirchhoff's current law:</b> the sum of the currents entering a node equals the sum leaving it (5 A and 3 A in with 2 A out means the other current out is 6 A). <b>Kirchhoff's voltage law:</b> around any closed loop the sum of the EMFs equals the sum of the voltage drops. <b>Wheatstone bridge:</b> the bridge is balanced when R1 ÷ R2 = R3 ÷ R4, and the galvanometer reads zero. With R1 = 100 Ω, R2 = 200 Ω and R3 = 150 Ω, balance needs R4 = R2 × R3 ÷ R1 = 300 Ω. Bridges measure resistance accurately and, with a Murray or Varley loop, locate cable faults. <b>Cells:</b> E = V + I × r; cells in series add voltages and internal resistances; in parallel they share current.</p>
<h3>Measuring Instruments</h3>
<p><b>Moving-coil</b> meters read DC only and are accurate, with a linear scale; with a rectifier they read AC. <b>Moving-iron</b> meters read AC and DC (RMS, non-linear scale). A <b>shunt</b> (low-value resistor in parallel) extends an ammeter range; a <b>multiplier</b> (high-value resistor in series) extends a voltmeter range. A <b>dynamometer wattmeter</b> measures true power. A <b>clamp meter</b> measures current without breaking the circuit. An <b>oscilloscope</b> displays waveforms: peak-to-peak voltage from the vertical scale and period from the time base. Instrument errors arise from loading (a voltmeter draws current), range selection (read near the top of the scale), parallax and calibration drift.</p>
${note('<b>Exam tip:</b> know the time-constant percentages (63.2% at 1τ, 86.5% at 2τ, 95% at 3τ, 99.3% at 5τ) and the formulas for energy: ½CV² for a capacitor and ½LI² for an inductor.')}`,
[],
[
Q('T6','Capacitance is defined as…','C = Q ÷ V',['C = V ÷ Q','C = Q × V','C = I × R']),
Q('T6','Doubling the plate area of a capacitor will…','double the capacitance',['halve the capacitance','not change it','quadruple the voltage']),
Q('T6','Halving the plate separation will…','double the capacitance',['halve the capacitance','not change it','reduce the charge to zero']),
Q('T6','Two equal capacitors connected in series have a total capacitance of…','half of one capacitor',['twice one capacitor','the same as one','four times one capacitor']),
Q('T6','A 100 µF capacitor at 50 V holds a charge of…','5 mC',['5 C','0.5 mC','50 mC']),
Q('T6','The energy stored in 100 µF at 50 V is…','0.125 J',['5 J','0.25 J','12.5 J']),
Q('T6','The time constant of a capacitor charging circuit is…','τ = R × C',['τ = R ÷ C','τ = C ÷ R','τ = V ÷ I']),
Q('T6','After one time constant a charging capacitor has reached about…','63% of the final voltage',['37%','50%','100%']),
Q('T6','A capacitor is regarded as fully charged after about…','five time constants',['one time constant','half a time constant','a hundred time constants']),
Q('T6','R = 50 kΩ and C = 100 µF have a time constant of…','5 s',['0.5 s','50 s','500 s']),
Q('T6','With a 12 V supply, the capacitor voltage after one time constant is about…','7.6 V',['12 V','4.4 V','6 V']),
Q('T6','The induced EMF in a 0.5 H inductor when the current changes at 20 A/s is…','10 V',['40 V','0.025 V','20 V']),
Q('T6','The energy stored in a 0.5 H inductor carrying 4 A is…','4 J',['8 J','1 J','2 J']),
Q('T6','The time constant of a 2 H inductor with 10 Ω resistance is…','0.2 s',['5 s','20 s','0.02 s']),
Q('T6','Suppression diodes are fitted across relay coils to…','absorb the back-EMF when the coil is switched off',['reduce the supply voltage','increase coil current','store energy permanently']),
Q('T6','Magnetomotive force is calculated as…','N × I (ampere-turns)',['B × A','H ÷ l','Φ ÷ A']),
Q('T6','A ring with 500 turns, 2 A and a mean length of 0.4 m has a field strength of…','2,500 A/m',['250 A/m','25,000 A/m','1,000 A/m']),
Q('T6','Reluctance is the magnetic circuit equivalent of…','resistance',['voltage','current','capacitance']),
Q('T6','Magnetic saturation means that…','increasing the field strength adds very little extra flux',['the material loses all magnetism','flux doubles with each turn','the core becomes a conductor']),
Q('T6','The area of a hysteresis loop represents…','energy lost per cycle',['the supply voltage','the flux density','the current']),
Q('T6','A Wheatstone bridge with R1 = 100 Ω, R2 = 200 Ω and R3 = 150 Ω balances when R4 equals…','300 Ω',['75 Ω','133 Ω','450 Ω']),
Q('T6','Kirchhoff’s current law states that…','the sum of currents entering a node equals the sum leaving it',['voltage is constant in a loop','power is constant','resistance is constant']),
Q('T6','A moving-iron meter can measure…','both AC and DC',['DC only','AC only','neither']),
Q('T6','A shunt used to extend the range of an ammeter is…','a low-value resistor connected in parallel with the meter',['a high-value resistor in series','a capacitor in parallel','an inductor in series'])
],
[['A 47 µF capacitor is charged through a 22 kΩ resistor from a 24 V supply. Calculate the time constant, the voltage after 1.03 s and the energy stored when fully charged.','τ = 22,000 × 47 × 10⁻⁶ = 1.034 s. After 1.03 s (about one time constant) v = 24 × 0.632 = 15.2 V. Energy = ½ × 47 × 10⁻⁶ × 24² = 0.0135 J.'],
['Explain why a capacitor is considered fully charged after five time constants.','After 5τ the capacitor voltage has reached 99.3% of the supply voltage and the current has fallen to under 1% of its initial value.'],
['A coil of 2 H carries 3 A. Calculate the stored energy and the EMF induced if the current falls to zero in 0.1 s.','W = ½ × 2 × 9 = 9 J. e = 2 × 3 ÷ 0.1 = 60 V.'],
['A toroid has 800 turns, a mean length of 0.5 m, an area of 5 cm² and relative permeability 500. A current of 1.5 A flows. Calculate H, B and the flux.','H = 800 × 1.5 ÷ 0.5 = 2,400 A/m. B = 4π × 10⁻⁷ × 500 × 2,400 = 1.51 T. Flux = 1.51 × 5 × 10⁻⁴ = 0.75 mWb.'],
['State why transformer cores are laminated and why the iron used has a narrow hysteresis loop.','Laminations break up eddy current paths and reduce eddy current loss; a narrow hysteresis loop means little energy is lost in repeatedly magnetising the core.']]);
})();
