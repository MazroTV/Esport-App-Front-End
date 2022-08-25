import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";

class UserService {

    getAllUsers(){
        return axios.get(USER_API_BASE_URL + '/all');
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL + '/add', user);
    }

    getUserByUsername(userUsername){
        return axios.get(USER_API_BASE_URL + '/get/' + userUsername);
    }

    updateUser(user, userUsername){
        return axios.put(USER_API_BASE_URL + '/update/' + userUsername, user);
    }

    deleteUser(userUsername){
        return axios.delete(USER_API_BASE_URL + '/delete/' + userUsername);
    }
}

export default new UserService();