package com.deik.sportapp.competition;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Qualifier("datasource2")
@Repository
public interface CompetitionRepository extends CrudRepository<Competition, String> {

}