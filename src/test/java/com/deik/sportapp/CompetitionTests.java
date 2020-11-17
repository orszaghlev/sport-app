package com.deik.sportapp;

import com.deik.sportapp.competition.Competition;
import com.deik.sportapp.competition.CompetitionRepository;
import com.deik.sportapp.config.SecondaryDatasourceConfiguration;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Import(SecondaryDatasourceConfiguration.class)
public class CompetitionTests {

    @Autowired
    private CompetitionRepository competitionRepository;

    @Test
    public void createCompetitionTest() {
        Competition competition = new Competition("21001", "Europe", "Football", "European Championship Qualification", "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/UEFA_Euro_2016_qualifying.png/220px-UEFA_Euro_2016_qualifying.png");
        competitionRepository.save(competition);
    }

}
