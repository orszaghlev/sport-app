package com.deik.sportapp.team;

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
public class TeamController {

    @Autowired
    private TeamRepository teamRepository;

    @GetMapping("/teams")
    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    @PostMapping("/teams")
    public Team createTeam(@RequestBody Team team) {
        return teamRepository.save(team);
    }

    @GetMapping("/teams/{id}")
    public ResponseEntity<Team> getTeamById(@PathVariable String id) {
        Team team = teamRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Team doesn't exist with ID: " + id));
        return ResponseEntity.ok(team);
    }

    @PutMapping("/teams/{id}")
    public ResponseEntity<Team> updateTeam(@PathVariable String id, @RequestBody Team teamDetails) {
        Team team = teamRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Team doesn't exist with ID: " + id));

        team.setFullName(teamDetails.getFullName());
        team.setShortName(teamDetails.getShortName());
        team.setFoundingDate(teamDetails.getFoundingDate());
        team.setTeamValue(teamDetails.getTeamValue());
        team.setValueCurrency(teamDetails.getValueCurrency());
        team.setImageLink(teamDetails.getImageLink());
        team.setHomePlace(teamDetails.getHomePlace());

        Team updatedTeam = teamRepository.save(team);
        return ResponseEntity.ok(updatedTeam);
    }

    @DeleteMapping("/teams/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteTeam(@PathVariable String id) {
        Team team = teamRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Team doesn't exist with ID: " + id));
        teamRepository.delete(team);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
