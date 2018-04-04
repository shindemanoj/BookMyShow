package com.bookmyshow.models;

import java.util.Date;

import javax.persistence.Entity;

@Entity
public class User extends Person {
		
		public User() {
			super();
		}

		public User(int id, String firstName, String lastName, String username, String password, String email, Date dob, String phone) {
			super(id, firstName, lastName, username, password, email, dob, phone);
	
		}
				
}
