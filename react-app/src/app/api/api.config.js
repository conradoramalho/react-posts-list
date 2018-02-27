import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 60000,
    headers: { 'Authorization': 'React app' }
});

export default instance;