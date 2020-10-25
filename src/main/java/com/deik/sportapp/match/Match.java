package com.deik.sportapp.match;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

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
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }
}
