const router = require('express').Router();
const redescontroller = require('../controllers/redescontroller.js');

// CONSULTAR TODOS LOS redes
router.get('/', redescontroller.listarredes);

// CONSULTAR UN redes
router.get('/:id', redescontroller.listarredess);

// AGREGAR redes
router.post('/', redescontroller.agregarredes);

// ELIMINAR redes
router.delete('/:id', redescontroller.eliminarredes);

// MODIFICAR redes
router.put('/:id', redescontroller.editarredes);

module.exports = router;