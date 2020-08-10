import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.254.9.133',
});

export default api;