package com.deik.sportapp.match.stats.amfootball;

import com.deik.sportapp.match.Match;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity
@Table(name = "am_football_matchstats", schema = "competitions")
public class AmFootballStats {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "hTouchdowns")
    private int hTouchdowns;

    @Column(name = "aTouchdowns")
    private int aTouchdowns;

    @Column(name = "hFieldGoals")
    private int hFieldGoals;

    @Column(name = "aFieldGoals")
    private int aFieldGoals;

    @Column(name = "hExtraPoint")
    private int hExtraPoint;

    @Column(name = "aExtraPoint")
    private int aExtraPoint;

    @Column(name = "hTwoPoint")
    private int hTwoPoint;

    @Column(name = "aTwoPoint")
    private int aTwoPoint;

    @Column(name = "hTotalYards")
    private int hTotalYards;

    @Column(name = "aTotalYards")
    private int aTotalYards;

    @Column(name = "hPassingYards")
    private int hPassingYards;

    @Column(name = "aPassingYards")
    private int aPassingYards;

    @Column(name = "hRushingYards")
    private int hRushingYards;

    @Column(name = "aRushingYards")
    private int aRushingYards;

    @Column(name = "hAvgYrdsPerPlay")
    private BigDecimal hAvgYrdsPerPlay;

    @Column(name = "aAvgYrdsPerPlay")
    private BigDecimal aAvgYrdsPerPlay;

    @Column(name = "hFumbles")
    private int hFumbles;

    @Column(name = "aFumbles")
    private int aFumbles;

    @Column(name = "hInterceptions")
    private int hInterceptions;

    @Column(name = "aInterceptions")
    private int aInterceptions;

    @Column(name = "hPunts")
    private int hPunts;

    @Column(name = "aPunts")
    private int aPunts;

    @Column(name = "hTimeOfPossession")
    private Timestamp hTimeOfPossession;

    @Column(name = "aTimeOfPossession")
    private Timestamp aTimeOfPossession;

    @Column(name = "hPenalties")
    private int hPenalties;

    @Column(name = "aPenalties")
    private int aPenalties;

    @Column(name = "hYardsPenalized")
    private int hYardsPenalized;

    @Column(name = "aYardsPenalized")
    private int aYardsPenalized;

    @MapsId
    @OneToOne(mappedBy = "amFootballStats")
    @JoinColumn(name = "id")
    private Match match;

    public AmFootballStats() {
    }

    public AmFootballStats(String id, int hTouchdowns, int aTouchdowns, int hFieldGoals, int aFieldGoals, int hExtraPoint, int aExtraPoint, int hTwoPoint, int aTwoPoint, int hTotalYards, int aTotalYards, int hPassingYards, int aPassingYards, int hRushingYards, int aRushingYards, BigDecimal hAvgYrdsPerPlay, BigDecimal aAvgYrdsPerPlay, int hFumbles, int aFumbles, int hInterceptions, int aInterceptions, int hPunts, int aPunts, Timestamp hTimeOfPossession, Timestamp aTimeOfPossession, int hPenalties, int aPenalties, int hYardsPenalized, int aYardsPenalized) {
        this.id = id;
        this.hTouchdowns = hTouchdowns;
        this.aTouchdowns = aTouchdowns;
        this.hFieldGoals = hFieldGoals;
        this.aFieldGoals = aFieldGoals;
        this.hExtraPoint = hExtraPoint;
        this.aExtraPoint = aExtraPoint;
        this.hTwoPoint = hTwoPoint;
        this.aTwoPoint = aTwoPoint;
        this.hTotalYards = hTotalYards;
        this.aTotalYards = aTotalYards;
        this.hPassingYards = hPassingYards;
        this.aPassingYards = aPassingYards;
        this.hRushingYards = hRushingYards;
        this.aRushingYards = aRushingYards;
        this.hAvgYrdsPerPlay = hAvgYrdsPerPlay;
        this.aAvgYrdsPerPlay = aAvgYrdsPerPlay;
        this.hFumbles = hFumbles;
        this.aFumbles = aFumbles;
        this.hInterceptions = hInterceptions;
        this.aInterceptions = aInterceptions;
        this.hPunts = hPunts;
        this.aPunts = aPunts;
        this.hTimeOfPossession = hTimeOfPossession;
        this.aTimeOfPossession = aTimeOfPossession;
        this.hPenalties = hPenalties;
        this.aPenalties = aPenalties;
        this.hYardsPenalized = hYardsPenalized;
        this.aYardsPenalized = aYardsPenalized;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int gethTouchdowns() {
        return hTouchdowns;
    }

    public void sethTouchdowns(int hTouchdowns) {
        this.hTouchdowns = hTouchdowns;
    }

    public int getaTouchdowns() {
        return aTouchdowns;
    }

    public void setaTouchdowns(int aTouchdowns) {
        this.aTouchdowns = aTouchdowns;
    }

    public int gethFieldGoals() {
        return hFieldGoals;
    }

    public void sethFieldGoals(int hFieldGoals) {
        this.hFieldGoals = hFieldGoals;
    }

    public int getaFieldGoals() {
        return aFieldGoals;
    }

    public void setaFieldGoals(int aFieldGoals) {
        this.aFieldGoals = aFieldGoals;
    }

    public int gethExtraPoint() {
        return hExtraPoint;
    }

    public void sethExtraPoint(int hExtraPoint) {
        this.hExtraPoint = hExtraPoint;
    }

    public int getaExtraPoint() {
        return aExtraPoint;
    }

    public void setaExtraPoint(int aExtraPoint) {
        this.aExtraPoint = aExtraPoint;
    }

    public int gethTwoPoint() {
        return hTwoPoint;
    }

    public void sethTwoPoint(int hTwoPoint) {
        this.hTwoPoint = hTwoPoint;
    }

    public int getaTwoPoint() {
        return aTwoPoint;
    }

    public void setaTwoPoint(int aTwoPoint) {
        this.aTwoPoint = aTwoPoint;
    }

    public int gethTotalYards() {
        return hTotalYards;
    }

    public void sethTotalYards(int hTotalYards) {
        this.hTotalYards = hTotalYards;
    }

    public int getaTotalYards() {
        return aTotalYards;
    }

    public void setaTotalYards(int aTotalYards) {
        this.aTotalYards = aTotalYards;
    }

    public int gethPassingYards() {
        return hPassingYards;
    }

    public void sethPassingYards(int hPassingYards) {
        this.hPassingYards = hPassingYards;
    }

    public int getaPassingYards() {
        return aPassingYards;
    }

    public void setaPassingYards(int aPassingYards) {
        this.aPassingYards = aPassingYards;
    }

    public int gethRushingYards() {
        return hRushingYards;
    }

    public void sethRushingYards(int hRushingYards) {
        this.hRushingYards = hRushingYards;
    }

    public int getaRushingYards() {
        return aRushingYards;
    }

    public void setaRushingYards(int aRushingYards) {
        this.aRushingYards = aRushingYards;
    }

    public BigDecimal gethAvgYrdsPerPlay() {
        return hAvgYrdsPerPlay;
    }

    public void sethAvgYrdsPerPlay(BigDecimal hAvgYrdsPerPlay) {
        this.hAvgYrdsPerPlay = hAvgYrdsPerPlay;
    }

    public BigDecimal getaAvgYrdsPerPlay() {
        return aAvgYrdsPerPlay;
    }

    public void setaAvgYrdsPerPlay(BigDecimal aAvgYrdsPerPlay) {
        this.aAvgYrdsPerPlay = aAvgYrdsPerPlay;
    }

    public int gethFumbles() {
        return hFumbles;
    }

    public void sethFumbles(int hFumbles) {
        this.hFumbles = hFumbles;
    }

    public int getaFumbles() {
        return aFumbles;
    }

    public void setaFumbles(int aFumbles) {
        this.aFumbles = aFumbles;
    }

    public int gethInterceptions() {
        return hInterceptions;
    }

    public void sethInterceptions(int hInterceptions) {
        this.hInterceptions = hInterceptions;
    }

    public int getaInterceptions() {
        return aInterceptions;
    }

    public void setaInterceptions(int aInterceptions) {
        this.aInterceptions = aInterceptions;
    }

    public int gethPunts() {
        return hPunts;
    }

    public void sethPunts(int hPunts) {
        this.hPunts = hPunts;
    }

    public int getaPunts() {
        return aPunts;
    }

    public void setaPunts(int aPunts) {
        this.aPunts = aPunts;
    }

    public Timestamp gethTimeOfPossession() {
        return hTimeOfPossession;
    }

    public void sethTimeOfPossession(Timestamp hTimeOfPossession) {
        this.hTimeOfPossession = hTimeOfPossession;
    }

    public Timestamp getaTimeOfPossession() {
        return aTimeOfPossession;
    }

    public void setaTimeOfPossession(Timestamp aTimeOfPossession) {
        this.aTimeOfPossession = aTimeOfPossession;
    }

    public int gethPenalties() {
        return hPenalties;
    }

    public void sethPenalties(int hPenalties) {
        this.hPenalties = hPenalties;
    }

    public int getaPenalties() {
        return aPenalties;
    }

    public void setaPenalties(int aPenalties) {
        this.aPenalties = aPenalties;
    }

    public int gethYardsPenalized() {
        return hYardsPenalized;
    }

    public void sethYardsPenalized(int hYardsPenalized) {
        this.hYardsPenalized = hYardsPenalized;
    }

    public int getaYardsPenalized() {
        return aYardsPenalized;
    }

    public void setaYardsPenalized(int aYardsPenalized) {
        this.aYardsPenalized = aYardsPenalized;
    }

    public Match getMatch() {
        return match;
    }

    public void setMatch(Match match) {
        this.match = match;
    }

}
