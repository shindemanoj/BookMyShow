(function() {
    angular
        .module("BookMyShow")
        .factory("TheatreService", TheatreService);

    function TheatreService($http) {
        var api = {
            "createTheatre"   : createTheatre,
            "findTheatreById" : findTheatreById,
            // "findTheatreForTheatreOwner" : findTheatreForTheatreOwner,
            "updateTheatre" : updateTheatre,
            "deleteTheatre" : deleteTheatre,
            "logout" : logout
        };
        return api;

        function createTheatre(newTheatre, theatreOwnerId) {
            return $http.post("/api/"+theatreOwnerId+"/theatre", newTheatre);
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
        function deleteTheatre(theatreId) {
            return $http.delete('/api/theatre/'+theatreId);
        }
        function logout() {
            return $http.post("/api/logout");
        }

    }
    })();