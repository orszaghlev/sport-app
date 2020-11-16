package com.deik.sportapp.match.stats.hockey;

import com.deik.sportapp.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/matches/hockey/{id}")
    public ResponseEntity<HockeyStats> getHockeyStatsById(@PathVariable String id) {
        HockeyStats hockeyStats = hockeyStatsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Hockey match doesn't exist with ID: " + id));
        return ResponseEntity.ok(hockeyStats);
    }

}
