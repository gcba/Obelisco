// Base
import React from 'react';
import './Spinner.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Spinner, SpinnerText } from '.';
import { spinnerTypes } from '../utils';

// Configuración del general del componente
export default {
  title: 'Componentes|Spinner',
  component: Spinner,
  decorators: [withA11y]
};

export const SinTexto = (): JSX.Element => (
  <div className="spinner-wrapper">
    {spinnerTypes.map((type) => (
      <Spinner key={type} type={type} />
    ))}
  </div>
);

export const Texto = (): JSX.Element => {
  return (
    <div className="spinner-wrapper-text">
      {spinnerTypes.map((type) => (
        <SpinnerText key={type} type={type} />
      ))}
    </div>
  );
};
