package com.bookmyshow.repositories;

import com.bookmyshow.models.Movie;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.bookmyshow.models.Review;
import org.springframework.data.repository.query.Param;

public interface ReviewRepository extends CrudRepository<Review, Integer>{

}
