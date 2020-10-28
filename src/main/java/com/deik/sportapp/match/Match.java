package com.deik.sportapp.match;

import com.deik.sportapp.season.Season;
import com.deik.sportapp.team.Team;
import org.hibernate.annotations.Proxy;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Proxy(lazy = false)
@Table(name = "match", schema = "competitions")
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "season_id", referencedColumnName = "id")
    private Season season_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "home_team", referencedColumnName = "id")
    private Team home_team;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "away_team", referencedColumnName = "id")
    private Team away_team;

    @Column(name = "home_score")
    private int homeScore;

    @Column(name = "away_score")
    private int awayScore;

    @Column(name = "place")
    private String place;

    @Column(name = "date")
    private Date date;

    public Match() {
    }

    public Match(String id, Season season_id, Team home_team, Team away_team, int homeScore, int awayScore, String place, Date date) {
        this.id = id;
        this.season_id = season_id;
        this.home_team = home_team;
        this.away_team = away_team;
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
        return season_id;
    }

    public void setSeasonId(Season season_id) {
        this.season_id = season_id;
    }

    public Team getHomeTeam() {
        return home_team;
    }

    public void setHomeTeam(Team home_team) {
        this.home_team = home_team;
    }

    public Team getAwayTeam() {
        return away_team;
    }

    public void setAwayTeam(Team away_team) {
        this.away_team = away_team;
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
