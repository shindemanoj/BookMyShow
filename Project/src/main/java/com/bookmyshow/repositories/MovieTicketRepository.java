package com.bookmyshow.repositories;

import org.springframework.data.repository.CrudRepository;

import com.bookmyshow.models.MovieTicket;

public interface MovieTicketRepository extends CrudRepository<MovieTicket, Integer>{

}
