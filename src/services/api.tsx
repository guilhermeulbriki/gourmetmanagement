import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.jacson.com.br'
});

export default api;