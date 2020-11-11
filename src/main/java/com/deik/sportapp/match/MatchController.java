package com.deik.sportapp.match;

import com.deik.sportapp.exception.ResourceNotFoundException;
import com.deik.sportapp.season.SeasonRepository;
import com.deik.sportapp.team.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth/comp")
public class MatchController {

    @Autowired
    private MatchRepository matchRepository;

    @Autowired
    private SeasonRepository seasonRepository;

    @Autowired
    private TeamRepository teamRepository;

    @GetMapping("/matches")
    public List<Match> getAllMatches() {
        return matchRepository.findAll();
    }

    @GetMapping("/seasons/{seasonId}/matches")
    public Set<Match> getAllMatchesBySeasonId(@PathVariable(value = "seasonId") String seasonId) {
        return matchRepository.findBySeasonId(seasonId);
    }

    @GetMapping("/teams/{homeTeam}/matches")
    public Set<Match> getAllMatchesByHomeTeam(@PathVariable(value = "homeTeam") String homeTeam) {
        return matchRepository.findByHomeTeam(homeTeam);
    }

    @GetMapping("/teams/{awayTeam}/matches")
    public Set<Match> getAllMatchesByAwayTeam(@PathVariable(value = "awayTeam") String awayTeam) {
        return matchRepository.findByAwayTeam(awayTeam);
    }

    @PostMapping("/matches")
    public Match createMatch(@RequestBody Match match) {
        return matchRepository.save(match);
    }

    @GetMapping("/matches/{id}")
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
