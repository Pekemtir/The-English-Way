/* ===== NAVEGACIÓN Y PANTALLAS ===== */
let CUR={v:'home',a:null},NAV=[],TIMERS=[];
const TABS=['home','lessons','practice','dict','me'];
function clearTimers(){try{JG.stop()}catch(x){}TIMERS.forEach(t=>{clearInterval(t);clearTimeout(t)});TIMERS=[]}
function go(v,a,sub){clearTimers();if(SE)SE=null;leaveSession();
  if(sub){NAV.push(CUR)}else if(TABS.includes(v)){NAV=[]}
  CUR={v,a};show()}
function showCur(){clearTimers();SE=null;show()}
function up(){clearTimers();SE=null;leaveSession();CUR=NAV.pop()||{v:'home'};show()}
function show(){const A=$('#app');const f=V[CUR.v];const sub=!TABS.includes(CUR.v);
  document.body.classList.toggle('sub',sub);
  document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('on',t.dataset.v===(TABS.includes(CUR.v)?CUR.v:(CUR.tab||''))));
  $('#chips').innerHTML='<span class="chip" title="Racha">🔥 '+streakNow()+'</span><span class="chip" title="XP">⭐ '+S.xp+'</span>';
  A.innerHTML=f(CUR.a);window.scrollTo(0,0);if(f.post)f.post(CUR.a)}
const V={};
const pct=(a,b)=>b?Math.round(a/b*100):0;
const doneCount=lv=>Object.keys(S.done).filter(k=>k[1]===lv[1]).length;
const nextLesson=()=>LESSONS.find(l=>!S.done[l.id]);
function ring(p){const r=34,c=2*Math.PI*r;return'<svg class="ring" viewBox="0 0 80 80" role="img" aria-label="Objetivo diario"><circle class="bg" cx="40" cy="40" r="'+r+'"/><circle class="fg" cx="40" cy="40" r="'+r+'" stroke-dasharray="'+c+'" stroke-dashoffset="'+(c*(1-Math.min(1,p)))+'" transform="rotate(-90 40 40)"/><text x="40" y="47" text-anchor="middle">'+Math.round(Math.min(1,p)*100)+'%</text></svg>'}
function wotd(){const d=Math.floor(Date.now()/864e5);return WORDS[d%WORDS.length]}
V.home=()=>{const nl=nextLesson();const w=wotd();const wk=Object.keys(S.weak).length;
  let h=(!CAV&&S.set.voice&&!S.seen.voice?'<div class="card ch"><b>🔊 Voz inglesa</b><p class="muted" style="margin:6px 0">No hemos detectado ninguna voz inglesa en el dispositivo. Instálala para que el inglés suene bien (instrucciones en Me → Settings).</p><button class="btn sm sec" data-a="voicehide">Entendido</button></div>':'')+'<h1>¡Buenos días!</h1><p class="muted">Curso de inglés A1 + A2</p>';
  h+='<div class="card goal">'+ring(dayXP()/S.goal)+'<div class="grow"><b style="font:400 24px var(--f-d)">Objetivo de hoy</b><div class="muted">'+dayXP()+' / '+S.goal+' XP · racha '+streakNow()+' '+(streakNow()===1?'día':'días')+'</div></div></div>';
  if(nl)h+='<button class="lrow" data-a="lesson" data-v="'+nl.id+'" style="border-color:var(--yel)"><span class="ic">'+nl.ic+'</span><span class="grow"><small>Continúa ·  '+nl.lv.toUpperCase()+' lección '+nl.n+'</small><b>'+esc(nl.ca)+'</b><small>'+esSub(nl,0)+'</small></span><span>▶</span></button>';
  else h+='<div class="card">🎉 ¡Has completado todo el curso. ¡Sigue repasando!</div>';
  h+='<div class="card"><div class="row"><div class="grow"><small class="muted">Palabra del día</small><div style="font:400 28px var(--f-d);color:var(--yel)">'+w.em+' '+esc(w.ca)+'</div><div class="muted'+(nl&&nl.lv==='a2'&&nl.n>=8&&S.set.blur!==false?' blur" data-a="unblur" role="button':'')+'">'+esc(w.es)+'</div></div>'+spk(w.ca)+'</div></div>';
  h+='<div class="tiles"><button class="tile" data-a="daily"><span class="ic">📅</span><span class="t">Daily challenge</span><span class="s">'+(S.seen['dc'+today()]?'Hecho hoy ✓':'10 preguntas · +30 XP')+'</span></button><button class="tile" data-a="weak"><span class="ic">🔁</span><span class="t">Weak words</span><span class="s">'+wk+' para repasar</span></button></div>';
  h+='<h2>Tu progreso</h2><div class="card"><div class="row"><b class="grow">A1</b><span class="muted">'+doneCount('a1')+' / 26</span></div><div class="bar"><i style="width:'+pct(doneCount('a1'),26)+'%"></i></div><div class="row" style="margin-top:12px"><b class="grow">A2</b><span class="muted">'+doneCount('a2')+' / 24</span></div><div class="bar"><i style="width:'+pct(doneCount('a2'),24)+'%"></i></div></div>';
  const nb=Object.keys(S.badges).length;h+='<div class="muted">Insignias: '+nb+' / '+BADGES.length+'</div>';return h};
const a1Done=()=>LESSONS.filter(l=>l.lv==='a1').every(l=>S.done[l.id]);
const a2Open=()=>!!(S.set.tkey||a1Done()||(S.tests.a1&&S.tests.a1.pass));
V.lessons=()=>{const lv=CUR.a||'a1';
  let h='<h1>Lessons</h1><div class="pills"><button class="pill '+(lv==='a1'?'on':'')+'" data-a="lv" data-v="a1">A1 · '+doneCount('a1')+'/26</button><button class="pill '+(lv==='a2'?'on':'')+'" data-a="lv" data-v="a2">A2 · '+doneCount('a2')+'/24</button></div>';
  const lk=lv==='a2'&&!a2Open();
  if(lk)h+='<div class="card jg-lock"><b>🔒 A2 bloqueado</b><p class="muted">Se abre al completar las 26 lecciones de A1, o aprobando el <b>test de nivel A1</b> (40 preguntas, mínimo 90 %, un solo intento cada 24 horas), o con el código de acceso.</p><button class="btn" data-a="tests">Haz el test de A1</button></div>';
  h+=LESSONS.filter(l=>l.lv===lv).map(l=>{const d=S.done[l.id];if(lk)return'<button class="lrow jg-lock" data-a="glocked" data-need="Completa A1 o aprueba el test de A1"><span class="n">'+l.n+'</span><span class="ic">🔒</span><span class="grow"><b>'+esc(l.ca)+'</b><small>'+esc(l.es)+'</small></span></button>';return'<button class="lrow'+(d?' done':'')+'" data-a="lesson" data-v="'+l.id+'"><span class="n">'+l.n+'</span><span class="ic">'+l.ic+'</span><span class="grow"><b>'+esc(l.ca)+'</b><small>'+esSub(l,0)+' · '+l.min+' min</small></span>'+(d?'<span class="ck">✓ '+d.best+'%</span>':'')+'</button>'}).join('');return h};
/* ----- lección ----- */
let LP={id:'',p:0};
V.lesson=id=>{const l=LSM[id];if(LP.id!==id)LP={id,p:0};const n=l.steps.length;const p=LP.p;let h='<div class="muted">'+l.lv.toUpperCase()+' · lección '+l.n+'</div><h1>'+l.ic+' '+esc(l.ca)+'</h1><div class="muted">'+esSub(l,1)+'</div><div class="bar"><i style="width:'+Math.round(p/(n+2)*100)+'%"></i></div>';
  if(p===0){h+='<h2>Qué aprenderás</h2><div class="card"><ul style="margin:0;padding-left:20px">'+l.goals.map(g=>'<li>'+esc(g)+'</li>').join('')+'</ul></div><p class="muted">'+n+' pasos · '+l.qs.length+' preguntas · ~'+l.min+' min</p>'}
  else if(p<=n){const s=l.steps[p-1];h+='<h2>'+p+'. '+esc(s.t)+'</h2><div class="card">'+s.h+(s.tb?'<div class="tw">'+s.tb+'</div>':'')+(s.ex.length?'<div>'+s.ex.map(e=>'<div class="ex">'+spk(e[0])+'<div><b>'+esc(e[0])+'</b><div class="muted'+(blr(l)?' blur" data-a="unblur" role="button" title="Toca para ver la traducción':'')+'">'+esc(e[1])+'</div></div></div>').join('')+'</div>':'')+(s.tip?'<div class="tip">💡 '+s.tip+'</div>':'')+'</div>'}
  else if(p===n+1){h+='<h2>Palabras clave</h2><div class="card">'+l.kw.map(k=>'<div class="hit">'+spk(k[0])+'<b>'+esc(k[0])+'</b><span class="es'+(blr(l)?' blur" data-a="unblur" role="button':'')+'">'+esc(k[1])+'</span></div>').join('')+'</div>'+(l.th.length?'<div class="row">'+l.th.map(t=>'<button class="btn sec sm" data-a="theme" data-v="'+t+'">'+THM[t].ic+' '+esc(THM[t].ca)+'</button>').join('')+'</div>':'')}
  else{const d=S.done[id];h+='<h2>Práctica</h2><div class="card" style="text-align:center"><div class="big">'+(d?'✅':'✏️')+'</div><p>'+l.qs.length+' preguntas sobre esta lección.'+(d?'<br>Mejor resultado: <b>'+d.best+'%</b>':'')+'</p><button class="btn block" data-a="lpractice">'+(d?'Inténtalo de nuevo':'Empieza')+'</button></div>'+(d?(nextOf(id)?'<button class="btn sec block" data-a="lesson" data-v="'+nextOf(id).id+'">Siguiente lección ▶</button>':''):'')}
  h+='<div class="row" style="margin-top:16px"><button class="btn sec grow" data-a="lprev"'+(p===0?' disabled':'')+'>◀ Atrás</button>'+(p<n+2?'<button class="btn grow" data-a="lnext">'+(p===n+1?'Práctica ▶':'Siguiente ▶')+'</button>':'')+'</div>';return h};
const nextOf=id=>{const i=LESSONS.findIndex(l=>l.id===id);return LESSONS[i+1]};
ACT.lesson=id=>{if(/^a2/.test(id)&&!a2Open()){toast('🔒 A2 bloqueado: completa A1, aprueba el test de A1 o usa el código');return}go('lesson',id,CUR.v!=='lesson');};
ACT.lnext=()=>{LP.p++;showCur()};ACT.lprev=()=>{if(LP.p>0)LP.p--;showCur()};
ACT.lpractice=()=>{const l=LSM[LP.id];const qs=buildLessonQs(l);
  startSession(qs,{per:10,bonus:20,early:l.lv==='a1'&&l.n<=8,onDone:r=>{const sc=Math.round(r.acc*100);
    if(r.acc>=.6){const o=S.done[l.id];S.done[l.id]={best:Math.max(o?o.best:0,sc),date:today()};if(sc===100)S.stat.perfect++;addXP(0);toast('Lección completada ✓')}else toast('Repasa la lección e inténtalo de nuevo');r.html=lessonRecap(l,r.miss);save();checkBadges()}})};
function lessonRecap(l,miss){const ms=(miss&&miss.length)?'<div class="card" style="text-align:left;margin-top:14px"><b>🔁 Repasa tus fallos</b><ul>'+miss.slice(0,10).map(m=>'<li>'+esc(m.p)+' → <b>'+esc(m.a)+'</b>'+(m.e?'<br><small class="muted">'+esc(m.e)+'</small>':'')+'</li>').join('')+'</ul></div>':'<div class="card" style="text-align:center;margin-top:14px">🎉 Sin fallos en esta práctica</div>';return ms+lessonRecap0(l)}
function lessonRecap0(l){const g=(l.goals||[]).map(x=>'<li>'+esc(x)+'</li>').join('');const kw=(l.kw||[]).slice(0,8).map(k=>Array.isArray(k)?k.join(' = '):String(k)).map(esc);return '<div class="card" style="text-align:left;margin-top:14px"><b>📌 Resumen de la lección</b>'+(g?'<ul>'+g+'</ul>':'')+(kw.length?'<p class="muted">'+kw.join(' · ')+'</p>':'')+'</div>'}
ACT.lv=v=>{CUR.a=v;showCur()};
ACT.done=()=>showCur();ACT.up=()=>up();
ACT.tab=v=>go(v);
/* ----- práctica ----- */
V.practice=()=>{const wk=Object.keys(S.weak).length;
  const T=(a,ic,t,s)=>'<button class="tile" data-a="'+a+'"><span class="ic">'+ic+'</span><span class="t">'+t+'</span><span class="s">'+s+'</span></button>';
  return'<h1>Practice</h1><p class="muted">Elige cómo quieres entrenar.</p><div class="tiles">'+
  T('weak','🔁','Weak words',wk+' para repasar')+T('daily','📅','Daily challenge','10 preguntas')+T('themes','🗂️','Vocabulary','54 temas')+T('sentq','🧩','Sentence builder','Ordena las palabras')+
  T('vquiz','🔧','Verb quiz','Conjugación')+T('numq','🔢','Numbers','Dictado y escritura')+T('spellq','🔤','Spelling','Escucha las letras')+T('listenq','🎧','Listen & choose','Comprensión oral')+
  T('genq','✨','New sentences','Generador de frases')+T('meq','👤','About me',S.me?'Frases con tus datos':'Cuéntanos de ti')+T('games','🎮','Games','4 juegos')+T('tests','🧪','Level test','A1 y A2')+T('self','✅','Self-assessment','¿Qué sé hacer?')+'</div>'};
ACT.weak=()=>{const ks=shuf(Object.keys(S.weak)).slice(0,15);const qs=ks.map(keyToQ).filter(Boolean);
  if(!qs.length){toast('No tienes nada que repasar. ¡Buen trabajo!');return}startSession(qs,{per:8,bonus:10})};
ACT.daily=()=>{const first=!S.seen['dc'+today()];startSession(mixQ(10),{per:8,bonus:first?30:10,onDone:r=>{if(r.acc>=.6){S.seen['dc'+today()]=1;save()}}})};
ACT.sentq=()=>startSession(Array.from({length:10},()=>sentQ(rnd(3)?null:'a1')),{per:8});
ACT.numq=()=>startSession(Array.from({length:10},()=>numQ(rnd(3)?100:1000)),{per:8});
ACT.spellq=()=>startSession(Array.from({length:8},spellQ),{per:10});
ACT.listenq=()=>startSession(pickWords(seenPool(),10).map(w=>vq(w,'l')),{per:6});
ACT.themes=()=>go('themes',null,true);ACT.games=()=>go('games',null,true);ACT.tests=()=>go('tests',null,true);ACT.self=()=>go('self',null,true);ACT.vquiz=()=>go('vquiz',null,true);
V.themes=()=>{const lv=CUR.a||'a1';const ts=VOCAB.filter(t=>t.lv===lv);
  const open=ts.filter(t=>themeOpen(t.id));const all=[].concat(...open.map(themeWords));const avg=all.length?Math.round(all.reduce((a,w)=>a+mast(w.ca),0)/(all.length*4)*100):0;
  return'<h1>Vocabulary</h1><p class="muted">Vocabulario por temas. Cuanto menos domines una palabra, más veces aparece.</p><div class="pills"><button class="pill '+(lv==='a1'?'on':'')+'" data-a="tlv" data-v="a1">A1</button><button class="pill '+(lv==='a2'?'on':'')+'" data-a="tlv" data-v="a2">A2</button></div>'+
  '<div class="stack" style="margin-top:12px"><input class="fld" id="tsr" type="search" placeholder="🔍 Busca en inglés o español" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Buscar"><div class="card" id="tsres" hidden></div>'+
  '<div class="card"><div class="setrow"><span class="ic">📊</span><div class="grow"><b>Dominio del nivel '+lv.toUpperCase()+'</b><small class="muted" style="display:block">'+open.length+' de '+ts.length+' temas abiertos</small></div><span class="chip">'+avg+'%</span></div><div class="bar"><i style="width:'+avg+'%"></i></div></div>'+
  '<button class="btn sec block" data-a="opdic">📖 Diccionario de consulta ('+DIC.length+' palabras)</button><button class="btn block" data-a="mixv">Mezcla todo · 10 preguntas</button>'+
  ts.map(t=>{if(!themeOpen(t.id))return'<button class="lrow jg-lock" data-a="glocked" data-need="Completa la lección donde se trabaja este tema" data-v="'+t.id+'"><span class="ic">🔒</span><span class="grow"><b>'+esc(t.ca)+'</b><small>'+esc(t.es)+' · '+t.w.length+' palabras</small></span></button>';
  const p=setPct(t);const n=themeWords(t).length;return'<div class="card"><div class="setrow"><span class="ic">'+t.ic+'</span><div class="grow"><b>'+esc(t.ca)+'</b><div class="muted">'+esc(t.es)+' · '+n+' palabras</div></div><span class="chip">'+p+'%</span></div><div class="bar"><i style="width:'+p+'%"></i></div>'+
  '<div class="words">'+t.w.slice(0,6).map(w=>'<span class="w">'+esc(w[0])+'</span>').join('')+(t.w.length>6?'<span class="w">…</span>':'')+'</div>'+
  '<div class="row" style="margin-top:12px"><button class="btn small" data-a="tquiz" data-v="'+t.id+'">Cuestionario</button><button class="btn sec small" data-a="tflash" data-v="'+t.id+'">Tarjetas</button><button class="btn sec small" data-a="theme" data-v="'+t.id+'">Lista</button></div></div>'}).join('')+'</div>'};
function tRes(){const q=norm(($('#tsr')||{value:''}).value);const R=$('#tsres');if(!R)return;if(!q){R.hidden=true;R.innerHTML='';return}
  const sc=e=>e.n2===q||e.n1===q||e.n3===q?0:(e.n2.startsWith(q)||e.n1.startsWith(q)||e.n3.startsWith(q))?1:(e.n1.includes(q)||e.n3.includes(q))?2:9;
  const r=DIC.map(e=>[sc(e),e]).filter(x=>x[0]<9).sort((a,b)=>a[0]-b[0]||a[1].ca.length-b[1].ca.length).slice(0,12).map(x=>x[1]);
  R.hidden=false;R.innerHTML=r.length?r.map(dRow).join(''):'<div class="muted">Ningún resultado.</div>'}
document.addEventListener('input',e=>{if(e.target.id==='tsr')tRes()});
ACT.opdic=()=>{DT.tab='dic';go('dict')};
ACT.mixv=()=>{const lv=CUR.a||'a1';const ws=pickWords(seenPool().filter(w=>w.lv===lv),10);if(!ws.length){toast('Completa alguna lección para abrir vocabulario');return}startSession(ws.map(w=>vq(w)),{per:8})};
ACT.tlv=v=>{CUR.a=v;showCur()};
ACT.theme=id=>go('theme',id,true);
V.theme=id=>{const t=THM[id];return'<h1>'+t.ic+' '+esc(t.ca)+'</h1><div class="muted">'+esc(t.es)+' · '+t.w.length+' palabras</div><div class="row" style="margin:12px 0"><button class="btn" data-a="tflash" data-v="'+id+'">🗂️ Tarjetas</button><button class="btn sec" data-a="tquiz" data-v="'+id+'">❓ Cuestionario</button></div><div class="card">'+t.w.map(w=>'<div class="hit">'+spk(w[0])+'<span style="font-size:22px">'+(w[2]||'')+'</span><b>'+esc(w[0])+'</b><span class="es">'+esc(w[1])+'</span></div>').join('')+'</div>'};
ACT.tflash=id=>{const ws=pickWords(themeWords(THM[id]),20).map(w=>({k:'flash',kind:'Tarjetas',ca:w.ca,es:w.es,em:w.em,key:'w:'+w.ca}));startSession(ws,{per:3,bonus:10})};
ACT.tquiz=id=>{const ws=pickWords(themeWords(THM[id]),10);startSession(ws.map(w=>vq(w)),{per:8})};
/* ----- diccionario y verbos ----- */
let DT={tab:'dic',vf:'all'};
V.dict=()=>{let h='<h1>Dictionary</h1><div class="pills"><button class="pill '+(DT.tab==='dic'?'on':'')+'" data-a="dtab" data-v="dic">📖 Palabras ('+DIC.length+')</button><button class="pill '+(DT.tab==='verbs'?'on':'')+'" data-a="dtab" data-v="verbs">🔧 Verbs ('+VLIST.length+')</button></div>';
  if(DT.tab==='dic')h+='<input class="fld" id="dq" type="search" placeholder="Busca en inglés o español…" autocomplete="off" aria-label="Buscar"><div class="card" id="dres" style="margin-top:12px"></div>';
  else h+='<input class="fld" id="vq" type="search" placeholder="Busca un verbo…" autocomplete="off" aria-label="Buscar verbo"><div class="pills" style="margin-top:10px">'+[['all','Todos'],['r','Regulares'],['x','Irregulares']].map(f=>'<button class="pill '+(DT.vf===f[0]?'on':'')+'" data-a="vf" data-v="'+f[0]+'">'+f[1]+'</button>').join('')+'</div><div class="card" id="vres"></div>';return h};
V.dict.post=()=>{if(DT.tab==='dic')dictRes();else verbRes()};
function dictRes(){const q=norm(($('#dq')||{value:''}).value);const R=$('#dres');if(!R)return;
  if(!q){R.innerHTML='<div class="muted">Escribe para buscar entre '+DIC.length+' entradas. Prueba «house», «kitchen» o «train».</div>'+pick(DIC,8).map(dRow).join('');return}
  const sc=e=>e.n2===q||e.n1===q||e.n3===q?0:(e.n2.startsWith(q)||e.n1.startsWith(q)||e.n3.startsWith(q))?1:(e.n1.includes(q)||e.n3.includes(q))?2:9;
  const r=DIC.map(e=>[sc(e),e]).filter(x=>x[0]<9).sort((a,b)=>a[0]-b[0]||a[1].ca.length-b[1].ca.length).slice(0,60).map(x=>x[1]);
  R.innerHTML=r.length?r.map(dRow).join(''):'<div class="muted">Ningún resultado.</div>'}
const dRow=e=>'<div class="hit">'+spk(e.ca)+'<span style="font-size:20px">'+(e.em||'')+'</span><b'+(e.kind==='v'?' data-a="verb" data-v="'+esc(e.ca)+'" style="cursor:pointer;color:var(--yel)"':'')+'>'+esc(e.ca)+'</b><span class="es">'+esc(e.es)+'</span></div>';
function verbRes(){const q=norm(($('#vq')||{value:''}).value);const R=$('#vres');if(!R)return;
  const f=DT.vf;const ok=v=>f==='all'||(f==='x'?v.irregular:!v.irregular);
  const l=VLIST.filter(i=>ok(VERBS[i])&&(!q||norm(i).includes(q)||norm(VERBS[i].es).includes(q)));
  R.innerHTML=l.length?l.map(i=>'<button class="hit" style="width:100%;background:none;border:0;border-bottom:1px dashed var(--line);text-align:left;color:inherit" data-a="verb" data-v="'+esc(i)+'"><b>'+esc(i)+'</b>'+(VERBS[i].irregular?' <small style="color:var(--yel)">'+esc(VERBS[i].pa)+' · '+esc(VERBS[i].pp)+'</small>':'')+'<span class="es">'+esc(VERBS[i].es)+'</span></button>').join(''):'<div class="muted">Ningún verbo.</div>'}
ACT.dtab=v=>{DT.tab=v;showCur()};ACT.vf=v=>{DT.vf=v;showCur()};
document.addEventListener('input',e=>{if(e.target.id==='dq')dictRes();if(e.target.id==='vq')verbRes()});
let VT={t:'pres'};
V.verb=inf=>{const v=VERBS[inf];if(!v.T[VT.t])VT.t='pres';const t=VT.t;const nm=VT_NAMES[t];const rows=v.T[t];const P=t==='imper'?IMPER_P:PRON,PE=t==='imper'?IMPER_ES:PRON_ES;
  let h='<h1>'+esc(inf)+' '+spk(inf)+'</h1><div class="muted">'+esc(v.es)+(v.irregular?' · <b>irregular</b>':' · regular')+'</div>';
  h+='<div class="card tw"><b>Formas principales</b><table class="conj"><tbody><tr><th>Base</th><th>3.ª pers.</th><th>-ing</th><th>Past simple</th><th>Participio</th></tr><tr>'+[inf,v.s3,v.ing,v.pa,v.pp].map(x=>'<td'+(v.irregular&&(x===v.pa||x===v.pp)&&x!==inf+'ed'?' style="font-weight:800;color:var(--yel)"':'')+'>'+esc(x)+'</td>').join('')+'</tr></tbody></table><div class="muted" style="margin-top:6px">'+spk(inf)+' '+spk(v.pa)+' '+spk(v.pp)+'</div></div>';
  h+='<div class="pills">'+TENSES.filter(x=>v.T[x]).map(x=>'<button class="pill '+(x===t?'on':'')+'" data-a="vt" data-v="'+x+'">'+VT_NAMES[x][0]+'</button>').join('')+'</div>';
  h+='<div class="card"><b>'+nm[1]+'</b><div class="muted">'+nm[2]+'</div></div><div class="card tw"><table class="conj"><tbody>'+rows.map((f,i)=>f?'<tr><th scope="row">'+P[i]+'<br><small>'+PE[i]+'</small></th><td>'+esc(f)+'</td><td>'+spk(f)+'</td></tr>':'').join('')+'</tbody></table></div>';
  h+='<button class="btn block" data-a="vpractice" data-v="'+esc(inf)+'">🧠 Practica «'+esc(inf)+'»</button>';return h};
ACT.verb=inf=>go('verb',inf,CUR.v!=='verb');ACT.vt=t=>{VT.t=t;showCur()};
ACT.vpractice=inf=>{const qs=[];for(let i=0;i<12;i++)qs.push(verbQ(inf,VT.t==='imper'&&rnd(2)?null:(rnd(2)?VT.t:null)));startSession(qs.filter(Boolean),{per:8})};
let VQ={sel:'all'};
V.vquiz=()=>'<h1>Verb quiz</h1><p class="muted">Completa la forma verbal correcta. Elige el tiempo.</p><div class="pills"><button class="pill '+(VQ.sel==='all'?'on':'')+'" data-a="vqs" data-v="all">Todos</button>'+TENSES.map(t=>'<button class="pill '+(VQ.sel===t?'on':'')+'" data-a="vqs" data-v="'+t+'">'+VT_NAMES[t][0]+'</button>').join('')+'</div><button class="btn block" data-a="vqgo">Empieza (12 preguntas)</button>';
ACT.vqs=v=>{VQ.sel=v;showCur()};
ACT.vqgo=()=>{const qs=[];while(qs.length<12){const q=verbQ(vpool()[rnd(vpool().length)],VQ.sel==='all'?null:VQ.sel);if(q)qs.push(q)}startSession(qs,{per:8})};
ACT.voicehide=()=>{S.seen.voice=1;save();showCur()};

