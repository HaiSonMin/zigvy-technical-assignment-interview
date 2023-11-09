import axios, { AxiosInstance } from 'axios';

class Http {
  baseUrl: string;
  instance: AxiosInstance;
  constructor() {
    // this.baseUrl = 'http://localhost:9000/api';
    this.baseUrl = 'https://jsonplaceholder.typicode.com';
    this.instance = axios.create({
      baseURL: this.baseUrl,
      withCredentials: true,
      timeout: 10000, // 10s
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
  }
}

export default new Http().instance;
