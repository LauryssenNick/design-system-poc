import '@divriots/dockit-core/layout/dockit-layout.define.js';
import { styles } from '@divriots/dockit-core/layout';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '../../tokens/_variables.css';

export const docLayoutTemplate = (content, context) => html`
  <style>
    ${unsafeHTML(styles)} [slot='logo'] {
      color: #db0f16;
      display: flex;
      align-items: center;
      gap: 1em;
      font-size: 36px;
      font-weight: bold;
      width: max-content;
    }

    .box {
      width: 4rem;
      height: 4rem;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      background-color: #2f855a;
      border-radius: 0.2rem;
    }
  </style>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  />
  <dockit-layout
    disable-color-scheme-change
    initial-color-scheme="light"
    .context="${context}"
  >
    <div slot="logo">
      <span>Hexagon</span>
    </div>
    <div class="prose">${unsafeHTML(content)}</div>
  </dockit-layout>
`;
