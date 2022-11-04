// Base
import React from 'react';
import './Spinner.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { SpinnerText } from '.';

// Configuración del general del componente
export default {
  title: 'Componentes|Spinner',
  component: SpinnerText,
  decorators: [withA11y]
};

export const Texto = (): JSX.Element => <SpinnerText />;
