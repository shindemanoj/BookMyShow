package com.bookmyshow.models;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User extends Person {

	@ManyToMany
	@JoinTable(name = "USER_MOVIESHOW", joinColumns = @JoinColumn(name = "USER_ID", referencedColumnName = "ID"), inverseJoinColumns = @JoinColumn(name = "MOVIESHOW_ID", referencedColumnName = "ID"))
	@JsonIgnore
	private List<MovieShow> movieShows;

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

	public List<MovieShow> getMovieShows() {
		return movieShows;
	}

	public void setMovieShows(List<MovieShow> movieShows) {
		this.movieShows = movieShows;
	}
}
