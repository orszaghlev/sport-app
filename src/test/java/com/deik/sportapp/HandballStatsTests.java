package com.deik.sportapp;

import com.deik.sportapp.config.SecondaryDatasourceConfiguration;
import com.deik.sportapp.match.stats.handball.HandballStats;
import com.deik.sportapp.match.stats.handball.HandballStatsRepository;
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
public class HandballStatsTests {

    @Autowired
    private HandballStatsRepository handballStatsRepository;

    @Test
    public void createHandballStatsTest() {
        HandballStats handballStats = new HandballStats("44001", BigDecimal.valueOf(65), BigDecimal.valueOf(60), 1, 2, 6, 3, 1, 5, 11, 9, 4, 3, 1, 3, 5, 5, 4, 8, 4, 2, 2, 0, 1, 4, 3, 3);
        HandballStats savedHandballStats = handballStatsRepository.save(handballStats);

        assertNotNull(savedHandballStats);
    }

    @Test
    public void getHandballStatsTest() {
        List<HandballStats> handballStats = handballStatsRepository.findAll();
        for (HandballStats handballStat : handballStats) {
            System.out.println(handballStat);
        }

        assertTrue(handballStats.size() > 0);
    }

    @Test
    public void getHandballStatsByIdTest() {
        HandballStats handballStats = new HandballStats("44001", BigDecimal.valueOf(65), BigDecimal.valueOf(60), 1, 2, 6, 3, 1, 5, 11, 9, 4, 3, 1, 3, 5, 5, 4, 8, 4, 2, 2, 0, 1, 4, 3, 3);
        HandballStats foundHandballStats = handballStatsRepository.findById(handballStats.getId()).get();
        System.out.println(foundHandballStats);

        assertEquals(handballStats.getId(), foundHandballStats.getId());
    }

}
