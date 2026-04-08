# CRUDDatosJS

Aplicación web de práctica construida con **HTML, CSS, JavaScript y Bootstrap 5**. El proyecto reúne en una sola interfaz varios ejercicios clave de JavaScript moderno: un módulo CRUD con `localStorage`, búsqueda con callbacks, validación con promesas, uso de `async/await` y destructuring de objetos.

## Tabla de contenido

- [Descripción](#descripción)
- [Objetivos del proyecto](#objetivos-del-proyecto)
- [Características principales](#características-principales)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación y ejecución](#instalación-y-ejecución)
- [Uso del sistema](#uso-del-sistema)
- [Despliegue](#despliegue)
- [Mejoras futuras](#mejoras-futuras)
- [Autor](#autor)
- [Licencia](#licencia)

## Descripción

Este proyecto fue diseñado como una práctica integral para reforzar conceptos fundamentales de JavaScript. Además de la lógica del CRUD, incorpora ejercicios orientados a comprender cómo funciona la asincronía, el manejo de datos y la manipulación del DOM desde una interfaz más clara y moderna.

La aplicación funciona directamente en el navegador, por lo que no requiere base de datos ni backend. Los registros creados se almacenan localmente mediante `localStorage`.

## Objetivos del proyecto

- Practicar operaciones CRUD en el navegador.
- Aplicar validaciones sobre formularios y datos repetidos.
- Comprender el uso de callbacks en flujos simples.
- Reforzar el manejo de promesas y `async/await`.
- Mostrar ejemplos básicos de destructuring de objetos.
- Presentar una interfaz organizada con Bootstrap para mejorar la experiencia visual.

## Características principales

### 1. Módulo CRUD

- Registro de usuarios con nombre, documento y correo electrónico.
- Edición de registros existentes.
- Eliminación de registros.
- Validación para evitar documentos o correos duplicados.
- Persistencia de datos usando `localStorage`.
- Mensaje visual cuando no existen registros.

### 2. Módulo de Callbacks

- Simulación de búsqueda de países en dos bases de datos.
- Uso de funciones callback para encadenar la búsqueda.
- Respuesta visual de éxito o error.

### 3. Módulo de Promises

- Validación de si una cadena termina en vocal.
- Manejo de resolución y rechazo de promesas.

### 4. Módulo Async/Await

- Cálculo del doble de un número con retraso simulado.
- Ejemplo práctico de asincronía con sintaxis moderna.

### 5. Módulo de Destructuring

- Visualización de un objeto JavaScript.
- Extracción de propiedades específicas mediante destructuring.

## Tecnologías utilizadas

- **HTML5** para la estructura de la aplicación.
- **CSS3** para estilos personalizados.
- **Bootstrap 5** para maquetación, componentes y diseño responsivo.
- **Bootstrap Icons** para apoyo visual en botones y secciones.
- **JavaScript (ES6+)** para la lógica de negocio y manipulación del DOM.
- **Browser Sync** para desarrollo local con recarga automática.

## Estructura del proyecto

```text
cruddatosJS-main/
|-- index.html
|-- package.json
|-- README.md
|-- readme.md
|-- public/
|   `-- imagenes/
|       `-- logosena.png
`-- src/
    |-- feature/
    |   |-- asyncawait/
    |   |-- callbacks/
    |   |-- crud/
    |   |-- destructuring/
    |   `-- promise/
    `-- shared/
        `-- css/
            `-- styles.css
```

## Instalación y ejecución

### Opción 1: abrir directamente en el navegador

1. Descarga o clona el repositorio.
2. Abre el archivo `index.html` en tu navegador.

### Opción 2: ejecutar en entorno local con npm

1. Instala las dependencias:

```bash
npm install
```

2. Inicia el servidor de desarrollo:

```bash
npm run dev
```

3. Abre la URL local que muestre Browser Sync en la terminal.

## Uso del sistema

### CRUD

1. Ingresa nombre, documento y email.
2. Haz clic en `Guardar registro`.
3. Usa los botones de editar o eliminar en la tabla.
4. Los datos quedan guardados en el navegador.

### Callbacks

1. Escribe el nombre de un país.
2. Presiona `Buscar`.
3. El sistema indicará si el país fue encontrado o no.

### Promises

1. Escribe una palabra o texto.
2. Presiona `Validar vocal final`.
3. Se mostrará si el último carácter es una vocal.

### Async / Await

1. Ingresa un número.
2. Presiona `Calcular doble`.
3. Después de una breve espera, verás el resultado.

### Destructuring

1. Observa el objeto mostrado en pantalla.
2. Presiona `Extraer datos`.
3. Se renderizarán las propiedades extraídas del objeto.

## Despliegue

El proyecto puede publicarse fácilmente en **GitHub Pages** porque es un sitio estático.

### Pasos recomendados

1. Sube el proyecto al repositorio de GitHub.
2. En GitHub, entra a `Settings`.
3. Abre la sección `Pages`.
4. En `Build and deployment`, selecciona:
   - `Source: Deploy from a branch`
   - `Branch: main`
   - `Folder: / (root)`
5. Guarda los cambios y espera unos minutos.

URL esperada del despliegue:

```text
https://juanjosma241215-stack.github.io/cruddatosJS/
```

## Mejoras futuras

- Agregar validaciones visuales más avanzadas en formularios.
- Incorporar búsqueda y filtrado en la tabla CRUD.
- Añadir paginación o exportación de datos.
- Separar cada módulo en componentes o vistas independientes.
- Integrar almacenamiento persistente con una API o base de datos real.

## Autor

**Juan Mazo**  
Desarrollador del proyecto y responsable de la implementación, estructura y publicación del repositorio.

- GitHub: [@juanjosma241215-stack](https://github.com/juanjosma241215-stack)

Si deseas, puedes ampliar esta sección más adelante con tu correo, LinkedIn, portafolio o ficha académica.

## Licencia

Este proyecto fue creado con fines académicos y de práctica. Puedes adaptarlo y mejorarlo libremente para aprendizaje personal.
