package com.deik.sportapp.match;

import com.deik.sportapp.season.Season;
import com.deik.sportapp.team.Team;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "match", schema = "competitions")
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "seasonId", referencedColumnName = "id")
    private Season seasonId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "homeTeam", referencedColumnName = "id")
    private Team homeTeam;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "awayTeam", referencedColumnName = "id")
    private Team awayTeam;

    @Column(name = "homeScore")
    private int homeScore;

    @Column(name = "awayScore")
    private int awayScore;

    @Column(name = "place")
    private String place;

    @Column(name = "date")
    private Date date;

    public Match() {
    }

    @JsonCreator
    public Match(@JsonProperty("id") String id, @JsonProperty("seasonId") Season seasonId, @JsonProperty("homeTeam") Team homeTeam, @JsonProperty("awayTeam") Team awayTeam, @JsonProperty("homeScore") int homeScore, @JsonProperty("awayScore") int awayScore, @JsonProperty("place") String place, @JsonProperty("date") Date date) {
        this.id = id;
        this.seasonId = seasonId;
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homeScore = homeScore;
        this.awayScore = awayScore;
        this.place = place;
        this.date = date;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Season getSeasonId() {
        return seasonId;
    }

    public void setSeasonId(Season seasonId) {
        this.seasonId = seasonId;
    }

    public Team getHomeTeam() {
        return homeTeam;
    }

    public void setHomeTeam(Team homeTeam) {
        this.homeTeam = homeTeam;
    }

    public Team getAwayTeam() {
        return awayTeam;
    }

    public void setAwayTeam(Team awayTeam) {
        this.awayTeam = awayTeam;
    }

    public int getHomeScore() {
        return homeScore;
    }

    public void setHomeScore(int homeScore) {
        this.homeScore = homeScore;
    }

    public int getAwayScore() {
        return awayScore;
    }

    public void setAwayScore(int awayScore) {
        this.awayScore = awayScore;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

}
