import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { live } from 'lit/directives/live.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './input.styles';
import { emit } from '../../utils/utils';

@customElement('ktn-input')
export default class Input extends LitElement {
  static styles = styles;

  @query('.input') input: HTMLInputElement;
  @property() value = '';
  @property() name: string;

  /** Disables the button. */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  handleChange() {
    this.value = this.input.value;
    emit(this, 'ktn-change');
  }

  handleInput() {
    this.value = this.input.value;
    emit(this, 'ktn-input');
  }

  render() {
    return html`
      <input
        class=${classMap({
          input: true,
          'input--disabled': this.disabled,
        })}
        .value=${live(this.value)}
        @change=${this.handleChange}
        @input=${this.handleInput}
        name=${ifDefined(this.name)}
      />
    `;
  }
}
