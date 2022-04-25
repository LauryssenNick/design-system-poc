import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('ktn-button')
export default class Button extends LitElement {
  static styles = css`
    :host {
      background-color: var(--color-primary-main);
    }
  `;

  render() {
    return html` <button><slot></slot></button> `;
  }
}
