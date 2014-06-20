angular.module('gameApp', [])
    .controller('gameController', function($scope) {
        $scope.i = -1;
        function Monster(diff, hp, dmg) {
            this.difficulty = diff;
            this.health = hp;
            this.damage = dmg;
        };
        $scope.monsters = [
            new Monster("Easy", 10, 1),
            new Monster("Medium", 20, 2),
            new Monster("Hard", 30, 3)
        ];
        $scope.fight = function(index) {
            $scope.i = index;
            $scope.monsters[index].health -= 1;
        };

    });