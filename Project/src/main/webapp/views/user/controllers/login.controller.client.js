(function() {
	angular.module("BookMyShow").controller("loginController", loginController);

	function loginController($location, UserService) {
		var vm = this;

		// Event Handlers
		vm.login = login;

		function init() {

		}
		init();

		function login(user) {
			var promise = UserService.findUserByCredentials(user.username,
					user.password);
			promise.success(function(user) {
				var loginUser = user[0];
				if (loginUser != undefined) {
					$location.url('/user/' + loginUser.id);
				} else {
					vm.error = 'user not found';
				}
			}).error(function(err) {
				vm.error = 'user not found';
			});
		}
	}
})();