package com.deik.sportapp.season;

import com.deik.sportapp.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth/comp")
public class SeasonController {

    @Autowired
    private SeasonRepository seasonRepository;

    @GetMapping("/seasons")
    public List<Season> getAllSeasons() {
        return seasonRepository.findAll();
    }

    @PostMapping("/seasons")
    public Season createSeason(@RequestBody Season season) {
        return seasonRepository.save(season);
    }

    @GetMapping("/seasons/{id}")
    public ResponseEntity<Season> getSeasonById(@PathVariable String id) {
        Season season = seasonRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Season doesn't exist with ID: " + id));
        return ResponseEntity.ok(season);
    }

    @PutMapping("/seasons/{id}")
    public ResponseEntity<Season> updateSeason(@PathVariable String id, @RequestBody Season seasonDetails) {
        Season season = seasonRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Season doesn't exist with ID: " + id));

        season.setCompetitionId(seasonDetails.getCompetitionId());
        season.setStarted(seasonDetails.getStarted());
        season.setFinished(seasonDetails.getFinished());

        Season updatedSeason = seasonRepository.save(season);
        return ResponseEntity.ok(updatedSeason);
    }

    @DeleteMapping("/seasons/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteSeason(@PathVariable String id) {
        Season season = seasonRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Season doesn't exist with ID: " + id));
        seasonRepository.delete(season);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
