# Rutas

Estas rutas se definen en el entry point antes de usar el método **listen**. Para proyectos con muchos elementos implicados (productos, clientes, etc.), es recomendable crear archivos de ruta para cada uno de ellos. Estos se colocan en la carpeta llamada **routes**, dentro de la cual irán los archivos de ruta, nombrados, por ejemplo, como **productos.js**.

## Definición de parámetros

Para ello, lo primero que debemos hacer es requerir Express, y luego asignarlo a una variable, generalmente llamada **router**, utilizando el metodo **Router()**

Luego, trabajamos cada ruta sobre la variable **router**. Al último, debemos exportar la variable **router**. En código, esto se vería así:

```javascript
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Esta es la ruta inicial de productos");
});

module.exports = router;
```

## Uso en el entry point

Para poder utilizar las rutas de nuestro archivo de rutas, debemos utilizar el método **use** de Express. Este irá luego de definir el puerto del servidor con **listen**, y, en código, se veria así:

```javascript
const express = require("express");
const app = express();
const rutasProductos = require("../routes/productos.js");

app.listen(3000, () => console.log("Servidor funcionando"));

app.use("/productos", rutasProductos);
```

## Rutas parametrizadas

Estas rutas contienen datos indicados dentro del URL de la página. Las mismas son dinámicas, es decir, que varían la respuesta de acuerdo a cuál es el dato que se indica. Así, podemos definir una sola ruta para, por ejemplo, mostrar cada uno de los 10 millones de productos que tengamos en la página.

### Rutas con parámetros obligatorios

Estos parámetros se indican como **:dato**. Para capturarlo, se utiliza el objeto **request**, con la propiedad **params**. Esto, en código, se vería algo así:

```javascript
app.get("/:idProducto", (req, res) => {
  let idProducto = req.params.idProducto;
  res.send("Detalle del producto" + idProducto);
});
```

Si lo adaptáramos al _Patrón MVC_, este código iría dentro de **controller.detalleIdProducto**, y se utilizaría en **router.get** dentro del router de productos.

### Rutas con parámetros opcionales

En este caso, se agrega un **?** luego del parámetro, lo que le indica al programa que el parámetro puede o no encontrarse. Esto, en código, se vería así:

```javascript
app.get('/:idProducto/comentarios/:idComentario?', (req, res) => {
  if (req.params.idComentario == undefined) {
            res.send('Bienvenidos a los comentarios del producto' + req.params.id);
        } else {
            res.send('Bienvenidos al comentario' + req.params.idComentario + ' del producto' + req.params.id);
        },
})
```

## La carpeta "routes"

Como ya vimos, esta carpeta contendrá los diferentes archivos **.js** que tendrán las distintas rutas para cada uno de los "elementos" presentes en nuestro proyecto (productos, clientes, usuarios, etc).

Si tuvieramos rutas que no tuvieran que ver con ninguno de ellos, se recomienda agregarlas en un archivo llamado **main.js**
