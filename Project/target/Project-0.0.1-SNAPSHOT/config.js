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
      
    }
})();