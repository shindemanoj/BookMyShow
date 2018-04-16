(function() {
    angular
        .module("BookMyShow")
        .factory("MovieService", MovieService);

    function MovieService($http) {

        var api = {
            "createMovie"   : createMovie,
            "findAllMovies" : findAllMovies,
            "findUpcomingMovies" : findUpcomingMovies,
            "findMovieByTitle" : findMovieByTitle,
            "findUserByCredentials" : findUserByCredentials,
            "findNowPlayingMovies" : findNowPlayingMovies,
            "deleteUser" : deleteUser,
            "findMovieTrailerById" : findMovieTrailerById
        };
        return api;
        
        function findMovieTrailerById(movieId){
        	return $http.get("https://api.themoviedb.org/3/movie/"+movieId+"/videos?api_key=0c8d5deeeea6dbe92c81212ab98f4b40&language=en-US");
        }
        
        function createMovie(newMovie) {
            return $http.post("/api/movie", newMovie);
        }
        function findAllMovies() {
            return $http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=0c8d5deeeea6dbe92c81212ab98f4b40&language=en-US&page=1");
        }
        function findUpcomingMovies() {
            return $http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=0c8d5deeeea6dbe92c81212ab98f4b40&language=en-US&page=1");
        }
        function findMovieByTitle(title) {
            return $http.get("/api/movie?title="+title);
        }
        function findUserByCredentials(username, password) {
            return $http.get("/api/user?username="+username+"&password="+password);
        }
        function findNowPlayingMovies(){
            return $http.get("/api/movie");
        }
        function deleteUser(userId) {
            return $http.delete('/api/user/'+userId);
        }
    }
})();