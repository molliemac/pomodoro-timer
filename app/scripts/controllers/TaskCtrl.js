(function() {
  function TaskCtrl($scope, Tasks) {
    $scope.tasks = Tasks.all;

    $scope.addTask = function() {
      Tasks.addTask($scope.newTaskName);
      console.log('selected', $scope.newTaskName);
    };

    $scope.setCurrentTask = function(task) {
      $scope.selectedTask = task;
    };

    $scope.getCurrentTask = function() {
      return 'CURRENT TASK';
    }

    $scope.clearTask = function(task) {
      $scope.allTasks.$remove(task);
    };

    $scope.markCompleted = function (task) {
      Tasks.markCompleted(task);
    };
  }

  angular
    .module('pomodoroTimer')
    .controller('TaskCtrl', ['$scope','Tasks', TaskCtrl]);
})();
