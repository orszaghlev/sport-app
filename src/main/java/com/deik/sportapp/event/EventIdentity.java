package com.deik.sportapp.event;

import com.deik.sportapp.athlete.Athlete;
import com.deik.sportapp.match.Match;
import com.deik.sportapp.team.Team;
import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class EventIdentity implements Serializable {

    private static final long SerialVersionUID = 1L;

    @ManyToOne(cascade = CascadeType.ALL, optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "athleteId", nullable = false)
    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
    @JsonIdentityReference(alwaysAsId=true)
    @JsonProperty("athleteId")
    private Athlete athleteId;

    @Column(name = "athleteName")
    private String athleteName;

    @ManyToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "teamId", nullable = false)
    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
    @JsonIdentityReference(alwaysAsId=true)
    @JsonProperty("teamId")
    private Team teamId;

    @Column(name = "teamShortName")
    private String teamShortName;

    @ManyToOne(cascade = CascadeType.ALL, optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "matchId", nullable = false)
    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
    @JsonIdentityReference(alwaysAsId=true)
    @JsonProperty("matchId")
    private Match matchId;

    @Column(name = "eventTypeName")
    private String eventTypeName;

    @Column(name = "time")
    private String time;

    public EventIdentity() {
    }

    public EventIdentity(Athlete athleteId, String athleteName, Team teamId, String teamShortName, Match matchId, String eventTypeName, String time) {
        this.athleteId = athleteId;
        this.athleteName = athleteName;
        this.teamId = teamId;
        this.teamShortName = teamShortName;
        this.matchId = matchId;
        this.eventTypeName = eventTypeName;
        this.time = time;
    }

    public Athlete getAthleteId() {
        return athleteId;
    }

    public void setAthleteId(Athlete athleteId) { this.athleteId = athleteId; }

    public String getAthleteName() {
        return athleteName;
    }

    public void setAthleteName(String athleteName) { this.athleteName = athleteName; }

    public Team getTeamId() {
        return teamId;
    }

    public void setTeamId(Team teamId) {
        this.teamId = teamId;
    }

    public String getTeamShortName() {
        return teamShortName;
    }

    public void setTeamShortName(String teamShortName) { this.teamShortName = teamShortName; }

    public Match getMatchId() {
        return matchId;
    }

    public void setMatchId(Match matchId) {
        this.matchId = matchId;
    }

    public String getEventTypeName() {
        return eventTypeName;
    }

    public void setEventTypeName(String eventTypeName) { this.eventTypeName = eventTypeName; }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof EventIdentity)) return false;
        EventIdentity that = (EventIdentity) o;
        return getAthleteId().equals(that.getAthleteId()) &&
                getAthleteName().equals(that.getAthleteName()) &&
                getTeamId().equals(that.getTeamId()) &&
                getTeamShortName().equals(that.getTeamShortName()) &&
                getMatchId().equals(that.getMatchId()) &&
                getEventTypeName().equals(that.getEventTypeName()) &&
                getTime().equals(that.getTime());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getAthleteId(), getAthleteName(), getTeamId(), getTeamShortName(), getMatchId(), getEventTypeName(), getTime());
    }

}
