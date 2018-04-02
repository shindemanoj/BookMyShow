package com.model;

import java.util.Date;

public class MovieShow {
	private int id;
	private String type;
	private int seatsAvailable;
	private int showNo;
	private String venue;
	private Date date;
	private Date time;
	
	public MovieShow() {
		super();
	}
	
	public MovieShow(int id, String type, int seatsAvailable, int showNo, String venue, Date date, Date time) {
		super();
		this.id = id;
		this.type = type;
		this.seatsAvailable = seatsAvailable;
		this.showNo = showNo;
		this.venue = venue;
		this.date = date;
		this.time = time;
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

	public int getSeatsAvailable() {
		return seatsAvailable;
	}

	public void setSeatsAvailable(int seatsAvailable) {
		this.seatsAvailable = seatsAvailable;
	}

	public int getShowNo() {
		return showNo;
	}

	public void setShowNo(int showNo) {
		this.showNo = showNo;
	}

	public String getVenue() {
		return venue;
	}

	public void setVenue(String venue) {
		this.venue = venue;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}
}
