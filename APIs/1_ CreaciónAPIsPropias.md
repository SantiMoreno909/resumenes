# Introducción a APIs

Una **Application Programing Interface** o API es básicamente una URL que devuelve información para que otro sistema la consuma. Estas APIs se desarrollan para que dos sistemas puedan comunicarse. Por ello, las mismas suelen estar documentadas, pudiendo ser _públicas_, _privadas_ y _semipúblicas_.

Cuando hablamos de APIs, **ENDPOINTS** hace referencia a la URL a la cual debemos apuntar para obtener la información que la API brinda. Así, una API puede tener varios puntos de salida para proveer de diferentes puntos de información.

## REST

Una **API REST** es un sistema a través del cual un front-end puede comunicarse con un back-end de forma más organizada y funcional, siempre apuntando a la optimización, velocidad y facilidad de uso del sistema.

Un **sistema REST** busca implementar un esquema o protocolo que le permita a todos los sistemas que se comunican con él entender en qué forma lo tienen que hacer y bajo qué estructura deberán enviar sus peticiones para que sean atendidas.

Podríamos decir que **REST es un protocolo**, tal como lo es el protocolo **HTTP**. Este tiene cuatro características fundamentales.

**La primera** de estas características **es separar la aplicación en dos**: por un lado, la interfaz de usuario en una aplicación, y, por otro, tener todo lo que la app provee como servicio que la interfaz consume.

**La segunda es la ubicación de los recursos**. Dado que el cliente suele tener necesidad de acceder al servidor, REST hace que, para acceder a los recursos, se pueda ir a los mismos dada una ruta o URL específica y única para cada recurso.

**La tercera es el Stateless o "Sin Estado"**, lo cual hace que el servidor no almacene datos sobre las peticiones del cliente. Así, cada petición será tratada como nueva y absolutamente independiente de cualquier otra. Esto hace que no exista nada similar a las sesiones de usuario.

**La cuarta** está relacionada con la anterior, y **es el cacheable**. Básicamente, que si no existe un estado, al rehacer una petición, se recibirá el mismo resultado. Los recursos se envían con un dato llamado **max-age**, que indica, en segundos, cuanto durará valido ese recurso.

Al analizar la vista que se brinda para el usuario, tenemos los **recursos**, que son los grupos de elementos que se proveen al usuario, tales como imagenes, audios, archivos, etc. Estos se encuentran en una URL específica para cada uno, que debería permitir acceder al recurso, así como también a los datos del mismo.

Cuando los datos son enviados en formato JSON, debe agregarse a las cabeceras un encabezado que indique el tipo de contenido, diciendo exactamente `'Content-Type': 'application/json'`.

Otra forma es enviarlos en formato **text**, y también en **URL-encoded**. Esto último significa que los datos se envían codificados en la URL.

Existe también un método de petición llamado **HEAD**, cuya función es conocer la última fecha de modificación del recurso. Si el cliente lo solicita, y ve que la fecha de modificación del recurso le es útil, puede entonces hacer una petición por GET para obtener los recursos.

## Creación de API propia
