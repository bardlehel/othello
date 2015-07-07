'use strict';

// Declare app level module which depends on views, and components
angular.module('othello', [
  'ngRoute',
  'othello.othello-ui',
  ]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/othello-ui'});
}]);
