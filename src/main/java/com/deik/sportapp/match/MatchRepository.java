package com.deik.sportapp.match;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Qualifier("datasource2")
@Repository
public interface MatchRepository extends CrudRepository<Match, String> {

}