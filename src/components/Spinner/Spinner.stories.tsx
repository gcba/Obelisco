// Base
import React from 'react';
import './Spinner.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { sizes } from '../utils';
import { Spinner } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Spinner',
  component: Spinner,
  decorators: [withA11y]
};

export const SpinnerTypes = (): JSX.Element => (
  <>
    <div className="storybook__container-spinner">
      <Spinner type="primary"></Spinner>
      <Spinner type="secondary"></Spinner>
      <Spinner type="success"></Spinner>
      <Spinner type="danger"></Spinner>
      <Spinner type="info"></Spinner>
      <div className="bg-dark p-2">
        <Spinner type="light"></Spinner>
      </div>
      <Spinner type="dark"></Spinner>
    </div>
  </>
);

SpinnerTypes.story = {
  name: 'Tipos'
};

export const SpinnerSizes = (): JSX.Element => {
  return (
    <div className="storybook__container-spinner">
      {sizes.map((item) => (
        <Spinner key={item} type="primary" size={item}></Spinner>
      ))}
    </div>
  );
};

SpinnerSizes.story = {
  name: 'Tamaños'
};

export const SpinnerBlock = (): JSX.Element => (
  <div className="storybook__container-spinner-block">
    <Spinner type="primary" block={true}></Spinner>
  </div>
);

SpinnerBlock.story = {
  name: 'Expandible'
};
