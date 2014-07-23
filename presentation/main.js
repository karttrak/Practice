angular.module('myApp', [])
    .service('myService', function() {
        return {
            slides: [
                {
                    slide: 'http://yourlocalpromoter.com/wp-content/uploads/2012/12/Website20.jpg'
                },
                {
                    slide: 'http://www.olenick.com/wp-content/uploads/2014/07/Automated_Testing_Robots.png'
                },
                {
                    slide: 'http://vitamincr.com/wp-content/uploads/2012/04/be_gentle.jpg'
                },
                {
                    slide: 'http://digitalcooings.files.wordpress.com/2012/03/pearprogramming.png'
                },
                {
                    slide: 'http://blog.rogeriopvl.com/img/scrum.png'
                },
                {
                    slide: 'http://www.wakanda.org/sites/default/files/blog/blog-github.png'
                }
            ]
        }
    })
    .controller('myController', function($scope, myService) {
        $scope.slideShow = myService.slides;

        $scope.startSlideShow = false;

        $scope.i = 0;

        $scope.previousSlide = function() {
            if ($scope.i > 0) $scope.i--;
        };

        $scope.nextSlide = function() {
            if ($scope.i < $scope.slideShow.length-1) $scope.i++;
        };
    });