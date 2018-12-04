(function() {
	function newTask(Tasks) {
		return {
			restrict: 'E',
			templateUrl: '/templates/addTasks.html',
			// scope: {},
			link: function(scope, element, attrs) {
				scope.tasks = Tasks.all;
				scope.currentTask = "";
			    scope.create = function(task) {
			      Tasks.create(task);
			      scope.currentTask = task;
			      scope.task = "";
			    };

			    scope.delete = function(task) {
			      Tasks.delete(task);
			    };

			    scope.setCurrentTask = function(task) {
			     scope.currentTask = task;
			     scope.currentTask.selected = true;
			      console.log('currentTask', scope.currentTask);
			    };

			    scope.displayTasks = function() {
			    	console.log('all tasks', scope.tasks);
			    }

			}
		}
			
	};

	angular
		.module('pomodoroTimer')
		.directive('newTask', ['Tasks', newTask] );
})();