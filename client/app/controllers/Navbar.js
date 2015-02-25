angular.module('app').controller('NavbarCtl', function($rootScope, $scope, authonice, $location){
  $scope.direction = 'down';
  $scope.links = [];
  $scope.token = authonice.token;
  
  $scope.openMenu = function(){
    $scope.direction = $scope.direction === 'up' ? 'down' : 'up';
  };

  var linksIn = [
    {label:'secret', href:'/secret'},
    {label:'logout', href:'/logout'}
  ];

  var linksOut = [
    {label:'login', href:'/login'},
    {label:'register', href:'/register'}
  ];

  $scope.links = authonice.loggedIn() ? linksIn : linksOut;

  $rootScope.$on('$routeChangeSuccess', function(){
    $scope.direction = 'down';
    // force webkit redraw
    document.body.style.display='none';
    document.body.offsetHeight+=0;
    document.body.style.display='';
  });

  $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };
});