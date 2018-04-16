package com.bookmyshow.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.bookmyshow.models.User;
import com.bookmyshow.repositories.UserRepository;

@RestController
public class UserService {
	@Autowired
	UserRepository userRepository;

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
		newUser.setId(id);
		return userRepository.save(newUser);
	}


}
