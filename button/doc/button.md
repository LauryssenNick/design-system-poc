```js script
import { html } from 'lit';
import '../../tokens/_variables.css';
import '../src/button';
```

## Primary button

```js preview-story
export const base = () => html`<ktn-button>Button</ktn-button>`;
```

## Disabled button

```js preview-story
export const disabled = () =>
  html`<ktn-button disabled>Disabled button</ktn-button>`;
```
