angular.module('listNode', [])
    .service('listNodeService', function($scope) {
        function Node(data) {
            this.data = data;

            this.setPrev = function(prev) {
                this.prev = prev;
            };
            this.getPrev = function() {
                return this.prev;
            };
            this.setNext = function(next) {
                this.next = next;
            };
            this.getNext = function() {
                return this.next;
            };
        };
    });