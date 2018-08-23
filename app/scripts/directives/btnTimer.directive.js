(function() {
	function btnTimer($interval) {
		return {
			restrict: 'E',
			templateUrl: '/templates/btnTimer.html',
			link: function(scope, element, attrs) {
				const WORK_TIME = 10;
				const BREAK_TIME = 5;
				var countdown;

				scope.currentTime = WORK_TIME;

				scope.btnStatus="Start Working Session";
				scope.onBreak = false;
				scope.running = false;

				function startTimer() {
					scope.currentTime = WORK_TIME;
					scope.btnStatus = 'Reset';
					scope.running = true;
					scope.onBreak = false;

					countdown = $interval(function() {
						if (scope.currentTime > 0) {
							scope.currentTime--;
							scope.onBreak = false;
						} else {
							scope.onBreak = true;
							stopTimer();
						}
					}, 1000);
				};

				function stopTimer() {
					scope.running = false;
					if (angular.isDefined(countdown) && scope.onBreak == false) {
						$interval.cancel(countdown);
						countdown = undefined;
						scope.btnStatus = "Give yourself a break!";	
						scope.currentTime = WORK_TIME;
					} else if (angular.isDefined(countdown) && scope.onBreak == true) {
						scope.btnStatus = "Start working again!";
						scope.currentTime = WORK_TIME;
					}
				};

				function startBreak() {
					scope.onBreak = true;
					scope.btnStatus= "Let's Take a Break!";
					scope.currentTime = BREAK_TIME;

					countdown = $interval(function() {
						if (scope.currentTime > 0 && scope.running) {
							scope.currentTime--;
						} else {
							stopTimer();
						}
					}, 1000);
					
				};


				function resetTimer() {
					scope.running = false;
					scope.currentTime = WORK_TIME;
					scope.onBreak = false;

					$interval.cancel(countdown); // TODO: understand
					countdown = undefined;
					scope.btnStatus = "Start Working Session";
				}

				scope.start = function() {
		          if (countdown) {
		            stopTimer();
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