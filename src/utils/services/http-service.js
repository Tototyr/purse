import axios from 'axios';

export const HTTP = axios.create({
    baseURL: 'https://api.coincap.io/v2/',
});