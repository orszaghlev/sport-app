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
    private FootballStatsRepository footballStatsRepository;

    @Test
    public void createFootballStatsTest() {
        FootballStats footballStats = new FootballStats("41001", 11, 9, 5, 4, 8, 4, 3, 2, BigDecimal.valueOf(46), BigDecimal.valueOf(54), BigDecimal.valueOf(82), BigDecimal.valueOf(79), 412, 485, 338, 385, 0, 2, 0, 0, 12, 17);
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
        FootballStats footballStats = new FootballStats("41001", 11, 9, 5, 4, 8, 4, 3, 2, BigDecimal.valueOf(46), BigDecimal.valueOf(54), BigDecimal.valueOf(82), BigDecimal.valueOf(79), 412, 485, 338, 385, 0, 2, 0, 0, 12, 17);
        FootballStats foundFootballStats = footballStatsRepository.findById(footballStats.getId()).get();
        System.out.println(foundFootballStats);

        assertEquals(footballStats.getId(), foundFootballStats.getId());
    }

}
