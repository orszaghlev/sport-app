import axios from 'axios';

const MATCH_API_BASE_URL = "http://localhost:8080/comp/matches";

class MatchService {

    getMatches() {
        return axios.get(MATCH_API_BASE_URL);
    }

}

export default new MatchService()