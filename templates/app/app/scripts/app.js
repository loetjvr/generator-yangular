'use strict';

/**
 * @ngdoc overview
 * @name <%= appname %>
 * @description
 * # <%= appname %>
 *
 * Main module of the application.
 */
angular
  .module('<%= appname %>', [
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
