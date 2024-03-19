# Ejercicios resueltos de MySQL

1. Obtener los datos completos de los Empleados

`SELECT * FROM Empleados;`

2. Obtener los datos completos de los Departamentos

`SELECT * FROM Departamentos`

3. Obtener los datos de los Empleados con cargo 'Secretaria'

`SELECT * FROM Empleados WHERE cargoE = 'Secretaria'`

4. Obtener nombre y salario de los Empleados

`SELECT nomEmp, salEmp FROM Empleados;`

5. Obtener el nombre de los Empleados vendedores, ordenados por nombre

`SELECT nomEmp FROM Empleados WHERE cargoE = 'Vendedor' ORDER BY nomEmp`

6. Listar el nombre de los Departamentos

`SELECT DISTINCT nombre FROM Departamentos`

7. Obtener nombre y cargo de los Empleados, ordenados por salario

`SELECT nomEmp, cargoE FROM Empleados ORDER BY salEmp`

8. Listar los salarios y comisiones de los empleados del departamento 2000, ordenado por comisión

`SELECT nomEmp, cargoE, salEmp, comisionE FROM Empleados WHERE codDepto = 2000 ORDER BY comisionE`

9. Listar todas las comisiones

`SELECT  nomEmp, comisionE FROM Empleados`

10. Obtener el valor total a pagar que resulta de sumar a los empleados del departamento 3000 una bonificación de 500.000, en orden alfabético del empleado

```sql
SELECT nomEmp, salEmp, codDepto, sum(salEmp+500000) AS pagoEstimado
FROM Empleados
WHERE codDepto = 3000
ORDER BY nomEmp;
```

11. Obtener la lista de los empleados que ganan una comisión superior a su sueldo.

`SELECT nomEmp FROM Empleados WHERE comisionE > sueldoE`

12. Listar los empleados cuya comisión es menor o igual que el 30% de su sueldo.

```sql
SELECT nomEmp
FROM Empleados
WHERE comisionE <= (salEmp * 0.3);
```

13. Elabore un listado donde para cada fila, figure ‘Nombre’ y ‘Cargo’ antes del valor respectivo para cada empleado.
14. Hallar el salario y la comisión de aquellos empleados cuyo número de documento de identidad es superior al '19.709.802'
15. Muestra los empleados cuyo nombre empiece entre las letras J y Z (rango). Liste estos empleados y su cargo por orden alfabético.
16. Listar el salario, la comisión, el salario total (salario + comisión), documento de identidad del empleado y nombre, de aquellos empleados que tienen comisión superior a 1.000.000, ordenar el informe por el número del documento de identidad
17. Obtener un listado similar al anterior, pero de aquellos empleados que NO tienen comisión
18. Hallar los empleados cuyo nombre no contiene la cadena "MA"
19. Obtener los nombres de los departamentos que no sean “Ventas” ni “Investigación” NI 'MANTENIMIENTO'.
