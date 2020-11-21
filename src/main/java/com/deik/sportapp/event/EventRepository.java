package com.deik.sportapp.event;

import com.deik.sportapp.match.Match;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Qualifier("datasource2")
@Repository
public interface EventRepository extends JpaRepository<Event, EventIdentity> {
    List<Event> findById_MatchId(Match matchId);
}
