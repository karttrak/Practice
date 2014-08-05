angular.module('myApp', [])
    .controller('myController', function($scope) {
        $scope.sentence = '';

        $scope.removeRepeats = function() {
            for (var i = 0; i < $scope.sentence.length; i++) {
                for (var j = i + 1; j < $scope.sentence.length; j++) {
                    if ($scope.sentence[i] === $scope.sentence[j]) {
                        $scope.sentence.splice(j, 1);
                    }
                }
            }
            $scope.sentence += ', stinker';
        };
    });