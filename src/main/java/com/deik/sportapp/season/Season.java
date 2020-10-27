package com.deik.sportapp.season;

import com.deik.sportapp.competition.Competition;
import com.deik.sportapp.match.Match;
import com.deik.sportapp.team.Team;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Proxy;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Proxy(lazy = false)
@Table(name = "season", schema = "competitions")
public class Season {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id", referencedColumnName = "id")
    private Team team_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "competition_id", referencedColumnName = "id")
    private Competition competition_id;

    @Column(name = "started")
    private Date started;

    @Column(name = "finished")
    private Date finished;

    @OneToMany(mappedBy = "season_id", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Match> matches;

    public Season() {

    }

    public Season(String id, Team team_id, Competition competition_id, Date started, Date finished) {
        this.id = id;
        this.team_id = team_id;
        this.competition_id = competition_id;
        this.started = started;
        this.finished = finished;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Team getTeamId() {
        return team_id;
    }

    public void setTeamId(Team team_id) {
        this.team_id = team_id;
    }

    public Competition getCompetitionId() {
        return competition_id;
    }

    public void setCompetitionId(Competition competition_id) {
        this.competition_id = competition_id;
    }

    public Date getStarted() {
        return started;
    }

    public void setStarted(Date started) {
        this.started = started;
    }

    public Date getFinished() {
        return finished;
    }

    public void setFinished(Date finished) {
        this.finished = finished;
    }

    public List<Match> getMatches() {
        return matches;
    }

    public void setMatch(List<Match> matches) {
        this.matches = matches;
    }

}