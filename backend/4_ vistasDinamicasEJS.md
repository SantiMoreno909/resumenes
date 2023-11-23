# Vistas dinámicas con EJS

Para trabajar con aplicaciones que cuentan con muchas páginas repetitivas, que cambian solamente en algunas cuestiones particulares (como páginas de productos), lo que se hace es trabajar con **template engines** o **motores de plantillas**, los cuales permiten crear páginas html dinámicas, que toman datos desde los controladores, y así modificar las vistas de la pantalla de acuerdo con los requerimientos de cada usuario. En nuestro caso, utilizaremos **EJS**.

## Instalar EJS

Esto se hace desde la terminal, ejecutando **npm install ejs**. Luego de instalarlo, debemos indicarle a Express que trabaje con **EJS**. Para eso, en la variable que hayamos guardado Express dentro del Entry Point, debemos indicarle, utilizando el método **set**, qué motor de plantillas usar. Esto sería, en código: `app.set('view engine', 'ejs');`

Los archivos **.ejs** deberán guardarse en la carpeta views. Express generator la determina de forma automática, pero, si quisieramos cambiarla, o si no usáramos Express Generator, deberíamos hacer `app.set('views', __dirname + '/ejs-html')`, donde **ejs-html** es el nombre de la carpeta

## Renderizando la primera vista

Las vistas se renderizan en el controlador. Por ello, debemos indicarle al objeto **controller** con qué vistas trabajar. Para ello, debemos utilizar el método **render** del argumento **res**. En código, sería:

```javascript
const controller = {
  mostrarProductos: (req, res) => {
    res.render("productos");
  },
};
```

## Tags en EJS

Los tags sirven para captar datos desde el backend. En **ejs** se utilizan las siguientes dos etiquetas: **<% %>** y **<%= %>**.

Estas etiquetas permiten embeber funciones de **JavaScript** dentro de **html**. Para poder hacerlo, debemos colocar las etiquetas entre la línea que abre el JS y la que lo cierra. Por ejemplo:

```ejs
<% for(let i=1; i<=10; i++) { %>
   <p>Producto <%= i %></p>
<% } %>
```

Cómo podemos ver en el ejemplo, la etiqueta **<%= %>** imprime literalmente lo que le indiquemos dentro del **html**.

### Ejemplo interesante

```ejs
<% for(let i=1; i<=10; i++) { %>
   <label for="">Elemento <%= i %></label>
   <% if(i%2 == 0) { %>
        <input class="par" type="text" name="hobbies[]" />
    <% } else { %>
        <input class="impar" type="text" name="hobbies[]" />
    <% } %>
<% } %>
```

## Compartir información desde el Controller hacia la Vista

En estos casos, dentro del controlador, debemos hacer lo siguiente:

```javascript
const controller = {
  mostrarProductos: (req, res) => {
    res.render("productos", { listadoProductos: productos });
  },
};
```

Así, le pasamos a la vista un objeto literal. La propiedad es el nombre con el cual lo identificaremos y trabajaremos dentro de los tags (en este caso, _listadoProductos_). Adicionalmente, le pasaremos el nombre del dato que le queremos pasar (en este caso, el array _productos_, que tendrá dentro suyo distintos objetos referentes a cada producto. De momento, este estará dentro del controller, hasta que veamos BDD).

Ahora, dentro de la vista, usaremos el nombre (en este caso, _productos_), seguido de la propiedad que deseemos tomar de él. Por ejemplo:

```ejs
<% for (let producto of listadoProductos) { %>
    <li> Hola, soy el producto <=% producto.nombre %></li>
<% } %>
```

## Archivos parciales

Estos son "pedazos" de código que podemos utilizar de forma repetitiva en diferentes archivos, como los header, los footer, barras de búsqueda y elementos similares, que se repitan en varias páginas. Para poder hacer esto, cargamos el código reutilizable en un archivo ejs, y dentro del archivo que contendrá todos los parciales, el html, colocamos: `<% - include('./partials/head') %>` (_head_ sería el nombre del archivo _.ejs_ que contendrá la vista parcial).

Como vimos en el código, estos elementos se guardan dentro de la carpeta **partials**, que va a su vez dentro de la carpeta **views**.
