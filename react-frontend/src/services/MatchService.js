import axios from 'axios';

const MATCH_API_BASE_URL = "http://localhost:8080/api/auth/comp/matches";

class MatchService {

    getMatches() {
        return axios.get(MATCH_API_BASE_URL);
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