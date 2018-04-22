package com.bookmyshow.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
public class Theatre {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String description;
	private String location;

	@ManyToOne
	@JsonIgnore
	private TheatreOwner theatreOwner;

	@OneToMany(mappedBy = "theatre")
	@JsonIgnore
	List<MovieShow> movieShows = new ArrayList<>();

	public Theatre() {
		super();
	}

	public Theatre(int id, String name, String description) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
	}


	@OneToMany(mappedBy="theatre")
	@JsonIgnore
	private List<Review> reviews = new ArrayList<>();

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public TheatreOwner getTheatreOwner() {
		return theatreOwner;
	}

	public void setTheatreOwner(TheatreOwner theatreOwner) {
		this.theatreOwner = theatreOwner;
		if (!theatreOwner.getTheatres().contains(this)) {
			theatreOwner.getTheatres().add(this);
		}
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public List<MovieShow> getMovieShows() {
		return movieShows;
	}

	public void setMovieShows(List<MovieShow> movieShows) {
		this.movieShows = movieShows;
	}

	public List<Review> getReviews() {
		return reviews;
	}

	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}

}
