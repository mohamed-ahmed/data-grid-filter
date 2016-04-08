console.log("in testService.js")

angular.module('myApp')

.factory('TestService', function() {

	 
	var TestService = {};
	TestService.name = "George";
	TestService.age = 22;

	return TestService;

});