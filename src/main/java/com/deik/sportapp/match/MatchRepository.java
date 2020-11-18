package com.deik.sportapp.match;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;

@Qualifier("datasource2")
@Repository
public interface MatchRepository extends JpaRepository<Match, String> {
    Set<Match> findBySeasonId(String seasonId);
    Set<Match> findByHomeTeam(String homeTeam);
    Set<Match> findByAwayTeam(String awayTeam);
    Optional<Match> findByIdAndSeasonIdAndHomeTeamAndAwayTeam(String id, String seasonId, String homeTeam, String awayTeam);
    public Match findByPlace(String place);
}