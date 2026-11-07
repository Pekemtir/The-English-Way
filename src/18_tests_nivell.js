/* ===== TESTS DE NIVEL ===== */
const TB={a1:{n:'A1',blocks:[['Bases y presentaciones',1,6],['Presente y verbos',7,12],['Preguntas y vida diaria',13,19],['Pasado y servicios',20,26]]},
a2:{n:'A2',blocks:[['Pasados',1,6],['Pronombres y futuro',7,12],['Comparar, condicional y subjuntivo',13,18],['Opiniones, conectores y vida real',19,24]]}};
V.tests=()=>{let h='<h1>Level test</h1><p>40 preguntas en 4 bloques. Para aprobar hace falta un <b>90 %</b> de aciertos (36 de 40). Sin ayudas ni explicaciones hasta el final. Solo se puede hacer <b>un test cada 24 horas</b>. Aprobar el test de A1 abre las lecciones de A2 (también se abren al completar A1 o con el código de acceso).</p>';
  ['a1','a2'].forEach(lv=>{const r=S.tests[lv];h+='<div class="card"><h3>Test '+TB[lv].n+'</h3>'+(r?'<div>'+(r.pass?'<span class="ok">✓ Aprobado</span>':'<span class="err">No aprobado</span>')+' · '+r.pct+' % · '+esc(r.date)+'</div>'+(r.next>Date.now()&&!S.set.tkey?'<div class="muted">Podrás hacer otro test a partir de '+new Date(r.next).toLocaleString('es-ES')+'.</div>':''):'<div class="muted">Todavía no lo has hecho.</div>')+'<button class="btn block" style="margin-top:10px" data-a="tstart" data-v="'+lv+'">Empieza el test '+TB[lv].n+'</button></div>'});return h};
ACT.tstart=lv=>{const r=S.tests[lv];if(lv==='a2'&&!a2Open()){toast('🔒 Primero debes abrir A2: completa A1 o aprueba el test de A1');return}
  if(r&&r.next>Date.now()&&!S.set.tkey){toast('Solo se puede hacer un test cada 24 horas');return}
  const qs=[];TB[lv].blocks.forEach((b,bi)=>{const cand=[];LESSONS.filter(l=>l.lv===lv&&l.n>=b[1]&&l.n<=b[2]).forEach(l=>l.qs.forEach((q,i)=>{if(q.k==='choice'||q.k==='type'||q.k==='build')cand.push([l.id,i])}));
    pick(cand,10).forEach(c=>{const q=lq(c[0],c[1]);q.blk=bi;q.kind='Bloque '+(bi+1)+' · '+b[0];qs.push(q)})});
  startSession(qs,{test:1,per:2,noRetry:1,onDone:r2=>{const tot=r2.acc;const bl=TB[lv].blocks.map((b,i)=>{const x=r2.blk[i]||{ok:0,tot:0};return{n:b[0],p:pct(x.ok,x.tot)}});
    const pass=tot>=.9;const first=!(S.tests[lv]&&S.tests[lv].pass);
    S.tests[lv]={pass:pass||(S.tests[lv]&&S.tests[lv].pass)||false,pct:Math.round(tot*100),date:today(),next:Date.now()+864e5,blocks:bl};
    r2.html='<h3>'+(pass?'🎓 Test '+TB[lv].n+' ¡aprobado!':'Todavía no')+'</h3>'+bl.map(b=>'<div class="res"><span>'+esc(b.n)+'</span><b class="'+(b.p>=90?'ok':'err')+'">'+b.p+' %</b></div>').join('')+(pass?'':'<p class="muted">Hace falta un 90 % de aciertos (36 de 40). Repasa las lecciones de los bloques más flojos e inténtalo de nuevo dentro de 24 horas.</p>');
    if(pass&&first)addXP(100);save();checkBadges()}})};
