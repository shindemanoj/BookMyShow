(function() {
	angular.module("BookMyShow").controller("movieShowController",
			movieShowController);

	function movieShowController($location, MovieShowService, $scope,
			MovieDataService, $routeParams) {
		var vm = this;
		vm.setMovieDetail = setMovieDetail;
		vm.userId = $routeParams['userId'];
		vm.movieId = $routeParams['movieId'];
		vm.changeDate = changeDate;
		vm.bookShow = bookShow;
		vm.getTheatreDetails = getTheatreDetails;

		function init() {
			var date = new Date();
			vm.selectedDate = (date.getMonth() + 1) + '/' + date.getDate();
			vm.fullDate = getFullDate(date);
			getDates();
			getMovieShows(vm.movieId, vm.fullDate);
		}
		init();
		
		function getTheatreDetails(theatreId){
			$location.url('/user/'+vm.userId+'/movie/'+vm.movieId+'/theater/'+theatreId+'/details');
		}
		
		function changeDate(fullDate, date) {
			vm.selectedDate = date;
			vm.fullDate = fullDate;
			getMovieShows(vm.movieId, vm.fullDate);
		}

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
		}

		function getMovieShows(movieId, date) {
			MovieShowService.getMovieShows(movieId, date).success(
					function(movieShows) {
						vm.movieShows = movieShows;
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

		function bookShow(movieShowId, time) {
			MovieShowService.getMovieShow(movieShowId, time,
					vm.movieId, vm.fullDate).success(
					function(selectedMovieShow) {
						$location.url('/user/' + vm.userId + '/movie/' + vm.movieId + '/movieShow/'+selectedMovieShow.id);
					}).error(function(err) {
				vm.error = 'Movie Shows not found';
			});
		}
	}
})();