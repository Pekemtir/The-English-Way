/* ===== A1 · lessons 1–6 · INGLÉS ===== */
const SB=w=>'<button class="spk" style="width:30px;height:30px;font-size:14px;margin-left:6px;vertical-align:middle" data-a="say" data-v="'+w.replace(/"/g,'')+'" aria-label="Escucha">🔊</button>';
const SW=t=>t.split(', ').map(w=>w+SB(w)).join(', ');
const SA=rows=>rows.map(r=>[r[0],r[1]+SB(r[1]),r[2]+SB(r[2])].concat(r.slice(3)));

L(1,'a1','Sounds & alphabet','Sonidos y alfabeto','🔤',15,
["Conocer el nombre de las letras del alfabeto inglés","Distinguir vocales cortas y largas","Pronunciar th, sh, ch, j, w y la h","Deletrear tu nombre y decir «My name is…»"],
[
["The alphabet","<p>El inglés usa las mismas 26 letras que el castellano, pero su <b>nombre</b> es distinto y la ortografía no dice siempre cómo suena una palabra. Escucha cada letra con 🔊 y repite en voz alta.</p><p>En el inglés británico la última letra se dice <b>zed</b> (en Estados Unidos, <b>zee</b>).</p>",mt(["Letter","Name","Example","Spanish"],SA([["A a","ay","apple","manzana"],["B b","bee","book","libro"],["C c","see","cat","gato"],["D d","dee","dog","perro"],["E e","ee","egg","huevo"],["F f","eff","fish","pez"],["G g","jee","green","verde"],["H h","aitch","hat","sombrero"],["I i","eye","ice","hielo"],["J j","jay","jam","mermelada"],["K k","kay","key","llave"],["L l","el","lamp","lámpara"],["M m","em","moon","luna"],["N n","en","nose","nariz"],["O o","oh","orange","naranja"],["P p","pee","pen","bolígrafo"],["Q q","cue","queen","reina"],["R r","ar","red","rojo"],["S s","ess","sun","sol"],["T t","tee","tea","té"],["U u","you","umbrella","paraguas"],["V v","vee","van","furgoneta"],["W w","double-you","water","agua"],["X x","ex","box","caja"],["Y y","why","yellow","amarillo"],["Z z","zed","zebra","cebra"]])),[["How do you spell your name?","¿Cómo se deletrea tu nombre?"],["M-A-R-T-A. Marta.","M-A-R-T-A. Marta."],["Can you spell that, please?","¿Puede deletrearlo, por favor?"]],"Para deletrear por teléfono se dicen los <b>nombres</b> de las letras. Dos letras iguales seguidas se dice <b>double</b>: «double-ell» para LL."],
["Vowel sounds","<p>Las cinco vocales (a, e, i, o, u) tienen sonidos <b>cortos</b> y <b>largos</b>. Una vocal suele ser larga cuando la palabra termina en <b>-e</b> muda: <b>cap</b> / <b>cape</b>.</p>",mt(["Letter","Short sound","Long sound"],[["a","cat (como una «a» abierta)","name (como «ei»)"],["e","bed (como «e»)","see (como «i» larga)"],["i","sit (como «i» corta)","time (como «ai»)"],["o","hot (como «o» abierta)","go (como «ou»)"],["u","cup (entre «a» y «o»)","use (como «iu»)"]]),[["cat – cake","gato – tarta"],["hot – home","caliente – hogar"],["sit – site","sentarse – sitio"]],"Las vocales átonas se debilitan a un sonido neutro llamado <b>schwa</b>: en <b>banana</b> y <b>teacher</b> la última vocal casi no se oye."],
["Tricky consonants","<p>Estos sonidos no existen igual en castellano. Escúchalos y practícalos:</p>",mt(["Spelling","Sounds like…","Examples"],[["<b>th</b> (fuerte)","como la «z» de «zapato» (España)",SW("think, three, thanks")],["<b>th</b> (suave)","como una «d» muy suave",SW("this, the, mother")],["<b>sh</b>","como «sh» al pedir silencio",SW("shop, fish, she")],["<b>ch</b>","como la «ch» de «chico»",SW("cheese, chair, watch")],["<b>j</b> / <b>g</b> suave","como «dy» (yeísmo fuerte)",SW("job, jump, orange")],["<b>w</b>","como «u» + vocal",SW("water, window, we")],["<b>h</b>","aspirada, como una «j» suave",SW("house, hello, hat")],["<b>r</b>","la lengua no vibra, es suave",SW("red, run, three")]]),[["I think this is the cheese.","Creo que este es el queso."],["She has a red hat.","Ella tiene un sombrero rojo."]],"La <b>h</b> es muda en palabras como <b>hour</b> y <b>honest</b>. Y la <b>b</b> y la <b>v</b> NO suenan igual: <b>very</b> y <b>berry</b> son distintas."],
["Word stress","<p>En inglés cada palabra de varias sílabas tiene <b>una sílaba más fuerte</b>. Si la acentúas mal, cuesta entenderte. No hay tilde que te lo indique: hay que aprenderla al oír la palabra.</p>",mt(["Word","Stress","Spanish"],[["<b>TEA</b>cher","1.ª sílaba","profesor"],["ba<b>NA</b>na","2.ª sílaba","plátano"],["<b>FAM</b>ily","1.ª sílaba","familia"],["to<b>MOR</b>row","2.ª sílaba","mañana"]]),[["TEACHer? No: TEAcher.","¿TEACHer? No: TEAcher."]],"Escucha siempre la palabra con 🔊 antes de repetirla. La sílaba fuerte es más larga y más alta."],
["Your first words","<p>Con lo que ya sabes puedes presentarte y pedir que te deletreen una palabra. Son frases hechas: apréndelas tal cual. Aquí <b>it</b> es «lo» (la palabra que quieres deletrear).</p>",mt(["English","Spanish"],[["My name is Marta.","Me llamo Marta."],["How do you spell it?","¿Cómo se deletrea?"],["How do you spell your name?","¿Cómo se deletrea tu nombre?"],["Can you spell that, please?","¿Puede deletrearlo, por favor?"]]),[["My name is Marta. M-A-R-T-A.","Me llamo Marta. M-A-R-T-A."],["How do you spell it? – C-A-T. Cat.","¿Cómo se deletrea? – C-A-T. Cat (gato)."]],"<b>My name is…</b> sirve para presentarte (lo verás con más detalle en la lección 2). <b>How do you spell it?</b> sirve para cualquier palabra."]
],
[["alphabet","alfabeto"],["letter","letra"],["spell","deletrear"],["name","nombre"],["surname","apellido"],["short","corto"],["long","largo"],["vowel","vocal"],["sound","sonido"],["stress","acento (tónico)"],["my name is","me llamo"],["how do you spell it?","¿cómo se deletrea?"],["cat","gato"],["hat","sombrero"]],
[
c("¿Cómo se llama la letra «W» en inglés?","double-you",["you","vee","double-vee"],"La W es «double-you»."),
c("¿Cómo se dice la letra «G»?","jee",["gee-oh","gay","ji"],"La G se dice «jee»."),
c("En el inglés británico, la letra Z se llama…","zed",["zee","zeta","ex"],"En Reino Unido: zed."),
c("¿Cuál tiene sonido largo («ei»)?","cake",["cat","bed","hot"],"Con -e muda al final, la vocal es larga: cake."),
c("La «th» de «think» suena parecida a…","la «z» de «zapato»",["la «ch» de «chico»","la «s» de «sol»","la «t» de «taza»"],"th fuerte ≈ z castellana."),
c("¿Qué letra es muda en «hour»?","h",["o","u","r"],"En hour la h no se pronuncia."),
c("«Very» y «berry» suenan…","distinto, la v y la b son diferentes",["igual","igual en inglés británico","no existen"],"En inglés b y v son sonidos distintos."),
c("«Banana» tiene la sílaba fuerte en…","la segunda",["la primera","la última","todas por igual"],"ba-NA-na."),
t("Escribe la palabra que se deletrea see–ay–tee: ___ (animal, 3 letras)","cat","see = C, ay = A, tee = T: cat (gato), como en la tabla del alfabeto."),
t("Escribe la letra que se dice «tee».","t","Tee = T."),
t("Escribe la palabra en inglés: «sombrero»","hat","Hat (sombrero): está en la tabla del alfabeto, letra H."),
b("Me llamo Marta","my name is Marta","","Frase de presentación: my name is…"),
b("¿Cómo se deletrea?","how do you spell it","","How do you spell it?")
],[]);

L(2,'a1','I am… / You are…','Ser o estar: be, saludos y presentaciones','🙋',20,
["Saludar y despedirte en distintos momentos del día","Usar el verbo «be» (am, is, are) en afirmativa, negativa y pregunta","Decir tu nombre, tu país, tu edad y tu profesión","Usar los pronombres sujeto: I, you, he, she, it, we, they"],
[
["Hello and goodbye","<p>El saludo cambia según la hora y la confianza. <b>Hello</b> vale para casi todo; <b>hi</b> es más informal.</p>",mt(["When?","English","Spanish"],[["mañana","Good morning","Buenos días"],["tarde","Good afternoon","Buenas tardes"],["tarde-noche","Good evening","Buenas tardes / noches"],["al acostarte","Good night","Buenas noches"],["amigos","Hi! How are you?","Hola, ¿qué tal?"],["despedida","Goodbye / Bye","Adiós"],["hasta luego","See you later","Hasta luego"],["hasta mañana","See you tomorrow","Hasta mañana"]]),[["Good morning! How are you?","¡Buenos días! ¿Cómo estás?"],["I am fine, thank you. And you?","Estoy bien, gracias. ¿Y tú?"],["See you tomorrow!","¡Hasta mañana!"]],"«Good night» solo se usa para despedirse al irse a dormir. Para saludar de noche se dice «good evening»."],
["The verb «be»","<p>El verbo <b>be</b> sirve para ser y para estar. En presente tiene tres formas: <b>am, is, are</b>. A diferencia del castellano, el sujeto es <b>obligatorio</b>: no se puede decir «am Marta».</p>",mt(["Pronoun","be","Example"],[["I","am","I am Anna."],["you","are","You are tall."],["he","is","He is a doctor."],["she","is","She is from Spain."],["it","is","It is big."],["we","are","We are friends."],["you (vosotros)","are","You are students."],["they","are","They are tired."]]),[["I am from Argentina.","Soy de Argentina."],["You are tall and friendly.","Eres alto y simpático."],["We are from Brazil.","Somos de Brasil."]],"En la lengua hablada se contrae: <b>I'm, you're, he's, she's, it's, we're, they're</b>. Escríbelo así en mensajes y conversaciones."],
["Negatives and questions","<p>Para negar se añade <b>not</b> detrás de be: <b>I am not</b>, <b>he is not</b>. Para preguntar se <b>invierte</b> el orden: <b>Are you…?</b></p>",mt(["Affirmative","Negative","Question"],[["I am Tom.","I am not Tom.","Am I late?"],["You are tired.","You are not tired.","Are you tired?"],["She is a nurse.","She is not a nurse.","Is she a nurse?"],["They are here.","They are not here.","Are they here?"]]),[["Are you from London? – Yes, I am.","¿Eres de Londres? – Sí."],["Is she a teacher? – No, she is not.","¿Es profesora? – No."],["He is not tall.","No es alto."]],"Respuestas cortas: <b>Yes, I am. / No, I am not.</b> No se repite el resto de la frase."],
["Name, country, age, job","<p>Para el nombre se dice <b>my name is…</b>. La edad lleva <b>be</b> (no «have»): <b>I am twenty</b>. El origen se dice con <b>from</b>. La profesión lleva <b>a/an</b>: <b>I am a nurse</b>.</p>",mt(["Say…","English"],[["tu nombre","My name is Pol."],["tu país","I am from Spain."],["tu edad","I am twenty-five."],["tu trabajo","I am a teacher."],["preguntar el nombre","What is your name?"],["preguntar la edad","How old are you?"]]),[["My name is Laura and I am from Mexico.","Me llamo Laura y soy de México."],["I am thirty years old. I am a designer.","Tengo treinta años. Soy diseñadora."],["Nice to meet you! – Nice to meet you too.","¡Encantado! – Igualmente."]],"Antes de una vocal se usa <b>an</b>: <b>an engineer</b>, <b>an actor</b>. Y «tengo 30 años» se dice <b>I am 30</b>."]
],
[["I am","yo soy / estoy"],["you are","tú eres / estás"],["he is","él es / está"],["she is","ella es / está"],["we are","somos / estamos"],["they are","son / están"],["my name is","me llamo"],["I am from","soy de"],["How old are you?","¿cuántos años tienes?"],["Nice to meet you","encantado de conocerte"]],
[
c("«I ___ Marc.»","am",["is","are","be"],"Con I: am."),
c("«You ___ from Barcelona.»","are",["am","is","be"],"Con you: are."),
c("«She ___ a nurse.»","is",["are","am","be"],"Con she: is."),
c("«We ___ friends.»","are",["is","am","be"],"Con we: are."),
c("«They ___ students.»","are",["is","am","be"],"Con they: are."),
c("Para decir que tienes 30 años dices…","I am thirty",["I have thirty","I am thirty years","I have thirty years"],"La edad lleva be: I am thirty."),
c("¿Cómo se pregunta «¿Eres médico?»","Are you a doctor?",["You are a doctor?","Do you are a doctor?","Is you a doctor?"],"En la pregunta se invierte: Are you…?"),
c("¿Qué saludo usas a las 19:00?","Good evening",["Good morning","Good night","Good afternoon"],"Por la tarde-noche: good evening."),
t("Completa: «My name ___ Anna.»","is","My name is…"),
t("Completa la negativa: «He is ___ a doctor.»","not","Be + not."),
t("Escribe en inglés: «Somos de Brasil» (We ___ from Brazil)","are","We are."),
b("¿Eres de Londres?","are you from London","","Pregunta con be: are + sujeto."),
b("Ella no es profesora","she is not a teacher","","Be + not + a + profesión.")
],['greet','countries']);

L(3,'a1','Things around you','Cosas: a / an / the, plurales y this / that','📘',22,
["Usar los artículos a, an y the","Formar el plural de los sustantivos regulares e irregulares","Distinguir this, that, these y those","Nombrar objetos del aula y de la mesa"],
[
["A, an and the","<p>El artículo <b>a</b> equivale a «un/una»; delante de sonido vocálico se usa <b>an</b>. El artículo <b>the</b> equivale a «el/la/los/las» y no cambia nunca. Los sustantivos no tienen género.</p>",mt(["Article","Use","Example"],[["a","un/una, consonante","a book, a pen"],["an","un/una, vocal","an apple, an egg"],["the","uno concreto","the book on the table"]]),[["I have a pen and an apple.","Tengo un bolígrafo y una manzana."],["The pen is on the table.","El bolígrafo está sobre la mesa."],["It is an umbrella.","Es un paraguas."]],"Cuenta el <b>sonido</b>, no la letra: <b>an hour</b> (la h es muda) pero <b>a university</b> (suena «iu»)."],
["Plurals","<p>El plural regular se forma con <b>-s</b>. Si la palabra termina en <b>s, sh, ch, x</b> se añade <b>-es</b>. Si termina en consonante + <b>y</b>, cambia a <b>-ies</b>. Algunos plurales son irregulares y hay que aprenderlos.</p>",mt(["Singular","Plural","Rule"],[["book","books","+ s"],["box","boxes","+ es"],["bus","buses","+ es"],["watch","watches","+ es"],["city","cities","y → ies"],["man","men","irregular"],["woman","women","irregular"],["child","children","irregular"],["foot","feet","irregular"],["person","people","irregular"]]),[["Two books and three boxes.","Dos libros y tres cajas."],["The children are in the cities.","Los niños están en las ciudades."]],"No existe «a books»: el artículo <b>a</b> solo va con singular. En plural, o no hay artículo o se usa <b>some</b>."],
["This, that, these, those","<p>Para señalar objetos se usa <b>this / these</b> (cerca) y <b>that / those</b> (lejos). Cambian según sea singular o plural.</p>",mt(["","Singular","Plural"],[["cerca","this","these"],["lejos","that","those"]]),[["This is my book.","Este es mi libro."],["That is your bag.","Aquella es tu bolsa."],["These are my keys.","Estas son mis llaves."],["Those are your shoes.","Esos son tus zapatos."]],"Para preguntar: <b>What is this?</b> / <b>What are these?</b> Respuesta: <b>It is a…</b> / <b>They are…</b>"],
["In the classroom","<p>Practica con los objetos que ves cada día. Escúchalos y di en voz alta <b>this is a…</b> / <b>these are…</b></p>",mt(["Word","Spanish"],[["book","libro"],["pen","bolígrafo"],["pencil","lápiz"],["bag","mochila"],["key","llave"],["phone","teléfono"]].map(r=>[SW(r[0]),r[1]])),[["This is a pen. These are pencils.","Esto es un bolígrafo. Esos son lápices."]],"Los objetos que van en pares (<b>glasses, trousers, scissors</b>) siempre son plurales: «my glasses are new»."]
],
[["a / an","un / una"],["the","el / la / los / las"],["this","este / esto"],["that","ese / aquel"],["these","estos"],["those","esos"],["book","libro"],["pen","bolígrafo"],["child","niño"],["children","niños"]],
[
c("«I have ___ apple.»","an",["a","the","some"],"Apple empieza por vocal: an."),
c("«She has ___ pen.»","a",["an","these","two"],"Pen empieza por consonante: a."),
c("El plural de «box» es…","boxes",["boxs","boxies","box"],"Termina en x: + es."),
c("El plural de «city» es…","cities",["citys","cityes","city"],"Consonante + y → ies."),
c("El plural de «child» es…","children",["childs","childes","childen"],"Irregular: children."),
c("Señalas un libro cercano: «___ is my book.»","This",["That","These","Those"],"Cerca y singular: this."),
c("Señalas dos llaves lejanas: «___ are your keys.»","Those",["That","This","These"],"Lejos y plural: those."),
c("¿Cuál es correcta?","I have two books.",["I have two book.","I have a books.","I have two bookes."],"Plural regular: books."),
t("Plural de «man»: ___","men","Irregular."),
t("Completa: «___ is a pencil.» (cerca)","This","This."),
t("Escribe el plural de «watch»","watches","Termina en ch: + es."),
b("Estos son mis libros","these are my books","","These + are + plural."),
b("Eso es un paraguas","that is an umbrella","","An delante de vocal.")
],['things']);

L(4,'a1','Numbers','Números, precios y edad','🔢',22,
["Contar de 0 a 100 y decir números grandes","Decir la edad, el teléfono y los precios","Usar los ordinales (first, second, third…)","Preguntar «How much is it?» y «How old are you?»"],
[
["0 to 20","<p>Del 0 al 12 son palabras propias. De 13 a 19 terminan en <b>-teen</b>. Escucha cada una y repite.</p>",mt(["0–10","11–20"],[[SW("zero, one, two, three, four, five, six, seven, eight, nine, ten"),SW("eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty")]]),[["I have two brothers.","Tengo dos hermanos."],["She is fifteen.","Tiene quince años."]],"Ojo con el acento: <b>thirTEEN</b> (fuerte en -teen) frente a <b>THIRty</b> (fuerte al principio). Así se distinguen 13 y 30."],
["Tens and big numbers","<p>Las decenas terminan en <b>-ty</b>. De 21 a 99 se une decena y unidad con <b>guion</b>. En números de tres cifras se pone <b>and</b> antes de las decenas (en inglés británico).</p>",mt(["Tens","Examples"],[[SW("twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety"),"twenty-one, thirty-five, ninety-nine"],["100","a hundred / one hundred"],["101","a hundred and one"],["1,000","a thousand"],["2,024","two thousand and twenty-four"]]),[["There are forty-two students.","Hay cuarenta y dos estudiantes."],["It is a hundred and fifty euros.","Son ciento cincuenta euros."]],"El 40 es <b>forty</b> (sin «u»). El teléfono se dice cifra por cifra: 612 345 → «six one two, three four five»."],
["Ordinals","<p>Los ordinales sirven para decir fechas, pisos y posiciones. Los tres primeros son especiales; el resto añade <b>-th</b>.</p>",mt(["Number","Ordinal","Short"],[["1","first","1st"],["2","second","2nd"],["3","third","3rd"],["4","fourth","4th"],["5","fifth","5th"],["10","tenth","10th"]]),[["I live on the third floor.","Vivo en la tercera planta."],["She is first and he is second.","Ella es la primera y él es el segundo."]],"El 5 es <b>fifth</b> y el 12 es <b>twelfth</b>: cambian un poco al añadir -th."],
["Prices and age","<p>Para preguntar el precio: <b>How much is it?</b> (singular) / <b>How much are they?</b> (plural). El dinero británico es la libra: <b>£5 = five pounds</b>. La edad se pregunta con <b>How old are you?</b></p>",mt(["Question","Answer"],[["How much is it?","It is five pounds."],["How much is the tea?","It is a pound. (£1 = a pound)"],["How much are the shoes?","They are forty euros."],["How old are you?","I am twenty-two."],["What is your phone number?","It is six one two, three four five."]]),[["How much is the coffee? – Two pounds fifty.","¿Cuánto cuesta el café? – Dos libras cincuenta."],["How old is your sister? – She is twelve.","¿Cuántos años tiene tu hermana? – Doce."]],"Los precios con decimales se leen: <b>£2.50 = two pounds fifty</b>. Dices «and» solo en 101, 250, etc., no en los precios con decimales."]
],
[["twelve","doce"],["twenty","veinte"],["thirty","treinta"],["a hundred","cien"],["a thousand","mil"],["first","primero"],["second","segundo"],["third","tercero"],["how much?","¿cuánto cuesta?"],["how old?","¿cuántos años?"]],
[
c("¿Cómo se dice «15»?","fifteen",["fifty","fiveteen","fifthteen"],"15 = fifteen."),
c("¿Cuál es «40»?","forty",["fourty","fourteen","fortie"],"40 = forty (sin u)."),
c("¿Cómo se dice «13»?","thirteen",["thirty","thirten","three-teen"],"13 = thirteen."),
c("«30» se dice…","thirty",["thirteen","thirtee","three-ten"],"30 = thirty."),
c("¿Cuál es el ordinal de «3»?","third",["three","threeth","thirth"],"3.º = third."),
c("¿Cuál es el ordinal de «2»?","second",["twoth","twond","secondth"],"2.º = second."),
c("Precio £2.50 se lee…","two pounds fifty",["two point five","two and fifty pounds","second pounds fifty"],"Libras y peniques: two pounds fifty."),
c("¿Cómo se pregunta el precio de un solo objeto?","How much is it?",["How many is it?","How old is it?","What price is it?"],"How much is it?"),
t("Escribe en inglés el número 21","twenty-one","Decena + guion + unidad."),
t("Escribe «100» con letras (una palabra o dos)","a hundred","a hundred / one hundred (ambos valen)."),
t("«How ___ are you?» (edad)","old","How old are you?"),
b("¿Cuántos años tienes?","how old are you","","How old + be + sujeto."),
b("Es una libra","it is a pound","","It is + a pound.")
],['num1','num2']);

L(5,'a1','My family','Mi familia: posesivos, ’s y have got','👨‍👩‍👧',22,
["Nombrar a los miembros de la familia","Usar los adjetivos posesivos my, your, his, her…","Expresar posesión con ’s","Decir lo que tienes con «have got»"],
[
["Family words","<p>Estas son las palabras básicas de la familia. Escúchalas.</p>",mt(["Female","Male","Both"],[[SW("mother, sister, grandmother, aunt, daughter, wife"),SW("father, brother, grandfather, uncle, son, husband"),SW("parents, children, cousin, grandparents, friend")]]),[["This is my mother and this is my father.","Esta es mi madre y este es mi padre."],["I have two brothers and one sister.","Tengo dos hermanos y una hermana."]],"Entre amigos, madre y padre se dicen <b>mum</b> y <b>dad</b> (en Reino Unido)."],
["My, your, his, her","<p>Los adjetivos posesivos van <b>delante</b> del sustantivo y no cambian con el género ni con el plural del objeto. Dependen de <b>quién</b> posee.</p>",mt(["Subject","Possessive","Example"],[["I","my","my book"],["you","your","your bag"],["he","his","his sister"],["she","her","her brother"],["it","its","its tail"],["we","our","our house"],["they","their","their children"]]),[["His mother is a doctor.","Su madre (de él) es médica."],["Her mother is a teacher.","Su madre (de ella) es profesora."],["Our parents are on holiday.","Nuestros padres están de vacaciones."]],"En inglés <b>his</b> (de él) y <b>her</b> (de ella) se distinguen: «su madre» tiene dos formas. No lleva artículo: «my mother», nunca «the my mother»."],
["Possessive ’s","<p>Para decir «de quién es» algo se añade <b>’s</b> al poseedor: <b>Anna’s book</b> = el libro de Anna. Si el poseedor es plural y acaba en -s, solo se añade el apóstrofo: <b>the parents’ house</b>.</p>",mt(["Phrase","Meaning"],[["Anna’s brother","el hermano de Anna"],["my sister’s phone","el móvil de mi hermana"],["the children’s toys","los juguetes de los niños"],["my parents’ car","el coche de mis padres"]]),[["Whose bag is this? – It is Tom’s.","¿De quién es esta bolsa? – De Tom."],["That is my uncle’s house.","Esa es la casa de mi tío."]],"No confundas <b>’s</b> posesivo con la contracción de <b>is</b>: «Tom’s my friend» = Tom is my friend. El contexto lo aclara."],
["Have got","<p>Para decir lo que tienes (familia, objetos) se usa <b>have got</b> (muy común en inglés británico). Con he, she, it cambia a <b>has got</b>.</p>",mt(["Pronoun","have got","Negative"],[["I","I have got","I have not got"],["you / we / they","have got","have not got"],["he / she / it","has got","has not got"]]),[["I have got two sisters.","Tengo dos hermanas."],["She has got a big family.","Ella tiene una familia grande."],["Have you got a brother? – Yes, I have.","¿Tienes un hermano? – Sí."]],"Contracciones: <b>I’ve got</b>, <b>she’s got</b>, <b>they’ve got</b>."]
],
[["mother","madre"],["father","padre"],["brother","hermano"],["sister","hermana"],["parents","padres"],["my / your","mi / tu"],["his / her","su (él / ella)"],["our / their","nuestro / su (ellos)"],["have got","tener"],["whose?","¿de quién?"]],
[
c("«She is my aunt. ___ name is Ana.»","Her",["His","Hers","She"],"Ella → her."),
c("«He is my brother. ___ name is Tom.»","His",["Her","He","Its"],"Él → his."),
c("«___ parents are on holiday.» (nuestros)","Our",["We","Us","Ours"],"Nosotros → our: «Our parents are on holiday»."),
c("«They are ___ children.»","their",["them","they","theirs"],"Ellos → their."),
c("«Anna’s mother» significa…","la madre de Anna",["Anna es madre","la madre y Anna","Anna y su madre"],"’s = de."),
c("¿Cuál es correcta?","I have got two brothers.",["I has got two brothers.","I have get two brothers.","I got have two brothers."],"I + have got."),
c("¿Cuál es correcta?","She has got a sister.",["She have got a sister.","She has a got sister.","She got has a sister."],"She + has got."),
c("Pregunta correcta","Have you got a brother?",["Do you got a brother?","Are you got a brother?","You have got a brother?"],"Have + sujeto + got."),
t("«My mother’s sister is my ___»","aunt","La hermana de tu madre es tu tía."),
t("«Her brother» = el hermano de… (escribe he, she o it)","she","Her → she."),
t("Completa: «Tom ___ got a dog.»","has","He/She/It → has got."),
b("Mi hermana tiene un perro","my sister has got a dog","","Has got con he/she."),
b("La casa de mis padres es grande","my parents’ house is big","","Plural que acaba en -s: solo apóstrofo (parents’).")
],['family']);

L(6,'a1','Describing things','Describir: adjetivos, colores y orden','🎨',22,
["Usar adjetivos para describir personas y cosas","Colocar el adjetivo delante del sustantivo","Nombrar los colores","Usar very, quite y really con adjetivos"],
[
["Adjectives","<p>En inglés el adjetivo va <b>delante</b> del sustantivo y <b>no cambia</b>: no tiene género ni plural. <b>a big house</b>, <b>two big houses</b>.</p>",mt(["Adjective","Opposite"],[[SW("big"),SW("small")],[SW("tall"),SW("short")],[SW("old"),SW("young")],[SW("new"),SW("old")],[SW("good"),SW("bad")],[SW("hot"),SW("cold")],[SW("fast"),SW("slow")],[SW("easy"),SW("difficult")]]),[["She is a tall woman.","Es una mujer alta."],["I have a new phone.","Tengo un móvil nuevo."],["These are old books.","Estos son libros viejos."]],"Con <b>be</b> el adjetivo va detrás del verbo: <b>The house is big</b> = <b>a big house</b>."],
["Colours","<p>Los colores son adjetivos y van delante del nombre. Se pueden combinar con <b>light</b> (claro) y <b>dark</b> (oscuro).</p>",mt(["Colour","Spanish"],[[SW("red"),"rojo"],[SW("blue"),"azul"],[SW("green"),"verde"],[SW("yellow"),"amarillo"],[SW("black"),"negro"],[SW("white"),"blanco"],[SW("brown"),"marrón"],[SW("grey"),"gris"],[SW("pink"),"rosa"],[SW("orange"),"naranja"]]),[["I have a red bag and a blue hat.","Tengo un bolso rojo y un sombrero azul."],["It is dark green.","Es verde oscuro."]],"El color <b>orange</b> es también la fruta. Para preguntar el color: <b>What colour is it?</b>"],
["Very, quite, really","<p>Para dar más o menos fuerza al adjetivo se usan <b>very</b> (muy), <b>quite</b> (bastante) y <b>really</b> (de verdad). Van delante del adjetivo.</p>",mt(["Word","Meaning","Example"],[["very","muy","very big"],["really","de verdad, muy","really nice"],["quite","bastante","quite old"],["not very","no muy","not very tall"]]),[["The film is really good.","La película es muy buena."],["My room is quite small.","Mi habitación es bastante pequeña."],["He is not very tall.","No es muy alto."]],"No se dice «very much big»: <b>very</b> va solo delante del adjetivo; <b>very much</b> se usa con verbos."],
["People and things","<p>Con todo lo anterior ya puedes describir. Observa el orden: <b>pronombre + be + adjetivo</b>, o <b>a/an + adjetivo + sustantivo</b>.</p>",mt(["Describe","Example"],[["a person","She is tall and friendly."],["a thing","It is a big, red bag."],["a place","The house is old but nice."],["with a question","What is your teacher like?"]]),[["My teacher is young and very kind.","Mi profesora es joven y muy amable."],["It is a small, white car.","Es un coche pequeño y blanco."]],"Con más de un adjetivo, se separan con comas o con <b>and</b> al final: «a big, old house»."]
],
[["big / small","grande / pequeño"],["tall / short","alto / bajo"],["old / young","viejo / joven"],["new","nuevo"],["good / bad","bueno / malo"],["hot / cold","caliente / frío"],["red","rojo"],["blue","azul"],["very","muy"],["quite","bastante"]],
[
c("El adjetivo en inglés va…","delante del sustantivo",["detrás del sustantivo","con género","con plural"],"a big house."),
c("¿Cuál es correcta?","a red car",["a car red","a reds car","a red cars"],"Adjetivo + sustantivo, sin plural en el adjetivo."),
c("«Two ___ houses» (grandes)","big",["bigs","bigger","bigs house"],"El adjetivo no cambia: big."),
c("¿Cómo se dice «muy alto»?","very tall",["tall very","much tall","very much tall"],"very + adjetivo."),
c("Lo contrario de «hot» es…","cold",["warm","new","short"],"hot ↔ cold."),
c("Lo contrario de «young» es…","old",["new","small","tall"],"young ↔ old."),
c("«It is a ___ bag.» (rojo, grande)","big red",["red big","bigs red","redbig"],"Tamaño antes que color: a big red bag."),
c("Para preguntar el color dices…","What colour is it?",["How colour is it?","Which colour has it?","What is colour?"],"What colour is it?"),
t("Escribe el opuesto de «easy»","difficult","easy ↔ difficult."),
t("«The film is ___ good.» (muy)","very","very + adjetivo."),
t("Escribe en inglés: «rosa» (color)","pink","Pink."),
b("Es una casa vieja y grande","it is a big old house","","a + adjetivos + sustantivo."),
b("Mi coche es azul","my car is blue","","Be + adjetivo.")
],['adj1','colours']);
