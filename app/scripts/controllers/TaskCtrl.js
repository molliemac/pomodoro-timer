(function() {
  function TaskCtrl($scope, Tasks) {
    $scope.tasks = Tasks.all;
    $scope.currentTask = null;

    $scope.addTask = function() {
      Tasks.addTask(newTask);
      $scope.newTask = '';

    };

    $scope.setCurrentTask = function (task) {
      $scope.currentTask = task;
      $scope.tasks = Tasks.getByTaskId($scope.currentTask.$id);
    };

  }

  angular
    .module('pomodoroTimer')
    .controller('TaskCtrl', ['$scope','Tasks', TaskCtrl]);
})();
