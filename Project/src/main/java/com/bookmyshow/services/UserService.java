package com.bookmyshow.services;

import java.util.List;
import java.util.Optional;

import com.bookmyshow.models.MovieTicket;
import com.bookmyshow.models.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.bookmyshow.models.User;
import com.bookmyshow.repositories.AddressRepository;
import com.bookmyshow.repositories.UserRepository;

@RestController
public class UserService {
	@Autowired
	UserRepository userRepository;
	@Autowired
	AddressRepository addressRepository;

	@GetMapping("/api/user")
	public Iterable<User> findAllUsers(@RequestParam(name = "username", required = false) String username,
			@RequestParam(name = "password", required = false) String password) {
		if (username != null && password != null) {
			return userRepository.findUserByCredentials(username, password);
		} else if (username != null) {
			return userRepository.findUserByUsername(username);
		}
		return userRepository.findAll();
	}

	@PostMapping("/api/user")
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}

	@GetMapping("/api/user/{userId}")
	public Optional<User> findUserById(@PathVariable("userId") int id) {
		return userRepository.findById(id);
	}

	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") int userId) {
		userRepository.deleteById(userId);
	}

	@PutMapping("/api/user/{userId}")
	public User updateUser(@PathVariable("userId") int id, @RequestBody User newUser) {
		Optional<User> user = userRepository.findById(id);
		user.get().set(newUser);
		return userRepository.save(user.get());
	}

	@GetMapping("/api/user/{userId}/getReviews")
	public List<Review> getAllReviews(@PathVariable("userId") int id) {
		Optional<User> user = userRepository.findById(id);
		return user.get().getReviews();
	}

	@PutMapping("/api/user/{uId}/followedBy/{fId}")
	public void followedBy(@PathVariable("uId") int uId, @PathVariable("fId") int fId) {
		Optional<User> parent = userRepository.findById(uId);
		Optional<User> children = userRepository.findById(fId);
		parent.get().followedBy(children.get());
		userRepository.save(parent.get());
	}


	@GetMapping("/api/user/{userId}/getUsersFollowed")
	public List<User> getUsersFollowed(@PathVariable("userId") int id) {
		Optional<User> user = userRepository.findById(id);
		return user.get().getParent();
	}
	
	@GetMapping("/api/user/{userId}/getUsersFollowers")
	public List<User> getUsersFollowers(@PathVariable("userId") int id) {
		Optional<User> user = userRepository.findById(id);
		return user.get().getChildren();
	}

	@GetMapping("/api/user/{userId}/ticket")
	public List<MovieTicket> getUserTickets(@PathVariable("userId") int id) {
		Optional<User> user = userRepository.findById(id);
		return user.get().getMovieTickets();
	}
}
