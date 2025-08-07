# 🚀 Landing Page - Rodrigo de Sarasqueta

Una landing page moderna, elegante y totalmente interactiva construida con HTML, CSS y JavaScript vanilla. Diseñada para impresionar y conseguir oportunidades laborales.

## ✨ Características

### 🎨 Diseño y UX
- **Diseño limpio y moderno** con fondo blanco y elementos elegantes
- **Totalmente responsivo** - se adapta a cualquier dispositivo
- **Cursor personalizado** con efectos interactivos
- **Animaciones fluidas** y transiciones suaves
- **Bolita con física realista** que simula gravedad y rebotes
- **Efectos parallax** y partículas animadas

### 🛠️ Funcionalidades Técnicas
- **Vanilla JavaScript** - sin frameworks, máximo rendimiento
- **CSS Grid y Flexbox** para layouts modernos
- **Intersection Observer API** para animaciones al scroll
- **Canvas API** para efectos de partículas
- **Optimizado para SEO** con meta tags apropiados
- **PWA ready** con service worker opcional

### 🎯 Secciones Incluidas
1. **Hero** - Presentación impactante con animaciones
2. **Sobre mí** - Historia personal y estadísticas animadas
3. **Proyectos** - Portfolio con efectos 3D
4. **Skills** - Tecnologías con animaciones interactivas
5. **Contacto** - Formulario funcional con validación

### 🌟 Efectos Especiales
- **Cursor personalizado** que reacciona a elementos
- **Efecto de escritura** para el bloque de código
- **Contadores animados** en las estadísticas
- **Hover effects 3D** en las tarjetas de proyecto
- **Barra de progreso** de scroll
- **Modo oscuro** opcional
- **Easter egg** con código Konami
- **Sistema de notificaciones** elegante

## 🚀 Deployment en Vercel

### Método 1: Deploy Automático (Recomendado)
1. Sube el código a un repositorio de GitHub
2. Ve a [vercel.com](https://vercel.com) y conéctate con GitHub
3. Selecciona el repositorio
4. Vercel detectará automáticamente que es un sitio estático
5. ¡Listo! Tu landing estará disponible en pocos segundos

### Método 2: Deploy Manual
```bash
# Instalar Vercel CLI
npm i -g vercel

# En la carpeta del proyecto
vercel

# Seguir las instrucciones
```

### Método 3: Arrastrar y Soltar
1. Ve a [vercel.com/new](https://vercel.com/new)
2. Arrastra la carpeta del proyecto
3. ¡Listo!

## 📁 Estructura del Proyecto

```
landing/
├── index.html          # Estructura principal
├── styles.css           # Estilos y animaciones
├── script.js           # Funcionalidades interactivas
├── README.md           # Documentación
└── Rodrigo de Sarasqueta - CV 2025.pdf
```

## 🎨 Personalización

### Colores Principales
```css
--primary: #6366f1     /* Azul principal */
--secondary: #8b5cf6   /* Púrpura */
--accent: #ec4899      /* Rosa */
--text: #1a1a1a        /* Negro suave */
--background: #ffffff   /* Blanco limpio */
```

### Cambiar Información Personal
Edita el archivo `index.html`:
- Línea 41: Cambia el nombre
- Línea 47-50: Actualiza la descripción
- Línea 52: Modifica el email
- Sección contacto: Actualiza todos los enlaces

### Personalizar Proyectos
En la sección `projects`:
```html
<div class="project-card" data-tech="React,Node.js,MongoDB">
    <!-- Contenido del proyecto -->
</div>
```

### Modificar Skills
En la sección `skills`, actualiza las tecnologías y niveles:
```html
<div class="skill-item" data-level="90">
    <div class="skill-icon">⚛️</div>
    <span>React</span>
</div>
```

## 🔧 Configuración Avanzada

### Analytics (Opcional)
Agrega Google Analytics en el `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Formulario de Contacto Funcional
Para que el formulario funcione realmente, integra con:
- **Netlify Forms** (más fácil)
- **Formspree** 
- **EmailJS**
- **Tu propio backend**

Ejemplo con EmailJS:
```javascript
// En script.js, reemplaza la función del formulario
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: formData.get('name'),
    from_email: formData.get('email'),
    message: formData.get('message')
});
```

## 🌐 Dominios Personalizados

### En Vercel:
1. Ve a tu proyecto en Vercel
2. Clica en "Settings" > "Domains"
3. Agrega tu dominio personalizado
4. Configura los DNS según las instrucciones

## 📊 Performance

La landing está optimizada para:
- **Carga rápida** - CSS y JS minificados
- **SEO friendly** - Meta tags optimizados
- **Accesibilidad** - Contrastes y navegación por teclado
- **Core Web Vitals** - Métricas de Google optimizadas

## 🔒 Seguridad

- **CSP Headers** recomendados
- **HTTPS** por defecto en Vercel
- **Sin dependencias externas** vulnerables

## 🐛 Troubleshooting

### Problema: Animaciones no funcionan
- Verifica que JavaScript esté habilitado
- Comprueba la consola del navegador

### Problema: Cursor personalizado no aparece
- Algunos navegadores móviles no soportan cursores personalizados
- El script detecta automáticamente dispositivos táctiles

### Problema: Formulario no envía
- El formulario actual es una demo
- Integra con un servicio real de emails

## 🤝 Contribuciones

¿Quieres mejorar algo? ¡Las contribuciones son bienvenidas!

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commitea tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para tus propios proyectos.

## 🙏 Créditos

- **Fuentes**: Inter de Google Fonts
- **Iconos**: Emojis nativos para máxima compatibilidad
- **Inspiración**: Los mejores portfolios de desarrolladores

---

## 🚀 ¡A conseguir ese trabajo!

Esta landing page está diseñada para impresionar y mostrar tu profesionalismo. Personalízala, despliégala y compártela con orgullo.

**¿Preguntas?** Abre un issue o contacta directamente.

**¡Buena suerte en tu búsqueda laboral! 💪** 