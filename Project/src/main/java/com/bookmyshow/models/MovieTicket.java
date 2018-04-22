package com.bookmyshow.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class MovieTicket {
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
	
	public MovieTicket(String movieName, int screenNumber, String theatreName, String theatreAdress, String date,
			String time, String[] seatsBooked) {
		super();
		this.movieName = movieName;
		this.screenNumber = screenNumber;
		this.theatreName = theatreName;
		this.theatreAdress = theatreAdress;
		this.date = date;
		this.time = time;
		this.seatsBooked = seatsBooked;
	}

	@ManyToOne
	@JsonIgnore
	User user;
	
	@ManyToOne
	@JsonIgnore
	MovieShow movieShow;

	public MovieTicket() {
		super();
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

	public String[] getSeatsBooked() {
		return seatsBooked;
	}

	public void setSeatsBooked(String[] seatsBooked) {
		this.seatsBooked = seatsBooked;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
		if(!user.getMovieTickets().contains(this)) {
			user.getMovieTickets().add(this);
		}
	}

	public MovieShow getMovieShow() {
		return movieShow;
	}

	public void setMovieShow(MovieShow movieShow) {
		this.movieShow = movieShow;
		if(!movieShow.getMovieTickets().contains(this)) {
			movieShow.getMovieTickets().add(this);
		}
	}
	
}
