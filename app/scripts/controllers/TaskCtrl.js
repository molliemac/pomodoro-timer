(function() {
  function TaskCtrl($scope, Tasks) {
    $scope.tasks = Tasks.all;

    $scope.addTask = function(task) {
      Tasks.create($scope.newTaskName);
      $scope.currentTask = task;
      $scope.currentTask = "";
    };

    $scope.setCurrentTask = function(task) {
      $scope.selectedTask = task;
    };

    $scope.clearTask = function(task) {
      $scope.allTasks.$remove(task);
    };
  }

  angular
    .module('pomodoroTimer')
    .controller('TaskCtrl', ['$scope','Tasks', TaskCtrl]);
})();
