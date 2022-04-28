import '@divriots/dockit-core/layout/dockit-layout.define.js';
import { styles } from '@divriots/dockit-core/layout';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

export const docLayoutTemplate = (content, context) => html`
  <style>
    ${unsafeHTML(styles)} [slot='logo'] span {
      color: #db0f16;
    }

    [slot='logo'] {
      display: flex;
      align-items: center;
      gap: 1em;
      font-size: 24px;
      width: max-content;
    }
  </style>
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
