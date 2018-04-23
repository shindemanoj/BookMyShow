(function() {
	angular.module("BookMyShow").controller("addMovieController",
			addMovieController);

	function addMovieController($location, MovieService, $scope, $filter,
			$routeParams, MovieShowService) {
		var vm = this;

		vm.addMoviesToTheater = addMoviesToTheater;
		vm.theatreOwnerId = $routeParams['toid'];
		var theatreId = $routeParams['tid'];
		vm.theatreId = theatreId;
		$scope.items = [];

		$scope.items2 = $scope.items;

		$scope.$watch('search', function(val) {
			$scope.items = $filter('filter')($scope.items2, val);
		});
		function init() {
			showMovies();
		}
		init();

		function showMovies() {
			var promise = MovieService.findAllMovies();
			promise.success(function(results) {
				var movies = results.results;
				$scope.items = movies;
				$scope.items2 = movies;
			}).error(function(err) {
				vm.error = 'Movies not found';
			});
		}
		function addMoviesToTheater(movie) {
			MovieService
					.findMovieByTitle(movie.original_title)
					.success(
							function(response) {
								if (response.length > 0) {
									addMovieShows(response[0].id, theatreId);
								} else {
									createMovie(movie);
								}
							}).error(function(err) {
						vm.error = 'Exception in API';
					});

		}

		function addMovieShows(movieId, theatreId) {
			MovieShowService.createMovieShows(movieId, theatreId).success(
					function(response) {
						if (response.length == 0) {
							vm.success = "Movie Shows added to theatre!";
						} else if(response.length > 0) {
							vm.success = "This movie is already getting played in the theatre!";
						} else{
							vm.error = "Error in adding movie shows.";
						}
					}).error(function(err) {
				vm.error = 'Error in adding movie shows';
			});
		}

		function createMovie(movie) {
			var promise = MovieService.findMovieTrailerById(movie.id).success(
					function(results) {
						var trailers = results.results;
						var trailerUrl = "https://www.youtube.com/embed/"
								+ trailers[0].key;
						var poster = "http://image.tmdb.org/t/p/w500"
								+ movie.poster_path;
						var movieObj = {
							title : movie.original_title,
							trailerUrl : trailerUrl,
							stars : movie.vote_average,
							voteCount : movie.vote_count,
							plot : movie.overview,
							poster : poster,
							releaseDate : movie.release_date

						};
						var promise = MovieService.createMovie(movieObj);
						promise.success(function(response) {
							addMovieShows(response.id, theatreId);
						}).error(function(err) {
							vm.error = 'user not found';
						});
					}).error(function(err) {
				vm.error = "trailer not found;"
			});
		}

	}
})();