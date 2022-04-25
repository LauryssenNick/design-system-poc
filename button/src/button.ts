import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('ktn-button')
export default class Button extends LitElement {
  static styles = css`
    :host {
      background-color: var(--ktn-color-primary-medium);
    }

    .button {
      display: inline-flex;
      align-items: stretch;
      justify-content: center;
      width: 100%;
      border-style: solid;
      border-width: 1px;
      text-decoration: none;
      user-select: none;
      white-space: nowrap;
      vertical-align: middle;
      padding: 0;
      cursor: inherit;
    }

    .button--primary {
      background-color: var(--ktn-color-primary-medium);
    }
  `;

  render() {
    return html`<button class=${classMap({
      button: true,
      'button--primary': true
    })}><slot></slot></button> `;
  }
}
