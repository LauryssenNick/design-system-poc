import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
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
    cursor: inherit;
    border-radius: var(--ktn-button-primary-border-radius);
    padding: var(--ktn-spacing-s1) var(--ktn-spacing-s2);
    font-family: var(--ktn-typography-family);
  }

  .button--primary {
    background-color: var(--ktn-button-primary-background);
    color: #fff;
    border-color: var(--ktn-color-primary-medium);
  }

  .button--disabled {
    background-color: var(--ktn-button-disabled-background);
    border-color: var(--ktn-button-disabled-background);
    color: var(--ktn-button-disabled-color);
    pointer-events: none;
    cursor: not-allowed;
  }

  .button--primary:hover {
    background-color: var(--ktn-color-primary-dark);
    border-color: var(--ktn-color-primary-dark);
  }
`;
