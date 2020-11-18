package com.deik.sportapp;

import com.deik.sportapp.competition.Competition;
import com.deik.sportapp.competition.CompetitionRepository;
import com.deik.sportapp.config.SecondaryDatasourceConfiguration;
import com.deik.sportapp.season.Season;
import com.deik.sportapp.season.SeasonRepository;
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
public class SeasonTests {

    @Autowired
    private SeasonRepository seasonRepository;

    @Autowired
    private CompetitionRepository competitionRepository;

    @Test
    public void createSeasonTest() {
        Competition competition = new Competition("21001", "Europe", "Football", "European Championship Qualification", "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/UEFA_Euro_2016_qualifying.png/220px-UEFA_Euro_2016_qualifying.png");
        Competition savedCompetition = competitionRepository.save(competition);
        Season season = new Season("31001", competitionRepository.findById("21001").get(), Date.valueOf("2019-03-21"), Date.valueOf("2020-11-12"));
        Season savedSeason = seasonRepository.save(season);

        assertNotNull(savedCompetition);
        assertNotNull(savedSeason);
    }

    @Test
    public void findSeasonByDateOfStartTest() {
        Date started = Date.valueOf("2019-03-21");
        Season foundSeason = seasonRepository.findByStarted(Date.valueOf("2019-03-21"));

        assertEquals(started, foundSeason.getStarted());
    }

    @Test
    public void findSeasonByDateOfStartDoesntExistTest() {
        Season foundSeason = seasonRepository.findByStarted(Date.valueOf("2019-03-20"));

        assertNull(foundSeason);
    }

    @Test
    public void updateSeasonTest() {
        Date newStarted = Date.valueOf("2019-03-22");
        new Competition("21001", "Europe", "Football", "European Championship Qualification", "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/UEFA_Euro_2016_qualifying.png/220px-UEFA_Euro_2016_qualifying.png");
        Season season = new Season("31001", competitionRepository.findById("21001").get(), Date.valueOf("2019-03-21"), Date.valueOf("2020-11-12"));
        season.setStarted(newStarted);
        seasonRepository.save(season);
        Season updatedSeason = seasonRepository.findByStarted(season.getStarted());

        assertEquals(updatedSeason.getStarted(), newStarted);
    }

    @Test
    public void getSeasonsTest() {
        List<Season> seasons = seasonRepository.findAll();
        for (Season season : seasons) {
            System.out.println(season);
        }

        assertTrue(seasons.size() > 0);
    }

    @Test
    public void getSeasonByIdTest() {
        new Competition("21001", "Europe", "Football", "European Championship Qualification", "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/UEFA_Euro_2016_qualifying.png/220px-UEFA_Euro_2016_qualifying.png");
        Season season = new Season("31001", competitionRepository.findById("21001").get(), Date.valueOf("2019-03-21"), Date.valueOf("2020-11-12"));
        Season foundSeason = seasonRepository.findById(season.getId()).get();
        System.out.println(foundSeason);

        assertEquals(season.getId(), foundSeason.getId());
    }

    @Test
    public void deleteSeasonTest() {
        boolean doesSeasonExistBeforeDeletion = seasonRepository.findById("31001").isPresent();
        seasonRepository.deleteById("31001");
        boolean doesSeasonExistAfterDeletion = seasonRepository.findById("31001").isPresent();

        assertTrue(doesSeasonExistBeforeDeletion);
        assertFalse(doesSeasonExistAfterDeletion);
    }

}
