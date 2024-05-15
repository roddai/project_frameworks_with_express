const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send('Seja bem-vindo ao conteúdo de Express.js');
})

app.listen(port, () => {
  console.log(`Exemplo de aplicação rodando na porta ${port}`)
})
