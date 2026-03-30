export class StickyNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .header-inferior {
          display: flex;
          width: 100%;
          padding: 8px 24px;
          justify-content: center;
          align-items: center;
          gap: 48px;
          background: var(--arena-1);
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); /* Sutil sombra al hacer sticky */
        }
        
        .nav-link {
          color: var(--azul-marino);
        }
      </style>

      <nav class="header-inferior">
        <a class="text-link nav-link text-p-base" href="#">Visita</a>
        <a class="text-link nav-link text-p-base" href="#">El museo</a>
        <a class="text-link nav-link text-p-base" href="#">Colecciones</a>
        <a class="text-link nav-link text-p-base" href="#">Exposición</a>
        <a class="text-link nav-link text-p-base" href="#">Actividades</a>
        <a class="text-link nav-link text-p-base" href="#">Ampliación-Rehabilitación</a>
        <a class="text-link nav-link text-p-base" href="#">Investigación</a>
        <a class="text-link nav-link text-p-base" href="#">La fundación</a>
      </nav>
    `;
  }
}

customElements.define('sticky-nav', StickyNav);