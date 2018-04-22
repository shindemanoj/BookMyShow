(function() {
	angular.module("BookMyShow").controller("bookMovieShowController",
			bookMovieShowController);

	function bookMovieShowController($location, MovieShowService, $scope,
			MovieDataService, $routeParams) {
		var vm = this;
		vm.userId = $routeParams['userId'];
		vm.movieId = $routeParams['movieId'];
		vm.movieShowId = $routeParams['movieShowId'];
		vm.bookTickets = bookTickets;
		$scope.aSeats = [ 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9',
				'A10', 'A11', 'A12' ];
		$scope.bSeats = [ 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9',
				'B10', 'B11', 'B12' ];
		$scope.cSeats = [ 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9',
				'C10', 'C11', 'C12' ];
		$scope.dSeats = [ 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9',
				'D10', 'D11', 'D12' ];
		$scope.eSeats = [ 'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9',
				'E10', 'E11', 'E12' ];
		$scope.fSeats = [ 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9',
				'F10', 'F11', 'F12' ];
		$scope.gSeats = [ 'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9',
				'G10', 'G11', 'G12' ];
		$scope.hSeats = [ 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9',
				'H10', 'H11', 'H12' ];
		$scope.iSeats = [ 'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9',
				'I10', 'I11', 'I12' ];
		$scope.jSeats = [ 'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9',
				'J10', 'J11', 'J12' ];
		// Selected seats
		$scope.selection = [];
		$scope.booked = [];

		// Toggle selection for a given seat by name
		$scope.toggleSelection = function toggleSelection(seatNumber) {
			var idx = $scope.selection.indexOf(seatNumber);

			// Is currently selected
			if (idx > -1) {
				$scope.selection.splice(idx, 1);
			}

			// Is newly selected
			else {
				$scope.selection.push(seatNumber);
			}
		};
		function init() {
			getMovieShowDetails(vm.movieShowId);
		}
		init();

		function getMovieShowDetails(movieShowId) {
			MovieShowService.getMovieShowDetails(movieShowId).success(
					function(movieShow) {
						vm.movieShow = movieShow;
						if(movieShow.seatsBooked != null){
							$scope.booked = movieShow.seatsBooked;	
						}
					}).error(function(err) {
				vm.error = 'Movie Show Details not found';
			});
		}

		function bookTickets() {
			if ($scope.selection.length > 5) {
				vm.error = "You cannot select more than 5 tickets!";
			}
			else if($scope.selection.length == 0){
				vm.error = "Please select atleast 1 ticket!";
			} else {
				vm.movieShow.seatsBooked = $scope.selection;
				delete vm.movieShow.id;
				MovieShowService.bookMovieShow(vm.userId, vm.movieShow, vm.movieShowId).success(
						function(movieTicket) {
							if(movieTicket != null){
								$location.url('/user/' + vm.userId + '/movie/' + vm.movieId + '/movieShow/'
										+ vm.movieShowId + '/ticket/' + movieTicket.id);	
							}
							else{
								vm.error = "Payment processing failed. Please check your balance.";
							}
						}).error(function(err) {
					vm.error = 'Error with booking. Please try again.';
				});
			}
		}
		
	}
})();