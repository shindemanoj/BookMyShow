package com.bookmyshow.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.*;
import org.springframework.data.repository.query.Param;

import com.bookmyshow.models.Theatre;

public interface TheatreRepository extends CrudRepository<Theatre, Integer>{


}