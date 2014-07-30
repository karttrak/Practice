angular.module('myApp', ['ui.router'])
    .config(['$stateProvider', function($stateProvider) {

        $stateProvider
//            .state('home', {
//                url: '/',
//                templateUrl: 'home.html'
//            })
            .state('events', {
                url: '/eventregestration',
                templateUrl: 'events.html'
            })
            .state('event', {
                url: '/event',
                parent: 'events',
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
    .run(['$state', function ($state) {
        $state.transitionTo('events');
    }])
    .controller('myController', function($scope) {

        $scope.content = ['events', 'registrants', 'review', 'confirmation'];

        $scope.setPage = function(page) {
            $state.transitionTo(page);
        };
    });