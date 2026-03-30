export class MasonryGallery extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .masonry-section {
          display: flex;
          width: 100%;
          flex-direction: column;
          margin-top: -1px;
        }

        .masonry-bg-wrapper {
          display: flex;
          width: 100%;
          background: linear-gradient(180deg, var(--arena-3) 0%, var(--arena-4) 100%);
        }

        .masonry-content-wrapper {
          position: relative;
          display: flex;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 64px 24px;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          box-sizing: border-box;
        }

        .masonry-grid {
          display: flex;
          width: 1392px;
          height: 1339px;
          overflow: hidden; /* Cortamos obras de la parte inferior para el efecto infinito */
          gap: 24px;
        }

        .masonry-col {
          display: flex;
          width: 448px;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
        }

        .masonry-col img {
          width: 100%;
          object-fit: contain;
          border-radius: 4px; /* Opcional pero recomendado para imagenes si no tienen bordes crudos */
        }

        /* Infinito - Blur Overlay a pie de grid */
        .infinite-overlay {
          display: flex;
          width: 1392px;
          height: 270px;
          padding: 24px;
          justify-content: center;
          align-items: center;
          gap: 24px;
          position: absolute;
          left: 24px;
          /* bottom: 61px (que incluye padding-bottom del contenedor). Calculo 64px de padding bottom de la caja. */
          bottom: 64px; 
          background: linear-gradient(0deg, var(--arena-4) 0%, var(--arena-4) 25%, rgba(238, 220, 184, 0.00) 100%);
          box-sizing: border-box;
          z-index: 10;
        }

        .transition-3-wrapper {
          display: flex;
          width: 100%;
          padding-top: 48px;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          background: var(--arena-4); /* Hereda el color final del gradiente */
        }

        .transition-3-svg {
          width: 100%;
          height: auto;
          display: block;
        }
      </style>

      <section class="masonry-section">
        <div class="masonry-bg-wrapper">
          <div class="masonry-content-wrapper">
          <!-- Masonry Grid -->
          <div class="masonry-grid">
            <!-- Left Column -->
            <div class="masonry-col">
              <img src="/assets/paints/¡Aún dicen que el pescado es caro!.webp" alt="Pescado">
              <img src="/assets/paints/El balandrito.webp" alt="El balandrito">
              <img src="/assets/paints/El pintor Aureliano de Beruete.webp" alt="Aureliano">
            </div>

            <!-- Central Column -->
            <div class="masonry-col">
              <img src="/assets/paints/madre.webp" alt="Madre">
              <img src="/assets/paints/El remero.webp" alt="El remero">
              <img src="/assets/paints/Corriendo por la playa.webp" alt="Corriendo">
              <img src="/assets/paints/Desnudo de mujer.webp" alt="Desnudo">
            </div>

            <!-- Right Column -->
            <div class="masonry-col">
              <img src="/assets/paints/Retrato del fotógrafo Christian Franzen.webp" alt="Retrato Christian Franzen">
              <img src="/assets/paints/Joaquín_Sorolla_004.jpg" alt="Joaquín Sorolla">
            </div>
          </div>

          <!-- Infinito Overlay -->
          <div class="infinite-overlay">
            <button class="btn-sorolla btn-azul">
              <span class="btn-sorolla-text">Nuestras colecciones</span>
              <div class="btn-sorolla-body"></div>
              <div class="btn-sorolla-fluid"></div>
            </button>
            <button class="btn-sorolla btn-azul">
              <span class="btn-sorolla-text">Ver todas las obras</span>
              <div class="btn-sorolla-body"></div>
              <div class="btn-sorolla-fluid"></div>
            </button>
            <button class="btn-sorolla btn-azul">
              <span class="btn-sorolla-text">Museo digital</span>
              <div class="btn-sorolla-body"></div>
              <div class="btn-sorolla-fluid"></div>
            </button>
          </div>
          </div>
        </div>
        </div>

        <!-- Transición 3 -->
        <div class="transition-3-wrapper">
          <img src="/assets/svg/separador-3.svg" alt="" aria-hidden="true" class="transition-3-svg">
        </div>
      </section>
    `;
  }
}

customElements.define('masonry-gallery', MasonryGallery);