import axios from 'axios';

const BASE_URL = 'https://6176555a03178d00173dab77.mockapi.io/users';

export default {

    getAllUsers: async () => {
        let res = await axios.get(`${BASE_URL}`);
        return res;
    },
    addUser: (data) => {
        axios.post(`${BASE_URL}`, data);

    }
    
}
