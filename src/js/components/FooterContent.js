import { LitElement, html, css } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class FooterContent extends LitElement {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  static styles = css`
    :host {
      font-family: Arial, sans-serif;
      display: block;
      background-color: #f7cfd8;
      padding: 1rem;
      border-radius: 0.5rem;
    }
    p {
      color: #716f6fc7;
      font-size: 0.9rem;
      margin: 0;
      text-align: center;
    }

    locale-form {
      display: block;
      margin: 1rem;
      text-align: center;
    }
  `;

  render() {
    return html`
      <locale-form></locale-form>
      <p>${msg(`2025 TUY'S. Dibuat oleh RayId.`)}</p>
    `;
  }
}

customElements.define('footer-content', FooterContent);
