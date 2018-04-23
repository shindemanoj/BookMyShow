/**
 * Created by shohitbajaj on 07/04/18.
 */

(function () {
    angular.module("BookMyShow").controller("profileController", profileController);

    function profileController($location, $scope, $routeParams, UserService, TheatreOwnerService, TheatreService, $rootScope) {
        var vm = this;
        var theatreOwnerId = $routeParams['toid'];
        vm.theatreOwnerId = theatreOwnerId;
        vm.updateTheatreOwner = updateTheatreOwner;
        vm.deleteTheatreOwner = deleteTheatreOwner;
        vm.removeTheatre = removeTheatre;

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
        	renderUser(theatreOwnerId);
        }

        init();

        function renderUser(theatreOwnerId) {
        	TheatreOwnerService.findTheatreOwnerById(theatreOwnerId)
            .success(function (response) {
            	vm.theatreOwner = response;
                getAllTheatres(theatreOwnerId);
            })
            .error(function () {
                vm.error = "Couldn't delete this movie";
            });
            
        }
        
        function getAllTheatres(theatreOwnerId){
        	var promise=TheatreOwnerService.getAllTheatres(theatreOwnerId);
            promise.success(function (response) {
               vm.allTheatres=response;
            })
            .error(function () {
                vm.error = "could not load theatres";
            });
        }

        function updateTheatreOwner(newtheatreOwner) {

            vm.message="";
            vm.error="";
            var promise=TheatreOwnerService.updateTheatreOwner(theatreOwnerId, newtheatreOwner);
                promise.success(function (response) {

                    vm.message = "user successfully updated";
                })
                .error(function () {
                    vm.error = "unable to update user";
                });
        }

        function deleteTheatreOwner(theatreOwnerId) {
            TheatreOwnerService.deleteTheatreOwner(theatreOwnerId)
            .success(function (response) {
            	 $location.url("/login");
            })
            .error(function () {
                vm.error = "could not delete theatre owner";
            });
        }

        function removeTheatre(theatreId) {
            TheatreService.deleteTheatre(theatreId)
            .success(function (response) {
            	getAllTheatres(vm.theatreOwnerId);
            })
            .error(function () {
                vm.error = "could not delete theatre";
            });
          
        }



    }
})();
