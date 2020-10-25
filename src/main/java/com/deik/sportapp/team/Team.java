package com.deik.sportapp.team;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "team", schema = "competitions")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column("full_name")
    private String full_name;

    @Column("short_name")
    private String short_name;

    @Column("founding_date")
    private Date founding_date;

    @Column("team_value")
    private int team_value;

    @Column("value_currency")
    private String value_currency;

    @Column("image_link")
    private String image_link;

    @Column("home_place")
    private String home_place;

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

}
