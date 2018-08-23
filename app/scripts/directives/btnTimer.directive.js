(function() {
	function btnTimer($interval) {
		return {
			restrict: 'E',
			templateUrl: '/templates/btnTimer.html',
			scope: {},
			link: function(scope, element, attrs) {
				const WORK_TIME = 10;
				const BREAK_TIME = 5;
				var countdown;

				scope.currentTime = WORK_TIME;

				scope.btnStatus="Start Working Session";
				scope.onBreak = false;
				scope.running = false;

				function startTimer() {
					scope.btnStatus = 'Reset';
					scope.running = true;
					countdown = $interval(function() {
						if (scope.currentTime > 0) {
							scope.currentTime--;
						} else {
							if(scope.onBreak == false) {
								scope.currentTime = BREAK_TIME;
								scope.btnStatus = "Give yourself a break!";
								scope.onBreak = true;
							} else if(scope.onBreak == true) {
								scope.currentTime = WORK_TIME;
								scope.btnStatus = "Let's get back to work!";
								scope.onBreak = false;
							}
							stopTimer();
						}
					}, 1000);
				};


				function stopTimer() {
					scope.running = false;
					if (scope.onBreak == true) {
						$interval.cancel(countdown);
						countdown = undefined;
						scope.btnStatus = "Give yourself a break!";	
						scope.currentTime = BREAK_TIME;
					} else if (scope.onBreak == false) {
						$interval.cancel(countdown);
						scope.btnStatus = "Start working again!";
						scope.currentTime = WORK_TIME;
						countdown = undefined;
						
					}
				};

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