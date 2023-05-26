import express from 'express'
import cors from 'cors'
import DBsequelize from './conexion/bd.js'
import routeLibros from './routes/libros.routes.js'
// const routeLibros = require('./routes/libros.routes')

const app = express()
const PORT = 3000 

// middleware
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/libros', routeLibros)

const  coneccDB = async() => {
    try {
        await DBsequelize.authenticate()
        console.log('Conectado a la BD')
    } catch (error) {
        console.log(error)
    }
}

coneccDB();


app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto',PORT)
})   