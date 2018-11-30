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
      },
      findTasks: function(taskId) {
      return $firebaseArray(ref.equalTo(taskId));
      },
      updateTask: function(task) {
        console.log(ref.child(task['$id']));
        ref.child(task['$id'].update({isComplete: true}));
      } 
    };
  }

  angular
    .module('pomodoroTimer')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();