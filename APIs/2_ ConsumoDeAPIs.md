# Consumo de APIs propias y de terceros

## Postman

Postman es un instalable, que podemos descargar en **getpostman.com**. En este programa, encontraremos una interfaz que nos permite trabajar con testeo de peticiones de APIs. En su funcionamiento, es muy similar a un navegador. Arriba tenemos una barra donde ingresar la URL de la API, y en el cual también podemos encontrar el método con el cual deseamos que se haga la petición.

Con este programa podemos ver muy facilmente la información que retornan los distintos pedidos que hagamos.

Usando el método POST e ingresando en la pestaña que dice **Body**, podemos cargar las columnas de la tabla que estamos solicitando de la API, y podemos además ingresarle los datos que esperamos cargar, para que, en una prueba, se carguen los datos ingresados dentro de la API.

## Node Fetch

**fetch** es un paquete de Node que nos permite realizar pedidos a una API. Lo que debemos hacer es instalarlo dentro del controlador, y luego requerirlo. Este paquete está basado en promesas.

```javascript
const fetch = require("node-fetch");

module.exports = {
  list: async (req, res) => {
    fetch("https://restcountries.eu/rest/v2/all") //Aquí pegamos el endpoint que queremos consumir.
      .then((response) => response.json()) // Esta es la promesa para la consulta del endpoint
      .then((countries) => {
        // Cuando se resuelve la recompensa anterior, puedo usar la información.
        return res.render("countries", { countries }); //El {} es la respuesta de la api, el 'countries' es la vista. Este será el nombre de la variable que podremos usar en EJS para mostrar los datos.
      });
  },
};
```

Así, cuando usemos la ruta `app.use('/countries', contriesRoutes)`, tendremos el resultado de la petición.

## ASYNC AWAIT

En caso de que quisieramos hacer consultas a más de una API a la vez, dentro de la misma vista, podemos usar los ASYNC/AWAIT de este modo:

```javascript
const fetch = require("node-fetch");

module.exports = {
  list: async (req, res) => {
    let countries = await fetch("https://restcountries.eu/rest/v2/all").then(
      (response) => response.json()
    );
    let provinces = await fetch(
      "https://apis.datos.gob.ar/georef/api/provincias"
    ).then((response) => response.json());

    return res.render("countries", { countries, provinces });
  },
};
```
