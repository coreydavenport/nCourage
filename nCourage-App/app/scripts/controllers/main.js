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
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
    $scope.addToDo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
  });
