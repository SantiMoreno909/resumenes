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

El **primer paso** es diseñar la API, pensando en qué elementos queremos compartir con los usuarios que accedan a ella. Generalmente, esto se hace representando a los mismos como sustantivos comunes. El **segundo paso** es crear los **identificadores** de estos recursos, que serán los URLs o Endpoint de acceso a los mismos. Esta URL suele ser representativa del nombre del elemento que se compartirá en ella.

Los elementos que se compartiran se llaman **Recursos**, y los paquetes que los engloban se llaman **Colecciones**. Un buen diseño de API Rest debería permitir a los usuarios acceder a un recurso particular, sin necesidad de acceder a toda la colección. Esto se hace mediante **id** específicas del recurso, que se utilizan en la URL, de modo similar a `/albumes/{id}`.

Otra forma de acceder a un recurso, es a través de otros recursos, de otras colecciones, que se relacionen con los recursos a los cuales queremos acceder. Por ejemplo, `/artistas/{id}/albumes`.

Lo más importante es que el diseño haga lo más cómodo posible el acceso a los recursos disponibles en la API.

El **tercer paso** es definir qué deberá devolver el Endpoint. La mayoría de las API Rest utilizan formato JSON, contienen el mismo link que usamos para acceder a ellas, información genérica (como la cantidad de elementos contenida), y otros datos dentro del array **data**. Esto se ve en el siguiente ejemplo:

```JSON
{
    "link": "http://domain.com/api/genres",
    "total_items": 5,
    "data": [
        {"id": 1, "name": "Rock", "link": "http://domain.com/api/genres/1"},
        {"id": 2, "name": "Pop", "link": "http://domain.com/api/genres/2"},
        {"id": 3, "name": "Blues", "link": "http://domain.com/api/genres/3"},
        {"id": 4, "name": "Jazz", "link": "http://domain.com/api/genres/4"},
        {"id": 5, "name": "Techno", "link": "http://domain.com/api/genres/5"},
    ]
}
```

El **cuarto y último paso** es asociar a los Endpoint con métodos HTTP para realizar operaciones. Así podrémos aplicar CRUD a los datos de la API Rest. Los métodos disponibles son GET, POST, PUT, PATCH y DELETE.
