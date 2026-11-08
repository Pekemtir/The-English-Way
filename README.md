# The English Way

Curso gratuito de **inglés (británico) A1 + A2** (interfaz y explicaciones en castellano) que funciona en el navegador, sin instalación ni cuentas.

**Abrir la app:** https://pekemtir.github.io/The-English-Way/

## Qué incluye
- 50 lecciones (26 de A1 y 24 de A2) con explicaciones, tablas, ejemplos con audio y 13 ejercicios cada una.
- Más de 1.600 palabras en 64 temas, con tarjetas y cuestionarios, y un diccionario buscable de ~2.400 entradas.
- 178 verbos con 7 tiempos generados por reglas (present simple, present continuous, past simple, past continuous, present perfect, will, be going to) y práctica de conjugación.
- Constructor de frases, dictado de números, deletreo, escucha y elige, repaso de palabras flojas y reto diario.
- Juegos con bloqueos por progreso para no adelantar materia.
- Test de nivel A1 y A2 (90 %, uno cada 24 h) y autoevaluación.
- XP, rachas, insignias, copia de seguridad del progreso y tema oscuro/claro.

## Privacidad
Todo funciona en tu dispositivo. Sin cuentas, anuncios, cookies ni rastreo. El progreso se guarda en `localStorage`.

## Propiedad intelectual y licencias
- **Código**: MIT (ver `LICENSE`).
- **Contenidos del curso** (textos, ejercicios, vocabulario, diccionario): obra original, licencia [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).
- **Tipografías** Patrick Hand y Nunito (incrustadas): SIL Open Font License 1.1.
- El temario se ha contrastado con las escalas A1/A2 del Volumen Complementario del MCER (Consejo de Europa, 2020) y con un programa público de A2, solo como referencia de contenidos; **no se ha copiado ni traducido ningún texto** de manuales, exámenes ni diccionarios.
- Proyecto independiente, **sin afiliación ni aval** de ninguna entidad oficial. No es un curso oficial ni emite certificados.

## Desarrollo
La aplicación es un único archivo `index.html` (fuentes incrustadas, sin peticiones externas). Las versiones anteriores están en `versiones/` y los cambios en `CHANGELOG.md`. El código por partes está en `src/` (`python3 src/build.py` lo reconstruye).
