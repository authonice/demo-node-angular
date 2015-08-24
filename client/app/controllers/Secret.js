angular.module('demoApp').controller('SecretController', function($scope, $location, authonice){
  authonice.user().then(function(user){
    $scope.email = user.email;
  }, function(){
    $location.path('/');
  });
});
