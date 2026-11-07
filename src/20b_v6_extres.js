
/* ===== v6: Sobre mi, generador de frases, A2 difuminado, puerta de práctica ===== */
const seenPool=()=>{const s=seenWords();if(s.length>=8)return s;const f=WORDS.filter(w=>(LSM.a11?LSM.a11.th:[]).includes(w.th));return f.length>=8?f:WORDS.filter(w=>w.th==='greet')};
const vpool=()=>{const p=VPOOL();return p.length?p:['be','have'].filter(x=>VERBS[x])};
const a2Any=()=>!!(S.set.tkey||Object.keys(S.done).some(id=>LSM[id]&&LSM[id].lv==='a2'));
/* Sobre mi */
const isVow=s=>/^[aeiouhàèéíòóúAEIOUH]/.test(s);
function meQs(){const m=S.me||{};const out=[];
  if(m.name){out.push({k:'build',kind:'Sobre mí',es:'Me llamo '+m.name+'.',tok:['my','name','is',m.name],extra:['am','I'],ans:'my name is '+m.name,tip:'Presentarse: my name is…',key:'me:name'});
    out.push({k:'type',kind:'Sobre mí',p:'«Me llamo '+esc(m.name)+'»',ans:'my name is '+m.name,alts:['my name is '+m.name],e:'My name is '+m.name+'.',h:'Empieza por «my»',key:'me:name2'})}
  if(m.town){out.push({k:'build',kind:'Sobre mí',es:'Soy de '+m.town+'.',tok:['I','am','from',m.town],extra:['live','have'],ans:'I am from '+m.town,tip:'To be + from + place.',key:'me:town'});
    out.push({k:'type',kind:'Sobre mí',p:'«Soy de '+esc(m.town)+'»',ans:'I am from '+m.town,alts:['I am from '+m.town],e:'I am from '+m.town+'.',h:'Empieza por «I»',key:'me:town2'})}
  if(m.age>0&&m.age<120){const n=catNum(+m.age);
    out.push({k:'type',kind:'Sobre mí',p:'«Tengo '+m.age+' años»',ans:'I am '+n+' years old',alts:['I am '+n+' years old'],e:'I am '+n+' years old.',h:'Empieza por «I am»',key:'me:age'});
    out.push({k:'build',kind:'Sobre mí',es:'Tengo '+m.age+' años.',tok:['I','am'].concat(n.split(' ')).concat(['years','old']),extra:['have'],ans:'I am '+n+' years old',tip:'La edad se dice con «I am», no con «I have».',key:'me:age2'})}
  return shuf(out)}
V.meform=()=>{const m=S.me||{};const f=(id,l,v,t)=>'<label class="muted">'+l+'</label><input id="'+id+'" type="'+(t||'text')+'" value="'+esc(v||'')+'" autocomplete="off" style="width:100%;padding:12px;margin:4px 0 12px;border-radius:12px;border:2px solid var(--line);background:var(--surface);color:var(--ink);font:inherit">';
  return'<h1>👤 About me</h1><p class="muted">Escribe tus datos para practicar frases con ellos. Se guardan solo en este navegador.</p>'+f('mn','Nombre',m.name)+f('mt','Ciudad o pueblo',m.town)+f('ma','Edad (opcional)',m.age,'number')+'<button class="btn block" data-a="mesave">Guardar</button>'+(S.me?'<button class="btn sec block" style="margin-top:10px" data-a="medel">Borrar mis datos</button>':'')};
ACT.mesave=()=>{const n=($('#mn').value||'').trim().slice(0,30),t=($('#mt').value||'').trim().slice(0,30),a=parseInt($('#ma').value,10);
  if(!n&&!t&&!(a>0)){toast('Escribe al menos un dato');return}
  S.me={name:n,town:t,age:a>0&&a<120?a:0};save();toast('Guardado ✓');up()};
ACT.medel=()=>{S.me=null;save();toast('Datos borrados');up()};
ACT.meq=()=>{if(!S.me){go('meform',null,true);return}const q=meQs();if(!q.length){go('meform',null,true);return}startSession(q,{per:8})};
ACT.meedit=()=>go('meform',null,true);
/* Generador de frases por plantillas (solo con verbos y palabras ya estudiados) */
const GFR=[
 {need:'a15',ca:'I have',es:'Tengo',art:'a'},{need:'a18',ca:'I like',es:'Me gusta',art:'a'},{need:'a19',ca:'I need',es:'Necesito',art:'a'},
 {need:'a17',ca:'Where is',es:'¿Dónde está',art:'the',q:1}];
const GTH=new Set(['house','furniture','fruit','animals','things','classroom','transport','town']);
const NP=w=>{if(!GTH.has(w.th))return null;if(!/^[a-z]+$/.test(w.ca)||/s$/.test(w.ca))return null;return{w,n:w.ca}};
function genQ(){
  const fr=GFR.filter(f=>dn(f.need));if(!fr.length)return null;
  const nouns=seenPool().map(NP).filter(Boolean);if(nouns.length<3)return null;
  const f=one(fr),x=one(nouns);
  const art=f.art==='the'?'the':(/^[aeiou]/.test(x.n)?'an':'a');
  const tok=f.ca.split(' ').concat([art,x.n]);
  const es=f.es+(f.q?' ':' … ')+'('+x.w.es+')'+(f.q?'?':'.');
  const pool=WORDS.map(NP).filter(Boolean);
  const ex=pick(pool.filter(y=>y.n!==x.n).map(y=>y.n),2);
  return{k:'build',kind:'Frase nueva',es,tok,extra:ex,ans:tok.join(' '),tip:'Verbo + a / an / the + nombre (an delante de vocal).',key:'g:'+f.ca+'.'+x.w.ca}}
ACT.genq=()=>{const qs=[];let t=0;while(qs.length<10&&t++<80){const q=genQ();if(q&&!qs.some(x=>x.ans===q.ans))qs.push(q)}
  if(qs.length<3){toast('Completa más lecciones para abrir este generador');return}startSession(qs,{per:8})};
/* A2: traducciones difuminadas hasta tocarlas */
ACT.unblur=(v,el)=>el.classList.add('on');
ACT.blur=()=>{S.set.blur=S.set.blur===false;save();showCur()};
/* escalera de castellano (como euskera): A1 y A2 1-7 visible; A2 8+ ejemplos y palabras clave borrosos; A2 16+ también los subtítulos */
const blr=l=>l.lv==='a2'&&l.n>=8&&S.set.blur!==false;
const blrSub=l=>l.lv==='a2'&&l.n>=16&&S.set.blur!==false;
const esSub=(l,tap)=>blrSub(l)?'<span class="blur"'+(tap?' data-a="unblur" role="button" title="Toca para ver la traducción"':'')+'>'+esc(l.es)+'</span>':esc(l.es);
