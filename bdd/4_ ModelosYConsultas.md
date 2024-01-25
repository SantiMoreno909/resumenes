# Modelos y Consultas Básicas

## Promesas

Las **promesas** permiten ejecutar código asincrónico de forma más eficiente. Un **pedido asincrónico** es un conjunto de instrucciones que se ejecutan mediante un mecanismo específico, como por ejemplo un callback, una promesa o un evento. Esto hace posible procesar la respuesta en otro momento, sin bloquear la secuencia del código, ya que el pedido se ejecuta en paralelo con el resto del código.

La función asíncrona devolverá un resultado o no, mientras, el resto del código continúa ejecutandose. Por ejemplo:

```javascript
obtenerUsuario() {
    .then(function(data){
        console.log("Se ejecuta solo si la función devuelve un resultado")
    });
console.log("Este código se continuará ejecutando");
}
```

A veces, los **.then()** suelen tener promesas dentro. Para resolver esto, se utilizan **.then()** sucesivos, que entran en ejecución una vez se resuelve el anterior.

```javascript
obtenerUsuario() {
    .then(function(data){
        return filtrarDatos(data);
    })
    .then(function(dataFiltrada) {
        console.log(dataFiltrada);
    })
}
```

En caso de no tener un resultado, se genera un error. Para esto usamos **.catch()**, que encapsula cualquier error que pueda generarse a través de las promesas. Dentro de este método decidimos qué hacer con el error. El mismo es recibido como parámetro dentro del callback del **.catch()**.

A veces, necesitamos que dos o más promesas se resulevan para realizar cierta acción. Para esto usamos **Promise.all()**. Este contendrá un array de promesas que una vez resuleto, se ejecutará un **.then()** con los resultados de las mismas.

Lo primero que debemos hacer es guardar en variables las promesas que necesitamos obtener: `let promesaPeliculas = obtenerPeliculas(); let promesaGeneros = obtenerGeneros();`. Luego, utilizamos **Promise.all()** con un array que contendrá las promesas que guardamos anteriormente: `Promise.all([promesaPeliculas, promesaGeneros])`. Por último, tendremos `.then(function([resultadoPeliculas, resultadoGeneros]){ console.log(resultadoPeliculas, resultadoGeneros);})`. Este **.then** solo se ejecutará si ambas promesas se cumplen.

## Sequelize y configuración

**Sequelize** es un ORM (Object Relational Mapper), un modelo de programación que permite representar las entidades de una base de datos en forma de objetos, y que ayuda a conectar e interactuar con bases de datos relacionales, utilizando comandos JS para trabajar sobre la BDD. Este es un paquete de **Node.js** que se instala con el comando **npm install sequelize@5.21**. Además, debemos poner los comandos **sudo npm install -g sequelize sequelize-cli**. Además, necesitamos instalar un paquete para que sequelize sepa cómo conectarse con esa base de datos. Para eso, hacemos **npm install mysql2**.

Luego de instalar estos paquetes, debemos configurar sequelize para poder trabajar. Lo que debemos hacer es seguir las instrucciones que encontremos al ejecutar el comando **.sequelizerc** en la terminal. Básicamente, las instrucciones son:

- Crear un archivo en la carpeta raiz del proyecto, llamado **.sequelizerc**. En este archivo le indicarémos a sequelize en qué carpetas estarán almacenados los archivos relacionados con la base de datos. Por ejemplo:

```javascript
const path = require("path");

module.exports = {
  config: path.resolve("./database/config", "config.js"),
  "models-path": path.resolve("./database/models"),
  "seeders-path": path.resolve("./database/seeders"),
  "migrations-path": path.resolve("./database/migrations"),
};
```

Luego de crear este archivo y cargarle su contenido, debemos ir a la terminal y escribir el comando **sequelize init**, para que cree todas las carpetas necesarias para trabajar.

- Continuamos por configurar el archivo **config.js**, que estará en la siguiente ruta: _database>config>config.js_. Este archivo tendrá dentro un objeto literal, y es fundamental que le agreguemos el **module.exports** al principio, quedando así:

```javascript
module.exports = {
  // OBJETO
};
```

Luego de ello, podemos modificar los parámetros de cada una de las bases que tenemos disponibles para desarrollo, testeo y producción. Esto se hace modificando los valores de los parámetros que tengan los objetos correspondientes.

- En la ruta _database>models>index.js_ encontraremos una serie de configuraciones, que se hacen por parámetro, que permitirán conectar todo con el proyecto. Lo más interesante e importante de saber, es que, al final, se exporta una variable llamada "db". Con ella trabajaremos en los controladores, importandola en los mismos, para poder trabajar la BDD en cuestión.

## Modelos

Para poder interactuar correctamente con nuestra BDD, sequelize necesita entender cómo es nuestra BDD. Allí es donde entra, dentro de la arquitectura MVC, la capa de modelo, que actúa como representación de los datos que veremos en el sistema. Esto será lo que nos permita hacer el CRUD con la BDD. Cabe recordar que el modelo es una representación de la tabla, con lo cual, deberemos indicar el nombre de la tabla, y el nombre de sus columnas. El nombre de la tabla o modelo debe empezar con mayúscula y ser sustantivos colectivos. La definición del Modelo, en JS, se vería así:

```javascript
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuarios",
    {
      id: {
        autoIncremento: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "UsuariosVIP",
      timestamps: false,
    }
  );

  return Usuario;
};
```

En este código, lo que hacemos es indicarle a Sequelize los nombres y características de las columnas de la tabla. En cuanto al nombre de la misma, Sequelize interpreta que su nombre es el de su constante, pero en plural. Así, si el modelo se llama "Usuario", infiere que la tabla se llamará "Usuarios". Sin embargo, podemos hacerlo tal como se ve en el último objeto literal contenido en la constante "Usuario".

Cada uno de estos modelos, para la tabla que sea, se deberá incluir en un archivo ubicado dentro de _database > models > archivo.js_, empezando su nombre siempre por mayúscula y en singular.

Otra forma de hacerlo es:

```javascript
module.exports = (sequelize, DataTypes) => {
  let alias = "Peliculas"; //Lo usaremos al definir la tabla
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    length: {
      type: DataTypes.INTEGER,
    },
    //La columna que no aclaremos acá, sequelize no podrá recuperarla luego.
  };
  let config = {
    tableName: "movies",
    timestamps: false, //Esta línea es fundamental. Poner SI o SI.
  };

  const Pelicula = sequelize.define(alias, cols, config); //Cerramos acá el armado del modelo
  return Pelicula;
};
```

## findAll, findByPk, findOne

Para trabajar con los valores que contienen las BDD, debemos primero requerir o importar los modelos de las mismas en el archivo donde los trabajaremos (generalmente en los controladores), llamando a `let db = require('../database/models')` dentro del controlador, y luego, dentro de la función, accediendo al modelo con `db.Alias.findAll()`. Esto nos permitirá traer todos los elementos que contenga dicha tabla. El problema con esto es que
los pedidos a las BDD son asíncronos. Por ello, usamos **.then()**. Un ejemplo de esto sería:

```javascript
//dentro de moviesController.js

let db = require('../database/models');

let moviesController = {
    list: function (req, res) => {
        db.Peliculas.findAll()
            .then(function(peliculas) {
                res.render('listadoPeliculas', {peliculas: peliculas})
            })
    }
}
```

Otras de las consultas más utilizadas, son **findByPk()**, que nos permite buscar un elemento por su clave primaria. Esto se suele hacer utilizando los **id** del array con que se las presenta en la vista, extrayendolo de la url con **req.params.id**. En código, se verá así: `Usuario.findAll({where: {apellido: 'Perez'}})`

Por último, **findOne()** nos permite buscar un único usuario, que será el primero que coincida con las condiciones especificadas, trabajando igual que el **findByPk()**

## WHERE y Operadores

El **where** se utiliza con los elementos findByPk y findOne, para definir la condición bajo la cual se deberán buscar.

Para trabajar con **operadores**, lo que debemos hacer es, indicando en las condiciones del where que se utilizará para parametrizar la búsqueda, indicar que estamos trabajando con un operador, y luego dar las condiciones. En código, esto se vería así: `Usuario.findAll({where: {apellido: {[db.Sequelize.Op.Like]: '%s%'}}})`. En este caso particular, le estamos indicando que busque todos los apellidos que contengan una 's' dentro.

## Order y Limit

Al trabajar con findByPk y findOne, podemos determinar de qué modo ordenar los elementos buscados. Esto se hace aplicando **order** del siguiente modo:

```javascript
let controller = {
  ordenar: function (req, res) {
    db.Peliculas.findAll({
      where: {
        rating: { [db.Sequelize.Op.gt]: 8 },
      },
      order: [["title", "DESC"]],
      limit: 5,
    }).then(function (peliculas) {
      res.render("Top peliculas", { peliculas: peliculas });
    });
  },
};
```

Luego, podemos utilizar los parámetros **limit** y **offset**, tal como se ve en el ejemplo anterior, limitando así aún más nuestra búsqueda.
