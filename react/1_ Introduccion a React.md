# Introducción a React

## ¿Qué es React?

React es una **biblioteca de componentes** desarrollada por Facebook, con el objetivo de optimizar al máximo los aplicaciones single page. Lo que hace es trabajar con funciones que actualizan los cambios de estado de la aplicación, actualizando así rápidamente lo mostrado en el DOM. Para ello, utiliza un concepto llamado **Virtual DOM**, que compara el virtual con el real, para así saber qué debe actualizar en el DOM Real.

## Instalación y puesta en marcha

Desde la terminal, debemos ubicarnos en el directorio donde queremos crear el proyecto. Luego, colocamos uno de estos dos líneas de código: `npx create-react-app mi-app-de-react` o bien `npm init react-app mi-app-de-react`.

Una vez que todo está instalado, dentro de la carpeta (muy similar a la que se trabaja con Node), dentro de public tendremos en **index.html**, que contiene un **div** con **#root**. Es importante NO TOCAR ESTE DIV.

Tenemos otros archivos importantes, como:

- index.js: Es básicamente el punto de partida de React. Desde el llamaremos todos los demás archivos que utilizaremos.

## Ecosistema de React

Dentro del ecosistema de archivos de react se ejecutan dos librerías sumamente importantes:

- **webpack**: Permite empaquetar todos los archivos ejs en un solo archivo para que puedan ser interpretados por el navegador.
- **babel**: Permite traducir cualquier sentencia muy novedosa de JS en sentencias mas antiguas pero estables. Este proceso se denomina _transpilación_.

Gracias a Dios, estas librerías ya vienen pre-configuradas con el comando de inicio.

## Introducción a componentes

Los **componentes** son elementos que se pueden reutilizar dentro del código. Dentro de React, estos son funciones nativas de JS dentro de la función **App**. Como vemos, dentro suyo, _App()_ tiene un return con html, componentes sin estado o funcionalidad, llamados **stateless**. El contenido de estos componentes son porciones de etiquetas HTML.

Para crear componentes, lo que se hace es crear un nuevo archivo con extensión _.js_ dentro de la carpeta _src_. Luego, dentro de el importamos **React** con `import React from 'react';`, y luego crear la función nativa de JavaScript que desees. Por último, se debe exportar el componente con `export default Funcion`.

Para poder implementarlo, vamos al archivo donde deseemos utilizar el componente, y lo primero que debemos hacer es importalo con `import Funcion from './Funcion'`;

## JSX

**JSX** es una extensión de JavaScript que nos permite escribir HTML dentro de nuestro código JavaScript. Es decir, podemos mezclar HTML y JavaScript en un solo bloque de código.

Básicamente, lo que debemos hacer es crear variables que podrán tener porciones de código o valores, y utilizarlo dentro de las etiquetas HTML que se retornan.
