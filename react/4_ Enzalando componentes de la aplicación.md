# Enlazando componentes

## SPA

SPA o también llamada Single Page Application es una aplicación web en la cual solo existe un único punto de entrada, generalmente un archivo index.html. En una SPA no hay ningún otro archivo HTML al que se pueda acceder de manera separada, pues todo el contenido de la aplicación será cargado y renderizado dentro del mismo archivo index.html. Dentro de este contexto, aunque solo tengamos un archivo, seguimos contando con la posibilidad de tener varias vistas que se irán intercambiando en su visualización, produciendo así el efecto de que dentro de la aplicación existen varias "páginas" o "archivos" de contenido, cuando la realidad es que todo se está mostrando desde un único archivo. Una SPA ofrece, a su vez, una experiencia de usuario bastante agradable y fluida. Al no tener que cargar otro archivo distinto, la carga de contenido será mucho más rápida. Y es aquí en donde el Virtual DOM de React cobra un real protagonismo. Gracias a su existencia será posible identificar qué contenido de la vista tiene que cambiar y qué contenido tiene que mantenerse.

El concepto de SPA es algo relativamente nuevo y es posible de implementar gracias a librerías como React. Y cobra aún más sentido al tener ruteadores de la aplicación que permitan elegir dinámicamente qué componente deberá mostrarse en pantalla según la ruta en la barra de aplicaciones del navegador.

## Instalando React Router DOM

Para permitir que nuestra aplicación de React se comporte como un SPA real, tendremos que instalar una librería adicional que nos permita gestionar el sistema de ruteo de una manera óptima e inteligente, y así poder renderizar los componentes de la aplicación selectivamente dependiendo de la ruta presente en la barra de direcciones del navegador.

Para instalarla, debemos ejecutar en consola `npm i react-router-dom`. Este es especialmente útil para aplicaciones de web, mientras que `npm i react-router` es para aplicaciones nativas.

## Componentes de React Router DOM

Al momento de importar esta librería, debemos hacerlo desestructurando los siguientes componentes: `ìmport { BrowserRouter, Link, Route, Switch } from 'react-router-dom';`

El componente < BrowseRouter > será el que anide todos los componentes de la aplicación.

## Creando la primer ruta

Dentro del archivo **index.js** debemos tener:

```javascript
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

El componente **Route** nos permitirá indicar qué componente se renderizará en pantalla. Este se verá, al momento de su uso, del siguiente modo: `<Route path="/about" component={About} />`. La prop **path** coincide con la ruta en la barra de direcciones del navegador, mientras que **component** será el nombre del componente que deseamos renderizar.

Para que la aplicación renderice varios componentes, deberíamos utilizar varias veces el tag `<Route>` en el mismo nivel, algo así:

```javascript
import { Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import {Contact} from './components/Contact';

<Route path="/" exact={true} component={Home} /> //Este componente puede dar problemas. Explicacion abajo
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
```

La prop **exact** hace que la ruta del componente, que es sumamente genérica, se renderice solamente si la ruta es exactamente la raíz, y no lo hará en ningún otro caso.

En cuanto al componente Link con su tag <Link />, el mismo funciona como un enlace tradicional, solo que evitará la actualización de la página, manteniendo el concepto de SPA. La ruta se indica con la prop **to**. Esto se vería así:

```javascript
import { Link } from "react-router-dom";

<Link to='/' exact={true}>Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
```

## Como hacer Switch de rutas y componentes

Una ruta muy importante es la del **error 404 Not Found**. Habiendo renderizado el mismo con `<Route component={Error404} />`, para indicar que el mismo se renderice cuando la ruta ingresada por el visitante no exista en la aplicación, deberemos usar el componente **Switch**. A este también debemos importarlo, y su tag deberá anidar todas las rutas antes ingresadas, yendo el del error siempre al final, del siguiente modo:

```javascript
import { Route, Switch } from "react-router-dom";

<Switch>
  <Route path="/" exact={true} component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  <Route component={Error404} />
</Switch>;
```

## Trabajando con rutas parametrizadas

Para crear rutas parametrizadas, se trabaja como habiamos visto con Express, colocando `<Route path="/products:/id" component={Products} />`. Para capturar el valor que nos den en la URL, debemos trabajar dentro del componente (Products en este caso). Accederíamos al valor trabajando con el objeto **props.match.params**. En este caso, se vería algo así: `const id = props.match.params.id`
