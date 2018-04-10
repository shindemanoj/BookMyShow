(function() {
    angular
        .module("BookMyShow")
        .factory("MovieService", MovieService);

    function MovieService($http) {

        var api = {
            "createUser"   : createUser,
            "findAllMovies" : findAllMovies,
            "findUserByUsername" : findUserByUsername,
            "findUserByCredentials" : findUserByCredentials,
            "updateUser" : updateUser,
            "deleteUser" : deleteUser,
            "findMovieTrailerById" : findMovieTrailerById
        };
        return api;
        
        function findMovieTrailerById(movieId){
        	return $http.get("https://api.themoviedb.org/3/movie/"+movieId+"/videos?api_key=0c8d5deeeea6dbe92c81212ab98f4b40&language=en-US");
        }
        
        function createUser(newUser) {
            return $http.post("/api/user", newUser);
        }
        function findAllMovies() {
            return $http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=0c8d5deeeea6dbe92c81212ab98f4b40&language=en-US&page=1");
        }
        function findUserByUsername(username) {
            return $http.get("/api/user?username="+username);
        }
        function findUserByCredentials(username, password) {
            return $http.get("/api/user?username="+username+"&password="+password);
        }
        function updateUser(userId, newUser){
            return $http.put("/api/user/"+userId, newUser);
        }
        function deleteUser(userId) {
            return $http.delete('/api/user/'+userId);
        }
    }
})();