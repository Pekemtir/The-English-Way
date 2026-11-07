
(function(){
/* ===== MOTOR DE CONJUGACIÓN · INGLÉS (reglas + irregulares) ===== */
const PRON=['I','you','he / she / it','we','you','they'];
const PRON_ES=['yo','tú','él / ella / ello','nosotros','vosotros','ellos / ellas'];
const PRON_S=['I','you','he','we','you','they'];
const IMPER_P=['you','let\'s','you (all)'];
const IMPER_ES=['tú / usted','vamos a…','vosotros / ustedes'];
const BE_PR=['am','are','is','are','are','are'],BE_PA=['was','were','was','were','were','were'],HAVE_PR=['have','have','has','have','have','have'];
const vowel=/[aeiou]/;
function s3(b){
  if(b==='be')return'is';if(b==='have')return'has';if(b==='do')return'does';if(b==='go')return'goes';
  if(/(ss|sh|ch|x|z|o)$/.test(b))return b+'es';
  if(/[^aeiou]y$/.test(b))return b.slice(0,-1)+'ies';
  return b+'s';
}
function ing(b,d){
  if(b==='be')return'being';
  if(/ie$/.test(b))return b.slice(0,-2)+'ying';
  if(/[^aeiouye]e$/.test(b)||/[^e]ye$/.test(b)&&false)return b.slice(0,-1)+'ing';
  if(/[^aeiou]e$/.test(b)&&!/ee$/.test(b))return b.slice(0,-1)+'ing';
  if(d)return b+b.slice(-1)+'ing';
  return b+'ing';
}
function edf(b,d){
  if(/e$/.test(b))return b+'d';
  if(/[^aeiou]y$/.test(b))return b.slice(0,-1)+'ied';
  if(d)return b+b.slice(-1)+'ed';
  return b+'ed';
}
/* kind: r (regular) | x (irregular). o = {d:doblar consonante, ing:forma -ing especial} */
const VERBS={};
function addV(inf,es,past,pp,o){
  o=o||{};
  const v={inf,es,base:inf,o,irregular:!!past};
  const pa=past||edf(inf,o.d);
  const part=pp||pa;
  const g=o.ing||ing(inf,o.d);
  const pr=inf==='be'?BE_PR.slice():inf==='have'?HAVE_PR.slice():PRON.map((_,i)=>i===2?s3(inf):inf);
  const pst=inf==='be'?BE_PA.slice():PRON.map(()=>pa);
  const aux=inf==='be'?['am','are','is','are','are','are']:BE_PR;
  v.T={
    pres:pr,
    cont:aux.map(a=>a+' '+g),
    past:pst,
    pastc:BE_PA.map(a=>a+' '+g),
    perf:HAVE_PR.map(h=>h+' '+part),
    fut:PRON.map(()=>'will '+inf),
    going:BE_PR.map(a=>a+' going to '+inf)
  };
  v.s3=pr[2];v.ing=g;v.pa=pa;v.pp=part;
  v.irregular=!!past&&(past!==edf(inf,o.d)||part!==pa);
  VERBS[inf]=v;return v;
}
/* ---- verbos regulares (se cierra con _ si necesitan doblar la última consonante: stop_) ---- */
`walk:caminar|work:trabajar|play:jugar, tocar|watch:mirar, ver|listen:escuchar|talk:hablar|ask:preguntar|answer:responder|help:ayudar|look:mirar|wait:esperar|want:querer|need:necesitar|like:gustar, querer|love:amar, encantar|live:vivir|use:usar|study:estudiar|cook:cocinar|clean:limpiar|open:abrir|close:cerrar|start:empezar|finish:terminar|stay:quedarse|visit:visitar|dance:bailar|call:llamar|change:cambiar|check:comprobar|cry:llorar|decide:decidir|enjoy:disfrutar|hate:odiar|hope:esperar (desear)|invite:invitar|join:unirse|laugh:reír|move:mover, mudarse|order:pedir (encargar)|paint:pintar|phone:llamar por teléfono|practise:practicar|remember:recordar|rain:llover|shout:gritar|smile:sonreír|snow:nevar|tidy:ordenar|try:intentar|turn:girar|wash:lavar|wish:desear|worry:preocuparse|arrive:llegar|believe:creer|carry:llevar (cargar)|miss:echar de menos, perder (el tren)|offer:ofrecer|pick:coger, recoger|post:enviar por correo|pull:tirar|push:empujar|rent:alquilar|repeat:repetir|share:compartir|show:mostrar|sound:sonar|surf:hacer surf|text:enviar un mensaje|thank:agradecer|touch:tocar|trust:confiar|type:teclear|wake_up_:x`.split('|').filter(x=>!/_:/.test(x)).forEach(x=>{const [a,b]=x.split(':');addV(a,b)});
`stop:parar|plan:planear|shop:ir de compras|drop:dejar caer|hug:abrazar|jog:hacer footing|chat:charlar|clap:aplaudir|skip:saltar|tap:golpear suavemente|rub:frotar|travel_:x`.split('|').filter(x=>!/_:/.test(x)).forEach(x=>{const [a,b]=x.split(':');addV(a,b,null,null,{d:1})});
/* ---- irregulares: inf:es:past:participio ---- */
`be:ser, estar:was:been|have:tener, haber:had:had|do:hacer:did:done|go:ir:went:gone|come:venir:came:come|see:ver:saw:seen|say:decir:said:said|get:conseguir, obtener, llegar:got:got|make:hacer, fabricar:made:made|take:coger, llevar:took:taken|give:dar:gave:given|know:saber, conocer:knew:known|think:pensar:thought:thought|find:encontrar:found:found|tell:contar, decir:told:told|eat:comer:ate:eaten|drink:beber:drank:drunk|sleep:dormir:slept:slept|buy:comprar:bought:bought|bring:traer:brought:brought|run:correr:ran:run|write:escribir:wrote:written|read:leer:read:read|speak:hablar:spoke:spoken|meet:conocer, quedar con:met:met|sit:sentarse:sat:sat|stand:estar de pie:stood:stood|leave:salir, dejar:left:left|lose:perder:lost:lost|pay:pagar:paid:paid|put:poner:put:put|sell:vender:sold:sold|send:enviar:sent:sent|spend:gastar, pasar (tiempo):spent:spent|win:ganar:won:won|wear:llevar puesto:wore:worn|begin:empezar:began:begun|break:romper:broke:broken|build:construir:built:built|catch:atrapar, coger:caught:caught|choose:elegir:chose:chosen|drive:conducir:drove:driven|fall:caer:fell:fallen|feel:sentir:felt:felt|fly:volar:flew:flown|forget:olvidar:forgot:forgotten|hear:oír:heard:heard|hold:sostener:held:held|keep:guardar, mantener:kept:kept|let:dejar, permitir:let:let|ride:montar:rode:ridden|ring:sonar (llamar):rang:rung|sing:cantar:sang:sung|swim:nadar:swam:swum|teach:enseñar:taught:taught|throw:lanzar:threw:thrown|understand:entender:understood:understood|wake:despertar:woke:woken|cut:cortar:cut:cut|hit:golpear:hit:hit|hurt:doler, herir:hurt:hurt|shut:cerrar:shut:shut|cost:costar:cost:cost|draw:dibujar:drew:drawn|grow:crecer:grew:grown|hide:esconder:hid:hidden|lend:prestar:lent:lent|mean:significar:meant:meant|steal:robar:stole:stolen|shake:agitar:shook:shaken|sweep:barrer:swept:swept|bite:morder:bit:bitten|blow:soplar:blew:blown|burn:quemar:burnt:burnt|dream:soñar:dreamt:dreamt|forgive:perdonar:forgave:forgiven|hang:colgar:hung:hung|lead:dirigir:led:led|light:encender:lit:lit|rise:subir, salir (el sol):rose:risen|seek:buscar:sought:sought|set:fijar, poner:set:set|shine:brillar:shone:shone|shoot:disparar:shot:shot|sink:hundirse:sank:sunk|slide:deslizarse:slid:slid|spell:deletrear:spelt:spelt|spread:extender:spread:spread|stick:pegar:stuck:stuck|swear:jurar:swore:sworn|tear:romper (rasgar):tore:torn|wake_up_:x`.split('|').filter(x=>!/_:/.test(x)).forEach(x=>{const p=x.split(':');addV(p[0],p[1],p[2],p[3],p[0]==='run'||p[0]==='sit'||p[0]==='swim'||p[0]==='begin'||p[0]==='get'||p[0]==='put'||p[0]==='cut'||p[0]==='hit'||p[0]==='let'||p[0]==='shut'||p[0]==='set'||p[0]==='forget'||p[0]==='win'||p[0]==='stick'||p[0]==='spread'?{d:1}:{})});
/* las formas -ing que no siguen la regla */
VERBS.be.ing='being';
/* ajustes británicos y casos sueltos */
addV('show','mostrar','showed','shown');
addV('learn','aprender','learned','learned');
addV('travel','viajar','travelled','travelled',{d:1,ing:'travelling'});
const VT_NAMES={
  pres:['Present simple','Present simple','Lo que haces habitualmente: «I walk»'],
  cont:['Present continuous','Present continuous','Lo que haces ahora mismo: «I am walking»'],
  past:['Past simple','Past simple','Una acción terminada en el pasado: «I walked»'],
  pastc:['Past continuous','Past continuous','Lo que estabas haciendo en un momento del pasado: «I was walking»'],
  perf:['Present perfect','Present perfect','Pasado con relación al presente: «I have walked»'],
  fut:['Future (will)','Future with will','Decisiones, predicciones y promesas: «I will walk»'],
  going:['Going to','Be going to','Planes e intenciones: «I am going to walk»']
};
