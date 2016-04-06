'use strict';

angular.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'main/main.html',
    controller: 'mainCtrl'
  });
}])

.controller('mainCtrl', function($scope) {



    $scope.myData = [{name: "Moroni", age: 50},
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

 	$scope.inputChanged = function(){
		$scope.gridOptions.columnDefs[0].filter.term = $scope.nameFilter;
	}
});