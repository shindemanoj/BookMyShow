package com.bookmyshow.repositories;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.bookmyshow.models.Admin;

public interface AdminRepository extends CrudRepository<Admin, Integer> {
	@Query("SELECT u FROM Admin u WHERE u.username=:username")
    Iterable<Admin> findAdminByUsername(@Param("username") String u);

    @Query("SELECT u FROM Admin u WHERE u.username=:username AND u.password=:password")
    Iterable<Admin> findAdminByCredentials(@Param("username") String username, @Param("password") String password);
}
