(function() {
  function TaskCtrl($scope, Tasks) {
    $scope.tasks = Tasks.all;
    

    $scope.addTask = function() {
      $scope.tasks.$add({
        name: $scope.taskName
      });

      $scope.taskName = "";
    };

  }

  angular
    .module('pomodoroTimer')
    .controller('TaskCtrl', ['$scope','Tasks', TaskCtrl]);
})();
