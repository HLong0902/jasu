import axios from 'axios';

const ADMIN_API_BASE = 'http://localhost:9200/api/guest/allTeacher'
class UserService {
    getUsers() {
        return axios.get(ADMIN_API_BASE);
    }

    createUser(user) {
        return axios.post(ADMIN_API_BASE, user);
    }

    getUserById(userId) {
        return axios.get(ADMIN_API_BASE + '/' + userId);
    }

    updateUser(user, userId) {
        return axios.put(ADMIN_API_BASE + '/' + userId, user);
    }

    deleteUser(userId) {
        return axios.delete(ADMIN_API_BASE + '/' + userId);
    }
}
export default new UserService();