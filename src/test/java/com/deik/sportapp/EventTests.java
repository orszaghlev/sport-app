package com.deik.sportapp;

import com.deik.sportapp.athlete.Athlete;
import com.deik.sportapp.athlete.AthleteRepository;
import com.deik.sportapp.competition.CompetitionRepository;
import com.deik.sportapp.config.SecondaryDatasourceConfiguration;
import com.deik.sportapp.event.Event;
import com.deik.sportapp.event.EventIdentity;
import com.deik.sportapp.event.EventRepository;
import com.deik.sportapp.event.types.EventTypesRepository;
import com.deik.sportapp.match.MatchRepository;
import com.deik.sportapp.season.SeasonRepository;
import com.deik.sportapp.team.TeamRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;

import java.sql.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Import(SecondaryDatasourceConfiguration.class)
public class EventTests {

    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private AthleteRepository athleteRepository;
    @Autowired
    private TeamRepository teamRepository;
    @Autowired
    private SeasonRepository seasonRepository;
    @Autowired
    private CompetitionRepository competitionRepository;
    @Autowired
    private MatchRepository matchRepository;
    @Autowired
    private EventTypesRepository eventTypesRepository;

    @Test
    public void getEventsTest() {
        List<Event> events = eventRepository.findAll();
        for (Event event : events) {
            System.out.println(event);
        }

         assertTrue(events.size() > 0);
    }

}
