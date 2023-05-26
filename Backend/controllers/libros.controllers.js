import DB1sequelize from "../conexion/bd.js"
import modelLibros from "../models/libros.models.js"


export const getLibros = async(req,res) => {
        const listLibros = await modelLibros.findAll()
        // console.log(listLibros)
     res.json(listLibros)
}

export const getLibro = async(req,res) => {
    const {id} = req.params
    const libro = await modelLibros.findByPk(id)

    if(libro){
        res.json(libro)
    }else{
        res.status(404).json({msg : 'No existe el libro'})
    }   
}

export const postLibro = async (req,res) => {
    const {body} = req

        try {
            const saveLibro = await modelLibros.create(body)
            res.json(saveLibro)
        } catch (error) {
            console.log(error)
            res.status(404).json({msg : 'Upps ha ocurrido un error comunicarse con Soporte'})
        }
        

    // console.log(body)
}

export const putLibro = async (req,res) => {
    const {id} = req.params
    const {body} = req

    const updateLibro = await modelLibros.findByPk(id)

    if(updateLibro){
       await updateLibro.update(body)
        res.json({
            msg : 'EL libro se ha actualizado con exito'
        })
    }else{ 
        res.status(404).json({msg : 'No existe el Libro para actualizar'})
    }

    // res.json({
    //     msg : 'put Libro',
    //     id
    // })
}

export const deleteLibro = async (req,res) => {
    const {id} = req.params

    const deleteLibro = await modelLibros.findByPk(id)
    
    if(deleteLibro){
        await deleteLibro.destroy(id)
        res.json({msg :'el libro se ha borrado con exito'})
    }else{
        res.status(404).json({msg : 'error no existe el libro para eliminar'})
    }

}
