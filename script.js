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
        const grays = [230, 225, 220, 215, 210, 205, 200, 195];
        function onScroll() {
            const headerHeight = 64;
            separators.forEach((hr, idx) => {
                const rect = hr.getBoundingClientRect();
                if (rect.top <= headerHeight) {
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
        }
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    })();

    // --- Optimized Background Particles ---
    (function initBackgroundParticles() {
        const canvas = document.getElementById('bg-canvas');
        if (!canvas) return;
        
        // Performance check: reduce particles on mobile/low-end devices
        const isMobile = window.innerWidth < 768;
        const isLowPerf = navigator.hardwareConcurrency < 4;
        const perfMultiplier = (isMobile || isLowPerf) ? 0.5 : 1;

        const ctx = canvas.getContext('2d');
        let animationId = null;
        let lastTime = 0;
        const targetFPS = 60;
        const frameInterval = 1000 / targetFPS;

        // Limit canvas to hero section height
        const hero = document.querySelector('#home');
        function resize() {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            
            // Set actual size in memory (scaled to account for extra pixel density)
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            
            // Scale the drawing context so everything draws at the correct size
            ctx.scale(dpr, dpr);
            
            // Set the size the element should appear on the page
            canvas.style.width = rect.width + 'px';
            canvas.style.height = rect.height + 'px';
        }
        
        // Use ResizeObserver for better performance than resize event
        const resizeObserver = new ResizeObserver(resize);
        if (hero) resizeObserver.observe(hero);
        resize();

        // Optimized balls with object pooling
        const balls = [];
        let count = Math.max(3, Math.min(12, Math.floor((canvas.width * canvas.height) / 400000) * perfMultiplier));
        const minR = isMobile ? 20 : 36;
        const maxR = isMobile ? 80 : 120;

        function spawn() {
            balls.length = 0;
            for (let i = 0; i < count; i++) {
                const r = minR + Math.random() * (maxR - minR);
                balls.push({
                    x: r + Math.random() * (canvas.width / (window.devicePixelRatio || 1) - 2 * r),
                    y: r + Math.random() * (canvas.height / (window.devicePixelRatio || 1) - 2 * r),
                    vx: (Math.random() - 0.5) * 0.25,
                    vy: (Math.random() - 0.5) * 0.25,
                    r,
                    gray: 242 + Math.floor(Math.random() * 10)
                });
            }
        }
        spawn();

        let running = true;
        let visible = false;
        
        // Intersection Observer for performance
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                visible = e.isIntersecting;
                if (visible && !running) {
                    running = true;
                    step(performance.now());
                } else if (!visible) {
                    running = false;
                    if (animationId) {
                        cancelAnimationFrame(animationId);
                        animationId = null;
                    }
                }
            });
        }, { threshold: 0.1, rootMargin: '50px' });
        
        if (hero) io.observe(hero);

        function step(currentTime) {
            if (!running || !visible) return;

            // Frame rate limiting for better performance
            if (currentTime - lastTime < frameInterval) {
                animationId = requestAnimationFrame(step);
                return;
            }

            const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
            const canvasHeight = canvas.height / (window.devicePixelRatio || 1);
            
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            // Optimized physics integration
            for (const b of balls) {
                b.x += b.vx;
                b.y += b.vy;
                
                // Wall collisions with damping
                if (b.x - b.r < 0) { b.x = b.r; b.vx *= -0.95; }
                if (b.x + b.r > canvasWidth) { b.x = canvasWidth - b.r; b.vx *= -0.95; }
                if (b.y - b.r < 0) { b.y = b.r; b.vy *= -0.95; }
                if (b.y + b.r > canvasHeight) { b.y = canvasHeight - b.r; b.vy *= -0.95; }
            }

            // Optimized collision detection with spatial partitioning concept
            const gridSize = maxR * 2;
            for (let i = 0; i < balls.length; i++) {
                for (let j = i + 1; j < balls.length; j++) {
                    const a = balls[i], c = balls[j];
                    
                    // Quick distance check before expensive calculations
                    const dx = c.x - a.x;
                    const dy = c.y - a.y;
                    const minDist = a.r + c.r;
                    
                    if (Math.abs(dx) > minDist || Math.abs(dy) > minDist) continue;
                    
                    const distSq = dx * dx + dy * dy;
                    const minDistSq = minDist * minDist;
                    
                    if (distSq < minDistSq && distSq > 0) {
                        const dist = Math.sqrt(distSq);
                        const overlap = 0.5 * (minDist - dist);
                        const nx = dx / dist;
                        const ny = dy / dist;
                        
                        // Resolve overlap
                        a.x -= overlap * nx;
                        a.y -= overlap * ny;
                        c.x += overlap * nx;
                        c.y += overlap * ny;
                        
                        // Elastic collision with damping
                        const avn = a.vx * nx + a.vy * ny;
                        const cvn = c.vx * nx + c.vy * ny;
                        const damping = 0.9;
                        
                        a.vx += (cvn - avn) * nx * damping;
                        a.vy += (cvn - avn) * ny * damping;
                        c.vx += (avn - cvn) * nx * damping;
                        c.vy += (avn - cvn) * ny * damping;
                    }
                }
            }

            // Optimized drawing with reduced draw calls
            ctx.fillStyle = `rgba(245,245,245,0.95)`;
            ctx.beginPath();
            
            for (const b of balls) {
                ctx.moveTo(b.x + b.r, b.y);
                ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
            }
            ctx.fill();
            
            lastTime = currentTime;
            animationId = requestAnimationFrame(step);
        }

        // Start animation only if visible
        if (visible) step(performance.now());

        // Throttled resize handler
        let resizeTimeout;
        window.addEventListener('resize', () => {
            if (resizeTimeout) clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                count = Math.max(3, Math.min(12, Math.floor((canvas.width * canvas.height) / 400000) * perfMultiplier));
                spawn();
            }, 250);
        });

        // Cleanup on page unload
        window.addEventListener('beforeunload', () => {
            if (animationId) cancelAnimationFrame(animationId);
            if (resizeObserver) resizeObserver.disconnect();
            if (io) io.disconnect();
        });
    })();

    // --- Skill bars: fill on scroll with rainbow accent ---
    (function initSkills() {
        const items = document.querySelectorAll('.skill-item');
        if (!items.length) return;
        const io = new IntersectionObserver((entries) => {
            entries.forEach(({ target, isIntersecting }) => {
                if (!isIntersecting) return;
                const level = Number(target.getAttribute('data-level')) || 0;
                const prog = target.querySelector('.skill-progress');
                if (prog) {
                    prog.style.width = level + '%';
                    prog.classList.add('rainbow');
                }
                io.unobserve(target);
            });
        }, { threshold: 0.35 });
        items.forEach(it => io.observe(it));

        // Hover accent (no removal, stays rainbow)
        items.forEach(it => {
            it.addEventListener('mouseenter', () => {
                const prog = it.querySelector('.skill-progress');
                prog && prog.classList.add('rainbow');
            });
        });
    })();

    // --- Enhanced Contact form submission ---
    (function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;
        
        // Add form validation feedback
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearValidationError);
        });
        
        function validateField(e) {
            const field = e.target;
            const value = field.value.trim();
            
            // Remove existing error styling
            field.classList.remove('error');
            let errorEl = field.parentNode.querySelector('.field-error');
            if (errorEl) errorEl.remove();
            
            // Validate based on field type
            let isValid = true;
            let errorMessage = '';
            
            if (field.hasAttribute('required') && !value) {
                isValid = false;
                errorMessage = currentLang === 'es' ? 'Este campo es obligatorio' : 'This field is required';
            } else if (field.type === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = currentLang === 'es' ? 'Email inválido' : 'Invalid email address';
                }
            }
            
            if (!isValid) {
                field.classList.add('error');
                const errorDiv = document.createElement('div');
                errorDiv.className = 'field-error';
                errorDiv.textContent = errorMessage;
                field.parentNode.appendChild(errorDiv);
            }
            
            return isValid;
        }
        
        function clearValidationError(e) {
            const field = e.target;
            field.classList.remove('error');
            const errorEl = field.parentNode.querySelector('.field-error');
            if (errorEl) errorEl.remove();
        }
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Validate all fields
            let formIsValid = true;
            inputs.forEach(input => {
                if (!validateField({ target: input })) {
                    formIsValid = false;
                }
            });
            
            if (!formIsValid) {
                // Scroll to first error
                const firstError = form.querySelector('.error');
                if (firstError) {
                    firstError.focus();
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                return;
            }
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            const data = Object.fromEntries(new FormData(form).entries());
            
            try {
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.classList.add('loading');
                    submitBtn.textContent = currentLang === 'es' ? 'Enviando…' : 'Sending…';
                }
                
                const resp = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                
                const json = await resp.json();
                
                if (json.ok) {
                    // Show success message
                    showNotification(
                        currentLang === 'es' ? 'Mensaje enviado exitosamente ✅' : 'Message sent successfully ✅',
                        'success'
                    );
                    form.reset();
                    
                    // Animate form success
                    form.classList.add('success');
                    setTimeout(() => form.classList.remove('success'), 3000);
                } else {
                    throw new Error(json.error || 'Send failed');
                }
            } catch (err) {
                console.error(err);
                showNotification(
                    currentLang === 'es' ? 'No se pudo enviar. Intenta más tarde.' : 'Could not send. Please try later.',
                    'error'
                );
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('loading');
                    submitBtn.textContent = originalText;
                }
            }
        });
        
        // Enhanced notification system
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = `notification notification-${type}`;
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                z-index: 10000;
                transform: translateX(100%);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                max-width: 300px;
                word-wrap: break-word;
            `;
            
            document.body.appendChild(notification);
            
            // Animate in
            requestAnimationFrame(() => {
                notification.style.transform = 'translateX(0)';
            });
            
            // Auto remove
            setTimeout(() => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }, 5000);
        }
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