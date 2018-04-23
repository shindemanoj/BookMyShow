package com.bookmyshow.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

@Entity
public class TheatreOwner extends Person {

	private int noOfTheatres;

	@OneToMany(mappedBy = "theatreOwner", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Theatre> theatres;



	public TheatreOwner() {

		super();
	}

	public TheatreOwner(int id, String firstName, String lastName, String username, String password, String email,
			Date dob, String phone) {
		super(id, firstName, lastName, username, password, email, dob, phone);
		theatres = new ArrayList<>();
	}

	public int getNoOfTheatres() {
		return noOfTheatres;
	}

	public void setNoOfTheatres(int noOfTheatres) {
		this.noOfTheatres = noOfTheatres;
	}

	public List<Theatre> getTheatres() {
		return theatres;
	}

	public void setTheatres(Theatre theatre) {
		this.theatres.add(theatre);
		if (theatre.getTheatreOwner() != this) {
			theatre.setTheatreOwner(this);
		}
	}

	public void set(TheatreOwner newTheatreOwner) {
		this.setAddress(newTheatreOwner.getAddress());
		this.setDob(newTheatreOwner.getDob());
		this.setEmail(newTheatreOwner.getEmail());
		this.setFirstName(newTheatreOwner.getFirstName());
		this.setLastName(newTheatreOwner.getLastName());
		this.setPassword(newTheatreOwner.getPassword());
		this.setPhone(newTheatreOwner.getPhone());
	}

//	public void setTheatres(List<Theatre> theatres) {
//		this.theatres = theatres;
//	}

}
