(function() {
	function btnTimer($interval) {
		return {
			restrict: 'E',
			templateUrl: '/templates/btnTimer.html',
			link: function(scope, element, attrs) {
				var workTime = 1500;
				var breakTime = 300;
				var countdown;

				scope.currentTime = workTime;

				scope.btnStatus="Start Working Session";
				scope.onBreak = false;
				scope.running = false;

				function startTimer() {
					scope.btnStatus = 'Reset';
					scope.running = true;
					countdown = $interval(function() {
						scope.currentTime--;
					}, 1000);
				};

				function resetTimer() {
					scope.running = false;
					scope.currentTime = workTime;

					$interval.cancel(countdown); // TODO: understand
					countdown = undefined;
					scope.btnStatus = "Start Working Session";
				}

				scope.start = function() {
		          if (countdown) {
		            resetTimer();
		          } else {
		            startTimer();
		          }
		        };

			}

			

		}
			
	};

	angular
		.module('pomodoroTimer')
		.directive('btnTimer', ['$interval', btnTimer] );
})();