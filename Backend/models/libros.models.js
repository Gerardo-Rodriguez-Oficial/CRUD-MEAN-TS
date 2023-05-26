import { DataTypes } from "sequelize";
import DBsequelize from "../conexion/bd.js";


const modelLibros = DBsequelize.define('Libro',{
    nombre : {
        type : DataTypes.STRING
    },
    editor : {
        type : DataTypes.STRING
    },
    description : {
        type : DataTypes.STRING
    },
    precio : {
        type : DataTypes.DOUBLE
    },
    stock : {
        type : DataTypes.NUMBER
    }
},{
    createdAt : false,
    updatedAt : false
})

export default modelLibros;