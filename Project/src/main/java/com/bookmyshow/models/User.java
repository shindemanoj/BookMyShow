package com.bookmyshow.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User extends Person {

	@ManyToMany
	@JoinTable(name = "USER_MOVIESHOW", joinColumns = @JoinColumn(name = "USER_ID", referencedColumnName = "ID"), inverseJoinColumns = @JoinColumn(name = "MOVIESHOW_ID", referencedColumnName = "ID"))
	@JsonIgnore
	private List<MovieShow> movieShows;

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
