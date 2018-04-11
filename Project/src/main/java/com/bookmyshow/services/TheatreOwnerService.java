package com.bookmyshow.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bookmyshow.models.TheatreOwner;
import com.bookmyshow.repositories.TheatreOwnerRepository;

@RestController
public class TheatreOwnerService {
    @Autowired
    TheatreOwnerRepository theatreOwnerRepository;

    @GetMapping("/api/theatreOwner")
    public Iterable<TheatreOwner> findAllThareOwners(@RequestParam(name = "username", required = false) String username,
                                               @RequestParam(name = "password", required = false) String password) {
        if (username != null && password != null) {
            return theatreOwnerRepository.findTheatreOwnerByCredentials(username, password);
        } else if (username != null) {
            return theatreOwnerRepository.findTheatreOwnerByUsername(username);
        }
        return theatreOwnerRepository.findAll();
    }

    @PostMapping("/api/theatreOwner")
    public TheatreOwner createThatreOwner(@RequestBody TheatreOwner theatreOwner) {
        return theatreOwnerRepository.save(theatreOwner);
    }

    @GetMapping("/api/theatreOwner/{theatrOwnerId}")
    public Iterable<TheatreOwner> findUserById(@PathVariable("theatrOwnerId") int id) {
        return theatreOwnerRepository.findById(id);
    }





}
