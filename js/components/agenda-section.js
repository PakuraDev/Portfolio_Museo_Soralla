export class AgendaSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .agenda-layout {
          display: flex;
          flex-direction: column;
          margin-top: -1px;
        }

        .agenda-content {
          display: flex;
          width: 100%;
          padding: 64px 24px;
          align-items: flex-start;
          gap: 24px;
          background: var(--arena-1);
          box-sizing: border-box;
        }

        .agenda-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 64px;
          flex: 1 0 0;
        }

        .title-container {
          display: flex;
          align-items: flex-start;
          gap: 0px;
        }

        .title-box {
          position: relative;
          display: flex;
          height: 62px;
          padding: 8px 40px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: var(--azul-marino);
          color: var(--dorado);
        }

        .title-box::before {
          content: "";
          position: absolute;
          right: 100%;
          top: 0;
          bottom: 0;
          width: 50vw;
          background: var(--azul-marino);
        }

        .agenda-texts {
          display: flex;
          padding: 0 24px;
          flex-direction: column;
          align-items: flex-start;
          gap: 32px;
          align-self: stretch;
        }

        .agenda-right-calendar {
          display: flex;
          width: 472px;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          gap: 48px;
          flex-shrink: 0;
          align-self: stretch;
        }

        .calendar-top {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          align-self: stretch;
        }

        .calendar-title-box {
          position: relative;
          display: flex;
          padding: 8px 16px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 10px;
          flex: 1 0 0;
          background: var(--azul-marino);
          color: var(--dorado);
          margin-left: -1px;
        }

        .calendar-title-box::after {
          content: "";
          position: absolute;
          left: 100%;
          top: 0;
          bottom: 0;
          width: 50vw;
          background: var(--azul-marino);
        }

        .calendar-texts {
          display: flex;
          padding: 0 24px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 10px;
          align-self: stretch;
        }

        .calendar-time {
          color: var(--dorado);
        }

        .calendar-desc {
          color: var(--negro-suave);
        }

        .calendar-cta {
          display: flex;
          width: 100%;
          padding: 0 24px;
          align-items: center;
        }

        .link-blue {
          color: var(--azul-marino);
        }

        .transition-wrapper {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          background: var(--arena-1);
        }

        .transition-svg {
          width: 100%;
          height: auto;
          display: block;
        }

      </style>

      <section class="agenda-layout">
        <div class="agenda-content">
          <!-- Left Frame: Agenda -->
          <div class="agenda-left">
            <div class="title-container">
              <div class="title-box text-h2">
                Agenda/Hoy
              </div>
              <img src="/assets/svg/borde-1.svg" alt="" aria-hidden="true" style="height:62px; margin-left:-1px;">
            </div>

            <div class="agenda-texts">
              <h1 class="text-h1" style="color: var(--azul-marino);">Un museo vivo, siempre en movimiento</h1>
              <p class="text-p-base">Sorolla pintaba la vida tal y como sucedía. Nosotros mantenemos ese espíritu con actividades diarias, talleres para escuelas y visitas guiadas que respiran su misma energía.</p>
            </div>
          </div>

          <!-- Right Frame: Calendar -->
          <div class="agenda-right-calendar">
            <div class="calendar-top">
              <div class="title-container" style="align-self: stretch;">
                <img src="/assets/svg/borde-2.svg" alt="" aria-hidden="true" style="height:100%;">
                <div class="calendar-title-box text-h3">
                  Próximas experiencias:
                </div>
              </div>

              <div class="calendar-texts">
                <p class="text-p-base">
                  <span class="calendar-time text-button">12:00</span> - <span class="calendar-desc">Visita guiada: Los Jardines de la Luz</span>
                </p>
                <p class="text-p-base">
                  <span class="calendar-time text-button">17:00</span> - <span class="calendar-desc">Taller infantil: Pintando con el Sol</span>
                </p>
              </div>
            </div>

            <div class="calendar-cta">
              <span class="text-link text-p-base link-blue">Ver agenda completa</span>
            </div>
          </div>
        </div>
        
        <!-- Transition 1 -->
        <div class="transition-wrapper">
          <img src="/assets/svg/separador-1.svg" alt="Transition 1" class="transition-svg">
        </div>
      </section>
    `;
  }
}

customElements.define('agenda-section', AgendaSection);