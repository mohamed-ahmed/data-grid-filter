'use strict';

angular.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/main', {
		templateUrl: 'main/main.html',
		controller: 'mainCtrl'
	});
}])

.controller('mainCtrl', function($scope, uiGridConstants) {



	$scope.myData = 
	[{name: "Moroni", age: 50},
	{name: "Tiancum", age: 43},
	{name: "Jacob", age: 27},
	{name: "Nephi", age: 29},
	{name: "Enos", age: 34}];
	var data2 = 
	[{name: "Moroni", age: 100},
	{name: "Tiancum", age: 43},
	{name: "Jacob", age: 27},
	{name: "Nephi", age: 29},
	{name: "Enos", age: 34}];
	$scope.gridOptions = { 
		data: 'myData',
		enableFiltering: true,
		columnDefs: [{
			field: 'name', 
			displayName: 'Name', 
			filter : {
				term : $scope.nameFilter
			}},
		{field:'age', displayName:'Age'}]
	};
	$scope.gridOptions.onRegisterApi = function(gridApi){
		$scope.gridApi = gridApi;
		console.log("onRegisterApi called");
	};

	$scope.inputChanged = function(){
		$scope.gridOptions.columnDefs[0].filter.term = $scope.nameFilter;
	};

	$scope.name = {
		name : "George"
	};

	$scope.sayHello = function(){
		console.log("hello");
	}

	$scope.sayBye = function(){
		console.log("bye");
	}

	$scope.changeData = function(){
		console.log("changeData called");
		$scope.myData = data2;
		$scope.gridOptions.data = 'myDate';
		/*$scope.gridApi.core.refresh();
		$scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.ALL);
*/
	}
		

	});