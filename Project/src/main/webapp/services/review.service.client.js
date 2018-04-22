(function() {
    angular
        .module("BookMyShow")
        .factory("ReviewService", ReviewService);

    function ReviewService($http) {
        var api = {
            "createReview"   : createReview,
            // "findTheatreById" : findTheatreById,
            // "findTheatreForTheatreOwner" : findTheatreForTheatreOwner,
            // "updateTheatre" : updateTheatre,
            "deleteReview" : deleteReview,
            "logout" : logout
        };
        return api;



        function createReview(userId, movieId, Review) {
            return $http.post("/api/user/"+userId+"/movie/"+movieId, Review);
        }
        function findTheatreById(theatreId) {
            return $http.get("/api/theatre/"+theatreId);
        }
        // function findTheatreForTheatreOwner(id) {
        //     return $http.get("/api/theatreOwner/theatre?id"+id);
        // }

        function updateTheatre(theatreId, newTheatre){
            return $http.put("/api/theatre/"+theatreId, newTheatre);
        }
        function deleteReview(theatreId) {
            return $http.delete('/api/theatre/'+theatreId);
        }
        function logout() {
            return $http.post("/api/logout");
        }

    }
})();