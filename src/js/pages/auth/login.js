import Auth from '../../network/auth';
import UserAuthChecker from '../auth/user-auth-checker';
import Config from '../../config';
import Utils from '../../utils/utils';

const Login = {
  async init() {
    UserAuthChecker.checkLoginState();

    this._initialListener();
  },

  _initialListener() {
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        loginForm.classList.add('was-validated');
        await this._getLogged();
      },
      false
    );
  },

  async _getLogged() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);

      try {
        document.getElementById('loading-indicator-button').style.display =
          'block';
        document.getElementById('submit-text').style.display = 'none';

        const response = await Auth.login({
          email: formData.email,
          password: formData.password,
        });
        Utils.setUserToken(
          Config.USER_TOKEN_KEY,
          response.data.loginResult.token
        );

        window.alert('Pengguna berhasil masuk');

        this._goToHomePage();
      } catch (error) {
        console.error(error);
        let errorMsg = 'Terjadi kesalahan. Silakan coba lagi.';
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          errorMsg = error.response.data.message;
        } else if (error.message) {
          errorMsg = error.message;
        }
        window.alert('Gagal untuk masuk: ' + errorMsg);
      } finally {
        document.getElementById('loading-indicator-button').style.display =
          'none';
        document.getElementById('submit-text').style.display = 'block';
      }
    }
  },

  _getFormData() {
    const email = document.querySelector('#validationCustomEmail');
    const password = document.querySelector('#validationCustomPassword');

    return {
      email: email.value,
      password: password.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter(
      (item) => item === ''
    );

    return formDataFiltered.length === 0;
  },

  _goToHomePage() {
    window.location.href = '/';
  },
};

export default Login;
