(function() {
  function Task($firebaseArray) {
    var ref = firebase.database().ref().child("tasks");

    var tasks = $firebaseArray(ref);

    addTask = function(newTask) {
      $scope.tasks.$add(newTask);

    };

    return {
    	all: tasks,
      addTask: addTask
    };
  }

  angular
    .module('pomodoroTimer')
    .factory('Task', ['$firebaseArray', Task]);
})();