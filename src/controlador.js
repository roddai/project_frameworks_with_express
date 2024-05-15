const db = require('./conexao');

class Controlador {
  addNovoProduto(request, response) {
    const { prod_id, prod_nome, prod_preco } = request.body;

    db.insert({ prod_id, prod_nome, prod_preco })
      .table("produto")
      .then(() => {
        response.json({ message: "Novo produto adicionado!" });
      }).catch(error => {
        console.log(error);
      })
  }
}

module.exports = new Controlador();
