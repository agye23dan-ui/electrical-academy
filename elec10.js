(function(){
// Depth expansion (part 3): international standards, General Paper, and diagrams for modules that had none.
const Q=(q,c,w)=>[q,[c,...w],0,'Answer: '+c];
const add=(id,n,q,w)=>{const m=Z.mods.find(x=>x.id==id);if(!m)return;m.n+=n;m.q=m.q.concat(q);m.w=(m.w||[]).concat(w)};
const S=(vb,b,l)=>`<svg class="sm" viewBox="${vb}" width="100%" role="img" aria-label="${l}">${b}</svg>`;
const T=(x,y,t,a)=>`<text x="${x}" y="${y}"${a?` text-anchor="${a}"`:''}>${t}</text>`;
const B=(x,y,w,h,t)=>`<rect class="f w" x="${x}" y="${y}" width="${w}" height="${h}" rx="3"/>${T(x+w/2,y+h/2+4,t,'middle')}`;
const flow=(arr,y)=>arr.map((t,i)=>B(10+i*105,y,90,34,t)+(i<arr.length-1?T(104+i*105,y+22,'→'):'')).join('');

/* ---------- Diagrams ---------- */
Object.assign(Z.figs,{
serpar:S('0 0 400 190',`${B(10,70,60,40,'24 V')}<path class="f" d="M40 70V30H110M180 30H250V122M250 52H270M250 122H270M350 52H370M350 122H370M370 52V160H40V110"/>${B(110,18,70,24,'R1 6 Ω')}${B(270,40,80,24,'R2 12 Ω')}${B(270,110,80,24,'R3 4 Ω')}${T(10,184,'R2 and R3 in parallel (3 Ω), in series with R1: total 9 Ω.')}`,'Series-parallel resistor circuit'),
dcmachine:S('0 0 400 190',`<rect class="f w" x="20" y="10" width="260" height="150" rx="6"/><circle class="f w" cx="150" cy="85" r="42"/>${T(150,89,'Armature','middle')}${B(115,16,70,24,'N pole')}${B(115,130,70,24,'S pole')}${B(295,68,90,34,'Commutator')}<path class="f" d="M280 85H295M310 50V68M310 102V120"/>${T(30,30,'Yoke')}${T(310,45,'Brush')}${T(310,135,'Brush')}${T(20,182,'Poles with field windings create the flux; the commutator and brushes carry current to the armature.')}`,'DC machine parts'),
powertri:S('0 0 400 190',`<path class="f" d="M60 150H280M280 150V60M60 150L280 60"/>${T(60,170,'P  (kW) true power')}${T(288,110,'Q (kVAr)')}${T(150,95,'S (kVA)')}${T(95,141,'φ')}${T(20,186,'cos φ = P ÷ S. Capacitors reduce Q and shrink the angle φ.')}`,'Power triangle'),
shuntmotor:S('0 0 400 200',`<path class="f" d="M10 30H110M180 30H300V70M60 30V85M60 135V170M10 170H300V130"/>${B(110,18,70,24,'Starter')}<rect class="f w" x="42" y="85" width="36" height="50"/>${T(60,114,'F','middle')}<circle class="f w" cx="300" cy="100" r="30"/>${T(300,104,'M','middle')}${T(10,24,'+')}${T(10,164,'−')}${T(20,192,'Shunt field F is connected across the supply; the starter is in series with the armature.')}`,'DC shunt motor with starter'),
quoteflow:S('0 0 440 130',flow(['Enquiry','Site visit','Estimate','Quotation'],10)+flow(['Acceptance','Work + test','Invoice','Payment'],70),'Job quotation to payment flow')
});
Object.assign(Z.names,{serpar:'Series-parallel circuit',dcmachine:'DC machine parts',powertri:'Power triangle',shuntmotor:'DC shunt motor with starter',quoteflow:'Quotation to payment flow'});
Object.assign(Z.tasks,{serpar:'Draw a 24 V battery feeding R1 in series with R2 and R3 in parallel.',dcmachine:'Draw and label the main parts of a DC machine.',powertri:'Draw the power triangle and label P, Q, S and angle phi.',shuntmotor:'Draw a DC shunt motor circuit with starter and shunt field.',quoteflow:'Draw the steps from customer enquiry to payment.'});
Object.assign(Z.marks,{serpar:['Battery with polarity','R1 in series','R2 and R3 in parallel','Return path to the battery'],dcmachine:['Yoke and poles','Armature','Commutator','Brushes'],powertri:['P along the base','Q vertical','S hypotenuse','Angle phi marked'],shuntmotor:['Starter in armature circuit','Armature (M)','Shunt field across supply','Supply + and −'],quoteflow:['Enquiry and site visit','Estimate and quotation','Acceptance and work','Invoice and payment']});
const fig=(id,k)=>{const m=Z.mods.find(x=>x.id==id);if(m)m.f=(m.f||[]).concat(k)};
fig('e1e','serpar');fig('e1g','dcmachine');fig('e2c','powertri');fig('e2g','shuntmotor');fig('gpe','quoteflow');

/* ---------- INT·A ---------- */
add('inta',
`<h3>Overcurrent Protection Principles</h3><p>Conductors must be protected against overload and short circuit. The device rating In must satisfy <b>Ib ≤ In ≤ Iz</b> (design current, device rating, cable rating). The device also trips at 1.45 × In or less (conventional operating current) to protect the cable. Short-circuit devices must have a breaking capacity at least equal to the prospective fault current at their point of installation. Typical domestic consumer-unit values are 6 kA to 10 kA.</p>
<h3>Residual Current Devices and Other Protection</h3><p>RCDs with a rated residual current not exceeding <b>30 mA</b> give additional protection for socket outlets up to 32 A, mobile equipment outdoors, and cables concealed in walls. <b>Arc fault detection devices (AFDDs)</b> detect dangerous arcing in final circuits. <b>Surge protective devices (SPDs)</b> limit transient overvoltages from lightning and switching; they are placed at the origin of the installation and coordinated with downstream devices. <b>Undervoltage protection</b> prevents unexpected restart of motors.</p>
<h3>Special Locations: Bathrooms and Wet Areas</h3><p>Bathrooms are divided into zones. <b>Zone 0</b> is inside the bath or shower tray, <b>Zone 1</b> is directly above it up to 2.25 m, and <b>Zone 2</b> extends 0.6 m beyond. Equipment in Zones 0-2 must have the required IP rating (at least IPX4 in most zones) and be on RCD-protected circuits. Socket outlets (other than shaver units) are not allowed in the bathroom zones. Supplementary bonding is generally not needed if the installation has RCD protection and main bonding is in place. Other special locations (swimming pools, construction sites, agricultural premises) have their own extra rules.</p>
<h3>Cable Support, Sheaths and Fire Performance</h3><p>Escape routes use cables that do not spread fire and give low smoke and fumes (LSF or LSZH). Fire stops seal holes made through walls and floors with cables. In fire alarm and emergency systems the cable must survive long enough for the system to work, for example 30 to 120 minutes.</p>
<h3>Periodic Inspection</h3><p>Installations should be inspected regularly: typically <b>every 5 years</b> for domestic rented property and commercial buildings, every year or more often for swimming pools and construction sites, and at the time of change of occupancy. The result is an Electrical Installation Condition Report (EICR) with defects coded for urgency.</p>`,
[Q('The relationship between design current Ib, device rating In and cable capacity Iz must be…','Ib ≤ In ≤ Iz',['Iz ≤ In ≤ Ib','In ≤ Ib ≤ Iz','Ib = Iz = 0']),
Q('Additional protection for socket outlets up to 32 A is given by…','an RCD of 30 mA rating or less',['a 300 mA RCD','a rewireable fuse of 100 A','a bell transformer']),
Q('The breaking capacity of a protective device must be at least…','equal to the prospective fault current at its point of installation',['one tenth of the fault current','the load current','the supply frequency']),
Q('A surge protective device (SPD) is used to…','limit transient overvoltages caused by lightning or switching',['reduce the earth resistance','increase the supply voltage','measure energy']),
Q('Bathroom Zone 1 is…','the space directly above the bath or shower tray up to 2.25 m',['inside the bath','outside the room','the ceiling only']),
Q('Which of the following is NOT normally allowed in bathroom zones 0, 1 and 2?','a standard 13 A socket outlet',['an IP-rated shaver unit','an IPX4 luminaire rated for the zone','a fan with the correct IP rating']),
Q('An arc fault detection device (AFDD) detects…','dangerous arcing in final circuits',['low battery voltage','overspeed of motors','loss of neutral at the transformer']),
Q('Cables on escape routes should be…','low smoke and fume (LSF/LSZH) to reduce toxic smoke',['PVC with high smoke output','unsheathed single wires','cloth-covered']),
Q('The document produced after periodic inspection is an…','Electrical Installation Condition Report (EICR)',['Minor Works Certificate','invoice for cable','Planning permit']),
Q('Domestic rented property is typically inspected every…','5 years',['5 days','50 years','Never; inspection is optional']),
Q('Fire stops are used to…','seal holes made through walls or floors for cables to stop the spread of fire',['hold cable clips','ventilate trunking','support heavy equipment']),
Q('Undervoltage protection on a motor circuit prevents…','automatic restart after a supply failure',['earth leakage','overheating of cable','harmonic distortion'])],
[['State the condition linking Ib, In and Iz.','Ib ≤ In ≤ Iz; the device must carry the design current but protect the cable.'],
['Explain why socket outlets in homes are given 30 mA RCD protection.','Sockets may supply portable equipment used outdoors or in contact with people, so a 30 mA RCD gives additional protection from shock if other protection fails.'],
['Describe the three bathroom zones.','Zone 0: inside the bath or shower tray. Zone 1: directly above up to 2.25 m. Zone 2: extends 0.6 m beyond zone 1. Equipment must have suitable IP ratings and RCD protection.'],
['Why is regular periodic inspection needed?','Installations age and are altered, so insulation, connections and protective devices can deteriorate. Inspection finds defects before they cause shock or fire.']]);

/* ---------- INT·B ---------- */
add('intb',
`<h3>Protective Conductor Continuity (R1 + R2)</h3><p>For each circuit, measure from the origin to the farthest point the line conductor resistance plus the cpc resistance, <b>R1 + R2</b>, using a low-resistance ohmmeter (test current 200 mA or more). Allow for the cable's known resistance as a check: 2.5 mm² twin and earth (1.5 mm² cpc) has about <b>19.5 mΩ per metre</b> at 20°C. A 20 m run therefore gives about 0.39 Ω. Zs is later checked as <b>Zs = Ze + (R1 + R2)</b>. With Ze = 0.35 Ω, Zs = 0.74 Ω. This is below the 1.37 Ω maximum for a 32 A type B MCB (0.4 s), and even below 80% of that value (1.10 Ω), which is the working limit used to allow for conductor heating.</p>
<h3>Ring Final Circuit Test Procedure</h3><p>Step 1: Measure the end-to-end resistances of line (r1), neutral (rn) and cpc (r2) at the consumer unit, with all conductors disconnected. r1 and rn should be nearly equal, and for 2.5 mm² cable with 1.5 mm² cpc, <b>r2 is about 1.67 × r1</b>.<br>Step 2: Cross-connect line of one leg to neutral of the other and measure between line and neutral at each socket. Readings should be about the same across the ring, equal to (r1 + rn) ÷ 4.<br>Step 3: Cross-connect line and cpc in the same way and measure at each socket, giving (r1 + r2) ÷ 4 at every point. A high reading at one socket means a spur or a loose connection. Open readings show a broken ring.</p>
<h3>Insulation Resistance and Polarity</h3><p>With the supply isolated, loads disconnected and all switches closed, test between live conductors joined together and earth, and between live conductors. Test voltages: <b>500 V DC</b> for circuits up to 500 V (minimum <b>1 MΩ</b>), 250 V for SELV and PELV (minimum 0.5 MΩ), and 1000 V for circuits 500-1000 V. Polarity tests confirm that switches and fuses are in the line conductor, the centre pin of an Edison screw lampholder is connected to the line, and socket wiring is correct.</p>
<h3>RCD Testing</h3><p>An RCD must trip within <b>300 ms</b> at its rated residual current (I∆n) and within <b>40 ms</b> at five times I∆n (additional protection at 30 mA). Test also with the 'test' button every few months. The button is a quick user check only and is not a substitute for an instrument test.</p>
<h3>Certification</h3><p>New work receives an <b>Electrical Installation Certificate (EIC)</b>, additions to an existing circuit a <b>Minor Works Certificate</b>, and existing installations an <b>Electrical Installation Condition Report (EICR)</b>. The records include the schedule of inspections and schedule of test results, signed by the designer, installer and inspector.</p>
<h3>Worked Cable Sizing with Voltage Drop</h3><p>A 6 kW shower on 230 V: Ib = 6000 ÷ 230 = 26.1 A. Protect with a 32 A MCB. Cable run 18 m, clipped direct, ambient 30°C, no grouping. A 6 mm² cable (Iz about 47 A) is chosen. Voltage drop at 7.3 mV/A/m = 7.3 × 26.1 × 18 ÷ 1000 = <b>3.4 V</b>, well within 11.5 V (5%).</p>`,
[Q('The approximate resistance per metre of 2.5 mm² twin and earth (1.5 mm² cpc) is…','19.5 mΩ/m (line plus cpc)',['1.95 Ω/m','195 mΩ/m','0.195 mΩ/m']),
Q('For a 20 m run of 2.5/1.5 mm² cable, R1 + R2 is about…','0.39 Ω',['3.9 Ω','0.039 Ω','39 Ω']),
Q('If Ze = 0.35 Ω and R1 + R2 = 0.39 Ω, the earth fault loop impedance Zs is…','0.74 Ω',['0.04 Ω','2.7 Ω','0.35 Ω']),
Q('The minimum insulation resistance at 500 V DC for LV circuits is…','1 MΩ',['0.1 MΩ','100 Ω','1 kΩ']),
Q('SELV and PELV circuits are tested at…','250 V DC with a minimum of 0.5 MΩ',['1000 V DC','12 V AC','5000 V DC']),
Q('In a ring final circuit, r2 (cpc) is about… times r1 for 2.5/1.5 mm² cable.','1.67',['0.5','5','1']),
Q('When the ring is cross-connected line to neutral, readings at every socket should be…','about equal, at (r1 + rn) ÷ 4',['rising steadily along the ring','zero at every socket','infinite at the first socket']),
Q('A higher reading at one socket during ring testing suggests…','a spur or a loose connection',['perfect wiring','a faulty meter battery only','too many sockets']),
Q('An RCD must trip within… at its rated residual current.','300 ms',['3 s','30 s','3 ms']),
Q('An RCD must trip within… at five times its rated residual current.','40 ms',['4 s','400 ms','4 µs']),
Q('Which certificate is issued for a new installation?','Electrical Installation Certificate (EIC)',['Minor Works Certificate','EICR','a Receipt']),
Q('A 6 kW load at 230 V takes a design current of about…','26 A',['6 A','1,380 A','2.6 A'])],
[['Why must dead tests be done before live tests?','To make sure the installation is safe to energise: continuity, insulation and polarity faults must be found and corrected before the supply is connected.'],
['Describe the first step of a ring final circuit test.','Measure the end-to-end resistance of line, neutral and cpc at the consumer unit with the conductors disconnected; r1 and rn should be almost equal, and r2 about 1.67 times r1 for 2.5/1.5 mm² cable.'],
['Calculate voltage drop for 10 mm² cable (4.4 mV/A/m) carrying 40 A over 25 m.','Vd = 4.4 x 40 x 25 / 1000 = 4.4 V; within the 11.5 V limit.'],
['State the test voltages and minimum insulation resistance values for LV and SELV circuits.','LV up to 500 V: 500 V DC and 1 MΩ minimum. SELV and PELV: 250 V DC and 0.5 MΩ minimum.']]);

/* ---------- General Paper ---------- */
add('gpe',
`<h3>Writing Reports and Job Cards</h3><p>A site report has a clear structure: <b>title and date</b>, <b>introduction</b> (purpose), <b>findings</b> (what was observed), <b>conclusion</b> and <b>recommendations</b>. Use short sentences, measurements with units, and plain English. A <b>job card</b> records the client, address, task, materials used, time spent, tests carried out and sign-off. A <b>time sheet</b> records hours worked each day, and overtime is often paid at 1.5 × the normal rate.</p>
<h3>Memos, Emails and Incident Reports</h3><p>A memo is a short internal message with: To, From, Date, Subject and body. Professional emails need a clear subject, a polite greeting, a short message, and a closing with your name and contact. An <b>incident or accident report</b> records date, time, place, people involved, what happened, injuries, witnesses and action taken. It should be factual, with no blame or guessing, and reported straight away to the supervisor.</p>
<h3>Percentages, Ratios and Wages</h3><p>• Percentage of a number: 15% of 800 = 0.15 × 800 = <b>120</b>.<br>• Add 15% profit to a cost of 960: 960 × 1.15 = <b>1,104</b>.<br>• Discount of 10% on 1,200: 1,200 × 0.90 = <b>1,080</b>.<br>• Ratio: mixing 3 parts sand to 1 part cement means 4 parts in total; for 20 kg total, sand = 15 kg and cement = 5 kg.<br>• Wage: 40 hours at 25 per hour = 1,000; if 5 hours are overtime at 1.5 times: 35 × 25 + 5 × 37.5 = 875 + 187.5 = <b>1,062.5</b>.<br>• Average of 12, 15 and 18 = 15.</p>
<h3>Quotation to Invoice: A Worked Example</h3><p>Job: install 6 sockets and 4 lights. Cable 80 m at 12 per metre = 960. Fittings and accessories = 540. Labour 14 hours at 50 = 700. Subtotal = 2,200. Add 10% profit = 220, giving 2,420. A quotation is a fixed price offered before the work; an estimate is an approximate price that may change. After the job an invoice shows the work done, the amount due, payment terms and bank details.</p>
<h3>Effective Essays and Letters</h3><p>For essay or letter answers: plan first, write an introduction, develop points in separate paragraphs with examples, and end with a conclusion. For a formal letter use the sender's address, date, receiver's address, <b>Dear Sir/Madam</b> (ending <b>Yours faithfully</b>) or <b>Dear Mr Mensah</b> (ending <b>Yours sincerely</b>), a clear subject line, body paragraphs and a signature. Check spelling, punctuation and units before handing in.</p>`,
[Q('A formal letter beginning "Dear Sir" is ended with…','Yours faithfully',['Yours sincerely','Cheers','Regards, your buddy']),
Q('A letter beginning "Dear Mr Mensah" is ended with…','Yours sincerely',['Yours faithfully','Best wishes, friend','Goodbye']),
Q('The correct order of parts of a report is…','title, introduction, findings, conclusion, recommendations',['conclusion, title, findings','recommendations first, then title','findings, bill, title']),
Q('15% of 800 is…','120',['12','150','1,200']),
Q('Adding 15% profit to a cost of 960 gives…','1,104',['975','1,440','1,110']),
Q('A 10% discount on 1,200 gives…','1,080',['1,320','120','1,190']),
Q('Mixing sand and cement in the ratio 3:1 for 20 kg total gives sand of…','15 kg',['5 kg','10 kg','3 kg']),
Q('A worker earns 25 per hour and works 35 normal hours plus 5 overtime hours at 1.5 times. Total pay is…','1,062.5',['1,000','875','1,250']),
Q('The average of 12, 15 and 18 is…','15',['45','12','18']),
Q('A quotation differs from an estimate because a quotation is…','a fixed price offered before work starts',['always lower than an estimate','an invoice for completed work','a verbal guess only']),
Q('An accident report should be…','factual, with no blame or guessing, and made straight away',['delayed for several weeks','based on rumour','blame the injured person']),
Q('A memo is…','a short internal message with To, From, Date and Subject',['a formal letter to the public','an invoice','a contract']),
Q('Cable 80 m at 12 per metre costs…','960',['92','680','9,600'])],
[['Write the layout of a site accident report.','Date, time and place; people involved; what happened; injuries and witnesses; action taken; reporter\'s name and signature; sent immediately to the supervisor.'],
['Calculate the cost: 50 m cable at 8/m, 10 sockets at 15 each, 8 hours labour at 40/hour, plus 10% profit.','Cable 400 + sockets 150 + labour 320 = 870. Profit 87. Total = 957.'],
['Explain the difference between a quotation and an invoice.','A quotation is the fixed price offered before work; an invoice is the bill after the work, showing amount due and payment terms.'],
['Write the opening and closing of a formal letter to "Dear Sir/Madam".','Opening: sender address, date, receiver address, "Dear Sir/Madam" and subject line. Closing: "Yours faithfully", then the signature and printed name.']]);
})();
