angular.module('contactApp', [])
    .directive('contactInfo', function() {
        return {
            restrict: 'E',
            templateUrl: "contactInfo/contactInfo.tpl.html"
        }
    });