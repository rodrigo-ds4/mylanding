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

    // Ensure hero text first on mobile: add class to control order
    (function ensureHeroOrderMobile() {
        const hero = document.querySelector('.hero-container');
        const content = document.querySelector('.hero-content');
        const visual = document.querySelector('.hero-visual');
        if (hero && content && visual) {
            if (window.matchMedia('(max-width: 768px)').matches) {
                content.classList.add('mobile-first');
                visual.classList.add('mobile-second');
            }
        }
    })();

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

        // Limit canvas to hero section height (before first hr)
        const hero = document.querySelector('#home');
        function resize() {
            canvas.width = window.innerWidth;
            const limit = hero ? hero.getBoundingClientRect().height : window.innerHeight;
            canvas.height = Math.max(200, Math.floor(limit));
        }
        resize();
        window.addEventListener('resize', resize);

        const particles = [];
        const config = { count: Math.min(200, Math.floor((window.innerWidth * canvas.height) / 14000)) };
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
                    o: 0.2 + Math.random() * 0.6
                });
            }
        }
        resetParticles();

        function draw() {
            t += 0.003;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Particles (no molecular links)
            for (const p of particles) {
                const waveX = Math.sin(t * 1.5 + p.p) * 0.6;
                const waveY = Math.cos(t * 1.1 + p.p) * 0.6;
                p.x += waveX * p.s;
                p.y += waveY * p.s;

                // wrap horizontally; clamp vertically inside canvas
                if (p.x < -10) p.x = canvas.width + 10; else if (p.x > canvas.width + 10) p.x = -10;
                if (p.y < -10) p.y = canvas.height + 10; else if (p.y > canvas.height + 10) p.y = -10;

                const gray = Math.round(80 + Math.sin(t + p.p * 2) * 60);
                ctx.fillStyle = `rgba(${gray},${gray},${gray},${p.o})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, TWO_PI);
                ctx.fill();
            }
            requestAnimationFrame(draw);
        }
        draw();
    })();

    // --- Contact form submission ---
    (function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            const data = Object.fromEntries(new FormData(form).entries());
            try {
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.textContent = currentLang === 'es' ? 'Enviando…' : 'Sending…';
                }
                const resp = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                const json = await resp.json();
                if (json.ok) {
                    form.reset();
                    alert(currentLang === 'es' ? 'Mensaje enviado ✅' : 'Message sent ✅');
                } else {
                    throw new Error(json.error || 'Send failed');
                }
            } catch (err) {
                console.error(err);
                alert(currentLang === 'es' ? 'No se pudo enviar. Intenta más tarde.' : 'Could not send. Please try later.');
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = currentLang === 'es' ? 'Enviar Mensaje' : 'Send Message';
                }
            }
        });
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