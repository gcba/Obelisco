// Base
import React from 'react';
import './Progress.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Barra de Progreso',
  decorators: [withA11y]
};

export const Default = (): JSX.Element => {
  return (
    <div className="container">
      <div className="progress">
        <div className="progress-bar style" role="progressbar" aria-value-now="25" aria-value-min="0" aria-value-max="100">25%</div>
      </div>
    </div>
  );
};
