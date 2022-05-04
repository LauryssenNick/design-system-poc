import { css } from 'lit';

export default css`
  :host {
    display: flex;
    box-sizing: border-box;
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
    border-radius: var(--ktn-input-border-radius);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    padding: var(--ktn-input-padding-vertical)
      var(--ktn-input-padding-horizontal);
    background-color: var(--ktn-input-background);
    border: solid var(--ktn-input-border-width) var(--ktn-input-border-color);
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
`;
