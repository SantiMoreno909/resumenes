# Middlewares

Son funciones que se ejecutan antes de que se llegue al controller. Esto es util para realizar validaciones, y no tener un controller extremadamente largo. Su traducción es _software intermedio_, y es literalmente eso, un software o función intermedia entre las vistas y el controlador.

## Teoría básica

Cuando un cliente hace una petición a un servidor, este ejecuta los middlewares, en forma encadenada, de modo tal que todos ellos puedan ejecutar sus controles. Para saltar de uno a otro, se utiliza el callback **next()**, que le indica al middleware que debe cerrar su ejecución y pasar al siguiente. Sin embargo, es posible también que un middleware retorne algo al cliente y corte la ejecución, sin pasar a los siguientes. El ciclo se completa cuando el servidor envía la respuesta al pedido del cliente.

Dentro del modelo MVC, cuando el cliente ejecuta un pedido al servidor, este ejecuta los middleware de la aplicación para determinar qué ruta deberá atender el pedido del cliente. En función de la ruta seleccionada, se ejecutan los **middleware de ruta** asociados, pasando luego a la ejecución normal de **Controladores > EJS > BDD > Vistas > Recursos estáticos** y entregando el pedido al cliente.

Un ejemplo de middleware ya conocido es **multer**.

## Middlewares a nivel de aplicación

Son aquellos middlewares que se aplican a todas las páginas de la aplicación, tal como los archivos de rutas o los de **app.use()**. Como vimos, este último tiene un callback dentro, que tiene como argumentos **(req,res,next)**. Cuando completamos el algoritmo dentro del middleware, incluimos **next()** para que el mismo se corte y pase a ejecutar el middleware siguiente.

**Código de ejemplo**

```javascript
const fs = require("fs");

function logMiddleware(req, res, next) {
  fs.appendFileSync("log.txt", "Se ingresó a la página" + req.url);
  // Uso append para mantener la acumulación. write sobre escribe el archivo
  next();
}

module.exports = logMiddleware;
```

Para utilizarlo en todas las páginas, lo requeriremos en **app.js** asignandolo a una variable, y para asegurarnos de que pase siempre, usaremos `app.use(logMiddleware);`.

## Aplicación de middlewares a nivel ruta

Para aplicar un middleware a una ruta ya existente, debemos agregarle a la misma, entre la url y el controller, el nombre de la variable que contiene el middleware. Esto se vería así: `router.get('/urlEjemplo', middleware, controller.metodo)`

**IDEA**: Así podría crear el contador de visitas que tenga la página, que me comentó Mauri cuando me contó de la web que quería el político:

```javascript
const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const estadisticasController = require("../controllers/estadisticasController");

function visitasMiddleware(req, res, next) {
  estadisticasController.contarVisita(req);
  next();
}

router.get("/home", visitasMiddleware, homeController.index);
```

## Express Validator

Es una librería externa, que nos permite validar datos que se reciben desde un formulario. Luego de instalarlo con `npm install express-validator`, lo llamamos en el archivo de rutas utilizando:

```javascript
//Usamos destructuración para extraer solo la propiedad body de express validator
const { body } = require("express-validator");

//Creamos el array que contendrá las validaciones y funcionará como middleware
const validaciones = [
  body("nombreCompleto").notEmpty().withMessage("Poné tu nombre completo pa"),
  body("correoElectronico").notEmpty().isEmail(),
  body("contrasenia").notEmpty(),
];

//Cargamos la ruta
router.post("/registro", validaciones, controlador.registrar);
```

Como resulta evidente, **express validator** debe tener un huevo de validaciones disponibles, así que, al momento de usarlo, debería buscar la documentación correspondiente.

## Express Validator Avanzado

Ahora, procederemos a implementar el validador directamente en el controller de nuestro proyecto. Para ello, deberemos ir al **controlador** y requerir lo siguiente: `const {validationResult} = require('express-valdiator');`. Así, estamos requiriendo la función que nos retornará el resultado de la validación antes efectuada. Con ella, iremos al método específico del controller y lo guardaremos en una variable, más o menos así:

```javascript
storeUser: (req, res) => {
  let errores = validationResult(req);
  if (errores.isEmpty()) {
    //Si errores está vacio, significa que no hubo errores, por tanto procedemos a crear y guardar el usuario
    let users = req.body;
    userId = usersModel.create(user);
    res.redirect("/users/" + userId);
  } else {
    // Si NO está vacio, hacemos esto
    //res.render('/users/create');
    return res.render("/formularioRegistro", {
      mensajesDeError: errores.array(),
      //Así convertimos los errores en un array, para poder enviarlos a la vista
    });
    //Así la persona podrá volver al formulario a completar los datos faltantes o incorrectos
  }
};
```

La variable **errores** tendrá montones de métodos que podemos utilizar, tal como **.isEmpty** para ver si está vacío un parámetro. Con esto, podremos crear funciones de validación, utilizando, por ejemplo, el **if** que vimos en el ejemplo anterior. A su vez, el objeto **mensajesDeError** tendrá dentro los resultados de la validación. Se vería algo asi:

```json
{
  "nombreCompleto": {
    "value": "",
    "msg": "Invalid value",
    "param": "nombreCompleto",
    "location": "body"
  },
  "correoElectronico": {
    "value": "",
    "msg": "Invalid value",
    "param": "correoElectronico",
    "location": "body"
  }
}
```

De este, lo que nos importa es **msg**, que contendrá el mensaje que se le mostrará al usuario. Para indicarlo en pantalla, haremos:

```ejs
<% if (locals && locals.mensajesDeError) { %>
    <% for(let error in mensajesDeError) { %>
        <p> <%= mensajesDeError[error].msg %> </p>
    <% } %>
<% } %>
```

Si agregamos estas líneas en la parte superior del formulario, podremos mostrar los errores al usuario de forma instantanea. Para recordar la información para que no se elimine cuando el usuario cometa errores, haríamos lo siguiente:

```javascript
storeUser: (req, res) => {
  let errores = validationResult(req);
  if (errores.isEmpty()) {
    let users = req.body;
    userId = usersModel.create(user);
    res.redirect("/users/" + userId);
  } else {
    return res.render("/formularioRegistro", {
      mensajesDeError: errores.array(),
      old: req.body,
    });
  }
};
```

```ejs
<!--Aquí iría el título--->
<% if (locals && locals.mensajesDeError) { %>
    <% for(let error in mensajesDeError) { %>
        <p> <%= mensajesDeError[error].msg %> </p>
    <% } %>
<% } %>
<!--Aquí iría el formulario--->
    <input type='text' name='firstName' id='firstName' value='<%= locals.old && old.firstName ? old.firstName : '' %>'>
<!--Aquí cierra el formulario--->
```

Así, le diremos al programa: _'Si el usuario ya cargó algo, extraelo del body y colócalo en el input. Si no cargó nada, dejalo vacío'_.
