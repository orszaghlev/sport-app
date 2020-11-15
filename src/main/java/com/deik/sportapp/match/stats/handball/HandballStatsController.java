package com.deik.sportapp.match.stats.handball;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
