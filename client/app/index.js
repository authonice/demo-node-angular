require('angular');
require('angular-route');
require('authonice-angular');

var app = angular.module('app', [
  'ngRoute',
  'authonice'
]);

require('./controllers/Navbar.js');
require('./controllers/Home.js');
require('./controllers/Secret.js');
require('./controllers/Login.js');
require('./controllers/Logout.js');
require('./controllers/Register.js');
require('./controllers/Verify.js');

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeCtl'
      })

      .when('/secret', {
        templateUrl: '/templates/secret.html',
        controller: 'SecretCtl'
      })

      .when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtl'
      })

      .when('/logout', {
        controller: 'LogoutCtl'
      })

      .when('/register', {
        templateUrl: '/templates/register.html',
        controller: 'RegisterCtl'
      })

      .when('/verify/:code', {
        templateUrl: '/templates/verify.html',
        controller: 'VerifyCtl'
      })
      
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  }]);