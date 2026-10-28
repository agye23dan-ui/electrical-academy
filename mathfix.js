(function(){
// Turns the $...$ LaTeX in module content into plain readable text (offline, no library).
const BS=String.fromCharCode(92);
const SYM={times:'×',div:'÷',cdot:'·',approx:'≈',le:'≤',leq:'≤',ge:'≥',geq:'≥',to:'→',leftrightarrow:'↔',rightarrow:'→',dots:'…',ldots:'…',
Omega:'Ω',Delta:'Δ',Phi:'Φ',phi:'φ',theta:'θ',alpha:'α',beta:'β',rho:'ρ',pi:'π',mu:'µ',eta:'η',lambda:'λ',pm:'±',deg:'°',infty:'∞',
cos:'cos',sin:'sin',tan:'tan',ln:'ln',log:'log'};
const SUP={'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','-':'⁻','+':'⁺'};
// read a {...} group starting at i (s[i]=='{'); returns [content,nextIndex]
function grp(s,i){let d=0,j=i;for(;j<s.length;j++){if(s[j]=='{')d++;else if(s[j]=='}'){d--;if(!d)break}}return [s.slice(i+1,j),j+1]}
function conv(s,html){
 let o='',i=0;
 const arg=()=>{ // next argument: {group} or single char
  if(s[i]=='{'){const [g,n]=grp(s,i);i=n;return conv(g,html)}
  return s[i++]||''};
 while(i<s.length){
  const c=s[i];
  if(c==BS){
   const m=/^[a-zA-Z]+/.exec(s.slice(i+1));
   if(m){i+=1+m[0].length;const k=m[0];
    if(k=='text'||k=='mathrm'||k=='textbf'){o+=arg()}
    else if(k=='frac'){const a=arg(),b=arg();const w=x=>/^[\w.]+$/.test(x)?x:'('+x+')';o+=w(a)+'/'+w(b)}
    else if(k=='sqrt'){const a=arg();o+='√'+(/^[\w.]+$/.test(a)?a:'('+a+')')}
    else if(k=='bar'){o+=arg()+'̅'}
    else if(k=='left'||k=='right'){}
    else o+=(SYM[k]!==undefined?SYM[k]:k);
   } else {i++;const n=s[i++]||'';o+=(n==','||n==' '||n==';'||n=='!')?' ':n} // \, \% etc.
  } else if(c=='_'||c=='^'){
   i++;const a=arg();
   if(c=='^'&&/^[\d+-]+$/.test(a)&&a.split('').every(x=>SUP[x]))o+=a.split('').map(x=>SUP[x]).join('');
   else if(c=='^')o+='^'+(a.length>1?'('+a+')':a);
   else o+=html?'<sub>'+a+'</sub>':a;
  } else if(c=='{'||c=='}'){i++} else o+=s[i++];
 }
 return o;
}
function fixTex(s,html){
 if(typeof s!='string')return s;
 return s.replace(/\$([^$]{1,240}?)\$/g,(all,b)=>conv(b,html===true));
}
function fixModule(m){
 m.n=fixTex(m.n,true);
 m.q=m.q.map(q=>Array.isArray(q)?q.map(x=>Array.isArray(x)?x.map(fixTex):fixTex(x)):fixTex(q));
 if(m.w)m.w=m.w.map(w=>Array.isArray(w)?w.map(fixTex):fixTex(w));
 return m;
}
window.fixTex=fixTex;window.fixModule=fixModule;
})();
