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
  @property({ type: Boolean, reflect: true }) invalid = false;
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

  handleInvalid() {
    this.invalid = true;
  }

  render() {
    return html`
      <div
        class=${classMap({
          'form-control': true,
          'form-control--has-label': this.label != '',
          'form-control--has-help-text': this.helpText != '',
        })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
        >
          <slot name="label">${this.label}</slot>
        </label>
        <input
          class=${classMap({
            input: true,
            'input--disabled': this.disabled,
            'input--invalid': this.invalid,
          })}
          ?disabled=${this.disabled}
          ?required=${this.required}
          .value=${live(this.value)}
          @change=${this.handleChange}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          name=${ifDefined(this.name)}
        />
        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
}
