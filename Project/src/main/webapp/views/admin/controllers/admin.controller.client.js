(function () {
    angular
        .module("BookMyShow")
        .controller("adminController", adminController);
    function adminController($location, $scope, $routeParams, UserService, TheatreOwnerService, TheatreService, ReviewService, MovieService, $rootScope, $route){
        var vm = this;
        vm.editId = $routeParams['uid'];
        vm.role=  $routeParams['role'];
        vm.allUsers=null;
        vm.allMovies=null;
        vm.allReviews=null;
        vm.allTheatreOwners=null;
        vm.deleteUser = deleteUser;
        vm.deleteTheatreOwner=deleteTheatreOwner;
        vm.deleteMovie =deleteMovie;
        vm.updateUser = updateUser;
        vm.redirectFunc= redirectFunc;
        vm.listUsers = listUsers;
        vm.listMovies = listMovies;
        vm.listReviews = listReviews;
        vm.deleteReview = deleteReview;
        vm.updateTheatreOwner = updateTheatreOwner;
        vm.logout = logout;

        function init() {
            if (vm.role){
                renderUser();
            }
            else {
                listUsers();
                listMovies();
                listReviews();
            }
        }
        init();

        function listUsers() {
            var promise = UserService.getAllUsers();
            promise.success(function (users) {
                    vm.allUsers = users;
                },
                function (err) {
                    vm.error = err;
                });
            var promise = TheatreOwnerService.getAllTheatreOwners();
            promise.success(function (users) {
                    vm.allTheatreOwners = users;
                },
                function (err) {
                    vm.error = err;
                });
        }

        function listMovies() {
            var promise = MovieService.findNowPlayingMovies();
            promise.success(function (movies) {
                    vm.allMovies = movies;
                },
                function (err) {
                    vm.error = err;
                });
        }

        function listReviews() {
            var promise = ReviewService.getAllReviews();
            promise.success(function (reviews) {
                    vm.allReviews = reviews;
                },
                function (err) {
                    vm.error = err;
                });
        }

        function redirectFunc(userId, role) {
            $location.url("/admin/manage/"+userId+"/edit/"+role);
        }


        function renderUser() {
             if (vm.role === "user") {
                 var promise = UserService.findUserById(vm.editId);
                 promise.success(function (user) {
                         vm.editUser =  user;
                     },
                     function (err) {
                         vm.error = err;
                     });

             }
             else if (vm.role === "theatreOwner") {
                 var promise = TheatreOwnerService.findTheatreOwnerById(vm.editId);
                 promise.success(function (user) {
                         vm.editUser =  user;
                     },
                     function (err) {
                         vm.error = err;
                     });
             }
         }


        function deleteTheatreOwner(theatreOwnerId) {
            if(confirm('are you sure?')){
                TheatreOwnerService.deleteTheatreOwner(theatreOwnerId)
                    .then(function () {
                        $route.reload();
                    });}
            else{
                $location.redirect("/admin/manage");//+vm.adminId);
            }
        }

        function deleteUser(userId) {
            if(confirm('are you sure?')){
                UserService.deleteUser(userId)
                    .then(function () {
                        $route.reload();
                    });}
            else{
                $location.url("/admin/manage");//+vm.adminId);
            }
        }

        function deleteMovie(movieId) {
            if(confirm('are you sure?')){
                MovieService.deleteNowPlayingMovies(movieId)
                    .then(function () {
                        $route.reload();
                    });}
            else{
                $location.url("/admin/manage");//+vm.adminId);
            }
        }

        function deleteReview(reviewId) {
            if(confirm('are you sure?')){
                ReviewService.deleteUserReview(reviewId)
                    .then(function () {
                        $route.reload();
                    });}
            else{
                $location.url("/admin/manage");//+vm.adminId);
            }
        }

        // function updateUser(newUser) {
        //     if(newUser){
        //         $rootScope.userId = newUser._id;
        //     }
        //     $location.url("/admin/updatecust/cust");
        // }

        function logout() {
            UserService
                .logout()
                .then(function (response) {
                    $rootScope.currentUser = null;
                    $location.url("/login");
                });
        }

        function updateUser(newUser) {

            var userId = vm.editId;
            UserService
                .updateUser(userId, newUser)
                .success(function (response) {
                    init();
                    vm.message = "user successfully updated";
                })
                .error(function () {
                    vm.error = "unable to update user";
                });
        }

        function updateTheatreOwner(newTheatreOwner) {

            var userId = vm.editId;
            TheatreOwnerService
                .updateTheatreOwner(userId, newTheatreOwner)
                .success(function (response) {
                    init();
                    vm.message = "user successfully updated";
                })
                .error(function () {
                    vm.error = "unable to update user";
                });
        }
    }
})();