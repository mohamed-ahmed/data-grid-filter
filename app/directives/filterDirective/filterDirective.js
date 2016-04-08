var app = angular.module('myApp');

app.directive('filter', function(FilterService) {
	console.log("FilterService", FilterService);
    return {
        restrict: 'E',
        templateUrl: 'directives/filterDirective/filterDirectiveTemplate.html',
        scope: {
            paws: '@'
        },
        link : function(scope){
        	scope.options = FilterService.options;
        	scope.color = FilterService.options[0];
        	scope.update = function(){
        		console.log("updating. values: ", scope.color);
        	}
        }
    };
});