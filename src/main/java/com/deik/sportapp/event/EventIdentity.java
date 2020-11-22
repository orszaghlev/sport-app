package com.deik.sportapp.event;

import com.deik.sportapp.athlete.Athlete;
import com.deik.sportapp.match.Match;
import com.deik.sportapp.team.Team;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class EventIdentity implements Serializable {

    private static final long SerialVersionUID = 1L;

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

    public EventIdentity() {
    }

    public EventIdentity(Athlete athleteId, Team teamId, Match matchId, String time) {
        this.athleteId = athleteId;
        this.teamId = teamId;
        this.matchId = matchId;
        this.time = time;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EventIdentity that = (EventIdentity) o;
        return athleteId.equals(that.athleteId) &&
                teamId.equals(that.teamId) &&
                matchId.equals(that.matchId) &&
                time.equals(that.time);
    }

    @Override
    public int hashCode() {
        return Objects.hash(athleteId, teamId, matchId, time);
    }

}
