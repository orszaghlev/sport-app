package com.deik.sportapp.season;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "season", schema = "competitions")
public class Season {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "team_id")
    private String team_id;

    @Column(name = "competition_id")
    private String competition_id;

    @Column(name = "started")
    private Date started;

    @Column(name = "finished")
    private Date finished;

    public Season() {

    }

    public Season(String id, String team_id, String competition_id, Date started, Date finished) {
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

    public String getTeamId() {
        return team_id;
    }

    public void setTeamId(String team_id) {
        this.team_id = team_id;
    }

    public String getCompetitionId() {
        return competition_id;
    }

    public void setCompetitionId(String competition_id) {
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

}
