'use strict';

/**
 * @ngdoc function
 * @name nCourageAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nCourageApp
 */
angular.module('nCourageApp')
  .controller('MainCtrl', function ($scope, $http, $firebaseArray) {
    
    scope.user = new Object();

    var URL = "https://ncourageapp.firebaseio.com/";
    var list = $firebaseArray(new Firebase(URL));
    $scope.todos = list;
    console.log("Firebase Data", $scope.todos);

    $scope.addToDo = function () {
      
      console.log("form data", $scope.todo);

      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeToDo = function (index) {
		  $scope.todos.splice(index, 1);
		};
  });
