package com.bookmyshow.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.bookmyshow.models.Movie;

public interface MovieRepository extends CrudRepository<Movie, Integer>{

	@Query("SELECT m FROM Movie m WHERE m.title=:title")
	Iterable<Movie> findMovieByMovieName(@Param("title") String title);
}