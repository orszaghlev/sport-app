package com.deik.sportapp.team;

import com.deik.sportapp.match.Match;
import com.deik.sportapp.season.Season;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "team", schema = "competitions")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "fullName")
    private String fullName;

    @Column(name = "shortName")
    private String shortName;

    @Column(name = "foundingDate")
    private Date foundingDate;

    @Column(name = "teamValue")
    private int teamValue;

    @Column(name = "valueCurrency")
    private String valueCurrency;

    @Column(name = "imageLink")
    private String imageLink;

    @Column(name = "homePlace")
    private String homePlace;

    @OneToMany(mappedBy = "homeTeam", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Match> homeMatches;

    @OneToMany(mappedBy = "awayTeam", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Match> awayMatches;

    @OneToMany(mappedBy = "teamId", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Season> seasons;

    public Team() {

    }

    public Team(String id, String fullName, String shortName, Date foundingDate, int teamValue, String valueCurrency, String imageLink, String homePlace) {
        this.id = id;
        this.fullName = fullName;
        this.shortName = shortName;
        this.foundingDate = foundingDate;
        this.teamValue = teamValue;
        this.valueCurrency = valueCurrency;
        this.imageLink = imageLink;
        this.homePlace = homePlace;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getShortName() {
        return shortName;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    public Date getFoundingDate() {
        return foundingDate;
    }

    public void setFoundingDate(Date foundingDate) {
        this.foundingDate = foundingDate;
    }

    public int getTeamValue() {
        return teamValue;
    }

    public void setTeamValue(int teamValue) {
        this.teamValue = teamValue;
    }

    public String getValueCurrency() {
        return valueCurrency;
    }

    public void setValueCurrency(String valueCurrency) {
        this.valueCurrency = valueCurrency;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    public String getHomePlace() {
        return homePlace;
    }

    public void setHomePlace(String homePlace) {
        this.homePlace = homePlace;
    }

    public List<Match> getHomeMatches() {
        return homeMatches;
    }

    public void setHomeMatches(List<Match> homeMatches) {
        this.homeMatches = homeMatches;
    }

    public List<Match> getAwayMatches() {
        return awayMatches;
    }

    public void setAwayMatches(List<Match> awayMatches) {
        this.awayMatches = awayMatches;
    }

    public List<Season> getSeasons() {
        return seasons;
    }

    public void setSeasons(List<Season> seasons) {
        this.seasons = seasons;
    }

}
