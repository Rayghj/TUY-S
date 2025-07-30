import UserAuthChecker from '../auth/user-auth-checker';
import ApiRequest from '../../network/apirequest';
import '../../components/LoadIndicator.js';

const Home = {
  async init() {
    UserAuthChecker.checkLoginState();

    await this._initialData();
    this._initialListener();
  },

  async _initialData() {
    const storySection = document.querySelector('#listStories');
    if (storySection) {
      storySection.innerHTML = '<load-indicator></load-indicator>';
    }

    try {
      const response = await ApiRequest.getAll();

      this._listStories = response.data.listStory;
      this._populateStoriesToList(this._listStories);
    } catch (error) {
      console.error(error);
    }
  },

  _initialListener() {
    const storyDetailModal = document.querySelector('#storyDetailModal');
    storyDetailModal.addEventListener('show.bs.modal', (event) => {
      const modalTitle = storyDetailModal.querySelector('.modal-title');
      modalTitle.focus();
      const button = event.relatedTarget;
      const story = this._listStories.find((item) => {
        return item.id == button.dataset.storyId;
      });
      this._populateDetailStory(story);
    });
  },

  _populateStoriesToList(listStory = null) {
    if (!(typeof listStory === 'object')) {
      throw new Error(
        `Parameter listStory should be an object. The value is ${listStory}`
      );
    }

    if (!Array.isArray(listStory)) {
      throw new Error(
        `Parameter listStory should be an array. The value is ${listStory}`
      );
    }

    const storySection = document.querySelector('#listStories');

    storySection.innerHTML = '';
    if (listStory.length <= 0) {
      storySection.innerHTML = this._templateEmptyStories();
      return;
    }

    listStory.forEach((item, sty) => {
      storySection.innerHTML += this._templateStories(sty, listStory[sty]);
    });
  },

  _populateDetailStory(listStory) {
    if (!(typeof listStory === 'object')) {
      throw new Error(
        `Parameter listStory should be an object. The value is ${listStory}`
      );
    }
    const imgStoryDetail = document.querySelector(
      '#storyDetailModal #imgStoryDetail'
    );
    const noteStoryDetail = document.querySelector(
      '#storyDetailModal #noteStoryDetail'
    );
    const nameStoryDetail = document.querySelector(
      '#storyDetailModal #nameDetailStory'
    );
    imgStoryDetail.setAttribute('src', listStory.photoUrl);
    imgStoryDetail.setAttribute('alt', listStory.name);
    nameStoryDetail.textContent = listStory.name;
    noteStoryDetail.textContent = listStory.description || '-';
  },

  _templateStories(story, listStory) {
    return `
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="card h-100">
          <div class="card-body">
            <img class="bd-placeholder-img card-img-top" src="${listStory.photoUrl}">
            <a class="btn btn-sm fs-2 fw-bold" data-bs-toggle="modal" data-bs-target="#storyDetailModal" 
               data-story-id="${listStory.id}">
              ${listStory.name}
            </a>
            <p class="card-text">${formatIndonesianDate(listStory.createdAt)}</p>
            <p class="card-text">${listStory.description}</p>
          </div>
        </div>
      </div>  
    `;
  },

  _templateEmptyStories() {
    return `
      
          <div class="text-center">Tidak ada cerita untuk ditampilkan</div>
    `;
  },
};

function formatIndonesianDate(targetDate) {
  const date = new Date(targetDate);
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  const dayName = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${dayName}, ${day} ${month} ${year}`;
}

export default Home;
