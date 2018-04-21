(function() {
	angular.module("BookMyShow").controller("movieController", movieController);

	function movieController($location, MovieService, $scope, MovieDataService,
			$routeParams) {
		var vm = this;
		vm.setMovieDetail = setMovieDetail;
		vm.bookMovie = bookMovie;
		var userId = $routeParams['userId'];
		vm.userId = userId;
		vm.displayMovieShows = displayMovieShows;

		function init() {
			findNowPlayingMovies();
		}
		init();

		function displayMovieShows(movieId) {
			$location.url('/user/' + userId + '/movie/' + movieId + '/movieshow');
		}

		function bookMovie() {
			$location.url("/login");
		}

		function findNowPlayingMovies() {
			var promise = MovieService.findNowPlayingMovies().success(
					function(movies) {
						vm.movies = movies;
					}).error(function(err) {
				vm.error = 'Movies not found';
			});
		}

		function setMovieDetail(movie) {
			MovieDataService.setProperty(movie);
			$location.url('/user/' + userId + '/movie/' + movie.id);
		}
	}
})();