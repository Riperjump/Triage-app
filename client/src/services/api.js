import axios from 'axios';

const API_URL = 'http://localhost:5000/api/patients';

export const getPatients = () => axios.get(API_URL);
export const addPatient = (patient) => axios.post(API_URL, patient);
export const updatePatient = (id, update) => axios.put(`${API_URL}/${id}`, update);
export const deletePatient = (id) => axios.delete(`${API_URL}/${id}`);