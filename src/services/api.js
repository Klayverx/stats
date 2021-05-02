import axios from 'axios';
// import { getToken } from './auth';

export const api = axios.create({
	baseURL: 'https://www.strava.com/api/v3/',
});

export const apiToken = axios.create({
	baseURL: 'https://www.strava.com/oauth/',
});

// api.interceptors.request.use(async request => {
// 	const token = localStorage.getItem('access_token');

// 	if (token) {
// 		request.headers.Authorization = `Bearer ${token}`;
// 	}

// 	return request;
// });
