
const express = require ('express')
const app = express()

/* Configuración del puerto 4000 si la variable de entorno port no se encuntra disponible.*/
const port= process.env.PORT || 4000

/* Importando la ruta del archivo comments. */
const commentsRouter = require ('./routes/comments')

/* A middleware*/
app.use(express.json())

/* Importando */
app.use('/comments',commentsRouter)

/* Escuchando el puerto 4000. */
app.listen(port, () => {
    console.log(`El servidor está escuchando en ${port}...`)
})