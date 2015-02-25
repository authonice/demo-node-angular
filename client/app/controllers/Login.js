angular.module('demoApp').controller('LoginController', function($scope, $location, authonice){
  $scope.login = function(){
    $scope.success = false;
    $scope.error = false;
    authonice.login($scope.email, $scope.password)
      .then(function(){
        $location.url(authonice.originalRoute || '/');
      }, function(err){
        $scope.error = err.message;
      });
  };
});