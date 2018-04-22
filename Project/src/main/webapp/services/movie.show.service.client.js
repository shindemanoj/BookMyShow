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
            "bookMovieShow" : bookMovieShow,
            "getMovieTicketDetails": getMovieTicketDetails
        };
        return api;
        
        function getMovieTicketDetails(movieTicketId){
        	return $http.get("api/ticket/"+ movieTicketId);
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
        function bookMovieShow(userId, movieShow, movieShowId) {
            return $http.post("/api/user/"+userId+"/movieshow/"+movieShowId, movieShow);
        }
    }
})();