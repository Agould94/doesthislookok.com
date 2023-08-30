import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
    header:{
        'Content-Type':'application/json'
    },
    withCredentials: true
});

const apiNoCred = axios.create({
    baseURL: 'http://localhost:8000',
    header:{
        'Content-Type':'application/json'
    }
});

export const getQuestions = () => api.get('/questions')
export const getUsers = () => api.get('/users')
export const getMarks = () => api.get('/marks')
export const getUser = () => api.get('/api/get_user/')
export const logoutUser = () => api.get('/api/logout')
export const loginUser = (formdata)=> apiNoCred.post('/api/login/', formdata)
export default api.baseURL