package com.deik.sportapp.match.stats;

import com.deik.sportapp.match.Match;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "football_matchstats", schema = "competitions")
public class FootballStats {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "hAttempts")
    private int hAttempts;

    @Column(name = "aAttempts")
    private int aAttempts;

    @Column(name = "hOnTarget")
    private int hOnTarget;

    @Column(name = "aOnTarget")
    private int aOnTarget;

    @Column(name = "hCorners")
    private int hCorners;

    @Column(name = "aCorners")
    private int aCorners;

    @Column(name = "hOffsides")
    private int hOffsides;

    @Column(name = "aOffsides")
    private int aOffsides;

    @Column(name = "hPossession")
    private BigDecimal hPossession;

    @Column(name = "aPossession")
    private BigDecimal aPossession;

    @Column(name = "hPassingAccuracy")
    private BigDecimal hPassingAccuracy;

    @Column(name = "aPassingAccuracy")
    private BigDecimal aPassingAccuracy;

    @Column(name = "hPasses")
    private int hPasses;

    @Column(name = "aPasses")
    private int aPasses;

    @Column(name = "hPassesCompleted")
    private int hPassesCompleted;

    @Column(name = "aPassesCompleted")
    private int aPassesCompleted;

    @Column(name = "hYellow")
    private int hYellow;

    @Column(name = "aYellow")
    private int aYellow;

    @Column(name = "hRed")
    private int hRed;

    @Column(name = "aRed")
    private int aRed;

    @Column(name = "hFouls")
    private int hFouls;

    @Column(name = "aFouls")
    private int aFouls;

    @MapsId
    @OneToOne(mappedBy = "footballStats")
    @JoinColumn(name = "id")
    private Match match;

    public FootballStats() {
    }

    public FootballStats(String id, int hAttempts, int aAttempts, int hOnTarget, int aOnTarget, int hCorners, int aCorners, int hOffsides, int aOffsides, BigDecimal hPossession, BigDecimal aPossession, BigDecimal hPassingAccuracy, BigDecimal aPassingAccuracy, int hPasses, int aPasses, int hPassesCompleted, int aPassesCompleted, int hYellow, int aYellow, int hRed, int aRed, int hFouls, int aFouls) {
        this.id = id;
        this.hAttempts = hAttempts;
        this.aAttempts = aAttempts;
        this.hOnTarget = hOnTarget;
        this.aOnTarget = aOnTarget;
        this.hCorners = hCorners;
        this.aCorners = aCorners;
        this.hOffsides = hOffsides;
        this.aOffsides = aOffsides;
        this.hPossession = hPossession;
        this.aPossession = aPossession;
        this.hPassingAccuracy = hPassingAccuracy;
        this.aPassingAccuracy = aPassingAccuracy;
        this.hPasses = hPasses;
        this.aPasses = aPasses;
        this.hPassesCompleted = hPassesCompleted;
        this.aPassesCompleted = aPassesCompleted;
        this.hYellow = hYellow;
        this.aYellow = aYellow;
        this.hRed = hRed;
        this.aRed = aRed;
        this.hFouls = hFouls;
        this.aFouls = aFouls;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int gethAttempts() {
        return hAttempts;
    }

    public void sethAttempts(int hAttempts) {
        this.hAttempts = hAttempts;
    }

    public int getaAttempts() {
        return aAttempts;
    }

    public void setaAttempts(int aAttempts) {
        this.aAttempts = aAttempts;
    }

    public int gethOnTarget() {
        return hOnTarget;
    }

    public void sethOnTarget(int hOnTarget) {
        this.hOnTarget = hOnTarget;
    }

    public int getaOnTarget() {
        return aOnTarget;
    }

    public void setaOnTarget(int aOnTarget) {
        this.aOnTarget = aOnTarget;
    }

    public int gethCorners() {
        return hCorners;
    }

    public void sethCorners(int hCorners) {
        this.hCorners = hCorners;
    }

    public int getaCorners() {
        return aCorners;
    }

    public void setaCorners(int aCorners) {
        this.aCorners = aCorners;
    }

    public int gethOffsides() {
        return hOffsides;
    }

    public void sethOffsides(int hOffsides) {
        this.hOffsides = hOffsides;
    }

    public int getaOffsides() {
        return aOffsides;
    }

    public void setaOffsides(int aOffsides) {
        this.aOffsides = aOffsides;
    }

    public BigDecimal gethPossession() {
        return hPossession;
    }

    public void sethPossession(BigDecimal hPossession) {
        this.hPossession = hPossession;
    }

    public BigDecimal getaPossession() {
        return aPossession;
    }

    public void setaPossession(BigDecimal aPossession) {
        this.aPossession = aPossession;
    }

    public BigDecimal gethPassingAccuracy() {
        return hPassingAccuracy;
    }

    public void sethPassingAccuracy(BigDecimal hPassingAccuracy) {
        this.hPassingAccuracy = hPassingAccuracy;
    }

    public BigDecimal getaPassingAccuracy() {
        return aPassingAccuracy;
    }

    public void setaPassingAccuracy(BigDecimal aPassingAccuracy) {
        this.aPassingAccuracy = aPassingAccuracy;
    }

    public int gethPasses() {
        return hPasses;
    }

    public void sethPasses(int hPasses) {
        this.hPasses = hPasses;
    }

    public int getaPasses() {
        return aPasses;
    }

    public void setaPasses(int aPasses) {
        this.aPasses = aPasses;
    }

    public int gethPassesCompleted() {
        return hPassesCompleted;
    }

    public void sethPassesCompleted(int hPassesCompleted) {
        this.hPassesCompleted = hPassesCompleted;
    }

    public int getaPassesCompleted() {
        return aPassesCompleted;
    }

    public void setaPassesCompleted(int aPassesCompleted) {
        this.aPassesCompleted = aPassesCompleted;
    }

    public int gethYellow() {
        return hYellow;
    }

    public void sethYellow(int hYellow) {
        this.hYellow = hYellow;
    }

    public int getaYellow() {
        return aYellow;
    }

    public void setaYellow(int aYellow) {
        this.aYellow = aYellow;
    }

    public int gethRed() {
        return hRed;
    }

    public void sethRed(int hRed) {
        this.hRed = hRed;
    }

    public int getaRed() {
        return aRed;
    }

    public void setaRed(int aRed) {
        this.aRed = aRed;
    }

    public int gethFouls() {
        return hFouls;
    }

    public void sethFouls(int hFouls) {
        this.hFouls = hFouls;
    }

    public int getaFouls() {
        return aFouls;
    }

    public void setaFouls(int aFouls) {
        this.aFouls = aFouls;
    }

    public Match getMatch() {
        return match;
    }

    public void setMatch(Match match) {
        this.match = match;
    }

}
