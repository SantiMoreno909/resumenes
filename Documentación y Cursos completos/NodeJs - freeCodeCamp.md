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

**npm** es el compendio de archivos más grande del mundo, el cual contiene paquetes que pueden descargarse y utilizarse con Node.js. También contiene una herramienta para la línea de comandos.

## 3.1 Introducción a npm

[Volver al Índice](#índice)

Un **paquete** es un archivo, o bien un conjunto de ellos, descrito por un archivo **package.json**. Dentro de npm, un **módulo** es cualquier archivo o directorio en el direcorio **node_modules** que puede ser importado con require. **node_modules** es una carpeta que se crea automáticamente cuando comenzamos a trabajar con npm. Solo los módulos que tienen un archivo **package.json** son paquetes.

Una **dependencia** es un paquete que otro paquete necesita para funcionar correctamente. Por tanto, tanto la dependencia como el paquete que la necesita deberán ser creados.

## 3.2 Crear paquetes con npm

[Volver al Índice](#índice)

Para crear un paquete, lo primero que debemos hacer es crear la carpeta donde se creará el mismo. Para crear su archivo package.json, debemos ejecutar en consola, parados dentro de la carpeta del paquete, el siguiente comando: `npm init`. Este comando nos llevará a un proceso en el cual configuraremos los aspectos más básicos del paquete que estamos creado, pidiendonos que confirmemos, o bien cambiemos, los diferentes datos que nos solicita, tales como nombre, versión, descripción, el entry point, etc. Luego, nos dará toda la información y nos pedirá que la confirmemos. Al darle 'y', se confirmará y se creará el archivo package.json con todos los datos cargados, datos que podrán ser modificados a futuro.

Si escribimos `npm init --yes`, todos los datos antes mencionados se cargarán como están por defecto, y no tendremos que realizar todo el proceso descripto.

## 3.3 Introducción al formato JSON

[Volver al Índice](#índice)

JSON es un formato muy utilizado en desarrollo web para almacenar y transmitir información y configuraciones. Sus siglas significan **JavaScript Object Notation** o **Notación de Objetos de JavaScript**, y es un formato de texto utilizado para almacenar y transportar información, formateado basado en la sintaxis de objetos de JavaScript. Nos permite transformar objetos de JavaScript a texto para almacenarlo. Este formato es independiente del lenguaje de programación con el cual estemos trabajando.

Entre sus **características** más importantes, encontramos que:

- Los datos se representan como pares clave-valor, lo que llamamos propiedades.
- Las claves siempre deben ser cadenas de caracteres.
- Los pares deben estar separados entre sí por comas.
- Puede contener cadenas de caracteres, números, arreglos, booleanos y objetos.
- El conjunto de pares clave-valor que compone la información se rodea por dos llaves principales. También puede estar rodeado por corchetes.

Un ejemplo es:

```JSON
{
  "titulo": "Aprendiendo Node.js",
  "numVistas": 45642,
  "numLikes": 21123,
  "temas": [
    "JavaScript",
    "Node.js"
  ],
  "esPublico": true
}
```

Para **trabajar con un archivo JSON dentro de Node.js**, simplemente debemos requerirlo. Para **convertir JavaScript a JSON**, podemos usar los siguientes métodos:

- JSON.stringify(): Convierte el objeto JavaScript a una cadena de caracteres en formato JSON. Recibe como parámetro el nombre del objeto que se desee convertir.
- JSON.parse(): Convierte una cadena de caracteres en formato JSON a un objeto de JavaScript. Recibe como parámetro el nombre del objeto que se desee convertir.

## 3.4 Instalar y desinstalar paquetes con npm

[Volver al Índice](#índice)

Para **instalar** un paquete, como por ejemplo Express, debemos ejecutar el comando `npm install express`. Esto abrirá una barra de progreso mientras se descarga e instala todo el contenido del paquete, incluidas sus dependencias. Podemos ver los paquetes que instalemos dentro del apartado **dependencies** dentro de nuestro archivo **package.json**. Para **desinstalar** un paquete, simplemente ejecutamos en consola `npm uninstall express`.

Podemos indicar también la versión que deseemos instalar, indicando luego del nombre del paquete el número de la versión, indicada con un @, del siguiente modo: `npm install express@4.15.1`.

También podemos incluir las **devDependencies**, dependencias que se necesitaran solamente durante el desarrollo, pero no durante la producción. Esto se hace con el siguiente comando: `npm install express --save-dev`.

## 3.5 package-lock.json

[Volver al Índice](#índice)

Este archivo se genera automáticamente cuando npm modifica el _árbol_ de la carpeta **node_modules** o package.json. Esto nos permite mantener un registro de las dependencias necesarias para generar nuestro paquete. Este archivo, por tanto, describe el árbol generado para que futuras instalaciones puedan generar exactamente el mismo árbol. Dentro de él, encontramos los siguientes datos:

- name: Describe el nombre del paquete, igual que el que incluimos en package.json.
- version;
- lockfileVersion: Describe la versión del archivo package-lock.json.
- packages: Es un objeto que asocia la ubicación de cada paquete con un objeto que contiene información sobre ese paquete.

# Capítulo 4: Eventos y JavaScript asíncrono

[Volver al Índice](#índice)

## 4.1 Eventos de Node.js

[Volver al Índice](#índice)

Un **evento** es una acción que se realiza en la aplicación, que puede ser producido por una interacción con el usuario, con bases de datos, etc. Node.js está basado en eventos asíncronos.

Los **emitters** o emisores son objetos que emiten eventos nombrados y llaman a funciones específicas cuando ocurren. Estos son instancias de la clase **EventEmitter**, un concepto relacionado con POO, y tienen un método **.on()**, que permite asociar una función al evento. La función que se ejecuta puede ser un **Event Handler**, cuando la función emite o maneja el evento; o un **Event Listener**.

## 4.2 Módulo events

[Volver al Índice](#índice)

Este módulo nos permite definir, emitir y escuchar eventos para saber cuando ocurren. Para utilizarlo, debemos requerirlo con `const EventEmitter = require('events');`. Se le llama así porque así se llama la función que retorna el módulo.

Para emitir eventos, debemos asignarle el nuevo EventEmitter a una constante cuyo nombre sea representativo del evento. Por ejemplo:

```javascript
const EventEmitter = require("events");

const emisorProductos = new EventEmitter();

// asociamos el evento 'compra' al emisor
emisorProductos.on("compra", () => {
  console.log("Se realizó una compra.");
});

emisorProductos.emite("compra"); // Se ejecutará el callback anteriormente definido para el evento "compra"
```

## 4.3 Promesas con JavaScript

[Volver al Índice](#índice)

Una **promesa** es un objeto que representa el eventual resultado o error de una operación asíncrona. Una promesa es un objeto de JavaScript, que se denomina normalmente **Función callback**, haciendo alusión a que se espera la respuesta de un evento anterior. Estas callback pueden definirse formalmente como una función que se pasa a otra función como argumento, y que luego se ejecuta dentro de la función externa.

Las promesas tienen un método **.then()**, con el cual podemos decidir qué ocurre cuando se completa la promesa, ya sea con éxito o con un error.

### 4.3.1 Prácticas de promesas

[Volver al Índice](#índice)

Para crear una promesa, debemos hacer el siguiente proceso:

```javascript
const promesaCumplida  true;

const miPromesa = new Promise((resolve, reject) => {
  setTimepout(() => {
    //Creamos esto para simular la demora en el cumplimiento
    if (promesaCumplida) {
      resolve("¡Promesa cumplida!");
    } else {
      reject("Promesa rechazada...");
    }
  }, 3000);
});

// // Ahora hacemos que la promesa se ejecute
// miPromesa.then((valor) => {
//   console.log(valor);
//   // valor toma el valor que retorne la promesa
//   //Acá no se manejan los errores
// });

const manejarPromesaCumplida = (valor) => {
  console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) => {
  console.log(razonRechazo)
};

// Ahora si tenemos manejo de errores
miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);
```

También podemos hacer el manejo de errores encadenando **.then()** del siguiente modo:

```javascript
miPromesa
  .then((mensajeExito) => {
    console.log(mensajeExito);
  })
  .then(null, (mensajeError) => {
    console.log(mensajeError);
  });
```

## 4.4 .catch()

[Volver al Índice](#índice)

**.catch()** es un método de promesa que solo se ejecuta si la promesa es rechazada. Lo que hacemos es trabajar como cuando encadenamos los **.then()**, del siguiente modo:

```javascript
miPromesa
  .then((mensajeExito) => {
    console.log(mensajeExito);
  })
  .catch((mensajeError) => {
    // Notese que se eliminó el null
    console.log(mensajeError);
  });
```

Otra forma de hacerlo, es definiendo las funciones de manejo de éxito y error, y haciendo: `miPromesa.then(manejarPromesaCumplida).catch(manejarPromesaRechazada);`. Esta alternativa suele ser usada cuando la lógica de las funciones de manejo de error y éxito es más extensa.

## 4.5 Encadenar promesas y async await

[Volver al Índice](#índice)

**async** y **await** son dos palabras claves que podemos utilizar para el trabajo con promesas. En cuanto al **encadenamiento de promesas**, lo que se hace básicamente es crear varias promesas, y colocarlas una a continuación de otra, en una cadena de **.then()**, de modo tal que, si la ejecución de la promesa es exitosa, se pasa al primer **.then()**, luego al segundo y así sucesivamente hasta terminar el proceso.

La ventaja de usar async y await estás en que podemos escribir código asíncrono como si fuera código síncrono. Para hacer esto, comenzamos escribiendo la sintaxis propia de una función, con la diferencia de que se agrega **async** al principio. Luego escribimos el código de la función como si fuera síncrona, pero agregando la palabra **await** al principio, tal cual se ve en el ejemplo:

```javascript
function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto}`);
    setTimeout(() => {
      if (producto === "taza") {
        resolve("Ordenando una taza");
      } else {
        reject("Este producto no está disponible");
      }
    });
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve) => {
    console.log("Procesando respuesta...");
    console.log(`La respuesta fue: ${respuesta}`);
    setTimeout(() => {
      resolve("Gracias por tu compra");
    }, 4000);
  });
}

async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log("Respuesta recibida");
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (err) {
    console.log(err);
  }
}

realizarPedido("taza");
```

**try** y **catch** se usan para manejar errores, colocando entre las llaves de **try** el código que pueda generar problemas, y en **catch** el manejo del error.

# Capítulo 5: HTTP y rutas en Node.js

[Volver al Índice](#índice)

## 5.1 Modelo cliente-servidor

[Volver al Índice](#índice)

Este modelo es el que usamos para acceder a internet y obtener recursos e información. Un **Cliente** se puede definir como el navegador desde el cual se realizar solicitudes a un servidor, mientras que el término **Servidor** hace referencia tanto al programa que se ejecuta, como al aparato físico que lo contiene, y que en conjunto ofrecen ese servicio al cliente, enviándole la información que este solicita.

Si bien la información que estos se envían está codificada de distinta forma, entre ambos se entienden, debido a que el servidor conoce el formato esperado por el cliente, y el cliente conoce el formato en que recibirá la información. Ambos saben qué esperar el uno del otro.

En cuanto al formato de los mensajes, es el **protocolo HTTP** quien define su formato, y cuyo significado es **HiperText Transfer Protocol**. Un **protocolo** es, básicamente, un conjunto de reglas que permiten transmitir información entre dispositivos de una red.

## 5.2 Solicitudes HTTP

[Volver al Índice](#índice)

Para realizar la comunicación entre servidor y cliente, deben darse las **solicitudes** y **respuestas**. El pedido o solicitud del cliente, denominado **request**, le envía al servidor los métodos HTTP, el camino (path), la versió de HTTP, las cabeceras o headers, y el cuerpo o body, con toda la información al respecto de la solicitud que está realizando.

El **body** contiene la información que debe ser enviada al servidor para procesar la solicitud. Normalment esa información se transmite en formato JSON. No se incluye el body en todas las solicitudes, sino solo en aquellas que requieran enviar información. Por ejemplo, en los métodos POST y PUT.

HTTPS es lo mismo, pero con una capa extra de seguridad.

## 5.3 Métodos HTTP

[Volver al Índice](#índice)

Es un vero o sustantivo, que indica qué quiere el cliente. Los más utilizados son

- GET: Significa obtener, y nos permite justamente solicitar un recurso específico, como un archivo HTML, CSS o una imagen.
- POST: Sirve para crear un recurso específico, como al crear un nuevo usuario en una BDD.
- PUT: Se usa para modificar un recurso específico, por ejemplo, modificando los datos del usuario anterior.
- DELETE: Sirve para eliminar un recurso específico. Por ejemplo, eliminar al usuario de la base de datos.

## 5.4 Respuestas HTTP

[Volver al Índice](#índice)

Una vez que el cliente realiza su pedido y el servidor la procesa, envía el **response**, el cual tiene, dentro de sus elementos específicos, un código de estado, un texto de estado, la versión de HTTP, headers y el body. En este caso, los **headers** son opcionales, y proveen información adicional sobre la respuesta, mientras que el **body** contiene la información que se debe enviar desde el servidor hacia el cliente.

## 5.5 Códigos de estado HTTP

[Volver al Índice](#índice)

Estos códigos son muy importantes para saber qué sucedió con la solicitud dentro de el servidor. Estos **códigos de estado** son números que indican, o bien si se completo exitosamente la solicitud HTTP, o bien qué fue lo que salió mal. Básicamente, los códigos se dividen en:

- 100-199: Respuestas informativas.
- 200-299: Respuestas satisfactorias.
- 300-399: Redirecciones.
- 400-499: Errores de los clientes.
- 500-599: Errores de los servidores.

Podemos econtrar el significado del código en la web de MDN. Con Node.js y Express podemos especificar el código de estado de la respuesta HTTP en nuestro servidor. Los más comunes son:

- 200 OK - La respuesta fue exitosa;
- 400 Bad Request - El servidor no pudo interpretar la solicitud;
- 404 Not Found - El servidor no pudo encontrar el recurso solicitado;
- 500 Internal Server Error - El servidor encontró una situación que no sabe cómo manejar.

## 5.6 Tu primer servidor con Node.js

[Volver al Índice](#índice)

Para esto, usaremos el **módulo http**, que le permite a Node.js transmitir información con el protocolo HTTP. Debemos incluirlo con `const http = require('http')`.

Para cargar el servidor, necesitaremos un **puerto**, una ubicación virtual del sistema operativo en la cual se puede acceder a una aplicación o a un proceso específico que se esté ejecutando en ese puerto. Se representa con un número entero positivo

Un modelo básico de servidor, muy básico aunque funcional, sería:

```javascript
const htt = require("http");
const PORT = 3000;

const servidor = http.reateServer((req, res) => {
  // req contiene la solicitud HTTP
  // res representa la respuesta HTTP
  // Acá va todo el código para procesar la solicitud
  res.end("Servidor funcionando");
});

servidor.listen(PORT, () => {
  console.log("Servidor escuchando...");
});
```

## 5.7 req y res

[Volver al Índice](#índice)

Tanto **req** como **res** tienen montón de atributos , pero nosotros vamos a ver algunos de los más importantes:

Para **req** tenemos:

- req.url: La URL solicitada (sin el dominio ni el protocolo).
- req.method: El método utilizado en la petición (GET, POST, etc.). Para otros métodos, nos recomiendan del curso utilizar la extensión REST Client, que nos permitirá simular envío de solicitudes para ver qué obtendremos de la solicitud enviada.
- req.headers: Los headers enviados por el cliente.

Para **res** tenemos:

- res.setHeader(): Establecer un header a enviar, información adicional que queremos enviar al cliente.
- res.getHeaders(): Nos permite obtener los headers que se hayan enviado.
- res.writeHead(): Establece los headers y el status code a enviar.
- res.write(): Agrega datos a la respuesta. Se pueden llamar varias veces.
- res.end(): Termina la respuesta y envía los datos agregados con write().
- res.send(): Se envía un respuesta estandarizada.
- res.statusCode: Nos dá el código de estado de la respuesta que nos llega

## 5.8 Estructura de una URL

[Volver al Índice](#índice)

Una URL es la dirección de un recurso en la web. En español, significa _Localizador Uniforme de Recursos_. Básicamente, nos permite indicar cual es la página con la cual queremos interactuar. Sus partes son:

- **https://**: Indica el protocolo de conexión que se usará.
- **www**: Es un subdominio, información adicional que permite a los sitos web organizar y separar la información para distintos propósitos.
- **Dominio**: Referencia única a un sitio web, que corresponde al nombre de la página.
- **Dominio de nivel superior**: Va despues del dominio. Ejemplos son _.org_, _.com_, _.net_, _.edu_, _.gob_, y _.int_. Se suele hacer referencia a esta parte como TLD o Top-Level Domain.
- **Camino (path)**: Indica a dónde se desea ir luego de estár en el archivo raíz de la web, archivo raíz indicado por todo el conjunto anterior. Cada parte del path se va indicando separado de la anterior por un slash (/).
- **Parámetros de ruta**: Son parámetros fijos que nos permiten acceder a una parte específica del sitio, por ejemplo, el número de código de un producto para mostrar su correspondiente vista.
- **Parámetros query**: Son parámetros que permiten realizar una búsqueda para obtener contenido dinámico. Se conocen tambien como _query string_. Su estructura es: `?q=cursos+de+node`. Estos son pares clave-valor que se utilizan para buscar los contenidos solicitados dentro del servidor. Podemos colocar varios de ellos, separándolos entre sí por un **&**. Normalmente se utilizan para filtrar solicitudes GET.

## 5.9 El módulo url

[Volver al Índice](#índice)

El módulo URL nos permite escribir URL mediante cadenas de caracteres, haciéndo `const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1')`. Esto nos permite acceder a las distintas propiedades del objeto, con propiedades como:

- miURL.hostname: En este caso, sería _www.ejemplo.org_.
- miURL.pathname: En este caso, sería _/cursos/programacion_.
- miURL.searchParams: Este nos retorna un objeto que contiene los distintos parámetros. Para este caso, sería _{ 'ordenar' => 'vistas', 'nivel' => '1' }_. Podemos acceder a sus propiedades usando **miURL.searchParams.get('ordenar')**.

## 5.10 Routing en Node.js

[Volver al Índice](#índice)

**Routing** significa manejar las solicitudes del cliente hacia el navegador en base a ciertos criterios. Estos criterios son:

- **El Método**: Es un verbo que describe el método de la solicitud HTTP. De esta forma, es servidor sabe qué tipo de operación se realizará.
- **El Camino**: Indica al servidor el path o camino de la solicitud HTTP. Así, el servidor sabe el recurso específico que se usará.

En general, esto se puede describir como una combinación de estas tres cosas: **Método + Path + Cómo manejarlo**. Ahora, veremos un ejemplo de cómo se haría con Node.js, pero veremos luego que, con Express, esto es mucho más sencillo de hacer.

Lo primero que haremos, será establecer una pequeña base de datos con la cual trabajaremos:

```javascript
let infoCursos = {
  programacion: [
    {
      id: 1,
      titulo: "Aprende Python",
      lenguaje: "python",
      vistas: 15000,
      nivel: "basico",
    },
    {
      id: 2,
      titulo: "Python intermedio",
      lenguaje: "python",
      vistas: 13000,
      nivel: "intermedio",
    },
    {
      id: 3,
      titulo: "Aprende JavaScript",
      lenguaje: "javascript",
      vistas: 18000,
      nivel: "basico",
    },
  ],
  matematicas: [
    {
      id: 1,
      titulo: "Aprende Calculo",
      lenguaje: "calculo",
      vistas: 9000,
      nivel: "basico",
    },
    {
      id: 2,
      titulo: "Aprende Algebra",
      lenguaje: "algebra",
      vistas: 12000,
      nivel: "intermedio",
    },
  ],
};

module.exports.infoCursos = infoCursos;
```

Ahora si, vemos el ejemplo de servidor con Node.js:

```javascript
const http = require("http");
const cursos = require("./cursos");
const PORT = 3000;

const servidor = http.createServer((req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return manejarSolicitudGET(req, res);
    default:
      console.log(`El método no puede ser manejado por el servidor: ${method}`);
  }
});

function manejarSolicitudGET(req, res) {
  const path = req.url;

  if (path === "/") {
    res.statusCode = 200;
    return res.end("Bienvenidos a mi primer servidor y API creado con Node.js");
  } else if (path === "/cursos") {
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos));
  } else if (path === "/cursos/programacion") {
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos.programacion));
  } else {
    res.statusCode = 404;
    return res.end("El recurso solicitado no existe");
  }
}

servidor.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}...`);
});
```

Para manejar más tipos de solicitudes, como POST, por ejemplo, simplemente agregaríamos más funciones de _manejarSolicitud_ seguida del tipo de solicitud que queramos manejar.

# Capítulo 6: Nodemon

[Volver al Índice](#índice)

**Nodemon** es una herramienta que reinicia la aplicación de Node cuando detecta algún cambio en los archivos. Esto nos permitirá que el servidor se reinicie de forma automática y automáticamente podamos ver los cambios que implementamos, sin necesidad de estar parando y reiniciando el servidor. Para instalarlo, debemos ejecutar el comando siguiente en el terminal: `npm install -g nodemon`. La **-g** hará que nodemon se instale como un comando global, pudiendo ser utilizado en todos los proyectos que lo necesitemos, y, para usarlo, en el terminal escribiremos `nodemon app.js`, o con el nombre del archivo que estemos utilizando.

# Capítulo 7: Express

[Volver al Índice](#índice)

## 7.1 Introducción a Express

[Volver al Índice](#índice)

**Express** es el framework web más populas de Node.js, que permite desarrollar servidores de forma mucho más sencilla. Al 01/05/2024, cuenta con más de 29 millones de descargas. Su propóstio principal es ayudar a desarrollar aplicaciones con Node.js, por lo cual, entre sus **características**, encontramos que:

- Simplifica el Routing.
- Está enfocado en proveer un alto rendimiento.
- ermite desarrollar aplicaciones de Node.js más rápidamente, con código más conciso.

## 7.2 Conceptos importantes

[Volver al Índice](#índice)

- **CRUD**: Es un acrónimo para _Create, Read, Update y Delete_, un conjunto de operaciones básicas que se pueden realizar con la información que tenemos almacenada.
- **APIs**: Es un acrónimo que significa _Aplication Programming Interface_. Son herramientas o interfaces programadas para interactuar con una base de datos, que permiten que dos o más programas se comuniquen entre sí. Esto nos permite que un software ofrezca servicios a otro software. No se usan directamente por el usuario, sino que las usa el programador para implementar el programa de la API en su programa. Normalmente trabajan en formato JSON.
- **REST**: Es un estilo de arquitectura de software para sistemas hipermedia distribuidos, como lo es la World Wide Web.
- **RESTful API** Es una API basada en REST.
- **middleware**: Es un software con el que las diferentes aplicaciones se comunican entre sí, que puede trabajar como una funcionalidad intermedia para ciertos procesos de la aplicación, tales como la validación de datos cargados por el usuario o el control de los permisos de acceso del mismo. Esto permite modularizar esas pequeñas funcionalidades, desarrollando así aplicaciones de manera más eficiente e inteligente, además de poder innovar más fácil y rápidamente sobre las mismas.

## 7.3 Crear un proyecto con Express

[Volver al Índice](#índice)

Para crear un nuevo proyecto con Express, luego de instalarlo en la carpeta correspondiente, debemos colocar las siguientes líneas:

```javascript
const express = require("express");
const app = express();
const { infoCursos } = require("./cursos");
```

**app** será la que tendrá todas las funcionalidades de Express que necesitaremos para trabajar. Como podemos ver, también usaremos la pequeña BDD de cursos que habíamos definido anteriomente.

## 7.4 Primeros pasos con Express

[Volver al Índice](#índice)

Luego de cargar Express en nuestro entry point, debemos configurar el servidor para que esté escuchando. Para eso, agregamos las siguientes líneas a continuación de las que ya teníamos:

```javascript
const PORT = process.env.PORT || 3000;
// process.env.PORT buscará en el ambiente a ver si se asignó o definió un puerto (Etapa de producción), y, si no, le asignará el puerto 3000

app.get("/", (req, res) => {
  res.send("Mi primer servidor. Cursos 💻.");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}...`);
});
```

## 7.5 Agregar rutas en Express

[Volver al Índice](#índice)

Ahora, agregamos algunas rutas para mostrar el contenido de la BDD de cursos. En este caso, las colocamos debajo de la ruta **app.get('/')**, pero siempre encima del **app.listen**:

```javascript
app.get("/api/cursos", (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

app.get("/api/cursos/programacion", (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion));
});

app.get("/api/cursos/matematicas", (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas));
});
```

## 7.6 Parámetros de Ruta

[Volver al Índice](#índice)

En caso de que quisieramos agregar parámetros para la búsqueda de ciertas vistas o archivos, podemos hacerlo del siguiente modo: Agregamos, debajo de cada 'paquete' de rutas las siguientes líneas de código:

```javascript
// Justo debajo de la ruta "/api/cursos/programacion"
app.get("/api/cursos/programacion/:lenguaje", (req, res) => {
  let lenguaje = req.params.lenguaje; // req.params nos permite acceder a los parámetros de la URL
  const resultados = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  );

  // Ahora creamos un condicional para el manejo de errores
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }
  res.send(JSON.stringify(resultados));
});
```

```javascript
// Justo debajo de la ruta "/api/cursos/matematicas"
app.get("/api/cursos/matematicas/:tema", (req, res) => {
  let tema = req.params.tema; // req.params nos permite acceder a los parámetros de la URL
  const resultados = infoCursos.matematicas.filter(
    (curso) => curso.tema === tema
  );

  // Ahora creamos un condicional para el manejo de errores
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }
  res.send(JSON.stringify(resultados));
});
```

Ahora, en caso de que quisieramos tener más parámetros de filtrado desde la URL, haríamos lo siguiente:

```javascript
app.get("/api/cursos/programacion/:lenguaje/:nivel", (req, res) => {
  let lenguaje = req.params.lenguaje;
  let nivel = req.params.nivel;
  const resultados = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  );

  // Ahora creamos un condicional para el manejo de errores
  if (resultados.length === 0) {
    return res
      .status(404)
      .send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
  }
  res.send(JSON.stringify(resultados));
});
```

Deberíamos colocar esta ruta a continuación de _/api/cursos/programacion/:lenguaje_, y hacer lo mismo para el respectivo filtrado por nivel de los cursos de matemáticas del ejemplo que venimos trabajando.

## 7.7 Parámetros query

[Volver al Índice](#índice)

Como vimos, estos parámetros están incluidos al final de la URL. Estos parámetros pueden o no incluirse en la URL. Por ejemplo, si quisieramos ordenar los resultados en base a algún parámetro, como la cantidad de vistas, modificaríamos la función de búsqueda de cursos de programación del siguiente modo:

```javascript
app.get("/api/cursos/programacion/:lenguaje", (req, res) => {
  let lenguaje = req.params.lenguaje; // req.params nos permite acceder a los parámetros de la URL
  const resultados = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  );

  // Ahora creamos un condicional para el manejo de errores
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  // Acá agregamos el ordenamiento
  if (req.query.ordenar === "vistas") {
    // req.query nos permite obtener las query strings
    return res.send(
      JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)) // Ordenamos de forma ascendente
    );
  } else {
    return res.send(JSON.stringify(resultados));
  }
});
```

Si quisieramos que esta funcionalidad esté persente en más rutas, bien podríamos agregarla a cada una de ellas, o bien crear una función de ordenamiento y luego implementarlas. Esta última opción sería la más óptima.

## 7.8 Routers en Express

[Volver al Índice](#índice)

Los **Routers** son muy utiles, dado que nos permiten reutilizar ciertas rutas, lo que nos permitirá crear una especie de ramificación de rutas. Así, por ejemplo, pdoríamos utilizar todas las rutas de _/api/cursos/programacion_ en un solo router, y no tener que estarla repitiendo en cada uno de los _app.get_ que vamos declarando. Estos se suelen colocar en un archivo aparte, llamado **descripcionRoutes.js**, donde **descripción** sería el nombre de las rutas que contiene, por ejemplo, _cursosProgramacionRoutes.js_. Esta disposición en diferentes archivos se hace cuando se utiliza el **Modelo Vista Controlador**. En este caso, para mantener la sencilles de los ejemplos, se hará dentro del mismo código que veníamos trabajando. La modificación sería la siguiente:

```javascript
const routerProgramacion = express.Router(); // Creamos el router específico para programación
app.use("/api/cursos/programacion", routerProgramacion); // Asignamos la ruta al router

// Ruta principal
app.get("/", (req, res) => {
  res.send("Mi primer servidor. Cursos 💻.");
});

app.get("/api/cursos", (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

// Sección de rutas para cursos de programacion
routerProgramacion.get("/", (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion));
});

routerProgramacion.get("/:lenguaje", (req, res) => {
  let lenguaje = req.params.lenguaje; // req.params nos permite acceder a los parámetros de la URL
  const resultados = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  );

  // Ahora creamos un condicional para el manejo de errores
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  // Acá agregamos el ordenamiento
  if (req.query.ordenar === "vistas") {
    // req.query nos permite obtener las query strings
    return res.send(
      JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)) // Ordenamos de forma ascendente
    );
  } else {
    return res.send(JSON.stringify(resultados));
  }
});

routerProgramacion.get("/:lenguaje/:nivel", (req, res) => {
  let lenguaje = req.params.lenguaje;
  let nivel = req.params.nivel;
  const resultados = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  );

  // Ahora creamos un condicional para el manejo de errores
  if (resultados.length === 0) {
    return res
      .status(404)
      .send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
  }

  // Ordenamiento
  if (req.query.ordenar === "vistas") {
    // req.query nos permite obtener las query strings
    return res.send(
      JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)) // Ordenamos de forma ascendente
    );
  } else {
    return res.send(JSON.stringify(resultados));
  }
});
```

### 7.8.1 Estado del archivo hasta el momento

Hasta ahora, en base a lo que venimos trabajando en nuestro archivo, todo su contenido sería el siguiente:

```javascript
const express = require("express");
const app = express();
const { infoCursos } = require("./cursos");
const PORT = process.env.PORT || 3000;
// process.env.PORT buscará en el ambiente a ver si se asignó o definió un puerto (Etapa de producción), y, si no, le asignará el puerto 3000

// Routers
const routerProgramacion = express.Router(); // Creamos el router específico para programación
app.use("/api/cursos/programacion", routerProgramacion); // Asignamos la ruta al router

const routerMatematicas = express.Router(); // Creamos el router específico para programación
app.use("/api/cursos/matematicas", routerMatematicas); // Asignamos la ruta al router

// Ruta principal
app.get("/", (req, res) => {
  res.send("Mi primer servidor. Cursos 💻.");
});

app.get("/api/cursos", (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

// Sección de rutas para cursos de programacion
routerProgramacion.get("/", (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion));
});

routerProgramacion.get("/:lenguaje", (req, res) => {
  let lenguaje = req.params.lenguaje; // req.params nos permite acceder a los parámetros de la URL
  const resultados = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  );

  // Ahora creamos un condicional para el manejo de errores
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  // Acá agregamos el ordenamiento
  if (req.query.ordenar === "vistas") {
    // req.query nos permite obtener las query strings
    return res.send(
      JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)) // Ordenamos de forma ascendente
    );
  } else {
    return res.send(JSON.stringify(resultados));
  }
});

routerProgramacion.get("/:lenguaje/:nivel", (req, res) => {
  let lenguaje = req.params.lenguaje;
  let nivel = req.params.nivel;
  const resultados = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  );

  // Ahora creamos un condicional para el manejo de errores
  if (resultados.length === 0) {
    return res
      .status(404)
      .send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
  }

  // Ordenamiento
  if (req.query.ordenar === "vistas") {
    // req.query nos permite obtener las query strings
    return res.send(
      JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)) // Ordenamos de forma ascendente
    );
  } else {
    return res.send(JSON.stringify(resultados));
  }
});

// Sección de rutas para cursos de matemáticas

routerMatematicas.get("/", (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas));
});

routerMatematicas.get("/:tema", (req, res) => {
  let tema = req.params.tema;
  const resultados = infoCursos.matematicas.filter(
    (curso) => curso.tema === tema
  );

  // Ahora creamos un condicional para el manejo de errores
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }

  // Ordenamiento
  if (req.query.ordenar === "vistas") {
    // req.query nos permite obtener las query strings
    return res.send(
      JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)) // Ordenamos de forma ascendente
    );
  } else {
    return res.send(JSON.stringify(resultados));
  }
});

routerMatematicas.get("/:tema/:nivel", (req, res) => {
  let tema = req.params.tema;
  let nivel = req.params.nivel;
  const resultados = infoCursos.matematicas.filter(
    (curso) => curso.tema === tema && curso.nivel === nivel
  );

  // Ahora creamos un condicional para el manejo de errores
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }

  // Ordenamiento
  if (req.query.ordenar === "vistas") {
    // req.query nos permite obtener las query strings
    return res.send(
      JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)) // Ordenamos de forma ascendente
    );
  } else {
    return res.send(JSON.stringify(resultados));
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}...`);
});
```

## 7.9 Routers en distintos archivos

[Volver al Índice](#índice)

Para estructurar el proyecto, lo mejor es crear una carpeta llamada **routers**, en la cual deberemos crear archivos para cada rama de rutas (en nuestro ejemplo, _routesProgramación.js_ y _routesMatemáticas.js_), y dentro de cada uno de ellos deberemos crear la aplicación Express tal cual vimos, colocando dentro suyo las distintas rutas que veníamos creando, y exportando luego las aplicaciones para poder utilizarlas en el entry point.

```javascript
// app.js
const express = require("express");
const app = express();
const { infoCursos } = require("./datos/cursos");
const PORT = process.env.PORT || 3000;

// Routers
const routerProgramacion = require("./routers/rutasProgramacion");
const routerMatematicas = require("./routers/rutasMatematicas");
app.use("/api/cursos/programacion", routerProgramacion);
app.use("/api/cursos/matematicas", routerMatematicas);

// Ruta principal
app.get("/", (req, res) => {
  res.send("Mi primer servidor. Cursos 💻.");
});

app.get("/api/cursos", (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}...`);
});
```

```javascript
// rutasProgramacion.js
const express = require("express");
const { programacion } = require("../datos/cursos").infoCursos;

const routerProgramacion = express.Router();

routerProgramacion.get("/", (req, res) => {
  res.send(JSON.stringify(programacion));
});

routerProgramacion.get("/:lenguaje", (req, res) => {
  let lenguaje = req.params.lenguaje; // req.params nos permite acceder a los parámetros de la URL
  const resultados = programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  );

  // Ahora creamos un condicional para el manejo de errores
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  // Acá agregamos el ordenamiento
  if (req.query.ordenar === "vistas") {
    // req.query nos permite obtener las query strings
    return res.send(
      JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)) // Ordenamos de forma ascendente
    );
  } else {
    return res.send(JSON.stringify(resultados));
  }
});

routerProgramacion.get("/:lenguaje/:nivel", (req, res) => {
  let lenguaje = req.params.lenguaje;
  let nivel = req.params.nivel;
  const resultados = programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  );

  // Ahora creamos un condicional para el manejo de errores
  if (resultados.length === 0) {
    return res
      .status(404)
      .send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
  }

  // Ordenamiento
  if (req.query.ordenar === "vistas") {
    // req.query nos permite obtener las query strings
    return res.send(
      JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)) // Ordenamos de forma ascendente
    );
  } else {
    return res.send(JSON.stringify(resultados));
  }
});

module.exports = routerProgramacion;
```

A fines de no extender más el código, se aclara que, aunque no se incluya el archivo, lo mismo se hizo con _rutasMatematicas.js_. Nótese también que se cambió la ubicación de _cursos.js_ a la carpeta _datos_.

### 7.9.1 Controllers

Siguiendo el **patrón Modelo Vista Controlador**, podríamos crear otra carpeta, llamada **controller**, en la cual crearíamos los archivos de los controladores correspondientes (en nuestro ejemplo, _programaciónController.js_ y _matemáticasController.js_), y dentro de cada uno de ellos, en un objeto literal, crear las distintas funciones para cada una de las rutas que deseemos trabajar. Por último, deberemos también exportar los controllers.

### 7.9.2 Uso según el patrón MVC

Para poder hacer uso de la estructura de archivos del **Patrón M-V-C**, lo que deberemos hacer será, de primeras, requerir los controladores en los archivos de rutas, y luego crear los **router.get** (o cualquier otro método que utilicemos) que necesitemos, y asignarle a cada uno de ellos las funciones que necesitamos desde el controller.

Por ultimo, debemos requerir los archivos de ruta en el entry point, y con el uso de los **app.use**, crear los routers correspondientes, tal cual lo vimos anteriormente.

Así, tendremos un programa mucho más modularizado, que nos permitirá, por un lado, tener una mucho más facil lectura e interpretación del código, y, por otro, facilitará el mantenimiento, las mejoras y la innovación en las diferentes secciones del código, ya que, supongamos, si fallan las rutas hacia los cursos de programación, en vez de revisar cientos o miles de líneas de código, simplemente deberemos buscar el archivo de rutas de programación, modificar lo que haga falta, y listo, mucho más sencillo.

## 7.10 POST, PUT, PATCH y DELETE

[Volver al Índice](#índice)

Ahora veremos como implementar los distintos métodos de programación. Partiremos de la base del proyecto anterior. Para fines prácticos, solo trabajaremos sobre el archivo _rutasProgramacion.js_, pero se da a entender que se deberá hacer lo mismo en todos los archivos de rutas del proyecto.

### 7.10.1 Método POST

Trabajaremos ahora en el archivo _rutasProgramacion.js_. Lo primero que haremos será incluir esta línea, a continuación de la línea en que definirmos _const routerProgramacion_: `routerProgramacion.use(express.json());`. Esto nos permitirá procesar el cuerpo de la solicitud y trabajar con él. Luego, hacemos la siguiente modificación debajo del último enrutador GET que teníamos:

```javascript
// Agregar un nuevo curso
routerProgramacion.post("/", (req, res) => {
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.send(JSON.stringify(programacion));
});
```

Para hacer el envío de la modificación, colocamos las siguientes líneas en un archivo llamado _index.http_, dentro de la ruta raíz del proyecto. Esto nos permitirá ver, con una extensión, qué retorna como respuesta la solicitud:

```javascript
POST http://localhost:3000/api/cursos/programacion HTTP/1.1
Content-Type: application/json

{
    "id": 4,
    "titulo": "Aprende Node.js",
    "lenguaje": "javascript",
    "vistas": 45676,
    "nivel": "basico"
}
```

### 7.10.2 Método PUT

Este método nos permite actualizar entidades de la BDD. Con este método se debe enviar los datos completos de la entidad, y solo se modificaran los que se hayan cambiado. Debemos trabajarlo del siguiente modo:

```javascript
// Modificar los datos de un curso
routerProgramacion.put("/:id", (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id;
  // Buscamos el curso según el índice que nos retornen
  const indice = programacion.findIndex((curso) => (curso.id = id));

  // Si se encontró el índice, se modifican los datos del curso
  if (indice >= 0) {
    programacion[indice] = cursoActualizado;
    res.send(JSON.stringify(programacion));
  }
});
```

Para ver la respuesta de la solicitud, nuevamente colocamos en el archivo _index.http_ lo siguiente:

```javascript
PUT http://localhost:3000/api/cursos/programacion/2 HTTP/1.1
Content-Type: application/json

{
    "id": 2,
    "titulo": "Python intermedio con proyectos",
    "lenguaje": "python",
    "vistas": 123996,
    "nivel": "intermedio",
}
```

<blockquote>Esta parte me estaba dando un error. Recuerdo que los profes nos comentaron que había algun error o problema con los métodos PUT, PATCH y DELETE. Revisar más adelante.</blockquote>

### 7.10.3 Método PATCH

Este método nos permite enviar información parcial para una determinada entidad. El código sería:

```javascript
routerProgramacion.patch("/:id", (req, res) => {
  const infoActualizada = req.params.id;

  const indice = programacion.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    const cursoAModificar = programacion[indice];
    Object.assign(cursoAModificar, infoActualizada);
  }
  res.send(JSON.stringify(programacion));
});
```

Para ver la respuesta de la solicitud, en _index.http_ pondríamos:

```javascript
PATCH http://localhost:3000/api/cursos/programacion/2 HTTP/1.1
Content-Type: application/json

{
    "titulo": "Python intermedio con proyectos",
    "vistas": 123996,
}
```

<blockquote>Me da el mismo error que el anterior. Deberé revisar los programas ya creados y corregir estos problemas luego.</blockquote>

### 7.10.3 Método DELETE

Para eliminar una entidad, deberíamos hacer la siguiente sucesión de código:

```javascript
routerProgramacion.delete("/:id", (req, res) => {
  const id = req.params.id;
  const indice = proramacion.findIndexcurso((curso) => curso.id == id);
  if (indice >= 0) {
    programacion.splice(indice, 1);
  }
  res.send(JSON.stringify(programacion));
  // También se podría enviar como _res.json(programacion)_
});
```

En cuanto a ver la respuesta de la solicitud, en _index.http_ haríamos:

```javascript
DELETE http://localhost:3000/api/cursos/programacion/2 HTTP/1.1
```

<blockquote>Me da el mismo error que el anterior. Deberé revisar los programas ya creados y corregir estos problemas luego.</blockquote>
