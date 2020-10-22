import axios from 'axios'
import authHeader from './AuthHeader';

const TEST_REST_API_URL = 'http://localhost:8080/api/test/';
const USER_REST_API_URL = 'http://localhost:8080/user';
const ADMIN_REST_API_URL = 'http://localhost:8080/admin';

class UserService {

    getPublicContent() {
        return axios.get(TEST_REST_API_URL + 'all');
    }

    getUserBoard() {
        return axios.get(USER_REST_API_URL, {headers: authHeader()});
    }

    getAdminBoard() {
        return axios.get(ADMIN_REST_API_URL, {headers: authHeader()});
    }

}

export default new UserService();