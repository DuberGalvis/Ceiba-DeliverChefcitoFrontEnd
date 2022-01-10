import axios from 'axios';

export const axiosIntance = axios.create({
  baseURL: process.env.REACT_APP_URL_BASE,
  timeout: 30000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export const axiosInstanceCalendar = axios.create({
  baseURL: process.env.REACT_APP_API_CALENDARIO,
  timeout: 30000,
  headers: { 
              'X-Custom-Header': 'foobar',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': 'X-API-KEY',
              'Access-Control-Allow-Methods': ' GET, OPTIONS',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            },
});
