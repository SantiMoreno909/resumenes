# Trabajo con componentes

## Props

Un componente es una pieza de código reutilizable. El tema es que, para hacerlo reutilizable, necesitaremos que su estructura se mantenga constante, pero no así su contenido, para poder adaptarlo a diferentes usos. Para eso sirven las **props**, parámetros de los componentes que son pasadas al mismo al momento de su utilización, en forma de objeto literal. Lo que deberemos hacer es pasar el parámetro _props_ a la función, y luego indicar en qué parte del código deseamos que se muestre el contenido:

```javascript
function Saludo(props) {
  return (
    <div>
      Hola, soy {props.nombre} y tengo {props.edad} años.
    </div>
  );
}
```

Las propiedades de un componente reciben los valores de sus componentes cuando son requeridos por la aplicación. Para hacerlo, debemos configurar al componente, en forma de atributo HTML, el nombre y el valor de la propiedad que le quieras dar, algo así: `<Saludo nombre="Juan" edad="25" />`.

## Key Props y .map()

Cuando tenemos distintos valores para un mismo prop, lo ideal es pasarlo en una array dentro del atributo. Algo así: `<Navbar enlaces={["Home", "Productos", "Contacto"]} />`. Para iterar en esos datos, lo ideal es utilizar el método **.map()** para recorrer ese array e imprimir los valores. El componente para el ejemplo dado se vería así:

```javascript
function Navbar(props) {
  return (
    <nav>
      <ul>
        {props.enlace.map((unEnlace) => (
          <li key={unEnlace + i}> {unEnlace} </li>
        ))}
      </ul>
    </nav>
  );
}
```

Habiendo hecho lo anterior, el navegador nos solicitará una **key única**. Esto sucede para los elementos que se deben renderizar de manera iterativa con un mapeo de array. La mejor forma de definir una key es definir en string que sea totalmente única para ese elemento, algo como lo que vemos en el atribuyo _key_ dentro del _<li>_ del ejemplo. Esto es fundamental para que React pueda reconocer qué elemento cambio, y poder así trabaja perfectamente.

## Prop types y default props

Las **prop types** son fomas de indicar qué tipo de dato necesitamos recibir para un determinado componente. Para poder trabajar con **prop types**, debemos instalar el pquete `npm i prop-types`, y luego importarlo en el componente que queramos usar prop types. Siguiendo con el ejemplo del componente navbar, su código se vería asÍ:

```javascript
import React from "react";
import propTypes from "prop-types";

function Navbar(props) {
  return (
    <nav>
      <ul>
        {props.enlace.map((unEnlace) => (
          <li key={unEnlace + i}> {unEnlace} </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = { enlaces: propTypes.array };

export default Navbar;
```

Existen muchas mas opciones de trabajo con las prop types, que podemos encontrar en la documentación de las mismas.

En el caso de que queramos definir valores por defecto para ciertas propiedades, las definiríamos así:

```javascript
Saludo.defaultProps = {
  titulo: "¡Hola mundo!",
  mensaje: "Saludos desde React",
};
```

## Children

Para React, todo lo que sucede dentro de un componente debe ser especificado al momento de crearlo. Por tanto, para pasar un elemento como hijo de un componente, debe ser pasado usando props. Estas tendrán una propiedad particular llamada **children**, la cual le indica a React que quizá el componente reciba hijos, y que, de ser así, los muestre donde se lo estás indicando, algo así:

```javascript
function Saludo(props) {
  return (
    <div>
      <p>
        Hola, soy {props.nombre} y tengo {props.edad} años.
      </p>
      {props.children}
    </div>
  );
}
```

Así, podríamos incluir el siguiente hijo:

```javascript
<Saludo>
  <p>Este es un children</p>
</Saludo>
```

## Styling

Para incluir CSS en React, hay dos caminos: El sencillo, que es crear y vincular la hoja de estilos dentro de la carpeta /public/css, y el más complicado, que implica crear una hoja de estilos para cada componente. Estos estilos se aplican exclusivamente a su correspondientes componente. Para usarlo, debemos importar en el archivo del componente la sentencia `import './public/css/estilosComponente.css'`
