package com.bookmyshow.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bookmyshow.models.Movie;
import com.bookmyshow.repositories.MovieRepository;
import com.bookmyshow.repositories.TheatreRepository;

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
	public Iterable<Movie> findAllUsers(@RequestParam(name = "title", required = false) String title) {
		if (title != null) {
			return movieRepository.findMovieByMovieName(title);
		} 
		return movieRepository.findAll();
	}

//	@GetMapping("/api/user/{userId}")
//	public Optional<User> findUserById(@PathVariable("userId") int id) {
//		return userRepository.findById(id);
//	}

}
