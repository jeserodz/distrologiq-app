import axios, {AxiosError} from 'axios';
import {Config} from '../config';
import {store} from '../store';
import {ApiLoginResponse, User, Route} from '../types';

export const Api = axios.create({
  baseURL: Config.API_URL,
});

Api.interceptors.request.use(config => {
  const {token} = store.getState().auth;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const ApiService = {
  Auth: {
    async login(email: string, password: string): Promise<ApiLoginResponse> {
      try {
        const response = await Api.post('/auth/login', {username: email, password});
        return response.data;
      } catch (e) {
        const error: AxiosError = e;
        switch (error?.response?.status) {
          case 401: throw Error('Email or password inválido');
          default: throw error;
        }
      }
    },
  },
  Users: {
    async fetchCurrentUser(): Promise<User> {
      const response = await Api.get('/users/me');
      return response.data;
    },
  },
  Routes: {
    async fetchAssigned(userId: number): Promise<Route[]> {
      const response = await Api.get(`/routes/assigned/${userId}`);
      return response.data;
    },
  },
};
