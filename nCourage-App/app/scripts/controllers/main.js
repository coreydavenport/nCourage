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
    
    $scope.todo = new Object();

    var URL = "https://ncourageapp.firebaseio.com/";
    var list = $firebaseArray(new Firebase(URL));
    $scope.todos = list;
    console.log("Firebase Data", $scope.todos);

    $scope.addToDo = function () {
      
      console.log("form data", $scope.todo);

      list.$add($scope.todo).then(function(ref) {
      var id = ref.key();
      console.log("added todo with id " + id);
      list.$indexFor(id); // returns location in the array
    });
    }
    
    $scope.removeToDo = function (index) {
		  $scope.todos.splice(index, 1);
		};
  });
