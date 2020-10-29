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
    @JoinColumn(name = "teamId", referencedColumnName = "id")
    private Team teamId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "competitionId", referencedColumnName = "id")
    private Competition competitionId;

    @Column(name = "started")
    private Date started;

    @Column(name = "finished")
    private Date finished;

    @OneToMany(mappedBy = "seasonId", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Match> matches;

    public Season() {

    }

    public Season(String id, Team teamId, Competition competitionId, Date started, Date finished) {
        this.id = id;
        this.teamId = teamId;
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

    public Team getTeamId() {
        return teamId;
    }

    public void setTeamId(Team teamId) {
        this.teamId = teamId;
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

    public List<Match> getMatches() {
        return matches;
    }

    public void setMatch(List<Match> matches) {
        this.matches = matches;
    }

}