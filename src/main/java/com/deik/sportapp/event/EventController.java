package com.deik.sportapp.event;

import com.deik.sportapp.match.Match;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth/comp")
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    @GetMapping("/events")
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @GetMapping("/events/{matchId}")
    public List<Event> getEventsByMatchId(@PathVariable Match matchId) {
        return eventRepository.findById_MatchId(matchId);
    }

}
