package com.deik.sportapp.competition;

import com.deik.sportapp.season.Season;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "competition", schema = "competitions")
public class Competition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "region")
    private String region;

    @Column(name = "sportType")
    private String sportType;

    @Column(name = "name")
    private String name;

    @Column(name = "logoLink")
    private String logoLink;

    @OneToMany(mappedBy = "competitionId", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Season> seasons;

    public Competition() {

    }

    @JsonCreator
    public Competition(@JsonProperty("id") String id, @JsonProperty("region") String region, @JsonProperty("sportType") String sportType, @JsonProperty("name") String name, @JsonProperty("logoLink") String logoLink) {
        this.id = id;
        this.region = region;
        this.sportType = sportType;
        this.name = name;
        this.logoLink = logoLink;
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
        return sportType;
    }

    public void setSportType(String sportType) {
        this.sportType = sportType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLogoLink() {
        return logoLink;
    }

    public void setLogoLink(String logoLink) {
        this.logoLink = logoLink;
    }

    public List<Season> getSeasons() {
        return seasons;
    }

    public void setSeasons(List<Season> seasons) {
        this.seasons = seasons;
    }

}
