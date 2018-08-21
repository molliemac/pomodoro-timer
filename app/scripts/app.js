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
				controller: 'HomeCtrl', 
				templateUrl: '/templates/home.html'
			});
	}
	angular
		.module('pomodoroTimer', ['ui.router', 'firebase'])
		.config(config);
})();