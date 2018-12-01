(function() {
  function TaskCtrl($scope, Tasks) {
    $scope.tasks = Tasks.all;

    $scope.addTask = function(task) {
      Tasks.create($scope.newTaskName);
      $scope.currentTask = task;
      console.log('selected', $scope.currentTask);
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
