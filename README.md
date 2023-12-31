# Documentación de la Pokedex App

La Pokedex App es una aplicación web que permite a los usuarios explorar información sobre Pokémon. Esta documentación proporciona una descripción general de la arquitectura, componentes principales y funcionalidades clave de la aplicación.

## Configuración del Proyecto

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno de desarrollo local:

1. **Clonar el Repositorio:**
   Abre una terminal y navega a la ubicación donde deseas almacenar el proyecto. Luego, ejecuta el siguiente comando para clonar el repositorio desde GitHub:
- Ejecute `git clone https://github.com/santiagochimko/Pokedex-App.git`
  
2. **Navegar a la Carpeta del Proyecto:**
Utiliza el siguiente comando para acceder a la carpeta del proyecto:
- `cd pokedex-app`

3. **Instalar Dependencias:**

Antes de ejecutar la aplicación, debes instalar las dependencias necesarias. Utiliza el siguiente comando para instalarlas:
- `npm install`
  
4. **Iniciar la Aplicación:**

Una vez que las dependencias estén instaladas, puedes iniciar la aplicación con el siguiente comando:
- `npm start`

## Tabla de Contenidos

- [Arquitectura](#arquitectura)
- [Componentes Principales](#componentes-principales)
  - [App](#app)
  - [Header](#header)
  - [Cards](#cards)
  - [ExpandedCard](#expandedcard)
- [Estilos y Recursos](#estilos-y-recursos)
- [Datos y APIs](#datos-y-apis)

## Arquitectura

La Pokedex App está construida utilizando tecnologías web modernas, incluyendo React para la creación de componentes interactivos y react-router-dom para el enrutamiento entre páginas.

## Componentes Principales

### App

El componente `App` es el componente principal de la aplicación. Gestiona el estado de filtrado y ordenación de los Pokémon y renderiza la interfaz principal.

- **Props**:
  - `handleFilterChange`: Función para manejar cambios en el valor de filtro.
  - `handleSortChange`: Función para manejar cambios en la ordenación.

### Header

El componente `Header` muestra la barra de navegación en la parte superior de la página. Permite a los usuarios filtrar y ordenar los Pokémon.

- **Props**:
  - `handleSortChange`: Función para manejar cambios en la ordenación.
  - `handleInputChange`: Función para manejar cambios en el valor del filtro.

### Cards

El componente `Cards` muestra una lista de tarjetas de Pokémon. Los datos se obtienen de la API de PokeAPI y se muestran en función del estado actual de filtrado y ordenación.

- **Props**:
  - `filterValue`: Valor de filtro actual.
  - `sortBy`: Criterio de ordenación actual.

### ExpandedCard

El componente `ExpandedCard` muestra detalles extendidos de un Pokémon cuando el usuario hace clic en una tarjeta de Pokémon. Muestra información detallada, como estadísticas, tipo, peso, altura y habilidades.

- No tiene props externas ya que utiliza el enrutamiento para obtener el ID del Pokémon de la URL.

## Estilos y Recursos

- Los estilos para los componentes se definen en archivos CSS específicos.
- Imágenes como flechas, logotipos y otros recursos se importan y utilizan en los componentes según sea necesario.

## Datos y APIs

- Se utiliza la API de PokeAPI para obtener información detallada sobre los Pokémon y su descripción de especies.


### Notas Adicionales
Asegúrate de tener `Node.js` y `npm` instalados en tu sistema antes de comenzar.
Si estás utilizando una configuración diferente, ajusta los pasos según sea necesario.


