'use strict';

/**
 * @ngdoc function
 * @name nCourageAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nCourageApp
 */
angular.module('nCourageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addToDo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeToDo = function (index) {
		  $scope.todos.splice(index, 1);
		};
  });
