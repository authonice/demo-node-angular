angular.module('demoApp').controller('RegisterController', function($scope, authonice, $location){
  $scope.register = function(){
    if ($scope.password !== $scope.password2){
      $scope.error = 'Please type the same password in both boxes.';
    }else{
      $scope.error = false;
      $scope.success = false;
      authonice.register($scope.email, $scope.password)
        .then(function(){
          $scope.success = 'Cool. Go check the console for your verify link.';
        }, function(err){
          $scope.error = 'An error occurred.';
          if (err.type === 'emailDupe'){
            $scope.error = 'There is already a user with that email address.';
          }
        });
    }
  };
});