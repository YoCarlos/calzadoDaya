# Rexell: guía de producción del video (15 s, sin audio)

## Qué ya está hecho

| Pieza | Archivo | Uso |
|---|---|---|
| Landing + configurador funcional | `rexell/index.html` (y el link publicado) | Prototipo para la tesis y fuente de todas las tomas de pantalla |
| Recorrido completo, pantalla limpia | `video/rexell-demo-clean.mp4` | Para insertar dentro de la pantalla de la laptop o usar a pantalla completa |
| Recorrido completo, con marco de navegador | `video/rexell-demo-frame.mp4` | Para cortes a pantalla completa con look "Screen Studio" |
| Clips por escena | `video/escenas/` | Escenas 2, 3, 4 y 5 ya cortadas |
| Animatic de 15 s | `video/rexell-animatic-15s.mp4` | Borrador con el storyboard en lugar de las tomas reales, para validar ritmo |

Las tomas de pantalla son grabaciones reales de la web: textos nítidos, botones correctos, el zapato cambia de color de verdad. No hace falta generarlas con IA.

Lo que falta generar con IA (Kling, Runway o Veo) son las tomas con personas: escenas 1, 2 (rostro), 5 (empaque), 6, 7 y 8.

---

## Continuidad (pegar al inicio de cada prompt)

Antes de animar, crea **una imagen de referencia del protagonista** en alta resolución (Kling Image, Midjourney o similar) usando el panel 1 y el 7 del storyboard. Usa esa misma imagen como "character reference" / "elements" en todas las escenas.

**Bloque de personaje (en inglés, Kling responde mejor):**

```
Same man in every shot: Latin American man, early 30s, short dark wavy hair, light stubble, rectangular black-frame glasses, warm friendly expression. Realistic skin texture, natural proportions.
```

**Bloque de producto:**

```
The shoe is always the same: black smooth leather derby shoe, black laces, thick cream-white rubber sole with visible stitching, round toe. The insole is bright blue with small perforations and the word REXELL printed at the heel.
```

**Bloque de estilo:**

```
Photorealistic commercial footage, shot on cinema camera, 35mm lens, shallow depth of field, soft natural light, subtle film grain, gentle camera movement, 24 fps, no text, no subtitles, no logos except REXELL.
```

**Negative prompt (todas las escenas):**

```
cartoon, CGI look, deformed hands, extra fingers, warped face, changing face, different person, different shoe, sneaker, text overlay, subtitles, watermark, distorted logo, fast shaky camera
```

**Ajustes en Kling:** Image to Video · 16:9 · modo Professional / 1080p · 5 s · sonido desactivado. Genera 2 o 3 versiones por escena y elige la mejor; en el montaje solo usarás 1,5 a 2 s de cada clip.

---

## Prompts por escena

### 1. Rutina y fatiga (0:00 a 0:02) · IA
Imagen inicial: panel 1 del storyboard (ampliado).
```
[personaje] [estilo] Busy European-style pedestrian street, morning. The man walks toward the camera wearing a navy shirt, khaki chinos and a brown leather messenger bag. He slows down, winces slightly and glances down at his feet, showing discomfort. Camera slowly tracks backward at walking pace. Background pedestrians softly out of focus.
```
Opción de inserto (0,5 s): `Close-up of a man's tired feet in worn brown shoes, red irritated heel, slow push-in.`

### 2. Descubrimiento (0:02 a 0:03,5) · IA + pantalla
IA (0,7 s):
```
[personaje] [estilo] Evening at home, the man sits at a wooden desk in front of a silver laptop. Screen glow lights his face. He leans in with curiosity and starts typing, a small smile appears. Over-the-shoulder angle, slow push-in toward the screen.
```
Pantalla (0,8 s): `escenas/escena2-descubrimiento.mp4` (el cursor hace clic en "Diseñar mi par").

### 3. Personalización estética (0:03,5 a 0:05,5) · pantalla
`escenas/escena3-estetica.mp4`: cambio de color (coñac → chocolate → negro) y acercamiento al zapato.

### 4. Personalización de confort (0:05,5 a 0:07,5) · pantalla
`escenas/escena4-confort.mp4`: se activa Higiene activa, aparecen las microperforaciones y el aire que sube, se elige soporte de arco.

### 5. Confirmación y empaque (0:07,5 a 0:09) · pantalla + IA
Pantalla (0,6 s): `escenas/escena5-confirmacion.mp4` (pedido confirmado).
IA (0,9 s), imagen inicial: panel 5:
```
[producto] [estilo] Bright clean workshop. Gloved hands gently place the black leather derby shoe into a kraft cardboard box printed with the REXELL logo, on top of white tissue paper. Slow top-down dolly. Shelves of shoes softly blurred in the background.
```

### 6. Entrega y unboxing (0:09 a 0:11) · IA
Imagen inicial: panel 6 (mitad inferior).
```
[personaje] [producto] [estilo] Living room with warm window light. The man sits on a sofa and opens a kraft REXELL shoebox on his lap, lifts the tissue paper and smiles as he sees the shoes. Medium shot, slow push-in.
```
Si quieres la entrega en la puerta (mitad superior del panel 6), genérala aparte y úsala 0,7 s.

### 7. Inspección de calidad (0:11 a 0:13) · IA
Imagen inicial: panel 7.
```
[personaje] [producto] [estilo] Close-up. The man holds the black derby shoe in one hand and the blue perforated insole in the other, turns the insole slowly toward camera, pressing it lightly with his thumb, impressed expression. Soft studio light, shallow depth of field.
```

### 8. Uso y confort absoluto (0:13 a 0:15) · IA
Imagen inicial: panel 8.
```
[personaje] [producto] [estilo] Sunny side street. The man walks confidently toward camera wearing a denim shirt over a white t-shirt, khaki chinos and the black derby shoes with cream soles. Relaxed posture, easy smile. Camera tracks backward, then tilts down to the shoes for the final step.
```
Cierre (último 0,6 s, opcional): logo REXELL y "Diseñado por ti. Hecho para tu pisada." sobre fondo claro.

---

## Línea de tiempo del montaje (CapCut o DaVinci)

| Tiempo | Escena | Fuente | Ajuste |
|---|---|---|---|
| 0,0 a 2,0 | 1 Rutina y fatiga | IA | Corte en el gesto de molestia |
| 2,0 a 2,7 | 2 Descubrimiento (rostro) | IA | |
| 2,7 a 3,5 | 2 Descubrimiento (web) | escena2 | Velocidad 2× |
| 3,5 a 5,5 | 3 Estética | escena3 | Velocidad 3× |
| 5,5 a 7,5 | 4 Confort | escena4 | Velocidad 3× |
| 7,5 a 8,1 | 5 Confirmación (web) | escena5 | Velocidad 2× |
| 8,1 a 9,0 | 5 Empaque | IA | |
| 9,0 a 11,0 | 6 Unboxing | IA | |
| 11,0 a 13,0 | 7 Inspección | IA | |
| 13,0 a 15,0 | 8 Uso y confort | IA | Último 0,6 s: cierre con logo |

Reglas de montaje:
- Cortes secos entre escenas, o una transición "zoom in" muy corta (4 a 6 cuadros) al entrar y salir de la pantalla.
- Textos en pantalla de 2 a 3 palabras como máximo (ejemplo: "Diseña tu par", "Ajusta tu confort", "Recíbelo en casa").
- Exportar: 1920×1080, 30 fps, H.264, **pista de audio eliminada**.
- Para que las tomas de web se sientan dentro de la historia, en la escena 2 puedes poner el clip limpio dentro de la pantalla de la laptop (CapCut: "Máscara" + "Seguimiento de movimiento", o en DaVinci con Planar Tracker).
