'use strict';
angular
  .module('accionApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularFileUpload'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'homeController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html'
      })
      .otherwise({
        redirectTo: '/signup'
      });
  });
