package com.deik.sportapp.event.types;

import com.deik.sportapp.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth/comp")
public class EventTypesController {

    @Autowired
    private EventTypesRepository eventTypesRepository;

    @GetMapping("/events/types")
    public List<EventTypes> getAllEventTypes() {
        return eventTypesRepository.findAll();
    }

    @GetMapping("/events/types/{id}")
    public ResponseEntity<EventTypes> getEventTypesById(@PathVariable String id) {
        EventTypes eventTypes = eventTypesRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event type doesn't exist with ID: " + id));
        return ResponseEntity.ok(eventTypes);
    }

}
