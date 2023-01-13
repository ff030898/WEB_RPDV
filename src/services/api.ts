import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api-rpdv.herokuapp.com/'
});