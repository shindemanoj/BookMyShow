(function() {
	angular.module("BookMyShow").controller("homeDetailsController", homeDetailsController);

	function homeDetailsController($location, $scope, MovieDataService, MovieService, $sce) {
		var vm = this;
		vm.bookMovie = bookMovie;

		function init() {
			vm.movie = MovieDataService.getProperty();
			findMovieTrailerById(vm.movie.id);
		}
		init();
		
		function bookMovie(){
			$location.url("/login");
		}
		
		$scope.trustSrc = function(src) {
		    return $sce.trustAsResourceUrl(src);
		  }
		
		function findMovieTrailerById(movieId){
			var promise = MovieService.findMovieTrailerById(movieId);
			promise.success(function(results) {
				var trailers = results.results;
				vm.movie.trailerUrl = "https://www.youtube.com/embed/"+trailers[0].key;
			}).error(function(err) {
				vm.error = 'trailer not found';
			});
		}
	}
})();