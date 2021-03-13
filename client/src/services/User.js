import Axios from 'axios';

// Hitting api to server-side to AuthUser and LogoutUser

export const CheckUser = () => Axios.get('/api/user');

export const AuthUser = (username, password) =>
	Axios.post('/api/user/login', { username, password });

export const LogoutUser = () => Axios.post('/api/user/logout');
