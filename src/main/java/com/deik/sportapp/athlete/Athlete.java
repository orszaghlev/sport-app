package com.deik.sportapp.athlete;

import com.deik.sportapp.event.Event;

import javax.persistence.*;
import java.sql.Date;
import java.util.Set;

@Entity
@Table(name = "athlete", schema = "competitions")
public class Athlete {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "dateOfBirth")
    private Date dateOfBirth;

    @Column(name = "value")
    private long value;

    @Column(name = "valueCurrency")
    private String valueCurrency;

    @Column(name = "position")
    private String position;

    @Column(name = "nationality")
    private String nationality;

    @OneToMany(mappedBy = "id.athleteId", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Event> events;

    public Athlete() {
    }

    public Athlete(String id, String name, Date dateOfBirth, long value, String valueCurrency, String position, String nationality) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.value = value;
        this.valueCurrency = valueCurrency;
        this.position = position;
        this.nationality = nationality;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public long getValue() {
        return value;
    }

    public void setValue(long value) {
        this.value = value;
    }

    public String getValueCurrency() {
        return valueCurrency;
    }

    public void setValueCurrency(String valueCurrency) {
        this.valueCurrency = valueCurrency;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public Set<Event> getEvents() {
        return events;
    }

    public void setEvents(Set<Event> events) {
        this.events = events;
    }

    @Override
    public String toString() {
        return "Athlete{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", value=" + value +
                ", valueCurrency='" + valueCurrency + '\'' +
                ", position='" + position + '\'' +
                ", nationality='" + nationality + '\'' +
                '}';
    }

}
