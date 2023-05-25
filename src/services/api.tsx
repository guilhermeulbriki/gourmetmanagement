import axios from 'axios';

const api = axios.create({
    baseURL: 'http://200.132.38.218:8000'
});

export default api;