var app = angular.module('myApp');

app.directive('cat', function() {
    return {
        restrict: 'E',
        template: '<p><b>paws:</b> {{ paws }}</p><p><b>whiskers:</b> {{ whiskers }}</p>',
        scope: {
            paws: '@'
        }
    };
});

app.directive('bigCat', function(){

    return {
        restrict: 'A',
        template : "<cat style='font-style : italic'></cat>{{name.name}}",
        scope : {
            paws : '@',
            name : "=name",
            sayBye : '=sayBye',
            action : "&actionCallback"
        },
        controller : function($scope){
            console.log("controller name: ", $scope.name);
            console.log("controller sayBye: ", $scope.sayBye);
            $scope.sayBye();
        },
        link : function(scope){
            scope.action();
            console.log(scope);
        }

    }
})

app.config(function($provide) {

    $provide.decorator('catDirective', function($delegate) {

        var directive = $delegate[0];

        angular.extend(directive.scope, {
            whiskers: '@'
        });

        return $delegate;
    });
});