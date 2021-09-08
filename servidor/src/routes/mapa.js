const router = require('express').Router();
const mapacontroller = require('../controllers/mapacontroller.js');

// CONSULTAR TODOS LOS mapa
router.get('/', mapacontroller.listarmapa);

// CONSULTAR UN mapa
router.get('/:id', mapacontroller.listarmapas);

// AGREGAR mapa
router.post('/', mapacontroller.agregarmapa);

// ELIMINAR mapa
router.delete('/:id', mapacontroller.eliminarmapa);

// MODIFICAR mapa
router.put('/:id', mapacontroller.editarmapa);

module.exports = router;