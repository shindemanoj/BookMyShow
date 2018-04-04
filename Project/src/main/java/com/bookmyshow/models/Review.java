package com.bookmyshow.models;

public class Review {
	private int id;
	private String type;
	private String description;
	
	public Review() {
		super();
	}
	
	public Review(int id, String type, String description) {
		super();
		this.id = id;
		this.type = type;
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}
