import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const API_URL = 'http://localhost:5000/api/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'login', {
                employee_id: user.employee_id,
                password: user.password,
                gym_id: user.gym_id 
            })
            .then(response => {
                if (response.data.access_token) {
                    localStorage.setItem('user', JSON.stringify(response.data))

                    const decodedJWT = jwtDecode(response.data.access_token)

                    localStorage.setItem('first_name', decodedJWT["first_name"])
                    localStorage.setItem('last_name', decodedJWT["last_name"])
                    localStorage.setItem('role', decodedJWT["role"])
                }

                return response.data;
            })

    }

    logout() {
        // Deactivate JWT
        localStorage.removeItem('user');
        localStorage.removeItem('first_name');
        localStorage.removeItem('last_name');
        localStorage.removeItem('role');
    }
}

export default new AuthService();