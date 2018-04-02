package com.model;

import java.util.Date;

public class User extends Person {
		
		public User() {
			super();
		}

		public User(int id, String firstName, String lastName, String username, String password, String email, Date dob, String phone) {
			super(id, firstName, lastName, username, password, email, dob, phone);
	
		}
				
}
