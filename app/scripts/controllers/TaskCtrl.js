(function() {
  function TaskCtrl($scope, Tasks) {
    $scope.tasks = Tasks.all;
    $scope.currentTask = null;

    $scope.addTask = function() {
      Tasks.addTask(newTask);
      $scope.newTask = '';

    };

    $scope.clearTask = function(task) {
      $scope.allTasks.$remove(task);
    };

  }

  angular
    .module('pomodoroTimer')
    .controller('TaskCtrl', ['$scope','Tasks', TaskCtrl]);
})();
