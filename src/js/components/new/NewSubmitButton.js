import { html } from 'lit';
import LitWithoutShadowDom from '../root/LitWithoutShadowDom';
import '../LoadIndicatorButton';

class NewSubmitButton extends LitWithoutShadowDom {
  render() {
    return html`
      <div class="new-submit-button-container">
        <button class="new-submit-button" type="submit">
          <load-indicator-button
            id="loading-indicator-button"
          ></load-indicator-button>
          <span id="submit-text">Submit</span>
        </button>
      </div>
    `;
  }
}

customElements.define('new-submit-button', NewSubmitButton);
