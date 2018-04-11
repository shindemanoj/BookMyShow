package com.bookmyshow.models;

import java.util.Date;

import javax.persistence.Entity;

@Entity
public class TheatreOwner extends Person{

	private int noOfTheatres;
	
	public TheatreOwner() {
		super();
	}

	public TheatreOwner(int id, String firstName, String lastName, String username, String password, String email, Date dob, String phone) {
		super(id, firstName, lastName, username, password, email, dob, phone);
	}

	public int getNoOfTheatres() {
		return noOfTheatres;
	}

	public void setNoOfTheatres(int noOfTheatres) {
		this.noOfTheatres = noOfTheatres;
	}
}
