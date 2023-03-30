# Mongo API REST 🚀

En este proyecto se creará una API REST basada en Js con Express y MongoDB Atlas.

## Verémos 👩‍💻
- Utilización de express.
- Conexión a Mongodb.
- Configuración y escucha del puerto.
- Creación de rutas.
- Comunicación entre archivos utilizando `module.exports`
- CRUD utilizando **get, post, patch, put y delete.**

## Archivos 📂

- **SRC:** Dentro de esta carpeta encontramos otras 2 carpetas, **routes** y **utils**, y el archivo `app.js`, en este archivo se encuentran la configuración del puerto, las rutas, el Middleware y el express.

- **ROUTES:** Encontramos el archivo `comments.js`, el cual contiene toda la funcionalidad del CRUD.

- **UTILS:** Tenemos una carpeta que se llama **connectdb** y dentro de ella hay un archivo llamado `connect.js`, que es donde realizamos la conexión al mongoDB Atlas cluster

## Tener en cuenta 📝
Para correr el proyecto se debe digitar en la terminal el siguiente comando:

`$ npm run start`

## End 🔚

Gracias profe por leer este documento, espero que este sea útil.
