/**
 * lang.js - Contiene todas las traducciones para el sitio ETUR.
 * Cada clave (key) debe ser única y corresponde a un elemento en el HTML.
 */

const translations = {
    // --- NAVEGACIÓN (Header) ---
    "nav-home": {
        es: "Inicio",
        en: "Home",
        fr: "Accueil",
        de: "Startseite"
    },
    "nav-tours": {
        es: "Tours",
        en: "Tours",
        fr: "Circuits",
        de: "Touren"
    },
    "nav-reviews": {
        es: "Reseñas",
        en: "Reviews",
        fr: "Avis",
        de: "Bewertungen"
    },
    "nav-contact": {
        es: "Contacto",
        en: "Contact",
        fr: "Contact",
        de: "Kontakt"
    },
    
    // --- HOME PAGE (Index) ---
    "hero-title": {
        es: "Descubre el Corazón Vibrante de Guayaquil con ETUR",
        en: "Discover the Vibrant Heart of Guayaquil with ETUR",
        fr: "Découvrez le Cœur Vibrant de Guayaquil avec ETUR",
        de: "Entdecken Sie das pulsierende Herz von Guayaquil mit ETUR"
    },
    "hero-tagline": {
        es: "Somos tu operador de confianza para tours inolvidables en el Malecón, Las Peñas y la región costera.",
        en: "We are your trusted operator for unforgettable tours in Malecón, Las Peñas, and the coastal region.",
        fr: "Nous sommes votre opérateur de confiance pour des circuits inoubliables au Malecón, à Las Peñas et dans la région côtière.",
        de: "Wir sind Ihr vertrauenswürdiger Reiseveranstalter für unvergessliche Touren in Malecón, Las Peñas und der Küstenregion."
    },
    "cta-all-tours": {
        es: "Ver Todos los Tours",
        en: "View All Tours",
        fr: "Voir Tous les Circuits",
        de: "Alle Touren Ansehen"
    },
    
    // --- TOURS DESTACADOS (Ejemplo 1) ---
    "tour1-title": {
        es: "Tour Histórico Las Peñas",
        en: "Las Peñas Historical Tour",
        fr: "Circuit Historique Las Peñas",
        de: "Historische Las Peñas Tour"
    },
    "tour1-desc": {
        es: "Explora el barrio más antiguo, sube los 444 escalones y disfruta de vistas panorámicas.",
        en: "Explore the oldest neighborhood, climb the 444 steps, and enjoy panoramic views.",
        fr: "Explorez le plus ancien quartier, montez les 444 marches et profitez des vues panoramiques.",
        de: "Erkunden Sie das älteste Viertel, steigen Sie die 444 Stufen hinauf und genießen Sie Panoramablicke."
    },
    "tour-price-from": {
        es: "Desde",
        en: "From",
        fr: "À partir de",
        de: "Ab"
    },
    "tour-details-link": {
        es: "Ver Detalles",
        en: "View Details",
        fr: "Voir Détails",
        de: "Details Ansehen"
    }
    // ... Agrega más claves para el resto de los textos ...
};

/**
 * Función para aplicar las traducciones a los elementos con el atributo data-lang.
 * @param {string} lang - El código del idioma ('es', 'en', 'fr', 'de').
 */
function applyTranslation(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[key] && translations[key][lang]) {
            element.textContent = translations[key][lang];
        }
    });
}

/**
 * Función que redirige al usuario a la página correcta del idioma seleccionado.
 * @param {string} langCode - El código del idioma a cambiar.
 */
function switchLanguage(langCode) {
    const currentPath = window.location.pathname;
    // Determina la nueva ruta reemplazando el código de idioma actual
    // Ejemplo: /es/index.html -> /en/index.html
    // Ejemplo: /es/tours-detalle/tour.html -> /en/tours-detalle/tour.html
    const newPath = currentPath.replace(/\/es\//, `/${langCode}/`);
    
    // Si estamos en la raíz (ej. tuweb.com/), redirigir a /en/index.html
    if (currentPath === '/') {
        window.location.href = `/${langCode}/index.html`;
    } else {
        window.location.href = newPath;
    }
}

// Inicialización: La página ya tiene cargado su contenido principal (HTML). 
// Esta función es para elementos dinámicos o que quieres sobrescribir.
// Dado que usamos HTML separado por idioma, esta función es más para títulos y textos dinámicos.

// Puedes dejar la inicialización simple si usas HTML separados por idioma.
