```js script
import { html } from 'lit';
import '../../tokens/_variables.css';
import '../src/input';
```

## Usage

```js
import '@backlight-dev/ktn.design-system-poc/input/dist/input';
import '@backlight-dev/ktn.design-system-poc/style.css';
```

## Primary input

```js preview-story
export const base = () => html` <ktn-input id="test"></ktn-input> `;
```

## Disabled input

```js preview-story
export const disabled = () => html`<ktn-input disabled></ktn-input>`;
```
