/* eslint-disable consistent-return */
import axios from 'axios';
// http://localhost:8080
const baseURL: string = 'http://localhost:8080/api/v1/';
const headers = {
    'Content-Type': 'application/json',
};

export const API = axios.create({
    baseURL,
    timeout: 10000,
    headers,
});

API.interceptors.request.use((config) => {
    // 요청을 보내기 전에 수행 할 일
    return config;
});

API.interceptors.response.use(
    (response) => {
        console.dir(response);
        return response;
    },
    (error) => {
        // 오류 응답 처리
        console.dir(error);

        return Promise.reject(error);
    }
);
