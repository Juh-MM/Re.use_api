const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/', productController.criarProduto);
router.get('/categoria/:categoria', productController.listarProdutosPorCategoria);
router.get('/', productController.listarTodosProdutos);

module.exports = router;
