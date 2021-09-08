const router = require('express').Router();
const telefonoscontroller = require('../controllers/telefonoscontroller.js');

// CONSULTAR TODOS LOS telefonos
router.get('/', telefonoscontroller.listartelefonos);

// CONSULTAR UN telefonos
router.get('/:id', telefonoscontroller.listartelefonoss);

// AGREGAR telefonos
router.post('/', telefonoscontroller.agregartelefonos);

// ELIMINAR telefonos
router.delete('/:id', telefonoscontroller.eliminartelefonos);

// MODIFICAR telefonos
router.put('/:id', telefonoscontroller.editartelefonos);

module.exports = router;