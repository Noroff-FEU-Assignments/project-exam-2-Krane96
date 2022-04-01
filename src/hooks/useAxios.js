import { useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { BASE_URL } from '../utils/api';

const useAxios = () => {
  const [auth] = useContext(AuthContext);
  const apiClient = axios.create({
    baseURL: BASE_URL,
  });

  apiClient.interceptors.request.use((config) => {
    config.headers.Authorization = auth ? `Bearer ${auth.jwt}` : '';
    return config;
  });

  return apiClient;
};

export default useAxios;