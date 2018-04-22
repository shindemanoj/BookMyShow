(function() {
	angular.module("BookMyShow").controller("userProfileController", userProfileController);

	function userProfileController($location, UserService, $routeParams, ReviewService) {
        var vm = this;
        var userId = $routeParams['userId'];
        vm.userId = userId;
        vm.reviews = null;
        vm.getReviews = getReviews;
        vm.deleteReview = deleteReview;
        vm.deleteuser = deleteuser;
        vm.getTickets = getTickets;
        vm.getUsersFollowed = getUsersFollowed;
        vm.updateUser = updateUser;

        function init() {
            getUserDetails();
            getReviews(userId);
            getUsersFollowed(userId);
            getTickets(userId);
        }

        init();

        function getUserDetails(user) {
            var promise = UserService.findUserById(userId);
            promise.success(function (user) {
                vm.user = user;
            }).error(function (err) {
                vm.error = 'user not found';
            });
        }

        function getReviews(userId) {
            var promise = UserService
                .getReviews(userId);
            promise.success(function (response) {
                vm.reviews = response;
            }, function (error) {

            });
        }

        function getUsersFollowed(userId) {
            var promise = UserService
                .getUsersFollowed(userId).success(function (response) {
                    vm.following = response;
                }, function (error) {

                });
        }

        function deleteReview(reviewId) {
            var promise = ReviewService.deleteUserReview(reviewId);
            promise.success(function (response) {
                getReviews(userId);
            }, function (error) {
            });
        }

        function deleteuser(userId) {
            var promise = UserService.deleteUser(userId);
            promise.success(function (response) {
                $location.url("/login");
            }, function (error) {
            });
        }


            function getTickets(userId) {
                var promise = UserService
                    .getTickets(userId);
                promise.success(function (response) {
                    vm.tickets = response;
                }, function (error) {

                });

            }

        function updateUser(newUser) {

            vm.message="";
            vm.error="";
            var promise=UserService.updateUser(userId, newUser);
            promise.success(function (response) {

                vm.message = "user successfully updated";
            })
                .error(function () {
                    vm.error = "unable to update user";
                });
        }
        }
})();