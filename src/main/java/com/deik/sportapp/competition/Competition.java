package com.deik.sportapp.competition;

import com.deik.sportapp.season.Season;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Proxy;

import javax.persistence.*;
import java.util.List;

@Entity
@Proxy(lazy = false)
@Table(name = "competition", schema = "competitions")
public class Competition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "region")
    private String region;

    @Column(name = "sport_type")
    private String sport_type;

    @Column(name = "name")
    private String name;

    @Column(name = "logo_link")
    private String logo_link;

    @OneToMany(mappedBy = "competition_id", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Season> seasons;

    public Competition() {

    }

    public Competition(String id, String region, String sport_type, String name, String logo_link) {
        this.id = id;
        this.region = region;
        this.sport_type = sport_type;
        this.name = name;
        this.logo_link = logo_link;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getSportType() {
        return sport_type;
    }

    public void setSportType(String sport_type) {
        this.sport_type = sport_type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLogoLink() {
        return logo_link;
    }

    public void setLogoLink(String logo_link) {
        this.logo_link = logo_link;
    }

    public List<Season> getSeasons() {
        return seasons;
    }

    public void setSeasons(List<Season> seasons) {
        this.seasons = seasons;
    }

}
