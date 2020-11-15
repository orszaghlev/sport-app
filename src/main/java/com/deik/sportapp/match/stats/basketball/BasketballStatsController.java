package com.deik.sportapp.match.stats.basketball;

import com.deik.sportapp.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth/comp")
public class BasketballStatsController {

    @Autowired
    private BasketballStatsRepository basketballStatsRepository;

    @GetMapping("/matches/basketball")
    public List<BasketballStats> getAllBasketballStats() {
        return basketballStatsRepository.findAll();
    }

    @GetMapping("/matches/basketball/{id}")
    public ResponseEntity<BasketballStats> getBasketballStatsById(@PathVariable String id) {
        BasketballStats basketballStats = basketballStatsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Basketball match doesn't exist with ID: " + id));
        return ResponseEntity.ok(basketballStats);
    }

}
