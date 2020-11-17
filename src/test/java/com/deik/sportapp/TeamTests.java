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

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Import(SecondaryDatasourceConfiguration.class)
public class TeamTests {

    @Autowired
    private TeamRepository teamRepository;

    @Test
    public void testCreateTeam() {
        Team team = new Team("11001", "Hungary", "HUN", Date.valueOf("1901-01-01"), 72200000, "EUR", "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Hungarian_Football_Federation_logo.svg/200px-Hungarian_Football_Federation_logo.svg.png", "Puskas Arena");
        teamRepository.save(team);
    }

}
