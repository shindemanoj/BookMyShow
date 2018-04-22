package com.bookmyshow.services;

import com.bookmyshow.models.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bookmyshow.models.Movie;
import com.bookmyshow.repositories.MovieRepository;
import com.bookmyshow.repositories.TheatreRepository;

import java.util.List;
import java.util.Optional;

@RestController
public class MovieService {
	@Autowired
	MovieRepository movieRepository;
	@Autowired
	TheatreRepository thRepository;

	// @GetMapping("/api/movies")
	// public Iterable<User> findAllUsers() {
	// if (username != null && password != null) {
	// return userRepository.findUserByCredentials(username, password);
	// } else if (username != null) {
	// return userRepository.findUserByUsername(username);
	// }
	// return userRepository.findAll();
	// }

	@PostMapping("/api/movie")
	public Movie createMovie(@RequestBody Movie movie) {
		return movieRepository.save(movie);
	}

	@GetMapping("/api/movie")
	public Iterable<Movie> findAllMovies(@RequestParam(name = "title", required = false) String title) {
		if (title != null) {
			return movieRepository.findMovieByMovieName(title);
		}
		return movieRepository.findAll();
	}

	@DeleteMapping("/api/movie/{movieId}")
	public void deleteUser(@PathVariable("movieId") int movieId) {
		movieRepository.deleteById(movieId);
	}

	@GetMapping("/api/movie/{movieId}/getReviews")
	public List<Review> getAllReviews(@PathVariable("movieId") int id) {
		Optional<Movie> movie = movieRepository.findById(id);
		return movie.get().getReviews();

	}
}
