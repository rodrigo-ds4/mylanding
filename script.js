document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM Completamente Cargado. Iniciando script...');

    // --- SISTEMA DE IDIOMAS (SIMPLIFICADO A TOGGLE) ---
    // ===================================================================

    let currentLang = 'en';
    const languages = ['en', 'es']; // Solo inglés y español
    const langLabels = {
        'en': { flag: '🇺🇸', name: 'English' },
        'es': { flag: '🇪🇸', name: 'Español' }
    };

    const translations = {
        en: {
            'nav-home': 'Home', 'nav-about': 'About', 'nav-projects': 'Projects', 'nav-skills': 'Skills', 'nav-contact': 'Contact',
            'hero-greeting': "Hello, I'm", 'hero-role': 'Backend & ML Engineer',
            'hero-description': 'Python backend, microservices, and AI agents for SMEs. Using FastAPI, Docker, and LangChain to build pragmatic solutions.',
            'hero-btn-projects': 'View Projects', 'hero-btn-contact': 'Contact Me', 'hero-btn-cv': 'Download CV',
            'about-title': 'About Me', 'about-subtitle': 'Backend, microservices, ML and AI agents for SMEs',
            'about-p1': 'Backend & ML Engineer focused on Python microservices and AI agents for SMEs. I design pragmatic, maintainable systems aligned with real business needs.',
            'about-p2': 'I work with FastAPI, Docker, LangChain and common ML tooling to build reliable backends, automate processes and enable data-driven flows without over-engineering.',
            'projects-title': 'Featured Projects', 'projects-subtitle': 'Work combining backend, ML, and AI agents built in Python',
            'proj-soundgraph-title': 'soundgraph',
            'proj-soundgraph-desc': 'Audio/graph utilities. Repository on GitHub.',
            'proj-insurance-title': 'InsuranceAIBot',
            'proj-insurance-desc': 'Insurance assistant/bot. Repository on GitHub.',
            'proj-indie-title': 'IndieHoyCommunity',
            'proj-indie-desc': 'Community platform for IndieHOY: subscriptions, discount requests, and admin dashboard.',
            'skills-title': 'Technical Skills', 'skills-subtitle': 'Backend, microservices, ML, and AI agent technologies',
            'stat-backend': 'Backend (Python)', 'stat-microservices': 'Microservices', 'stat-agents': 'AI Agents', 'stat-ml': 'Machine Learning',
            'contact-title': 'Get In Touch', 'contact-subtitle': "Let's create innovative solutions for your business"
        },
        es: {
            'nav-home': 'Inicio', 'nav-about': 'Acerca', 'nav-projects': 'Proyectos', 'nav-skills': 'Habilidades', 'nav-contact': 'Contacto',
            'hero-greeting': 'Hola, soy', 'hero-role': 'Ingeniero Backend & ML',
            'hero-description': 'Backend en Python, microservicios y agentes IA para PyMEs. Uso FastAPI, Docker y LangChain para soluciones pragmáticas.',
            'hero-btn-projects': 'Ver Proyectos', 'hero-btn-contact': 'Contactarme', 'hero-btn-cv': 'Descargar CV',
            'about-title': 'Sobre Mí', 'about-subtitle': 'Backend, microservicios, ML y agentes IA para PyMEs',
            'about-p1': 'Ingeniero Backend & ML enfocado en microservicios en Python y agentes IA para PyMEs. Diseño sistemas pragmáticos y mantenibles alineados con necesidades reales.',
            'about-p2': 'Trabajo con FastAPI, Docker, LangChain y herramientas ML comunes para backends fiables, automatización y flujos data-driven sin sobreingeniería.',
            'projects-title': 'Proyectos Destacados', 'projects-subtitle': 'Trabajo que combina backend, ML y agentes IA en Python',
            'proj-soundgraph-title': 'soundgraph',
            'proj-soundgraph-desc': 'Utilidades de audio/grafos. Repositorio en GitHub.',
            'proj-insurance-title': 'InsuranceAIBot',
            'proj-insurance-desc': 'Asistente/bot para seguros. Repositorio en GitHub.',
            'proj-indie-title': 'IndieHoyCommunity',
            'proj-indie-desc': 'Plataforma para IndieHOY: suscripciones, pedidos de descuento y panel admin.',
            'skills-title': 'Habilidades Técnicas', 'skills-subtitle': 'Tecnologías de backend, microservicios, ML y agentes IA',
            'stat-backend': 'Backend (Python)', 'stat-microservices': 'Microservicios', 'stat-agents': 'Agentes IA', 'stat-ml': 'Machine Learning',
            'contact-title': 'Contacto', 'contact-subtitle': 'Creemos soluciones innovadoras para tu negocio'
        }
    };

    const languageButton = document.getElementById('language-button');
    const langSpan = document.getElementById('current-language');

    function setLanguage(lang) {
        if (!languages.includes(lang)) lang = 'en'; // Fallback
        
        currentLang = lang;
        
        // Aplicar traducciones
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[currentLang] && translations[currentLang][key]) {
                el.textContent = translations[currentLang][key];
            }
        });

        // Actualizar el texto del botón para mostrar el *próximo* idioma
        if (langSpan) {
            const nextLang = currentLang === 'en' ? 'es' : 'en';
            langSpan.textContent = langLabels[nextLang].name;
        }

        localStorage.setItem('preferred-language', currentLang);
        console.log(`✅ Idioma cambiado a: ${currentLang}`);
    }

    if (languageButton) {
        languageButton.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'es' : 'en';
            setLanguage(newLang);
        });

        // Cargar idioma guardado
        const savedLang = localStorage.getItem('preferred-language') || 'en';
        setLanguage(savedLang);
        console.log(`🗣️ Idioma inicial: ${savedLang}`);
    } else {
        console.error('❌ No se encontró el botón de idioma.');
    }

    // --- Fondo de partículas en escala de grises ---
    (function initBackgroundParticles() {
        const canvas = document.getElementById('bg-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        const particles = [];
        const config = { count: Math.min(220, Math.floor((window.innerWidth * window.innerHeight) / 12000)), dist: 110 };
        const TWO_PI = Math.PI * 2;
        let t = 0;

        function resetParticles() {
            particles.length = 0;
            for (let i = 0; i < config.count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: 1 + Math.random() * 2,
                    p: Math.random() * TWO_PI,
                    s: 0.5 + Math.random() * 1.0,
                    g: 100 + Math.random() * 100,
                    o: 0.2 + Math.random() * 0.6
                });
            }
        }
        resetParticles();

        function draw() {
            t += 0.003;
            ctx.fillStyle = 'rgba(255,255,255,0.9)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i];
                    const b = particles[j];
                    const dx = a.x - b.x, dy = a.y - b.y;
                    const d = Math.hypot(dx, dy);
                    if (d < config.dist) {
                        const alpha = (1 - d / config.dist) * 0.08;
                        ctx.strokeStyle = `rgba(0,0,0,${alpha})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }

            // Particles
            for (const p of particles) {
                const waveX = Math.sin(t * 1.5 + p.p) * 0.6;
                const waveY = Math.cos(t * 1.1 + p.p) * 0.6;
                p.x += waveX * p.s;
                p.y += waveY * p.s;

                // wrap
                if (p.x < -10) p.x = canvas.width + 10; else if (p.x > canvas.width + 10) p.x = -10;
                if (p.y < -10) p.y = canvas.height + 10; else if (p.y > canvas.height + 10) p.y = -10;

                const gray = Math.round(60 + Math.sin(t + p.p * 2) * 40);
                ctx.fillStyle = `rgba(${gray},${gray},${gray},${p.o})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, TWO_PI);
                ctx.fill();
            }
            requestAnimationFrame(draw);
        }
        draw();
    })();

    // --- Tilt 3D leve en tarjetas de proyecto ---
    (function initTiltCards() {
        const cards = document.querySelectorAll('.project-card');
        const damp = 12;
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateY = ((x - centerX) / centerX) * 4; // grados
                const rotateX = -((y - centerY) / centerY) * 4;
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    })();

    console.log('✨ Script inicializado correctamente.');
}); 