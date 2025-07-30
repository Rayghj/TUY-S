import UserAuthChecker from '../auth/user-auth-checker';

const About = {
  async init() {
    UserAuthChecker.checkLoginState();
  },
};

export default About;
