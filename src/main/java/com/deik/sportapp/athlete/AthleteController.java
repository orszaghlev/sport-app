package com.deik.sportapp.athlete;

import com.deik.sportapp.competition.Competition;
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
public class AthleteController {

    @Autowired
    private AthleteRepository athleteRepository;

    @GetMapping("/athletes")
    public List<Athlete> getAllAthletes() {
        return athleteRepository.findAll();
    }

    @PostMapping("/athletes")
    public Athlete createAthlete(@RequestBody Athlete athlete) {
        return athleteRepository.save(athlete);
    }

    @GetMapping("/athletes/{id}")
    public ResponseEntity<Athlete> getAthleteById(@PathVariable String id) {
        Athlete athlete = athleteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Athlete doesn't exist with ID: " + id));
        return ResponseEntity.ok(athlete);
    }

    @PutMapping("/athletes/{id}")
    public ResponseEntity<Athlete> updateAthlete(@PathVariable String id, @RequestBody Athlete athleteDetails) {
        Athlete athlete = athleteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Athlete doesn't exist with ID: " + id));

        athlete.setName(athleteDetails.getName());
        athlete.setDateOfBirth(athleteDetails.getDateOfBirth());
        athlete.setValue(athleteDetails.getValue());
        athlete.setValueCurrency(athleteDetails.getValueCurrency());
        athlete.setPosition(athleteDetails.getPosition());
        athlete.setNationality(athleteDetails.getNationality());

        Athlete updatedAthlete = athleteRepository.save(athlete);
        return ResponseEntity.ok(updatedAthlete);
    }

    @DeleteMapping("/athletes/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteAthlete(@PathVariable String id) {
        Athlete athlete = athleteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Athlete doesn't exist with ID: " + id));
        athleteRepository.delete(athlete);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
