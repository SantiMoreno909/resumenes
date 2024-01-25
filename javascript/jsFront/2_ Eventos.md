# Interacciones con eventos

## Introducción

Un **evento** es una acción que transcurre en el navegador, o que es ejecutada por el usuario. Algunos eventos son:

- window.onload: Hace que el script se ejecute cuando haya cargado por completo el objeto **document** dentro del objeto **window**. `window.onload = function(){}`.
- elemento.onclic: Permite ejecutar una acción al hacer clic sobre el elemento indicado. `element.onclic = function(){}`.
- preventDefault(): Permite evitar la ejecución de ciertos eventos predeterminados o nativos del elemento que estemos utilizando.

## Eventos de Mouse

Para eventos de mouse, tenemos dos opciones con movimientos del mouse:

- mouseOver: Es el efecto que se produce cuando se le pasa el mouse por encima al elemento seleccionado.
- mouseOut: Es el efecto que se produce cuando se quita el mouse de encima del elemento.

En el caso de los clicks, tenemos las siguientes opciones:

- click: El efecto se aplicará al hacer click: `element.addEventListener('click', function(){Cambios que sufrirá element al hacer click sobre el})`.
- Ocurre exactamente lo mismo si cambiamos el 'click' por un 'dobleClick'

## Eventos de Teclado

- onkeydown: Este evento se lanza cuando una tecla es presionada (hacia abajo).
- onkeyup: Se dispara unicamente cuando la tecla se suelta.
- onkeypress: Este evento se dispara al finalizar el recorrido de presión y liberar la tecla.

Para saber qué tecla se presionó, debemos aplicar al elemento contenedor del evento la propiedad **.key**.
