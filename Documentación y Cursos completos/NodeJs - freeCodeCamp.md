# Curso de Node.js y Express de freeCodeCamp

## Índice

- [Capítulo 1: Introducción](#introducción-a-nodejs)
  1. [1.1 Introducción a Node.js](#11-introducción-a-nodejs)
  2. [1.2 Conceptos básicos](#12-conceptos-básicos)
  3. [1.3 Aplicaciones con Node.js](#13-aplicaciones-con-nodejs)
  4. [1.4 Descarga, instalación y versiones](#14-descarga-instalación-y-versiones)
  5. [1.5 El REPL de Node.js](#15-el-repl-de-nodejs)
- [Capítulo 2: Módulos de Node.js y primer programa](#capítulo-2-módulos-de-nodejs-y-primer-programa)
  1. [2.1 Primer programa con Node.js](#21-primer-programa-con-nodejs)
  2. [2.2 Módulos de Node.js](#22-módulos-de-nodejs)
  3. [2.3 Crear un módulo](#23-crear-un-módulo)
  4. [2.4 Exportar e importar un módulo](#24-exportar-e-importar-un-módulo)
  5. [2.5 Exportar varios elementos](#25-exportar-varios-elementos)
  6. [2.6 Sintaxis de desestructuración y require](#26-sintaxis-de-desestructuración-y-require)
  7. [2.7 Módulos principales](#27-módulos-principales)
- [Capítulo 3: ](#capítulo-3-npm-y-el-formato-json)
  1. [3.1 Introducción a npm](#31-introducción-a-npm)
  2. [3.2 Crear paquetes con npm](#32-crear-paquetes-con-npm)
  3. [3.3 Introducción al formato JSON](#33-introducción-al-formato-json)
  4. [3.4 Instalar y desinstalar paquetes con npm](#34-instalar-y-desinstalar-paquetes-con-npm)
  5. [3.5 package-lock.json](#35-package-lockjson)
- [Capítulo 4: ](#capítulo-4-eventos-y-javascript-asíncrono)
  1. [4.1 Eventos de Node.js](#41-eventos-de-nodejs)
  2. [4.2 Módulo events](#42-módulo-events)
  3. [4.3 Promesas con JavaScript](#43-promesas-con-javascript)
  4. [4.4 .catch()](#44-catch)
  5. [4.5 Encadenar promesas y async await](#45-encadenar-promesas-y-async-await)
- [Capítulo 5: HTTP y rutas en Node.js](#capítulo-5-http-y-rutas-en-nodejs)
  1. [5.1 Modelo Cliente-Servidor](#51-modelo-cliente-servidor)
  2. [5.2 Solicitudes HTTP](#52-solicitudes-http)
  3. [5.3 Métodos HTTP](#53-métodos-http)
  4. [5.4 Respuestas HTTP](#54-respuestas-http)
  5. [5.5 Códigos de estado HTTP](#55-códigos-de-estado-http)
  6. [5.6 Primer servidor con Node.js](#56-tu-primer-servidor-con-nodejs)
  7. [5.7 req y res](#57-req-y-res)
  8. [5.8 Estructura de una URL](#58-estructura-de-una-url)
  9. [5.9 El módulo URL](#59-el-módulo-url)
  10. [5.10 Routing en Node.js](#510-routing-en-nodejs)
- [Capítulo 6: Nodemon](#capítulo-6-nodemon)
- [Capítulo 7: Express](#capítulo-7-express)
  1. [7.1 Introducción a Express](#71-introducción-a-express)
  2. [7.2 Conceptos importantes](#72-conceptos-importantes)
  3. [7.3 Crear un proyecto con Express](#73-crear-un-proyecto-con-express)
  4. [7.4 Primeros pasos con Express](#74-primeros-pasos-con-express)
  5. [7.5 Agregar rutas en Express](#75-agregar-rutas-en-express)
  6. [7.6 Parámetros de ruta](#76-parámetros-de-ruta)
  7. [7.7 Parámetros query](#77-parámetros-query)
  8. [7.8 Routers en Express](#78-routers-en-express)
  9. [7.9 Routers en distintos archivos](#79-routers-en-distintos-archivos)
  10. [7.10 POST, PUT, PATCH y DELETE](#710-post-put-patch-y-delete)

# Capítulo 1: Introducción

## 1.1 Introducción a Node.js

[Volver al Índice](#índice)

Node.js es un **entorno de ejecución** de JavaScript orientado a eventos asíncronos. Un _entorno de ejecución_ es un entorno o infraestructura en el cual se ejecuta un programa o aplicación. Esto nos permite correr el programa directamente desde la consola, sin necesidad de ir directamente al navegador. Un _eventos asíncronos_ es un evento que se ejecuta independientemente del proceso principal de la aplicación. Es decir que, cuando se inicie el evento, continuará ejecutandose en paralelo a la ejecución de la aplicación, sin interrumpir la misma. Esto, por ejemplo, se da al solicitar información desde una Base de Datos. En contraste, podemos determinar que un _evento síncrono_ es un evento que e ejecuta como parte del proceso principal de la aplicación.

### 1.1.1 Características importantes de Node.js

- Es un entorno de ejecución de JavaScript
- Es Open-source, o de código abierto;
- Es multiplataforma;
- Está basado en el motor V8 de Google, el cual es un motor de JS desarrollado para Google Chrome.

### 1.1.2 Lo que NO es Node.js

- No es un lenguaje de programación;
- No es un framework;
- No es una librería.

## 1.2 Conceptos básicos

[Volver al Índice](#índice)

Ahora, veremos algunos conceptos importantes para trabajar, tanto con Node.js, como con cualquier desarrollo back-end:

- **Arquitectura Cliente-Servidor**: Modelo en el cual el servidor envía recursos al dispositivo que los solicita, es decir, al cliente.
- **Desarrollo front-end**: Área del desarrollo web encargada de desarrollar los componentes que el usuario ve, y con los cuales interactúa.
- **Desarrollo back-end**: Área del desarollo web encargada del desarrollo de los servidores y de las Bases de Datos. Esto es lo que el usuario no ve, pero que sirve para que todo lo que sí ve funcione correctamente.
- **Desarrollo Full Stack**: Desarrollo web que combina ambas partes.
- **Protocolos**: Conjunto de reglas que permiten que dos entidades de una red se comuniquen. Están diseñados para llevar los datos que envían tanto el navegador como el servidor al mismo "idioma", permitiendo la comunicación entre ambos.
- **Base de Datos**: Conjunto de datos estructurados sobre un mismo contexto, los cuales pueden ser consultados, modificados o eliminados.
- **Páginas web estáticas y dinámicas**: Las páginas web estáticas son aquellas que, una vez que se descargan, ya no tienen ninguna interacción con los usuarios, como los blogs. Las páginas web dinámicas, por su lado, sí tienen interacción con los usuarios.
- **APIs**: Una _Application Programming Interface_, o _Interfaz de Programación de Aplicaciones_, es como un intermediario entre programas, es decir, que permite que dos programas distintos interactúen entre si. Nos permite conectar la aplicación que se está ejecutando en el navegador con la que se está ejecutando en el servidor.

## 1.3 Aplicaciones con Node.js

[Volver al Índice](#índice)

Node es usado para desarrollo back-end, así como para el desarrollo de APIs, y es muy utilizado porque permite desarrollar aplicaciones _escalables_ y _de tiempo real_. **Escalable** significa que su rendimiento se puede adaptar a medida que crece el uso de la aplicación y recibe más solicitudes, mientras que _de tiempo real_ significa que se establec una conexión bidireccional y dinámica entre el servidor y el cliente, en la cual se podrá intercambiar información, analizando la aplicación los eventos que ocurren y reaccionando de forma inmediata.

## 1.4 Descarga, instalación y versiones

[Volver al Índice](#índice)

Node.js se descarga desde la [página web oficial de Node.js](https://nodejs.org/es/). Podemos descargar la versión **LTS**, una versión de mucho tiempo de soporte, recomendada para la mayoría de los usuarios, o la versión **actual** que tienen las últimas características. Simplemente seguimos los pasos del instalador, y listo. Debemos tener cuidado de seleccionar la opción de **Add node to PATH** para poder ejecutarlo desde consola.

Para ver la versión que tenemos instalada de Node, debemos buscar el _Command Prompt_ en el sistema de nuestra PC (dato curioso: agrandamos el tamaño de la letra con Ctrl + rueda del ratón). En el ejecutamos el comando `node --version`.

## 1.5 El REPL de Node.js

[Volver al Índice](#índice)

**REPL** significa _Reep Eval Print Loop_. Este REPL es una herramienta interactiva, en la cual podemos escribir y ejecutar código, mostrándonos el resultado del mismo directamente en las líneas del navegador.

Podemos ejecutar el comando `node` y luego `.help` para ver múltiples opciones que tenemos para trabajar. Si colocamos `.editor`, podremos escribir directamente el código de JS y evaluarlo en el terminal. Podemos ver el resultado de nuestro código con _Ctrl+D_, o salir del modo de editor con _Ctrl+D_. Para salir del REPL, debemos ejecutar el comando `.exit`.

# Capítulo 2: Módulos de Node.js y primer programa

## 2.1 Primer programa con Node.js

[Volver al Índice](#índice)

En VSCode, dentro de la carpeta en la cual deseemos crear el programa, debemos crear los archivos que deseemos trabajar.

Una vez creado el programa, apretamos _Ctrl+ñ_, verificamos que estemos parados en la carpeta correspondiente, y, para ejecutar el programa, escribimos `node app.js`, suponiendo que **app.js** es el nombre del archivo.

## 2.2 Módulos de Node.js

[Volver al Índice](#índice)

Un **módulo** es una funcionalidad organizada en uno o varios archivos JavaScript, que puede ser **reutilizada** en una aplicación. Esta reutilización es su característica más importante, dado que nos permite dividir o estructurar el programa en diferentes archivos, lo que hace que el código sea mucho más facil de mantenerlo y mejorarlo, dado que, en vez de revisar todo el código, solo deberemos revisar el archivo del módulo correspondiente. Además, esto permite evitar repeticiones de código en los archivos, o bien facilita el agregado de nuevas funcionalidades a los mismos.

Para comunicar un módulo con otro, debemos

## 2.3 Crear un módulo

[Volver al Índice](#índice)

Para crear un módulo, debemos hacer lo siguiente:

```javascript
// Este módulo se llama saludo
function saludar(nombre) {
  console.log("¡Hola " + nombre + "!");
}
```

## 2.4 Exportar e importar un módulo

[Volver al Índice](#índice)

Para poder usar el módulo anterior en otra parte del código, debemos exportarlo aplicando al módulo la siguiente línea: `module.exports = saludar`.

Del mismo modo, debemos importarlo en el otro escribiendo, antes de utilizar o llamar el módulo (se recomienda hacerlo en la cabecera o parte superior del archivo), aplicando la siguiente línea en donde utilicemos el módulo: `const saludar = require("./saludo.js")`.

Para usarlo, debemos hacer el llamado de la siguiente forma: `console.log(saludo.saludar('Usuario' ));`

## 2.5 Exportar varios elementos

[Volver al Índice](#índice)

Para exportar varios elementos, por ejemplo, varias funciones dentro del mismo módulo, podemos hacerlo exportando un objeto. Así, nuestro módulo tendría la siguiente evolución:

```javascript
// Este módulo ahora se llama saludos
function saludar(nombre) {
  console.log("¡Hola " + nombre + "!");
}

function holaMundo() {
  console.log("¡Hola Mundo!");
}

module.exports = {
  saludar: saludar,
  holaMundo: holaMundo,
};
```

## 2.6 Sintaxis de desestructuración y require

[Volver al Índice](#índice)

En el caso de que tuvieramos un módulo extenso o con muchos objetos, podemos **desestructurar** el mismo, es decir, importar solamente las partes del módulo que necesitemos utilizar. Esto se hace de la siguiente forma:

```javascript
// Estamos ahora en app.js

const { holaMundo } = require("./saludos.js"); //Así, no llamamos a la función saludar()
```

Si tuvieramos más de un elemento que quisieramos llamar en la desestructuración, simplemente los separamos con comas dentro de las llaves que utilizamos antes del require.

## 2.7 Módulos principales

[Volver al Índice](#índice)

Llamados **Módulos built-in** o **Módulos core**, son los módulos que ya vienen instalados en Node.js (built-in significa incorporado). Para trabajar con estos módulos, no hará falta instalar a los mismos, como si sucede con el uso de módulos de terceros. Algunos de estos módulos son:

- http
- https
- fs (fileSystem)
- os (operatingSystem)
- path

### 2.7.1 Módulo console

[Volver al Índice](#índice)

Este módulo es un built-in, que implementa funcionaldiades similares a la consola de un navegador web. Este módulo trata de simular la consola interactiva que existe en los navegadores para poder desplegar JavaScript en ellos. Los métodos más útiles de este módulo son:

- console.log(): Imprime un mensaje por la consola.
- console..warn(): Sirve para imprimir advertencias en la consola. Se ve igual que el console.log().
- console.error(): Lo mismo que el anterior, pero para mostrar errores más importantes. Se puede también crear dentro del un objeto llamado Error, haciendo lo siguiente: `console.error(new Error('¡Ocurrió un error!'))`. Esto mostrará un error mucho más descriptivo, como, por ejemplo, el archivo en que se produjo, la línea en que apareció, entre otras cosas.
- console.assert(): Este método consta de dos parámetros, el primero indica la condición y el segundo el mensaje de error que se imprimirá en consola si la condición se evalúa como false .
- console.table(): Muestra datos tabulares como una tabla. Esta función toma un argumento obligatorio: data , que debe ser un array o un objeto, y un parámetro adicional: columns.

### 2.7.2 Módulo process

[Volver al Índice](#índice)

Este módulo muestra los procesos que se están ejecutando en el programa. Por ejemplo:

- process.argv: Muestra un array con los procesos ejecutados, como por ejemplo, la dirección de los archivos a los que se accedió. Con esto, por ejemplo, podríamos ver si se está accediendo correctamente al archivo de un módulo.
- process.memoryUsage(): Da distintos parámetros respecto al uso de la memoria.

### 2.7.3 Módulo os

[Volver al Índice](#índice)

Contiene funcionalidades para obtener información sobre el sistema operativo en el cual se ejecuta la aplicación. Este módulo no está disponible de forma global, así que necesitaremos importarlo con require: `const os = require('os')`.Ahora, podemos usar las siguientes funciones

- os.type(): Retorna una cadena de caracteres que nos muestra en qué tipo de sistema operativo estamos: Windows, Linux, Mac, etc.
- os.homedir(): Retorna la dirección del directorio principal del usuario en que estemos parados.
- os.uptime(): Nos retorna la cantidad de segundos que lleva iniciado el sistema operativo en cuestión.
- os.userInfo(): Nos provee de información del usuario en que estamos parados.

### 2.7.4 Módulo Timers

[Volver al Índice](#índice)

Este módulo puede ser utilizado para simular operaciones asíncronas, ya que contiene funciones que ejecutan código luego de un cierto **periodo de tiempo**. Las funciones más utilizadas de este módulo son:

- setTimeout(): Ejecuta el código luego de un número específico de milisegundos, que debemos pasar como segundo parámetro. El orden de parámetros que recibe esta función es `setTimeout(funcion, retraso, argumento);`. Pueden pasarse varios argumentos, simplemente separándolos por comas, pero siempre luego de los dos primeros, que deben ser la función y el tiempo de retraso.
- setInterval(): Ejecuta código un número infinito de veces, con un retraso específico de milisegundos. El orden de sus parámetros es función, intervalo y argumentos de la función, del mismo modo que con setTimeout.
- setImmediate(): Se utiliza para ejecutar código asíncrono en la próxima iteración del ciclo de eventos, lo más pronto posible. el primer parámetro que toma es la función, y luego los argumentos que la funcion requiera. La función se ejecuta luego de que se ejecute el código síncrono. Podemos ver el siguiente código a modo de ejemplo:

```javascript
console.log("Antes de setImmediate()"); // Se mostrará primero en la consola
setImmediate(saludar, "José"); // Se ejecutará al último
console.log("Después de setImmediate()"); // Se mostrará segundo en la consola
```

### 2.7.5 Módulo fs

[Volver al Índice](#índice)

La traducción de 'File System' al español es 'Sistema de archivos'. Este módulo no está disponible de forma global, así que debemos requerirlo al principio del archivo en que queramos utilizarlo, y contiene funcionalidad muy útil para trabajar con el sistema de archivos. Entre las operaciones útiles con archivos que este módulo nos permite hacer, tenemos leer, modificar, copiar, eliminar y renombrar archivos. Todos los métodos de este módulo son asíncronos, pero se pueden escoger versiones síncronas de estos métodos agregando **Sync** a sus nombres. Sus métodos más importes son:

- fs.readFile() y fs.readFileSync(): Permite leer el archivo indicado. Recibe como primer parámetro el nombre y formato del archivo, y las caracterítiscas utilizadas. A modo de ejemplo, tenemos:

```javascript
const fs = require("fs");

fs.readFile("index.html", "utf-8", (err, contenido) => {
  if (err) {
    console.log(err);
  } else {
    console.log(contenido);
  }
});
```

Un detalle interesante es que podemos, en vez de hacer el **console.log(err)**, colocar **throw err**; lo que detendrá la ejecución del programa y mostrará información sobre el error que se produjo.

- fs.rename() y fs.renameSync(): Permite renombrar el archivo. Recibe como primer parámetro la ruta del archivo, y luego el nuevo nombre que deseamos que tenga. Luego, podemos aplicar una función flecha del mismo modo que en el caso anterior, para verificar si se produjo un error o si se cambió el nombre sin problemas.
- fs.appendFile() y fs.appendFileSync(): Este método nos permite agregar contenido al final de un archivo. Recibe como primer parámetro la ruta del archivo, y luego el contenido que deseemos cargarle.
- fs.writeFile() y fs.writeFile(): Permite reeemplazar todo el contenido del archivo. Recibe como primer parámetro la ruta del archivo, y luego el contenido que deseemos cargarle.
- fs.unlink(): Permite eliminar el archivo. Solamente recibe como parámetro el nombre del archivo.

# Capítulo 3: npm y el formato JSON

[Volver al Índice](#índice)

Escribir

## 3.1 Introducción a npm

[Volver al Índice](#índice)

Escribir

## 3.2 Crear paquetes con npm

[Volver al Índice](#índice)

Escribir

## 3.3 Introducción al formato JSON

[Volver al Índice](#índice)

Escribir

## 3.4 Instalar y desinstalar paquetes con npm

[Volver al Índice](#índice)

Escribir

## 3.5 package-lock.json

[Volver al Índice](#índice)

Escribir

# Capítulo 4: Eventos y JavaScript asíncrono

[Volver al Índice](#índice)

Escribir

## 4.1 Eventos de Node.js

[Volver al Índice](#índice)

Escribir

## 4.2 Módulo events

[Volver al Índice](#índice)

Escribir

## 4.3 Promesas con JavaScript

[Volver al Índice](#índice)

Escribir

### 4.3.1 Prácticas de promesas

[Volver al Índice](#índice)

Escribir

## 4.4 .catch()

[Volver al Índice](#índice)

Escribir

## 4.5 Encadenar promesas y async await

[Volver al Índice](#índice)

Escribir

# Capítulo 5: HTTP y rutas en Node.js

[Volver al Índice](#índice)

Escribir

## 5.1 Modelo cliente-servidor

[Volver al Índice](#índice)

Escribir

## 5.2 Solicitudes HTTP

[Volver al Índice](#índice)

Escribir

## 5.3 Métodos HTTP

[Volver al Índice](#índice)

Escribir

## 5.4 Respuestas HTTP

[Volver al Índice](#índice)

Escribir

## 5.5 Códigos de estado HTTP

[Volver al Índice](#índice)

Escribir

## 5.6 Tu primer servidor con Node.js

[Volver al Índice](#índice)

Escribir

## 5.7 req y res

[Volver al Índice](#índice)

Escribir

## 5.8 Estructura de una URL

[Volver al Índice](#índice)

Escribir

## 5.9 El módulo url

[Volver al Índice](#índice)

Escribir

## 5.10 Routing en Node.js

[Volver al Índice](#índice)

Escribir

# Capítulo 6: Nodemon

[Volver al Índice](#índice)

Escribir

# Capítulo 7: Express

[Volver al Índice](#índice)

Escribir

## 7.1 Introducción a Express

[Volver al Índice](#índice)

Escribir

## 7.2 Conceptos importantes

[Volver al Índice](#índice)

Escribir

## 7.3 Crear un proyecto con Express

[Volver al Índice](#índice)

Escribir

## 7.4 Primeros pasos con Express

[Volver al Índice](#índice)

Escribir

## 7.5 Agregar rutas en Express

[Volver al Índice](#índice)

Escribir

## 7.6 Parámetros de Ruta

[Volver al Índice](#índice)

Escribir

## 7.7 Parámetros query

[Volver al Índice](#índice)

Escribir

## 7.8 Routers en Express

[Volver al Índice](#índice)

Escribir

## 7.9 Routers en distintos archivos

[Volver al Índice](#índice)

Escribir

## 7.10 POST, PUT, PATCH y DELETE

[Volver al Índice](#índice)

Escribir
