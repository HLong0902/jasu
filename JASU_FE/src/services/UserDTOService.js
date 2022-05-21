import axios from 'axios';

const JASU_API_BASE = 'http://localhost:9200/api/guest/allTeacher'
class UserService {
    getUsers() {
        return axios.get(JASU_API_BASE );
    }
    searchUser(searchInput){
        return axios.get(JASU_API_BASE +searchInput);
    }

    createUser(user) {
        return axios.post(JASU_API_BASE, user);
    }

    getUserById(userId) {
        return axios.get(JASU_API_BASE + '/' + userId);
    }

    updateUser(user, userId) {
        return axios.put(JASU_API_BASE + '/' + userId, user);
    }

    deleteUser(userId) {
        return axios.delete(JASU_API_BASE + '/' + userId);
    }
}
export default new UserService();