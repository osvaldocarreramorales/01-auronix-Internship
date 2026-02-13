# 01-auronix-internship - Rick and Morty API

Aplicacion desarrollada en React para la visualizacion de personajes de la API Rick and Morty, el proyecto esta enfocado, en la obtencion de datos consumiendo la API, filtracion de los datos obtenidos, y modificacion de los nombres de los personajes.

## Requerimientos tecnicos cubiertos

**Consumo de API**: La aplicacion extrae los datos que devuelve la API.
**Filtrado de datos**: Los datos obtenidos posteriormente son filtrados para mostrar unicamente los que tienen estatus `Alive`.
**Modificacion de datos**: Los datos filtrados se modifican de acuerdo con los requerimientos, se quitan todos los espacios de los nombres y se reemplazan estos mismos con guiones bajos `_`.
**Impresion de datos**: Los datos resultantes se muestran en consola y en la interfaz de la aplicacion.

## Buenas practicas realizadas

**Custom Hooks**: Se separo la logica compleja del componente principal para mantener su correcta legibilidad.
**Modularizacion de componentes**: Se realizo un componente aparte `CharacterCard` para mantener la legibilidad del componente principal.
**Paginacion**: Al observar la estructura de los datos que devuelve la API con POSTMAN se observo que tenia mas de una pagina, por lo tanto se implemento la paginacion para obtener todos los datos, esto con el fin de no saturar a la API y solo cargar mas datos si se requiere.
