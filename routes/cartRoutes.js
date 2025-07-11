// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/adicionar', cartController.adicionarAoCarrinho);
router.get('/', cartController.verCarrinho);
router.delete('/remover', cartController.removerDoCarrinho);


module.exports = router;
