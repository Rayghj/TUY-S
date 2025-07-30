import { LitElement, html, css } from 'lit';

class BrandApp extends LitElement {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  static styles = css`
    :host {
      font-family: 'Comic Relief', sans-serif;
      display: block;
      padding: 1rem;
    }
    span {
      color: #000;
      font-size: 1.5rem;
      margin: 0;
    }
  `;

  render() {
    return html` <span> ${this.brandName || "TUY'S"} </span> `;
  }
}

customElements.define('brand-app', BrandApp);
