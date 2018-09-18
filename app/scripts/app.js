(function() {
	function config($locationProvider, $stateProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});

		$stateProvider
			.state('home', {
				url: '/',
				controller: 'TaskCtrl', 
				templateUrl: '/templates/home.html'
			}),
		$stateProvider
			.state('tasks', {
				url: '/task/:taskName',
				controller: 'TaskCtrl',

			});
	}
	angular
		.module('pomodoroTimer', ['ui.router', 'firebase'])
		.config(config);
})();