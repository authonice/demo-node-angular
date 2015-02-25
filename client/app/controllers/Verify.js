angular.module('demoApp').controller('VerifyController', function($scope, $routeParams, authonice){
  authonice.verify($routeParams.code)
    .then(function(){
      $scope.success = true;
    }, function(){
      $scope.error = true;
    });
});