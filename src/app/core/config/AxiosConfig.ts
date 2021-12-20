import axios from 'axios';

export const axiosIntance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 30000,
  headers: { 'X-Custom-Header': 'foobar' },
});
