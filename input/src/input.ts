import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { live } from 'lit/directives/live.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './input.styles';
import { emit } from '../../utils/utils';

@customElement('ktn-input')
export default class Input extends LitElement {
  static formAssociated = true;
  static styles = styles;

  @query('.input') input: HTMLInputElement;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ attribute: 'help-text' }) helpText = '';
  @property({ type: Boolean, reflect: true }) error = false;
  @property() label = '';
  @property() name: string;
  @property({ type: Boolean, reflect: true }) required = false;
  @property() value = '';

  internals_: ElementInternals;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
  }

  handleChange() {
    this.value = this.input.value;
    this.internals_.setFormValue(this.input.value);
    emit(this, 'ktn-change');
  }

  handleInput() {
    this.value = this.input.value;
    this.internals_.setFormValue(this.input.value);
    emit(this, 'ktn-input');
  }

  handleError() {
    this.error = true;
  }

  render() {
    return html`
      <div
        class=${classMap({
          'input-root': true,
          'input-root--has-label': this.label != '',
          'input-root--has-help-text': this.helpText != '',
        })}
      >
        <label part="label" class="input-label" for="input">
          ${this.label}
        </label>
        <input
          class=${classMap({
            input: true,
            'input--disabled': this.disabled,
            'input--error': this.error,
          })}
          ?disabled=${this.disabled}
          ?required=${this.required}
          .value=${live(this.value)}
          @change=${this.handleChange}
          @input=${this.handleInput}
          @invalid=${this.handleError}
          name=${ifDefined(this.name)}
        />
        <div part="help-text" class="input-help-text">${this.helpText}</div>
      </div>
    `;
  }
}
