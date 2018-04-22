package com.bookmyshow.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

@Entity
public class User extends Person {
		
		public User() {
			super();
		}



		@OneToMany(mappedBy="user")
		@JsonIgnore
		private List<Review> reviews = new ArrayList<>();

		public User(int id, String firstName, String lastName, String username, String password, String email, Date dob, String phone) {
			super(id, firstName, lastName, username, password, email, dob, phone);
	
		}


	public List<Review> getReviews() {
		return reviews;
	}

	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}
}
