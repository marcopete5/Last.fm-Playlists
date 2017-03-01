angular.module('myApp')

.controller('playlistController', ['$scope', '$http', '$location', 'topSongService', function ($scope, $http, $location, topSongService) {

	// $scope.topSong = function(username){
	// 	topSongService.getTop(username).then(function(stuff){
	// 		$scope.topSongs = stuff.toptracks.track;
	// 	});
	// };
	
	// $scope.topWeek = function(username){
	// 	topSongService.getTopWeek(username).then(function(stuff) {
	// 		var x = [];
	// 		var allStuff = stuff.weeklytrackchart.track;
	// 		for (var i = 0; i < allStuff.length; i++) {
	// 			if (x.length < 50){
	// 				x.push(allStuff[i]);
	// 		} else {
	// 			break;
	// 		}
	// 		}
	// 		$scope.topWeeks = x;
	// 	})
	// }
	topSongService.getTopWeek().then(function(songs) {
		var x = [];
			for (var i = 0; i < songs.length; i++) {
				if (x.length < 50){
					x.push(songs[i]);
				} else {
					break;
				}
			}
		$scope.topWeeks = x;
	}, function(reason) {
		alert(reason);
		$location.path('/')
	});

	topSongService.getTop().then(function(songs) {
		$scope.topSongs = songs;
	}, function(reason) {
		alert(reason);
		$location.path("/")
	});



}]);