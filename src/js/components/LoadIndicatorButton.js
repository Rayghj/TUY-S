import { html } from 'lit';
import LitWithoutShadowDom from './root/LitWithoutShadowDom';

class LoadIndicatorButton extends LitWithoutShadowDom {
  constructor() {
    super();
    this.style.display = 'none';
  }

  render() {
    return html`
      <span
        class="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      <span class="sr-only">Loading...</span>
    `;
  }
}

customElements.define('load-indicator-button', LoadIndicatorButton);
