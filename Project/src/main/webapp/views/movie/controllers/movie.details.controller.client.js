(function() {
	angular.module("BookMyShow").controller("movieDetailsController", movieDetailsController);

	function movieDetailsController($location, $scope, MovieDataService, MovieService, ReviewService, UserService, $sce, $routeParams) {
		var vm = this;
		vm.bookMovie = bookMovie;
		var userId = $routeParams['userId'];
		vm.userId = userId;
		var movieId = $routeParams['movieId'];
		vm.movieId = movieId;

        vm.reviews=null;
        vm.review=null;
        vm.comment=null;
        vm.getReviews=getReviews;
        vm.postReview=postReview;
        vm.displayMovieShows = displayMovieShows;
        vm.follow = follow;

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

        function follow(follower) {
            var promise=UserService
                .follows(follower,userId);
            promise.success(function (response) {
                var change = document.getElementById("follow");
                change.innerHTML = "Following";
                change.disabled=true;
            },function (error) {

            });
        }
		
		function displayMovieShows(movieId) {
			$location.url('/user/' + userId + '/movie/' + movieId + '/movieShow');
		}
		
		$scope.trustSrc = function(src) {
		    return $sce.trustAsResourceUrl(src);
		  }

	}
})();