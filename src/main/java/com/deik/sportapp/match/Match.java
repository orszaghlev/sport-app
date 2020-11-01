package com.deik.sportapp.match;

<<<<<<< HEAD
import com.deik.sportapp.season.Season;
import com.deik.sportapp.team.Team;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "match", schema = "competitions")
=======
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

>>>>>>> master
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
<<<<<<< HEAD
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

    public Match(String id, Season seasonId, Team homeTeam, Team awayTeam, int homeScore, int awayScore, String place, Date date) {
        this.id = id;
        this.seasonId = seasonId;
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homeScore = homeScore;
        this.awayScore = awayScore;
        this.place = place;
        this.date = date;
=======
    private String id;
    private String season;
    private String home_team;
    private String away_team;
    private int home_score;
    private int away_score;
    private String place;

    public Match() {
    }

    public Match(String id, String season, String home_team, String away_team, int home_score, int away_score, String place) {
        this.id = id;
        this.season=season;
        this.home_team=home_team;
        this.away_team=away_team;
        this.home_score=home_score;
        this.away_score=away_score;
        this.place=place;
>>>>>>> master
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

<<<<<<< HEAD
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
=======
    public String getSeason() {
        return season;
    }

    public void setSeason(String season) {
        this.season = season;
    }

    public String getHome_team() {
        return home_team;
    }

    public void setHome_team(String home_team) {
        this.home_team = home_team;
    }

    public String getAway_team() {
        return away_team;
    }

    public void setAway_team(String away_team) {
        this.away_team = away_team;
    }

    public int getHome_score() {
        return home_score;
    }

    public void setHome_score(int home_score) {
        this.home_score = home_score;
    }

    public int getAway_score() {
        return away_score;
    }

    public void setAway_score(int away_score) {
        this.away_score = away_score;
>>>>>>> master
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }
<<<<<<< HEAD

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

=======
>>>>>>> master
}
