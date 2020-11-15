package com.deik.sportapp.match.stats.amfootball;

import com.deik.sportapp.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/matches/amfootball/{id}")
    public ResponseEntity<AmFootballStats> getAmFootballStatsById(@PathVariable String id) {
        AmFootballStats amFootballStats = amFootballStatsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("American football match doesn't exist with ID: " + id));
        return ResponseEntity.ok(amFootballStats);
    }

}
