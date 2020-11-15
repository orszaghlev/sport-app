package com.deik.sportapp.match.stats.hockey;

import com.deik.sportapp.match.Match;

import javax.persistence.*;

@Entity
@Table(name = "hockey_matchstats", schema = "competitions")
public class HockeyStats {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "hShots")
    private int hShots;

    @Column(name = "aShots")
    private int aShots;

    @Column(name = "hGoalsInPowerplay")
    private int hGoalsInPowerplay;

    @Column(name = "aGoalsInPowerplay")
    private int aGoalsInPowerplay;

    @Column(name = "hShorthandedGoals")
    private int hShorthandedGoals;

    @Column(name = "aShorthandedGoals")
    private int aShorthandedGoals;

    @Column(name = "hFaceoffsWon")
    private int hFaceoffsWon;

    @Column(name = "aFaceoffsWon")
    private int aFaceoffsWon;

    @Column(name = "hBlocked")
    private int hBlocked;

    @Column(name = "aBlocked")
    private int aBlocked;

    @Column(name = "hTakeaways")
    private int hTakeaways;

    @Column(name = "aTakeaways")
    private int aTakeaways;

    @Column(name = "hGiveaways")
    private int hGiveaways;

    @Column(name = "aGiveaways")
    private int aGiveaways;

    @Column(name = "hPenaltyMinutes")
    private int hPenaltyMinutes;

    @Column(name = "aPenaltyMinutes")
    private int aPenaltyMinutes;

    @MapsId
    @OneToOne(mappedBy = "hockeyStats")
    @JoinColumn(name = "id")
    private Match match;

    public HockeyStats() {
    }

    public HockeyStats(String id, int hShots, int aShots, int hGoalsInPowerplay, int aGoalsInPowerplay, int hShorthandedGoals, int aShorthandedGoals, int hFaceoffsWon, int aFaceoffsWon, int hBlocked, int aBlocked, int hTakeaways, int aTakeaways, int hGiveaways, int aGiveaways, int hPenaltyMinutes, int aPenaltyMinutes) {
        this.id = id;
        this.hShots = hShots;
        this.aShots = aShots;
        this.hGoalsInPowerplay = hGoalsInPowerplay;
        this.aGoalsInPowerplay = aGoalsInPowerplay;
        this.hShorthandedGoals = hShorthandedGoals;
        this.aShorthandedGoals = aShorthandedGoals;
        this.hFaceoffsWon = hFaceoffsWon;
        this.aFaceoffsWon = aFaceoffsWon;
        this.hBlocked = hBlocked;
        this.aBlocked = aBlocked;
        this.hTakeaways = hTakeaways;
        this.aTakeaways = aTakeaways;
        this.hGiveaways = hGiveaways;
        this.aGiveaways = aGiveaways;
        this.hPenaltyMinutes = hPenaltyMinutes;
        this.aPenaltyMinutes = aPenaltyMinutes;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int gethShots() {
        return hShots;
    }

    public void sethShots(int hShots) {
        this.hShots = hShots;
    }

    public int getaShots() {
        return aShots;
    }

    public void setaShots(int aShots) {
        this.aShots = aShots;
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

    public int gethFaceoffsWon() {
        return hFaceoffsWon;
    }

    public void sethFaceoffsWon(int hFaceoffsWon) {
        this.hFaceoffsWon = hFaceoffsWon;
    }

    public int getaFaceoffsWon() {
        return aFaceoffsWon;
    }

    public void setaFaceoffsWon(int aFaceoffsWon) {
        this.aFaceoffsWon = aFaceoffsWon;
    }

    public int gethBlocked() {
        return hBlocked;
    }

    public void sethBlocked(int hBlocked) {
        this.hBlocked = hBlocked;
    }

    public int getaBlocked() {
        return aBlocked;
    }

    public void setaBlocked(int aBlocked) {
        this.aBlocked = aBlocked;
    }

    public int gethTakeaways() {
        return hTakeaways;
    }

    public void sethTakeaways(int hTakeaways) {
        this.hTakeaways = hTakeaways;
    }

    public int getaTakeaways() {
        return aTakeaways;
    }

    public void setaTakeaways(int aTakeaways) {
        this.aTakeaways = aTakeaways;
    }

    public int gethGiveaways() {
        return hGiveaways;
    }

    public void sethGiveaways(int hGiveaways) {
        this.hGiveaways = hGiveaways;
    }

    public int getaGiveaways() {
        return aGiveaways;
    }

    public void setaGiveaways(int aGiveaways) {
        this.aGiveaways = aGiveaways;
    }

    public int gethPenaltyMinutes() {
        return hPenaltyMinutes;
    }

    public void sethPenaltyMinutes(int hPenaltyMinutes) {
        this.hPenaltyMinutes = hPenaltyMinutes;
    }

    public int getaPenaltyMinutes() {
        return aPenaltyMinutes;
    }

    public void setaPenaltyMinutes(int aPenaltyMinutes) {
        this.aPenaltyMinutes = aPenaltyMinutes;
    }

    public Match getMatch() {
        return match;
    }

    public void setMatch(Match match) {
        this.match = match;
    }

}
