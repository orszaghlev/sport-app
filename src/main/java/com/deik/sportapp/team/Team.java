package com.deik.sportapp.team;

import com.deik.sportapp.match.Match;
import com.deik.sportapp.season.Season;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private String full_name;

    @Column(name = "short_name")
    private String short_name;

    @Column(name = "founding_date")
    private Date founding_date;

    @Column(name = "team_value")
    private int team_value;

    @Column(name = "value_currency")
    private String value_currency;

    @Column(name = "image_link")
    private String image_link;

    @Column(name = "home_place")
    private String home_place;

    @OneToMany(mappedBy = "home_team", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Match> home_matches;

    @OneToMany(mappedBy = "away_team", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Match> away_matches;

    @OneToMany(mappedBy = "team_id", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Season> seasons;

    public Team() {

    }

    public Team(String id, String full_name, String short_name, Date founding_date, int team_value, String value_currency, String image_link, String home_place) {
        this.id = id;
        this.full_name = full_name;
        this.short_name = short_name;
        this.founding_date = founding_date;
        this.team_value = team_value;
        this.value_currency = value_currency;
        this.image_link = image_link;
        this.home_place = home_place;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFullName() {
        return full_name;
    }

    public void setFullName(String full_name) {
        this.full_name = full_name;
    }

    public String getShortName() {
        return short_name;
    }

    public void setShortName(String short_name) {
        this.short_name = short_name;
    }

    public Date getFoundingDate() {
        return founding_date;
    }

    public void setFoundingDate(Date founding_date) {
        this.founding_date = founding_date;
    }

    public int getTeamValue() {
        return team_value;
    }

    public void setTeamValue(int team_value) {
        this.team_value = team_value;
    }

    public String getValueCurrency() {
        return value_currency;
    }

    public void setValueCurrency(String value_currency) {
        this.value_currency = value_currency;
    }

    public String getImageLink() {
        return image_link;
    }

    public void setImageLink(String image_link) {
        this.image_link = image_link;
    }

    public String getHomePlace() {
        return home_place;
    }

    public void setHomePlace(String home_place) {
        this.home_place = home_place;
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
