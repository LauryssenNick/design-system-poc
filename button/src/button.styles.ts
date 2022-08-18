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
    border-radius: var(--ktn-button-border-radius);
    padding: var(--ktn-button-padding-vertical)
      var(--ktn-button-padding-horizontal);
    font-family: var(--ktn-button-font-family);
    font-size: var(--ktn-button-font-size);
    font-weight: var(--ktn-button-font-weight);
    line-height: 16px;
  }

  .button:hover {
    cursor: pointer;
  }

  .button--primary {
    background-color: var(--ktn-button-primary-background);
    color: var(--ktn-button-primary-color);
    border-color: var(--ktn-button-primary-border-color);
  }

  .button--secondary {
    background-color: var(--ktn-button-secondary-background);
    color: var(--ktn-button-secondary-color);
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
