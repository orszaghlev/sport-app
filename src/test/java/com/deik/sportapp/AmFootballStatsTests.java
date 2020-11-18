package com.deik.sportapp;

import com.deik.sportapp.config.SecondaryDatasourceConfiguration;
import com.deik.sportapp.match.stats.amfootball.AmFootballStats;
import com.deik.sportapp.match.stats.amfootball.AmFootballStatsRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;

import java.math.BigDecimal;
import java.sql.Time;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Import(SecondaryDatasourceConfiguration.class)
public class AmFootballStatsTests {

    @Autowired
    AmFootballStatsRepository amFootballStatsRepository;

    @Test
    public void createAmFootballStatsTest() {
        AmFootballStats amFootballStats = new AmFootballStats("42002", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, BigDecimal.valueOf(15.11), BigDecimal.valueOf(16.22), 17, 18, 19, 20, 21, 22, Time.valueOf("05:05:05"), Time.valueOf("06:06:06"), 23, 24, 25, 26);
        AmFootballStats savedAmFootballStats = amFootballStatsRepository.save(amFootballStats);

        assertNotNull(savedAmFootballStats);
    }

    @Test
    public void getAmFootballStatsTest() {
        List<AmFootballStats> amFootballStats = amFootballStatsRepository.findAll();
        for (AmFootballStats amFootballStat : amFootballStats) {
            System.out.println(amFootballStat);
        }

        assertTrue(amFootballStats.size() > 0);
    }

    @Test
    public void getAmFootballStatsByIdTest() {
        AmFootballStats amFootballStats = new AmFootballStats("42002", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, BigDecimal.valueOf(15.11), BigDecimal.valueOf(16.22), 17, 18, 19, 20, 21, 22, Time.valueOf("05:05:05"), Time.valueOf("06:06:06"), 23, 24, 25, 26);
        AmFootballStats foundAmFootballStats = amFootballStatsRepository.findById(amFootballStats.getId()).get();
        System.out.println(foundAmFootballStats);

        assertEquals(amFootballStats.getId(), foundAmFootballStats.getId());
    }

}
