angular.module('myApp', [])
    .controller('myController', function($scope) {

        function Node(data) {
            this.data = data;
            this.next = null;
        };

        function List() {
            this.head = null;
        };

        List.prototype.add = function(node) {
            var current;

            if (this.head === null) {
                this.head = node;
            } else {
                current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }
        };

        $scope.listContents = 'Kyle';

        $scope.list = new List();

        var showContents = function() {
            var current = $scope.list.head;
            $scope.listContents = current.data;
            while (current.next) {
                current = current.next;
                $scope.listContents += ' ' + current.data;
            }
        };

        $scope.createNode = function(data) {
            var node = new Node(data);
            $scope.list.add(node);
            showContents();
        };
    });