import Config from '../config';

const Endpoint = {
  REGISTER: `${Config.BASE_URL}/register`,
  LOGIN: `${Config.BASE_URL}/login`,

  ADD_NEW_STORY: `${Config.BASE_URL}/stories`,
  GET_ALL_STORIES: `${Config.BASE_URL}/stories`,
};

export default Endpoint;
