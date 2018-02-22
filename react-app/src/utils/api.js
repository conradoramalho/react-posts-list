import axios from 'axios';

const headers = { 'Authorization': 'whatever-you-want' }
const apiAddress = 'http://localhost:3001'

function getPosts() {
    return axios.get(`${apiAddress}/posts`, { headers });
}

const api = {
    getPosts
}

export default api;