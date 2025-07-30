import Auth from '../../network/auth';
import UserAuthChecker from '../auth/user-auth-checker';

const Register = {
  async init() {
    UserAuthChecker.checkLoginState();

    this._initialListener();
  },

  _initialListener() {
    const registerForm = document.querySelector('#registerForm');
    registerForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        registerForm.classList.add('was-validated');
        await this._getRegistered();
      },
      false
    );
  },

  async _getRegistered() {
    const formData = this._getFormData();

    if (!this._validateFormData({ ...formData })) {
      return;
    }

    if (formData.password.length < 8) {
      window.alert('Password harus terdiri dari minimal 8 karakter.');
      return;
    }

    console.log('formData');
    console.log(formData);

    try {
      const response = await Auth.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      window.alert('Pengguna berhasil terdaftar');

      this._goToLoginPage();
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
      window.alert('Gagal membuat akun: ' + errorMsg);
    }
  },

  _getFormData() {
    const name = document.querySelector('#validationCustomName');
    const email = document.querySelector('#validationCustomEmail');
    const password = document.querySelector('#validationCustomPassword');

    return {
      name: name.value,
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

  _goToLoginPage() {
    window.location.href = '/auth/login.html';
  },
};

export default Register;
