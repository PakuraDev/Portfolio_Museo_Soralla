export class HeroCarousel extends HTMLElement {
  constructor() {
    super();
    this.images = [
      '/assets/paints/Paseo a orillas del mar.webp',
      '/assets/paints/ninos_playa_1910.webp',
      '/assets/paints/El bote blanco.webp',
      '/assets/paints/Triste herencia.webp'
    ];
    this.currentIndex = 0;
    this.intervalId = null;
    this.cycleTime = 4200; // 4.2s exactos
  }

  connectedCallback() {
    this.render();
    this.startCarousel();
  }

  disconnectedCallback() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.cycleTime);
  }

  nextSlide() {
    const currentSlide = this.querySelector(`#slide-${this.currentIndex}`);
    const currentIndicator = this.querySelector(`#indicator-${this.currentIndex}`);
    currentSlide.classList.remove('active');
    currentIndicator.src = '/assets/images/Hueco-vacio.png';

    this.currentIndex = (this.currentIndex + 1) % this.images.length;

    const nextSlide = this.querySelector(`#slide-${this.currentIndex}`);
    const nextIndicator = this.querySelector(`#indicator-${this.currentIndex}`);
    nextSlide.classList.add('active');
    nextIndicator.src = '/assets/images/Hueco-relleno.png';
  }

  render() {
    const slidesHTML = this.images.map((img, index) => `
      <div id="slide-${index}" class="hero-slide ${index === 0 ? 'active' : ''}" style="background-image: url('${img}');"></div>
    `).join('');

    const indicatorsHTML = this.images.map((_, index) => `
      <img id="indicator-${index}" class="indicator-img" src="${index === 0 ? '/assets/images/Hueco-relleno.png' : '/assets/images/Hueco-vacio.png'}" alt="Slide ${index + 1}">
    `).join('');

    this.innerHTML = `
      <style>
        .hero-section {
          position: relative;
          display: flex;
          width: 100%;
          height: 89dvh;
          min-height: 700px;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 112px 48px 48px 48px;
          box-sizing: border-box;
          overflow: hidden;
        }

        .hero-backgrounds {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .hero-slide.active {
          opacity: 1;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(26, 26, 26, 0.60);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 100%;
        }

        .hero-title {
          color: var(--dorado);
          text-align: center;
        }

        .hero-bottom-controls {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 36px;
        }

        .mouse-icon {
          width: 64px;
          height: 64px;
        }

        .hero-indicators {
          display: flex;
          align-items: flex-end;
          gap: 24px;
        }

        .indicator-img {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }
      </style>

      <section class="hero-section">
        <div class="hero-backgrounds">
          ${slidesHTML}
        </div>
        
        <div class="hero-overlay"></div>

        <div class="hero-content">
          <h1 class="hero-title text-h0">La Casa de la Luz</h1>
          
          <div class="hero-bottom-controls">
            <img src="/assets/svg/mouse-ani.svg" alt="Scroll icon" class="mouse-icon">
            <div class="hero-indicators">
              ${indicatorsHTML}
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-carousel', HeroCarousel);