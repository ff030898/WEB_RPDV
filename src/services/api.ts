import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://rpdv.herokuapp.com/'
});