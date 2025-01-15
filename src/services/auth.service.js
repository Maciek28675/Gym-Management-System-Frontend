import axios from 'axios';

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
                    console.log('Storing user in localStorage:', response.data);
                    localStorage.setItem('user', JSON.stringify(response.data))
                }

                return response.data;
            })

    }

    logout() {
        // Deactivate JWT
        localStorage.removeItem('user');
    }
}

export default new AuthService();