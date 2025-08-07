# 🚀 Guía de Deployment

## Vercel (Recomendado)

### Deployment Automático via GitHub
1. Push tu código a GitHub
2. Conecta tu repositorio en [vercel.com](https://vercel.com)
3. ¡Listo! Se despliega automáticamente

### Deployment Manual
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel --prod
```

### Configuración de Dominio Personalizado
1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Domains
3. Añade tu dominio personalizado

## Netlify

### Via Drag & Drop
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta del proyecto
3. ¡Desplegado!

### Via Git
```bash
# Conectar repositorio en Netlify Dashboard
# Build settings:
# Build command: (vacío)
# Publish directory: ./
```

## GitHub Pages

```bash
# Configurar en Settings → Pages
# Source: Deploy from a branch
# Branch: main / (root)
```

## Firebase Hosting

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login y configurar
firebase login
firebase init hosting

# Desplegar
firebase deploy
```

## Servidor Local para Testing

```bash
# Opción 1: usando npx serve
npx serve .

# Opción 2: usando Python
python -m http.server 8000

# Opción 3: usando Node.js http-server
npx http-server .
```

## Optimizaciones Pre-Deploy

### Performance
- ✅ Imágenes optimizadas (WebP cuando sea posible)
- ✅ CSS y JS minificados en producción
- ✅ Lazy loading implementado
- ✅ Preconnect a Google Fonts

### SEO
- ✅ Meta tags completos
- ✅ Sitemap.xml (agregar si necesario)
- ✅ Robots.txt (agregar si necesario)
- ✅ Open Graph tags
- ✅ Schema.org markup

### Seguridad
- ✅ Headers de seguridad configurados
- ✅ HTTPS enforced
- ✅ No información sensible en el código

## Monitoreo Post-Deploy

### Analytics Recomendados
- Google Analytics 4
- Hotjar para heatmaps
- Google Search Console

### Performance Monitoring
- Lighthouse CI
- Web Vitals
- PageSpeed Insights

## Actualizaciones Futuras

Para actualizar el sitio:
1. Haz cambios localmente
2. Testea con `npm run preview`
3. Push a main branch
4. Vercel redespliega automáticamente

## Troubleshooting

### Problema: Animaciones no funcionan en mobile
- Verifica `prefers-reduced-motion`
- Testea en dispositivos reales

### Problema: Fuentes no cargan
- Verifica preconnect headers
- Considera font-display: swap

### Problema: Canvas no funciona
- Verifica soporte del navegador
- Añade fallbacks para navegadores antiguos 