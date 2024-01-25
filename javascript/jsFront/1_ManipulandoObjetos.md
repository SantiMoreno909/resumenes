# JavaScript en FrontEnd

## Vinculación

Para vincular javascript en html, podemos hacerlo, o bien escribiendo los comandos dentro de la etiqueta **script**, o bien vinculando en esa etiqueta el archivo javascript mediante el atributo **src**.

## Objetos window y document

El objeto **window** representa la ventana que contiene al documento y el objeto **document** representa al DOM (documento HTML) cargado en esa ventana.

## DOM Selectores

Los **selectores** nos ayudan a indicarle a JS con qué elementos del HTML queremos interactuar. Tenemos tres opciones:

- querySelector(): retorna el primer elemento del DOM que coincida con lo que buscamos.
- querySelectorAll(): Retorna todos los elementos del DOM que coincidan con la búsqueda, dentro de un array.
- getElementById(): Retorna el elemento del DOM cuyo id coincida con la búsqueda que realizamos.
- getElementByClassName(): Retorna el elemento del DOM cuya clase coincida con la búsqueda que realizamos.

## Modificadores del DOM

Para modificar los elementos que contenga el HTML debemos usar **.innerHTML** para:

- Leer: `document.querySelector('div.nombreClase').innerHTML;`
- Modificar: `document.querySelector('div.nombreClase').innerHTML = 'Darío';`
- Agregar: `document.querySelector('div.nombreClase').innerHTML += 'Papitas';`

Podemos usar cualquiera de los tres selectores antes mencionados. Para modificar texto, podemos hacer:

- Leer: `document.querySelector('div.nombreClase').innerText;`
- Modificar: `document.querySelector('div.nombreClase').innerText = 'Darío';`
- Agregar: `document.querySelector('div.nombreClase').innerText += 'Papitas';`

## Modificando estilos

Para modificar estilos, debemos llamar la variable donde almacenamos el elemento que llamamos, supongamos 'btn' agregarle `btn.style.backgroundColor = 'red'`.

## Modificando clases

Para modificar las clases, siempre debemos incluir luego del selector **.classList**, y luego usar:

- .add(): Agrega la clase indicada.
- .remove(): Elimina la clase indicada.
- .toggle(): Si el elemento tiene la clase indicada, la elimina. Si no la tiene, la agrega.
- .contains(): Verifica si el elemento contiene o no la clase indicada.
