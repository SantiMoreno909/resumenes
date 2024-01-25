# Manipulación de datos

## Create

Dentro del controlador, debemos crear el método **create**, el cual nos permitirá captar datos desde un formulario y crear los registros en la BDD, o bien cargar los mismos manualmente desde el código. Es importante que los atributos dentro del objeto tengan los mismos nombres que las columnas de la tabla.

```javascript
// Estoy en el controlador dentro de la carpeta controllers
let db = require("../database/models");

let moviesController = {
  create: function (req, res) {
    db.Peliculas.create({
      //Estos son los nombres de cada columna en la BDD
      title: req.body.title,
      rating: req.body.rating,
      premios: req.body.premios,
      fecha_estreno: req.body.fecha_estreno,
      duracion: req.body.duracion,
    });
  },
};
```

## Update

Este atributo nos permite actualizar datos dentro de la tabla. Lo primero que debemos pasar es un objeto con el elemento a actualizar, y un segundo objeto con un **where** para que Sequelize sepa qué registros actualizar.

```javascript
// Estoy en el controlador dentro de la carpeta controllers
let db = require("../database/models");

let usersController = {
  update: function (req, res) {
    db.Usuario.update(
      {
        nombreUsuario: "PepitaLaPistolera",
      },
      {
        where: { id: 10 },
      }
    );
  },
};
```

Si no ponemos el where, podemos llegar a tener serios problemas, ya que podríamos actualizar todos los registros de la BDD.

## upsert

Si quisieramos que se busque un conjunto de parámetros en la BDD, y que la misma, si estos existen, los actualice, y si no, los cree, debemos usar el método **upsert**. Para esto, deberemos indicar al menos un elemento que sea único, tal como un id o un email, de modo que no ocurran confusiones en la BDD. Esto se vería así:

```javascript
const Usuario = require("model/usuario.js");

Usuario.upsert({
  email: "mail@pepe.com",
  edad: 25,
});
```

## Destroy / Soft deletes

La función **destroy()** elimina los elementos de la BDD. NUNCA debemos olvidar agregar la condición del where, dado que, si no lo hacemos, se eliminarán todos los registros. Esto se hace así:

```javascript
const Pelicula = require("model/pelicula.js");

Pelicula.destroy({
  where: { id: 3 },
});
```
