
(function () {
    angular.module("BookMyShow").controller("addTheatreController", addTheatreController);

    function addTheatreController($location, $scope, $routeParams, UserService, TheatreOwnerService, TheatreService ,$rootScope) {

        var vm = this;
        var theatreOwnerId = $routeParams['toid'];
        var theatreId = $routeParams['tid'];
        vm.addTheatre= addTheatre;
        vm.updateTheatre = updateTheatre;
        vm.deleteTheatre = deleteTheatre;

        function init() {
            if (theatreId !=null) {
                renderTheatreInfo();
            }
        }

        init();

        function renderTheatreInfo(theatre) {
            vm.theatre = theatre;
        }

        function updateTheatre(newtheatre) {

            vm.message="";
            vm.error="";
            TheatreService.updateTheatre(theatreId, newtheatre)
                .success(function (response) {

                    vm.message = "theatre successfully updated";
                })
                .error(function () {
                    vm.error = "unable to update theatre";
                });
        }


        function addTheatre(newtheatre) {

            vm.message="";
            vm.error="";
            TheatreService
                .createTheatre(newtheatre, theatreOwnerId)
                .success(function (response) {

                    vm.message = "theatre added successfully";
                })
                .error(function () {
                    vm.error = "unable to add theatre";
                });
        }

        function deleteTheatre(theatreId) {
            TheatreService.deleteTheatre(theatreId);
            $location.url("/theatreOwner/"+theatreOwnerId+"/profile");
        }

    }
})();
