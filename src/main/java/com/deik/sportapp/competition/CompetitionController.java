package com.deik.sportapp.competition;

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
public class CompetitionController {

    @Autowired
    private CompetitionRepository competitionRepository;

    @GetMapping("/competitions")
    public List<Competition> getAllCompetitions() {
        return competitionRepository.findAll();
    }

    @PostMapping("/competitions")
    public Competition createCompetition(@RequestBody Competition competition) {
        return competitionRepository.save(competition);
    }

    @GetMapping("/competitions/{id}")
    public ResponseEntity<Competition> getCompetitionById(@PathVariable String id) {
        Competition competition = competitionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Competition doesn't exist with ID: " + id));
        return ResponseEntity.ok(competition);
    }

    @PutMapping("/competitions/{id}")
    public ResponseEntity<Competition> updateCompetition(@PathVariable String id, @RequestBody Competition competitionDetails) {
        Competition competition = competitionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Competition doesn't exist with ID: " + id));

        competition.setRegion(competitionDetails.getRegion());
        competition.setSportType(competitionDetails.getSportType());
        competition.setName(competitionDetails.getName());
        competition.setLogoLink(competitionDetails.getLogoLink());

        Competition updatedCompetition = competitionRepository.save(competition);
        return ResponseEntity.ok(updatedCompetition);
    }

    @DeleteMapping("/competitions/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCompetition(@PathVariable String id) {
        Competition competition = competitionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Competition doesn't exist with ID: " + id));
        competitionRepository.delete(competition);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
