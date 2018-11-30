(function() {
	function btnTimer($interval, Tasks) {
		return {
			restrict: 'E',
			templateUrl: '/templates/btnTimer.html',
			controller: 'TaskCtrl',
			scope: {
				currentTask: '='
			},
			link: function(scope, element, attrs) {
				var WORK_TIME = 1500;
				var BREAK_TIME = 300;
				var LONG_BREAK = 1800;
	
				var countdown;

				scope.currentTime = WORK_TIME;

				scope.btnStatus="Start Working Session";
				scope.pauseStatus = "Pause";
				scope.onBreak = false;
				scope.running = false;
				scope.completed_sessions = 0;
				scope.currentTask = Tasks.getSelected();
				 
				var mySound = new buzz.sound("/sounds/ding-sound.mp3", {
		             preload: true
		         });

				scope.$watch('currentTime', function() {
					if(scope.currentTime === 0) {
						mySound.play();
					}
				});


				function startTimer() {
					console.log('TAsks', scope.currentTask);
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

				scope.pauseTimer = function() {
					if (scope.running == false) {
						startTimer();
						scope.pauseStatus = "Pause";
					} else if (scope.running == true) {
						$interval.cancel(countdown);
						scope.running = false;
						scope.pauseStatus = "Resume";	
					}
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
						scope.running = false;
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
		.directive('btnTimer', ['$interval', 'Tasks', btnTimer] );
})();