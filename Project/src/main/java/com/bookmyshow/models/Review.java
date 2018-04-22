package com.bookmyshow.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Review {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String description;

	@ManyToOne
	private Movie movie;


	@ManyToOne
	@JsonIgnore
	private Theatre  theatre;

	@ManyToOne
	private User  user;
	
	public Review() {
		super();
	}
	
	public Review(int id, String description, Movie movie, Theatre theatre, User user) {
		super();
		this.id = id;
		this.description = description;
		setMovie(movie);
		setTheatre(theatre);
		setUser(user);
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
		movie.getReviews().add(this);
	}

	public Theatre getTheatre() {
		return theatre;
	}

	public void setTheatre(Theatre theatre) {
		this.theatre = theatre;
		theatre.getReviews().add(this);
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
		user.getReviews().add(this);
	}
}
