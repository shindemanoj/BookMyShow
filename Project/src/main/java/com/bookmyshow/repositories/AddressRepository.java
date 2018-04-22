package com.bookmyshow.repositories;
import org.springframework.data.repository.CrudRepository;

import com.bookmyshow.models.Address;

public interface AddressRepository extends CrudRepository<Address, Integer> {
	
}
