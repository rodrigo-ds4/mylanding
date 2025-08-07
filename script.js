alert('¡SCRIPT.JS SE ESTÁ EJECUTANDO!');

document.addEventListener('DOMContentLoaded', () => {
    alert('¡DOM CARGADO! Añadiendo listener...');
    
    const languageButton = document.getElementById('language-button');
    
    if (languageButton) {
        alert('¡BOTÓN ENCONTRADO! Añadiendo click listener...');
        
        languageButton.addEventListener('click', () => {
            alert('¡CLICK DETECTADO! La función debería ejecutarse ahora.');
            
            // Cambiar color del botón
            languageButton.style.background = languageButton.style.background === 'fuchsia' ? 'dodgerblue' : 'fuchsia';
            
            // Cambiar texto
            const langSpan = document.getElementById('current-language');
            if (langSpan) {
                langSpan.textContent = langSpan.textContent === 'EN' ? 'ES' : 'EN';
            }
        });
        
        // Mensaje de confirmación en consola
        console.log('✅ Listener añadido al botón de idioma.');
        
    } else {
        alert('¡ERROR CRÍTICO! No se encontró el botón con id "language-button".');
    }
});

console.log('Fin del script.js. Esperando a que el DOM se cargue...'); 