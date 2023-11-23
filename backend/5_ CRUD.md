# Introducción a CRUD

CRUD hace referencia a las siglas de **Create, Read, Update y Delete**. Este proceso es sumamente natural para el trabajo de BackEnd.

## Métodos HTTP

Como habíamos visto, este protocolo define los lineamientos que deben cumplirse a la hora de comunicar Cliente y Servidor en una red. Este protocólo tiene diversos métodos para ello. Aquí solo veremos los más utilizados.

## Procesamiento GET

Este tipo de peticiones es de las más comunes. Lo que hacen es enviar peticiones a través de la URL de una página.

### Query String

En la URL *http://www.amazon.es/autores?lang=es&keywords=borges*, el query string sería **?lang=es&keywords=borges**. El **?** indica el inicio del query string, y el **&** separa distintos parámetros. En este caso, está buscando autores en español, con tema _borges_.

Esta URL es un permalink o enlace permanente, a la cual siempre se puede acceder para ver un producto, lo que permite tenerla en los marcadores del navegador.

A estos elementos se accede con la propiedad del **request** llamada **query**. Para usarla en código, lo que tendríamos es:

```javascript
//Dentro del router
router.get("/", productosController.mostrarTodos);
router.get("/:id", productosController.mostrarPorId);
router.get("/crear", productosController.crearProducto);

//Dentro del userController.js
const userController = {
  register: function (req, res) {
    res.render("register");
  },
  login: function (req, res) {
    res.render("login");
  },
  list: function (req, res) {
    const users = [
      { id: 1, name: "Dario" },
      { id: 2, name: "Javier" },
      { id: 3, name: "Maru" },
      { id: 4, name: "Ale" },
      { id: 5, name: "Alan" },
    ];
    res.render("userList", { users: users });
  },
};

module.exports = userController;
```

Para **capturar** el contenido del query string, usamos **let variable = req.query.valor**, siendo **valor** el nombre que damos a la variable que contendrá, en la URL, lo que buscó el usuario. Estos valores se envían al servidor generalmente con formularios de búsqueda, que trabajan con GET. Por tanto, cuando nostros trabajamos el formulario, el nombre que tenga **valor** será el **name** que hayamos puesto en el input del formulario de búsqueda.

## Procesamiento POST

Este método se usa para enviar información sensible del cliente. Por ejemplo, datos de contraseñas. Esto solo se puede hacer a través de formularios, utilizando dos atributos: **action**, en el cual se indicará la ruta a la cual se dirigirán los datos, y **method**, en el cual debemos poner _POST_. Si no lo aclaramos, el método por defecto será _GET_.

Para utilizarlo, dentro del entry point, debemos tener las siguientes dos líneas:

```javascript
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
```

Así, le indicamos al programa que todo lo que venga de un formulario, queremos capturarlo en forma de objeto literal, y convertirlo luego a JSON.

De más está decir que, además de la ruta con **POST**, debemos tener una con **GET**, que permita al usuario acceder al formulario.

Para ejemplificar, tenemos la siguiente estructura:

```html
<form action="/usuarios/guardar" method="POST">
  <!--Campos del formulario-->
  <button type="submit">Enviar</button>
</form>
```

---

```javascript
//En ./routes/usuarios.js
router.post("/guardar", usuariosController.guardarUsuario);
```

```javascript
//En ./controllers/usuariosController.js
const controller = {
  guardarUsuario: (req, res) => {
    //lógica
    res.redirect("/");
  },
};
```

En el parámetro **request** encontramos el objeto literal **body**, propiedad de **request**, que contendrá toda la información que haya llegado del formulario. Al utilizar **req.body** (por ejemplo, dentro de un _res.send_), se nos mostrará un objeto literal, que tendrá todos los elementos que enviamos a través del formulario. Cada uno de ellos tendrá como nombre el _name_ que le dimos en el formulario, y como valor, lo que haya ingresado el cliente. Por tanto, también podemos llamar independientemente a cada atributo haciendo **req.body.nombre**.

El método **redirect** define a qué ruta se redirigirá el programa al enviar los datos del formulario.

## Procesamiento PUT y DELETE

El método **PUT** se ejecuta sobre el router de la aplicación, con las mismas dos líneas de código que **POST**, y con su correspondiente ruta **GET**; y lo que hace es tomar y transmitir datos del mismo modo que POST, pero con la finalidad de cambiar o "sobreescribir" campos ya existentes.

Para trabajar con este método, como no todos los navegadores lo soportan, deberemos enviar el formulario por **POST**, y, para poder utilizarlo, deberemos instalar una dependencia utilizando **npm install method-override --save**. Una vez intalado, en el entry point de la aplicación utilizaremos:

```javascript
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
```

Por último, debemos colocar, al final de la ruta del **action**, debemos colocar un pequeño query string: **action='/usuarios/--/actualizar?\_method=PUT'**. Esto le indica al programa que, sin importar el método definido en el formulario, queremos trabajar con el método **PUT**

En el caso de **DELETE**, se trabaja igual que con **PUT**, solo que cambiando el formulario para que trabaje con **DELETE**. En el archivo de ruta, colocaríamos **router.delete('/delete/:idUser', userController.borrar);**

## Error 404

## path y FS
