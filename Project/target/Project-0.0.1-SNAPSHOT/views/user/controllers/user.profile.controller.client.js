(function() {
	angular.module("BookMyShow").controller("userProfileController", userProfileController);

	function userProfileController($location, UserService, $routeParams) {
		var vm = this;
		var userId = $routeParams['userId'];
		vm.userId = userId;
		
		function init() {
			getUserDetails();
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
	}
})();