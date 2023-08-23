import axios from 'axios';

const api = axios.create({
    basURL: 'http://localhost:8000',
});

export const getQuestions = () => api.get('/questions')
export const getUsers = () => api.get('/users')
export const getMarks = () => api.get('/marks')
export default api.basURL