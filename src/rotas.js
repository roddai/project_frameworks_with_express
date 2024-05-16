const express = require('express');
const Controlador = require('./controlador');
const router = express.Router();

router.post('/addProduto', Controlador.addNovoProduto);
router.post('/removeProduto', Controlador.removeProduto);

module.exports = router;