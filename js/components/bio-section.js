export class BioSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .bio-section {
          display: flex;
          width: 100%;
          flex-direction: column;
          background: var(--arena-2);
          margin-top: -1px;
        }

        .bio-content {
          display: flex;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 64px 24px;
          justify-content: space-between;
          align-items: flex-start;
          background: var(--arena-2);
          box-sizing: border-box;
        }

        .bio-image-wrapper {
          width: 446.377px;
          height: 560px;
          flex-shrink: 0;
        }

        .bio-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .bio-texts {
          display: flex;
          width: 802px;
          padding: 24px 0;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          flex-shrink: 0;
          align-self: stretch;
        }

        .bio-title-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          align-self: stretch;
          color: var(--azul-marino);
        }

        .bio-desc {
          color: var(--negro-suave);
          white-space: pre-line;
        }

        .transition-2-wrapper {
          display: flex;
          width: 100%;
          height: 186px;
          justify-content: center;
          align-items: center;
          background: var(--arena-2);
        }

        .transition-2-svg {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
      </style>

      <section class="bio-section">
        <div class="bio-content">
          <div class="bio-image-wrapper">
            <img src="/assets/images/Foto-Joa.webp" alt="Joaquín Sorolla" class="bio-img">
          </div>

          <div class="bio-texts">
            <div class="bio-title-group">
              <h1 class="text-h0">Joaquín Sorolla</h1>
              <h2 class="text-h2">Valencia, España. 1863 - 1923</h2>
            </div>

            <p class="text-p-base bio-desc">La obra de Sorolla es luz en estado salvaje. Pinceladas rápidas que capturan un instante antes de que escape. Colores que no describen, sino que calientan: azules que respiran mar, blancos que deslumbran, naranjas que huelen a sol. Sus escenas parecen simples, pero están vivas, llenas de movimiento y ternura. 

Sorolla no pinta paisajes: pinta el momento exacto en que la vida brilla más.</p>
          </div>
        </div>

        <!-- Transición 2 -->
        <div class="transition-2-wrapper">
          <img src="/assets/svg/separador-2.svg" alt="" class="transition-2-svg" aria-hidden="true">
        </div>
      </section>
    `;
  }
}

customElements.define('bio-section', BioSection);