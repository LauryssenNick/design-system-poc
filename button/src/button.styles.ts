import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: 1px;
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    border-radius: var(--ktn-button-primary-border-radius);
    padding: var(--ktn-core-spacing-1) var(--ktn-core-spacing-2);
    font-family: var(--ktn-button-font-family);
  }

  .button:hover {
    cursor: pointer;
  }

  .button--primary {
    background-color: var(--ktn-button-primary-background);
    color: #fff;
    border-color: var(--ktn-button-primary-border-color);
  }

  .button--secondary {
    background-color: var(--ktn-button-secondary-background);
    color: #fff;
    border-color: var(--ktn-button-secondary-border-color);
  }

  .button--primary:hover {
    background-color: var(--ktn-button-primary-hover-background);
    border-color: var(--ktn-button-primary-hover-border-color);
  }

  .button--secondary:hover {
    background-color: var(--ktn-button-secondary-hover-background);
    border-color: var(--ktn-button-secondary-hover-border-color);
  }

  .button--disabled {
    background-color: var(--ktn-button-disabled-background);
    border-color: var(--ktn-button-disabled-background);
    color: var(--ktn-button-disabled-color);
    pointer-events: none;
    cursor: initial;
  }
`;
