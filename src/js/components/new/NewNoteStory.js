import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../root/LitWithoutShadowDom';

class NewNoteStory extends LitWithoutShadowDom {
  static properties = {
    inputId: { type: String, reflect: true },
    rows: { type: Number, reflect: true },
    value: { type: String, reflect: true },

    invalidFeedbackMessage: { type: String, reflect: true },
    validFeedbackMessage: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();

    this.required = false;
  }

  render() {
    return html`
      <textarea
        id=${this.inputId || nothing}
        class="form-control"
        rows=${this.rows || nothing}
        value=${this.value || nothing}
        ?required=${this.required}
        @input=${(ev) => (this.value = ev.target.value)}
      ></textarea>

      ${this._validFeedbackTemplate()}
      <div class="invalid-feedback">Wajib Diisi</div>
    `;
  }

  _validFeedbackTemplate() {
    if (this.validFeedbackMessage) {
      return html`
        <div class="valid-feedback">${this.validFeedbackMessage}</div>
      `;
    }

    return html``;
  }
}

customElements.define('new-note-story', NewNoteStory);
