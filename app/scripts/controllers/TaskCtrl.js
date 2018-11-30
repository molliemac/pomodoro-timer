(function() {
  function TaskCtrl($scope, Tasks) {
    $scope.tasks = Tasks.all;

    $scope.addTask = function() {
      Tasks.addTask($scope.newTaskName);
    };

    $scope.clearTask = function(task) {
      $scope.allTasks.$remove(task);
    };

    $scope.setCurrentTask = function(task) {
      $scope.currentTask = task;
      console.log('$scope.currentTask', task);
    }

    $scope.markCompleted = function (task) {
      Tasks.markCompleted(task);
    };
  }

  angular
    .module('pomodoroTimer')
    .controller('TaskCtrl', ['$scope','Tasks', TaskCtrl]);
})();
