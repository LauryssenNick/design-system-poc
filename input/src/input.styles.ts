import { css } from 'lit';

export default css`
  :host {
    display: block;
    box-sizing: border-box;
  }

  :host::part(label) {
    color: var(--ktn-color-status-error);
  }

  .input-root .input-root-label {
    display: none;
  }

  .input-root .input-root-help-text {
    display: none;
  }

  .input-root--error::part(label) {
    color: var(--ktn-color-status-error);
  }

  .input-root--has-label::part(label) {
    display: block;
    color: var(--ktn-input-help-text-color);
  }

  .input-root--has-help-text::part(help-text) {
    display: block;
    color: var(--ktn-input-help-text-color);
    font-size: var(--ktn-typography-size-xs);
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    font-family: var(--ktn-input-font-family);
    font-weight: var(--ktn-input-font-weight);
    letter-spacing: var(--ktn-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    padding: var(--ktn-input-padding-vertical)
      var(--ktn-input-padding-horizontal);
    background-color: var(--ktn-input-background);
    border: solid var(--ktn-input-border-width) var(--ktn-input-border-color);
  }

  .input-root {
    display: flex;
    flex-direction: column;
  }

  .input--disabled {
    background-color: var(--ktn-input-disabled-background);
    border-color: var(--ktn-input-disabled-background);
    opacity: 0.5;
    color: var(--ktn-input-disabled-color);
    pointer-events: none;
    cursor: not-allowed;
    box-shadow: none;
  }

  .input--error {
    border-color: var(--ktn-color-status-error);
  }
`;
