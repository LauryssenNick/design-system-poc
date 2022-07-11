import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './button.styles';

@customElement('ktn-button')
export default class Button extends LitElement {
  static formAssociated = true;
  static styles = styles;

  /** Disables the button. */
  @property({ type: Boolean, reflected: true })
  disabled = false;

  @property() name: string;
  @property() type: 'button' | 'submit' | 'reset' = 'button';
  @property() variant: 'primary' | 'secondary' = 'primary';
  internals: ElementInternals;

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (this.type === 'submit') {
      this.internals.form.requestSubmit();
      this.internals.form.reset();
    }

    if (this.type === 'reset') {
      this.internals.form.reset();
    }
  }

  render() {
    return html`<button
      class=${classMap({
        button: true,
        'button--primary': this.variant === 'primary',
        'button--secondary': this.variant === 'secondary',
        'button--disabled': this.disabled,
      })}
      name=${ifDefined(this.name)}
      type=${this.type}
      @click=${this.handleClick}
    >
      <slot></slot>
    </button> `;
  }
}
