package com.deik.sportapp;

import com.deik.sportapp.config.SecondaryDatasourceConfiguration;
import com.deik.sportapp.match.stats.basketball.BasketballStats;
import com.deik.sportapp.match.stats.basketball.BasketballStatsRepository;
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
public class BasketballStatsTests {

    @Autowired
    private BasketballStatsRepository basketballStatsRepository;

    @Test
    public void createBasketballStatsTest() {
        BasketballStats basketballStats = new BasketballStats("43017", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
        BasketballStats savedBasketballStats = basketballStatsRepository.save(basketballStats);

        assertNotNull(savedBasketballStats);
    }

    @Test
    public void getBasketballStatsTest() {
        List<BasketballStats> basketballStats = basketballStatsRepository.findAll();
        for (BasketballStats basketballStat : basketballStats) {
            System.out.println(basketballStat);
        }

        assertTrue(basketballStats.size() > 0);
    }

    @Test
    public void getBasketballStatsByIdTest() {
        BasketballStats basketballStats = new BasketballStats("43017", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
        BasketballStats foundBasketballStats = basketballStatsRepository.findById(basketballStats.getId()).get();
        System.out.println(foundBasketballStats);

        assertEquals(basketballStats.getId(), foundBasketballStats.getId());
    }

}
