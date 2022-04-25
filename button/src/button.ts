import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('ktn-button')
export default class Button extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      position: relative;
      width: auto;
      cursor: pointer;
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
      cursor: inherit;
      border-radius: 4px;
      padding: 8px 16px;
    }

    .button--primary {
      background-color: var(--ktn-color-primary-medium);
      color: #fff;
      border-color: var(--ktn-color-primary-medium);
    }

    .button--primary:hover {
      background-color: var(--ktn-color-primary-dark);
      border-color: var(--ktn-color-primary-dark);
    }
  `;

  render() {
    return html`<button
      class=${classMap({
        button: true,
        'button--primary': true,
      })}
    >
      <slot></slot>
    </button> `;
  }
}
