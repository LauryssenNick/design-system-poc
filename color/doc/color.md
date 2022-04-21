# Colors

```js script
import { html } from 'lit';
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
```

## Core

### Primary colors

Primary colors of our KTN.

```js story
export const primary = () => html`
  <dockit-css-showcases
    css-props-prefix="--starter-core-color-primary"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
`;
```
