# Jardinería F.P

Sitio web estático (HTML + CSS + JS), sin dependencias ni paso de build.

## Estructura

```
index.html
styles.css
script.js
img/            logo y fotos de trabajos
vercel.json
.github/workflows/pages.yml
```

## Publicar en Vercel

1. Subí el repositorio a GitHub.
2. En vercel.com: **Add New → Project** e importá el repositorio.
3. Dejá todo por defecto (Framework Preset: *Other*, sin Build Command ni Output Directory) y hacé **Deploy**.

Cada `git push` a `main` vuelve a publicar automáticamente.

## Publicar en GitHub Pages

1. Subí el repositorio a GitHub (rama `main`).
2. En el repositorio: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. El workflow `.github/workflows/pages.yml` publica el sitio en cada push a `main`.

La URL queda como `https://<usuario>.github.io/<repositorio>/`. Todas las rutas son relativas, así que funciona en ese subdirectorio.

## Cambiar datos

- Teléfono de WhatsApp: buscar `5492604693699` en `index.html`.
- Textos, horarios y servicios: directamente en `index.html`.
- Fotos: reemplazar los archivos de `img/` (mantener el nombre) o agregar `<figure>` en la sección `#trabajos`.
