import Config from '../config';
import Utils from '../utils/utils';
import Endpoint from '../api/endpoint';
import axiosInstance from './axiosInstance';

const ApiRequest = {
  async getAll() {
    return await axiosInstance({
      url: Endpoint.GET_ALL_STORIES,
      method: 'get',
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
      },
    });
  },

  async addNew({ description, photo }) {
    const data = { description, photo };
    return await axiosInstance({
      url: Endpoint.ADD_NEW_STORY,
      method: 'post',
      data,
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default ApiRequest;
