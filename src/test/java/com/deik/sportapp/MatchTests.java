package com.deik.sportapp;

import com.deik.sportapp.competition.Competition;
import com.deik.sportapp.competition.CompetitionRepository;
import com.deik.sportapp.config.SecondaryDatasourceConfiguration;
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
public class MatchTests {

    @Autowired
    private MatchRepository matchRepository;

    @Autowired
    private SeasonRepository seasonRepository;

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private CompetitionRepository competitionRepository;

    @Test
    public void createMatchTest() {
        Competition competition = new Competition("21001", "Europe", "Football", "European Championship Qualification", "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/UEFA_Euro_2016_qualifying.png/220px-UEFA_Euro_2016_qualifying.png");
        Competition savedCompetition = competitionRepository.save(competition);
        Season season = new Season("31001", competitionRepository.findById("21001").get(), Date.valueOf("2019-03-21"), Date.valueOf("2020-11-12"));
        Season savedSeason = seasonRepository.save(season);
        Team homeTeam = new Team("11002", "Bulgaria", "BGR", Date.valueOf("1923-01-01"), 23200000, "EUR", "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Bulgarian_Football_Union_logo.svg/150px-Bulgarian_Football_Union_logo.svg.png", "Vasil Lecski National Stadium");
        Team savedHomeTeam = teamRepository.save(homeTeam);
        Team awayTeam = new Team("11001", "Hungary", "HUN", Date.valueOf("1901-01-01"), 72200000, "EUR", "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Hungarian_Football_Federation_logo.svg/200px-Hungarian_Football_Federation_logo.svg.png", "Puskas Arena");
        Team savedAwayTeam = teamRepository.save(awayTeam);
        Match match = new Match("41001", seasonRepository.findById("31001").get(), teamRepository.findById("11002").get(), teamRepository.findById("11001").get(), 1, 3, "Vasil Lecski National Stadium", Date.valueOf("2020-10-08"));
        Match savedMatch = matchRepository.save(match);

        assertNotNull(savedCompetition);
        assertNotNull(savedSeason);
        assertNotNull(savedHomeTeam);
        assertNotNull(savedAwayTeam);
        assertNotNull(savedMatch);
    }

    @Test
    public void findMatchByPlaceTest() {
        String place = "Vasil Lecski National Stadium";
        Match foundMatch = matchRepository.findByPlace("Vasil Lecski National Stadium");

        assertEquals(place, foundMatch.getPlace());
    }

    @Test
    public void findMatchByPlaceDoesntExistTest() {
        Match foundMatch = matchRepository.findByPlace("The Vasil Lecski National Stadium");

        assertNull(foundMatch);
    }

    @Test
    public void updateMatchTest() {
        String newPlace = "Vasil Levski National Stadium";
        new Competition("21001", "Europe", "Football", "European Championship Qualification", "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/UEFA_Euro_2016_qualifying.png/220px-UEFA_Euro_2016_qualifying.png");
        new Season("31001", competitionRepository.findById("21001").get(), Date.valueOf("2019-03-21"), Date.valueOf("2020-11-12"));
        new Team("11002", "Bulgaria", "BGR", Date.valueOf("1923-01-01"), 23200000, "EUR", "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Bulgarian_Football_Union_logo.svg/150px-Bulgarian_Football_Union_logo.svg.png", "Vasil Lecski National Stadium");
        new Team("11001", "Hungary", "HUN", Date.valueOf("1901-01-01"), 72200000, "EUR", "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Hungarian_Football_Federation_logo.svg/200px-Hungarian_Football_Federation_logo.svg.png", "Puskas Arena");
        Match match = new Match("41001", seasonRepository.findById("31001").get(), teamRepository.findById("11002").get(), teamRepository.findById("11001").get(), 1, 3, "Vasil Lecski National Stadium", Date.valueOf("2020-10-08"));
        match.setPlace(newPlace);
        matchRepository.save(match);
        Match updatedMatch = matchRepository.findByPlace(match.getPlace());

        assertEquals(updatedMatch.getPlace(), newPlace);
    }

    @Test
    public void getMatchesTest() {
        List<Match> matches = matchRepository.findAll();
        for (Match match : matches) {
            System.out.println(match);
        }

        assertTrue(matches.size() > 0);
    }

    @Test
    public void getMatchByIdTest() {
        new Competition("21001", "Europe", "Football", "European Championship Qualification", "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/UEFA_Euro_2016_qualifying.png/220px-UEFA_Euro_2016_qualifying.png");
        new Season("31001", competitionRepository.findById("21001").get(), Date.valueOf("2019-03-21"), Date.valueOf("2020-11-12"));
        new Team("11002", "Bulgaria", "BGR", Date.valueOf("1923-01-01"), 23200000, "EUR", "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Bulgarian_Football_Union_logo.svg/150px-Bulgarian_Football_Union_logo.svg.png", "Vasil Lecski National Stadium");
        new Team("11001", "Hungary", "HUN", Date.valueOf("1901-01-01"), 72200000, "EUR", "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Hungarian_Football_Federation_logo.svg/200px-Hungarian_Football_Federation_logo.svg.png", "Puskas Arena");
        Match match = new Match("41001", seasonRepository.findById("31001").get(), teamRepository.findById("11002").get(), teamRepository.findById("11001").get(), 1, 3, "Vasil Lecski National Stadium", Date.valueOf("2020-10-08"));
        Match foundMatch = matchRepository.findById(match.getId()).get();
        System.out.println(foundMatch);

        assertEquals(match.getId(), foundMatch.getId());
    }

    @Test
    public void deleteMatchTest() {
        boolean doesMatchExistBeforeDeletion = matchRepository.findById("41001").isPresent();
        matchRepository.deleteById("41001");
        boolean doesMatchExistAfterDeletion = matchRepository.findById("41001").isPresent();

        assertTrue(doesMatchExistBeforeDeletion);
        assertFalse(doesMatchExistAfterDeletion);
    }

}
