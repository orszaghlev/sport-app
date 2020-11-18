package com.deik.sportapp;

import com.deik.sportapp.competition.Competition;
import com.deik.sportapp.competition.CompetitionRepository;
import com.deik.sportapp.config.SecondaryDatasourceConfiguration;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Import(SecondaryDatasourceConfiguration.class)
public class CompetitionTests {

    @Autowired
    private CompetitionRepository competitionRepository;

    @Test
    public void createCompetitionTest() {
        Competition competition = new Competition("21001", "Europe", "Football", "European Championship Qualification", "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/UEFA_Euro_2016_qualifying.png/220px-UEFA_Euro_2016_qualifying.png");
        Competition savedCompetition = competitionRepository.save(competition);

        assertNotNull(savedCompetition);
    }

    @Test
    public void findCompetitionByNameTest() {
        String name = "European Championship Qualification";
        Competition foundCompetition = competitionRepository.findByName("European Championship Qualification");

        assertEquals(name, foundCompetition.getName());
    }

    @Test
    public void findCompetitionByNameDoesntExistTest() {
        Competition foundCompetition = competitionRepository.findByName("Europe Championship Qualification");

        assertNull(foundCompetition);
    }

    @Test
    public void updateCompetitionTest() {
        String newName = "UEFA European Championship Qualification";
        Competition competition = new Competition("21001", "Europe", "Football", "European Championship Qualification", "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/UEFA_Euro_2016_qualifying.png/220px-UEFA_Euro_2016_qualifying.png");
        competition.setName(newName);
        competitionRepository.save(competition);
        Competition updatedCompetition = competitionRepository.findByName(competition.getName());

        assertEquals(updatedCompetition.getName(), newName);
    }

    @Test
    public void getCompetitionsTest() {
        List<Competition> competitions = competitionRepository.findAll();
        for (Competition competition : competitions) {
            System.out.println(competition);
        }

        assertTrue(competitions.size() > 0);
    }

    @Test
    public void getCompetitionByIdTest() {
        Competition competition = new Competition("21001", "Europe", "Football", "European Championship Qualification", "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/UEFA_Euro_2016_qualifying.png/220px-UEFA_Euro_2016_qualifying.png");
        Competition foundCompetition = competitionRepository.findById(competition.getId()).get();
        System.out.println(foundCompetition);

        assertEquals(competition.getId(), foundCompetition.getId());
    }

    @Test
    public void deleteCompetitionTest() {
        boolean doesCompetitionExistBeforeDeletion = competitionRepository.findById("21001").isPresent();
        competitionRepository.deleteById("21001");
        boolean doesCompetitionExistAfterDeletion = competitionRepository.findById("21001").isPresent();

        assertTrue(doesCompetitionExistBeforeDeletion);
        assertFalse(doesCompetitionExistAfterDeletion);
    }

}
