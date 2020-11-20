package com.deik.sportapp.event.types;

import com.deik.sportapp.event.Event;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Table(name = "event_types", schema = "competitions")
public class EventTypes {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "type")
    private String type;

    @MapsId
    @OneToOne(mappedBy = "eventTypes")
    @JoinColumn(name = "id")
    private Event event;

    public EventTypes() {
    }

    public EventTypes(String id, String type) {
        this.id = id;
        this.type = type;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    @Override
    public String toString() {
        return "EventTypes{" +
                "id='" + id + '\'' +
                ", type='" + type + '\'' +
                '}';
    }

}
