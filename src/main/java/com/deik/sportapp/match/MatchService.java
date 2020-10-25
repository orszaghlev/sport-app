package com.deik.sportapp.match;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MatchService {

    @Autowired
    private MatchRepository matchRepository;

    public List<Match> getAllMatches() {
        List<Match> matches = new ArrayList<>();
        matchRepository.findAll().forEach(matches::add);
        return matches;
    }

    public Match getMatch(String id) {
        return matchRepository.findById(id).orElse(null);
    }

    public void addMatch(Match match) {
        matchRepository.save(match);
    }

    public void updateMatch(String id, Match match) {
        matchRepository.save(match);
    }

    public void deleteMatch(String id) {
        matchRepository.deleteById(id);
    }

}