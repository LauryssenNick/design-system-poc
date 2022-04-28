import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './button.styles'
@customElement('ktn-button')
export default class Button extends LitElement {
  static styles = styles

  /** Disables the button. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  render() {
    return html`<button
      class=${classMap({
        button: true,
        'button--primary': true,
        'button--disabled': this.disabled
      })}
      ?disabled=${this.disabled}
    >
      <slot></slot>
    </button> `;
  }
}
