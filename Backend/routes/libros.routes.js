import { Router } from "express";
import { deleteLibro, getLibro, getLibros, postLibro, putLibro } from "../controllers/libros.controllers.js";
const route = Router()
// const { getLibros } = require("../controllers/libros.controllers");

route.get('', getLibros)

route.get('/:id', getLibro)

route.post('', postLibro)

route.put('/:id', putLibro)

route.delete('/:id', deleteLibro)

export default route