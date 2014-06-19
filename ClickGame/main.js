angular.module('gameApp', [])
    .controller('gameController', function($scope) {
        $scope.name;
        $scope.startGame = function() {
            var check = prompt("What is your name?");
            if (check.length > 0) {
                $scope.name = check;
            }
        };
    });