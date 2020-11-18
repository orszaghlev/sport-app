package com.deik.sportapp;

import com.deik.sportapp.config.SecondaryDatasourceConfiguration;
import com.deik.sportapp.match.stats.football.FootballStats;
import com.deik.sportapp.match.stats.football.FootballStatsRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;

import java.math.BigDecimal;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Import(SecondaryDatasourceConfiguration.class)
public class FootballStatsTests {

    @Autowired
    FootballStatsRepository footballStatsRepository;

    @Test
    public void createFootballStatsTest() {
        FootballStats footballStats = new FootballStats("41001", 1, 2, 3, 4, 5, 6, 7, 8, BigDecimal.valueOf(9.11), BigDecimal.valueOf(10.22), BigDecimal.valueOf(11.33), BigDecimal.valueOf(12.44), 13, 14, 15, 16, 17, 18, 19, 20, 21, 22);
        FootballStats savedFootballStats = footballStatsRepository.save(footballStats);

        assertNotNull(savedFootballStats);
    }

    @Test
    public void getFootballStatsTest() {
        List<FootballStats> footballStats = footballStatsRepository.findAll();
        for (FootballStats footballStat : footballStats) {
            System.out.println(footballStat);
        }

        assertTrue(footballStats.size() > 0);
    }

    @Test
    public void getFootballStatsByIdTest() {
        FootballStats footballStats = new FootballStats("41001", 1, 2, 3, 4, 5, 6, 7, 8, BigDecimal.valueOf(9.11), BigDecimal.valueOf(10.22), BigDecimal.valueOf(11.33), BigDecimal.valueOf(12.44), 13, 14, 15, 16, 17, 18, 19, 20, 21, 22);
        FootballStats foundFootballStats = footballStatsRepository.findById(footballStats.getId()).get();
        System.out.println(foundFootballStats);

        assertEquals(footballStats.getId(), foundFootballStats.getId());
    }

}
