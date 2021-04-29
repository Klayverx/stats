import axios from 'axios';
// import { getToken } from './auth';

export const api = axios.create({
	baseURL: 'https://www.strava.com/api/v3/',
});

export const apiToken = axios.create({
	baseURL: 'https://www.strava.com/oauth/',
});

// api.interceptors.request.use(async config => {
//     const token = getToken();

//     if(token) {
//         config.headers.Authorization  = `Bearer ${token}`
//     }

//     return config;
// })
