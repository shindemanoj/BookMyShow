package com.bookmyshow.models;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User extends Person {

	@OneToMany(mappedBy="user")
	@JsonIgnore
	private List<MovieTicket> movieTickets;

	@OneToMany(mappedBy="user", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Review> reviews = new ArrayList<>();

	@ManyToMany (mappedBy="children")
	@JsonIgnore
	private List<User> parent;


	@ManyToMany
	@JoinTable(name="follows",
			joinColumns=@JoinColumn(name="follower_ID",
					referencedColumnName="ID"),
			inverseJoinColumns=@JoinColumn(name=
					"follows_ID", referencedColumnName="ID"))
	@JsonIgnore
	private List<User> children;



	public List<Review> getReviews() {
		return reviews;
	}

	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}

	public User() {
		super();
	}

	public List<MovieTicket> getMovieTickets() {
		return movieTickets;
	}

	public void setMovieTicket(MovieTicket movieTicket) {
		this.movieTickets.add(movieTicket);
		if(movieTicket.getUser() != this) {
			movieTicket.setUser(this);
		}
	}

	public List<User> getParent() {
		return parent;
	}

	public void setParent(List<User> parent) {
		this.parent = parent;
	}

	public List<User> getChildren() {
		return children;
	}

	public void setChildren(List<User> children) {
		this.children = children;
	}

	public void follows
			(User user) {
		this.children.add(user);
		if(!user.getParent().contains(this)) {
			user.getParent().add(this);
		}
	}

	public void followedBy(User user) {
		this.parent.add(user);
		if(!user.getChildren()
				.contains(this)) {
			user.getChildren()
					.add(this);
		}
	}
}
