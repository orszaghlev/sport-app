package com.deik.sportapp.season;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.Optional;
import java.util.Set;

@Qualifier("datasource2")
@Repository
public interface SeasonRepository extends JpaRepository<Season, String> {
    Set<Season> findByCompetitionId(String competitionId);
    Optional<Season> findByIdAndCompetitionId(String id, String competitionId);
    public Season findByStarted(Date started);
}