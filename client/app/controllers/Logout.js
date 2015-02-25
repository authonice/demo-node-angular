angular.module('app').controller('LogoutCtl', function($scope, $location, authonice){
  authonice.logout();
  $location.url('/');
});