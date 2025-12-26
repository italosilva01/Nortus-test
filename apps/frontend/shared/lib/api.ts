import axios from 'axios';

const api = axios.create({
  //baseURL: 'https://loomi.s3.us-east-1.amazonaws.com/mock-api-json/v2',
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
