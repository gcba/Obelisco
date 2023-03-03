// Base
import React from 'react';
import './Alert.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { alertTypes } from '../utils';

// Configuración general del componente
export default {
  title: 'Componentes|Alerta',
  decorators: [withA11y]
};

export const SimpleConCierre = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      <div className="alert alert-danger alert-dismissible show fade" role="alert">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, fugiat!&nbsp;
          <a href="#">con enlaces.</a>
        </p>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  );
};

export const SimpleConIcono = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      <div className="alert alert-danger" role="alert">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, fugiat!&nbsp;
          <a href="#">con enlaces.</a>
        </p>
      </div>
    </div>
  );
};

export const Titulo = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      <div className="alert alert-danger" role="alert">
        <p>
          <strong>Este es un destacado de una alerta (opcional). </strong>
          Un texto simple para una alerta simple, incluso&nbsp;
          <a href="#">con hipervínculos</a>.
        </p>
      </div>
    </div>
  );
};

Titulo.story = {
  name: 'Destacado y texto'
};

export const Colores = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      {alertTypes.map((type) => (
        <div key={type} className={`alert alert-${type}`} role="alert">
          <p>Un texto simple para una alerta simple.</p>
        </div>
      ))}
    </div>
  );
};
