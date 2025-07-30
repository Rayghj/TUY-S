import { html } from 'lit';
import LitWithoutShadowDom from '../root/LitWithoutShadowDom';

class AboutContent extends LitWithoutShadowDom {
  render() {
    return html`
      <div class="container my-5">
        <div
          class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"
        >
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1">Tell Us Your Story</h1>
            <p class="lead">
              TUY'S atau Tell Us Your Story merupakan aplikasi berbasis website
              yang mewadahi segala karangan/curahan cerita yang dibuat oleh
              penulis. Aplikasi ini 100% gratis dan dapat dengan mudah di
              gunakan di berbagai platform.
            </p>
          </div>
          <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden">
            <img class="img-fluid" src="/favicon.png" alt="Logo" width="100%" />
          </div>
        </div>
        <button
          class="btn btn-outline-primary mt-5"
          @click="${this._goToListStories}"
        >
          Kembali ke Daftar Cerita
        </button>
      </div>
    `;
  }

  _goToListStories() {
    window.location.href = '/';
  }
}

customElements.define('about-content', AboutContent);
