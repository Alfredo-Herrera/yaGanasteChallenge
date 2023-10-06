# 💻 Prueba Ya Ganaste! Systems

Applicación de prueba realiza con Next.js

## 🧰 Pre-requisitos

Para poder iniciar el siguiente proyecto se necesita contar las siguientes instalaciones:

-   **[NodeJS](https://nodejs.org/en/download/) :** Es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación, la versión LTS actual es 16.13.1 _ECMAScript_.

-   **[Yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable) :** Es un tipo de instalador de paquetes JavaScript y gestor de dependencias lanzado por _Facebook_.

-   **[IDE]:** Se recomienda el uso de [VisualCode](https://code.visualstudio.com/) con la instalación de los siguientes plugins. [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) y [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## ⚙️ Instalación

### 👟 Paso 1

Iniciaremos clonando el repositorio, esto lo podemos hacer se la siguiente manera.

```shell
    git clone git@github.com:Alfredo-Herrera/yaGanasteChallenge.git
```

> **🔖 Nota :** Es importante recordar que para clonar el repo se tiene que hacer mediante `SSH`, en caso de no saber cómo se pueden seguir las siguiente guía [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh).

### 👟 Paso 2

Procederemos a realizar la instalación de las dependencias que utiliza el proyecto.

```shell
    $ yarn install
```

### 👟 Paso 3

Procederemos a ejecutar el siguiente comando:

```shell
    $ yarn dev
```

### 👟 Paso 4

Al levantar el proyecto, podremos ver la `Prueba` en la siguiente `url`, [http://localhost:3000](http://localhost:3000).

## 🔗 Url

[https://ya-ganaste-challenge.vercel.app/](https://ya-ganaste-challenge.vercel.app/)

### 🧐 Como se abordó el problema ?

-   Revisión de la documentación.
-   Generación los archivos necesarios para crear la aplicacion en next.js
-   Se agregaron de los archivos para implementar eslint, prettier, jest, typecript, material UI
-   Generación las páginas de la aplicación
-   Generación de archivos para hacer funcionar Redux
-   Generación de componentes reutilizables
-   Generación de lógica para los componentes
-   Generación de lógica las Thunk de Redux
-   Obtención de datos desde la API
-   Renderización de los datos de la API
-   Deploy en producción (se agregaron variables de entorno)
-   Corrección de errores

### ✍🏻 Features Adicionales

-   [Module path aliases] En el proyecto se implementó la integración de Module path aliases.
-   [Eslint] En el proyecto se integro Eslint para evitar errores.
-   [Styled-Components] En el proyecto se integró la tecnologia Styled-Components.
-   [Next.js] En el proyecto se integró Next/GetServerSideProps Next/Link, Next/GetLayout, Next/Image Next/Head .
-   [Redux] En el proyecto se integró Redux.
-   [Form] Se integró Formik y Yup para las validaciones del formulario.
-   [Alerts] En el proyecto se integraron Notificaciones para darle feedback al usuario cuando sucede un error del lado del servidor.
-   [Next.js] Obtención de la información de la API de lado del servidor.
-   [404] En el proyecto se integró la página de 404.
-   En la page [/contact](https://ya-ganaste-challenge.vercel.app/contact) se implementó logica para guardar el filtro de la búsqueda de los resultados de la API en Redux para que el usuario cuando regresa a la pagina principal pueda volver a ver el filtro aplicado a los resultados de la API.
