import { html } from 'lit';
import LitWithoutShadowDom from './root/LitWithoutShadowDom';

class LoadIndicator extends LitWithoutShadowDom {
  render() {
    return html`
      <div class="d-flex justify-content-center align-items-center my-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `;
  }
}

customElements.define('load-indicator', LoadIndicator);
