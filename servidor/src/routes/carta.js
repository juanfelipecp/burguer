const router = require('express').Router();
const cartacontroller = require('../controllers/cartacontroller.js');

// CONSULTAR TODOS LOS carta
router.get('/', cartacontroller.listarcarta);

// CONSULTAR UN carta
router.get('/:id', cartacontroller.listarcartas);

// AGREGAR carta
router.post('/', cartacontroller.agregarcarta);

// ELIMINAR carta
router.delete('/:id', cartacontroller.eliminarcarta);

// MODIFICAR carta
router.put('/:id', cartacontroller.editarcarta);

module.exports = router;