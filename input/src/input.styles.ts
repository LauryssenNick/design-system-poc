import { css } from 'lit';

export default css`
  :host {
    display: block;
    box-sizing: border-box;
  }

  :host::part(label) {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--ktn-input-label-color);
    font-size: var(--ktn-core-font-size-7);
    transform: translate(var(--ktn-core-spacing-4), var(--ktn-core-spacing-2))
      scale(1);
  }

  :host::part(help-text) {
    display: block;
    color: var(--ktn-input-help-text-color);
    font-size: var(--ktn-core-font-size-7);
    margin: var(--ktn-core-spacing-1) var(--ktn-core-spacing-4) 0;
  }

  :host([disabled]) .input {
    background-color: var(--ktn-input-disabled-background);
    border-color: var(--ktn-input-disabled-background);
    opacity: var(--ktn-core-opacity-disabled);
    color: var(--ktn-input-disabled-color);
    box-shadow: none;
  }

  :host([disabled]) .input-container {
    cursor: not-allowed;
    pointer-events: none;
  }

  :host([error]) .input {
    border-color: var(--ktn-core-color-status-error);
    border-width: 2px;
  }

  :host([error])::part(help-text),
  :host([error])::part(label) {
    color: var(--ktn-core-color-status-error);
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
    padding: var(--ktn-core-spacing-7) var(--ktn-core-spacing-4)
      var(--ktn-core-spacing-3);
    background-color: var(--ktn-input-background);
    border: 0;
    border-bottom: solid var(--ktn-input-border-width)
      var(--ktn-input-border-color);
    transition: border-color var(--ktn-core-duration-quickly)
      cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  .input:focus {
    outline: none;
    border-color: var(--ktn-input-focus-border-color);
    border-bottom: solid var(--ktn-input-border-width)
      var(--ktn-semantic-color-primary-medium);
  }

  .input-container {
    display: inline-flex;
    flex-direction: column;
    position: relative;
    background-color: var(--ktn-input-background-color);
    border-top-right-radius: var(--ktn-core-border-radius-base);
    border-top-left-radius: var(--ktn-core-border-radius-base);
    transition: background-color var(--ktn-core-duration-default)
      cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  .input-container:hover {
    background-color: var(--ktn-input-hover-color);
  }
`;
