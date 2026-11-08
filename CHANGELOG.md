# Changelog · The English Way

## v1.10 (2026-11-08)
- **Repetición espaciada** (1, 3, 7, 21 y 45 días) sobre las palabras: tarjeta «Spaced review» en Home y baldosa en Practice (`src/20d_srs.js`, enganchada a `bump`). Fallo = vuelve mañana; acierto antes de tiempo no avanza. Probado en node con hook de depuración; NO en navegador real.

## v1.9 (2026-11-08)
- **Aprobado de lección al 80 %** (antes 85 % en la versión anterior, 60 % al principio). La migración pasa a borrar solo las aprobadas con menos de 80 %. Quien ya abrió la versión anterior (marca `mig85`) ya perdió las de 80-84 %: no se recuperan solas, hay que repetirlas o restaurar una copia de seguridad.

## v1.8 (2026-11-08)
- **Migración al 85 %:** al abrir la app (una sola vez, marca `mig85`), las lecciones ya aprobadas con menos de 85 % vuelven a pendientes y hay que repetirlas. Si eso deja el A2 sin cumplir sus condiciones, se vuelve a bloquear. Probado en node con progreso simulado; NO en navegador real.

## v1.7 (2026-11-08)
- **Aprobado de lección al 85 %** (antes 60 %): por debajo hay que repetir. Reto diario (60 %) y juegos por dominio (60 %) sin cambios.
- **+5 preguntas por práctica de lección:** `MIXN` 12 → 17 y `MIXF` 6 → 7 en `src/16b_leccion_mix.js` (7 fijas + 10 generadas). Medido en node con DOM simulado: 50 lecciones × 30 intentos = 17 preguntas, sin duplicados. NO probado en navegador real.

## v1.6 (2026-11-08)
- Contraste con el MCER (Volumen Complementario 2020, escalas A1/A2): nuevos pasos de sugerencias, invitaciones y disculpas (A2 L12) y de opiniones, acuerdo y petición de repetición (A2 L23), con +14 ejercicios. Texto legal y README ajustados a las fuentes realmente consultadas.

## v1.4 (2026-11-08)
- **Práctica de lección variada** (`src/16b_leccion_mix.js`, `buildLessonQs(l)`): cada intento = 6 preguntas fijas (las 13 escritas a mano, rotadas: primero las menos vistas y las falladas, con ruido al azar) + 6 generadas SOLO con lo que enseña esa lección (frases de ejemplo `ex` y palabras clave `kw`) ⇒ nada se pregunta antes de enseñarse. Generadas: traducir frase (4 opciones), escuchar y elegir significado, completar frase (primera letra + hueco), construir frase, vocabulario en ambos sentidos y escribir la palabra. Distractores: primero de la propia lección, luego de las anteriores.
- **Antimemorización / imprevisible:** subconjunto distinto cada vez, orden barajado sin dos tipos iguales seguidos, una frase o palabra solo una vez por intento, máx. 2 de cada tipo generado, memoria por lección en `S.lh` (últimas 40 generadas y último intento de cada fija) para no repetir hasta agotar el banco, opciones barajadas al mostrarse.
- **Medido (8 intentos seguidos, 50 lecciones, simulado en node):** 6 fijas + 6 generadas por intento; solo ~5-6 % de preguntas se repiten entre intentos seguidos (antes 100 %); ~60 preguntas distintas por lección en 8 intentos (antes 13); 0 problemas (opciones sin la correcta, duplicados, respuestas fuera de lo enseñado); 450-520 respuestas escritas generadas, todas aceptadas por `checkType`.
- Probado con `English/tests/t_mix.js`, `t_mix_check.js`, `t_mix_sample.js` (cargan la app en node con DOM simulado: `build_debug2.py <src> <html>` y `APP=<html> node t_mix.js`). NO probado en navegador real.
- Textos en catalán que quedaban en el modo flash: «Encara no / Ho sabia» → «Todavía no / Lo sabía».

## v1.3 (2026-11-08)
- **Repaso final de lección ampliado:** al terminar la práctica de una lección, antes del «📌 Resumen» sale «🔁 Repasa tus fallos» (hasta 10: enunciado → respuesta correcta + explicación) o «🎉 Sin fallos». Código: `record()` y `endSession()` en 15_sessio.js; `lessonRecap(l,miss)` en 16_navegacio.js.
- Textos de interfaz que quedaban en catalán: «No ho sé» → «No lo sé», «Continua» → «Continúa».
- Probado: build desde src, sintaxis JS y prueba unitaria de `lessonRecap` con y sin fallos. NO probado en navegador.

## v1.2 (2026-11-08) · auditoría «nada se pregunta antes de enseñarse»
- Auditadas las 50 lecciones con `tests/audit_taught.js` (palabras de enunciado/respuesta no vistas en la lección ni en las anteriores) y `tests/audit_phrases.js` (bigramas). Se corrigieron los huecos reales:
- **A1 L1:** tabla del alfabeto con traducción de cada palabra ejemplo (hat = sombrero, etc.); nuevo paso 5 «Your first words» (My name is…, How do you spell it?, How do you spell your name?, Can you spell that?); palabras clave +4 (my name is, how do you spell it?, cat, hat); ejercicio de deletreo ahora «see–ay–tee = cat» (antes «eat», nunca enseñada).
- **A1 L2:** «Somos de Italia» → «Somos de Brasil» (Brasil sí enseñado). **L4:** «It is a pound» ahora enseñado en la tabla de precios. **L5:** «We love…» → «Our parents are on holiday». **L8/L9:** Saturdays → Sundays (enseñado en L8). **L10:** Italy → Spain. **L13:** piano → tennis; today → tomorrow (ejercicios 7 y 13). **L14:** ej. 13 today → tomorrow. **L16:** añadido «expensive / cheap» (ejemplo).
- **A2 L9:** añadidos ejemplos «tallest boy in the class», «the coldest day of the year» y fila cold → the coldest. **L16:** maths → English. **L19:** «takes care of» (no enseñado) → «looks after» (sí enseñado).
- Falsos positivos aceptados (nombres propios, inflecciones de verbos ya enseñados, reglas -ing ya explicadas): L2 Marc/Barcelona, L5 Ana, L14 wants/getting, L18 writing, A2 L8 coming.
- Probado: build desde src reproduce el HTML; sintaxis JS correcta. NO probado en navegador (la VM local no tiene Playwright).

## v1.1 (2026-11-07)
- Verbos irregulares: ficha con formas principales; A1 L24 con 4 pasos por patrones (~60 verbos) y +15 ejercicios; A2 L4 con participios (2 pasos, +15 ejercicios); repaso en A2 L24 (+10). Arreglo del filtro Regulares/Irregulares.

## v1 (2026-11-07)
- Primera versión: A1 (26 lecciones) + A2 (24 lecciones), ~1.670 palabras en 64 temas, diccionario, 178 verbos × 7 tiempos, 4 juegos con bloqueo por progreso, test de nivel A1/A2, autoevaluación, pantalla legal.
- Base técnica reutilizada de Camí Català v12; contenido 100 % original.

## v1.5 (2026-11-08) — Modo silencio
- Botón 🔊/🔇 en cabecera y en sesiones (`S.set.voice`). Silenciado: oculta altavoces, quita dictados/deletreos y convierte «Escucha y elige» en lectura. Código: `src/20c_silencio.js`. Probado en node (0 ejercicios con audio); falta prueba en navegador real.
