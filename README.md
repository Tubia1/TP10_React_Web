# Catálogo de autos

## Descripción

Catálogo de vehículos desarrollado con React. La aplicación permite consultar modelos de distintas marcas, buscarlos, filtrarlos por país y marca, ver información adicional y crear una lista personal de favoritos.

## API utilizada

La fuente principal de información es la API pública **vPIC (Vehicle Product Information Catalog)** de la National Highway Traffic Safety Administration (NHTSA):

- Marcas de automóviles: `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`
- Modelos de una marca: `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/{makeId}?format=json`

Además, se utilizan las API públicas de **Wikimedia Commons** para obtener imágenes y de **Wikipedia** para mostrar descripciones adicionales de cada modelo. Las consultas HTTP se realizan con Axios.

## Organización de los componentes

La aplicación está organizada en componentes funcionales, cada uno con una responsabilidad concreta:

- `App`: administra el estado general, los filtros, los favoritos y las rutas.
- `Header`: muestra el encabezado y la navegación principal.
- `SearchBar`: controla el campo de búsqueda por marca o modelo.
- `Filters`: contiene los filtros por país y marca.
- `CarList`: genera el listado de autos mediante `map()`.
- `CarCard`: presenta la información de cada vehículo y permite agregarlo o quitarlo de favoritos.
- `CarImage`: obtiene y muestra la imagen correspondiente a cada modelo.
- `Favorites`: muestra en una vista independiente los vehículos guardados.
- `CarDetails`: presenta información ampliada del vehículo seleccionado.
- `LoadingMessage`, `ErrorMessage` y `EmptyMessage`: muestran los distintos estados de la consulta.

La obtención de marcas y modelos está separada en el hook personalizado `useCars`. Las funciones que consultan servicios externos se encuentran dentro de `src/services`.

## Funcionalidades implementadas

- Consulta de marcas y modelos desde una API externa con Axios.
- Indicadores de carga y mensajes de error.
- Listado de vehículos mediante componentes reutilizables.
- Imágenes obtenidas desde Wikimedia Commons.
- Búsqueda por nombre de marca o modelo.
- Filtros por país y marca.
- Mensaje cuando una búsqueda no produce resultados.
- Vista de información ampliada de cada modelo.
- Incorporación y eliminación de favoritos sin duplicados.
- Persistencia de favoritos mediante `localStorage`.
- Navegación con React Router entre Inicio y Favoritos.
- Redirección al inicio cuando se ingresa una dirección inexistente.
- Diseño adaptable a diferentes tamaños de pantalla.

## Ejecución local

```bash
npm install
npm run dev
```

Para comprobar la calidad y generar la versión de producción:

```bash
npm run lint
npm run build
```
