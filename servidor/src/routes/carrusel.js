const router = require('express').Router();
const carruselcontroller = require('../controllers/carruselcontroller.js');

// CONSULTAR TODOS LOS carrusel
router.get('/', carruselcontroller.listarcarrusel);

// CONSULTAR UN carrusel
router.get('/:id', carruselcontroller.listarcarrusels);

// AGREGAR carrusel
router.post('/', carruselcontroller.agregarcarrusel);

// ELIMINAR carrusel
router.delete('/:id', carruselcontroller.eliminarcarrusel);

// MODIFICAR carrusel
router.put('/:id', carruselcontroller.editarcarrusel);

module.exports = router;