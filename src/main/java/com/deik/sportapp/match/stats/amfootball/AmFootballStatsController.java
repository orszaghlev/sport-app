package com.deik.sportapp.match.stats.amfootball;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth/comp")
public class AmFootballStatsController {

    @Autowired
    private AmFootballStatsRepository amFootballStatsRepository;

    @GetMapping("/matches/amfootball")
    public List<AmFootballStats> getAllAmFootballStats() {
        return amFootballStatsRepository.findAll();
    }

}
