package com.bookmyshow.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.*;
import org.springframework.data.repository.query.Param;

import com.bookmyshow.models.TheatreOwner;

public interface TheatreOwnerRepository extends CrudRepository<TheatreOwner, Integer>{

    @Query("SELECT u FROM TheatreOwner u WHERE u.username=:username")
    Iterable<TheatreOwner> findTheatreOwnerByUsername(@Param("username") String u);

    @Query("SELECT u FROM TheatreOwner u WHERE u.username=:username AND u.password=:password")
    Iterable<TheatreOwner> findTheatreOwnerByCredentials(@Param("username") String username, @Param("password") String password);

    @Query("SELECT u FROM TheatreOwner u WHERE u.id=:id")
    Iterable<TheatreOwner> findById(@Param("id") int id);
}
