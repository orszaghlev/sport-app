package com.deik.sportapp;

import com.deik.sportapp.config.SecondaryDatasourceConfiguration;
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
public class TeamTests {

    @Autowired
    private TeamRepository teamRepository;

    @Test
    public void createTeamTest() {
        Team team = new Team("11001", "Hungary", "HUN", Date.valueOf("1901-01-01"), 72200000, "EUR", "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Hungarian_Football_Federation_logo.svg/200px-Hungarian_Football_Federation_logo.svg.png", "Puskas Arena");
        Team savedTeam = teamRepository.save(team);

        assertNotNull(savedTeam);
    }

    @Test
    public void findTeamByFullNameTest() {
        String name = "Hungary";
        Team foundTeam = teamRepository.findByFullName("Hungary");

        assertEquals(name, foundTeam.getFullName());
    }

    @Test
    public void findTeamByFullNameDoesntExistTest() {
        Team foundTeam = teamRepository.findByFullName("Hungarian");

        assertNull(foundTeam);
    }

    @Test
    public void updateTeamTest() {
        String newFullName = "Hungary national football team";
        Team team = new Team("11001", "Hungary", "HUN", Date.valueOf("1901-01-01"), 72200000, "EUR", "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Hungarian_Football_Federation_logo.svg/200px-Hungarian_Football_Federation_logo.svg.png", "Puskas Arena");
        team.setFullName(newFullName);
        teamRepository.save(team);
        Team updatedTeam = teamRepository.findByFullName(team.getFullName());

        assertEquals(updatedTeam.getFullName(), newFullName);
    }

    @Test
    public void getTeamsTest() {
        List<Team> teams = teamRepository.findAll();
        for (Team team : teams) {
            System.out.println(team);
        }

        assertTrue(teams.size() > 0);
    }

    @Test
    public void getTeamByIdTest() {
        Team team = new Team("11001", "Hungary", "HUN", Date.valueOf("1901-01-01"), 72200000, "EUR", "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Hungarian_Football_Federation_logo.svg/200px-Hungarian_Football_Federation_logo.svg.png", "Puskas Arena");
        Team foundTeam = teamRepository.findById(team.getId()).get();
        System.out.println(foundTeam);

        assertEquals(team.getId(), foundTeam.getId());
    }

    @Test
    public void deleteTeamTest() {
        boolean doesTeamExistBeforeDeletion = teamRepository.findById("11001").isPresent();
        teamRepository.deleteById("11001");
        boolean doesTeamExistAfterDeletion = teamRepository.findById("11001").isPresent();

        assertTrue(doesTeamExistBeforeDeletion);
        assertFalse(doesTeamExistAfterDeletion);
    }

}
