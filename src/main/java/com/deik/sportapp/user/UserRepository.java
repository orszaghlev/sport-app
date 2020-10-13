package com.deik.sportapp.user;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;

@Qualifier("datasource1")
public interface UserRepository extends CrudRepository<User, String> {

}
