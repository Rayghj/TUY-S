import { html } from 'lit';
import LitWithoutShadowDom from './root/LitWithoutShadowDom';

class TogglePassword extends LitWithoutShadowDom {
  static properties = {
    inputId: { type: String },
  };

  constructor() {
    super();
    this.inputId = '';
  }

  render() {
    return html`
      <button
        type="button"
        class="btn"
        @click=${this._togglePassword}
        tabindex="-1"
      >
        <i id="eyeIcon" class="bi bi-eye"></i>
      </button>
    `;
  }

  _togglePassword() {
    const passwordInput = document.getElementById(this.inputId);
    const eyeIcon = this.renderRoot.querySelector('#eyeIcon');
    if (passwordInput && eyeIcon) {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      eyeIcon.className = isPassword ? 'bi bi-eye-slash' : 'bi bi-eye';
    }
  }
}

customElements.define('toggle-password', TogglePassword);
