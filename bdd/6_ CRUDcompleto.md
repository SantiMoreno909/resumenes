# Relaciones y CRUD completo

## Relación 1:N

Para establecer relaciones, usamos dos funciones: **.belongsTo()** y **hasMany()**. Para hacerlo, debemos utilizar uno en cada controlador de las tablas. Un ejemplo sería:

```javascrip
//Controlador de peliculas
Pelicula.belongsTo(Genero, {
    foreignKey: 'genero_id', // nombre de la columna foránea
    as: 'generos' //Nombre de la asociación
})
```

```javascrip
//Controlador de generos
Genero.hasMany(Pelicula, {
    foreignKey: 'genero_id', // nombre de la columna foránea
    as: 'peliculas'
})
```

Para usarlo luego en los buscadores, debemos configurar los mismos con el atributo **include**, del siguiente modo: `Pelicula.findByPk(1, {include: ['genero']})`

## Relación N:M

## CRUD
