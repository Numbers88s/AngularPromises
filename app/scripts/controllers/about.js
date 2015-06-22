'use strict';

/**
 * @ngdoc function
 * @name angularPromisesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularPromisesApp
 */
angular.module('angularPromisesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
