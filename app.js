var app = angular.module("app",["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
    .when('/produto',{
        templateUrl:"templates/produto.html",
        controller:"produtoCtrl"
    })
    .when('/produto/produtoForm',{
        templateUrl:"templates/produto-form.html",
        controller:"produtoCtrl"
    })
    .otherwise({
      redirectTo:"/"
    });
});

app.config(function($locationProvider){
    $locationProvider.hashPrefix('');
});
