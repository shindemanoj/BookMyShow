package com.bookmyshow.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.bookmyshow.models.MovieTicket;
import com.bookmyshow.repositories.MovieTicketRepository;

@RestController
public class MovieTicketService {
	@Autowired
	MovieTicketRepository movieTicketRepository;
	

	@GetMapping("/api/ticket/{ticketId}")
	public Optional<MovieTicket> createMovie(@PathVariable("ticketId") int id) {
		return movieTicketRepository.findById(id);
	}
	
}
