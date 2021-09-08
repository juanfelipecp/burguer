const router = require('express').Router();
const appcontroller = require('../controllers/appcontroller.js');

// CONSULTAR TODOS LOS APP
router.get('/', appcontroller.listarapp);

// CONSULTAR UN APP
router.get('/:id', appcontroller.listarapps);

// AGREGAR APP
router.post('/', appcontroller.agregarapp);

// ELIMINAR APP
router.delete('/:id', appcontroller.eliminaapp);

// MODIFICAR APP
router.put('/:id', appcontroller.editarapp);

module.exports = router;