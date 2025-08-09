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

    // --- Apilar HR en scroll ---
    (function initHrStack() {
        const stack = document.getElementById('hr-stack');
        if (!stack) return;
        const separators = Array.from(document.querySelectorAll('hr.section-separator'));
        const grays = [220, 210, 200, 190, 180, 170];
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const idx = separators.indexOf(entry.target);
                if (idx === -1) return;
                if (entry.isIntersecting && entry.boundingClientRect.top <= (80)) {
                    // Add if not present
                    if (!stack.querySelector(`[data-hr-idx="${idx}"]`)) {
                        const div = document.createElement('div');
                        div.className = 'hr-item';
                        div.dataset.hrIdx = String(idx);
                        const tone = grays[Math.min(idx, grays.length - 1)];
                        div.style.background = `rgb(${tone},${tone},${tone})`;
                        stack.appendChild(div);
                    }
                }
            });
        }, { root: null, threshold: [0], rootMargin: '-80px 0px 0px 0px' });
        separators.forEach(hr => observer.observe(hr));
    })();

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

        // Bouncing balls with collisions
        const balls = [];
        const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 22000));
        const minR = 3, maxR = 10;

        function spawn() {
            balls.length = 0;
            for (let i = 0; i < count; i++) {
                const r = minR + Math.random() * (maxR - minR);
                balls.push({
                    x: r + Math.random() * (canvas.width - 2 * r),
                    y: r + Math.random() * (canvas.height - 2 * r),
                    vx: (Math.random() - 0.5) * 0.6,
                    vy: (Math.random() - 0.5) * 0.6,
                    r,
                    gray: 200 + Math.floor(Math.random() * 40)
                });
            }
        }
        spawn();

        function step() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // integrate
            for (const b of balls) {
                b.x += b.vx;
                b.y += b.vy;
                // wall collisions
                if (b.x - b.r < 0) { b.x = b.r; b.vx *= -1; }
                if (b.x + b.r > canvas.width) { b.x = canvas.width - b.r; b.vx *= -1; }
                if (b.y - b.r < 0) { b.y = b.r; b.vy *= -1; }
                if (b.y + b.r > canvas.height) { b.y = canvas.height - b.r; b.vy *= -1; }
            }

            // simple pairwise collision (elastic, equal mass)
            for (let i = 0; i < balls.length; i++) {
                for (let j = i + 1; j < balls.length; j++) {
                    const a = balls[i], c = balls[j];
                    const dx = c.x - a.x, dy = c.y - a.y;
                    const dist = Math.hypot(dx, dy);
                    const minDist = a.r + c.r;
                    if (dist > 0 && dist < minDist) {
                        // resolve overlap
                        const overlap = 0.5 * (minDist - dist);
                        const nx = dx / dist, ny = dy / dist;
                        a.x -= overlap * nx; a.y -= overlap * ny;
                        c.x += overlap * nx; c.y += overlap * ny;
                        // swap velocity components along normal (equal mass)
                        const avn = a.vx * nx + a.vy * ny;
                        const cvn = c.vx * nx + c.vy * ny;
                        const tvn = cvn; // target for a
                        const svn = avn; // target for c
                        a.vx += (tvn - avn) * nx; a.vy += (tvn - avn) * ny;
                        c.vx += (svn - cvn) * nx; c.vy += (svn - cvn) * ny;
                    }
                }
            }

            // draw
            for (const b of balls) {
                const g = b.gray; // lighter gray
                ctx.fillStyle = `rgba(${g},${g},${g},0.9)`;
                ctx.beginPath();
                ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
                ctx.fill();
            }
            requestAnimationFrame(step);
        }
        step();
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