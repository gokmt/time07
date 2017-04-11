app.factory("produtoService",produtoService);

function produtoService(){
  var listaProdutos = [];

  function getProdutos(){
    return listaProdutos;
  }

  function salvarProduto(produto){
    listaProdutos.push(produto);
  }

  return{
    getProdutos:getProdutos,
    salvarProduto:salvarProduto
  }
}
