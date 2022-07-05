```js script
import { html } from 'lit';
import '../../tokens/_variables.css';
import '../src/button';
import '../../input/src/input';
```

## Usage

```js
import '@backlight-dev/ktn.design-system-poc/button/dist/button';
import '@backlight-dev/ktn.design-system-poc/style.css';
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

## Form

```js preview-story
export const Forms = () => html`
  <form
    @submit=${(ev) => {
      ev.preventDefault();
      const formData = new FormData(ev.target);

      for (const [key, value] of formData) {
        console.log(`${key}: ${value}`);
      }
    }}
  >
    <ktn-input name="name" label="Name" required></ktn-input>
    <br />
    <ktn-button type="reset">Reset</ktn-button>
    <ktn-button type="submit">Submit</ktn-button>
  </form>
`;
```
