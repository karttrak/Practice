angular.module('myApp', [])
    .service('myService', function() {
        return {
            slides: [
                'http://www.nebbz.com/images/information-technology.jpg',
                'http://esellermedia.com/files/2012/07/website-building1.jpg',
                'http://i.imgur.com/WTvmFUP.jpg',
                'http://blog.rogeriopvl.com/img/scrum.png',
                'http://www.olenick.com/wp-content/uploads/2014/07/Automated_Testing_Robots.png',
                'http://vitamincr.com/wp-content/uploads/2012/04/be_gentle.jpg',
                'http://makethingsdostuff.co.uk/sites/default/files/styles/project/public/project/GitHub.png?itok=XOrm-ttk',
                'http://expertaccess.cincom.com/wp-content/uploads/2014/03/462416239-IT-Due-Diligence.jpg',
                'http://i.imgur.com/bRlVzpN.png'
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