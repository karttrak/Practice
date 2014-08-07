angular.module('myApp', ['contactApp', 'slideshowApp'])
    .controller('myController', function ($scope) {
        $scope.greeting = '';
    })
    .directive('myDirective', function() {
        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            template: "<span style='margin: 3px'>{{data}}</span>",
            controller: function($scope) {
                console.log($scope.name);
            },

            link: function (scope, element, attr) {

            }
        }
    });
