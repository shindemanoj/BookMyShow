(function() {
    angular
        .module("BookMyShow")
        .factory("TheatreOwnerService", TheatreOwnerService);

    function TheatreOwnerService($http) {

        var api = {
            "createTheatreOwner"   : createTheatreOwner,
            "findTheatreOwnerById" : findTheatreOwnerById,
            "findTheatreOwnerByUsername" : findTheatreOwnerByUsername,
            "findTheatreOwnerByCredentials" : findTheatreOwnerByCredentials,
            "updateTheatreOwner" : updateTheatreOwner,
            "deleteTheatreOwner" : deleteTheatreOwner,
            "getAllTheatres" : getAllTheatres,
            "deleteTheatreForTheatreOwner":deleteTheatreForTheatreOwner,
            "getAllTheatreOwners": getAllTheatreOwners,
            "logout" : logout
        };
        return api;

        function createTheatreOwner(newTheatreOwner) {
            return $http.post("/api/theatreOwner", newTheatreOwner);
        }
        function findTheatreOwnerById(theatreOwnerId) {
            return $http.get("/api/theatreOwner/"+theatreOwnerId);
        }
        function findTheatreOwnerByUsername(username) {
            return $http.get("/api/theatreOwner?username="+username);
        }
        function findTheatreOwnerByCredentials(username, password) {
            return $http.get("/api/theatreOwner?username="+username+"&password="+password);
        }
        function updateTheatreOwner(theatreOwnerId, newTheatreOwner){
            return $http.put("/api/theatreOwner/"+theatreOwnerId, newTheatreOwner);
        }
        function deleteTheatreOwner(theatreOwnerId) {
            return $http.delete('/api/theatreOwner/'+theatreOwnerId);
        }
        function getAllTheatres(theatreOwnerId) {
            return $http.get('/api/theatreOwner/'+theatreOwnerId+'/getTheatres');
        }
        function deleteTheatreForTheatreOwner(theatreId, theatreOwnerId) {
            return $http.delete('/api/theatreOwner/'+theatreOwnerId+'/theatre/'+theatreId);
        }
        function getAllTheatreOwners() {
            return $http.get("/api/theatreOwner");
        }

        function logout() {
            return $http.post("/api/logout");
        }

    }
})();