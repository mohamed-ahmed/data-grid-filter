'use strict';

angular.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'main/main.html',
    controller: 'mainCtrl'
  });
}])

.controller('mainCtrl', function($scope) {
	console.log("in main controller");

	$scope.testVar = "hello world;"

	$scope.myData = [{name: "Moroni", age: 50},
		{name: "Tiancum", age: 43},
		{name: "Jacob", age: 27},
		{name: "Nephi", age: 29},
		{name: "Enos", age: 34}];

	$scope.gridOptions = { data: 'myData' };

});