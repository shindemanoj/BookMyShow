package com.model;

import java.util.Date;
import java.util.List;

public class TheatreOwner extends Person{

	private int noOfTheatres;
	
	public TheatreOwner() {
		super();
	}

	public TheatreOwner(int id, String firstName, String lastName, String username, String password, String email, Date dob, String phone, int noOfTheatres) {
		super(id, firstName, lastName, username, password, email, dob, phone);
		this.noOfTheatres=noOfTheatres;
	}

	public int getNoOfTheatres() {
		return noOfTheatres;
	}

	public void setNoOfTheatres(int noOfTheatres) {
		this.noOfTheatres = noOfTheatres;
	}
}
