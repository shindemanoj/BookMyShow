(function() {
    angular
        .module("BookMyShow")
        .factory("UserService", UserService);

    function UserService($http) {

        var api = {
            "createUser"   : createUser,
            "findUserById" : findUserById,
            "findUserByUsername" : findUserByUsername,
            "findUserByCredentials" : findUserByCredentials,
            "updateUser" : updateUser,
            "deleteUser" : deleteUser,
            "getAllUsers": getAllUsers,
            "getReviews": getReviews
        };
        return api;

        function getReviews(userId) {
            return $http.get("/api/user/"+userId+"/getReviews");
        }

        function createUser(newUser) {
            return $http.post("/api/user", newUser);
        }
        function findUserById(userId) {
            return $http.get("/api/user/"+userId);
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
        function getAllUsers() {
            return $http.get("/api/user");
        }
    }
})();