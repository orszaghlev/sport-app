package com.deik.sportapp.team;

import com.deik.sportapp.match.Match;
import com.deik.sportapp.season.Season;
import org.hibernate.annotations.Proxy;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Proxy(lazy = false)
@Table(name = "team", schema = "competitions")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "short_name")
    private String shortName;

    @Column(name = "founding_date")
    private Date foundingDate;

    @Column(name = "team_value")
    private int teamValue;

    @Column(name = "value_currency")
    private String valueCurrency;

    @Column(name = "image_link")
    private String imageLink;

    @Column(name = "home_place")
    private String homePlace;

    @OneToMany(mappedBy = "home_team", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Match> home_matches;

    @OneToMany(mappedBy = "away_team", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Match> away_matches;

    @OneToMany(mappedBy = "team_id", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
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
        return home_matches;
    }

    public void setHomeMatches(List<Match> home_matches) {
        this.home_matches = home_matches;
    }

    public List<Match> getAwayMatches() {
        return away_matches;
    }

    public void setAwayMatches(List<Match> away_matches) {
        this.away_matches = away_matches;
    }

    public List<Season> getSeasons() {
        return seasons;
    }

    public void setSeasons(List<Season> seasons) {
        this.seasons = seasons;
    }

}
