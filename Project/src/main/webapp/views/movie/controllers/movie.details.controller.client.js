(function() {
	angular.module("BookMyShow").controller("movieDetailsController", movieDetailsController);

	function movieDetailsController($location, $scope, MovieDataService, MovieService, ReviewService, $sce, $routeParams) {
		var vm = this;
		vm.bookMovie = bookMovie;
		var userId = $routeParams['userId'];
		vm.userId = userId;
		var movieId = $routeParams['movieId'];
		vm.movieId = movieId;
		vm.userId = userId;
        vm.reviews=null;
        vm.review=null;
        vm.comment=null;
        vm.getReviews=getReviews;
        vm.postReview=postReview;

		function init() {
			vm.movie = MovieDataService.getProperty();
            getReviews(movieId);
		}
		init();
		
		function bookMovie(){
			$location.url("/login");
		}

        function postReview(review) {
            if(review.description) {
                var promise = ReviewService.createReview(vm.userId, vm.movieId, review);
                promise.success(function (response) {
                    getReviews(vm.movieId);
                }, function (error) {

                });
            }

        }

        function getReviews(movieId) {
            var promise=MovieService
                .getReviews(movieId)
                promise.success(function (response) {
                    vm.reviews=response;
                },function (error) {

                });
        }
		
		$scope.trustSrc = function(src) {
		    return $sce.trustAsResourceUrl(src);
		  }

	}
})();