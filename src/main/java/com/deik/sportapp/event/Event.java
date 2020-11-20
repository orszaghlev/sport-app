package com.deik.sportapp.event;

import com.deik.sportapp.event.types.EventTypes;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
@Table(name = "event", schema = "competitions")
public class Event {

    @EmbeddedId
    private EventIdentity id;

    @ManyToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "eventType", nullable = false)
    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
    @JsonIdentityReference(alwaysAsId=true)
    @JsonProperty("eventType")
    private EventTypes eventType;

    public Event() {
    }

    public Event(EventIdentity id, EventTypes eventType) {
        this.id = id;
        this.eventType = eventType;
    }

    public EventIdentity getId() {
        return id;
    }

    public void setId(EventIdentity id) {
        this.id = id;
    }

    public EventTypes getEventType() {
        return eventType;
    }

    public void setEventType(EventTypes eventType) {
        this.eventType = eventType;
    }

    @Override
    public String toString() {
        return "Event{" +
                "id=" + id +
                ", eventType=" + eventType +
                '}';
    }

}
