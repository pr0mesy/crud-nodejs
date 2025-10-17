const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.listarProdutos);
router.get('/:id', produtoController.listarProdutoPorId);
router.post('/', produtoController.criarProduto);
router.patch('/:id', produtoController.atualizarProduto);
router.delete('/:id', produtoController.deletarProduto);

module.exports = router;
