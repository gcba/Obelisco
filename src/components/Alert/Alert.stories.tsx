// Base
import React from 'react';
import './Alert.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { alertTypes } from '../utils';

// Config
export default {
  title: 'Componentes|Alerta',
  decorators: [withA11y]
};

export const Texto = (): JSX.Element => {
  return (
    <div className="alert alert-danger" role="alert">
      <p>
        Un texto simple para una alerta simple, incluso&nbsp;
        <a href="#">con hipervínculos</a>.
      </p>
    </div>
  );
};

export const Titulo = (): JSX.Element => {
  return (
    <div className="alert alert-danger" role="alert">
      <h4>Título de la alerta</h4>
      <p>
        Un texto simple para una alerta simple, incluso&nbsp;
        <a href="#">con hipervínculos</a>.
      </p>
    </div>
  );
};
Titulo.story = {
  name: 'Título y texto'
};

export const Colores = (): JSX.Element[] => {
  return alertTypes.map(type => (
    <div key={type} className={`alert alert-${type}`} role="alert">
      <p>Un texto simple para una alerta simple.</p>
    </div>
  ));
};

export const Toggle = (): JSX.Element => {
  return (
    <div className="alert alert-danger alert-dismissible fade show" role="alert">
      <h4>Título de la alerta</h4>
      <p>
        Un texto simple para una alerta simple, incluso&nbsp;
        <a href="#">con hipervínculos</a>.
      </p>

      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export const Lista = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <h4>Título de la alerta</h4>
        <ol>
          <li>
            <a href="#">Un texto simple para un enlace en una lista de alerta</a>
          </li>

          <li>
            <a href="#">Un texto simple para un enlace en una lista de alerta</a>
          </li>

          <li>
            <a href="#">Un texto simple para un enlace en una lista de alerta</a>
          </li>
        </ol>

        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};
