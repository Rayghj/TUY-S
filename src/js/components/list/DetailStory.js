import { html } from 'lit';
import LitWithoutShadowDom from '../root/LitWithoutShadowDom';

class DetailStory extends LitWithoutShadowDom {
  static properties = {
    title: { type: String, reflect: true },
  };

  render() {
    return html`
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              ${this.title}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <img
                src=""
                id="imgStoryDetail"
                class="img-fluid"
                alt="Gambar Cerita"
              />
            </div>
            <h2 class="fw-bold" id="nameDetailStory"></h2>
            <p id="noteStoryDetail"></p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('detail-story', DetailStory);
