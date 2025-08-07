document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM Completamente Cargado. Iniciando script...');

    // --- SISTEMA DE IDIOMAS ---
    let currentLang = 'en';
    const languages = ['en', 'es', 'de'];
    const langLabels = { 'en': 'EN', 'es': 'ES', 'de': 'DE' };
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
        },
        de: {
            'nav-home': 'Startseite', 'nav-about': 'Über mich', 'nav-projects': 'Projekte', 'nav-skills': 'Fähigkeiten', 'nav-contact': 'Kontakt',
            'hero-greeting': 'Hallo, ich bin', 'hero-role': 'Backend & ML Ingenieur',
            'hero-description': 'Spezialisiert auf Microservices, KI-Agenten und Data Science-Lösungen. Entwicklung innovativer Systeme für KMU mit LangChain, ML-Modellen und skalierbaren Architekturen.',
            'hero-btn-projects': 'Projekte ansehen', 'hero-btn-contact': 'Kontakt aufnehmen', 'hero-btn-cv': 'CV herunterladen',
            'about-title': 'Über Mich', 'about-subtitle': 'Backend-Spezialist mit Fokus auf kreative Lösungen für kleine und mittlere Unternehmen',
            'projects-title': 'Ausgewählte Projekte', 'projects-subtitle': 'Kreative Lösungen, die Backend, ML und KI-Agenten für KMU kombinieren',
            'skills-title': 'Technische Fähigkeiten', 'skills-subtitle': 'Backend-, Microservices-, ML- und KI-Agent-Technologien',
            'contact-title': 'Kontakt aufnehmen', 'contact-subtitle': 'Lassen Sie uns innovative Lösungen für Ihr Unternehmen schaffen'
        }
    };

    const languageButton = document.getElementById('language-button');
    const langSpan = document.getElementById('current-language');

    function applyTranslations(lang) {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        if (langSpan) {
            langSpan.textContent = langLabels[lang];
        }
    }

    function switchLanguage() {
        console.log('🔄 Cambiando idioma...');
        const currentIndex = languages.indexOf(currentLang);
        const nextIndex = (currentIndex + 1) % languages.length;
        currentLang = languages[nextIndex];
        
        applyTranslations(currentLang);
        localStorage.setItem('preferred-language', currentLang);
        console.log(`✅ Idioma cambiado a: ${currentLang}`);
    }

    if (languageButton) {
        languageButton.addEventListener('click', switchLanguage);
        console.log('✅ Listener de click añadido al botón de idioma.');

        // Cargar idioma guardado
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && languages.includes(savedLang)) {
            currentLang = savedLang;
        }
        applyTranslations(currentLang);
        console.log(`🗣️ Idioma inicial: ${currentLang}`);
    } else {
        console.error('❌ No se encontró el botón de idioma.');
    }

    // --- RESTO DEL SCRIPT ---
    // (Aquí iría todo el código de la pelota, animaciones, etc.)
    // Por simplicidad para el debug, lo omito por ahora,
    // pero lo restauraremos una vez que el botón funcione.
    
    console.log('✨ Script inicializado correctamente.');
}); 