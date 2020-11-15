package com.deik.sportapp.match.stats.basketball;

import com.deik.sportapp.match.Match;

import javax.persistence.*;

@Entity
@Table(name = "basketball_matchstats", schema = "competitions")
public class BasketballStats {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "hFreeThrows")
    private int hFreeThrows;

    @Column(name = "aFreeThrows")
    private int aFreeThrows;

    @Column(name = "hTwoPointers")
    private int hTwoPointers;

    @Column(name = "aTwoPointers")
    private int aTwoPointers;

    @Column(name = "hThreePointers")
    private int hThreePointers;

    @Column(name = "aThreePointers")
    private int aThreePointers;

    @Column(name = "hFieldGoals")
    private int hFieldGoals;

    @Column(name = "aFieldGoals")
    private int aFieldGoals;

    @Column(name = "hRebounds")
    private int hRebounds;

    @Column(name = "aRebounds")
    private int aRebounds;

    @Column(name = "hTurnovers")
    private int hTurnovers;

    @Column(name = "aTurnovers")
    private int aTurnovers;

    @Column(name = "hSteals")
    private int hSteals;

    @Column(name = "aSteals")
    private int aSteals;

    @Column(name = "hBlocks")
    private int hBlocks;

    @Column(name = "aBlocks")
    private int aBlocks;

    @Column(name = "hFouls")
    private int hFouls;

    @Column(name = "aFouls")
    private int aFouls;

    @Column(name = "hTimeouts")
    private int hTimeouts;

    @Column(name = "aTimeouts")
    private int aTimeouts;

    @MapsId
    @OneToOne(mappedBy = "basketballStats")
    @JoinColumn(name = "id")
    private Match match;

    public BasketballStats() {
    }

    public BasketballStats(String id, int hFreeThrows, int aFreeThrows, int hTwoPointers, int aTwoPointers, int hThreePointers, int aThreePointers, int hFieldGoals, int aFieldGoals, int hRebounds, int aRebounds, int hTurnovers, int aTurnovers, int hSteals, int aSteals, int hBlocks, int aBlocks, int hFouls, int aFouls, int hTimeouts, int aTimeouts) {
        this.id = id;
        this.hFreeThrows = hFreeThrows;
        this.aFreeThrows = aFreeThrows;
        this.hTwoPointers = hTwoPointers;
        this.aTwoPointers = aTwoPointers;
        this.hThreePointers = hThreePointers;
        this.aThreePointers = aThreePointers;
        this.hFieldGoals = hFieldGoals;
        this.aFieldGoals = aFieldGoals;
        this.hRebounds = hRebounds;
        this.aRebounds = aRebounds;
        this.hTurnovers = hTurnovers;
        this.aTurnovers = aTurnovers;
        this.hSteals = hSteals;
        this.aSteals = aSteals;
        this.hBlocks = hBlocks;
        this.aBlocks = aBlocks;
        this.hFouls = hFouls;
        this.aFouls = aFouls;
        this.hTimeouts = hTimeouts;
        this.aTimeouts = aTimeouts;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int gethFreeThrows() {
        return hFreeThrows;
    }

    public void sethFreeThrows(int hFreeThrows) {
        this.hFreeThrows = hFreeThrows;
    }

    public int getaFreeThrows() {
        return aFreeThrows;
    }

    public void setaFreeThrows(int aFreeThrows) {
        this.aFreeThrows = aFreeThrows;
    }

    public int gethTwoPointers() {
        return hTwoPointers;
    }

    public void sethTwoPointers(int hTwoPointers) {
        this.hTwoPointers = hTwoPointers;
    }

    public int getaTwoPointers() {
        return aTwoPointers;
    }

    public void setaTwoPointers(int aTwoPointers) {
        this.aTwoPointers = aTwoPointers;
    }

    public int gethThreePointers() {
        return hThreePointers;
    }

    public void sethThreePointers(int hThreePointers) {
        this.hThreePointers = hThreePointers;
    }

    public int getaThreePointers() {
        return aThreePointers;
    }

    public void setaThreePointers(int aThreePointers) {
        this.aThreePointers = aThreePointers;
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

    public int gethRebounds() {
        return hRebounds;
    }

    public void sethRebounds(int hRebounds) {
        this.hRebounds = hRebounds;
    }

    public int getaRebounds() {
        return aRebounds;
    }

    public void setaRebounds(int aRebounds) {
        this.aRebounds = aRebounds;
    }

    public int gethTurnovers() {
        return hTurnovers;
    }

    public void sethTurnovers(int hTurnovers) {
        this.hTurnovers = hTurnovers;
    }

    public int getaTurnovers() {
        return aTurnovers;
    }

    public void setaTurnovers(int aTurnovers) {
        this.aTurnovers = aTurnovers;
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

    public int gethBlocks() {
        return hBlocks;
    }

    public void sethBlocks(int hBlocks) {
        this.hBlocks = hBlocks;
    }

    public int getaBlocks() {
        return aBlocks;
    }

    public void setaBlocks(int aBlocks) {
        this.aBlocks = aBlocks;
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
