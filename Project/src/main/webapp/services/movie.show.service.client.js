(function() {
    angular
        .module("BookMyShow")
        .factory("MovieShowService", MovieShowService);

    function MovieShowService($http) {

        var api = {
            "createMovieShows"   : createMovieShows,
            "findMoviesForTheatre" : findMoviesForTheatre,
            "findMovieByTitle" : findMovieByTitle,
            "getMovieShows" : getMovieShows,
            "getMovieShow" : getMovieShow,
            "getMovieShowDetails" : getMovieShowDetails,
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
        function getMovieShows(movieId, date) {
            return $http.get("/api/movie/"+movieId+"/movieshow/"+ date);
        }
        function getMovieShow(theatreId, time, movieId, date){
            return $http.get("/api/movie/"+movieId+"/theatre/"+theatreId+"/date/"+date+"/time/"+time);
        }
        function getMovieShowDetails(movieShowId) {
            return $http.get("/api/movieshow/"+movieShowId);
        }
    }
})();