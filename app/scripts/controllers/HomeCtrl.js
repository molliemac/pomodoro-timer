(function() {
	function HomeCtrl($scope, $interval) {
		$scope.time = 25 * 60;
		$scope.btnText = "Start Working Session";
		var isStart = false;

		$scope.start = function() {
			$scope.btnText = "Reset";
			$scope.timer = $interval(function() {
				$scope.time = $scope.time - 1;
			}, 1000);
		};

		$scope.pause = function() {
			$scope.btnText = "Take a Break";
			if(angular.isDefined($scope.timer)) {
				$interval.cancel($scope.timer);
			}
		};

		$scope.reset = function() {
			$scope.btnText = "Resume Work";
			$scope.time = 25;
		};

	}

	angular
		.module('pomodoroTimer')
		.controller('HomeCtrl', ['$scope', '$interval', HomeCtrl] );
})();