# Clase sobre armado del login

## Session

Las **sessions** permiten, básicamente, establecer información específica de acuerdo con cada usuario. Para poder hacer esto, lo que se hace es guardar un identificador del usuario en su navegador, el cual será enviado desde el navegador hacia el servidor cada vez que estos interactúen, para que así el servidor sepa específicamente qué enviar a ese cliente. Cuando el usuario cierra el navegador o cambia de máquina, esta información se borra del navegador, y el usuario deberá volver a cargarla cuando vuelva a abrir su sesión en otro navegador, o en el mismo luego de haberlo cerrado.

### Express Session

Como no, vamos a usar partes de express para esta parte. Para ello, instalamos la librería con `npm install express-session --save`. Luego, lo incluimos en el proyecto dentro del **entry point** con `const session = require('express-session');`, y lo declaramos como middleware en el proyecto, utilizando `app.use(session({secret: 'Esto es un secreto pa'}))`. El texto que guardamos dentro de la propiedad del objeto que pasamos como parámetro a **session** funcionará como un identificador de ello, haciendo que la identificación de la sesión en el navegador sea mucho más segura.

Así, por ejemplo, podríamos declarar `req.session.idioma = 'Español'` dentro de un controler, y quedaría siempre con esa información declarada cuando naveguemos entre páginas del mismo sitio.

## Cookies

Una cookie es un archivo que se guarda del lado del cliente, y cuyo objeto principal es guardar información no sensible facilmente recuperable desde la aplicación. Esta información trabaja como el **session**, pero permaneciendo en el navegador un tiempo determinado, que es determinado por el desarrollador. Esta información, por tanto, queda guardada en el navegador del cliente. En **Node**, las cookies se implementan con el paquete **Cookie parser**, que se instala solo si usamos **Express Generator**.

Para guardar una cookie, lo hacemos con `res.cookie('recordame', usuarioALoguerse.email, {maxAge: 60000});`. Para leerlas, hacemos `req.cookies.recordame;`. La cookie del ejemplo es la que se usaría cuando el usuario tilda el checkbox de "Recordarme" al iniciar sesión, y tendrá una duración de 60 segundos. **usuarioALoguerse.email** sería el middleware que controla la lógica que controla que exista la cookie, y que no haya ningun usuario logueado al cargarlo.

## Hashing (Encriptado de datos)

Cuando tenemos información sensible, es fundamental guardarla encriptada, y no tal cual es escrita por el usuario. Esto es lo que se conoce como **hasheo**, y lo que se guarda es el **hash**, y no la contraseña escrita tal cual lo hizo el usuario. Para poder hacer esto, debemos instalar el paquete **bcryptjs**, ingresando en consola `npm install --save bcryptjs`, y luego lo requerimos donde vayamos a utilizarlo, con `let bcrypt = require('bcryptjs)`.

Para usarlo, debemos escribir `bcrypt.hashSync(password, 10);`. Esta función lleva dos parámetros: El texto a encriptar, y la cantidad de _sal_ que queremos darle al encriptado. La _sal_ es un número, que básicamente varía el hash. Lo normal es darle como valores 10 o 12.

Esto hace que, si una persona roba el archivo donde tenemos almacenados los datos, lo que encuentre en él será irrecuperable. Para poder utilizar luego la información, al momento de hacer, por ejemplo, la comparación entre contraseñas, tendríamos:

```javascript
const bcrypt = require("bcrypt");
const password = "contraseñaLoca123";

const resultadoEncr = bcrypt.hashSync(password, 10);
const valdiación = bcrypt.compareSync(password, resultadoEncr);
```

La comparación debe hacerse siempre entre texto plano y texto encriptado.

## Login completo
