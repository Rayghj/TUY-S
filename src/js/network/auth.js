import axiosInstance from './axiosInstance';
import Endpoint from '../api/endpoint';

const Auth = {
  async register({ name, email, password }) {
    return await axiosInstance({
      url: Endpoint.REGISTER,
      method: 'post',
      data: { name, email, password },
    });
  },

  async login({ email, password }) {
    return await axiosInstance({
      url: Endpoint.LOGIN,
      method: 'post',
      data: { email, password },
    });
  },
};

export default Auth;
