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
            'hero-description': 'Specialized in microservices, AI agents, and data science solutions. Creating innovative systems for SMEs with LangChain, ML models, and scalable architectures.',
            'hero-btn-projects': 'View Projects', 'hero-btn-contact': 'Contact Me', 'hero-btn-cv': 'Download CV',
            'about-title': 'About Me', 'about-subtitle': 'Backend specialist focused on creative solutions for small and medium enterprises',
            'projects-title': 'Featured Projects', 'projects-subtitle': 'Creative solutions combining backend, ML, and AI agents for SMEs',
            'skills-title': 'Technical Skills', 'skills-subtitle': 'Backend, microservices, ML, and AI agent technologies',
            'contact-title': 'Get In Touch', 'contact-subtitle': "Let's create innovative solutions for your business"
        },
        es: {
            'nav-home': 'Inicio', 'nav-about': 'Acerca', 'nav-projects': 'Proyectos', 'nav-skills': 'Habilidades', 'nav-contact': 'Contacto',
            'hero-greeting': 'Hola, soy', 'hero-role': 'Ingeniero Backend & ML',
            'hero-description': 'Especializado en microservicios, agentes IA y soluciones de data science. Creando sistemas innovadores para PyMEs con LangChain, modelos ML y arquitecturas escalables.',
            'hero-btn-projects': 'Ver Proyectos', 'hero-btn-contact': 'Contactarme', 'hero-btn-cv': 'Descargar CV',
            'about-title': 'Sobre Mí', 'about-subtitle': 'Especialista en backend enfocado en soluciones creativas para pequeñas y medianas empresas',
            'projects-title': 'Proyectos Destacados', 'projects-subtitle': 'Soluciones creativas combinando backend, ML y agentes IA para PyMEs',
            'skills-title': 'Habilidades Técnicas', 'skills-subtitle': 'Tecnologías de backend, microservicios, ML y agentes IA',
            'contact-title': 'Contacto', 'contact-subtitle': 'Creemos soluciones innovadoras para tu negocio'
        }
        // Objeto de alemán completamente eliminado
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

        // Actualizar el texto del botón
        if (langSpan) {
            langSpan.textContent = langLabels[currentLang].name;
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

    // --- RESTO DEL SCRIPT ---
    // (Aquí iría todo el código de la pelota, animaciones, etc.)
    // Por simplicidad para el debug, lo omito por ahora,
    // pero lo restauraremos una vez que el botón funcione.
    
    console.log('✨ Script inicializado correctamente.');
}); 