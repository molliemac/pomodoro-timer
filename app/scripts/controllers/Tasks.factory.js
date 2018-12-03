(function() {
  function Tasks($firebaseArray) {
    var ref = firebase.database().ref().child("tasks");

    var tasks = $firebaseArray(ref);

    return {
    	all: tasks,
      create: function(taskName) {
        tasks.$add({
          name: taskName,
          isComplete: false,
          workingSessions: 0
        });
      }
    };
  }

  angular
    .module('pomodoroTimer')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();