package com.deik.sportapp.match.stats.hockey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth/comp")
public class HockeyStatsController {

    @Autowired
    private HockeyStatsRepository hockeyStatsRepository;

    @GetMapping("/matches/hockey")
    public List<HockeyStats> getAllHockeyStats() {
        return hockeyStatsRepository.findAll();
    }

}
