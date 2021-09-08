const router = require('express').Router();
const nosotroscontroller = require('../controllers/nosotroscontroller.js');

// CONSULTAR TODOS LOS nosotros
router.get('/', nosotroscontroller.listarnosotros);

// CONSULTAR UN nosotros
router.get('/:id', nosotroscontroller.listarnosotross);

// AGREGAR nosotros
router.post('/', nosotroscontroller.agregarnosotros);

// ELIMINAR nosotros
router.delete('/:id', nosotroscontroller.eliminarnosotros);

// MODIFICAR nosotros
router.put('/:id', nosotroscontroller.editarnosotros);

module.exports = router;