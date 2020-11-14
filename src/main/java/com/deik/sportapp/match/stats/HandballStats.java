package com.deik.sportapp.match.stats;

import com.deik.sportapp.match.Match;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "handball_matchstats", schema = "competitions")
public class HandballStats {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "hShootingEfficiency")
    private BigDecimal hShootingEfficiency;

    @Column(name = "aShootingEfficiency")
    private BigDecimal aShootingEfficiency;

    @Column(name = "hWingGoals")
    private int hWingGoals;

    @Column(name = "aWingGoals")
    private int aWingGoals;

    @Column(name = "hFastbreakGoals")
    private int hFastbreakGoals;

    @Column(name = "aFastbreakGoals")
    private int aFastbreakGoals;

    @Column(name = "hSevenMeters")
    private int hSevenMeters;

    @Column(name = "aSevenMeters")
    private int aSevenMeters;

    @Column(name = "hSaves")
    private int hSaves;

    @Column(name = "aSaves")
    private int aSaves;

    @Column(name = "hTwoMinPenalty")
    private int hTwoMinPenalty;

    @Column(name = "aTwoMinPenalty")
    private int aTwoMinPenalty;

    @Column(name = "hYellowCards")
    private int hYellowCards;

    @Column(name = "aYellowCards")
    private int aYellowCards;

    @Column(name = "hGoalStreak")
    private int hGoalStreak;

    @Column(name = "aGoalStreak")
    private int aGoalStreak;

    @Column(name = "hGoalsInPowerplay")
    private int hGoalsInPowerplay;

    @Column(name = "aGoalsInPowerplay")
    private int aGoalsInPowerplay;

    @Column(name = "hShorthandedGoals")
    private int hShorthandedGoals;

    @Column(name = "aShorthandedGoals")
    private int aShorthandedGoals;

    @Column(name = "hSteals")
    private int hSteals;

    @Column(name = "aSteals")
    private int aSteals;

    @Column(name = "hTechnicalFaults")
    private int hTechnicalFaults;

    @Column(name = "aTechnicalFaults")
    private int aTechnicalFaults;

    @Column(name = "hTimeouts")
    private int hTimeouts;

    @Column(name = "aTimeouts")
    private int aTimeouts;

    @MapsId
    @OneToOne(mappedBy = "handballStats")
    @JoinColumn(name = "id")
    private Match match;

    public HandballStats() {
    }

    public HandballStats(String id, BigDecimal hShootingEfficiency, BigDecimal aShootingEfficiency, int hWingGoals, int aWingGoals, int hFastbreakGoals, int aFastbreakGoals, int hSevenMeters, int aSevenMeters, int hSaves, int aSaves, int hTwoMinPenalty, int aTwoMinPenalty, int hYellowCards, int aYellowCards, int hGoalStreak, int aGoalStreak, int hGoalsInPowerplay, int aGoalsInPowerplay, int hShorthandedGoals, int aShorthandedGoals, int hSteals, int aSteals, int hTechnicalFaults, int aTechnicalFaults, int hTimeouts, int aTimeouts) {
        this.id = id;
        this.hShootingEfficiency = hShootingEfficiency;
        this.aShootingEfficiency = aShootingEfficiency;
        this.hWingGoals = hWingGoals;
        this.aWingGoals = aWingGoals;
        this.hFastbreakGoals = hFastbreakGoals;
        this.aFastbreakGoals = aFastbreakGoals;
        this.hSevenMeters = hSevenMeters;
        this.aSevenMeters = aSevenMeters;
        this.hSaves = hSaves;
        this.aSaves = aSaves;
        this.hTwoMinPenalty = hTwoMinPenalty;
        this.aTwoMinPenalty = aTwoMinPenalty;
        this.hYellowCards = hYellowCards;
        this.aYellowCards = aYellowCards;
        this.hGoalStreak = hGoalStreak;
        this.aGoalStreak = aGoalStreak;
        this.hGoalsInPowerplay = hGoalsInPowerplay;
        this.aGoalsInPowerplay = aGoalsInPowerplay;
        this.hShorthandedGoals = hShorthandedGoals;
        this.aShorthandedGoals = aShorthandedGoals;
        this.hSteals = hSteals;
        this.aSteals = aSteals;
        this.hTechnicalFaults = hTechnicalFaults;
        this.aTechnicalFaults = aTechnicalFaults;
        this.hTimeouts = hTimeouts;
        this.aTimeouts = aTimeouts;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public BigDecimal gethShootingEfficiency() {
        return hShootingEfficiency;
    }

    public void sethShootingEfficiency(BigDecimal hShootingEfficiency) {
        this.hShootingEfficiency = hShootingEfficiency;
    }

    public BigDecimal getaShootingEfficiency() {
        return aShootingEfficiency;
    }

    public void setaShootingEfficiency(BigDecimal aShootingEfficiency) {
        this.aShootingEfficiency = aShootingEfficiency;
    }

    public int gethWingGoals() {
        return hWingGoals;
    }

    public void sethWingGoals(int hWingGoals) {
        this.hWingGoals = hWingGoals;
    }

    public int getaWingGoals() {
        return aWingGoals;
    }

    public void setaWingGoals(int aWingGoals) {
        this.aWingGoals = aWingGoals;
    }

    public int gethFastbreakGoals() {
        return hFastbreakGoals;
    }

    public void sethFastbreakGoals(int hFastbreakGoals) {
        this.hFastbreakGoals = hFastbreakGoals;
    }

    public int getaFastbreakGoals() {
        return aFastbreakGoals;
    }

    public void setaFastbreakGoals(int aFastbreakGoals) {
        this.aFastbreakGoals = aFastbreakGoals;
    }

    public int gethSevenMeters() {
        return hSevenMeters;
    }

    public void sethSevenMeters(int hSevenMeters) {
        this.hSevenMeters = hSevenMeters;
    }

    public int getaSevenMeters() {
        return aSevenMeters;
    }

    public void setaSevenMeters(int aSevenMeters) {
        this.aSevenMeters = aSevenMeters;
    }

    public int gethSaves() {
        return hSaves;
    }

    public void sethSaves(int hSaves) {
        this.hSaves = hSaves;
    }

    public int getaSaves() {
        return aSaves;
    }

    public void setaSaves(int aSaves) {
        this.aSaves = aSaves;
    }

    public int gethTwoMinPenalty() {
        return hTwoMinPenalty;
    }

    public void sethTwoMinPenalty(int hTwoMinPenalty) {
        this.hTwoMinPenalty = hTwoMinPenalty;
    }

    public int getaTwoMinPenalty() {
        return aTwoMinPenalty;
    }

    public void setaTwoMinPenalty(int aTwoMinPenalty) {
        this.aTwoMinPenalty = aTwoMinPenalty;
    }

    public int gethYellowCards() {
        return hYellowCards;
    }

    public void sethYellowCards(int hYellowCards) {
        this.hYellowCards = hYellowCards;
    }

    public int getaYellowCards() {
        return aYellowCards;
    }

    public void setaYellowCards(int aYellowCards) {
        this.aYellowCards = aYellowCards;
    }

    public int gethGoalStreak() {
        return hGoalStreak;
    }

    public void sethGoalStreak(int hGoalStreak) {
        this.hGoalStreak = hGoalStreak;
    }

    public int getaGoalStreak() {
        return aGoalStreak;
    }

    public void setaGoalStreak(int aGoalStreak) {
        this.aGoalStreak = aGoalStreak;
    }

    public int gethGoalsInPowerplay() {
        return hGoalsInPowerplay;
    }

    public void sethGoalsInPowerplay(int hGoalsInPowerplay) {
        this.hGoalsInPowerplay = hGoalsInPowerplay;
    }

    public int getaGoalsInPowerplay() {
        return aGoalsInPowerplay;
    }

    public void setaGoalsInPowerplay(int aGoalsInPowerplay) {
        this.aGoalsInPowerplay = aGoalsInPowerplay;
    }

    public int gethShorthandedGoals() {
        return hShorthandedGoals;
    }

    public void sethShorthandedGoals(int hShorthandedGoals) {
        this.hShorthandedGoals = hShorthandedGoals;
    }

    public int getaShorthandedGoals() {
        return aShorthandedGoals;
    }

    public void setaShorthandedGoals(int aShorthandedGoals) {
        this.aShorthandedGoals = aShorthandedGoals;
    }

    public int gethSteals() {
        return hSteals;
    }

    public void sethSteals(int hSteals) {
        this.hSteals = hSteals;
    }

    public int getaSteals() {
        return aSteals;
    }

    public void setaSteals(int aSteals) {
        this.aSteals = aSteals;
    }

    public int gethTechnicalFaults() {
        return hTechnicalFaults;
    }

    public void sethTechnicalFaults(int hTechnicalFaults) {
        this.hTechnicalFaults = hTechnicalFaults;
    }

    public int getaTechnicalFaults() {
        return aTechnicalFaults;
    }

    public void setaTechnicalFaults(int aTechnicalFaults) {
        this.aTechnicalFaults = aTechnicalFaults;
    }

    public int gethTimeouts() {
        return hTimeouts;
    }

    public void sethTimeouts(int hTimeouts) {
        this.hTimeouts = hTimeouts;
    }

    public int getaTimeouts() {
        return aTimeouts;
    }

    public void setaTimeouts(int aTimeouts) {
        this.aTimeouts = aTimeouts;
    }

    public Match getMatch() {
        return match;
    }

    public void setMatch(Match match) {
        this.match = match;
    }

}
