(function() {
  function TaskCtrl($scope, Tasks) {
    $scope.tasks = Tasks.all;

    $scope.addTask = function() {
      Tasks.addTask(newTask);
      $scope.newTask = '';

    };

  }

  angular
    .module('pomodoroTimer')
    .controller('TaskCtrl', ['$scope','Tasks', TaskCtrl]);
})();
