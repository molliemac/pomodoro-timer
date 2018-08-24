(function() {
  function Tasks($firebaseArray) {
    var ref = firebase.database().ref().child("tasks");

    var tasks = $firebaseArray(ref);

    return {
    	all: tasks
    };
  }

  angular
    .module('pomodoroTimer')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();