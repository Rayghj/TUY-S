// Import our custom CSS
import '../sass/main.scss';

// Import javascript file
import * as bootstrap from 'bootstrap';

import Home from './pages/list/home';
import New from './pages/new/new';
import About from './pages/about/about';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import './components/index';

const routes = {
  '/': Home,
  '/new/new.html': New,
  '/about/about.html': About,
  '/auth/login.html': Login,
  '/auth/register.html': Register,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();
  route.init();
});
