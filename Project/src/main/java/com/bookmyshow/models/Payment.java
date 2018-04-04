package com.bookmyshow.models;

public class Payment {
	private int id;
	private int confirmationId;
	
	public Payment() {
		super();
	}
	
	public Payment(int id, int confirmationId) {
		super();
		this.id = id;
		this.confirmationId = confirmationId;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getConfirmationId() {
		return confirmationId;
	}
	public void setConfirmationId(int confirmationId) {
		this.confirmationId = confirmationId;
	}
}
