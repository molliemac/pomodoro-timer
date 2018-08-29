(function() {
  function Tasks($firebaseArray) {
    var ref = firebase.database().ref().child("tasks");

    var tasks = $firebaseArray(ref);

    return {
    	all: tasks,
      create: function(newTask) {
        tasks.$add(newTask);
      },
      findTasks: function(taskId) {
      return $firebaseArray(ref.equalTo(taskId));
      }
    };
  }

  angular
    .module('pomodoroTimer')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();