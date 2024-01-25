# Interacción con formularios

## Eventos de formularios

Al trabajar con eventos en formularios desde el navegador, podemos realizar validaciones desde el front end, permitiendo una dinámica mucho más rápida, un mayor feedback para el usuario, e incluso un doble nivel de seguridad en cuanto a validación de datos.

Un elemento muy util para los formularios, es el elemento **focus**, que permite generar eventos cuando se selecciona uno de los inputs del formulario. Si usamos **blur**, funciona parecido al focus, solo que trabaja cuando el input es deseleccionado. Otro elemento util es **change**, que detecta cambios en el html del formulario, de mucha utilidad en elementos tales como el select.

Otro elemento, que específicamente se ejecuta sobre un formulario (no sobre un campo de este, con lo cual, deberemos atrapar al formulario), es **submit**, que actuará cuando se envía el formulario en cuestión.

## Validaciones

Para hacer las validaciones, debemos atrapar el formulario, para poder trabajar cuando se produzca el evento **submit**. Es importante que no olvidemos colocar el **form.preventDefault()**. Luego, podemos usar:

- campo.value: Para saber si el campo está vacio o no.
- campo.value.length: Para saber si cumple con el requisito de largo correspondiente.

Para mostrar los errores dentro del HTML, podemos hacer un código parecido al siguiente:

```javascript
let errores = [];

let formulario = document.querySelector("form");

let campo = document.querySelector("#nombre");

formulario.addEventListener("submit", function (e) {
  if (campo.value == "") {
    errores.push("El campo debe estar completo");
  } else if (campo.value.length < 3) {
    errores.push("El campo debe tener como mínimo tres caracteres");
  }

  if (errores.length > 0) {
    e.preventDefault();

    let ulErrores = document.querySelector("div.errores ul");
    for (let i = 0; i < errores.length; i++) {
      ulErrores.innerHTML += `<li> ${errores[i]}</li>`;
    }
  }
});
```

Cabe destacar que en el html deberíamos tener un `<div class=errores><ul></ul></div>`
