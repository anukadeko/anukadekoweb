# Ana Jurado — Interiorismo & Arte

Web de Ana Jurado con interiorismo como portada, 50 fotografías en una galería mezclada y paginada y una sección de pintura con imágenes del proceso creativo y una obra en caballete.

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
- `/interiorismo`: galería mezclada, en cinco páginas, con fotos ampliables.
- `/interiorismo/:category`: mantiene los enlaces anteriores y muestra la galería completa.
- `/proyectos/:id`: página de cada proyecto.
- `/arte`: pintura, proceso creativo y obra en caballete.
- `/estudio`: presentación de Ana.
- `/contacto`: acceso a las páginas de contacto existentes.

Las fotografías han sido sustituidas por la selección facilitada por Ana en Google Drive, organizada en salones, comedores, jardines, dormitorios, cuartos de baño, detalles de decoración y otras estancias. Se conserva el salón original como imagen de portada, a petición de Ana. Se han retirado dos tomas repetidas de comedor y jardín.

Las imágenes están optimizadas en WebP en `public/photos/`, con copias pequeñas para las galerías. Los datos de las 50 fotografías de interiorismo están en `src/projects.json`. Las tres imágenes de presentación y arte se utilizan en las páginas correspondientes. El logo oficial se conserva.

El contacto utiliza las páginas originales de Adobe Portfolio. La web no tiene un formulario propio ni almacena mensajes. Las fuentes se cargan desde Google Fonts y tienen alternativas locales.
