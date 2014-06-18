angular.module('myApp', ['contactApp', 'slideshowApp'])
    .controller('myController', function ($scope) {
        $scope.greeting = '';
        $scope.people = [
            {name: 'John',
                show: true},
            {name: 'Jake',
                show: true},
            {name: 'Josh',
                show: true},
            {name: 'Jessa',
                show: true},
            {name: 'Joanne',
                show: true},
            {name: 'Bill',
                show: true}
        ];
        $scope.remove = function(person) {
            var index = people.indexOf(person);
            $scope.people[index].splice(index, 1);
            console.log(person);
        };
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
