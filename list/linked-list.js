angular.module('linkedList', [])
    .service('linkedListService', function($scope) {
        function List() {
            this.head = new Node('');
            this.tail = new Node('');
            this.head.setPrev(this.tail);
            this.tail.setNext(this.head);
        };
    });