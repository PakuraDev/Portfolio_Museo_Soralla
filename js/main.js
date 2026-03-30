// /js/main.js

// Importamos todos los Web Components
// Al importarlos, se ejecutan sus respectivos customElements.define() 
// y quedan registrados en el navegador listos para usarse.

import './components/top-header.js';
import './components/sticky-nav.js';
import './components/hero-carousel.js';
import './components/agenda-section.js';
import './components/bio-section.js';
import './components/masonry-gallery.js';
import './components/sorolla-footer.js';

// Si en el futuro necesitas inicializar alguna lógica global 
// (como un tracker de analíticas o un gestor de cookies), este es el lugar.
console.log('🖼️ Museo Sorolla cargado correctamente. ¡Musho Betis!');