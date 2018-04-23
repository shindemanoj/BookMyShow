(function() {
	angular.module("BookMyShow").controller("confirmationController",
			confirmationController);

	function confirmationController($location, MovieShowService, $scope,
			$routeParams, $sce, UserService) {
		var vm = this;
		vm.userId = $routeParams['userId'];
		vm.movieId = $routeParams['movieId'];
		vm.movieShowId = $routeParams['movieShowId'];
		vm.movieTikcetId = $routeParams['ticketId'];

		function init() {
			getMovieTicketDetails(vm.movieTikcetId);
		}
		init();

		function getUserDetails(userId) {
			UserService.findUserById(userId).success(function(user) {
				vm.user = user;
				vm.source = $sce
				.trustAsResourceUrl("https://www.google.com/maps/embed/v1/directions?origin="
						+ user.address.street1 + " "+ user.address.street2 + " "+ user.address.city +" "+ user.address.state + " "+ user.address.zip
						+ "&destination="
						+ vm.movieTicket.theatreAdress
						+ "&key=AIzaSyANw0wlspxQEEv2GUhEXe-gZ78kHx64OtE");
			}).error(function(err) {
				vm.error = 'Movie Ticket Details not found';
			});
		}

		function getMovieTicketDetails(movieTicketId) {
			MovieShowService.getMovieTicketDetails(movieTicketId).success(
					function(movieTicket) {
						vm.movieTicket = movieTicket;
						getUserDetails(vm.userId);
					}).error(function(err) {
				vm.error = 'Movie Ticket Details not found';
			});
		}
	}
})();