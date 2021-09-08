const router = require('express').Router();
const docencontroller = require('../controllers/docencontroller.js');

// CONSULTAR TODOS LOS docen
router.get('/', docencontroller.listardocen);


// AGREGAR docen
router.post('/', docencontroller.agregardocen);

// asignar mate
router.put('/docen/:id', docencontroller.asignarma_docen);

// asignar mate estu
router.put('/estu/:id', docencontroller.asignarma_estu);


module.exports = router;