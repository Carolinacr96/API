const express = require ('express')
const client = require ('../utils/connectdb/connect')
const {ObjectId } = require('mongodb')

/* Creando una ruta nueva object */
const routerComments = express.Router()

// Estas funciones son para encontrar los archivos.
routerComments.get('/', async(req, res)=>{
    try {
        await client.connect()
        const results = await client.db('Sena').collection('Comentarios').find({}).toArray()
        if(Array.isArray(results)>=1){
            res.status(200).json({
                status: 200, 
                amount_results: results.length,
                data: results 
            })
        }else{
                res.status(404).json({
                    status: 404,
                    message: "Comments not found"
                })

            
        }
    } finally {
        await client.close()
    }
    })

    routerComments.get('/:id', async (req, res)=>{
        let id = req.params.id
        try{
            await client.connect()
            const results = await client.db('Sena').collection('Comentarios').findOne({_id: new ObjectId(id)})
            if(results){
                res.status(200).json({
                    status: 200,
                    data: results 
                })
            }else{
                    res.status(404).json({
                        status: 404,
                        message: "Comment not found"
                    })
                }
        }finally{
            await client.close()
        }
    })

    // Creando un nuevo comentario
    routerComments.post('/', async(req, res)=>{
        const body = req.body
        try {
            await client.connect()
            const results = await client.db("Sena").collection("Comentarios").insertOne(body)
            if(results){
                res.status(201).json({
                    status: 201,
                    message: 'created coment',
                    data: results 
                })
            }else{
                    res.status(400).json({
                        status: 400,
                        message: "Comment not created"
                    })
                }
        } finally {
            await client.close()
        }
    })

    routerComments.post('/create_comments', async(req, res)=>{
        const body = req.body
        try {
            await client.connect()
            const results = await client.db("Sena").collection("Comentarios").insertMany(body)
            if(results){
                res.status(201).json({
                    status: 201,
                    message: 'created coments',
                    data: results 
                })
            }else{
                    res.status(400).json({
                        status: 400,
                        message: "Comments not created"
                    })
                }
        } finally {
            await client.close()
        }
    })


// Actualizando los comentarios
routerComments.patch('/:id', async(req, res)=>{
    let id = req.params.id
    const body = req.body
    try {
        await client.connect()
        const results = await client.db("Sena").collection("Comentarios").updateOne({_id: new ObjectId(id)},{$set : body})
        if(results){
            res.status(201).json({
                status: 201,
                message: 'updated comment',
                data: results 
            })
        }else{
                res.status(400).json({
                    status: 400,
                    message: "Comments not update"
                })
            }
    } finally {
        await client.close()
    }
})

routerComments.patch('/upsert/:id', async(req, res)=>{
    let id = req.params.id
    const body = req.body
    try {
        await client.connect()
        const results = await client.db("Sena").collection("Comentarios").updateOne({_id: new ObjectId(id)},{$set:body},{upsert:true})
        if(results){
            res.status(201).json({
                status: 201,
                message: 'updated comment',
                data: results 
            })
        }else{
                res.status(400).json({
                    status: 400,
                    message: "Comment not update"
                })
            }
    } finally {
        await client.close()
    }
})

routerComments.put('/updatemany', async(req, res)=>{
    const body = req.body
    try {
        await client.connect()
        const results = await client.db("Sena").collection("Comentarios").updateMany({numPost:{$eq:20}},{$set:body})
        if(results){
            res.status(201).json({
                status: 201,
                message: 'updated coments',
                data: results 
            })
        }else{
                res.status(400).json({
                    status: 400,
                    message: "Comments not update"
                })
            }
    } finally {
        await client.close()
    }
})

routerComments.put('/updatemany/upsert', async(req, res)=>{
    const body = req.body
    try {
        await client.connect()
        const results = await client.db("Sena").collection("Comentarios").updateMany({numPost:{$eq:101}},{$set:body},{upsert:true})
        if(results){
            res.status(201).json({
                status: 201,
                message: 'updated coments',
                data: results 
            })
        }else{
                res.status(400).json({
                    status: 400,
                    message: "Comments not update"
                })
            }
    } finally {
        await client.close()
    }
})


// Eliminando un comentario
routerComments.delete("/:id", async(req,res)=>{
    const id = req.params.id
    try{
        await client.connect()
        const results = await client.db("Sena").collection("Comentarios").deleteOne({_id: new ObjectId(id)})
        if(results){
            res.status(204).json({
                status: 204,
                message: 'deleted coment',
            })
        }else{
                res.status(404).json({
                    status: 404,
                    message: "Comment not found"
                })
            }
    }finally{
        await client.close()
    }
})


module.exports =routerComments


