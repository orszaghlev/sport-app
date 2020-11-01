import axios from 'axios';

const MATCH_API_BASE_URL = "http://localhost:8080/api/auth/comp/matches";
const TEAM_API_BASE_URL = "http://localhost:8080/api/auth/comp/teams";
const COMPETITION_API_BASE_URL = "http://localhost:8080/api/auth/comp/competitions";
const SEASON_API_BASE_URL = "http://localhost:8080/api/auth/comp/seasons";

class MatchService {

    getMatches() {
        return axios.get(MATCH_API_BASE_URL);
    }

    getTeams() {
        return axios.get(TEAM_API_BASE_URL);
    }

    getCompetitions() {
        return axios.get(COMPETITION_API_BASE_URL);
    }

    getSeasons() {
        return axios.get(SEASON_API_BASE_URL);
    }

    createMatch(match) {
        return axios.post(MATCH_API_BASE_URL, match);
    }

    createTeam(team) {
        return axios.post(TEAM_API_BASE_URL, team);
    }

    createCompetition(competition) {
        return axios.post(COMPETITION_API_BASE_URL, competition);
    }

    createSeason(season) {
        return axios.post(SEASON_API_BASE_URL, season);
    }

    getMatchById(matchId) {
        return axios.get(MATCH_API_BASE_URL + '/' + matchId);
    }

    getTeamById(teamId) {
        return axios.get(TEAM_API_BASE_URL + '/' + teamId);
    }

    getCompetitionById(competitionId) {
        return axios.get(COMPETITION_API_BASE_URL + '/' + competitionId);
    }

    getSeasonById(seasonId) {
        return axios.get(SEASON_API_BASE_URL + '/' + seasonId);
    }

    updateMatch(match, matchId) {
        return axios.put(MATCH_API_BASE_URL + '/' + matchId, match);
    }

    updateTeam(team, teamId) {
        return axios.put(TEAM_API_BASE_URL + '/' + teamId, team);
    }

    updateCompetition(competition, competitionId) {
        return axios.put(COMPETITION_API_BASE_URL + '/' + competitionId, competition);
    }

    updateSeason(season, seasonId) {
        return axios.put(SEASON_API_BASE_URL + '/' + seasonId, season);
    }

    deleteMatch(matchId) {
        return axios.delete(MATCH_API_BASE_URL + '/' + matchId);
    }

    deleteTeam(teamId) {
        return axios.delete(TEAM_API_BASE_URL + '/' + teamId);
    }

    deleteCompetition(competitionId) {
        return axios.delete(COMPETITION_API_BASE_URL + '/' + competitionId);
    }

    deleteSeason(seasonId) {
        return axios.delete(SEASON_API_BASE_URL + '/' + seasonId);
    }

}

export default new MatchService()