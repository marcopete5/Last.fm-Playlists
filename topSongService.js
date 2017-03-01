angular.module('myApp')

.service('topSongService', ['$http', '$localStorage', '$q', function ($http, $localStorage, $q) {

	var self = this;
	this.topSongs = [];
	

	this.getTop = function(username) {
		username = username || $localStorage.username;
		$localStorage.username = username;
		var deferred = $q.defer();
		if (username === undefined) {
			deferred.reject("Username is undefined");
			return deferred.promise;
		}
		return $http.get('https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=' + username + '&api_key=ab41ce939f8aa63bb22d6d6e483ed761&format=json')
			.then(function(response) {
				if (response.data.error) {
					deferred.reject(response.data.message);
					return deferred.promise;
				}
				self.topSongs = response.data.toptracks.track;
					return self.topSongs;
				});
	}
	
	this.topWeeks = [];

	this.getTopWeek = function(username) {
		username = username || $localStorage.username;
		$localStorage.username = username;
		var deferred = $q.defer();
		if (username === undefined) {
			deferred.reject("Username is undefined");
			return deferred.promise;
		}
		return $http.get('https://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user=' + username + '&api_key=ab41ce939f8aa63bb22d6d6e483ed761&format=json')
			.then(function(response) {
				if (response.data.error) {
					deferred.reject(response.data.message);
					return deferred.promise;
				}
				self.topWeeks = response.data.weeklytrackchart.track;
				return self.topWeeks;
			});
	}
}])