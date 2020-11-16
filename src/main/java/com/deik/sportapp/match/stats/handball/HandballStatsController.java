package com.deik.sportapp.match.stats.handball;

import com.deik.sportapp.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth/comp")
public class HandballStatsController {

    @Autowired
    private HandballStatsRepository handballStatsRepository;

    @GetMapping("/matches/handball")
    public List<HandballStats> getAllHandballStats() {
        return handballStatsRepository.findAll();
    }

    @GetMapping("/matches/handball/{id}")
    public ResponseEntity<HandballStats> getHandballStatsById(@PathVariable String id) {
        HandballStats handballStats = handballStatsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Handball match doesn't exist with ID: " + id));
        return ResponseEntity.ok(handballStats);
    }

}
