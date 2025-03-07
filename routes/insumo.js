const express = require('express');
const router = express.Router();
const insumoController = require('../controllers/insumoController');
const { verifyToken, verifyRole } = require('../middleware/authMiddleware');

router.get('/', verifyToken, insumoController.getInsumos);
router.put('/:id', verifyToken, verifyRole(['administrador']), insumoController.updateInsumo);
router.get('/caducidad', verifyToken, insumoController.getInsumosCaducidad);

module.exports = router;