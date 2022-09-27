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

## Events

You can listen for standard events such as click, mouseover, etc. as you normally would.
In addition, some components emit custom events. These work the same way as standard events, but are prefixed with ktn- to prevent collisions with standard events and other libraries.

```html
<ktn-input></ktn-input>

<script>
  const input = document.querySelector('ktn-input');

  input.addEventListener('ktn-change', (event) => {
    console.log(event.target.value);
  });
</script>
```

Custom Events:

- ktn-change
- ktn-input

## Primary input

```js preview-story
export const base = () =>
  html` <ktn-input label="Name" help-text="Enter your name"></ktn-input> `;
```

## Disabled input

```js preview-story
export const disabled = () =>
  html`<ktn-input label="Name" value="test" disabled></ktn-input>`;
```

## Invalid input

```js preview-story
export const error = () =>
  html`<ktn-input error label="Name" help-text="Enter your name"></ktn-input>`;
```
