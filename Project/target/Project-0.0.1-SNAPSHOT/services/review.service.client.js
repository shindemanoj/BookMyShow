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
            "deleteUserReview" : deleteUserReview,
            "createReviewTheatre" : createReviewTheatre,
            "getAllReviews": getAllReviews,
            "logout" : logout
        };
        return api;



        function createReview(userId, movieId, Review) {
            return $http.post("/api/user/"+userId+"/movie/"+movieId, Review);
        }

        function createReviewTheatre(userId, theatreId, Review) {
            return $http.post("/api/user/"+userId+"/theatre/"+theatreId, Review);
        }


        function findTheatreById(theatreId) {
            return $http.get("/api/theatre/"+theatreId);
        }
        function getAllReviews() {
             return $http.get("/api/reviews/getAll");
        }

        function updateTheatre(theatreId, newTheatre){
            return $http.put("/api/theatre/"+theatreId, newTheatre);
        }
        function deleteUserReview(Id) {
            return $http.delete('/api/review/'+Id);
        }
        function logout() {
            return $http.post("/api/logout");
        }

    }
})();