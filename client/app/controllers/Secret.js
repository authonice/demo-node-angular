angular.module('demoApp').controller('SecretController', function($scope, $location, authonice){
  /**
   * In a production-app, all actual secret content should come form a locked-down server-side endpoint.
   * This isn't secure, it's just for illustrative purposes.
   */
  authonice.user().then(function(user){
    $scope.email = user.email;
  }, function(){
    $location.path('/');
  });
});
