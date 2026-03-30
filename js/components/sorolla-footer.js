export class SorollaFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .footer-wrapper {
          display: flex;
          flex-direction: column;
          width: 100%;
          background: var(--azul-marino);
          margin-top: -1px;
        }

        /* 1. Footer Superior */
        .footer-superior {
          display: flex;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          height: 60px;
          padding: 16px 24px;
          justify-content: space-between;
          align-items: center;
          box-sizing: border-box;
        }

        .lang-selector {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .lang-dorado { color: var(--dorado); cursor: pointer; }
        .lang-blanco { color: var(--arena-1); cursor: pointer; }
        .lang-sep { color: var(--arena-1); user-select: none; }

        .social-logos {
          height: 24px; /* Ajuste genérico para asegurar que quepan bien */
        }

        /* 2. Footer Central */
        .footer-central {
          display: flex;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 64px 24px;
          align-items: flex-start;
          gap: 24px;
          box-sizing: border-box;
        }

        .museum-info-box {
          display: flex;
          width: 566px;
          flex-direction: column;
          align-items: flex-start;
          gap: 48px;
          flex-shrink: 0;
        }

        .info-texts {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          color: var(--arena-1);
        }

        .info-texts p {
          color: var(--arena-1);
        }

        .logos-estado {
          max-width: 100%;
          height: auto;
        }

        .links-grid {
          display: flex;
          align-items: flex-start;
          gap: 48px;
          flex: 1 0 0;
          align-self: stretch;
        }

        .links-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 48px;
          flex: 1 0 0;
        }

        .col-links-wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        .footer-h2 { color: var(--dorado); }
        .footer-text { color: var(--arena-1); }

        /* 3. Footer Inferior */
        .footer-inferior-wrapper {
          width: 100%;
          background: var(--azul-marino);
          position: sticky;
          bottom: 0;
          z-index: 100;
        }

        .footer-inferior {
          display: flex;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 16px 24px;
          justify-content: space-between;
          align-items: flex-start;
          box-sizing: border-box;
        }

        .legal-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .legal-link {
          color: var(--arena-1);
          text-decoration: underline;
        }
      </style>

      <footer class="footer-wrapper">
        <!-- Superior -->
        <div class="footer-superior">
          <div class="lang-selector">
            <span class="text-button lang-dorado">ESPAÑOL</span>
            <span class="text-button lang-sep">/</span>
            <span class="text-button lang-blanco">ENGLISH</span>
          </div>
          <img src="/assets/svg/Logos.svg" alt="Social Media" class="social-logos">
        </div>

        <!-- Central -->
        <div class="footer-central">
          <div class="museum-info-box">
            <h1 class="text-h1 footer-h2">Museo Sorolla</h1>
            
            <div class="info-texts text-p-base">
              <p>Pso. del Gral. Martínez Campos, 37<br>28010 Madrid<br>museo.sorolla@cultura.gob.es<br>+34 913 101 584</p>
              <p>Mar - Sáb: 9:30 - 20:00<br>Dom y Festivos: 10:00 - 15:00<br>Lunes cerrado</p>
            </div>

            <img src="/assets/images/logos estado.png" alt="Logos del Estado" class="logos-estado">
          </div>

          <div class="links-grid">
            <!-- Col 1 -->
            <div class="links-col">
              <h2 class="text-h2 footer-h2">Visita</h2>
              <div class="col-links-wrap">
                <a href="#" class="text-p-base text-link footer-text">Entradas</a>
                <a href="#" class="text-p-base text-link footer-text">Sorolla viaja</a>
                <a href="#" class="text-p-base text-link footer-text">Sorrola en tu cole</a>
                <a href="#" class="text-p-base text-link footer-text">Preguntas frecuentes</a>
              </div>
            </div>

            <!-- Col 2 -->
            <div class="links-col">
              <h2 class="text-h2 footer-h2">Contacto</h2>
              <div class="col-links-wrap">
                <a href="#" class="text-p-base text-link footer-text">Sala de prensa</a>
                <a href="#" class="text-p-base text-link footer-text">Carta de servicios</a>
              </div>
            </div>

            <!-- Col 3 -->
            <div class="links-col">
              <h2 class="text-h2 footer-h2">El museo</h2>
              <div class="col-links-wrap">
                <a href="#" class="text-p-base text-link footer-text">Misión e Historia</a>
                <a href="#" class="text-p-base text-link footer-text">La fundación</a>
                <a href="#" class="text-p-base text-link footer-text">El Edificio y Jardines</a>
                <a href="#" class="text-p-base text-link footer-text">Museo digital</a>
              </div>
            </div>

            <!-- Col 4 -->
            <div class="links-col">
              <h2 class="text-h2 footer-h2">Diseño</h2>
              <div class="col-links-wrap">
                <span class="text-p-base footer-text">Rediseño hecho por SrPakura.</span>
                <span class="text-p-base footer-text">No tengo ninguna relación ni permiso del gobierno de España.</span>
                <span class="text-p-base footer-text">Diseño hecho unicamente como proyecto personal.</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Inferior -->
        <div class="footer-inferior-wrapper">
          <div class="footer-inferior">
            <p class="text-p-base footer-text">@ Ministerio de Cultura - Gobierno de España</p>
            <div class="legal-links">
              <a href="#" class="text-p-base legal-link text-link">Accesibilidad</a>
              <a href="#" class="text-p-base legal-link text-link">Aviso legal</a>
              <a href="#" class="text-p-base legal-link text-link">Mapa web</a>
              <a href="#" class="text-p-base legal-link text-link">Politica de Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('sorolla-footer', SorollaFooter);