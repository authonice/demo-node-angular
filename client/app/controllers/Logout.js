angular.module('demoApp').controller('LogoutController', function($location, authonice){
  authonice.logout();
  $location.url('/');
});