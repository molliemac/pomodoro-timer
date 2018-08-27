(function() {
	function newTask(Tasks) {
		return {
			restrict: 'E',
			templateUrl: '/templates/addTasks.html',
			scope: {},
			link: function(scope, element, attrs) {
				scope.tasks = Tasks.all;
    

			    scope.create = function(task) {
			      Tasks.create(task);

			      scope.task = "";
			    };
			}
		}
			
	};

	angular
		.module('pomodoroTimer')
		.directive('newTask', ['Tasks', newTask] );
})();