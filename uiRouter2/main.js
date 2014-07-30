angular.module('myApp', ['ui.router'])
    .config(['$stateProvider', function($stateProvider) {

        $stateProvider
            .state('home', {
                url: '/eventregistration',
                templateUrl: 'home.html'
            })
            .state('event', {
                url: '/event',
                templateUrl: 'event.html'
            })
            .state('registrants', {
                url: '/:registrants',
                parent: 'event',
                templateUrl: 'registrants.html'
            })
            .state('review', {
                url: '/:review',
                parent: 'event',
                templateUrl: 'review.html'
            })
            .state('confirmation', {
                url: '/:confirmation',
                parent: 'event',
                templateUrl: 'confirmation.html'
            })
        ;
    }])
    .controller('myController', function($scope) {

        $scope.events = [
            {
                title: '2014 Annual Meeting',
                registrants: [
                    'John Lennon',
                    'Paul McCartney',
                    'Ringo Star',
                    'George Harrison'
                ],
                date: 'June 4th - August 16th'
            },

            {
                title: 'Large Bake Sale',
                registrants: [
                    'Joey Tribbiani',
                    'Rachel Green',
                    'Ross Geller',
                    'Monica Geller',
                    'Chandler Bing',
                    'Phoebe Buffay'
                ],
                date: 'April 9th - November 8th'
            },
            {
                title: 'Monster Truck Car Wash',
                registrants: [
                    'Todd Thompson',
                    'David Wilson',
                    'Joshua Keel',
                    'Todd Tilghman',
                    'Ivette Mestre',
                    'Maureen Hamilton',
                    'Patrick Rittenhouse',
                    'Kyle Thornburgh',
                    'Daryl Benzel'
                ],
                date: 'January 2nd - January 3rd'
            }
        ];

        $scope.i = 0;

        $scope.changeEvent = function(index) {
            $scope.i = index;
        };

        $scope.setPage = function(page) {
            $state.transitionTo(page);
        };

    });