package com.deik.sportapp.season;

import com.deik.sportapp.competition.Competition;
import com.deik.sportapp.match.Match;
import com.deik.sportapp.team.Team;

import javax.persistence.*;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "season", schema = "competitions")
public class Season {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "competitionId", referencedColumnName = "id")
    private Competition competitionId;

    @Column(name = "started")
    private Date started;

    @Column(name = "finished")
    private Date finished;

    @OneToMany(mappedBy = "seasonId", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Match> matches;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "in_season",
            joinColumns = @JoinColumn(name = "seasonId"),
            inverseJoinColumns = @JoinColumn(name = "teamId"))
    private Set<Team> teams = new HashSet<>();

    public Season() {

    }

    public Season(String id, Competition competitionId, Date started, Date finished) {
        this.id = id;
        this.competitionId = competitionId;
        this.started = started;
        this.finished = finished;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Competition getCompetitionId() {
        return competitionId;
    }

    public void setCompetitionId(Competition competitionId) {
        this.competitionId = competitionId;
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

    public Set<Match> getMatches() {
        return matches;
    }

    public void setMatch(Set<Match> matches) {
        this.matches = matches;
    }

    public Set<Team> getTeams() {
        return teams;
    }

    public void setTeams(Set<Team> teams) {
        this.teams = teams;
    }

}