package com.deik.sportapp.match;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class MatchController {

    @Autowired
    private MatchService matchService;

    @RequestMapping(value = "/matches", method = RequestMethod.GET)
    public List<Match> getAllMatches() {
        return matchService.getAllMatches();
    }

    @RequestMapping(value = "/matches/{id}", method = RequestMethod.GET)
    public Match getMatch(@PathVariable String id) {
        return matchService.getMatch(id);
    }

    @RequestMapping(value = "/matches", method = RequestMethod.POST)
    public void addMatch(@RequestBody Match match) {
        matchService.addMatch(match);
    }

    @RequestMapping(value = "/matches/{id}", method = RequestMethod.PUT)
    public void updateMatch(@RequestBody Match match, @PathVariable String id) {
        matchService.updateMatch(id, match);
    }

    @RequestMapping(value = "/matches/{id}", method = RequestMethod.DELETE)
    public void deleteMatch(@PathVariable String id) {
        matchService.deleteMatch(id);
    }

}
