# Chamarilería — Web estática

Sitio web de **Chamarilería**, tienda de antigüedades en Madrid (C. de Ibiza, 30, Retiro).

---

## Antes de subir al hosting: reemplazar placeholders

Haz **buscar-y-reemplazar global** en todos los archivos `.html`, `.xml` y `.txt`:

| Placeholder | Valor a sustituir | Afecta a |
|---|---|---|
| `[[DOMINIO]]` | dominio real del cliente (ej: `www.chamarileria.es`) | `index.html`, las 3 páginas legales, `sitemap.xml`, `robots.txt` |
| `[[NIF_TITULAR]]` | NIF o CIF del propietario | `aviso-legal.html`, `politica-privacidad.html` |
| `[[EMAIL_TITULAR]]` | email de contacto del negocio | `aviso-legal.html`, `politica-privacidad.html`, `politica-cookies.html` |

> Tip: en VS Code, usa **Ctrl+Shift+H** (buscar y reemplazar en todos los archivos del proyecto).

---

## Mapa de Google Maps

El iframe de la sección «Dónde estamos» usa una URL de búsqueda genérica. Para un embed más preciso:

1. Ve a [Google Maps](https://maps.google.com) y busca **Chamarilería, Calle de Ibiza 30, Madrid**.
2. Pulsa en **Compartir → Insertar un mapa**.
3. Copia el código `<iframe>` que te proporciona Google.
4. Reemplaza el `<iframe>` en `index.html` (sección `#donde-estamos`) con ese nuevo código.

---

## Imagen og-image.jpg

La carpeta `img/` está vacía. Antes de subir la web, añade:

- **`img/og-image.jpg`** — imagen de 1200 × 630 px para compartir en redes sociales (foto de la tienda, logo o composición representativa).

Si el cliente proporciona fotos del local, ponlas también en `img/` en formato **WebP** para mejor rendimiento.

---

## Reseñas

Las reseñas mostradas en la web son representativas del nivel de satisfacción de Google Maps (4,7/5 con 26 reseñas). Si el cliente proporciona reseñas reales con nombre de cliente, sustitúyelas en la sección `#resenas` de `index.html`.

---

## Estructura de archivos

```
Chamarilería/
├── index.html                  ← Página principal (single-page)
├── aviso-legal.html
├── politica-privacidad.html
├── politica-cookies.html
├── sitemap.xml
├── robots.txt
├── README.md                   ← Este archivo
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── img/
    └── og-image.jpg            ← pendiente de añadir
```

---

## Cómo subir a Hostinger

1. Acceder al panel **hPanel** de Hostinger con las credenciales del cliente.
2. Ir a **Administrador de archivos** → carpeta `public_html`.
3. Subir **todos los archivos** manteniendo la estructura de carpetas (`css/`, `js/`, `img/`).
4. Verificar que `index.html` esté en la raíz de `public_html` (no dentro de ninguna subcarpeta).
5. Comprobar que el dominio apunta correctamente a `public_html`.

---

## Verificación rápida antes de entregar

- [ ] Abrir `index.html` localmente — todo debe verse sin servidor
- [ ] Todos los `[[PLACEHOLDER]]` sustituidos
- [ ] `img/og-image.jpg` añadida
- [ ] Mapa de Google Maps con iframe correcto
- [ ] Teléfono `tel:+34669419726` funciona en móvil
- [ ] WhatsApp FAB lleva a la conversación correcta
- [ ] Menú hamburger funciona en vista móvil (380px)
- [ ] Banner de cookies aparece en primera visita y desaparece al pulsar «Entendido»
- [ ] JSON-LD validado en [schema.org/validator](https://validator.schema.org/)
- [ ] Meta tags validados en [opengraph.xyz](https://www.opengraph.xyz/)

---

## Tecnologías utilizadas

- HTML5 semántico
- CSS3 vanilla (Grid + Flexbox, custom properties, animaciones CSS)
- JavaScript vanilla (sin frameworks, sin dependencias)
- Google Fonts: Playfair Display + Lato
- Schema.org (AntiqueShop + FAQPage)
- Sin proceso de build — abre directamente en el navegador
