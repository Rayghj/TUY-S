import { html } from 'lit';
import LitWithoutShadowDom from '../root/LitWithoutShadowDom';

class NewSubmitButton extends LitWithoutShadowDom {
  render() {
    return html`
      <div class="new-submit-button-container">
        <button class="new-submit-button" type="submit">Submit</button>
      </div>
    `;
  }
}

customElements.define('new-submit-button', NewSubmitButton);
