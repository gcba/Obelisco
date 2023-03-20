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

export const Simple = (): JSX.Element => {
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

export const SimpleClose = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      {alertTypes.map((type) => (
        <div key={type} className={`alert alert-${type} alert-dismissible show fade`} role="alert">
          <p>Un texto simple para una alerta simple.</p>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span className="material-icons-round">close</span>
          </button>
        </div>
      ))}
    </div>
  );
};

SimpleClose.story = {
  name: 'Con cierre'
};

export const SimpleHighlight = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      {alertTypes.map((type) => (
        <div key={type} className={`alert alert-${type}`} role="alert">
          <p>
            <strong>Este es un destacado de una alerta (opcional). </strong>
            Un texto simple para una alerta simple.
          </p>
        </div>
      ))}
    </div>
  );
};

SimpleHighlight.story = {
  name: 'Con destacado'
};

export const SimpleHiperlink = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      {alertTypes.map((type) => (
        <div key={type} className={`alert alert-${type}`} role="alert">
          <p>
            Un texto simple para una alerta simple, incluso&nbsp;
            <a href="#">con enlaces.</a>
          </p>
        </div>
      ))}
    </div>
  );
};

SimpleHiperlink.story = {
  name: 'Con hipervínculo'
};

export const ListLinks = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      <div className="alert alert-danger fade show" role="alert">
        <p>
          <strong>Este es un destacado de una alerta (opcional). </strong>
        </p>
        <ol className="list-links">
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
      </div>
    </div>
  );
};

ListLinks.story = { name: 'Con lista descriptiva' };

export const List = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      <div className="alert alert-danger fade show" role="alert">
        <p>
          <strong>Este es un destacado de una alerta (opcional). </strong>
        </p>
        <ol>
          <li>
            <span>Un texto simple para un enlace en una lista de alerta</span>
          </li>

          <li>
            <span>Un texto simple para un enlace en una lista de alerta</span>
          </li>

          <li>
            <span>Un texto simple para un enlace en una lista de alerta</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

List.story = { name: 'Con lista de enlaces' };
