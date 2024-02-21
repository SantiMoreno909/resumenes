```python

```

# Apuntes de Python desde cero

# Tipos y operadores básicos

## Variables

Para definir variables, debemos escribir el nombre de la misma, y asignarle su valor con el **=**. Las variables con las que Python permite trabajar son:

- **string**: Van entre comillas;
- **number**: Van sin comillas, pueden ser **int** o **float**;
- **boolean**: Puede ser **true** o **false**;

## Obtención de datos de los usuarios

Para obtener datos del usuario, debemos utilizar un imput para indicarle qué ingresar, que irá dentro de una variable para pdoer guardarlo: `resultado = input('Ingresa el resultado de 2+2: ')`.

## Strings

Podemos pensar en los strings como una lista compuesta de caracteres, con lo cual, también podemos acceder a estos caracteres por su posición.

### Formateos de strings

La forma de hacerlo es mediante la **concatenación**, que se puede hacer sumando con el operador + ambos strings. Sin embargo, la mejor forma es hacerlo con el operador de formateo de string y los nombres de las variables entre llaves, algo así: `nombre_completo = f"{nombre} {apellido}"`.

### Métodos de Strings

Algunos de los más utilizados son:

- **.upper()**: Convierte a mayúsculas el texto.
- **.lower()**: Convierte a minúsculas el texto.
- **.capitalize()**: Convierte a mayúsucla el primer elemento, y el resto a minúscula.
- **.title()**: Toma la primera letra de cada palabra del string, y la convierte en mayúscula.
- **.strip()**: Elimina todos los espacios que hay al principio y al final del string.
- **.lstrip()** e **rstrip()**: Quitan, o bien solo los espacios de la izquierda, o solo los de la derecha.
- **.find(string)**: Devuelve la posición en que se encuentra un substring dentro del string principal. Si no se encuentra devuelve -1. Debemos tener en cuenta que Python es Case Sensitive.
- **.replace(busca, reemplaza)**: Reemplaza todas las ocurrencias de "busca" por "reemplaza".
- **("valor" in variableNombre)**: Retorna true si se encuentra el valor buscado dentro de la variable.
- **("valor" not in variableNombre)**: Retorna false si se encuentra el valor buscado dentro de la variable. Es como el método negado del anterior.

### Secuencias de escape

Son caracteres especiales (como \n para nueva línea), que representan un carácter específico. Por ejemplo:

- Poner comillas dentro de otras comillas: Se hace con el \ antes y despues del valor. Por ejemplo `print("Ultimate \"Python"\")`. Podemos usar \ para agregar luego caracteres complicados, incluso otro \.
- Saltar una linea: Se hace colocando **\n** donde deseemos el salto.

## Números

### Operaciones aritméticas

Python se utiliza con la simbología muy similar a una calculadora en cuanto a las operaciones básicas. Para operaciones algo más complejas, sería:

- Potencia: Se hace colocando doble asterisco;
- %: Retorna el módulo de una división;
- //: Retorna solo la parte entera de la división;
- +=: Asígna de forma más rápida la operación a la variable que se desee modificar su valor.

### módulo math

Es un modulo que podemos utilizar importándolo con `import math`, que nos permite realizar operaciones matemáticas complejas. Algunas formas de usarlo son:

- math.ceil(numero): Lleva el número al valor superior entero más cercano.
- math.floor(numero): Lleva el número al entero inferior más cercano.
- math.isnan(numero): Devuelve true si el valor NO corresponde a un número.
- math.pow(numero, potencia): Eleva el número a la potencia indicada.
- math..sqrt(numero): Calcula la raíz cuadrada de un número.

Podemos encontrar más métodos útiles de math en la librería del módulo.

### Calculadora básica

```python
import math

n1 = input("Ingresa el primer número: ")
n2 = input("Ingresa el segundo número: ")

n1 = int(n1)
n2 = int(n2)

suma = n1 + n2
resta = n1 - n2
multiplicacion = n1 * n2
division = n1 / n2

mensaje = """
Para los números {n1} y {n2}:
El resultado de la suma es {suma}.
El resultado de la resta es {resta}.
El resultado de la multiplicacion es {multiplicacion}.
El resultado de la division es {division}.

print(mensaje)
"""
```

## Operadores de comparación

Nos permiten hacer validaciones y verificaciones

- Mayor y menor que: > y < ;
- Mayor o igual y menor o igual que: >= y <= ;
- Igualdad comparativa: ==.
- Desigualdad: !=

## Conversión de tipos

Para convertir un tipo de datos a otro, Python nos provee de módulos que podemos utilizar, tales como:

- **int(resultado)**: Convierte el valor en un número entero;
- **str(resultado)**: Convierte el valor en una cadena de caracteres (String);
- **float(resultado)**: Convierte el valor en un número flotante;
- **bool(resultado)**: Convierte el valor en un valor lógico (True o False). Valúa True, False (ingresando 0), None o Null.

## Operador if

Ejecutará una acción si la condición se cumple, y otra si no lo hace:

```python
puntaje = 97

if puntaje >= 95:
    print("Aprobó con honores")
elif puntaje  >= 50:
    print("Aprobó la materia")
else:
    print( "No aprobó la materia")
```

### Ejercicio: Conversor

```python
temperatura = float(input("Ingrese un valor:"))
conversion = input("¿Quieres convertir a Celsius(C) o a Fahrenheit(F)?:").upper()

if conversion == 'C':
    print("Se convirtió a Celsius")
elif conversion == 'F':
    print("Se convirtio a Fahrenheit")
else:
    print( "Escala incorrecta")
```

## Operador ternario

Analiza dos condiciones, retornando el mensaje que se le indica. Funciona así:

```python
edad = 15

mensaje = "Es mayor" if edad > 18 else "Es menor"
print( mensaje )
```

## Operadores lógicos

- and: Verifica que se cumplan dos condiciones, que ambas sean true. `print(edad > 18 and edad < 30)`
- or: Verifica que se cumpla una de las dos condiciones dadas.
- not : Invertirá el sentido de la condición. `print(not(edad > 18))`.

### operaciones de corto circuito

Cuando encadenamos operadores lógicos **and**, las condiciones se evalúan de izquierda a derecha. Es importante que la de la izquierda se cumpla para que la de la derecha sea analizada. Si una operación no se cumple, no se evaluarán las opciones que tiene a la izquierda, sino que se romperá la sentencia donde la condición no se cumpla. Esto es lo que significa que Python sea "de cortocircuito". En cambio, si tenemos operaciones **or**, se evaluarán todas las operaciones, dado que, con que solo una de ellas se cumpla, todas las demás serán true.

## Bucle for

Este bucle sirve, entre otras cosas, para iterar una lista. Por ejemplo:

```python
listaLenguajes = ["Python","Java","Ruby","PHP"]

for lenguaje in listaLenguajes:
    print(lenguaje)
```

## Bucle for else

Este bucle permite hacer iteraciones buscando condiciones que no sabemos si se cumplirán. Así, podemos incluir el caso **else**, que permite preveer una sentencia de ejecución para el caso en que lo deseado no se cumpla. Por ejemplo:

```python
buscar = 10

for numero in range(5):
    print(numero)
    if numero == buscar:
        print("Encontrado el valor ", buscar)
        break
else:
    print("No se encontró el valor")
```

## Iterables

Existen mucos iterables en Python, tales como strings, tuplas, listas, diccionarios, entre otros. Los veremos en profundidad más adelante, pero, básicamente, son un loop que nos permite trabajar una y otra vez sobre sus valores hasta alcanzar cierto objetivo.

## Bucle While

Permite iterar de acuerdo a un acumulador o contador.

```python
i = 0;

while i < len(listaLenguajes):
    print(listaLenguajes[i])
    i = i + 1 #No debemos olvidar la condición de salida del bucle, o se volverá infinito y F por los recursos del server
```

## Loops infinitos

Al no tener el while una condición de salida, se hará un bucle que se iterará de forma infinita. Esto podría hacer colapsar la aplicación por el uso excesivo de recursos que esto generaría. Por ello, debemos asegurarnos de colocar una condición de salida, o bien de colocar un **break** al final del iterable.

## Loops anidados

Para anidar un loop dentro de otro, lo que debemos hacer es escribir el segundo loop dentro del indentado o sanrgado del primero. Esto sería un ejemplo:

```python
for j in range(3): # Outer for/loop
    for k in range(2): # Inner for/loop
        print(j,k)
```

Debemos tener mucho cuidado al utilziarlos, dado que podrían llegar a ocupar muchísimos recursos.

# Funciones

La forma de crear una función es definirla con la palabra reservada **def**, seguido de su nombre, los paréntesis para incluir sus argumentos, los dos puntos, y luego el código de la función, dentro del indentado. Para ejecutar una función, la llamamos poniendo **nombre()**.

Los parámetros (o argumentos, según en qué momentos se esten visualizando) son variables que se le dan a la función, dentro de sus paréntesis al momento de declararla, y con los cuales se podrá trabajar más adelante. Los parámetros se pueden incluir más de uno en cada función, separándolos por comas. Para darle valor a los mismos, debemos ponerselos al llamar a la función. Por ejemplo:

```python
def bienvenido(nombre, apellido): #Parámetros
    print(f"Bienvenido {nombre} {apellido}")

bienvenido("Santiago", "Moreno") # Argumentos. Imprime 'Bienvenido Santiago Moreno'
```

Para hacer que el uso de los parámetros sea opcional, debemos colocarle un valor por defecto al mismo, del siguiente modo: `def bienvenido(nombre, apellido = "Moreno"):`

Si no conocemos el orden en que fueron declarados los argumentos, podemos declarar sus nombres al momento de cargarlos, haciendo, por ejemplo: `bienvenido(apellido = "Moreno", nombre = "Santiago" ):`

Si no sabemos cuantos argumentos se cargarán, podemos colocar un \*args para indicar que van a ser muchos:

```python
def suma(*numeros):
    resultado = 0
    for numero in numeros:
        resultado += numero
    print (resultado)
```

## Kwargs arguments

Sirven para empaquetar todos los argumentos en un solo parámetro. Es una buena práctica cuando queremos recibir un gran número de argumentos. En este caso, necesariamente deberemos colocar el nombre del parámetro con el que queremos trabajar:

```python
def get_product (**datos):
    print(datos) # Imprime todo en forma de diccionario
    print(datos["id"]) # Imprime 9

get_product(id="9", nombre="Pepe" , edad=45)
```

## Palabra reservada 'return'

Al colocar **return**, podemos devolver el valor que queramos desde la función, y luego asignarle ese valor a una variable. Por ejemplo:

```python
def suma (a,b):
    resultado = a+b
    return resultado

c = suma(2,5)
print(c)
```

## Alcance

En Python el alcance de las variables se da desde los padres hacia los hijos, pero no así desde los hijos hacia los padres. No utilices variables locales, ya que esto es una muy mala práctica. Solo asigna variables en alcances dentro de las funciones, o el valor de la variable global podría cambiar sin que nos demos cuenta. Si de todos modos necesitamos definir una variable global desde dentro de una función, antes de definirla debemos colocar `global variable = "Valor de la variable"`.

## Depuración de funciones

Esto nos permite encontrar los errores dentro de nuestro código. En VSCode podemos hacerlo desde el botón de debug, a la izquierda. Debemos hacerlo seleccionando la opción del archivo de python entre las opciones que nos da, lo que creará un archivo .json dentro del programa, que hará todas las pruebas de depuración necesarias a nuestro código.

Luego, deberemos hacer un click en la linea donde deseemos que se detenga el depurador, lo que se indicará con un punto rojo, para ver si la misma tiene algún error. Con esto, podremos ver un flujo detallado de la función y su funcionamiento, interactuando con el desde los botones que nos aparecen en la parte superior.

# Tipos de datos avanzados

## Listas

Permite almacenar multitud de elementos. El índice del primer elemento es cero. Para cambiar el valor de un elemento, simplemente lo llamamos con su índice y lo igualamos al nuevo valor. `listaLenguajes = ["Python","Java","Ruby","PHP"]`

Para seleccionar un rango de elementos, debemos hacer `listaLenguajes[1:3]`. Esto excluye el último elemento, pero si incluye el primero. Si no le damos el primer índica, tomará valores desde el incio del listado. Si no le damos el segundo índice, tomará desde el índice indicado hasta el final de la lista.

Los string son un tipo de lista, que contiene una cantidad determinada de caracteres que conforman la palabra, y podemos acceder a cada uno de esos caracteres accediendo al índice del mismo. Con las listas podemos hacer operaciones tales como multiplicar la cantidad de elementos que la lista tiene, concatenar listas, y podemos crear tambien **matrices**, colocando listas hijas anidadas dentro de una lista padre.

### Métodos de listas

- .insert(i,"elemento"): Inserta "elemento" en el índice indicado. No elimina el valor anterior, si no que lo desplaza a la derecha.
- .remove("elemento"): Busca el elemento en la lista y lo elimina.
- print("PHP" in listaLenguajes): Da booleanos según encuentre o no el valor en la lista.
- len(listaLenguajes): Retorna la cantidad de elementos del array.

### Manipulando listas

Tomaremos como modelo la siguiente lista: `mascotas = ["Wolfgang", "Pelusa", "Pulga", "Copito"]`.

- **Cambiar un elemento**: Para ello, indicamos el índice del elemento, y lo igualamos al nuevo valor: `mascotas[0] = "Bicho"`.
- **Recortes de arreglos**: Si colocamos `print(mascotas[1:])`, imprimirá desde "Pelusa". Si colocamos `print(mascotas[:2])`, imprimirá desde el principio hasta "Pulga".
- **Acceder a los elementos impares**: Se hace si colocamos `print(mascotas[1::2])`. Esto le dice: Imprime el índice 1, salta al 3, y así sucesivamente.

### Desempaquetado de listas

Tomamos como modelo la lista `numeros = [1, 2, 3]`. Para desempaquetar esta lista, podemos escribir `primero, segundo, tercero = numeros`. Si solo quisieramos un elemento, podríamos poner `primero, *otros = numeros`. Así, solo el primer elemento irá en "primero", y el resto irán dentro de "otros". Para tomar valores desde los últimos elementos de la lista, simplemente ingresamos los nombres de los mismos detras de "\*otros".

### Iterando listas

Para iterar listas, podemos usar el **for in**. Si quisieramos acceder al índice, deberiamos trabajar con la función **enumerate** del siguiente modo: `for mascota in enumerate(mascotas): print(mascota)`. Así, obtendríamos tuplas con elementos enumerados a partir del contenido de la lista. En este caso, la tupla se llamaría **mascota**, donde el indice 0 corresponde al número, y el índice 1 corresponde al valor.

### Buscar elementos dentro de la lista

Podemos hacer esto obteniendo el índice del elemento (si es que existe), haciendo uso del método **mascotas.index("Pulga")**. Sin embargo, antes de ejecutar esto, deberíamos verificar si el elemento está contenido dentro de la lista, colocándolo dentro de un **if** del siguiente modo:

```python
mascotas = ["Wolfgang", "Pelusa", "Pulga", "Copito"]

if "Pulga" in mascotas:
    print(mascotas.index("Pulga")) # Imprime 2
```

Si queremos contar las veces que un elemento se repite dentro de la lista, debemos hacer uso del método **mascotas.count("Pulga")**. Por ejemplo:

```python
mascotas = ["Pulga", "Wolfgang", "Pelusa", "Pulga", "Copito", "Pulga"]

if "Pulga" in mascotas:
    print(mascotas.count("Pulga")) # Imprime 3
```

### Agregar y elminar elementos de una lista

Para modificar el valor que se encuentra en un índice determinado, desplazando hacia abajo los demás elementos, hacemos uso del método **lista.insert(indice, "valor")**. Para agregar un elemento al final de la lista, podemos hacer **lista.append("valor")**. Para eliminar elementos, haremos **lista.remove("valor")**. Esto solo elimina el primer elemento que se encuentre, que coincida con "valor". Si queremos eliminar el último elemento, usaremos **lista.pop()**, pudiéndole también ingresar como parámetro el índice donde se encuentra el elemento. Si queremos limpiar completamente el arreglo, debemos hacer **lista.clear()**.

### Ordenar listas numéricas

Podemos hacerlo utilizando el método `listas.sort()`. También podemos hacerlo ingresandole el parámetro `listas.sort(reverse=True)` para ordenarlos al reves. Otra forma de hacerlo es ingresando `listas2 = sorted(listas)`, el cual crea una nueva lista.

Si queremos hacerlo con una lista con elementos más complejos, como una lista de listas, deberemos crear una función que nos permita ordenar la lista en base a uno de los elementos que esta contenga. Por ejemplo:

```python
usuarios = [["Jose", 18], ["Manuel", 25], ["Alicia", 16]]

def ordena(elemento):
    return elemntno[1]

usuarios.sort(key = ordena)
```

### Expresiones o funciones lambda

Cuando usamos funciones lambda, podemos hacer lo mismo que hicimos en el caso anterior con .sort() y la función ordena, pero sin tener que crear una nueva función cada vez que queramos hacerlo. Podemos hacer ello del siguiente modo: `usuarios.sort(key=lambda el: el[1])`. Esto es una buena práctica si solo usaremos funciones lambda una sola vez. Si lo haremos muchas veces, es mejor usar el método antes visto.

### Comprensión de listas

Si quisieramos obtener solo los nombres de los elementos de la lista, podríamos simplemente recorrerla con un for del siguiente modo:

```python
usuarios = [["Jose", 18], ["Manuel", 25], ["Alicia", 16]]

nombres = []
for usuario in usuarios:
    nombres.append(usuario[0])
```

Sin embargo, una forma más elegante y rápida de hacerlo es:

```python
usuarios = [["Jose", 18], ["Manuel", 25], ["Alicia", 16]]
nombres = [usuario[0] for usuario in usuarios] # usuario[0] se conoce como "transformación"
```

Si quisieramos filtrarlo, haríamos:

```python
usuarios = [["Jose", 18], ["Manuel", 25], ["Alicia", 16], ["Juan", 30], ["María", 45]]
nombres = [usuario for usuario in usuarios if usuario[1]>20] # Retorna solo los elementos cuyo índice es mayor a 20
```

### map y filter

La función **map** aplica una función a cada elemento de una lista, como vimos en el ejemplo de transformación, mientras que la función **filter** aplica un filtro en la lista. Sus respectivas sintaxis serían:

```python
usuarios = [["Jose", 18], ["Manuel", 25], ["Alicia", 16], ["Juan", 30], ["María", 45]]
nombres = list(map(lambda usuario: usuario[0], usuarios))
menosUsuarios = list(filter(lambda usuario: usuario[1]>20, usuarios))
```

## Tuplas

Las tuplas son similares a las listas pero no pueden ser alteradas (no se puede añadir ni eliminar elementos). Son muy útiles para guardar información. Puedes crear nuevas tuplas en base a las ya existentes, pero no puedes modificar las ya existentes. Se crean colocando sus elementos entre paréntesis: `tuplaNumeros = (1, 2, 3)`. Podemos convertir datos iterables, como una lista o un string, en una tupla, usando la función tuple del siguiente modo: `tupla = tuple([1, 2])`.

Podemos acceder a los elementos de las tuplas del mismo modo que accedíamos a los de las listas, pero solo acceder a ellos, no así modificarlos. Incluso podemos también desempaquetarlas e iterarlas.

Podemos convertir tuplas a listas usando a su vez la función list.

## Sets

Sets significa grupos o conjuntos. Estos son colecciones de datos que no se pueden repetir, y que no se encuentran ordenados en índices. Si contuvieran datos duplicados, Python removerá los datos duplicados, es decir, no permitirá que se muestren los datos repetidos. Se pueden trabajar del mismo modo que las listas. Podemos crear sets desde otros iterables a partir de la función **set(lista)**. Tomando como base los sets `primer = {1, 1, 2, 2, 3, 4}` y `segundo = {3, 4, 5}`, los operadores interesantes que tienen son:

- primer | segundo: Junta los elementos de ambos sets, eliminando los repetidos. El operador "|" se llama **unión**.
- primer & segundo: Hace una **intersección**, es decir, devuelve solo los elementos que se encuentren en ambos sets.
- primer - segundo: Hace una **diferencia**, es decir, mostrar solo los datos que se encuentran en el primer conjunto, quitándo los que también se encuentren en el segundo (mostraria solo 1 y 2).
- primer ^ segundo: Hace una **diferencia simétrica**, es decir, devuelve los elementos que se encuentren en ambos elementos, eliminando los que estén repetidos en ambos (mostraría solo 1, 2 y 5).

## Diccionarios

Son colecciones de datos **"llave": valor**. El parámetro llave solo puede ser un string, mientras que el valor puede ser de cualquier tipo. Son sumamente utilizados. Se definen como `punto = {"x": 25, "y": 50}`. Para acceder a uno de esos valores, podríamos hacerlo usando `punto["x"]`, es decir, `diccionario["llave"]`. Del mismo modo podemos sumar nuevos conjuntos llave: valor. Para acceder a una llave que no sabemos si está o no, podemos usar el método get que traen los diccionarios, haciendo `diccionario.get("llave", "valorDefecto")`. Si no incluimos "valorDefecto", devolverá "None". También podemos eliminar conjuntos haciendo `del diccionario["llave"]`.

Podemos acceder a los elementos de un diccionario haciendo ``for valor in punto.items()`. Esto nos devolverá tuplas.

Generalmente las BDD devuelven listas con diccionarios. Por ejemplo:

```python
usuarios = [
    {"id": 1, "nombre": "Carlos"},
    {"id": 2, "nombre": "Alejandra"},
    {"id": 3, "nombre": "Santiago"},
    {"id": 4, "nombre": "Mercedes"},
]

for usuario in usuarios:
    print(usuario["nombre"]) # Accede a todos los nombres
```

## Operador de desempaquetamiento

```python
lista = [1, 2, 3, 4]
print(*lista) # Devolverá los elementos de forma independiente, no como una lista
```

Si quisieramos hacer esto con diccionarios, usaríamos dos asteríscos en vez de uno. El resto sería igual.
