// Base
import React from 'react';
import './Spinner.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { spinnerTypes, sizes } from '../utils';
import { Spinner } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Spinner',
  component: Spinner,
  decorators: [withA11y]
};

export const SpinnerTypes = (): JSX.Element => (
  <div className="spinner-wrapper">
    {spinnerTypes.map((type) => (
      <Spinner key={type} type={type}></Spinner>
    ))}
  </div>
);

SpinnerTypes.story = {
  name: 'Tipos'
};

export const SpinnerSizes = (): JSX.Element => {
  return (
    <div className="spinner-wrapper">
      {sizes.map((item) => (
        <Spinner key={item} type="info" size={item}></Spinner>
      ))}
    </div>
  );
};

SpinnerSizes.story = {
  name: 'Tamaños'
};

export const SpinnerBlock = (): JSX.Element => (
  <div className="spinner-wrapper">
    <Spinner type="info" block={true}></Spinner>
  </div>
);

SpinnerBlock.story = {
  name: 'Expandible'
};
