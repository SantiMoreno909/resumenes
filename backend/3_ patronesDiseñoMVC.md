# Introducción a MVC

El MVC es un patrón de diseño, los cuales son _un conjunto de reglas que definen la arquitectura de un sistema_. Específicamente, el MVC trabaja con tres elementos: **Modelos, Vistas y Controladores**. Cada uno de estos actúa de forma independiente y aislada de los otros dos.

Las **Vistas** son los elementos que ve el usuario. El **Modelo** contiene la lógica del servidor. El **Controlador** contiene los patrones de conexión y comunicación entre los dos anteriores, lo que implica que las Vistas y los Modelos no se comunican entre si.

Esto permite escalar los proyectos de forma mucha más sencilla y organizada, por lo tanto, conocerlo y manejarlo es sumamente útil.

## Controladores

![Controlador](../media/3a_%20Controlador.jpg)

Como ya vimos, el Controlador es el conector entre las vistas y los modelos. Estos se suelen ubicar dentro de una carpeta llamada **controllers**, y se acostumbra crear un controlador para cada parte del proyecto (productos, clientes, etc.). Los archivos se suelen nombrar, por ejemplo, **productosController.js**.

Estos archivos contienen dentro suyo un objeto literal, que suele llamarse **controlador**, y que dentro suyo lleva los diferentes métodos que se utilizaran, uno para cada **request**. Es importante exportarlo, colocando al final la siguiente línea: `module.exports = controlador;`.

En código, para definir el controller de productos, haríamos:

```javascript
const controlador = {
    listadoProductos: function (req,res) => {
        res.send('Listado de productos');
    },
    crear: function (req,res) => {
        res.send('Crear productos');
    },
    //Estas son las rutas parametrizadas
    detalleProducto: function (req,res) => {
        res.send('Detalles del producto' + req.params.id);
    },
    detalleComentario: function (req,res) => {
        if (req.params.idComentario == undefined) {
            res.send('Bienvenidos a los comentarios del producto' + req.params.id);
        } else {
            res.send('Bienvenidos al comentario' + req.params.idComentario + ' del producto' + req.params.id);
        },
    }
};

module.exports = controlador;
```

### Traslado a rutas

Estos, a partir del uso de los controladores, se utilizarán para definir qué métodos utilizar en cada llamado de URL. En código, se vería asÍ:

```javascript
const express = require("express");
const productosController = require("../controllers/productosController.js");
const router = express.Router();

router.get("/:idProducto", productosController.detalleProducto);

router.get(
  "/:idProducto/comentarios/:idComentario?",
  productosController.detalleComentario
);

module.exports = router;
```

### Entry point

En este caso, el entry point quedaría tal como veníamos trabajandolo:

```javascript
const express = require("express");
const app = express();
const rutasProductos = require("../routes/productos.js");

app.listen(3000, () => console.log("Servidor funcionando"));

app.use("/productos", rutasProductos);
```

## Estructura de archivos

Ahora que tenemos, por un lado, el entry point, por otro las vistas, por otro las rutas, y por otro los controladores, lo recomendable es colocarlos a todos dentro de la carpeta **src**. Así, la estructura de archivos se vería de este modo:
![Estructura de archivos](../media/3b_%20estructuraCarpetas.png)

### Express Generator

Esta herramienta nos ayuda a trabajar con proyectos que usen Express, generando toda la estructura de carpetas y archivos que se utilizan para estos proyectos. Para instalarlo, debemos escribir en la consola **npm install express-generator -g**. Luego, creamos la carpeta con el comando **express nombreProyecto --ejs**. Así, se creará la carpeta del proyecto, que ya tendrá instalado el motor de plantillas **EJS** que veremos más adelante.

Luego, ejecutaremos **npm install** como siempre.

En la carpeta del proyecto, encontraremos:

- app.js
- package.json
- bin
  - contendrá un archivo 'www' que se encargará de hacer que la aplicación corra.
- public, que contendrá las carpetas con elementos públicos, tal como veníamos trabajando.
- routes, que tendrá dos archivos: index.js y users.js
- views, que tendrá dos archivos: index.ejs y error.ejs

Para poner a correr el proyecto, ejecutaremos el comando **nodemon bin/www**. La aplicación se cargará en el puerto 3000 del local host.
