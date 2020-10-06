// Base
import React from 'react';
import './Card.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Tarjeta/Indicadores simples',
  decorators: [withA11y]
};


export const IndicatorNumber = (): JSX.Element => {
  return (
    <div className="container">

    </div>
  );
};
IndicatorNumber.story = { name: 'Indicador número (Default)'};