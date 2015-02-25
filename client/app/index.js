require('angular');
require('angular-route');
require('authonice-angular');

var app = angular.module('demoApp', [
  'ngRoute',
  'ngAuthonice'
]);

require('./controllers/Navbar.js');
require('./controllers/Home.js');
require('./controllers/Secret.js');
require('./controllers/Login.js');
require('./controllers/Register.js');
require('./controllers/Verify.js');

require('./controllers/Logout.js');

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController'
      })

      .when('/secret', {
        templateUrl: '/templates/secret.html',
        controller: 'SecretController'
      })

      .when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
      })

      .when('/logout', {
        template: '  ',
        controller: 'LogoutController'
      })

      .when('/register', {
        templateUrl: '/templates/register.html',
        controller: 'RegisterController'
      })

      .when('/verify/:code', {
        templateUrl: '/templates/verify.html',
        controller: 'VerifyController'
      })
      
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  }]);