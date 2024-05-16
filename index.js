const express = require('express');
const roteador = require('./src/rotas');

const app = express();
const port = 3000;

app.use(express.json());
app.use(roteador);

app.get('/', (request, response) => {
  response.send('Seja bem-vindo ao conteúdo de Express.js');
});

app.listen(port, () => {
  console.log(`Exemplo de aplicação rodando na porta ${port}`)
});
