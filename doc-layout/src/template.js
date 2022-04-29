import '@divriots/dockit-core/layout/dockit-layout.define.js';
import { styles } from '@divriots/dockit-core/layout';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

export const docLayoutTemplate = (content, context) => html`
  <style>
    ${unsafeHTML(styles)} 

    [slot='logo'] {
          color: #db0f16;
      display: flex;
      align-items: center;
      gap: 1em;
      font-size: 36px;
      font-weight: bold;
      width: max-content;
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
