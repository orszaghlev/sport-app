package com.deik.sportapp.match.stats.football;

import com.deik.sportapp.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/matches/football/{id}")
    public ResponseEntity<FootballStats> getFootballStatsById(@PathVariable String id) {
        FootballStats footballStats = footballStatsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Football match doesn't exist with ID: " + id));
        return ResponseEntity.ok(footballStats);
    }

}
