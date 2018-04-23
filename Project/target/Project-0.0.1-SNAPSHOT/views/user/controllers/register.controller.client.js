(function() {
	angular.module("BookMyShow").controller("registerController", registerController);

	function registerController($location, UserService, TheatreOwnerService) {
		var vm = this;

		// Event Handlers
		vm.register = register;

		function init() {

		}
		init();

		function register(user) {
			UserService.findUserByUsername(user.username).success(
					function(result) {
						if(result.length === 0){
							if(user.role === "user"){
							user.wallet = 50;	
							UserService.createUser(user).success(function(user) {
								alert("Congratulations! 50$ has been added to your BookMyShow Wallet!.");
                                $location.url('/user/' + user.id);
							}).error(function() {
								vm.error = 'sorry could not register';
							});
						}
						else {
                                TheatreOwnerService.createTheatreOwner(user).success(function(user) {
                                    $location.url('/theatreOwner/'+ user.id+'/profile');
                                }).error(function() {
                                    vm.error = 'sorry could not register';
                                });
							}}
						else{
							vm.error = "sorry that username is taken"
						}
					}).error(function() {
				
			});
		}
	}
})();