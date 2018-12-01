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
			      console.log('scope.task', scope.currentTask);
			    };

			    scope.delete = function(task) {
			      Tasks.delete(task);
			    };

			    scope.setCurrentTask = function(task) {
			     scope.currentTask = task;
			     scope.currentTask.selected = true;
			      console.log('currentTask', scope.currentTask);
			    };

			}
		}
			
	};

	angular
		.module('pomodoroTimer')
		.directive('newTask', ['Tasks', newTask] );
})();