angular.module('myApp')

.controller('mainController', ['$scope', '$http', '$location', 'topSongService', function ($scope, $http, $location, topSongService) {



	$scope.topSong = function(username){
		topSongService.getTop(username).then(function(stuff){
			$location.path('/playlist')
		});
	};
	
	$scope.topWeek = function(username){
		topSongService.getTopWeek(username).then(function(stuff) {
			$location.path('/playlist')
			// var x = [];
			// var allStuff = stuff.weeklytrackchart.track;
			// for (var i = 0; i < allStuff.length; i++) {
			// 	if (x.length < 50){
			// 		x.push(allStuff[i]);
			// 	} else {
			// 		break;
			// 	}
			// }
			// $scope.topWeeks = x;
		});
	};
}]);
