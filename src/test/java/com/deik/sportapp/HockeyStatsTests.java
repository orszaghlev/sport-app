package com.deik.sportapp;

import com.deik.sportapp.config.SecondaryDatasourceConfiguration;
import com.deik.sportapp.match.stats.hockey.HockeyStats;
import com.deik.sportapp.match.stats.hockey.HockeyStatsRepository;
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
public class HockeyStatsTests {

    @Autowired
    private HockeyStatsRepository hockeyStatsRepository;

    @Test
    public void createHockeyStatsTest() {
        HockeyStats hockeyStats = new HockeyStats("45019", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        HockeyStats savedHockeyStats = hockeyStatsRepository.save(hockeyStats);

        assertNotNull(savedHockeyStats);
    }

    @Test
    public void getHockeyStatsTest() {
        List<HockeyStats> hockeyStats = hockeyStatsRepository.findAll();
        for (HockeyStats hockeyStat : hockeyStats) {
            System.out.println(hockeyStat);
        }

        assertTrue(hockeyStats.size() > 0);
    }

    @Test
    public void getHockeyStatsByIdTest() {
        HockeyStats hockeyStats = new HockeyStats("45019", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        HockeyStats foundHockeyStats = hockeyStatsRepository.findById(hockeyStats.getId()).get();
        System.out.println(foundHockeyStats);

        assertEquals(hockeyStats.getId(), foundHockeyStats.getId());
    }

}
