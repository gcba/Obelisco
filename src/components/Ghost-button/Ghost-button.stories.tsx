// Base
import React from 'react';
import './Ghost-button.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Ghost',
  decorators: [withA11y]
};



export const BtnFantasma = (): JSX.Element => {
  return (
    <div>
      <button type="button" className="btn btn-ghost-link">Botón</button>
    </div>
  );
};
BtnFantasma.story = { name: 'Botón Fantasma' };