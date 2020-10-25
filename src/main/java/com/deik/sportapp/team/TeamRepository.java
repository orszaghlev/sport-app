package com.deik.sportapp.team;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Qualifier("datasource2")
@Repository
public interface TeamRepository extends CrudRepository<Team, String> {

}
