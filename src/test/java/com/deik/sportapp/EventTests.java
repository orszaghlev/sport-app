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
        Athlete athlete = new Athlete("1", "Puskas Ferenc", Date.valueOf("1927-04-01"), 3243251, "EUR", "centre-forward", "Hungarian");
        Athlete savedAthlete = athleteRepository.save(athlete);
        Team homeTeam = new Team("12004", "Buffalo Bills", "BUF", Date.valueOf("1959-10-28"), 2150000000L, "USD", "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Buffalo_Bills_logo.svg/100px-Buffalo_Bills_logo.svg.png", "Bills Stadium");
        Team savedHomeTeam = teamRepository.save(homeTeam);
        Team awayTeam = new Team("12016", "Kansas City Chiefs", "KC", Date.valueOf("1959-08-14"), 3000000000L, "USD", "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Kansas_City_Chiefs_logo.svg/100px-Kansas_City_Chiefs_logo.svg.png", "Arrowhead Stadium");
        Team savedAwayTeam = teamRepository.save(awayTeam);
        Competition competition = new Competition("22001", "USA", "American football", "NFL", "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/188px-National_Football_League_logo.svg.png");
        Competition savedCompetition = competitionRepository.save(competition);
        Season season = new Season("32001", competitionRepository.findById("22001").get(), Date.valueOf("2020-09-11"), Date.valueOf("2021-02-07"));
        Season savedSeason = seasonRepository.save(season);
        Match match = new Match("42001", seasonRepository.findById("32001").get(), teamRepository.findById("12004").get(), teamRepository.findById("12016").get(), 17, 26, "Bills Stadium", Date.valueOf("2020-10-19"));
        Match savedMatch = matchRepository.save(match);
        EventTypes eventTypes = new EventTypes("1", "goal");
        EventTypes savedEventTypes = eventTypesRepository.save(eventTypes);
        EventIdentity eventIdentity = new EventIdentity(athleteRepository.findById("1").get(), teamRepository.findById("12004").get(), matchRepository.findById("42001").get(), "08:14");
        Event event = new Event(eventIdentity, eventTypesRepository.findById("1").get());
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
        new Athlete("1", "Puskas Ferenc", Date.valueOf("1927-04-01"), 3243251, "EUR", "centre-forward", "Hungarian");
        new Team("12004", "Buffalo Bills", "BUF", Date.valueOf("1959-10-28"), 2150000000L, "USD", "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Buffalo_Bills_logo.svg/100px-Buffalo_Bills_logo.svg.png", "Bills Stadium");
        new Team("12016", "Kansas City Chiefs", "KC", Date.valueOf("1959-08-14"), 3000000000L, "USD", "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Kansas_City_Chiefs_logo.svg/100px-Kansas_City_Chiefs_logo.svg.png", "Arrowhead Stadium");
        new Competition("22001", "USA", "American football", "NFL", "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/188px-National_Football_League_logo.svg.png");
        new Season("32001", competitionRepository.findById("22001").get(), Date.valueOf("2020-09-11"), Date.valueOf("2021-02-07"));
        new Match("42001", seasonRepository.findById("32001").get(), teamRepository.findById("12004").get(), teamRepository.findById("12016").get(), 17, 26, "Bills Stadium", Date.valueOf("2020-10-19"));
        new EventTypes("1", "goal");
        EventIdentity eventIdentity = new EventIdentity(athleteRepository.findById("1").get(), teamRepository.findById("12004").get(), matchRepository.findById("42001").get(), "08:14");
        Event event = new Event(eventIdentity, eventTypesRepository.findById("1").get());
        Event foundEvent = eventRepository.findById(event.getId()).get();
        System.out.println(foundEvent);

        assertEquals(event.getId(), foundEvent.getId());
    }

}
