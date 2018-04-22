(function() {
	angular.module("BookMyShow").controller("userProfileController", userProfileController);

	function userProfileController($location, UserService, $routeParams) {
		var vm = this;
		var userId = $routeParams['userId'];
		vm.userId = userId;
        vm.getReviews=getReviews;
        vm.reviews=null;
		
		function init() {
			getUserDetails();
			getReviews(userId);
			getTickets(userId);
		}
		init();

		function getUserDetails(user) {
			var promise = UserService.findUserById(userId);
			promise.success(function(user) {
				vm.user = user;
			}).error(function(err) {
				vm.error = 'user not found';
			});
		}

        function getReviews(userId) {
            var promise=UserService
                .getReviews(userId);
            promise.success(function (response) {
                vm.reviews=response;
            },function (error) {

            });
        }
        
        function getTickets(userId) {
            var promise=UserService
                .getTickets(userId);
            promise.success(function (response) {
                vm.tickets=response;
            },function (error) {

            });
        }
	}
})();