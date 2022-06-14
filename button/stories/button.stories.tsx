import { html } from 'lit';
import '../../tokens/_variables.css';
import '../src/button';

export default {
  decorators: [(s) => `<div style="display:flex; gap: 5px;">${s()}</div>`],
  parameters: {
    layout: 'centered',
  },
};

export const base = () => `
<ktn-button>Button</ktn-button>
`;
