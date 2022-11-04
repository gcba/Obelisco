// Base
import React from 'react';
import './Spinner.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Spinner } from '.';

// Configuración del general del componente
export default {
  title: 'Componentes|Spinner',
  component: Spinner,
  decorators: [withA11y]
};

export const SinTexto = (): JSX.Element => (
  <div className="spinner-container-sin-texto">
    <Spinner />
  </div>
);
