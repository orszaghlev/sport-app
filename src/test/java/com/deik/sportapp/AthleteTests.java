package com.deik.sportapp;

import com.deik.sportapp.athlete.Athlete;
import com.deik.sportapp.athlete.AthleteRepository;
import com.deik.sportapp.config.SecondaryDatasourceConfiguration;
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
public class AthleteTests {

    @Autowired
    private AthleteRepository athleteRepository;

    @Test
    public void createAthleteTest() {
        Athlete athlete = new Athlete("1", "Puskas Ferenc", Date.valueOf("1927-04-01"), 3243251, "EUR", "centre-forward", "Hungarian");
        Athlete savedAthlete = athleteRepository.save(athlete);

        assertNotNull(savedAthlete);
    }

    @Test
    public void findAthleteByNameTest() {
        String name = "Puskas Ferenc";
        Athlete foundAthlete = athleteRepository.findByName("Puskas Ferenc");

        assertEquals(name, foundAthlete.getName());
    }

    @Test
    public void findAthleteByNameDoesntExistTest() {
        Athlete foundAthlete = athleteRepository.findByName("P. Ferenc");

        assertNull(foundAthlete);
    }

    @Test
    public void updateAthleteTest() {
        String newName = "Ferenc Puskas";
        Athlete athlete = new Athlete("1", "Puskas Ferenc", Date.valueOf("1927-04-01"), 3243251, "EUR", "centre-forward", "Hungarian");
        athlete.setName(newName);
        athleteRepository.save(athlete);
        Athlete updatedAthlete = athleteRepository.findByName(athlete.getName());

        assertEquals(updatedAthlete.getName(), newName);
    }

    @Test
    public void getAthletesTest() {
        List<Athlete> athletes = athleteRepository.findAll();
        for (Athlete athlete : athletes) {
            System.out.println(athlete);
        }

        assertTrue(athletes.size() > 0);
    }

    @Test
    public void getAthleteByIdTest() {
        Athlete athlete = new Athlete("1", "Puskas Ferenc", Date.valueOf("1927-04-01"), 3243251, "EUR", "centre-forward", "Hungarian");
        Athlete foundAthlete = athleteRepository.findById(athlete.getId()).get();
        System.out.println(foundAthlete);

        assertEquals(athlete.getId(), foundAthlete.getId());
    }

    @Test
    public void deleteAthleteTest() {
        boolean doesAthleteExistBeforeDeletion = athleteRepository.findById("1").isPresent();
        athleteRepository.deleteById("1");
        boolean doesAthleteExistAfterDeletion = athleteRepository.findById("1").isPresent();

        assertTrue(doesAthleteExistBeforeDeletion);
        assertFalse(doesAthleteExistAfterDeletion);
    }

}
