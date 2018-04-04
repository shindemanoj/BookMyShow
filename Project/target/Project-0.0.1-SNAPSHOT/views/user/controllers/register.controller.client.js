(function() {
	angular.module("BookMyShow").controller("registerController", registerController);

	function registerController($location, UserService) {
		var vm = this;

		// Event Handlers
		vm.register = register;

		function init() {

		}
		init();

		function register(user) {
			UserService.findUserByUsername(user.username).success(
					function(result) {
						if(result.length == 0){
							UserService.createUser(user).success(function(user) {
								$location.url('/user/' + user.id);
							}).error(function() {
								vm.error = 'sorry could not register';
							});
						}
						else{
							vm.error = "sorry that username is taken"
						}
					}).error(function() {
				
			});
		}
	}
})();