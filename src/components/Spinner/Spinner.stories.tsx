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

export const SpinnerTest = (): JSX.Element => (
  <>
    <div className="storybook__container-spinner">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Cargando...</span>
      </div>
      <div className="spinner-border text-secondary" role="status">
        <span className="sr-only">Cargando...</span>
      </div>
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Cargando...</span>
      </div>
      <div className="spinner-border text-danger" role="status">
        <span className="sr-only">Cargando...</span>
      </div>
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Cargando...</span>
      </div>
      <div className="spinner-border text-light" role="status">
        <span className="sr-only">Cargando...</span>
      </div>
      <div className="spinner-border text-dark" role="status">
        <span className="sr-only">Cargando...</span>
      </div>
    </div>
    <br />
    <p>nuevas variantes</p>
    <div className="storybook__container-spinner">
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Cargando...</span>
      </div>
      <div className="spinner-border text-danger" role="status">
        <span className="sr-only">Cargando...</span>
      </div>
      <div className="spinner-border text-light" role="status">
        <span className="sr-only">Cargando...</span>
      </div>
      <div className="spinner-border text-dark" role="status">
        <span className="sr-only">Cargando...</span>
      </div>
    </div>
    <br />
    <div className="storybook__container-spinner bg-dark py-2">
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Cargando...</span>
      </div>
      <div className="spinner-border text-danger" role="status">
        <span className="sr-only">Cargando...</span>
      </div>
      <div className="spinner-border text-light" role="status">
        <span className="sr-only">Cargando...</span>
      </div>
      <div className="spinner-border text-dark" role="status">
        <span className="sr-only">Cargando...</span>
      </div>
    </div>
  </>
);

export const SpinnerTypes = (): JSX.Element => (
  <div className="storybook__container-spinner">
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
    <div className="storybook__container-spinner">
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
  <div className="storybook__container-spinner-block">
    <Spinner type="info" block={true}></Spinner>
  </div>
);

SpinnerBlock.story = {
  name: 'Expandible'
};
