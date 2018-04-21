(function() {
	angular.module("BookMyShow").controller("movieShowController",
			movieShowController);

	function movieShowController($location, MovieShowService, $scope,
			MovieDataService, $routeParams) {
		var vm = this;
		vm.setMovieDetail = setMovieDetail;
		vm.userId = $routeParams['userId'];
		vm.movieId = $routeParams['movieId'];

		function init() {
			var date = new Date();
			vm.selectedDate = (date.getMonth() + 1) + '/' + date.getDate();
			vm.fullDate = getFullDate(date);
			getDates();
		}
		init();

		function getDates() {
			var dates = [];
			var date = new Date();
			var dateMsg = (date.getMonth() + 1) + '/' + date.getDate();
			var fullDate = getFullDate(date);
			dates.push({
				"date" : dateMsg,
				"fullDate" : fullDate
			});
			for (var i = 1; i <= 5; i++) {
				date.setDate(date.getDate() + 1);
				dateMsg = (date.getMonth() + 1) + '/' + date.getDate();
				fullDate = getFullDate(date);
				dates.push({
					"date" : dateMsg,
					"fullDate" : fullDate
				});
			}
			vm.dates = dates;
			getMovieShows(vm.movieId, vm.fullDate);
		}

		function getMovieShows(movieId, date) {
			MovieShowService.getMovieShows(movieId, date).success(
					function(theatres) {
						console.log(theatres);
					}).error(function(err) {
				vm.error = 'Movie Shows not found';
			});
		}

		function getFullDate(d) {
			var month = d.getMonth() + 1;
			var day = d.getDate();

			var output = d.getFullYear() + '-'
					+ (('' + month).length < 2 ? '0' : '') + month + '-'
					+ (('' + day).length < 2 ? '0' : '') + day;
			return output;
		}

		function setMovieDetail(movie) {
			MovieDataService.setProperty(movie);
			$location.url('/user/' + userId + '/movie/' + movie.id);
		}
	}
})();