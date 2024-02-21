# Pedidos asincrónicos

## Fetch

**fetch** es una función que nos permite comunicarnos con una API. Esto puede ser a traves de GET o de POST. En caso de que fuera por GET, recibirá un solo parámetro: `fetch('/url/api/endpoint')`. Como fetch es asíncrona, deberemos usar **then**, algo así:

```javascript
fetch("/url/api/endpoint")
  .then((response) => response.json()) // Analizar la respuesta del servidor y convertirla en JSON
  .then((informacion) => console.log(informacion)) // Mostrar los datos obtenidos
  .catch(function () {
    alert("Error con la carga de la API");
  });
```

## Object location

Para poder trabajar con la URL, JS nos provee del objeto **location**, que tiene distintos métodos como **href** o **reload**.

Para trabajar con el **queryString**, podemos usar `let query = new URLSearchParams(location.search);`. Algunas opciones que tenemos para trabajar con el query, entre otras, son: `query.has('search_query')`, que retorna un booleano dependiendo de si está o no lo que buscamos, y `query.get('search_query')`, que retorna el valor del parámetro buscado.

## Session storage y Local storage

**storage** nos permite almacenar información del usuario dentro del navegador. Funciona de forma similar a las cookees.

- **Session Storage**: Almacena información mientras el usuario tiene abierta una sesion.
- **Local Storage**: Almacena información que se mantiene incluso después de cerrar la ventana o recargar la página. Si el navegador se cierra, esta información desaparece. Es similar a Cook Si el usuario cierra y vuelve a abrir el navegador, se pierde Si el navegador se cierra, todos los datos se eliminan.

Para usar estas herramientas, tenemos métodos tales como:

- sessionStorage.setItem('nombre', 'Dario'): Establece un valor para una clave en sessionStorage.
- sessionStorage.getItem('nombre'): Devuelve el valor que se ha establecido para dicha clave.
- sessionStorage.removeItem('nombre'): Elimina la entrada para dicha clave.
- sessionStorage.clear(): Elimina todo lo que hayamos guardado.
