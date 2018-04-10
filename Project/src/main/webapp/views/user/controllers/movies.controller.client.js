(function() {
	angular.module("BookMyShow").controller("movieController", movieController);

	function movieController($location, MovieService, $scope, MovieDataService) {
		var vm = this;
		vm.setMovieDetail = setMovieDetail;

		function init() {
			findAllMovies();
		}
		init();

		function findAllMovies() {
			var promise = MovieService.findAllMovies();
			promise.success(function(results) {
				var movies = results.results;
				vm.movies = movies;
			}).error(function(err) {
				vm.error = 'user not found';
			});
		}
		
		function setMovieDetail(movie){
			MovieDataService.setProperty(movie);
			$location.url('/movie/details');
		}
	}
})();