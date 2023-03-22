// Base
import React from 'react';
import './Spinner.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Spinner',
  decorators: [withA11y]
};

export const SpinnerDefault = (): JSX.Element => (
  <div className="spinner-wrapper">
    <div className="spinner-border text-info" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

SpinnerDefault.story = {
  name: 'Predeterminado'
};

export const SpinnerSizes = (): JSX.Element => (
  <div className="spinner-wrapper">
    <div className="spinner-border spinner-border-sm text-info" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-border text-info" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-border spinner-border-lg text-info" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

SpinnerSizes.story = {
  name: 'Tamaños'
};

export const SpinnerBlock = (): JSX.Element => (
  <div className="spinner-wrapper">
    <div className="spinner-size">
      <div className="spinner-block text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
);
SpinnerBlock.story = {
  name: 'Expandible'
};
