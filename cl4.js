(function(){
// City & Guilds 2365 Level 3, Unit 304: Inspection, testing and commissioning.
const {Q,tbl,note}=CGH, mod=CGH.mod3;

mod('cg304a','304·A Inspection, verification and the dead tests','304',
`<p><b>City & Guilds 2365 Level 3, Unit 304 (topic areas T1 and T2).</b> This lesson covers the purpose of inspection and testing, what is inspected, the order of tests, and the dead tests: continuity of protective conductors, insulation resistance and polarity. The next lesson covers the live tests, the ring final circuit test and the instruments.</p>
<h3>T1: Inspection and Verification Principles</h3>
<p><b>Verification</b> is the process of proving that an installation complies with BS 7671. <b>Initial verification</b> applies to new installations and to alterations and additions (Part 6 of BS 7671, Chapter 61). <b>Periodic inspection and testing</b> checks whether an existing installation is still safe and in a satisfactory condition (Chapter 62). Results are recorded on the model forms in Appendix 6 (certificates, reports and schedules), covered in the third lesson. Verification is carried out by a <b>competent person</b> with the relevant information: the design, drawings, schedules, supply details and previous test results.</p>
<p><b>Inspection comes first</b>, before testing, and with the installation isolated. Items to inspect include: connections (correct, tight, no damage); identification of conductors (colours or markers); routing of cables in safe zones or with protection; selection of cables for current capacity and voltage drop; connection of single-pole devices in the <b>line conductor only</b>; correct connection of accessories and equipment; presence of fire barriers and protection against thermal effects; methods of basic and fault protection (insulation, enclosures, earthing and bonding conductors, RCDs); isolation and switching devices correctly sited; undervoltage protection where needed; presence of labels, warning notices and diagrams; adequate access and working space; correct selection of equipment (IP rating, class, suitability for the environment); and compatible equipment and circuits. The results are recorded on the <b>Schedule of Inspections</b>.</p>
<h3>Before Testing</h3>
<p>Obtain the information; carry out safe isolation; decide the tests needed and the order; check that testing will not create danger or damage equipment (disconnect or protect electronic equipment, remove lamps, consider surge protective devices and RCDs); and check the instruments are suitable, in calibration and with undamaged leads. Warn others and secure the isolation.</p>
<p><b>Sequence of tests (initial verification, Regulation 612).</b> The recommended order is:</p>
<p>1. Continuity of protective conductors, including main and supplementary bonding.<br>
2. Continuity of ring final circuit conductors.<br>
3. Insulation resistance.<br>
4. Protection by SELV, PELV or electrical separation (where used).<br>
5. Insulation resistance or impedance of floors and walls (where used).<br>
6. Polarity.<br>
7. Earth electrode resistance (TT).<br>
8. Protection by automatic disconnection of supply: earth fault loop impedance.<br>
9. Additional protection: RCD tests.<br>
10. Prospective fault current.<br>
11. Phase sequence (three-phase).<br>
12. Functional testing.<br>
13. Verification of voltage drop.<br>
Tests 1 to 6 are normally <b>dead tests</b> (circuit isolated); tests 7 to 13 are mostly <b>live tests</b> and must not be done until the dead tests are satisfactory. If any test fails, the fault is corrected and the earlier tests are repeated.</p>
<h3>T2: Dead Tests</h3>
<h3>Continuity of Protective Conductors</h3>
<p>Use a low-resistance ohmmeter (test current at least 200 mA, with leads nulled). <b>Method 1 (R1 + R2):</b> at the distribution board link the line conductor of the circuit to its CPC, then measure between line and earth at each point on the circuit (sockets, switches, luminaires). The highest value is recorded as R1 + R2, and the test also proves the continuity of the CPC. <b>Method 2 (R2 with a long test lead):</b> measure the CPC resistance on its own with a lead from the MET (used when R2 itself is needed). Expected values come from the cable resistance per metre at 20 degrees (R1 + R2 in mΩ per metre): 1.0/1.0 mm² = 36.2; 1.5/1.0 = 30.2; 1.5/1.5 = 24.2; 2.5/1.0 = 25.5; <b>2.5/1.5 = 19.5</b>; 2.5/2.5 = 14.8; 4/1.5 = 16.7; 4/2.5 = 12.0; 6/2.5 = 10.5; 10/4 = 6.4. A 20 m run of 2.5/1.5 mm² should therefore read about 20 × 19.5 = 390 mΩ. A reading much higher means a poor connection or a longer route; much lower suggests a different cable or a parallel path. Main and supplementary bonding conductors should have very low resistance (typically below 0.05 Ω). <b>Test results can be affected by parallel paths</b> (for example metalwork touching conduit), so check the result against the expected value.</p>
<h3>Insulation Resistance</h3>
<p>Isolate the circuit; remove lamps and disconnect equipment that could be damaged or give a false reading (electronic items, dimmers, surge protection, RCD test circuits); close all switches; link line and neutral together and test between them and earth; also test between line and neutral where required. The test voltages and minimum values are:</p>
${tbl(['Circuit voltage','Test voltage (DC)','Minimum insulation resistance'],[['SELV and PELV','250 V','0.5 MΩ'],['Up to and including 500 V (including FELV)','500 V','1.0 MΩ'],['Above 500 V up to 1,000 V','1,000 V','1.0 MΩ']])}
<p>New installations normally give readings well above 100 MΩ. A reading below 2 MΩ should be investigated even if it is above the minimum, because it shows a deteriorating condition. Where several circuits are tested together at the distribution board, the readings are in <b>parallel</b>, so the total is lower than any one circuit: ten circuits of 20 MΩ each read about 2 MΩ together. If the combined reading is low, test the circuits one at a time. A 230 V circuit tested at 500 V shows the insulation can handle the working voltage with a margin. Discharge the circuit after the test (the instrument usually does this) because capacitance stores charge.</p>
<h3>Polarity</h3>
<p>Dead polarity tests confirm that: single-pole switches and protective devices are in the <b>line conductor</b>; the centre contact of Edison screw lampholders is connected to the line; sockets and accessories are correctly connected; and that, in a three-phase installation, the phase conductors are correctly identified. Use the continuity function (link and test at the points) or the results of the R1 + R2 test with the line conductor passing through the switch. Live polarity at the origin is confirmed with a voltage indicator or the multifunction tester. Reversed polarity is dangerous because the switch or fuse leaves the equipment live when it is off.</p>
${note('<b>Why sequence matters:</b> do not apply a high-voltage insulation test to a circuit with an unproved CPC, and never carry out live tests until the dead tests prove the installation is safe to energise.')}`,
[],
[
Q('T1','Initial verification applies to…','new installations and alterations or additions',['only old installations','only temporary supplies','only domestic lighting']),
Q('T1','Periodic inspection and testing is carried out to…','check whether an existing installation is still safe and in a satisfactory condition',['commission a new installation','design a new circuit','install new sockets']),
Q('T1','The results of inspection are recorded on…','the Schedule of Inspections',['the circuit chart only','a delivery note','the schedule of materials']),
Q('T1','Inspection is carried out…','before testing, with the installation isolated',['after live tests','while live','only if tests fail']),
Q('T1','Single-pole switching and protective devices must be connected in…','the line conductor only',['the neutral only','the CPC','either conductor']),
Q('T1','During the initial verification, the recommended first test is…','continuity of protective conductors',['RCD operation','insulation resistance','Ze']),
Q('T1','The correct sequence of tests places insulation resistance…','after continuity of protective conductors and ring continuity',['before continuity','after the RCD test','last']),
Q('T1','Live tests should not be carried out until…','the dead tests are satisfactory',['the lamps are fitted','the client agrees','the test certificate is signed']),
Q('T1','If any test shows a fault, you should…','correct the fault and repeat the earlier tests that may be affected',['continue with the live tests','ignore the result','record it as satisfactory']),
Q('T1','Before insulation testing, electronic equipment should be…','disconnected to prevent damage and false readings',['connected to the circuit','left switched on','earthed through the test lead']),
Q('T1','The person carrying out verification must be…','competent',['an apprentice working alone','the client','anyone available']),
Q('T1','Which is NOT normally checked during visual inspection?','The colour of the paint on the wall',['Identification of conductors','Connection of conductors','Presence of labels and notices']),
Q('T2','A low-resistance ohmmeter for continuity should have a test current of at least…','200 mA',['2 mA','20 mA','5 mA']),
Q('T2','In the R1 + R2 test, the line conductor and the CPC are linked…','at the distribution board',['at the farthest socket only','at the supply transformer','not at all']),
Q('T2','For 2.5/1.5 mm² flat cable, R1 + R2 is about…','19.5 mΩ per metre',['195 mΩ per metre','1.95 mΩ per metre','0.195 mΩ per metre']),
Q('T2','A 20 m run of 2.5/1.5 mm² cable should give an R1 + R2 of about…','0.39 Ω',['3.9 Ω','0.039 Ω','39 Ω']),
Q('T2','If the measured R1 + R2 is much higher than expected, this suggests…','a poor connection or a longer or different cable',['perfect wiring','no problem','a low supply voltage']),
Q('T2','The insulation resistance test voltage for a 230 V circuit is…','500 V DC',['230 V AC','50 V DC','1,000 V AC']),
Q('T2','The minimum insulation resistance for a circuit up to 500 V is…','1.0 MΩ',['0.1 MΩ','0.5 MΩ for all circuits','100 Ω']),
Q('T2','SELV and PELV circuits are tested at…','250 V DC with a minimum of 0.5 MΩ',['1,000 V DC','500 V DC with a minimum of 2 MΩ','12 V AC']),
Q('T2','A reading below… should be investigated even though it is above the minimum.','2 MΩ',['100 MΩ','500 MΩ','20 MΩ']),
Q('T2','Ten identical circuits of 20 MΩ each, tested together, read about…','2 MΩ',['200 MΩ','20 MΩ','0.2 MΩ']),
Q('T2','Before an insulation test the lamps should be…','removed and switches closed',['left in place with the switches open','replaced by LEDs','connected to a dimmer']),
Q('T2','Reversed polarity at a lampholder is dangerous because…','the lamp contact remains live when switched off',['the lamp is too bright','the earth is too high','the cable overheats']),
Q('T2','The centre contact of an Edison screw lampholder is connected to…','the line conductor',['the neutral conductor','the CPC','a bonding conductor']),
Q('T2','Main protective bonding conductors should have a resistance that is…','very low (typically below 0.05 Ω)',['above 10 Ω','above 100 Ω','not measured']),
Q('T2','Parallel paths during a continuity test can…','give a false low reading because other metalwork carries part of the test current',['increase the reading','damage the instrument','have no effect']),
Q('T2','After an insulation test, the circuit is…','discharged because it can store a charge',['left charged','connected to the supply','filled with water'])
],
[['List the thirteen tests of the recommended sequence in order of the first six.','1 continuity of protective conductors; 2 continuity of ring final conductors; 3 insulation resistance; 4 SELV, PELV or separation; 5 floors and walls; 6 polarity.'],
['Describe how to measure R1 + R2 on a circuit.','Isolate, link line and CPC at the distribution board, null the leads and measure between line and earth at each point; record the highest value and compare with the expected value for the cable.'],
['State the insulation resistance test voltages and minimum values for SELV, 230 V circuits and circuits above 500 V.','SELV and PELV: 250 V and 0.5 MΩ; up to 500 V: 500 V and 1.0 MΩ; above 500 V up to 1,000 V: 1,000 V and 1.0 MΩ.'],
['Calculate the expected R1 + R2 of a 35 m radial circuit of 4/1.5 mm² cable (16.7 mΩ per metre).','35 × 16.7 = 585 mΩ = 0.585 Ω.'],
['Explain why polarity must be correct.','If switches or fuses are in the neutral the equipment stays live when switched off, creating a shock risk; an Edison screw lamp could expose a live thread.']]);

mod('cg304b','304·B Live tests, ring final circuits and test instruments','304',
`<p><b>City & Guilds 2365 Level 3, Unit 304 (topic areas T3 and T4).</b> This lesson covers the live tests (supply, Ze, Zs, prospective fault current, RCD, earth electrode, phase sequence, functional and voltage drop), the full ring final circuit test, and the standards and care of test instruments.</p>
<h3>T3: Live Tests</h3>
<p>Live tests are carried out only after the dead tests are satisfactory, with the circuit energised and everything correctly connected. Use GS 38 compliant instruments and leads, and take care of yourself and others.</p>
<p><b>Supply checks:</b> confirm polarity, voltage, frequency and (on three-phase) the phase sequence.<br>
<b>External earth fault loop impedance Ze.</b> Measure at the origin with the installation isolated and the main earthing conductor disconnected from the MET (so that only the supply path is measured), connecting the instrument between line and earth. Take care: reconnect the earthing conductor immediately after the test. Typical maximum values quoted by supply networks are: TN-C-S about 0.35 Ω, TN-S about 0.8 Ω and TT up to 21 Ω (the TT figure is the supplier's declared value and not a suitable earth for a TT installation).<br>
<b>Earth fault loop impedance Zs</b> for each circuit is measured at the farthest point (live test) with the instrument on the no-trip (low-current) setting where RCDs are present. It can be compared with the predicted value <b>Zs = Ze + (R1 + R2)</b>: for example, Ze = 0.35 Ω plus 0.39 Ω gives 0.74 Ω. The measured value must not exceed the maximum value for the protective device (Table 41.3 and related tables): for a type B 32 A MCB (0.4 s) the maximum is 1.37 Ω, and as a rule of thumb the measured value should not be greater than <b>80% of the tabulated value</b> (about 1.10 Ω here) because conductor resistance rises as the cable heats in use. Typical maximum Zs (0.4 s): B6 7.28 Ω; B10 4.37 Ω; B16 2.73 Ω; B20 2.19 Ω; B32 1.37 Ω; C32 0.68 Ω.<br>
<b>Prospective fault current (PFC).</b> Measured at the origin and at distribution boards between line and neutral (prospective short-circuit current) and between line and earth (prospective earth fault current). The higher value is recorded. For example, with Ze = 0.35 Ω the earth fault current is 230 ÷ 0.35 = 657 A. The <b>breaking capacity</b> of every protective device must be at least the PFC at its location.<br>
<b>RCD tests.</b> Tests are made at one half, one and five times the rated residual current, normally at 0 and 180 degrees phase. At <b>one half</b> the RCD must <b>not trip</b>. At <b>one times the rated current</b> a general-type RCD must trip within <b>300 ms</b>; at <b>five times</b> a 30 mA RCD used for additional protection must trip within <b>40 ms</b>. Delayed (type S) RCDs have longer time limits (for example not more than 500 ms at the rated current and a minimum of 130 ms). A <b>ramp test</b> raises the test current gradually and shows the actual trip current, which should lie between about half and the full rated current (15 to 30 mA for a 30 mA RCD). The test button on the RCD checks the mechanism only and is not a substitute for tests with an instrument; users should press it regularly (usually every three months).<br>
<b>Earth electrode resistance (TT).</b> Measured with a dedicated earth tester using a current spike and a potential spike (or a loop method, where permitted). The result must satisfy <b>Ra × I∆n ≤ 50 V</b>: for a 30 mA RCD and 100 Ω, 100 × 0.03 = 3 V, which is well within the limit.<br>
<b>Phase sequence.</b> A phase rotation meter confirms L1-L2-L3 so that three-phase motors turn the correct way.<br>
<b>Functional testing.</b> Operate switchgear, controls, interlocks, isolators, RCD test buttons, emergency stop and safety devices; check that they work as designed.<br>
<b>Verification of voltage drop.</b> By calculation (cable data and load current) or by measurement: the drop should not exceed 3% for lighting and 5% for other circuits (6.9 V and 11.5 V on 230 V).</p>
<h3>T4: The Ring Final Circuit Test and Instruments</h3>
<p>The test proves the ring is continuous, with no breaks, spurs or interconnections that are not intended, and that the CPC is continuous. All three conductors are tested with the circuit isolated and all sockets disconnected from other circuits.</p>
<p><b>Step 1, end-to-end resistance.</b> At the distribution board, disconnect the two ends of each conductor and measure the resistance between the ends of the line (<b>r1</b>), the neutral (<b>rn</b>) and the CPC (<b>r2</b>). r1 and rn should be almost equal. For 2.5 mm² line and neutral with a 1.5 mm² CPC, r2 is about <b>1.67 times r1</b>. For a 60 m ring, r1 = rn ≈ 0.445 Ω and r2 ≈ 0.726 Ω. A reading that is open-circuit shows a break; a large difference between r1 and rn indicates a fault or a differently routed conductor.<br>
<b>Step 2, cross-connect line and neutral.</b> Join the line of one leg to the neutral of the other leg and measure between line and neutral at each socket outlet. The readings should be <b>approximately equal</b> at every socket and equal to <b>(r1 + rn) ÷ 4</b>, about 0.22 Ω in the example. A higher reading at one socket points to a spur or loose joint there.<br>
<b>Step 3, cross-connect line and CPC.</b> Join the line of one leg to the CPC of the other leg and measure between line and earth at each socket. Readings should be nearly constant and equal to <b>(r1 + r2) ÷ 4</b>, about 0.29 Ω, and the highest value is the <b>R1 + R2</b> for the circuit, which is recorded on the schedule of test results.<br>
Reconnect the conductors correctly afterwards; then insulation resistance and the other tests follow.</p>
<p><b>Standards for instruments.</b> Test instruments for installation verification conform to <b>BS EN 61557</b> (and parts: insulation resistance, loop impedance, RCDs, continuity), and probes and leads follow <b>GS 38</b>. Instruments are calibrated by a laboratory (normally every year) with a certificate traceable to national standards. Before use: inspect the instrument and leads, check the batteries, null the continuity leads, select the correct function and range, and use a proving unit or check on a known source. Record the instrument serial number on the certificate. Use CAT III or CAT IV rated instruments for work at distribution boards and the origin.</p>
${note('<b>Common error:</b> measuring Ze with the main earthing conductor connected includes parallel paths in the installation, giving a falsely low value. Always disconnect it (safely) for the Ze test and reconnect it afterwards.')}`,
[],
[
Q('T3','Live tests are carried out…','only after the dead tests are satisfactory',['before any inspection','without instruments','only if the dead tests fail']),
Q('T3','When measuring Ze, the main earthing conductor is…','disconnected from the MET (with the installation isolated) so that only the supply path is measured',['left connected','replaced by a nail','measured as a bonding conductor']),
Q('T3','Zs for a circuit is predicted by…','Zs = Ze + (R1 + R2)',['Zs = Ze × (R1 + R2)','Zs = Ze − R1','Zs = R2 ÷ Ze']),
Q('T3','With Ze = 0.35 Ω and R1 + R2 = 0.39 Ω, the predicted Zs is…','0.74 Ω',['0.04 Ω','2.7 Ω','0.35 Ω']),
Q('T3','The maximum Zs for a type B 32 A MCB (0.4 s) is about…','1.37 Ω',['13.7 Ω','0.137 Ω','137 Ω']),
Q('T3','A measured Zs is normally compared with about… of the tabulated maximum.','80%',['10%','150%','200%']),
Q('T3','The prospective earth fault current with Ze = 0.35 Ω on 230 V is about…','657 A',['0.0015 A','80 A','6,570 A']),
Q('T3','The breaking capacity of a protective device must be…','at least equal to the prospective fault current at its location',['less than the prospective fault current','the same as the load current','100 A for all devices']),
Q('T3','At one half of the rated residual current the RCD…','must not trip',['must trip in 40 ms','must trip in 300 ms','must trip in 2 s']),
Q('T3','A general-type 30 mA RCD must trip within… at its rated residual current.','300 ms',['3 ms','30 s','3 s']),
Q('T3','A 30 mA RCD for additional protection must trip within… at five times its rated current.','40 ms',['4 s','400 ms','4 µs']),
Q('T3','A ramp test on a 30 mA RCD gives a trip current of 24 mA. This is…','acceptable because it is between about half and the full rating',['a fail because it is below 30 mA','a fail because it is above 15 mA','meaningless']),
Q('T3','The RCD test button…','checks the mechanism and does not replace an instrument test',['replaces all instrument tests','measures the trip time','tests the earth']),
Q('T3','The earth electrode of a TT system must satisfy…','Ra × I∆n ≤ 50 V',['Ra + I∆n ≥ 50 V','Ra ÷ I∆n ≤ 50 V','Ra ≥ 1,000 Ω']),
Q('T3','An electrode resistance of 100 Ω with a 30 mA RCD gives a touch voltage of…','3 V',['30 V','300 V','0.3 V']),
Q('T3','A phase rotation meter is used to…','confirm the phase sequence',['measure resistance','measure insulation','measure frequency']),
Q('T3','Functional testing includes…','operating switchgear, controls, interlocks and safety devices',['measuring insulation','checking cable colours only','calibrating the meter']),
Q('T3','The voltage drop limit for lighting on a 230 V supply is…','3% (6.9 V)',['5% (11.5 V)','10%','0.3%']),
Q('T3','Zs should be measured with the instrument on…','a no-trip (low-current) setting where RCDs are installed',['the highest current always','a setting that trips the RCD','the insulation range']),
Q('T4','In the ring test, r1 and rn should be…','almost equal',['very different','zero','infinite']),
Q('T4','For 2.5 mm² line and neutral with a 1.5 mm² CPC, r2 is about… times r1.','1.67',['0.5','5','10']),
Q('T4','In the line-neutral cross-connection, readings at each socket should be about…','(r1 + rn) ÷ 4 and almost equal at every socket',['r1 + rn','r1 × rn','zero']),
Q('T4','In the line-CPC cross-connection, the readings are about…','(r1 + r2) ÷ 4',['r1 ÷ r2','r1 × r2','2 × r1']),
Q('T4','In the ring test the highest R1 + R2 value from the line-CPC readings is…','recorded as the R1 + R2 of the circuit',['ignored','recorded as insulation','recorded as Zs']),
Q('T4','A 60 m ring of 2.5 mm² has an end-to-end line resistance of about…','0.44 Ω',['4.4 Ω','44 Ω','0.044 Ω']),
Q('T4','The (r1 + rn) ÷ 4 reading for r1 = rn = 0.445 Ω is about…','0.22 Ω',['0.89 Ω','2.2 Ω','0.02 Ω']),
Q('T4','Instruments for installation testing conform to…','BS EN 61557 and use GS 38 leads',['BS 1363','BS 3036','Part L']),
Q('T4','Test instruments are normally recalibrated…','every year (or as the manufacturer specifies)',['never','every 20 years','only when broken']),
Q('T4','Before using a continuity instrument you should…','null the leads and check the instrument',['use damaged leads','charge the circuit','remove the earth']),
Q('T4','CAT III or CAT IV rated instruments are used at…','distribution boards and the origin of the supply',['battery circuits only','lighting circuits only','nowhere']),
Q('T4','Measuring Ze with the main earthing conductor connected would…','give a falsely low value because of parallel paths',['give a falsely high value','be accurate','not work at all'])
],
[['A circuit is protected by a type B 20 A MCB (max Zs 2.19 Ω for 0.4 s). Ze = 0.35 Ω and R1 + R2 = 0.74 Ω. Calculate Zs and say whether it is acceptable.','Zs = 0.35 + 0.74 = 1.09 Ω. Limit 80% of 2.19 = 1.75 Ω. 1.09 Ω is below, so it passes.'],
['Describe the three steps of the ring final circuit test and the expected results.','Step 1: end-to-end r1, rn and r2 (r1 ≈ rn; r2 ≈ 1.67 × r1). Step 2: cross-connect line and neutral and measure at each socket: readings ≈ (r1 + rn) ÷ 4 and equal. Step 3: cross-connect line and CPC: readings ≈ (r1 + r2) ÷ 4; the highest is R1 + R2.'],
['State the RCD test requirements for a 30 mA RCD used for additional protection.','No trip at half rated current; trip within 300 ms at 30 mA; trip within 40 ms at 150 mA (five times); tested at 0 and 180 degrees.'],
['Explain why the main earthing conductor is disconnected when measuring Ze.','To measure only the supply earth path; otherwise parallel paths through the installation and bonding give a falsely low reading.'],
['Calculate the earth fault current for Zs = 0.74 Ω on 230 V and say what it tells you about the protective device.','I = 230 ÷ 0.74 = 311 A. This exceeds the 160 A magnetic trip level of a type B 32 A MCB, so it will trip instantly.']]);

mod('cg304c','304·C Certification, periodic inspection and commissioning','304',
`<p><b>City & Guilds 2365 Level 3, Unit 304 (topic area T5).</b> This lesson covers the certificates and reports used after verification, how to complete a schedule of test results, how to classify observations on a periodic inspection, how often installations should be inspected, and what commissioning and handover involve.</p>
<h3>Certificates and Reports</h3>
${tbl(['Document','Used for','Main content'],[
['Electrical Installation Certificate (EIC)','New installations, and alterations or additions that include new circuits','Details of the client, installation and extent; signatures of the designer, constructor and inspector; supply and earthing details; the test results; next inspection date; schedule of inspections and schedule of test results'],
['Minor Electrical Installation Works Certificate','Additions or alterations that do not include a new circuit (for example adding a socket to an existing circuit) and repairs that alter the installation','Description of the work, the existing circuit, test results (continuity, insulation, polarity, Zs, RCD), signature'],
['Electrical Installation Condition Report (EICR)','Periodic inspection of an existing installation','Reason for the report, extent and limitations of the inspection, summary of condition, observations with classification codes, schedules of inspection and test results, overall assessment, next inspection date'],
['Building Regulations compliance certificate','Notifiable work in dwellings','Issued by a competent person scheme or building control']])}
<p>Certificates are signed only when the work is complete and the results are satisfactory. The <b>designer</b>, <b>constructor</b> and <b>inspector</b> sign as appropriate (they may be the same person on small work). The documents are given to the client and a copy is retained.</p>
<h3>Schedule of Test Results</h3>
<p>One line for each circuit records: circuit number and description; type of wiring and reference method; number of points; line and CPC sizes; the protective device (standard, type, rating, breaking capacity); the maximum permitted Zs; RCD or RCBO details; for rings the values r1, rn and r2; R1 + R2 (or R2); insulation resistance (line-line and line-earth); polarity; measured Zs; the RCD trip time (and ramp trip current); AFDD and functional test results; and any remarks. The head of the schedule records the tester used and its serial number, plus Ze, the prospective fault current and the supply details.</p>
<p><b>Worked example.</b> Circuit 3 is a ring final circuit in 2.5/1.5 mm² with a 32 A type B MCB (breaking capacity 6 kA) and a 30 mA RCD. Results: r1 = 0.47 Ω, rn = 0.47 Ω, r2 = 0.78 Ω; R1 + R2 = 0.31 Ω; insulation greater than 200 MΩ; polarity correct; Zs = 0.68 Ω; RCD 24 ms at five times. <i>Check:</i> r2 ÷ r1 = 1.66 (expected about 1.67, so consistent); max Zs for a type B 32 A is 1.37 Ω and 80% of this is 1.10 Ω, so 0.68 Ω passes; the RCD time of 24 ms is below 40 ms. The circuit is satisfactory (provided the PFC at the board is below 6 kA).</p>
<h3>Periodic Inspection and the EICR</h3>
<p>The inspector agrees with the client the <b>extent</b> of the inspection and any <b>limitations</b> (areas not accessible, circuits that cannot be isolated, a sample of the installation), and records them. Defects and departures from the standard are recorded as <b>observations</b> with a code:</p>
${tbl(['Code','Meaning','Action'],[['C1','Danger present. Risk of injury.','Immediate remedial action required (make safe at once)'],['C2','Potentially dangerous','Urgent remedial action required'],['C3','Improvement recommended','Not a danger now; the client is advised to improve'],['FI','Further investigation required without delay','Investigate before the report can be completed']])}
<p>The overall assessment is <b>unsatisfactory</b> if there is any C1, C2 or FI observation; C3 observations alone leave the installation <b>satisfactory</b>. Examples: exposed live conductors (C1); no RCD protection for socket outlets that could be used outdoors (C2); a consumer unit of combustible material in a dwelling (C2 or C3 depending on the circumstances and the version of the standard applied); lack of RCD protection where it was not required when the installation was built (C3).</p>
<p><b>Recommended intervals</b> (guidance, depends on use and condition): owner-occupied dwellings up to 10 years and on change of occupancy; privately rented dwellings every 5 years; commercial premises 5 years; industrial premises 3 years; swimming pools 1 year; caravan parks 1 year; agricultural and horticultural 3 years; construction site installations 3 months. A shorter interval is recommended where the condition is poor or the use is demanding.</p>
<h3>Commissioning and Handover</h3>
<p>Commissioning is bringing the installation into service and proving it works as designed. It includes: completing inspection and testing; functional checks; setting up and checking controls, timers and protective settings; checking motor rotation; documenting settings; labelling; and <b>handover</b>: giving the client the certificates, schedules, as-built drawings, operating and maintenance instructions, manufacturer information, warranties and an explanation of how to operate the installation safely (including the RCD test button, which should be tested every three months). Fit warning and information labels: periodic inspection date, RCD test notice, dual supply labels for generators or PV, mixed cable colour notice, and circuit identification. Keep records of the instruments used. For specialist systems, follow the relevant standard: for example PV commissioning (BS EN 62446-1) requires polarity, Voc, Isc and DC insulation tests, and EV charge points require tests of the RCD type, DC leakage detection and PEN fault protection function as well as the standard tests.</p>
${note('<b>Rule:</b> never sign a certificate without completing the tests. A certificate is a legal record, and giving false results can lead to prosecution.')}`,
[],
[
Q('T5','An Electrical Installation Certificate is issued for…','new installations and alterations that include new circuits',['periodic inspection of an old installation','replacing a lamp','repair of a socket without altering anything']),
Q('T5','A Minor Electrical Installation Works Certificate is used for…','additions or alterations that do not include a new circuit',['a new installation','a periodic report','a rewire']),
Q('T5','An EICR is a report on…','the condition of an existing installation',['a new installation','the price of a job','the design of a circuit']),
Q('T5','The people who sign an EIC are…','the designer, constructor and inspector',['the client only','the supplier only','the building inspector only']),
Q('T5','Code C1 on an EICR means…','danger present and immediate remedial action required',['improvement recommended','satisfactory','further investigation']),
Q('T5','Code C2 on an EICR means…','potentially dangerous, with urgent remedial action required',['danger present now','no action needed','improvement recommended']),
Q('T5','Code C3 on an EICR means…','improvement recommended',['danger present','potentially dangerous','further investigation']),
Q('T5','Code FI on an EICR means…','further investigation required without delay',['no problem','improvement recommended','satisfactory']),
Q('T5','An EICR with only C3 observations is…','satisfactory',['unsatisfactory','invalid','a fail']),
Q('T5','An EICR with a C2 observation is…','unsatisfactory',['satisfactory','satisfactory with a note','not valid']),
Q('T5','The recommended interval for a privately rented dwelling is…','5 years',['10 years','1 year','30 years']),
Q('T5','The recommended interval for an industrial installation is…','3 years',['10 years','12 months','5 years']),
Q('T5','The recommended interval for a swimming pool installation is…','1 year',['10 years','3 years','5 years']),
Q('T5','The recommended interval for a construction site installation is…','3 months',['10 years','1 year','5 years']),
Q('T5','The extent and limitations of a periodic inspection are…','agreed with the client and recorded on the report',['kept secret','decided by the supplier','not recorded']),
Q('T5','The schedule of test results records…','the test results for each circuit, including Zs, insulation and RCD times',['only the price','only the cable colours','only the client name']),
Q('T5','In the worked example, a 60 m ring with r1 = 0.47 Ω and r2 = 0.78 Ω has r2 ÷ r1 of about…','1.66, consistent with the expected 1.67',['0.6','16.6','5']),
Q('T5','At handover, the client should be shown how to…','test the RCD using its test button and be given the certificates',['rewire the circuits','replace a transformer','change the supply voltage']),
Q('T5','A certificate should be signed…','only after the tests are completed and the results are satisfactory',['before starting','without completing the tests','by the client']),
Q('T5','PV commissioning (BS EN 62446-1) includes…','polarity, open-circuit voltage, short-circuit current and DC insulation tests',['only a visual check','a gas pressure test','a water test'])
],
[['List the classification codes on an EICR and state what each means.','C1 danger present, immediate action; C2 potentially dangerous, urgent action; C3 improvement recommended; FI further investigation required without delay.'],
['State when an Electrical Installation Certificate, a Minor Works Certificate and an EICR are used.','EIC for new installations and alterations with new circuits; Minor Works for additions or alterations without a new circuit; EICR for periodic inspection of existing installations.'],
['A ring circuit shows r1 = 0.50 Ω, rn = 0.50 Ω and r2 = 1.25 Ω for 2.5/1.5 mm² cable. Comment on the result.','r1 = rn is correct but r2 ÷ r1 = 2.5, higher than the expected 1.67, so the CPC may have a poor connection or a smaller cable; investigate.'],
['List the items that should be handed over to the client at commissioning.','Certificates and schedules, as-built drawings, operating and maintenance instructions, manufacturer information and warranties, an explanation of operation and the RCD test button, and labels.'],
['Explain what is meant by the extent and limitations of an EICR.','The extent is the part of the installation covered (for example all of the circuits or a sample); the limitations are the parts not inspected or tested and why (for example no access, cannot be isolated).']]);
})();
