import React from 'react';

import './CustomizeLinks.scss';

import { withA11y } from '@storybook/addon-a11y';
import { LinkState } from './Link-state/LinkState.stories';
import { LinkTypology } from './Link-typology/LinkTypology.stories';

//config
export default {
  title: 'Componentes|Customize Links',
  decorators: [withA11y]
};

export const CustomizeLinks = (): JSX.Element => {
  return (
    <div>
      <h2>Enlaces</h2>
      <h2 className="mt-4">Estados</h2>

      <LinkState />

      <div className="marign">
        <LinkTypology />
      </div>
    </div>
  );
};
