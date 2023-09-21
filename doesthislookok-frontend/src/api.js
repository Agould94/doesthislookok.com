import axios from 'axios';

axios.defaults.xsrfCookieName='csrftoken';
axios.defaults.xsrfHeaderName='X-CSRFToken';
axios.defaults.withCredentials = true;


const api = axios.create({
    baseURL: 'http://localhost:8000',
    header:{
        'Content-Type':'multipart/form-data',
    }, 
    //withCredentials: true
});

const apiNoCred = axios.create({
    baseURL: 'http://localhost:8000',
    header:{
        'Content-Type':'application/json'
    }
});

export const getQuestions = () => api.get('/questions')
export const submitMark = (formData) => api.post('/questions/create-mark', formData)
export const getUsers = () => api.get('/users')
export const getMarks = () => api.get('/marks')
export const getUser = () => api.get('/api/user')
export const logoutUser = () => api.post('/api/logout')
export const loginUser = (formdata)=> apiNoCred.post('/api/login', formdata)
export default api.baseURL