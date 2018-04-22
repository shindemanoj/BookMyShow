package com.bookmyshow.repositories;

import org.springframework.data.repository.CrudRepository;

import com.bookmyshow.models.Review;

public interface ReviewRepository extends CrudRepository<Review, Integer>{

}
