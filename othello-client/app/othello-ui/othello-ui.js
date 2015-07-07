'use strict';

angular.module('othello.othello-ui', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/othello-ui', {
    templateUrl: 'othello/othello-ui.html',
    controller: 'OthelloUICtrl'
  });
}])

.controller('OthelloUICtrl', function(Game) {
    //controls game board
});