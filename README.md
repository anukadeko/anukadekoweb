# Ana Jurado — Interiorismo & Arte

Web de Ana Jurado con interiorismo como portada, 39 proyectos de decoración y una galería de 15 pinturas.

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
- `/interiorismo`: proyectos y filtros.
- `/proyectos/:id`: página de cada proyecto.
- `/arte`: galería de pintura y vistas ampliadas.
- `/estudio`: presentación de Ana.
- `/contacto`: acceso a las páginas de contacto existentes.

Las fotografías proceden de las páginas de Ana Jurado, facilitadas para este proyecto:

- https://anukadekodesigner.myportfolio.com/
- https://anajuradopaintings.myportfolio.com/

Las fotografías utilizadas están incluidas en `public/`; las de interiorismo están optimizadas en WebP. Los datos de proyectos están en `src/projects.json`.

El contacto utiliza las páginas originales de Adobe Portfolio. La web no tiene un formulario propio ni almacena mensajes. Las fuentes se cargan desde Google Fonts y tienen alternativas locales.
