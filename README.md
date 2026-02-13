# 01-auronix-internship - Rick and Morty API

Aplicación desarrollada en React para la visualización de personajes de la API Rick and Morty, el proyecto está enfocado, en la obtención de datos consumiendo la API, filtración de los datos obtenidos, y modificación de los nombres de los personajes.

## Requerimientos técnicos cubiertos

* **Consumo de API**: La aplicación extrae los datos que devuelve la API.
* **Filtrado de datos**: Los datos obtenidos posteriormente son filtrados para mostrar únicamente los que tienen estatus `Alive`.
* **Modificacion de datos**: Los datos filtrados se modifican de acuerdo con los requerimientos, se quitan todos los espacios de los nombres y se reemplazan estos mismos con guiones bajos `_`.
* **Impresion de datos**: Los datos resultantes se muestran en consola y en la interfaz de la aplicacion.

## Buenas prácticas realizadas

* **Custom Hooks**: Se separó la lógica compleja del componente principal para mantener su correcta legibilidad.
* **Modularización de componentes**: Se realizó un componente aparte `CharacterCard` para mantener la legibilidad del componente principal.
* **Paginación**: Al observar la estructura de los datos que devuelve la API con POSTMAN se observó que tenía más de una página; por lo tanto, se implementó la paginación para obtener todos los datos, esto con el fin de no saturar a la API y solo cargar más datos si se requiere.
