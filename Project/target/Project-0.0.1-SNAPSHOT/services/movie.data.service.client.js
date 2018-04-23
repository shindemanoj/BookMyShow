(function() {
    angular
        .module("BookMyShow")
        .factory("MovieDataService", MovieDataService);

    function MovieDataService() {
    	var movie={};
    	return {
            getProperty: function () {
                return movie;
            },
            setProperty: function(movieObj) {
            	movie = movieObj;
            }
        };
    }
})();