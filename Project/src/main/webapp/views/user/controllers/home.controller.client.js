(function() {
	angular.module("BookMyShow").controller("homeController", homeController);

	function homeController($location, MovieService, $scope, MovieDataService) {
		var vm = this;
		vm.setMovieDetail = setMovieDetail;
		vm.bookMovie = bookMovie;

		function init() {
			findAllMovies();
		}
		init();

		function bookMovie(){
			$location.url("/login");
		}
		
		function findAllMovies() {
			var promise = MovieService.findUpcomingMovies();
			promise.success(function(results) {
				var movies = results.results;
				vm.movies = movies;
			}).error(function(err) {
				vm.error = 'Movies not found';
			});
		}
		
		function setMovieDetail(movie){
			MovieDataService.setProperty(movie);
			$location.url('/movie/'+movie.id+'/details');
		}
	}
})();