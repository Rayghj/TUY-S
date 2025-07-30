import UserAuthChecker from '../auth/user-auth-checker';
import ApiRequest from '../../network/apirequest';

const New = {
  async init() {
    UserAuthChecker.checkLoginState();

    this._initialListener();
  },

  _initialListener() {
    const addStoryForm = document.querySelector('#addStoryForm');
    addStoryForm.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        addStoryForm.classList.add('was-validated');
        this._sendPost();
      },
      false
    );
  },

  async _sendPost() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);

      try {
        const response = await ApiRequest.addNew(formData);

        window.alert('Cerita baru berhasil ditambahkan!');
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
        window.alert('Gagal menambah cerita: ' + errorMsg);
      }
    }
  },

  _getFormData() {
    const noteInput = document.querySelector('#validationCustomNotes');
    const imgInput = document.querySelector('#validationCustomImg');

    return {
      photo: imgInput.files[0],
      description: noteInput.value,
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

export default New;
