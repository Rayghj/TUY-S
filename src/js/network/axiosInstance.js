import axios from 'axios';
import Config from '../config';

const axiosInstance = axios.create({
  baseURL: Config.BASE_URL,
});

export default axiosInstance;
