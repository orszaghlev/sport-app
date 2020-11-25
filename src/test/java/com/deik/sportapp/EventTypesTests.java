package com.deik.sportapp;

import com.deik.sportapp.config.SecondaryDatasourceConfiguration;
import com.deik.sportapp.event.types.EventTypes;
import com.deik.sportapp.event.types.EventTypesRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Import(SecondaryDatasourceConfiguration.class)
public class EventTypesTests {

    @Autowired
    private EventTypesRepository eventTypesRepository;

    @Test
    public void createEventTypesTest() {
        EventTypes eventTypes = new EventTypes("1", "goal");
        EventTypes savedEventTypes = eventTypesRepository.save(eventTypes);

        assertNotNull(savedEventTypes);
    }

    @Test
    public void getEventTypesTest() {
        List<EventTypes> eventTypes = eventTypesRepository.findAll();
        for (EventTypes eventType : eventTypes) {
            System.out.println(eventType);
        }

        assertTrue(eventTypes.size() > 0);
    }

    @Test
    public void getEventTypeByIdTest() {
        EventTypes eventTypes = new EventTypes("1", "goal");
        EventTypes foundEventTypes = eventTypesRepository.findById(eventTypes.getId()).get();
        System.out.println(foundEventTypes);

        assertEquals(eventTypes.getId(), foundEventTypes.getId());
    }

}
