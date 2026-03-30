<div align="center">
  <h1>Rediseño de la web del Museo Sorolla</h1>
  <img src="Museo Sorolla La Casa de la Luz.png" width="100%" />
</div>

---

## Links

Figma: https://www.figma.com/design/eJ2cBX9uaKqvo4z6eAKIA1/Museo_Sorolla?node-id=1-4&t=uGO6QTfyYZzHFuIh-1

Página: https://portfolio-museo-soralla.pages.dev/#

---

## Rediseño (resumen)
Hoy voy con muchas prisas, así que explicar todo rápido: Este es un rediseño del rediseño que le hice a la web del Museo Sorolla 2 meses atrás cuando estaba estudiando. La ví y pensé: "No está mal, pero a esto le falta un poco de alma", así que aquí estamos.

A nivel de diseño no sé como definirlo, porque claro, intento combinar lo editorial y clásico con lo moderno, así que vamos a llamarlo "Neoclásico" (y me quedo tan agusto), pero con un gran añadido, intentar personificar la obra del autor, aunque de eso hablaremos más tarde.

A nivel de código, pues nuevamente es muy sencillo, html/css/js vanilla. Se han usado Es modules nativos (webcomponents) y no la he hecho responsive para otra plataforma que PC, no porque no quisiera (que también), sino porque entre hacer el diseño + código tardo 2-4 horitas más para un proyecto que al final no va a salir del portfolio (y que legalmente me pueden tirar). Espero que podáis comprender mi pragmatisco.


## Diseño:
Vamos a lo importante, lo de personificar a Joaquín Sorolla. Como espero que sepáis que Sorolla era un pintor valenciano conocido como el "Pintor de la Luz", y tampoco es muy difícil darse cuenta, quiero decir, si miramos su obra creo que no es muy difícil darnos cuenta de que era famoso por capturar como nadie el sol del Mediterráneo, las playas, los reflejos en el agua y el movimiento de la brisa. Su estilo (cercano al impresionismo y al luminismo) se basa en pinceladas rápidas, empastadas y llenas de vida, aunque bueno, el que quiera saber más se puede meter en Historia del Arte (la web digo, no la carrera). Por eso mismo, desde la tipografía (que he combinado la elegencia de una serif con la modernez de una sans) hasta las formas (que por cierto, son generadas aleatoriamente con un script) está pensado, así que vamos a explicar todo:

### Paleta de colores y separaciones:
Como paleta de color tenemos 3 "Principales", que son el azul marino, el dorado y el negro suave, pero en este caso no son los protagonistas, dado que veremos como el fondo cambia de color. He usado 4 tonos diferentes, degradados y 3 separaciones para imitar la orilla de una playa, desde la arena más blanca, la humeda, la mojada por el costante flujo de las olas, y finalmente el mar. Todo esto fue pensado tanto para representar la luz con colores claros, como para representar gran parte de la obra de Sorolla, que se basa en playas. 

### Tipografía:
Como ya dije, combino una serif (Cormorant Garamond) que aporta elegancia (recordemos que Sorolla nació en 1863 y falleció en 1923), con una sans-serif (Alegreya Sans) para aportar modernidad y legibilidad a la web. 

### Formas:
Todas las formas han sido pensadas. Para los separadores calqué literalmente las "capas" de una orilla vista de arriba, mientras que para los bordes de los bloques de los titulos de la sección agenda y el ultímo separador se uso un script que genera trazos con forma de olas (get waves en figma), y finalmente para la imagen de Sorolla usé una gota de oleo negro, la puse sobre un papel, le hice una foto con mi cámara (una canon PowerShot SX70 HS), y con inkscape la pasé a vector para que quedarme unicamente con la forma que se uso como marco para la foto de Joaquín. Todas estas formas orgánicas han sido simplemente para salir del diseño clásico, que usa líneas rectas y monotomas (demasiado para una obra tan viva como la de Sorolla) además de aportar personalidad propia del autor.

### UX:
A nivel de UX podemos destacar que la navegación es clara y sencilla de usar con el añadido de que el footer interior y el header inferior son sticky, es decir, cuando entres a la web, el header inferior te persigue para que no tengas que subir hasta arriba del todo para ir a otra sección, y el footer simplemente es un añadido estético. 

Tanto la jerarquía, arquitectura de la información, ctas, o los estados de botones son evidentes y fáciles de comprender. Gracias a la jerarquia está claro que es importante leer primero, a la arquitectura donde está cada cosa, el cta destaca y los estados me parecen una obra de arte a nivel de diseño, literalmente me encantan (he pasado a objetivo a subjetivo hablando del estado de un botón, para que veáis lo mucho que me encantaría que mañana el gobierno que pague para rediseñar la web completa jejeje)

Ahora, eso si voy a mencionar, a nivel de contraste (WGAC 2.1) estoy seguro de que el carrusel tiene como mínimo una imagen de fondo donde el titulo no llega a la doble A. Es un error que tendría que solucionar a futuro.

## Stack, arquitectura, código, etc...
Volvemos al código. Dentro de lo que cabe, para este caso podríamos decir que lo he sobrecomplicado dado que la web era perfectamente viable en un solo archivo html con el css y js dentro, ¿Pero acaso somos juniors? Como ya sabréis de otros repos, no hay proyecto que no haga modular, así que para está ocasión he separado todas las secciones con webcomponents (this.innerhtml y ES Modules), haciendo que en el html final solo tenga que importarlos. 

Eso si, obviamente esta no es la arquitectura idonea para una web real, en este caso como solo era una "prueba" por así decirlo, no está mal experimentar un poco. 

Y poco más hay que decir, quiero decir, la web no es para tanto a nivel de código. Un saludo <3
