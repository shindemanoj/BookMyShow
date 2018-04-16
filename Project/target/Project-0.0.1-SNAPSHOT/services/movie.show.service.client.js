(function() {
    angular
        .module("BookMyShow")
        .factory("MovieShowService", MovieShowService);

    function MovieShowService($http) {

        var api = {
            "createMovieShows"   : createMovieShows,
            "findMoviesForTheatre" : findMoviesForTheatre,
            "findMovieByTitle" : findMovieByTitle,
            "findUserByCredentials" : findUserByCredentials,
            "updateUser" : updateUser,
            "deleteMoviesForTheatre" : deleteMoviesForTheatre,
            "findMovieTrailerById" : findMovieTrailerById
        };
        return api;
        
        function findMovieTrailerById(movieId){
        	return $http.get("https://api.themoviedb.org/3/movie/"+movieId+"/videos?api_key=0c8d5deeeea6dbe92c81212ab98f4b40&language=en-US");
        }
        
        function createMovieShows(movieId, theatreId) {
            return $http.post("/api/movie/"+movieId+"/theatre/"+theatreId+"/movieshow");
        }
        function findMoviesForTheatre(theatreId) {
            return $http.get("/api/theatre/"+theatreId+"/movie");
        }
        function findMovieByTitle(title) {
            return $http.get("/api/movie?title="+title);
        }
        function findUserByCredentials(username, password) {
            return $http.get("/api/user?username="+username+"&password="+password);
        }
        function updateUser(userId, newUser){
            return $http.put("/api/user/"+userId, newUser);
        }
        function deleteMoviesForTheatre(movieId, theatreId) {
            return $http.delete("/api/theatre/"+theatreId +"/movie/"+movieId);
        }
    }
})();