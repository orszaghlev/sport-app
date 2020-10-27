package com.deik.sportapp.match;

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
public class MatchController {

    @Autowired
    private MatchRepository matchRepository;

    @GetMapping("/matches")
    public List<Match> getAllMatches() {
        return matchRepository.findAll();
    }

    @PostMapping("/matches/{id}")
    public ResponseEntity<Match> getMatchById(@PathVariable String id) {
        Match match = matchRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Match doesn't exist with ID: " + id));
        return ResponseEntity.ok(match);
    }

    @PutMapping("/matches/{id}")
    public ResponseEntity<Match> updateMatch(@PathVariable String id, @RequestBody Match matchDetails) {
        Match match = matchRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Match doesn't exist with ID: " + id));

        match.setSeasonId(matchDetails.getSeasonId());
        match.setHomeTeam(matchDetails.getHomeTeam());
        match.setAwayTeam(matchDetails.getAwayTeam());
        match.setHomeScore(matchDetails.getHomeScore());
        match.setAwayScore(matchDetails.getAwayScore());
        match.setPlace(matchDetails.getPlace());
        match.setDate(matchDetails.getDate());

        Match updatedMatch = matchRepository.save(match);
        return ResponseEntity.ok(updatedMatch);
    }

    @DeleteMapping("/matches/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteMatch(@PathVariable String id) {
        Match match = matchRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Match doesn't exist with ID: " + id));
        matchRepository.delete(match);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
