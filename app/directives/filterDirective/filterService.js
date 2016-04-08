console.log("in filterService.js")

angular.module('myApp')

.factory('FilterService', function() {

	 
	var TestService = {};
	TestService.options = ['Red', 'Blue', 'Green'];
	

	return TestService;

});