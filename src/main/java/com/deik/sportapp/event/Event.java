package com.deik.sportapp.event;

import com.deik.sportapp.athlete.Athlete;
import com.deik.sportapp.event.types.EventTypes;
import com.deik.sportapp.match.Match;
import com.deik.sportapp.team.Team;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Table(name = "event", schema = "competitions")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private String id;

    @ManyToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "athleteId", nullable = false)
    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
    @JsonIdentityReference(alwaysAsId=true)
    @JsonProperty("athleteId")
    private Athlete athleteId;

    @ManyToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "teamId", nullable = false)
    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
    @JsonIdentityReference(alwaysAsId=true)
    @JsonProperty("teamId")
    private Team teamId;

    @ManyToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "matchId", nullable = false)
    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
    @JsonIdentityReference(alwaysAsId=true)
    @JsonProperty("matchId")
    private Match matchId;

    @Column(name = "time")
    private String time;

    @OneToOne(cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private EventTypes eventTypes;

    public Event() {
    }

    public Event(String id, Athlete athleteId, Team teamId, Match matchId, String time) {
        this.id = id;
        this.athleteId = athleteId;
        this.teamId = teamId;
        this.matchId = matchId;
        this.time = time;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Athlete getAthleteId() {
        return athleteId;
    }

    public void setAthleteId(Athlete athleteId) {
        this.athleteId = athleteId;
    }

    public Team getTeamId() {
        return teamId;
    }

    public void setTeamId(Team teamId) {
        this.teamId = teamId;
    }

    public Match getMatchId() {
        return matchId;
    }

    public void setMatchId(Match matchId) {
        this.matchId = matchId;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public EventTypes getEventTypes() {
        return eventTypes;
    }

    public void setEventTypes(EventTypes eventTypes) {
        this.eventTypes = eventTypes;
    }

    @Override
    public String toString() {
        return "Event{" +
                "id='" + id + '\'' +
                ", athleteId=" + athleteId +
                ", teamId=" + teamId +
                ", matchId=" + matchId +
                ", time='" + time + '\'' +
                '}';
    }

}
