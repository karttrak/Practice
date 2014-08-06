angular.module('myApp', [])
	.controller('myController', function($scope, $http, $timeout) {
		$scope.totalClicks = 10000;
		$scope.clickRate = 0;
		$scope.upgrades = [
		{
			"cost": 15,
			"CPSincrease": 0.1
		},
		{
			"cost": 100,
			"CPSincrease": 0.5
		},
		{
			"cost": 500,
			"CPSincrease": 4
		},
		{
			"cost": 3000,
			"CPSincrease": 10
		},
		{
			"cost": 10000,
			"CPSincrease": 40
		}
		]

		$scope.increment = function() {
			$scope.totalClicks++;
		};

		$scope.increaseClickRate = function(value) {
			$scope.clickRate += value;
		};

		$scope.purchase = function(upgrade) {
			if ($scope.totalClicks >= upgrade.cost) {
				$scope.totalClicks -= upgrade.cost;
				$scope.clickRate += upgrade.CPSincrease;
				var index = $scope.upgrades.indexOf(upgrade);
				$scope.upgrades[index].cost *= 1.15;
			}
		};

		$scope.intervalFunction = function () {
			$scope.totalClicks += ($scope.clickRate/100);
            $timeout(function() {
		      	$scope.intervalFunction();
			}, 10)
		};

		$scope.intervalFunction();
	});