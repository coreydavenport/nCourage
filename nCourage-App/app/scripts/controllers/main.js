'use strict';

/**
 * @ngdoc function
 * @name nCourageAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nCourageAppApp
 */
angular.module('nCourageAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });