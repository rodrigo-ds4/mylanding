# 🎨 Guía de Personalización

Esta guía te ayudará a personalizar tu landing page fácilmente sin necesidad de conocimientos avanzados.

## 📝 Cambiar Información Personal

### En `index.html`

#### Datos de Contacto
```html
<!-- Busca estas líneas y cámbialas -->
<span class="typing-text">Rodrigo de Sarasqueta</span>
<p class="hero-description">Tu nueva descripción aquí</p>

<!-- Enlaces -->
<a href="mailto:rod.desarasqueta@gmail.com">Cambiar email</a>
<a href="https://www.linkedin.com/in/rodrigo-dev/">Cambiar LinkedIn</a>
<a href="https://github.com/rodrigo-ds4/">Cambiar GitHub</a>
```

#### Proyectos
```html
<!-- En la sección de proyectos, busca: -->
<div class="project-card">
    <h3>Nuevo Proyecto</h3>
    <p>Descripción del proyecto</p>
    <div class="project-tech">
        <span>React</span>
        <span>Node.js</span>
    </div>
    <div class="project-links">
        <a href="#" target="_blank">Live Demo</a>
        <a href="#" target="_blank">GitHub</a>
    </div>
</div>
```

#### Skills
```html
<!-- Para cambiar skills, busca la sección skills y modifica: -->
<div class="skill-item">
    <span>Nueva Skill</span>
    <div class="skill-level" data-level="90"></div>
</div>
```

## 🎨 Cambiar Colores y Estilos

### En `styles.css`

#### Colores Principales
```css
/* Busca estas variables al inicio del archivo */
:root {
    --primary-color: #6366f1; /* Color principal - cámbialo aquí */
    --secondary-color: #8b5cf6; /* Color secundario */
    --accent-color: #06b6d4; /* Color de acento */
    --text-color: #1a1a1a; /* Color del texto */
    --bg-color: #ffffff; /* Color de fondo */
}
```

#### Fuentes
```css
/* Para cambiar la fuente, actualiza la URL en el HTML y luego: */
body {
    font-family: 'Tu-Nueva-Fuente', sans-serif;
}
```

#### Tamaños y Espaciados
```css
/* Hero section */
.hero h1 {
    font-size: 4rem; /* Cambia el tamaño del título */
}

.hero-description {
    font-size: 1.25rem; /* Tamaño de la descripción */
    max-width: 600px; /* Ancho máximo */
}
```

## 🚀 Personalizar Animaciones

### En `script.js`

#### Velocidad de Animaciones
```javascript
// Busca estas líneas y ajusta los valores:
cursorX += (mouseX - cursorX) * 0.3; // Velocidad cursor (0.1-0.5)
followerX += (mouseX - followerX) * 0.1; // Velocidad follower

// Física de la bolita
const gravity = 0.3; // Gravedad (0.1-0.8)
const friction = 0.95; // Fricción (0.8-0.99)
```

#### Colores de Partículas
```javascript
// En la función createParticles:
const colors = ['#6366f1', '#8b5cf6', '#06b6d4']; // Tus colores
```

## 📱 Personalizar para Mobile

### Responsive Breakpoints
```css
/* En styles.css, busca estas media queries y ajusta: */
@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.5rem; /* Tamaño en mobile */
    }
}
```

## 🖼️ Cambiar Imágenes y Assets

### Favicon
```html
<!-- En index.html, cambia el emoji: -->
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>">
```

### Background Patterns
```css
/* Para añadir un patrón de fondo sutil: */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('data:image/svg+xml,<svg>...</svg>');
    opacity: 0.05;
    z-index: -1;
}
```

## 📊 Añadir Analytics

### Google Analytics
```html
<!-- Antes del </head> en index.html: -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔗 Añadir Más Secciones

### Nueva Sección
```html
<!-- Después de la sección skills: -->
<section class="testimonials">
    <div class="container">
        <h2>Testimonios</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <p>"Excelente trabajo..."</p>
                <h4>- Cliente Satisfecho</h4>
            </div>
        </div>
    </div>
</section>
```

Correspondiente CSS:
```css
.testimonials {
    padding: 100px 0;
    background: #f8fafc;
}

.testimonial-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
}
```

## 🛠️ Testing Local

```bash
# Para ver los cambios:
npm run preview
# o
npx serve . -p 3000
```

## 🚀 Deploy Después de Cambios

```bash
# Si usas Vercel:
vercel --prod

# O simplemente push a GitHub si tienes auto-deploy configurado
git add .
git commit -m "Actualizar landing page"
git push
```

## 💡 Tips de Personalización

1. **Colores**: Usa [Coolors.co](https://coolors.co) para generar paletas
2. **Fuentes**: Explora [Google Fonts](https://fonts.google.com)
3. **Iconos**: Usa emojis o [Heroicons](https://heroicons.com)
4. **Animaciones**: Ajusta valores gradualmente para encontrar el balance perfecto
5. **Performance**: Usa Lighthouse para verificar que los cambios no afecten la velocidad

## 🆘 Solución de Problemas

### Si algo se rompe:
1. Revierte el último cambio
2. Verifica la consola del navegador (F12)
3. Compara con la versión original
4. Haz cambios pequeños e incrementales

### Backup antes de cambios grandes:
```bash
git add .
git commit -m "Backup antes de cambios"
``` 