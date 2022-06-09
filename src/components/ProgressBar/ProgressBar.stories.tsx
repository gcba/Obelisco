// Base
import React from 'react';
import './ProgressBar.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración del general del componente
export default {
  title: 'Componentes | Barra de progreso',
  decorators: [withA11y]
};

export const WithSteps = (): JSX.Element => (
  <div className="progression-container">
    <p className="steps">1 de 8 pasos</p>
    <div className="progress">
      <div
        className="progress-bar bg-info"
        role="progressbar"
        style={{ width: '12.5%' }}
        aria-valuenow={0}
        aria-valuemin={0}
        aria-valuemax={80}></div>
    </div>
  </div>
);

WithSteps.story = { name: 'Con pasos' };

export const WithoutSteps = (): JSX.Element => (
  <div className="progression-container">
    <div className="progress">
      <div
        className="progress-bar bg-info"
        role="progressbar"
        style={{ width: '12.5%' }}
        aria-valuenow={0}
        aria-valuemin={0}
        aria-valuemax={80}></div>
    </div>
  </div>
);

WithoutSteps.story = { name: 'Sin pasos' };
