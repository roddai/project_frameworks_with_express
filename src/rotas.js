const express = require('express');
const Controlador = require('./controlador');
const router = express.Router();

router.post('/addProduto', Controlador.addNovoProduto);

module.exports = router;