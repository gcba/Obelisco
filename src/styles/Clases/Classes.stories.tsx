// Base
import React from 'react';
import './Classes.stories.scss';
// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Estilos|Clases',
  decorators: [withA11y]
};

export const Clases = (): JSX.Element => {
  return (
    <div className="storybook__container-grid">
      <div className="container"></div>
    </div>
  );
};

Clases.story = { name: 'Clases' };
