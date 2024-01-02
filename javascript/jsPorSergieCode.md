# Curso completo de JavaScript dictado por Sergie Code

## Comentarios

Para poner comentarios en una sola línea dentro de JS, debemos empezar el mismo con **//**.

## Declaraciones y asignaciones

Existen tres formas de declarar variables en JS. Pero primero, ¿Qué es una variable? Es un contenedor, una especie de caja, donde podemos almacenar valores correspondientes a información. Para definirlas, se declara una de acuerdo con su tipo, luego se coloca el nombre, y con el operador de asignación **=** se le asigna un valor. Volviendo a las formas de declararlas, estas son:

- var: Puede ser declarada, sin declarar un valor a la variable. En cuanto a su **scope**, puede ser requerido en cualquier función hija de la función en que se haya declarado. Puede ser reasignado su valor. Puede redeclararse, lo que implica volver a declarar **var nombreVariable** luego de que se la haya declarado por primera vez. Esto es sumamente peligroso, dado que podemos romper el código sin darnos cuenta.
- let: Puede ser declarada, sin declarar un valor a la variable. En cuanto a su **scope**, solo puede ser requerido en la función en que se haya declarado. Puede ser reasignado su valor. No puede ser redeclarado.
- const: No permite ser declara sin asignación. En cuanto a su **scope**, solo puede ser requerido en la función en que se haya declarado. No puede ser reasignado su valor. No puede ser redeclarado.

Lo más recomendable es utilizar **const**, salvo que necesitemos si o si reasignar valores a una variable, caso en el cual usaremos **let**. No es recomendable utilizar **var**.

Una particularidad que tiene **let** es que permite declarar multiples variables al mismo tiempo, con la siguiente sintaxis: `let x,y,z`, quedando así declaradas las variables **x**, **y** y **z**.

Para el caso de variables que contengan **texto**, las mismas se declaran con **let** y **const**. La unica diferencia es que todo lo que sea un _string_ en JS deberá ir declarado entre comillas.

Hablando de comillas, podemos utilizar tres tipos: Simples (''), Dobles (""), y BackTics (``). Estas últimas nos permiten insertar variables dentro de la cadena de string, con el formato siguiente:
`Esto es un string con una ${variable}`.

## Operadores

- Asignación (=): Asigna a la variable el valor que se declara a su izquierda.
- Aritméticos (+, -, un asterisco, /): Permiten realizar sumas, restas, multiplicación y división. Si se "suman" dos string, estos se **concatenaran**, es decir, se colocarán ambos string dentro de la variable que contenga la suma.
- Resto (%): Se refiere al residuo que queda de una división.
- Exponente (dos asteriscos seguidos): Permite realizar una exponenciación.
- Incremento (++) y Decremento (--): Suma o resta un valor más o menos a la variable en cuestión.

## Case Sensitive

Al momento de declarar el nombre de una variable, debemos tener en cuenta que JS es sencible a si las letras son mayúsculas o minúsculas. Por ello, debemos tener mucho cuidado con esto, dado que, por ejemplo, **nombrevariable** y **nombreVariable** serán dos variables distintas dentro del programa.

## Scope o Disponibilidad

El **scope** define dónde estará disponible una variable. Esto es algo que habíamos visto cuando vimos las formas de declarar variables, pero, básicamente, podemos identificarlo tomando en cuenta que las llaves generan un scope, y si dentro de ellas declaramos una variable con **let**, esta variable no estará disponible fuera de esas llaves. Sin, si declaramos una variable en el scope **padre**, esta variable estará disponible dentro del scope **hijo**.
