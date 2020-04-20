import axios from 'axios';

const api = axios.create({
   baseURL: 'http://localhost:3000/api',
});

export const createUser = (payload) => api.post('/join', payload);
export const registerUser = (id) => api.put('/event/register/${id}');
export const unregisterUser = (id) => api.put('/event/register/${id}');
export const addMemoryToUser = (id, payload) =>
   api.put('/memory/new/${id}', payload);
export const deleteUser = (id) => api.delete('/account/${id}');
export const updateUser = (id) => api.put('/account/${id}');
export const getUserById = (id) => api.get('/account/${id}');

const apis = {
   createUser,
   registerUser,
   unregisterUser,
   addMemoryToUser,
   deleteUser,
   updateUser,
   getUserById,
};

export default apis;
