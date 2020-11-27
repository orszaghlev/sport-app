package com.deik.sportapp;

import com.deik.sportapp.athlete.Athlete;
import com.deik.sportapp.athlete.AthleteRepository;
import com.deik.sportapp.competition.Competition;
import com.deik.sportapp.competition.CompetitionRepository;
import com.deik.sportapp.config.SecondaryDatasourceConfiguration;
import com.deik.sportapp.event.Event;
import com.deik.sportapp.event.EventIdentity;
import com.deik.sportapp.event.EventRepository;
import com.deik.sportapp.event.types.EventTypes;
import com.deik.sportapp.event.types.EventTypesRepository;
import com.deik.sportapp.match.Match;
import com.deik.sportapp.match.MatchRepository;
import com.deik.sportapp.season.Season;
import com.deik.sportapp.season.SeasonRepository;
import com.deik.sportapp.team.Team;
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
    public void createEventTest() {
        Athlete athlete = new Athlete("51003", "Ádám Szalai", Date.valueOf("1987-12-09"), 750000, "EUR", "Centre-Forward", "HUN");
        Athlete savedAthlete = athleteRepository.save(athlete);
        Team homeTeam = new Team("11002", "Bulgaria", "BGR", Date.valueOf("1923-01-01"), 23200000, "EUR", "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Bulgarian_Football_Union_logo.svg/150px-Bulgarian_Football_Union_logo.svg.png", "Vasil Lecski National Stadium");
        Team savedHomeTeam = teamRepository.save(homeTeam);
        Team awayTeam = new Team("11001", "Hungary", "HUN", Date.valueOf("1901-01-01"), 72200000, "EUR", "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Hungarian_Football_Federation_logo.svg/200px-Hungarian_Football_Federation_logo.svg.png", "Puskas Arena");
        Team savedAwayTeam = teamRepository.save(awayTeam);
        Competition competition = new Competition("21001", "Europe", "Football", "European Championship Qualification", "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/UEFA_Euro_2016_qualifying.png/220px-UEFA_Euro_2016_qualifying.png");
        Competition savedCompetition = competitionRepository.save(competition);
        Season season = new Season("31001", competitionRepository.findById("21001").get(), Date.valueOf("2019-03-21"), Date.valueOf("2020-11-12"));
        Season savedSeason = seasonRepository.save(season);
        Match match = new Match("41001", seasonRepository.findById("31001").get(), teamRepository.findById("11002").get(), teamRepository.findById("11001").get(), 1, 3, "Vasil Lecski National Stadium", Date.valueOf("2020-10-08"));
        Match savedMatch = matchRepository.save(match);
        EventTypes eventTypes = new EventTypes("61002", "Substitution out");
        EventTypes savedEventTypes = eventTypesRepository.save(eventTypes);
        EventIdentity eventIdentity = new EventIdentity(athleteRepository.findById("51003").get(), teamRepository.findById("11001").get(), matchRepository.findById("41001").get(), "59");
        Event event = new Event(eventIdentity, eventTypesRepository.findById("61002").get());
        Event savedEvent = eventRepository.save(event);

        assertNotNull(savedAthlete);
        assertNotNull(savedHomeTeam);
        assertNotNull(savedAwayTeam);
        assertNotNull(savedCompetition);
        assertNotNull(savedSeason);
        assertNotNull(savedMatch);
        assertNotNull(savedEventTypes);
        assertNotNull(savedEvent);
    }

    @Test
    public void getEventsTest() {
        List<Event> events = eventRepository.findAll();
        for (Event event : events) {
            System.out.println(event);
        }

        assertTrue(events.size() > 0);
    }

    @Test
    public void getEventByIdTest() {
        new Athlete("51003", "Ádám Szalai", Date.valueOf("1987-12-09"), 750000, "EUR", "Centre-Forward", "HUN");
        new Team("11002", "Bulgaria", "BGR", Date.valueOf("1923-01-01"), 23200000, "EUR", "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Bulgarian_Football_Union_logo.svg/150px-Bulgarian_Football_Union_logo.svg.png", "Vasil Lecski National Stadium");
        new Team("11001", "Hungary", "HUN", Date.valueOf("1901-01-01"), 72200000, "EUR", "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Hungarian_Football_Federation_logo.svg/200px-Hungarian_Football_Federation_logo.svg.png", "Puskas Arena");
        new Competition("21001", "Europe", "Football", "European Championship Qualification", "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/UEFA_Euro_2016_qualifying.png/220px-UEFA_Euro_2016_qualifying.png");
        new Season("31001", competitionRepository.findById("21001").get(), Date.valueOf("2019-03-21"), Date.valueOf("2020-11-12"));
        new Match("41001", seasonRepository.findById("31001").get(), teamRepository.findById("11002").get(), teamRepository.findById("11001").get(), 1, 3, "Vasil Lecski National Stadium", Date.valueOf("2020-10-08"));
        new EventTypes("61002", "Substitution out");
        EventIdentity eventIdentity = new EventIdentity(athleteRepository.findById("51003").get(), teamRepository.findById("11001").get(), matchRepository.findById("41001").get(), "59");
        Event event = new Event(eventIdentity, eventTypesRepository.findById("61002").get());
        Event foundEvent = eventRepository.findById(event.getId()).get();
        System.out.println(foundEvent);

        assertEquals(event.getId(), foundEvent.getId());
    }

}
