angular.module('myApp', [])
    .controller('myController', function($scope) {
        $scope.name = 'middle';

        function Node(data) {
            this.data = data;
            this.next = null;
            this.prev = null;

//            this.setPrev = function(prev) {
//                this.prev = prev;
//            };
//            this.getPrev = function() {
//                return this.prev;
//            };
//            this.setNext = function(next) {
//                this.next = next;
//            };
//            this.getNext = function() {
//                return this.next;
//            };
        };

        function List() {
            this.head = new Node('start');
            this.tail = new Node('end');
//            this.head.setPrev(this.tail);
//            this.tail.setNext(this.head);
            this.head.prev = this.tail;
            this.tail.next = this.head;

            this.addNode = function(data) {
                this.tail.next = new Node(data);
                this.tail = this.tail.next;
            };
        };

        $scope.list = new List();

        $scope.createNode = function(data) {
            $scope.list.addNode(data);
        };
    });