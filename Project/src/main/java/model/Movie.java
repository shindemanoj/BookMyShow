package com.model;

import java.util.Date;

public class Movie {
	private String title;
	private String trailerUrl;
	private int stars;
	private Date releaseDate;
	private String imdbId;
	private String plot;
	private String poster;
	private String type;
	private String cast;
	
	public Movie() {
		super();
	}
	
	public Movie(String title, String trailerUrl, int stars, Date releaseDate, String imdbId, String plot,
			String poster, String type, String cast) {
		super();
		this.title = title;
		this.trailerUrl = trailerUrl;
		this.stars = stars;
		this.releaseDate = releaseDate;
		this.imdbId = imdbId;
		this.plot = plot;
		this.poster = poster;
		this.type = type;
		this.cast = cast;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getTrailerUrl() {
		return trailerUrl;
	}

	public void setTrailerUrl(String trailerUrl) {
		this.trailerUrl = trailerUrl;
	}

	public int getStars() {
		return stars;
	}

	public void setStars(int stars) {
		this.stars = stars;
	}

	public Date getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getImdbId() {
		return imdbId;
	}

	public void setImdbId(String imdbId) {
		this.imdbId = imdbId;
	}

	public String getPlot() {
		return plot;
	}

	public void setPlot(String plot) {
		this.plot = plot;
	}

	public String getPoster() {
		return poster;
	}

	public void setPoster(String poster) {
		this.poster = poster;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getCast() {
		return cast;
	}

	public void setCast(String cast) {
		this.cast = cast;
	}

}
