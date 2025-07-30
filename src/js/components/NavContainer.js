import { html } from 'lit';
import LitWithoutShadowDom from './root/LitWithoutShadowDom';

class NavContainer extends LitWithoutShadowDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <nav class="navbar bg-primary-subtle fixed-top">
        <div class="container">
          <brand-app></brand-app>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarSupportedContent"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" id="navbarSupportedContent">
            <nav-buttons>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-container', NavContainer);
