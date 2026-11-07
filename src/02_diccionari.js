/* ===== DICCIONARIO AMPLIADO (entradas originales inglés|castellano) ===== */
const DICT_RAW=`
I|yo
you|tú, usted, vosotros
he|él
she|ella
it|ello (cosa, animal)
we|nosotros
they|ellos, ellas
me|me, mí
him|le, lo (él)
her|la, le (ella); su (de ella)
us|nos
them|los, las, les
my|mi
your|tu, su, vuestro
his|su (de él)
its|su (de cosa o animal)
our|nuestro
their|su (de ellos)
mine|mío
yours|tuyo
hers|suyo (de ella)
ours|nuestro (pronombre)
theirs|suyo (de ellos)
myself|me, yo mismo
yourself|te, tú mismo
himself|se (él mismo)
herself|se (ella misma)
itself|se (ello mismo)
ourselves|nos, nosotros mismos
themselves|se (ellos mismos)
this|este, esta, esto
that|ese, aquel, eso
these|estos, estas
those|esos, aquellos
a|un, una
an|un, una (delante de vocal)
the|el, la, los, las
who|quién
what|qué
where|dónde
when|cuándo
why|por qué
which|cuál
whose|de quién
how|cómo
how many|cuántos
how long|cuánto tiempo
how old|qué edad
how often|con qué frecuencia
something|algo
anything|cualquier cosa, algo
nothing|nada
everything|todo
someone|alguien
anyone|alguien, cualquiera
no one|nadie
everyone|todo el mundo
somewhere|en algún lugar
anywhere|en cualquier lugar
nowhere|en ningún lugar
everywhere|en todas partes
into|dentro de, hacia dentro
onto|sobre (movimiento)
out of|fuera de
through|a través de
across|a través, al otro lado de
along|a lo largo de
around|alrededor de
about|sobre, acerca de
over|por encima de
off|fuera, lejos
by|junto a, por
for|para, durante
of|de
against|contra
towards|hacia
since|desde
except|excepto
instead of|en lugar de
like (preposition)|como
unlike|a diferencia de
as|como, mientras
than|que (comparación)
not|no
very|muy
too much|demasiado
too many|demasiados
not at all|en absoluto
only|solo, únicamente
even|incluso
again|otra vez
away|lejos
back (adverb)|de vuelta
forward|hacia delante
backward|hacia atrás
upstairs|arriba (en la casa)
downstairs|abajo (en la casa)
indoors|dentro de casa
outdoors|al aire libre
anyway|de todos modos
actually|en realidad
perhaps|quizá
exactly|exactamente
almost|casi
at least|al menos
at last|por fin
at first|al principio
in the end|al final
on time|a tiempo
in time|a tiempo (con margen)
by the way|por cierto
for example|por ejemplo
such as|tal como
a bit|un poco
a lot|mucho
no problem|no hay problema
of course not|claro que no
I do not know|no lo sé
I do not understand|no entiendo
I do not mind|no me importa
could you repeat that?|¿podría repetirlo?
speak more slowly|hable más despacio
how do you spell it?|¿cómo se deletrea?
what does it mean?|¿qué significa?
how do you say it in English?|¿cómo se dice en inglés?
can I help you?|¿puedo ayudarle?
can I have…?|¿me puede dar…?
would you like…?|¿quiere…?
let me see|déjame ver
let's go|vámonos
good luck|buena suerte
take care|cuídate
have a nice day|que tengas un buen día
have a good weekend|que tengas un buen fin de semana
happy birthday|feliz cumpleaños
happy Christmas|feliz Navidad
happy New Year|feliz Año Nuevo
well done|bien hecho
bless you|salud (al estornudar)
that sounds good|suena bien
I am sorry to hear that|siento oír eso
what a pity|qué pena
what a surprise|qué sorpresa
really?|¿de verdad?
I see|ya veo
I think so|creo que sí
I hope so|eso espero
I am afraid not|me temo que no
no way|ni hablar
absolutely|totalmente
area|zona
art gallery|galería de arte
bank holiday Monday|lunes festivo
bin bag|bolsa de basura
border control|control fronterizo
bottle of water|botella de agua
box of chocolates|caja de bombones
bunch of flowers|ramo de flores
cup of coffee|taza de café
glass of milk|vaso de leche
loaf of bread|barra de pan
packet of crisps|paquete de patatas
piece of cake|trozo de tarta
slice of pizza|porción de pizza
tin of tomatoes|lata de tomates
carton of juice|cartón de zumo
bar of chocolate|tableta de chocolate
kilo of apples|kilo de manzanas
fact|hecho
idea|idea
reason|razón
problem|problema
solution|solución
question mark|signo de interrogación
rule|norma
result|resultado
example|ejemplo
news item|noticia
advice|consejo
information|información
luck|suerte
fun|diversión
life|vida
death|muerte
peace|paz
war|guerra
freedom|libertad
health|salud
success|éxito
trouble|problema, lío
secret|secreto
surprise|sorpresa
fear|miedo
joy|alegría
anger|enfado
truth|verdad
lie|mentira
chance|oportunidad
change (noun)|cambio
choice|elección
difference|diferencia
effort|esfuerzo
habit|hábito
language course|curso de idiomas
level|nivel
list|lista
mistake (noun)|equivocación
noise level|nivel de ruido
pair|par
part|parte
point of view|punto de vista
politics|política
power|poder
problem solving|resolución de problemas
rest (noun)|descanso
risk|riesgo
rule of thumb|regla general
shape|forma
speed|velocidad
style|estilo
subject (topic)|tema
system|sistema
thing|cosa
topic|tema
trip abroad|viaje al extranjero
way|camino, manera
world|mundo
`.trim().split('\n').filter(l=>l.includes('|'));
