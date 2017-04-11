app.controller("produtoCtrl",produtoCtrl);

function produtoCtrl(produtoService,$scope,$location){
  $scope.produto = {};

  function salvarProduto(produto){
      produtoService.salvarProduto(produto);
      $location.path('produto');
  }

  function listarProdutos(){
    $scope.listaProdutos = produtoService.getProdutos();
  }

  listarProdutos();
  $scope.salvarProduto = salvarProduto;
}
