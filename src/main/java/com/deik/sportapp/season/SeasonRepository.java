package com.deik.sportapp.season;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Qualifier("datasource2")
@Repository
public interface SeasonRepository extends CrudRepository<Season, String> {

}