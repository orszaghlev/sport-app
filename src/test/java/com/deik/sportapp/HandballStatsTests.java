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
        HandballStats handballStats = new HandballStats("44018", BigDecimal.valueOf(1.11), BigDecimal.valueOf(2.22), 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26);
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
        HandballStats handballStats = new HandballStats("44018", BigDecimal.valueOf(1.11), BigDecimal.valueOf(2.22), 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26);
        HandballStats foundHandballStats = handballStatsRepository.findById(handballStats.getId()).get();
        System.out.println(foundHandballStats);

        assertEquals(handballStats.getId(), foundHandballStats.getId());
    }

}
