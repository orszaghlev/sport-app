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

    getMatchById(matchId) {
        return axios.get(MATCH_API_BASE_URL + '/' + matchId);
    }

    updateMatch(match, matchId) {
        return axios.put(MATCH_API_BASE_URL + '/' + matchId, match);
    }

    deleteMatch(matchId) {
        return axios.delete(MATCH_API_BASE_URL + '/' + matchId);
    }

}

export default new MatchService()