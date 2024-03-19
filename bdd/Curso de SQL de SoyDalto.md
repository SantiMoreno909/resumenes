# Curso de SQL de Soy Dalto

# Conceptos básicos

## Modelo Entidad Relación con Notación de Chen

Una **entidad** es un objeto, una representación de cualquier elemento de la realidad. En ellos se almacena información sobre dicho elemento de la realidad, para luego poder trabajar con ella. La forma de representarlas se conoce como **Notación de Chen**, encerrando la palabra dentro de un cuadrado (de forma gráfica). Cada entidad deberá ir dentro de su respectivo cuadrado.

Luego, debemos agregar los **atributos**, particularidades del elemento de la realidad, que pueden ser **únicos** o **compuestos**. Los **simples** son datos únicos, como el precio de un producto. Los **compuestos**, por su parte, son atributos que se componen a su vez de otros atributos. Por ejemplo, los ambientes de una casa pueden ser tomados como atributos, los cuales, a su vez, se componen de distintos muebles, que pueden ser tomados como otros atributos.

Todos los atributos se _representan_ encerrando su nombre dentro de un óvalo, relleno en el caso de los compuestos, y vacio en el caso de los simples. Para indicar los atributos que componen a los compuestos, simplemente se extraen los mismos conectándo sus respectivos óvalos con líneas rectas.

Los atributos también pueden ser **multivalor**, es decir, que pueden tener diversos valores para el mismo atributo, como por ejemplo el caso de los ambientes antes planteados. Estos se _representan_ con un óvalo de doble línea.

Otro tipo de atributos son los **derivados**, que se obtienen de operar otro atributo. Por ejemplo, la edad de una persona puede determinarse a partir de su fecha de nacimiento. Estos se _representan_ con un óvalo de línea punteada.

La **clave única** o **key** con que se identifica la propiedad será un atributo que la vuelva única, ya sea de forma real o virtual. Por ejemplo, el número de documento de cada persona. Se _representan_ en la Notación de Chen con un subrayado de su palabra.

# Primeros pasos

## Crear bases de datos

Para crear una base de datos, debemos ejecutar la consulta `CREATE DATABASE "nombreDataBase" ();`.

Luego, debemos agregar las **tablas**, que son estructuras de datos ordenadas en filas y columnas. Lo primero que debemos saber es que un **campo** es el nombre de una columna, representando justamente a esa columna, y que un **registro** es cada una de las filas que componen la tabla. El **valor de campo** es el dato que tiene almacenado cada una de las celdas del campo. Para crear una tabla, dentro de los paréntesis de la creación, debemos poner `CREATE TABLE "nombreTabla" ();`.

Para crear cada campo, debemos darle al mismo un _nombre_ y un _tipo de dato_. El tipo de dato que seleccionemos dependerá de qué datos queramos guardar en el campo en cuestión, y podemos encontrar el tipo de dato más adecuado para cada campo con una pequeña investigación al momento de que sepamos exactamente qué datos se guardaran en cada campo.

## Consulta SELECT

Una **consulta** es, simplemente, pedirle datos a una BDD. La consulta `SELECT` se utiliza para obtener información de las tablas. Podemos seleccionar todo usando `SELECT * FROM nombreTabla;`.

## Insertar registros con INSERT

Para insertar registros, debemos indicarle que queremos insertar, en una tabla determinada, los nombres de los campos (que debe contener la tabla y que van entre parentesis), y los valores (que también van entre parentesis). Esto se vería así: `INSERT INTO usuarios (nombre, apellido, edad) VALUES ('Santiago', 'Moreno', 25), ('Mauricio', 'Andrada', 25), ('Nahuel', 'Villagran', 24)`. Podemos ingresar más de un registro, simplemente colocandolos uno a continuación del otro, cada uno dentro de sus parentesis respectivos, y separados entre sí por comas.

## Consultas o Queries

Cualquier operación que hagamos con SQL, ya sea una modificación o una consulta, en el lenguaje de SQL será una _consulta_ o _querie_. La consulta no es solo pedir datos, si no que se aplica a todo el CRUD.

## Selección de campos específicos

Podemos seleccionar uno o más campos específicos de una tabla determinada, es decir, no toda la tabla, simplemente indicando los nombres de dichos campos en lugar del asterisco, algo así: `SELECT nombre, edad FROM usuarios`

# Sección Básica

## Identificadores

Los **identificadores** permiten justamente identificar un registro de otro, que podría ser exactamente igual, salvo por el identificador que lo vuelve único.

### Claves Primarias (PK) y Foraneas (FK)

Las **claves primarias** son el identificador que hace único a cada registro de una tabla determinada, mientras que las **claves foraneas** son claves primarias de otras tablas, traidas a la tabla que estamos trabajando para poder identificar los registros de otras tablas.

## Diagrama para relacionar tablas

Las relaciones que se dan entre las tablas, dependen de las relaciones que se dan entre las entidades en la realidad. Los tipos de relaciones son:

- **Uno a Uno**: Un elemento de la tabla A, puede relacionarse solo con un elemento de la tabla B. Por ejemplo, una sola persona puede tener un solo padre.
- **Uno a Muchos**: Un elemento de la tabla A, puede relacionarse solo con muchos elementos de la tabla B. Por ejemplo, una sola persona puede tener muchos amigos.
- **Muchos a Muchos**: Muchos elementos de la tabla A pueden relacionarse con muchos elementos de la tabla B. Por ejemplo, muchos alumnos pueden tener muchos profesores.

Gráficamente, las conexiones se _representan_ con líneas que unen las tablas, y las relaciones de uno se representa con una recta ortogonal que la corta, o bien con un número **1**, mientras que las relaciones de muchos se representan con una especie de pata de gallo de tres puntos, o bien con una **n**.

## Base de datos Northwind

Usaremos esta BDD para poder visualizar un diagrama de relaciones de una BDD mucho más compleja que la que creamos de prueba. Así, podrémos entender cómo manipular los datos de una nueva BDD que nos toque conocer. Podemos ver el de Northwind en este enlace: https://en.wikiversity.org/wiki/Database_Examples/Northwind

## Columnas y Alias

Los **alias** nos pemiten definir un nombre temporal distinto al nombre de los campos, que nos permiten trabajar con ellos de forma más fácil para nosotros. Por ejemplo, si tuvieramos una BDD escrita en ingles, y desearamos trabajarla con nombres en español.

La forma de asignarle un alias a un campo es `SELECT nombreOriginal AS nombreNuevo FROM tabla;`. Así, podremos ejecutar consultas al campo **nombreOriginal** de la tabla **tabla**, refiriéndonos a él como **nombreNuevo**.

Esto se hace, o bien para darle un nombre temporal más descriptivo al campo, o bien para renombrar campos operados o modificados desde la consulta (como `Precio*2 AS precio_doble`), y que se muestren con un nombr más amigable.

## Ordenamiento con ORDER BY

En caso de que deseemos ordenar los elementos que una consulta nos retorna, en base a un valor distinto al id del elemento, podemos utilizar la cláusula ORDER BY. Esta cláusula ordena por defecto de menor a mayor. Podemos probarlo con la consulta `SELECT * FROM Products ORDER BY price`, lo que nos dará los precios ordenados de menor a mayor. Sin embargo, podemos poner **ASC** o **DESC** para indicar que el ordenamiento sea ascendente o descendente. Si el campo que ingresamos es de tipo _string_, los ordenará de forma alfabética.

El orden jerárquico de menor a mayor valor de los diferentes tipos de datos está dado del siguiente modo:

1. NULL
2. Números
3. Caracteres especiales
4. Letras

Si quisiéramos indicar qué tipo de dato queremos ver al final, debemos poner LAST, haciendo, supongamos, `SELECT * FROM Products ORDER BY price NULLS LAST`, mientras que si quisieramos mostrarlos primero, deberíamos poner FIRST, haciendo `SELECT * FROM Products ORDER BY price NULLS FIRST`.

También podemos dar un ordenamiento aleatorio colocando `SELECT * FROM ORDER BY RANDOM()`. También podemos ordenar por dos o más campos, indicandolos separados por coma, haciéndo algo así: `SELECT * FROM Products ORDER BY price, product_name`.

Si quisieramos eliminar los valores que estén duplicados para un determinado campo, podemos hacer `SELECT DISTINT ProductName FROM Products ORDER BY price;`.

## Cláusula WHERE

Esta **condición** nos permite, valga la redundancia, condicionar el resultado de una consulta SQL. Es decir, nos permite filtrar los resultados. Por ejemplo, podemos colocar `SELECT ProductName FROM Products WHERE Price>50`.

## Modificación de campos

Podemos hacer esto indicando el registro que deseemos modificar, e indicando con la cláusula SET el campo y nuevo valor. Esto se haría con `UPDATE turnos_medicos SET horario = "09:30" WHERE id_turno = 1`. Esta consulta se aplica a la tabla que habíamos creado al principio.

## AND, OR y NOT

Estos operadores condicionales nos permiten, justamente, condicionar las consultas en función de determinados criterios. Por ejemplo `SELECT ProductName, Price FROM Products WHERE Price > 10 AND Price < 100`. Podemos también unir o combinar estos condicionales, para complejizar y mejorar el nivel de filtrado de nuestra consulta, agrupando consultas con paréntesis de acuerdo con nuestros requisitos.

## Cláusula LIMIT

Podemos usar la cláusula LIMIT para limitar los resultados que nos dan a una cantidad limitada de registros. Por ejemplo `SELECT ProductName FROM Products WHERE Price < 100 LIMIT 5` limitará la cantidad de respuestas a 5 registros. Estos tres registros siempre serán los mismos, así que, o podemos usar **RANDOM()**, o bien operar en base a un filtrado con **WHERE** y determinados valores, como los _ProductId_.

## DISTINTO vs NOT

El operador **distinto de** se indica con **!=**. Esto no es exactamente al operador lógico NOT, dado que NOT es un booleano, que puede tomar solamente valores TRUE o FALSE y opera directamente con los valores booleanos que retorna, mientras que != es u operador de comparación, igual que el WHERE, y opera con cada uno de los valores en los cuales se ejecuta la comparación.

## Operador BETWEEN

El operador BETWEEN nos permite indicar un rango de valores entre dos puntos, ambos inclusive. Es decir, si tenemos la columna precio en una tabla llamada producto, podemos hacer una selección entre un precio mínimo y un precio máximo, incluyendo ambos valores dentro del retorno de la consulta. Este ejemplo se escribiría como `SELECT ProductName FROM Products WHERE Price BETWEEN 20 AND 40`.

## Operador LIKE

El operador LIKE funciona similar al **=**, la diferencia es que LIKE nos permite ejecutar consultas buscando patrones de texto. Para ello, utiliza dos comodines:

- %: Indica que, en lugar de un carácter específico, se puede tener cualquier cosa. Por ejemplo, `LIKE "%r"` nos dará todo lo que termine con r. Esto no es case sensitive. Podemos hacer también `LIKE "%r%"`, lo que nos dará todo lo que tenga una r.
- Guiones bajo (\_): Indican la cantidad de caracteres que deberían estar en el string que estamos buscando. Por ejemplo, `SELECT * FROM Employees WHERE LastName LIKE "_u____"` devolvería "Fuller".

## IS NULL y IS NOT NULL

Estos operadores nos permiten filtrar solo los NULL, o solo los que no sean NULL. Por ejemplo `WHERE ProductName IS NOT NULL`.

## Operador IN y NOT IN

Estos son operadores lógicos. Nos permiten trabajar sobre una lista para iterar sobre un determinado conjunto de valores. Por ejemplo, `SELECT * FROM Products WHERE SupplierID IN (3,4,5,6)`. NOT IN sacaría solo los elementos que no contengan los valores indicados.

# Sección Intermedia

## Funciones de agregación

Estas son funciones que se trabajan con la cláusula SELECT, y que nos permiten trabajar con los datos que recibimos. Por ejemplo, podemos colocar `SELECT count(FirstName) As cantidad_de_nombres FROM Employees`. Hay muchisimas más funciones que podemos encontrar en documentación en la web.

- COUNT(): Devuelve el número de filas que coinciden con la consulta. Puede tomar como parámetro una columna específica o el símbolo \* para contar todas las filas seleccionadas.
- SUM(): Calcula la suma de los valores en una columna. Toma como parámetro la columna de la cual sumar los valores.
- AVG(): Calcula el promedio de los valores en una columna. Toma como parámetro la columna de la cual calcular el promedio.
- MIN(): Devuelve el valor mínimo de los valores en una columna. Toma como parámetro la columna de la cual encontrar el valor mínimo.
- MAX(): Devuelve el valor máximo de los valores en una columna. Toma como parámetro la columna de la cual encontrar el valor máximo.
- GROUP_CONCAT(): Concatena los valores de una columna en una sola cadena, agrupados por una columna especificada. Toma como parámetro la columna a concatenar y opcionalmente la columna para agrupar, así como opciones para delimitar y ordenar la concatenación.
- STDDEV() / STDDEV_POP() / STDDEV_SAMP(): Calcula la desviación estándar de un conjunto de valores. STDDEV() calcula la desviación estándar de toda la población, STDDEV_POP() y STDDEV_SAMP() calculan la desviación estándar de la población y la muestra, respectivamente. Toman como parámetro la columna de la cual calcular la desviación estándar.

En una misma consulta no podemos agrupar funciones de agrupación. Esto se puede hacer con subconsultas, que veremos más adelante.

## GROUP BY y HAVING

GROUP BY nos permite indicar qué campo deseamos agrupar en función de sus valores. Por ejemplo, para obtener la cantidad de unidades que se vendió de cada productos, filtrado desde una tabla de ventas. La cláusula HAVING nos permite hacer filtrados de los grupos que genera GROUP BY.

## Subconsultas o subqueries

Las **subconsultas** nos permiten relacionar tablas al momento de hacer consultas. Lo ideal es usar joins, pero pueden ser necesarias en ciertos casos. Básicamente, la idea es que sea una consulta anudada dentro de otra, siendo los resultados que nos importan los de la subconsulta. Estas no alteran la base de datos, solo le solicitan datos. Las subconsultas se colocan entre paréntesis, y solo consultan columnas, no tablas, y es fundamental tener esto en consideración a la hora de ejecutarlas, o tendremos un error. Para hacer varias subconsultas, debemos encadenarlas colocandolas una a continuación de la otra, separadas por paréntesis.

Para clasificarlas, se hace por niveles. Una subconsulta de primer nivel es una consulta que se realiza dentro de otra consulta, una de segundo nivel es una subconsulta dentro de una subconsulta dentro de una consulta, y así sucesivamente.

Un ejemplo de subconsulta es la siguiente:

```sql
SELECT
    OD.ProductID,
    SUM(Quantity) AS total_vendido,
    (SELECT Price FROM Products WHERE ProductID = OD.ProductID) AS Precio,
    (SUM(Quantity) * (SELECT Price FROM Products WHERE ProductID = OD.ProductID)) AS Total_Ventas
FROM OrderDetails AS OD
GROUP BY OD.ProductID;
```

El problema de las subconsultas es que vuelven el programa muy denso y pesado. Por eso, es mejor trabajar con Joins, que veremos ahora.

## Joins

Los **joins** permiten combinar la información de dos o más tablas, convinandolas para que el programa nos retorne una sola tabla combinando los datos de todas las demás. Tenemos varios tipos de Joins, pero los más comunes son:

- INNER JOIN: Devuelve la lista de coincidencia de campos entre las tablas indicadas. Es el join por defecto si no se indica otro tipo de join. La forma de hacerlo es `SELECT FirstName, OrderID, OrderDate FROM Employees AS e INNER JOIN Orders AS o ON e.EmployeeID = o.EmployeeID`. Lo indicado luego del ON es la condición que deberá darse para el join.
- LEFT JOIN: Devuelve la información de la primera tabla indicada, y rellena con parte de la información de la segunda tabla, que coincida con la información contenida en la primera. Para el ejemplo anterior, nos devolvería toda la tabla de empleados, y, si dicho empreado tiene una orden, también la muestra. El código sería `SELECT FirstName, OrderID, OrderDate FROM Employees AS e LEFT JOIN Orders AS o ON e.EmployeeID = o.EmployeeID`.
- RIGHT JOIN: Funciona al reves del LEFT JOIN, es decir, retorna todo el contenido que le solicitemos de la segunda tabla, y rellena con el contenido disponible en la tabla a. SQLite no permite hacerlos, por lo cual, se los simula haciendo un LEFT JOIN con las tablas invertidas, pero indicando en comentarios que se trata de un RIGHT JOIN simulado.
- FULL JOIN: Devuelve todos los datos de dos tablas. Se hacen con las cláusulas UNION.
- CROSS JOIN: Devuelve una tabla con todas las combinaciones posibles para todos los elementos que tienen en las tablas. Así, si una tabla tiene 10 registros, y la otra tiene 50, retornaría un total de 500 registros en la tabla de retorno.

## UNION y UNION ALL

La clásula UNION nos permite unir los resultados de dos consultas, escribiendo UNION entre ambas consultas. UNION ALL funciona igual. La diferencia está en que UNION no retorna los campos duplicados, mientras que UNION ALL retorna todos los campos que se encuentren, sin importar si están o no duplicados.

Las consultas que se unan con UNION o UNION ALL deben tener la misma cantidad de columnas, con el mismo tipo de datos en ellas.

## Cardinalidad

En el contexto de las BDD, la **cardinalidad** hace referencia a la forma de relación que existe entre tablas. Los tipos de relaciones son:

- **Uno a Uno**: Un elemento de la tabla A, puede relacionarse solo con un elemento de la tabla B. Por ejemplo, una sola persona puede tener un solo padre.
- **Uno a Muchos**: Un elemento de la tabla A, puede relacionarse solo con muchos elementos de la tabla B. Por ejemplo, una sola persona puede tener muchos amigos.
- **Muchos a Muchos**: Muchos elementos de la tabla A pueden relacionarse con muchos elementos de la tabla B. Por ejemplo, muchos alumnos pueden tener muchos profesores.

## Normalización

La normalización es un proceso de diseño que nos permite aumentar la eficiencia de consultas en las BDD. Existen 5 niveles o formas normales de hacerlo:

1. Primera forma normal (FN1): En 1FN, cada tabla de la base de datos debe tener una clave primaria y todas las columnas deben contener valores atómicos, es decir, valores simples que no puedan descomponerse en partes más pequeñas. Además, no puede haber repeticiones de grupos de columnas.
2. Segunda forma normal (FN2): Para cumplir con la 2FN, la base de datos debe estar en 1FN y además, todas las columnas que no formen parte de la clave primaria deben depender completamente de la clave primaria. Así, por ejemplo, podemos separar Pedidos y Productos en dos tablas distintas, y relacionarlos mediante PK y FK.
3. Tercera forma normal (FN3): La 3FN requiere que la base de datos esté en 2FN y que no existan dependencias transitivas entre las columnas no clave. Esto significa que no debe haber ninguna columna que dependa de otra columna que no sea la clave primaria. Por ejemplo, Barrio y Ciudad son interdependientes y, para evitar la repetición de datos, se puede crear una tabla que los nuclee, relacionandolos mediante PK y FK.
4. Cuarta forma normal (FN4): La 4FN se refiere a la eliminación de dependencias multivaluadas. Esto significa que una tabla no debería contener conjuntos de datos que no están relacionados directamente con la clave primaria. Esto se puede ver en la creación de una tabla que relacione, con un PK, cada categoría con sus subcategorías, para poder luego indicar ese PK como FK dentro de la tabla de productos.
5. Quinta forma normal (FN5): La 5FN busca minimizar la redundancia de datos aún más, a través de la descomposición de relaciones en esquemas más pequeños y más especializados.

## Índices

Un **índice** de BDD tiene el objetivo de hacer más óptimas las consultas que se realizan. Esto funciona como el índice de un libro, indexando columnas que nos permiten realizar búsquedas más óptimas. Los índices pueden ser **únicos** y **no únicos**. Los _únicos_ son los PK, que no pueden tener valores únicos.

Para crear un índice en una tabla, debemos ejecutar `CREATE INDEX nombre ON TablaProductos (ProductName)`. Este tipo de índice permite campos nulos y duplicados, por lo cual son los _no únicos_.

Para los índices _únicos_ debemos escribir `CREATE UNIQUE INDEX nombre ON TablaProductos (ProductName)`. Esto hará que no se repitan los campos ni existan campos nulos.

En síntesis, la funcionalidad de los índices es hacer que las consultas requieran menos recursos y tiempo para ejecutarse, pudiendo afectarlas en una reducción temporal cercana al 30%, lo que, para grandes consultas, es UNA BARBARIDAD de tiempo. Por tanto, son sumamente útiles de crear, siempre que la consulta sea grande y valga la pena. Para consultas pequeñas y sencillas, no vale la pena el trabajo.

## Vistas

La **vista** es la forma en que se ve el resultado de la consulta. Para crear una vista, hacemos algo así:

```sql
CREATE VIEW Productos_simplificados AS
SELECT ProductID, ProductName, Price FROM Products
WHERE ProductID > 20 ORDER BY ProductID DESC
```

Así, puedo ejecutar luego `SELECT * FROM Productos_simplificados`, y tendremos todo el código anterior ya creado para obtener las vistas de forma super rápida. No se debe abusar de sus creaciones, pero pueden ser sumamente útiles. No debemos darle el mismo nombre a una vista que a una tabla, porque le dará prioridad a la vista y ello podría darnos problemas en consultas futuras.

# Sección Avanzada

## Bloqueos y transacciones

## Procedimientos almacenados

## Funciones definidas por el usuario

## Ejercicio combinado de SQL y Python

## Diferencias con otros DBMS
