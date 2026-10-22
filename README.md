# Ana Jurado — Interiorismo & Arte

Web de Ana Jurado con interiorismo como portada, 48 fotografías en una galería mezclada y paginada y una sección de pintura con imágenes del proceso creativo y una obra en caballete.

## Desarrollo

Con Node.js 22 o 24 y npm:

```sh
npm ci
npm run dev
```

## Publicación en Vercel

Importar este repositorio en Vercel y seleccionar Vite. Usar `npm run build` como comando de compilación y `dist` como carpeta de salida. `vercel.json` permite abrir directamente las páginas interiores.

```sh
npm run build
npm run preview
```

## Páginas

- `/`: inicio, con protagonismo del interiorismo.
- `/interiorismo`: galería mezclada, en cuatro páginas, con fotos ampliables.
- `/interiorismo/:category`: mantiene los enlaces anteriores y muestra la galería completa.
- `/proyectos/:id`: página de cada proyecto.
- `/arte`: pintura, proceso creativo y obra en caballete.
- `/estudio`: presentación de Ana.
- `/contacto`: formulario integrado en español, con selección de interiorismo o arte.

Las fotografías han sido sustituidas por la selección facilitada por Ana en Google Drive, organizada en salones, comedores, jardines, dormitorios, cuartos de baño, detalles de decoración y otras estancias. La portada muestra la versión mejorada y luminosa del salón original, con los cuadros enmarcados. Se han retirado dos tomas repetidas de comedor y jardín.

Las imágenes están optimizadas en WebP en `public/photos/`, con copias pequeñas para las galerías. Los datos de las 48 fotografías de interiorismo están en `src/projects.json`. Las tres imágenes de presentación y arte se utilizan en las páginas correspondientes. El logo oficial se conserva.

El formulario de `/contacto` envía a `/api/contact`. El servidor valida los campos y reenvía al receptor original de Adobe Portfolio de interiorismo o arte. La web no almacena mensajes ni expone credenciales. Los receptores están fijados en `api/contact.js`; no se acepta una URL de destino del cliente. Las fuentes se cargan desde Google Fonts y tienen alternativas locales.

Las fotografías con `artByAna` muestran una etiqueta de autoría sin enlace. La portada también muestra un crédito discreto, sin enlace. Al pulsar las fotos se amplía la fotografía completa. Las 15 fotos con obras están repartidas entre las cuatro páginas (4, 4, 4 y 3). Las dos primeras imágenes de la selección inicial, sin cuadros visibles, no tienen etiqueta. La galería de recortes de cuadros se ha retirado; sus enlaces antiguos redirigen a la presentación de Arte.
