package com.deik.sportapp.event.types;

import com.deik.sportapp.event.Event;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "event_types", schema = "competitions")
public class EventTypes {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "type")
    private String type;

    @OneToMany(mappedBy = "eventType", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Event> events;

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

    public Set<Event> getEvent() {
        return events;
    }

    public void setEvent(Set<Event> events) {
        this.events = events;
    }

    @Override
    public String toString() {
        return "EventTypes{" +
                "id='" + id + '\'' +
                ", type='" + type + '\'' +
                '}';
    }

}
