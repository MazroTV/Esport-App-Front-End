import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/roles";

class RoleService {

    getAllRoles(){
        return axios.get(USER_API_BASE_URL);
    }

    createRole(role){
        return axios.post(USER_API_BASE_URL, role);
    }

    getRoleByUId(roleRoleId){
        return axios.get(USER_API_BASE_URL + '/get/' + roleRoleId);
    }

    updateRole(role, roleRoleId){
        return axios.put(USER_API_BASE_URL + '/update/' + roleRoleId, role);
    }

    deleteRole(roleRoleId){
        return axios.delete(USER_API_BASE_URL + '/delete/' + roleRoleId);
    }
}

export default new RoleService();