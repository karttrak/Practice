angular.module('myApp', [])
    .service('myService', function() {
        return {
            slides: [
                {
                    description: 'Build websites',
                    slide: 'http://yourlocalpromoter.com/wp-content/uploads/2012/12/Website20.jpg'
                },
                {
                    description: 'Automated tests',
                    slide: 'http://www.olenick.com/wp-content/uploads/2014/07/Automated_Testing_Robots.png'
                },
                {
                    description: 'Automated tests',
                    slide: 'http://i.imgur.com/WTvmFUP.jpg'
                },
                {
                    description: 'Pair programming',
                    slide: 'http://vitamincr.com/wp-content/uploads/2012/04/be_gentle.jpg'
                },
                {
                    description: 'Agile programming',
                    slide: 'http://blog.rogeriopvl.com/img/scrum.png'
                },
                {
                    description: 'Code collaboration',
                    slide: 'http://www.wakanda.org/sites/default/files/blog/blog-github.png'
                },
                {
                    description: '',
                    slide: 'http://i.imgur.com/bRlVzpN.png'
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
            if ($scope.i < $scope.slideShow.length) $scope.i++;
            if ($scope.i === $scope.slideShow.length) window.close();
        };
    });