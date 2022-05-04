import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './input.styles';
import { emit } from '../../utils/utils';

@customElement('ktn-input')
export default class Input extends LitElement {
  static styles = styles;

  /** Disables the button. */
  @property({ type: Boolean, reflected: true })
  disabled = false;

  handleChange() {
    emit(this, 'ktn-change');
  }

  render() {
    return html`
      <input
        class=${classMap({
          input: true,
          'input--primary': true,
          'input--disabled': this.disabled,
        })}
        @change=${this.handleChange}
      />
    `;
  }
}
