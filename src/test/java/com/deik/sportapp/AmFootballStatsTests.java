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
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Import(SecondaryDatasourceConfiguration.class)
public class AmFootballStatsTests {

    @Autowired
    private AmFootballStatsRepository amFootballStatsRepository;

    @Test
    public void createAmFootballStatsTest() {
        AmFootballStats amFootballStats = new AmFootballStats("42001", 2, 3, 1, 2, 0, 0, 0, 0, 206, 466, 122, 221, 84, 245, BigDecimal.valueOf(4.1), BigDecimal.valueOf(6.4), 0, 2, 1, 0, 4, 2, "22:15", "37:45", 4, 8, 39, 68);
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
        AmFootballStats amFootballStats = new AmFootballStats("42001", 2, 3, 1, 2, 0, 0, 0, 0, 206, 466, 122, 221, 84, 245, BigDecimal.valueOf(4.1), BigDecimal.valueOf(6.4), 0, 2, 1, 0, 4, 2, "22:15", "37:45", 4, 8, 39, 68);
        AmFootballStats foundAmFootballStats = amFootballStatsRepository.findById(amFootballStats.getId()).get();
        System.out.println(foundAmFootballStats);

        assertEquals(amFootballStats.getId(), foundAmFootballStats.getId());
    }

}
