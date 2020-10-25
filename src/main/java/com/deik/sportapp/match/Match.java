package com.deik.sportapp.match;

import javax.persistence.*;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "match", schema = "competitions")
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "season_id")
    private String season_id;

    @Column(name = "home_team")
    private String home_team;

    @Column(name = "away_team")
    private String away_team;

    @Column(name = "home_score")
    private int home_score;

    @Column(name = "away_score")
    private int away_score;

    @Column(name = "place")
    private String place;

    @Column(name = "date")
    private Date date;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "team",
            joinColumns = @JoinColumn(name = "home_team"),
                          @JoinColumn(name = "away_team"))
    private Set<>  = new HashSet<>();

    public Match() {
    }

    public Match(String id, String season_id, String home_team, String away_team, int home_score, int away_score, String place, Date date) {
        this.id = id;
        this.season_id = season_id;
        this.home_team = home_team;
        this.away_team = away_team;
        this.home_score = home_score;
        this.away_score = away_score;
        this.place = place;
        this.date = date;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSeasonId() {
        return season_id;
    }

    public void setSeasonId(String season_id) {
        this.season_id = season_id;
    }

    public String getHomeTeam() {
        return home_team;
    }

    public void setHomeTeam(String home_team) {
        this.home_team = home_team;
    }

    public String getAwayTeam() {
        return away_team;
    }

    public void setAwayTeam(String away_team) {
        this.away_team = away_team;
    }

    public int getHomeScore() {
        return home_score;
    }

    public void setHomeScore(int home_score) {
        this.home_score = home_score;
    }

    public int getAwayScore() {
        return away_score;
    }

    public void setAwayScore(int away_score) {
        this.away_score = away_score;
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
