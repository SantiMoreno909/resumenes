# Ciclo de vida de los componentes

## Componentes statefull

Los componentes stateful, o con estado, son aquellos que poseen información interna que a su vez puede ser modificada propiamente por estos componentes. Este tipo de componente es sumamente funcional dado que nos permite dejar de depender de las props para trabajar con información dinámica. Sin embargo, bajo esta consigna no debemos pensar que ahora todos nuestros componentes deberán ser "de estado", ya que dicha decisión dependerá del contexto dentro del que se utilice dicho componente. Un ejemplo útil para pensar en estados, es cuando una imagen reconoce un evento, como un click, y se le aplica un estilo onda "seleccionado".

Para poder generar estados en los componentes, deberemos importar React con la siguiente modificación: `import React, { Component } from 'react';`. Los componentes con estado dejan de ser componentes nativos de JS, y pasan a ser clases, un tipo de datos especial, sobre todo pensando en el paradigma POO. Para trabajarlos, debemos hacer:

```javascript
import React, { Component } from "react";

class Imagen extends Component {
  // Imagen es el nombre del componente
  render() {
    // Permite renderizar elementos estáticos
    return <img src="/imagen.jpg" alt="Imagen" />;
  }
}

export default Imagen;
```

El uso de los componentes dentro de las vistas que deseemos seguirá siendo como veníamos haciendolo.

## state y setState

El estado de un componente es aquel que permite que el mismo pueda guardar información internamente, de manera local, y que pueden variar a lo largo del tiempo. Al estado de un componente lo llamamos "state". Este es un objeto literal (clave/valor) que almacenará la información que deseemos. Por otro lado, el setState() es un método que nos va a permitir actualizar el estado cuando lo estimemos necesario, logrando así que sea el mismo componente quien se encargue de administrar esta información.

Para lograr esto, es necesario que el componente inicialice su estado en un valor determinado. Para lograr esto, es necesario implementar dentro de la clase un método llamado **constructor**. Este tomará la lógica del paquete _Component_. Dentro de este método, debemos escribir el método **super()**, que contiene toda la lógica que viene por defecto dentro del componente. Luego, indicamos el valor inicial de las propiedades de state en el objeto **this.state**

```javascript
import React, { Component } from "react";

class Contador extends Component {
  constructor() {
    super();
    this.state = {
      valor: 1,
    };
  }

  render() {
    return <h2> {this.state.valor} </h2>;
  }
}

export default Contador;
```

Para hacer cambios en el estado del componente, hay que hacer uso de los métodos del mismo. Para ello, debemos escribir los códigos que haran dichos cambios, dentro de un método que contenga a **setState**:

```javascript
import React, { Component } from "react";

class Contador extends Component {
  constructor() {
    super();
    this.state = {
      valor: 1,
    };
  }

  aumentarValor() {
    this.setState({ valor: this.state.valor + 1 }); // Código que actualiza el estado del componente
  }

  render() {
    return (
      <div>
        <h2> {this.state.valor} </h2>
        <button>Aumentar</button>
      </div>
    );
  }
}

export default Contador;
```

Ya tenemos el cómo. Ahora, queda el cuándo, es decir, el evento. Se vería algo así:

```javascript
import React, { Component } from "react";

class Contador extends Component {
  constructor() {
    super();
    this.state = {
      valor: 1,
    };
  }

  aumentarValor() {
    this.setState({ valor: this.state.valor + 1 });
  }

  render() {
    return (
      <div>
        <h2> {this.state.valor} </h2>
        <button onClick={() => this.aumentarValor()}>Aumentar</button> // Código
        que indica el evento del cambio
      </div>
    );
  }
}

export default Contador;

<h3 onClickonClick={() => this.postSubscribe()}> {this.state.message} </h3>;
```

## Eventos

Los eventos dentro de un componente de React son funciones o métodos que van a tener toda la lógica que se realizará cuando el usuario interactúe con el componente. Así como sucede en JavaScript Vanilla, dentro de React podemos encontrar los típicos eventos click, hover, focus, blur, submit, entre otros, y su implementación, si bien es un poco diferente, no dista mucho de lo que tradicionalmente solemos hacer cuando queremos implementar un evento a un elemento determinado.

Para hacer esto, debemos definir dentro de la clase del componente, y antes del método render, qué deseamos que pase cuando se produzca el evento, y luego, aplicarlo al evento sobre el JSX del componente, escribiéndolo como un atributo, como vemos en el siguiente ejemplo:

```javascript
class Imagen extends Component {
  lanzarAlerta() {
    alert("Pasaste sobre la imagen");
  }

  render() {
    return (
      <img
        src="/imagen.jpg"
        width="200"
        alt="react.logo"
        onMouseOver={() => this.lanzarAlerta()}
      />
    );
  }
}

<h3 style={this.styles} onMouseOver={() => this.cambiarColor()}>
  {this.state.message}
</h3>;
```

## Ciclo de vida

React se encarga de hacer pasar los componentes por tres claras etapas, que se evidencian cuando el componente:

1. Se muestra en pantalla (**montaje**).
2. Sufre cambios (**actualización**).
3. Deja mostrarse en pantalla (**desmontaje**).

A todo este proceso React lo llama el "ciclo de vida" y es algo muy importante de entender, ya que a lo largo de estas tres etapas vamos a poder generar distintas funcionalidades si así lo quisiéramos.

Al _montaje_ se le llama con el método **componentDidMount()**, un método que se ejecuta dentro del cliente, y que se da desde el primer momento de renderización del componente. Este es el momento ideal para hacer solicitudes asíncronas a una API, dado que así la información de la misma estará disponible para ser utilizada dentro del componente.

A la _actualización_ del componente se le llama con el método **componentDidUpdate()**, que se ejecuta cada vez que el componente sufre un cambio de estado. Este método puede recibir dos parámetros, que representan, por un lado, a las props existentes antes de la actualización, y, por otro, el estado previo del componente, ambos casos siendo objetos literales, y que solo deben ser utilizados si se consideran necesarios.

El _desmontaje_ del componente se trabaja con el método **componentWillUnmount()**, que se invoca inmediatamente antes de desmontar y destruir un componente. Dentro de este método no se debe invocar el método setState, dado que todo se destruirá. Este es el único método que quizá no podamos ver en funcionamiento.

## Integración con APIs

Con React podemos hacer solicitudes asincrónicas a un endpoint que nos provea una API cualquiera. Esto es sumamente importante ya que así vamos a poder generar que nuestros componentes sean dinámicos y consuman información desde el back-end.

Los llamados asíncronos a las APIs suelen ejecutarse desde los métodos del componente, cuando los eventos invoquen a dicho método. Gracias al ciclo de vida de un componente, podemos hacer el llamado a la API desde el **componentDidMount**, apenas se renderiza el componente en pantalla. Ahora, nos falta definir dónde se guardarán los datos, lo que se hace dentro del componente, haciendole llegar la data en el momento en que el componente es montado, haciendo uso del **setState** dentro del **componentDidMount**, para pasarle al componente la data que se obtiene desde la API.

```javascript
componentDidUpdate() {
    fetch('https://api.giphy.com/v1/gifs/random?api_key=FSHnaiOlYd2NXPdn06Qdh64qxmGRVM69&tag=&rating=g')
    .then(results => {results.json})
    .then(data => {this.setState({gif: data.data.image_url});});
}
```
