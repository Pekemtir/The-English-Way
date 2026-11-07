/* ===== FRASES PARA CONSTRUIR (originales) y COMPLEMENTOS PARA CLOZE · INGLÉS ===== */
const SENT=[];
function SN(lv,s){s.trim().split('\n').forEach(l=>{const p=l.split('|');if(p.length<3)return;SENT.push({lv,es:p[0],t:p[1].trim().split(' '),x:p[3]?p[3].trim().split(' '):[],tip:p[2]})})}
SN('a1',`
Me llamo Marta|my name is Marta|My name is… para decir cómo te llamas.
Soy de Valencia|I am from Valencia|Be + from + lugar.
Tengo veinte años|I am twenty years old|La edad en inglés se dice con «be», no con «have».
Vivo con mi hermana|I live with my sister|Live with + persona.
Tu casa es muy grande|your house is very big|Your = tu / vuestro.
Mi padre trabaja en un banco|my father works in a bank|Con he/she/it, el verbo lleva -s: works.
¿Dónde vives?|where do you live|Where + do + sujeto + verbo.
¿Cómo te llamas?|what is your name|What is your name?
¿Qué hora es?|what time is it|What time is it?
Hay un parque cerca|there is a park near here|There is + singular.
El gato está debajo de la mesa|the cat is under the table|Under = debajo de.
La cocina es pequeña|the kitchen is small|El adjetivo no cambia con el género.
Quiero un café con leche|I want a coffee with milk|Want + sustantivo.
¿Cuánto cuesta este pan?|how much is this bread|How much is…?
Compro fruta en el mercado|I buy fruit at the market|At the market.
No tengo hambre|I am not hungry|Hungry se usa con be.
Hoy hace calor|it is hot today|El clima se dice con it is.
Mañana llueve|it rains tomorrow|It + verbo para el clima.
Me levanto a las siete|I get up at seven|Get up = levantarse.
Desayuno a las ocho|I have breakfast at eight|Have breakfast.
Salimos de casa a las nueve|we leave home at nine|Leave home.
Trabajamos de lunes a viernes|we work from Monday to Friday|From… to…
Ceno con mi familia|I have dinner with my family|Have dinner.
Me gusta mucho el cine|I like the cinema very much|Like + sustantivo.
Nos gustan los gatos|we like cats|Like + plural, sin artículo.
Tengo que estudiar|I have to study|Have to + verbo.
Puedo nadar|I can swim|Can + verbo base.
No puedo venir|I can not come|Can not / cannot.
Vamos al cine|we go to the cinema|Go to + lugar.
Voy a la escuela en autobús|I go to school by bus|By + transporte.
Me duele la cabeza|I have a headache|Have a headache.
Tengo fiebre|I have a temperature|Have a temperature.
Gira a la derecha en el banco|turn right at the bank|Imperativo: verbo base.
Sigue todo recto|go straight on|Go straight on.
La estación está al lado del banco|the station is next to the bank|Next to = al lado de.
Esta casa es muy bonita|this house is very nice|This = este / esta.
Mi madre es alta y delgada|my mother is tall and thin|Be + adjetivo.
Los niños juegan en el parque|the children play in the park|Children es plural irregular.
Mis amigos son muy simpáticos|my friends are very friendly|Friendly = simpático.
Quiero ver a mis abuelos|I want to see my grandparents|Want to + verbo.
No hablo francés|I do not speak French|Do not + verbo base.
Ella no trabaja los domingos|she does not work on Sundays|Does not con he/she/it.
El tren sale a las cinco|the train leaves at five|Con he/she/it: leaves.
Necesito un billete|I need a ticket|Need + sustantivo.
Perdone, ¿dónde está el banco?|excuse me where is the bank|Excuse me para llamar la atención.
Me gusta correr por la mañana|I like running in the morning|Like + verbo con -ing.
Mi cumpleaños es en mayo|my birthday is in May|In + mes.
En verano voy a la playa|in summer I go to the beach|In + estación.
Ahora estoy comiendo|I am eating now|Be + verbo con -ing.
¿Qué estás haciendo?|what are you doing|What + be + sujeto + -ing.
Ayer estuve en casa|I was at home yesterday|Pasado de be: was / were.
Ayer comí pasta|I ate pasta yesterday|Pasado irregular: ate.
Trabajé mucho el lunes|I worked a lot on Monday|Pasado regular: -ed.
Voy a estudiar mañana|I am going to study tomorrow|Be going to + verbo.
`);
SN('a2',`
Ayer fui al médico|I went to the doctor yesterday|Pasado irregular: went.
El año pasado viajamos a Italia|we travelled to Italy last year|Travelled: doble «l» en inglés británico.
Esta semana he trabajado mucho|I have worked a lot this week|Present perfect: have + participio.
Cuando era niña vivía en Girona|when I was a child I lived in Girona|When + pasado simple.
Hacía frío y llovía|it was cold and it was raining|Pasado continuo para describir.
Mañana vendré a tu casa|I will come to your house tomorrow|Will + verbo base.
El mes que viene tendremos vacaciones|we will have a holiday next month|Next month = el mes que viene.
Voy a comprarlo|I am going to buy it|Be going to + verbo.
Dame el libro|give me the book|Give me…
No me lo digas|do not tell me|Do not + verbo base.
Es más alto que yo|he is taller than me|Comparativo corto: taller than.
Ella es tan simpática como tú|she is as friendly as you|As… as.
Querría un café, por favor|I would like a coffee please|Would like = querría.
Deberías descansar|you should rest|Should para dar consejos.
Tienes que llegar pronto|you must arrive early|Must = tener que (obligación fuerte).
No debes fumar aquí|you must not smoke here|Must not = prohibición.
Acabo de llegar|I have just arrived|Just + present perfect.
Todavía no he cenado|I have not had dinner yet|Yet al final en negativas.
Ya he terminado|I have already finished|Already en afirmativas.
Estoy leyendo un libro|I am reading a book|Present continuous.
Empieza a llover|it is starting to rain|Start to + verbo.
Pienso en ti|I think about you|Think about.
Depende del tiempo|it depends on the weather|Depend on.
Si llueve, nos quedamos en casa|if it rains we stay at home|If + presente, presente.
Si hace sol, iremos a la playa|if it is sunny we will go to the beach|If + presente, will + verbo.
Es un regalo para ti|it is a present for you|For + persona.
Gracias por tu ayuda|thank you for your help|Thank you for…
El libro que leo es interesante|the book that I read is interesting|That = relativo.
La ciudad donde vivo es pequeña|the town where I live is small|Where = donde.
El hombre que vive aquí es médico|the man who lives here is a doctor|Who para personas.
Me parece una buena idea|I think it is a good idea|I think…
Estoy de acuerdo contigo|I agree with you|Agree with.
Tengo una reserva a nombre de Pau|I have a booking in the name of Pau|In the name of.
¿A qué hora sale el próximo tren?|what time does the next train leave|Does + sujeto + verbo base.
Mi casa fue construida en 1990|my house was built in nineteen ninety|Pasiva: was + participio.
Los coches se fabrican en Inglaterra|cars are made in England|Pasiva presente: are + participio.
Solía jugar al fútbol|I used to play football|Used to + verbo = solía.
¿Podría ayudarme, por favor?|could you help me please|Could = petición educada.
No sé dónde está la estación|I do not know where the station is|En la pregunta indirecta el orden es normal.
Miré por la ventana y vi un pájaro|I looked out of the window and saw a bird|Dos pasados seguidos.
Cuando llegué, estaba lloviendo|when I arrived it was raining|Pasado simple y continuo.
Quiero aprender a tocar la guitarra|I want to learn to play the guitar|Want to + verbo.
Disfruto cocinando|I enjoy cooking|Enjoy + -ing.
Es demasiado caro|it is too expensive|Too = demasiado.
No es lo bastante grande|it is not big enough|Enough va detrás del adjetivo.
Ella se miró en el espejo|she looked at herself in the mirror|Herself: reflexivo.
Hay muy poco tiempo|there is very little time|Little con incontables.
Hay unos pocos libros|there are a few books|A few con contables.
Apaga la luz, por favor|turn off the light please|Phrasal verb: turn off.
Mañana te recojo en casa|I will pick you up at home tomorrow|Pick up = recoger.
`);
/* complementos para ejercicios de completar */
const VC={walk:'to school',work:'in an office',play:'football',watch:'television',listen:'to music',talk:'to my friend',ask:'a question',answer:'the phone',help:'my mother',look:'at the map',wait:'for the bus',study:'English',cook:'dinner',clean:'the house',open:'the door',close:'the window',start:'work',finish:'the book',stay:'at home',visit:'the museum',travel:'by train',dance:'at the party',call:'my brother',change:'the plan',cry:'at the cinema',enjoy:'the film',wash:'the dishes',paint:'a picture',shop:'at the market',eat:'an apple',drink:'water',sleep:'eight hours',buy:'bread',bring:'a bag',run:'in the park',write:'an email',read:'the newspaper',speak:'English',meet:'my friends',sit:'on the sofa',leave:'home',pay:'by card',sell:'old books',send:'a letter',spend:'money',win:'the game',wear:'a jacket',begin:'the lesson',build:'a house',catch:'the bus',choose:'a book',drive:'a car',fly:'to Rome',forget:'the keys',hear:'a noise',keep:'the ticket',ride:'a bike',sing:'a song',swim:'in the sea',teach:'children',throw:'the ball',wake:'up early',draw:'a picture',go:'to the cinema',come:'to my house',see:'a film',get:'a taxi',make:'a cake',take:'a photo',give:'a present',tell:'a story',think:'about the exam',find:'the keys',know:'the answer',do:'my homework',have:'a shower',say:'hello',put:'the book on the table',understand:'the lesson',lose:'my phone',feel:'happy',hold:'a cup of tea'};
const CLOZE_FRAMES={pres:['','every day'],cont:['Right now,',''],past:['Yesterday,',''],pastc:['At eight o\'clock last night,',''],perf:['Today,',''],fut:['Tomorrow,',''],going:['Next week,','']};
/* números en inglés */
const U=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const DEC=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
function engNum(n){
  if(n<20)return U[n];
  if(n<100){const d=Math.floor(n/10),u=n%10;return u?DEC[d]+'-'+U[u]:DEC[d]}
  if(n<1000){const c=Math.floor(n/100),r=n%100;const h=U[c]+' hundred';return r?h+' and '+engNum(r):h}
  if(n<1000000){const m=Math.floor(n/1000),r=n%1000;const h=engNum(m)+' thousand';return r?h+(r<100?' and ':' ')+engNum(r):h}
  return String(n);
}
const catNum=engNum;
