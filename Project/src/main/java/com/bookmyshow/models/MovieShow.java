package com.bookmyshow.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class MovieShow {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String movieName;
	private int screenNumber;
	private String theatreName;
	private String theatreAdress;
	private String date;
	private String time;
	private String[] seatsBooked;

	@ManyToOne
	@JsonIgnore
	Movie movie;

	@ManyToOne
	@JsonIgnore
	Theatre theatre;

	@OneToMany(mappedBy="movieShow")
	@JsonIgnore
	private List<MovieTicket> movieTickets;
	
	public MovieShow() {
		super();
	}

	public MovieShow(String movieName, int screenNumber, String theatreName, String theatreAdress,
			String date, String time, Movie movie, Theatre theatre) {
		super();
		this.movieName = movieName;
		this.screenNumber = screenNumber;
		this.theatreName = theatreName;
		this.theatreAdress = theatreAdress;
		this.date = date;
		this.time = time;
		setMovie(movie);
		setTheatre(theatre);
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMovieName() {
		return movieName;
	}

	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}

	public int getScreenNumber() {
		return screenNumber;
	}

	public void setScreenNumber(int screenNumber) {
		this.screenNumber = screenNumber;
	}

	public String getTheatreName() {
		return theatreName;
	}

	public void setTheatreName(String theatreName) {
		this.theatreName = theatreName;
	}

	public String getTheatreAdress() {
		return theatreAdress;
	}

	public void setTheatreAdress(String theatreAdress) {
		this.theatreAdress = theatreAdress;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
		if (!movie.getMovieShows().contains(this)) {
			movie.getMovieShows().add(this);
		}
	}

	public Theatre getTheatre() {
		return theatre;
	}

	public void setTheatre(Theatre theatre) {
		this.theatre = theatre;
		if (!theatre.getMovieShows().contains(this)) {
			theatre.getMovieShows().add(this);
		}
	}

	public String[] getSeatsBooked() {
		return seatsBooked;
	}

	public void setSeatsBooked(String[] seatsBooked) {
		this.seatsBooked = seatsBooked;
	}

	public List<MovieTicket> getMovieTickets() {
		return movieTickets;
	}

	public void setMovieTicket(MovieTicket movieTicket) {
		this.movieTickets.add(movieTicket);
		if(movieTicket.getMovieShow() != this) {
			movieTicket.setMovieShow(this);
		}
	}

}
