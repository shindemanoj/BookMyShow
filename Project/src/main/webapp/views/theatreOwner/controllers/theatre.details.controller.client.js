(function() {
	angular.module("BookMyShow").controller("theatreDetailsController", theatreDetailsController);

	function theatreDetailsController($location, $scope, TheatreService, $sce, $routeParams, UserService) {
		var vm = this;
		vm.userId = $routeParams['userId'];
		vm.movieId = $routeParams['movieId'];
		vm.theatreId = $routeParams['thId'];

		function init() {
			getTheatreDetails(vm.theatreId);
			getUserDetails(vm.userId);
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

	}
})();