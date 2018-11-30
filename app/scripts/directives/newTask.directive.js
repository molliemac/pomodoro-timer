(function() {
	function newTask(Tasks) {
		return {
			restrict: 'E',
			templateUrl: '/templates/addTasks.html',
			controller: 'TaskCtrl',
			scope: {
				
			},

			link: function(scope, element, attrs) {
				scope.tasks = Tasks.all;

			    scope.create = function(task) {
			      Tasks.create(task);
			    };

			    scope.delete = function(task) {
			      Tasks.delete(task);
			    };

			    // scope.setCurrentTask = function(task) {
			    //  scope.currentTask = task;
			    //   console.log('currentTask', scope.currentTask);
			    // };

			}
		}
			
	};

	angular
		.module('pomodoroTimer')
		.directive('newTask', ['Tasks', newTask] );
})();