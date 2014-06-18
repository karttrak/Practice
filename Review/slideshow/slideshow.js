angular.module('slideshowApp', [])
    .directive('startSlideshow', function() {
        return {
            restrict: 'E',
            templateUrl: 'slideshow/slideshow.tpl.html',

            controller: function($scope) {
                $scope.showPups = false;
                $scope.puppies = [
                    'https://i.imgur.com/75Jr3.jpg',
                    'http://i.imgur.com/6OqxDlb.jpg',
                    'http://i.imgur.com/qDMUFpF.jpg',
                    'http://i.imgur.com/Zyd9whO.jpg'
                ];

                $scope.i = 0;
                $scope.countDown = function() {
                    if ($scope.i === 0)
                        $scope.i = $scope.puppies.length-1;
                    else
                        $scope.i--;
                }
                $scope.countUp = function() {
                    $scope.i = ($scope.i+1)%$scope.puppies.length;
                }
            }
        }
    });