angular.module('myApp', [])
    .service('myService', function() {
        return {
            slides: [
                {
                    slide: 'http://www.nebbz.com/images/information-technology.jpg',
                    description: ''
                },
                {
                    slide: 'http://upload.wikimedia.org/wikipedia/commons/b/bf/Rotunda_UVa_from_the_south_east.jpg',
                    description: ''
                },
                {
                    slide: 'http://esellermedia.com/files/2012/07/website-building1.jpg',
                    description: ''
                },
                {
                    slide: 'http://i.imgur.com/WTvmFUP.jpg',
                    description: ''
                },
                {
                    slide: 'http://blog.rogeriopvl.com/img/scrum.png',
                    description: ''
                },
                {
                    slide: 'http://www.olenick.com/wp-content/uploads/2014/07/Automated_Testing_Robots.png',
                    description: ''
                },
                {
                    slide: 'http://vitamincr.com/wp-content/uploads/2012/04/be_gentle.jpg',
                    description: ''
                },
                {
                    slide: 'http://makethingsdostuff.co.uk/sites/default/files/styles/project/public/project/GitHub.png?itok=XOrm-ttk',
                    description: ''
                },
                {
                    slide: 'http://mediatrackers.org/assets/uploads/2013/11/Penn_State_Nittany_Lions2.jpg',
                    description: ''
                },
                {
                    slide: 'http://free.clipartof.com/77-Free-Clipart-Illustration-Of-A-Computer-Firewall.jpg',
                    description: 'Firewall'
                },
                {
                    slide: 'http://www.netclarity.net/wp-content/uploads/2011/02/network-access-control-technology.png',
                    description: ''
                },
                {
                    slide: 'http://img.eagleget.com/BUSINESS/com.prg.nreca2014/0.png',
                    description: 'What I have learned at NRECA'
                },
                {
                    slide: 'http://expertaccess.cincom.com/wp-content/uploads/2014/03/462416239-IT-Due-Diligence.jpg',
                    description: ''
                },
                {
                    slide: 'http://i.imgur.com/bRlVzpN.png',
                    description: ''
                }
            ]
        }
    })
    .controller('myController', function($scope, myService) {
        $scope.slideShow = myService.slides;

        $scope.startSlideShow = false;

        $scope.i = -1;

        $scope.previousSlide = function() {
            if ($scope.i > 0) $scope.i--;
        };

        $scope.nextSlide = function() {
            if ($scope.i < $scope.slideShow.length) $scope.i++;
            if ($scope.i === $scope.slideShow.length) window.close();
        };

        $scope.changeSlide = function(e) {
            var code = e.keyCode ? e.keyCode : e.which;
            if (code === 39) { //up key
                $scope.nextSlide();
            } else if (code === 37) { //down key
                $scope.previousSlide();
            }
            if ($scope.i < 0) $scope.i = 0;
        };

        setTimeout(function() {
            $scope.startSlideShow = true;
        }, 10);
    });