var app = angular.module('irisChat', ['ui.router']);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('signin', {
				url: '/signin',
				templateUrl: '/htmls/signin.html',
				controller: 'SignInCtrl'
			})
			.state('home', {
				url: '/home',
				templateUrl: '/htmls/home.html',
				controller: 'HomeCtrl'
			});
		$urlRouterProvider.otherwise('home');
	}])

app.controller('SignInCtrl', [
	'$scope',
	function($scope) {
		$scope.test = 'Hello World!';
}]);

app.controller('HomeCtrl', [
	'$scope',
	function($scope) {
		$scope.test = 'Hello World!';
}]);