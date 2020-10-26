package com.deik.sportapp.season;

import com.deik.sportapp.competition.Competition;
import com.deik.sportapp.match.Match;
import com.deik.sportapp.team.Team;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "season", schema = "competitions")
public class Season {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id", referencedColumnName = "id")
    private Team team;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "competition_id", referencedColumnName = "id")
    private Competition competition;

    @Column(name = "started")
    private Date started;

    @Column(name = "finished")
    private Date finished;

    @OneToMany(mappedBy = "season")
    private List<Match> matches;

    public Season() {

    }

    public Season(String id, Team team, Competition competition, Date started, Date finished) {
        this.id = id;
        this.team = team;
        this.competition = competition;
        this.started = started;
        this.finished = finished;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public Competition getCompetition() {
        return competition;
    }

    public void setCompetition(Competition competition) {
        this.competition = competition;
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