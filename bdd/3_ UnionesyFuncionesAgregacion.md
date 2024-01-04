# Uniones y funciones de agregación

## Joins

Imaginémonos el siguiente escenario: tenemos una tabla que almacena los datos de una persona, pero sabemos que esa tabla, a su vez, está asociada con otra que almacena las imágenes que postea una persona. Sin embargo, esta última tabla, el único dato que tiene para identificar a la persona dueña de esa imagen es el ID de la misma. Es decir, el ID que le corresponde a esa persona en la tabla de personas.

Si este es el caso: ¿cómo podríamos, por ejemplo, traer en una sola consulta las imágenes que pertenecen al ID 5? Es decir, ¿cómo podemos traer todas las imágenes que pertenecen a una persona si esa información está presente en otra tabla? Pues bien, para lograr esto, MySQL nos proporciona una herramienta llamada JOINS. Estos, tal como su nombre lo indica, no son otra cosa que uniones entre distintas tablas que tienen algún tipo de relación entre sí.

Los **JOINS**, al permitir hacer consultas en disintas tablas y unir los resultados, son más flexibles, su sintaxis es más utilizada, y presentan una mejor performance.

El **INNER JOIN** hará una cruza entre dos tablas, retornando los datos que se presenten en ambas tablas. Por ejemplo, solicitando una combinación entre las tablas **clientes** y **ventas**, el INNER JOIN no traerá a los clientes que no hayan realizado compras.

En los casos **LEFT JOIN** y **RIGHT JOIN**, estos no excluyen los resultados de alguna de las dos tablas. Así, para el caso anterior, si hubiera clientes sin ventas, podríamos incluirlos en el resultado mediante left o right. Por ejemplo:

```sql
SELECT clientes.id AS id, clientes.nombre, ventas.fecha
FROM clientes
INNER JOIN ventas;
```

Si bien ya dimos el primer paso, que es cruzar ambas tablas, aún nos falta aclarar dónde esta ese cruce. Es decir, qué **CLAVE PRIMARIA PK** se cruzará con qué **CLAVE FORANEA FK**.

La sintaxis del join **no utiiza el WHERE**, sino que **requiere la palabra ON**. Esto se vería así:

```sql
SELECT clientes.id AS id, clientes.nombre, ventas.fecha
FROM clientes
INNER JOIN ventas
ON clientes.id = ventas.cliente_id;
```

Para crear **LEFT** o **RIGHT**, lo que deberíamos hacer es cambiar **INNER** por una de esas dos palabras. LEFT incluirá, en el ejemplo anterior, los clientes que no tengan ventas asociadas, mientras que RIGHT incluirá las ventas que no tengan clientes asociados.

Para **cruzar muchas tablas**, deberíamos ir encadenando las mismas, tal como se ve en este ejemplo:

```sql
SELECT clientes.id AS id, clientes.nombre, ventas.fecha
FROM clientes
INNER JOIN ventas
ON clientes.id = ventas.cliente_id
INNER JOIN productos
ON productos.id = ventas.producto_id;
```

## Distincts

La cláusula **DISTINCT nos devuelve valores únicos**. En una tabla, una columna puede contener valores duplicados y algunas veces solo necesitamos un listado con los valores diferentes, es decir, que no aparezcan aquellos que están repetidos.

```sql
SELECT DISTINCT columna_1, columna_2
FROM nombre_tabla;
```

## Group by

**GROUP BY** se usa para agrupar los registros de la tabla resultante de una consulta por una o más columnas.

## Funciones de agregación

Las funciones de agregación realizan cálculos sobre un conjunto de datos y devuelven un único resultado, excepto COUNT, las funciones de agregación ignorarán los valores NULL. Las más comunes son:

- COUNT: Devuelve la cantidad de filas/registros que cumplen con el criterio. Por ejemplo, `SELECT COUNT(id) AS total FROM movies WHERE genre_id = 3;` devolverá la cantidad de películas de la tabla movies con el genero_id 3 en una columna con el nombre **total**.
- AVG, SUM: AVG devolverá el promedio de una columna con valores numéricos, mientras que SUM devolverá la suma de una columna con valores numéricos.
- MIN, MAX: MIN devolverá el valor mínimo de una columna con valores numéricos, mientras que MAX devolverá el valor máximo de una columna.

## Having

Cumple la misma función que WHERE, pero HAVING se va a poder usar en conjunto con las funciones de agregación para filtrar datos agregados. Por ejemplo:

```sql
SELECT COUNT(cliente_id), pais
FROM clientes
GROUP BY pais
HAVING COUNT(clienteId) > 3;
```
