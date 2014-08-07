angular.module('myApp', [])
    .controller('myController', function($scope) {
        $scope.sentence = '';

        // I feel like this could be written in a much easier way
        $scope.removeRepeats = function() {
            $scope.sentence = $scope.sentence.toLowerCase();
            var finalString = '';
            var seen = [];

            for (var i = 0; i < $scope.sentence.length; i++) {
                var unique = true;
                var current = $scope.sentence[i];

                for (var j = 0; j < seen.length; j++) {
                    var past = seen[j];
                    if (current === past) {
                        unique = false;
                    }
                }

                if (unique) {
                    seen.push(current);
                    finalString += current;
                }
            }

            $scope.sentence = finalString;
        };
    });