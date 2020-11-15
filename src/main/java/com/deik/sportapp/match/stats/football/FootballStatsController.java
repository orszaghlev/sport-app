package com.deik.sportapp.match.stats.football;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth/comp")
public class FootballStatsController {

    @Autowired
    private FootballStatsRepository footballStatsRepository;

    @GetMapping("/matches/football")
    public List<FootballStats> getAllFootballStats() {
        return footballStatsRepository.findAll();
    }

}
