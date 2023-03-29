/* Importando el MongoClient y ServerApiVersion del paquete de mongodb. */
const {MongoClient, ServerApiVersion } = require('mongodb')

/* Conectando al mongoDB Atlas cluster. */
const uri = "mongodb+srv://CarolinaCr:carolina96@cluster0.mubdllx.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

/* Exportando el cliente para ser usado en otros archivos. */
module.exports = client