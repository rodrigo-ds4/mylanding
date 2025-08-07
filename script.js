// Cursor personalizado
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

// Seguimiento del mouse
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animación del cursor
function animateCursor() {
    // Cursor principal (rápido)
    cursorX += (mouseX - cursorX) * 0.3;
    cursorY += (mouseY - cursorY) * 0.3;
    
    // Cursor follower (lento)
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Efectos de hover para el cursor
const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item, .contact-item');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
        cursorFollower.style.borderColor = 'rgba(99, 102, 241, 0.8)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
        cursorFollower.style.borderColor = 'rgba(99, 102, 241, 0.3)';
    });
});

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar transparente en scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Menú móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevenir scroll del body cuando el menú está abierto
    if (hamburger.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
}));

// Cerrar menú al redimensionar ventana
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Animaciones de scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.about-card, .project-card, .skill-item, .stat-item, .contact-item').forEach(el => {
    el.classList.add('scroll-animate');
    observer.observe(el);
});

// Contador animado
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Iniciar contadores cuando sean visibles
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// Animación de skill bars
function animateSkillBar(skillItem) {
    const level = skillItem.dataset.level;
    const progressBar = skillItem.querySelector('.skill-progress');
    
    if (progressBar && !progressBar.classList.contains('animated')) {
        progressBar.classList.add('animated');
        
        setTimeout(() => {
            progressBar.style.width = level + '%';
        }, Math.random() * 300 + 200); // Retraso aleatorio para efecto cascada
    }
}

// Observer para skills
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillItems = document.querySelectorAll('.skill-item');
            
            // Animar cada skill con un pequeño retraso
            skillItems.forEach((skill, index) => {
                setTimeout(() => {
                    animateSkillBar(skill);
                }, index * 200); // 200ms de retraso entre cada barra
            });
            
            // Solo observar una vez
            skillsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
});

// Observar la sección de skills
const skillsSection = document.getElementById('skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Navbar activo basado en scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 150; // Offset para better UX
    
    // Encontrar la sección actual
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Si estamos en el top de la página, activar home
    if (window.scrollY < 100) {
        currentSection = 'home';
    }
    
    // Si estamos al final de la página, activar contact
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        currentSection = 'contact';
    }
    
    // Actualizar estados activos con animación suave
    navLinks.forEach(link => {
        const wasActive = link.classList.contains('active');
        link.classList.remove('active');
        
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
            
            // Pequeña animación si el link se activa por primera vez
            if (!wasActive) {
                link.style.transform = 'translateY(-2px)';
                setTimeout(() => {
                    link.style.transform = '';
                }, 200);
            }
        }
    });
}

// Escuchar scroll para navbar activo (con throttling mejorado)
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(() => {
        updateActiveNavLink();
    }, 10);
}, { passive: true });

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Offset para la navbar fija
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Actualizar inmediatamente el estado activo
            setTimeout(() => {
                updateActiveNavLink();
            }, 100);
        }
    });
});

// Inicializar navbar activo
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
    
    // Actualizar después de que las imágenes y contenido se carguen
    window.addEventListener('load', updateActiveNavLink);
});

// Efecto de partículas en el hero
class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.reset();
    }
    
    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1;
        
        this.opacity += Math.sin(Date.now() * 0.001) * 0.01;
        this.opacity = Math.max(0.1, Math.min(0.7, this.opacity));
    }
    
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
        this.ctx.fill();
    }
}

// Crear canvas para partículas
function createParticleCanvas() {
    const hero = document.querySelector('.hero');
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    
    hero.appendChild(canvas);
    
    function resizeCanvas() {
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle(canvas));
    }
    
    function animate() {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Inicializar partículas cuando se carga la página
document.addEventListener('DOMContentLoaded', createParticleCanvas);

// Efecto de escritura para el código
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    
    typing();
}

// Inicializar efecto de escritura
document.addEventListener('DOMContentLoaded', () => {
    const codeLines = document.querySelectorAll('.code-line');
    const texts = [
        'const developer = {',
        '  name: \'Rodrigo\',',
        '  passion: \'coding\',',
        '  mission: \'innovate\'',
        '};'
    ];
    
    setTimeout(() => {
        codeLines.forEach((line, index) => {
            setTimeout(() => {
                typeWriter(line, texts[index], 50);
            }, index * 800);
        });
    }, 2000);
});

// Formulario de contacto
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const button = contactForm.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    // Estado de carga
    button.textContent = 'Enviando...';
    button.disabled = true;
    button.style.opacity = '0.7';
    
    // Simular envío (reemplazar con tu lógica de backend)
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Éxito
        button.textContent = '¡Enviado! ✓';
        button.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        
        // Limpiar formulario
        setTimeout(() => {
            contactForm.reset();
            button.textContent = originalText;
            button.disabled = false;
            button.style.opacity = '1';
            button.style.background = 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)';
        }, 3000);
        
        // Mostrar notificación
        showNotification('¡Mensaje enviado correctamente!', 'success');
        
    } catch (error) {
        // Error
        button.textContent = 'Error al enviar';
        button.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.style.opacity = '1';
            button.style.background = 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)';
        }, 3000);
        
        showNotification('Error al enviar el mensaje. Intenta de nuevo.', 'error');
    }
});

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    const styles = {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 2rem',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '600',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px'
    };
    
    const typeStyles = {
        success: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        error: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
        info: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
    };
    
    Object.assign(notification.style, styles);
    notification.style.background = typeStyles[type];
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animar salida
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Efecto parallax suave
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.physics-ball, .code-block');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        element.style.transform += ` translateY(${scrolled * speed}px)`;
    });
});

// Efecto de hover 3D para las tarjetas de proyecto
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
});

// Loading animation
window.addEventListener('load', () => {
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(el => {
        el.classList.remove('loading');
    });
});

// Scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

createScrollProgress();

// Easter egg: Konami code
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s infinite';
    showNotification('¡Easter egg activado! 🎉', 'success');
    
    // Crear CSS para el efecto rainbow
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        document.body.style.animation = '';
        style.remove();
    }, 10000);
}

// Optimización de rendimiento
let ticking = false;

function updateOnScroll() {
    // Aquí van las funciones que se ejecutan en scroll
    if (!ticking) {
        requestAnimationFrame(() => {
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', updateOnScroll);

// Preload de imágenes críticas
function preloadImages() {
    const imageUrls = [
        // Agregar URLs de imágenes importantes aquí
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

preloadImages();

// Detección de dispositivo táctil
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
    document.body.classList.add('touch-device');
    cursor.style.display = 'none';
    cursorFollower.style.display = 'none';
}

// Modo oscuro (bonus)
function createThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌙';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
    `;
    
    let isDark = false;
    
    themeToggle.addEventListener('click', () => {
        isDark = !isDark;
        document.body.style.filter = isDark ? 'invert(1) hue-rotate(180deg)' : '';
        themeToggle.innerHTML = isDark ? '☀️' : '🌙';
    });
    
    document.body.appendChild(themeToggle);
}

createThemeToggle();

// Inicialización final
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Landing page de Rodrigo cargada exitosamente!');
    
    // Lazy loading de contenido no crítico
    setTimeout(() => {
        // Cargar funcionalidades adicionales
    }, 2000);
});

// Service Worker para PWA (bonus)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('SW registrado'))
            .catch(() => console.log('SW falló'));
    });
}

// Sistema de Traducciones
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-projects': 'Projects',
        'nav-skills': 'Skills',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-greeting': "Hello, I'm",
        'hero-role': 'Data Analyst & ML Engineer',
        'hero-description': 'Transforming data into actionable insights through machine learning and advanced analytics. Specialized in NLP, predictive modeling, and data-driven decision making.',
        'hero-btn-projects': 'View Projects',
        'hero-btn-contact': 'Contact Me',
        'hero-btn-cv': 'Download CV',
        
        // About Section
        'about-title': 'About Me',
        'about-subtitle': 'Get to know who I am and what drives my passion for development',
        
        // Projects Section
        'projects-title': 'Featured Projects',
        'projects-subtitle': 'A showcase of my most recent and impactful work',
        
        // Skills Section
        'skills-title': 'Technologies & Skills',
        'skills-subtitle': 'The tools I use to create amazing solutions',
        
        // Contact Section
        'contact-title': 'Get In Touch',
        'contact-subtitle': "Let's work together to bring your ideas to life",
    },
    es: {
        // Navigation
        'nav-home': 'Inicio',
        'nav-about': 'Sobre mí',
        'nav-projects': 'Proyectos',
        'nav-skills': 'Habilidades',
        'nav-contact': 'Contacto',
        
        // Hero Section
        'hero-greeting': 'Hola, soy',
        'hero-role': 'Analista de Datos e Ingeniero ML',
        'hero-description': 'Transformando datos en insights accionables a través de machine learning y análisis avanzado. Especializado en NLP, modelado predictivo y toma de decisiones basada en datos.',
        'hero-btn-projects': 'Ver Proyectos',
        'hero-btn-contact': 'Contactarme',
        'hero-btn-cv': 'Descargar CV',
        
        // About Section
        'about-title': 'Sobre Mí',
        'about-subtitle': 'Conoce quién soy y qué impulsa mi pasión por el desarrollo',
        
        // Projects Section
        'projects-title': 'Proyectos Destacados',
        'projects-subtitle': 'Una muestra de mi trabajo más reciente e impactante',
        
        // Skills Section
        'skills-title': 'Tecnologías y Habilidades',
        'skills-subtitle': 'Las herramientas que uso para crear soluciones increíbles',
        
        // Contact Section
        'contact-title': 'Ponte en Contacto',
        'contact-subtitle': 'Trabajemos juntos para dar vida a tus ideas',
    },
    de: {
        // Navigation
        'nav-home': 'Start',
        'nav-about': 'Über mich',
        'nav-projects': 'Projekte',
        'nav-skills': 'Fähigkeiten',
        'nav-contact': 'Kontakt',
        
        // Hero Section
        'hero-greeting': 'Hallo, ich bin',
        'hero-role': 'Datenanalyst & ML Ingenieur',
        'hero-description': 'Verwandle Daten in umsetzbare Erkenntnisse durch maschinelles Lernen und erweiterte Analytik. Spezialisiert auf NLP, prädiktive Modellierung und datengesteuerte Entscheidungsfindung.',
        'hero-btn-projects': 'Projekte ansehen',
        'hero-btn-contact': 'Kontakt aufnehmen',
        'hero-btn-cv': 'CV herunterladen',
        
        // About Section
        'about-title': 'Über Mich',
        'about-subtitle': 'Lernen Sie mich kennen und erfahren Sie, was meine Leidenschaft für die Entwicklung antreibt',
        
        // Projects Section
        'projects-title': 'Ausgewählte Projekte',
        'projects-subtitle': 'Eine Auswahl meiner neuesten und wirkungsvollsten Arbeiten',
        
        // Skills Section
        'skills-title': 'Technologien & Fähigkeiten',
        'skills-subtitle': 'Die Tools, die ich verwende, um erstaunliche Lösungen zu erstellen',
        
        // Contact Section
        'contact-title': 'Kontakt aufnehmen',
        'contact-subtitle': 'Lassen Sie uns zusammenarbeiten, um Ihre Ideen zum Leben zu erwecken',
    }
};

let currentLanguage = 'en'; // Default en inglés

// Datos de idiomas
const languageData = {
    en: { flag: '🇺🇸', code: 'EN', name: 'English' },
    es: { flag: '🇪🇸', code: 'ES', name: 'Español' },
    de: { flag: '🇩🇪', code: 'DE', name: 'Deutsch' }
};

// Función para cambiar idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Actualizar todos los elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Actualizar selector de idioma
    const currentLang = document.getElementById('current-lang');
    const flag = currentLang.querySelector('.flag');
    const langCode = currentLang.querySelector('.lang-code');
    
    const langInfo = languageData[lang];
    flag.textContent = langInfo.flag;
    langCode.textContent = langInfo.code;
    
    // Actualizar opciones activas
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        }
    });
    
    // Guardar preferencia en localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    // Cerrar dropdown
    closeLanguageDropdown();
}

// Función para abrir/cerrar dropdown
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('lang-dropdown');
    const currentLang = document.getElementById('current-lang');
    
    dropdown.classList.toggle('active');
    currentLang.classList.toggle('active');
}

// Función para cerrar dropdown
function closeLanguageDropdown() {
    const dropdown = document.getElementById('lang-dropdown');
    const currentLang = document.getElementById('current-lang');
    
    dropdown.classList.remove('active');
    currentLang.classList.remove('active');
}

// Inicializar sistema de idiomas
function initLanguageSystem() {
    const currentLang = document.getElementById('current-lang');
    const dropdown = document.getElementById('lang-dropdown');
    
    // Cargar idioma guardado o usar inglés por defecto
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLanguage);
    
    // Event listener para abrir/cerrar dropdown
    currentLang.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLanguageDropdown();
    });
    
    // Event listeners para opciones de idioma
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const selectedLang = option.dataset.lang;
            if (selectedLang !== currentLanguage) {
                changeLanguage(selectedLang);
                
                // Pequeña animación de feedback
                currentLang.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    currentLang.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });
    
    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) {
            closeLanguageDropdown();
        }
    });
    
    // Cerrar dropdown con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLanguageDropdown();
        }
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSystem();
    
    // Aplicar idioma por defecto después de un pequeño delay para evitar flash
    setTimeout(() => {
        changeLanguage(currentLanguage);
    }, 100);
}); 