# Manipulación y consulta de datos

## Insert, Update y Delete

**INSERT** permite agregar datos en una tabla. Existen dos formas de hacerlo: Insertando datos en **todas las columnas**, o haciéndolo solo en las **columnas que especifiquemos**.

Si estamos incertando datos en todas las columnas, no hace falta declarar el nombre de cada columna. Sin embargo, el orden en que insertemos los valores deberá ser el orden de asignación de las columnas en la tabla:

```sql
INSERT INTO usuarios (id, nombre, apellido)
VALUES (DEFAULT, 'Max', 'Verstappen');
```

Que sería lo mismo que:

```sql
INSERT INTO usuarios
VALUES (DEFAULT, 'Max', 'Verstappen');
```

Si lo hacemos en columnas específicas, si debemos insertar los nombres de las columnas luego de declarar la tabla:

```sql
INSERT INTO usuarios (nombre, apellido)
VALUES ('Max', 'Verstappen');
```

**UPDATE** modificará los registros existentes en una tabla. Es importante utilizar siempre WHERE en la sentencia paara agregar la condición de cuáles son las filas que queremos actualizar. Por ejemplo:

```sql
UPDATE usuarios
SET nombre = 'Sergio', apellido = 'Perez'
WHERE id = 1;
```

**DELETE** permite borrar información de una tabla. El WHERE también será importante para eliminar la columna que deseemos, y no eliminar toda la tabla:

```sql
DELETE FROM usuario WHERE usuarios_id = 4;
```

## Select

Toda consulta en la BDD va a empezar con la palabra **SELECT**. Su funcionalidad es realizar consultas sobre una o varias columnas de una tabla. Para especificar sobre que tabla queremos realizar la consulta, usaremos FROM seguido del nombre de la tabla:

```sql
SELECT nombre, apellido
FROM usuarios;
```

## Where y Order by

La función del WHERE es la de condicionar y filtrar las consultas SELECT que se realizan a una base de datos, tal como vimos en los ejemplos anteriores. Los operadores que podemos utilizar son:

- **=**: Igual a;
- **>**: Mayor que;
- **>=**: Mayor o igual que que;
- **<**: Menor que;
- **<=**: Menor o igual que;
- **<>**: Diferente a;
- **!=**: Diferente a;
- **IS NULL**: Es nulo;
- **BETWEEN**: Entre dos valores;
- **IN**: Lista de valores;
- **LIKE**: Se ajusta a...

**ORDER BY** se utiliza para ordenar los resultados de una consola **según el valor de la columna especificada**. Por defecto, ordena de forma ascendente (ASC), pero podemos indicarle que lo haga de forma descendente (DESC).

## Between y like

Cuando necesitamos obtener valores dentro de un rango, usamos el operador **BETWEEN**. Este incluye los extremos, funciona con números, textos y fechas, y se usa como filtro de un WHERE.

Cuando hacemos un filtro con un **WHERE**, podemos especificar un patrón de búsqueda que nos permita especificar algo concreto que queremos encontrar en los registros. Eso lo logramos usando **comodines**, por ejemplo, buscando la letra "a" como segundo caracter, o una direccióon postal específica. Las opciones de comodines son:

- **%**: Es un sustituto que representa cero, uno o varios caracteres.
- **\_**: Es un sustituto para un solo caracter.

Por ejemplo:

```sql
SELECT nombre
FROM usuarios
WHERE nombre LIKE '_a%'
```

## Limit y offset

La función de **LIMIT** es limitar el número de filas devueltas en las consultas **SELECT**. También establece el número máximo de registros a eliminar con **DELETE**. Por ejemplo, armamos un top 10 de películas con más de 4 premios así:

```sql
SELECT *
FROM peliculas
WHERE premios > 4
LIMIT 10;
```

**OFFSET** nos permite especificar a partir de qué fila comenzar la recuperación de los datos solicitados.

## Alias

Los **alias** se utilizan para darle un nombre temporal y más amigable a las tablas, columnas y funciones. Los alias se definen durante una consulta y persisten solo durante esa consulta. Para definir un alias usamos las iniciales **AS** precediendo a la columna que estamos queriendo asignarle ese alias:

```sql
SELECT nombre_columna1 AS alias_nombre_columna1
FROM nombre_tabla;
```

Los alias no modifican los nombres originales en la base de datos.

## Funciones de alteración

En muchas ocasiones, vamos a necesitar que nuestra consulta no solo traiga datos solicitados, sino que, a su vez, queremos realizar operaciones con ellos, tales como unificar datos de dos columnas en una sola, o quiza poner algún valor por defecto para registros de almacenamiento nulo. Para esto sirven las funciones de alteración. Las más comunes son:

- CONCAT: Para concatenar dos o más expresiones. Por ejemplo `SELECT CONCAT ('Hola ', 'a ', 'todos.');`
- COALESCE: Permite obtener la primera expresión que no sea NULL.
- DATEDIFF: Devuelve la diferencia en días entre dos fechas.
- EXTRACT: Para extrar partes de una fecha. Se debe indicar en mayúscula, por ejemplo: `SELECT EXTRACT(SECOND FROM '2014-02-13 08:44:21');`.
- REPLACE: Permite remplazar una secuencia de caracteres por otra en un string, por ejemplo: `SELECT REPLACE ('abc abc', 'a', 'B')` para buscar las 'a' y sustituirlas por 'B'.
- DATE_FORMAT: Le da a una fecha un formato determinado, para formaterarla según deseemos, por ejemplo: `SELECT DATE_FORMAT('2017-06-15', '%Y')` extraerá solo el año.
- CASE: Se usa para evaluar condiciones y devolver la primera que se cumpla. Por ejemplo:

```sql
SELECT id, title, rating,
    CASE
        WHEN rating < 4 THEN 'Mala'
        WHEN rating < 6 THEN 'Regular'
        WHEN rating < 8 THEN 'Buena'
        WHEN rating < 9.5 THEN 'Muy buena'
        ELSE 'Excelente'
    END AS rating_categories
FROM movies
ORDER BY rating;
```
