(function () {
    angular
        .module("BookMyShow")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: 'views/user/templates/login.view.client.html',
                controller: 'loginController',
                controllerAs: 'model'
            })
            .when("/", {
                templateUrl: 'views/user/templates/movies.view.client.html',
                controller: 'movieController',
                controllerAs: 'model'
            })
            .when("/register", {
                templateUrl: 'views/user/templates/register.view.client.html',
                controller: 'registerController',
                controllerAs: 'model'
            })
            .when("/movie/details", {
                templateUrl: 'views/user/templates/movie.details.view.client.html',
                controller: 'movieDetailsController',
                controllerAs: 'model'
            })
            .when("/theatreOwner/:toid/profile", {
                templateUrl: 'views/theatreOwner/templates/profileEdit.view.client.html',
                controller: 'profileController',
                controllerAs: 'model'
            })
            .when("/theatreOwner/:toid/theatre", {
                templateUrl: 'views/theatreOwner/templates/Theatre.view.client.html',
                controller: 'addTheatreController',
                controllerAs: 'model'
            })
            .when("/theatreOwner/:toid/theatre/:tid", {
                templateUrl: 'views/theatreOwner/templates/Theatre.view.client.html',
                controller: 'addTheatreController',
                controllerAs: 'model'
            })
            .when("/theatreOwner/:toid/theatre/:tid/addMovie", {
                templateUrl: 'views/movie/templates/add.movie.view.client.html',
                controller: 'addMovieController',
                controllerAs: 'model'
            })
            .otherwise({
                redirectTo: "/"
            });
      
    }
})();