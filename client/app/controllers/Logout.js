angular.module('demoApp').controller('LogoutController', function($scope, $location, authonice){
  console.log('hi');
  authonice.logout();
  $location.url('/');
});