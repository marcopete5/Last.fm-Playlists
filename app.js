var app = angular.module('myApp', ['ngRoute', 'ngStorage']);

app.config(['$routeProvider', function ($routeProvider){

 $routeProvider
	.when('/', {
		templateUrl: 'main/main.html',
		controller: 'mainController'
	})
	.when('/playlist', {
		templateUrl: 'playlist/playlist.html',
		controller: 'playlistController'
	})
	.otherwise({
		redirectTo: '/'
	});

}]);



