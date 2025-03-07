const express = require('express');
const router = express.Router();
const peticionController = require('../controllers/peticionController');
const { verifyToken, verifyRole } = require('../middleware/authMiddleware');

router.post('/', verifyToken, verifyRole(['administrador', 'medico']), peticionController.createPeticion);
router.get('/', verifyToken, peticionController.getPeticiones);
router.put('/:id', verifyToken, verifyRole(['administrador']), peticionController.updatePeticion);
router.get('/:id/pdf', verifyToken, peticionController.getPeticionPDF);

module.exports = router;