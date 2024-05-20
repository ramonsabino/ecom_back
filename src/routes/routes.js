const express = require('express');
const router = express.Router();

// Importar o controlador de produtos
const produtoController = require('../controllers/ProductController');

// Rotas
router.get('/produtos', produtoController.getAllProducts);

// Exportar o router
module.exports = router;
