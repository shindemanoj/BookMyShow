package com.bookmyshow.models;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User extends Person {

	@OneToMany(mappedBy="user")
	@JsonIgnore
	private List<MovieTicket> movieTickets;

	@OneToMany(mappedBy="user")
	@JsonIgnore
	private List<Review> reviews = new ArrayList<>();

	public List<Review> getReviews() {
		return reviews;
	}

	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}

	public User() {
		super();
	}

	public List<MovieTicket> getMovieTickets() {
		return movieTickets;
	}

	public void setMovieTicket(MovieTicket movieTicket) {
		this.movieTickets.add(movieTicket);
		if(movieTicket.getUser() != this) {
			movieTicket.setUser(this);
		}
	}

}
