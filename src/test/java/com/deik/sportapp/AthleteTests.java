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
        Athlete athlete = new Athlete("51003", "Ádám Szalai", Date.valueOf("1987-12-09"), 750000, "EUR", "Centre-Forward", "HUN");
        Athlete savedAthlete = athleteRepository.save(athlete);

        assertNotNull(savedAthlete);
    }

    @Test
    public void findAthleteByNameTest() {
        String name = "Ádám Szalai";
        Athlete foundAthlete = athleteRepository.findByName("Ádám Szalai");

        assertEquals(name, foundAthlete.getName());
    }

    @Test
    public void findAthleteByNameDoesntExistTest() {
        Athlete foundAthlete = athleteRepository.findByName("Á. Szalai");

        assertNull(foundAthlete);
    }

    @Test
    public void updateAthleteTest() {
        String newName = "Adam Szalai";
        Athlete athlete = new Athlete("51003", "Ádám Szalai", Date.valueOf("1987-12-09"), 750000, "EUR", "Centre-Forward", "HUN");
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
        Athlete athlete = new Athlete("51003", "Ádám Szalai", Date.valueOf("1987-12-09"), 750000, "EUR", "Centre-Forward", "HUN");
        Athlete foundAthlete = athleteRepository.findById(athlete.getId()).get();
        System.out.println(foundAthlete);

        assertEquals(athlete.getId(), foundAthlete.getId());
    }

    @Test
    public void deleteAthleteTest() {
        boolean doesAthleteExistBeforeDeletion = athleteRepository.findById("51003").isPresent();
        athleteRepository.deleteById("51003");
        boolean doesAthleteExistAfterDeletion = athleteRepository.findById("51003").isPresent();

        assertTrue(doesAthleteExistBeforeDeletion);
        assertFalse(doesAthleteExistAfterDeletion);
    }

}
