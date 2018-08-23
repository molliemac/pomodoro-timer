(function() {
	function btnTimer($interval) {
		return {
			restrict: 'E',
			templateUrl: '/templates/btnTimer.html',
			scope: {},
			link: function(scope, element, attrs) {
				var WORK_TIME = 10;
				var BREAK_TIME = 5;
				var LONG_BREAK = 10;
	
				var countdown;

				scope.currentTime = WORK_TIME;

				scope.btnStatus="Start Working Session";
				scope.onBreak = false;
				scope.running = false;
				scope.completed_sessions = 0;


				function startTimer() {
					scope.btnStatus = 'Reset';
					scope.running = true;
					countdown = $interval(function() {
						if (scope.currentTime >= 1) {
							scope.currentTime--;
						} else {
							if(scope.onBreak == false) {
								scope.currentTime = BREAK_TIME;
								scope.btnStatus = "Give yourself a break!";
								scope.onBreak = true;
								scope.completed_sessions++;
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
					if (scope.onBreak == false) {
						scope.currentTime = WORK_TIME;
						$interval.cancel(countdown);
						countdown = undefined;
						scope.btnStatus = "Start Working Again!";
					} else if (scope.onBreak == true) {
						if (scope.completed_sessions === 4) {
							scope.currentTime = LONG_BREAK;
						} else {
							scope.currentTime = BREAK_TIME;
						}

						$interval.cancel(countdown);
						countdown = undefined;
						scope.btnStatus = "Give yourself a break!";
					}
					
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