/**
 * Created by shohitbajaj on 07/04/18.
 */

(function () {
    angular.module("BookMyShow").controller("profileController", profileController);

    function profileController($location, $scope, $routeParams, UserService, TheatreOwnerService, $rootScope) {
        var vm = this;
        var theatreOwnerId = $routeParams['toid'];
        vm.updateTheatreOwner = updateTheatreOwner;
        vm.deleteTheatreOwner = deleteTheatreOwner;
        //var userId = loggedin.data._id;
        // vm.deleteUser = deleteUser;
        vm.logout = logout;

        function logout(){
            UserService
                .logout()
                .then(
                    function (response) {
                        //$rootScope.currentUser = null;
                        $location.url("/login");
                    }
                )
        }

        function init() {
            vm.theatreOwner = TheatreOwnerService.findTheatreOwnerById(theatreOwnerId)
                .success(renderUser);
        }

        init();

        function renderUser(theatreOwner) {
            vm.theatreOwner = theatreOwner;
        }

        function updateTheatreOwner(newUser) {

            vm.message="";
            vm.error="";
            UserService
                .updateUser(userId, newUser)
                .success(function (response) {

                    vm.message = "user successfully updated";
                })
                .error(function () {
                    vm.error = "unable to update user";
                });
        }

        function deleteTheatreOwner(userId) {
            UserService.deleteUser(userId);
            $location.url("/login");
        }

    }
})();
