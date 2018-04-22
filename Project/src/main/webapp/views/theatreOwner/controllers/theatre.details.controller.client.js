(function() {
	angular.module("BookMyShow").controller("theatreDetailsController", theatreDetailsController);

	function theatreDetailsController($location, $scope, TheatreService, ReviewService, $sce, $routeParams, UserService) {
		var vm = this;
		vm.userId = $routeParams['userId'];
		vm.movieId = $routeParams['movieId'];
		vm.theatreId = $routeParams['thId'];
        vm.reviews=null;
        vm.review=null;
        vm.postReview = postReview;
        vm.getReviews = getReviews;
        vm.follow = follow;

		function init() {
			getTheatreDetails(vm.theatreId);
			getUserDetails(vm.userId);
			getReviews();
		}
		
		init();
		
		function getUserDetails(userId) {
			UserService.findUserById(userId).success(function(user) {
				vm.user = user;
				vm.source = $sce
				.trustAsResourceUrl("https://www.google.com/maps/embed/v1/directions?origin="
						+ "226 Parker Hill Ave, 02120"
						+ "&destination="
						+ "Regal Fenway Park"
						+ "&key=AIzaSyANw0wlspxQEEv2GUhEXe-gZ78kHx64OtE");
			}).error(function(err) {
				vm.error = 'Movie Ticket Details not found';
			});
		}
		
		function getTheatreDetails(theatreId){
			TheatreService.findTheatreById(theatreId)
			.success(function (response) {
            	vm.theatre = response;
            })
            .error(function () {
                vm.error = "Theatre Details not found";
            });
		}

        function postReview(review) {
            if(review.description) {
                var promise = ReviewService.createReviewTheatre(vm.userId, vm.theatreId, review);
                promise.success(function (response) {
                    getReviews();
                }, function (error) {

                });
            }

        }

        function getReviews() {
            var promise=TheatreService
                .getReviews(vm.theatreId);
            promise.success(function (response) {
                vm.reviews=response;
            },function (error) {

            });
        }

        function follow(follower) {
            var promise=UserService
                .follows(follower,vm.userId);
            promise.success(function (response) {
                var change = document.getElementById("follow");
                change.innerHTML = "Following";
                change.disabled=true;
            },function (error) {

            });
        }


    }
})();