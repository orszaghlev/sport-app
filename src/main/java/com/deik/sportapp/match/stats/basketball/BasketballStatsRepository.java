package com.deik.sportapp.match.stats.basketball;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Qualifier("datasource2")
@Repository
public interface BasketballStatsRepository extends JpaRepository<BasketballStats, String> {

}
