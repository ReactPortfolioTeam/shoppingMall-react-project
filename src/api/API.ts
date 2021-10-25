import axios from 'axios';

const baseURL: string = 'http://localhost:8080/';
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
};

const API = axios.create({
    baseURL,
    timeout: 3000,
    headers,
});
