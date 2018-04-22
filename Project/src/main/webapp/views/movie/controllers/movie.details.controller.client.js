(function() {
	angular.module("BookMyShow").controller("movieDetailsController", movieDetailsController);

	function movieDetailsController($location, $scope, MovieDataService, MovieService, $sce, $routeParams) {
		var vm = this;
		vm.bookMovie = bookMovie;
		var userId = $routeParams['userId'];
		vm.userId = userId;
		var movieId = $routeParams['movieId'];
		vm.movieId = movieId;
		vm.displayMovieShows = displayMovieShows;
		
		function init() {
			vm.movie = MovieDataService.getProperty();
		}
		init();
		
		function bookMovie(){
			$location.url("/login");
		}
		
		function displayMovieShows(movieId) {
			$location.url('/user/' + userId + '/movie/' + movieId + '/movieShow');
		}
		
		$scope.trustSrc = function(src) {
		    return $sce.trustAsResourceUrl(src);
		  }
		
	}
})();