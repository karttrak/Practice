angular.module('myApp', [])
    .service('myService', function() {
        return {
            slides: [
                {
                    slide: 'http://upload.wikimedia.org/wikipedia/commons/b/bf/Rotunda_UVa_from_the_south_east.jpg',
                    description: 'Rotunda'
                },
                {
                    slide: 'http://www.nebbz.com/images/information-technology.jpg',
                    description: 'IT'
                },
                {
                    slide: 'http://esellermedia.com/files/2012/07/website-building1.jpg',
                    description: 'Build Websites'
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
                    slide: 'http://expertaccess.cincom.com/wp-content/uploads/2014/03/462416239-IT-Due-Diligence.jpg',
                    description: ''
                },
                {
                    slide: 'http://mediatrackers.org/assets/uploads/2013/11/Penn_State_Nittany_Lions2.jpg',
                    description: 'Penn State'
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
                    slide: 'http://www.azgt.coop/wp-content/uploads/2012/11/NRECA_BMP.jpg',
                    description: 'What I have learned at NRECA'
                },
                {
                    slide: 'http://i.imgur.com/bRlVzpN.png',
                    description: 'End'
                }
            ]
        }
    })
    .controller('myController', function($scope, myService) {
        $scope.slideShow = myService.slides;

        $scope.startSlideShow = true;

        $scope.i = 0;

        $scope.previousSlide = function() {
            if ($scope.i > 0) $scope.i--;
        };

        $scope.nextSlide = function() {
            if ($scope.i < $scope.slideShow.length) $scope.i++;
            if ($scope.i === $scope.slideShow.length) window.close();
        };
    });