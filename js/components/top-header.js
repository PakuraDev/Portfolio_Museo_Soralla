export class TopHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .header-superior {
          display: flex;
          padding: 16px 24px;
          justify-content: center;
          align-items: flex-end;
          gap: 128px;
          align-self: stretch;
          background: var(--arena-1);
          width: 100%;
        }

        .logo-container {
          align-self: stretch;
        }

        .logo-img {
          width: 156.69px;
          height: 40px;
          display: block;
        }

        .search-bar {
          display: flex;
          padding: 8px 0;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          flex: 1 0 0;
          border-bottom: 1.5px solid var(--azul-marino);
        }

        .search-inner {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
        }

        .search-input {
          border: none;
          background: transparent;
          outline: none;
          width: 100%;
          color: var(--azul-marino);
        }

        .search-input::placeholder {
          color: var(--azul-marino);
        }

        .search-icon {
          width: 24px;
          height: 24px;
        }
      </style>

      <header class="header-superior">
        <a href="/" class="logo-container" aria-label="Inicio">
          <img src="/assets/svg/Logo.svg" alt="Museo Sorolla" class="logo-img">
        </a>

        <div class="search-bar">
          <div class="search-inner">
            <input type="text" class="search-input text-p-base" placeholder="Buscar..." aria-label="Buscar">
            <img src="/assets/svg/Search.svg" alt="Icon" class="search-icon">
          </div>
        </div>

        <button class="btn-sorolla btn-azul">
          <span class="btn-sorolla-text">Hazte Amigo</span>
          <div class="btn-sorolla-body"></div>
          <div class="btn-sorolla-fluid"></div>
        </button>
      </header>
    `;
  }
}

customElements.define('top-header', TopHeader);