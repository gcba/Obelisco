// Base
import React from 'react';
import './Alert.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { alertHighlight, alertLink, alertTypes } from '../utils';

// Configuración general del componente
export default {
  title: 'Componentes|Alerta',
  decorators: [withA11y]
};

export const Simple = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      {alertTypes.map(({ type, text }) => (
        <div key={type} className={`alert alert-${type}`} role="alert">
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export const SimpleClose = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      {alertTypes.map(({ type, text }) => (
        <div key={type} className={`alert alert-${type} alert-dismissible show fade`} role="alert">
          <p>{text}</p>
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

const alertTypesHighlight = alertTypes.map(({ type }) => {
  const alert = alertHighlight.find((a) => a.type === type);
  return { type, text: alert && alert.text };
});

export const SimpleHighlight = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      {alertTypesHighlight.map(({ type, text }) => (
        <div key={type} className={`alert alert-${type}`} role="alert">
          {text && <p dangerouslySetInnerHTML={{ __html: text }}></p>}
        </div>
      ))}
    </div>
  );
};

SimpleHighlight.story = {
  name: 'Con destacado'
};

const alertTypesLink = alertTypes.map(({ type }) => {
  const alert = alertLink.find((a) => a.type === type);
  return { type, text: alert && alert.text };
});

export const SimpleHiperlink = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      {alertTypesLink.map(({ type, text }) => (
        <div key={type} className={`alert alert-${type}`} role="alert">
          {text && <p dangerouslySetInnerHTML={{ __html: text }}></p>}
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
          <strong>Este es un destacado de una alerta de error.</strong> Esta es la descripción de una alerta de error
          que continua al texto destacado.
        </p>
        <ol className="list-links">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <li key={i}>
              <a href="#">Ancla al error {i + 1}</a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

ListLinks.story = { name: 'Con lista de enlaces' };

export const List = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      <div className="alert alert-info fade show" role="alert">
        <p>
          <strong>Este es un destacado de una alerta de información.</strong> Esta es la descripción de una alerta de
          información que continua al texto destacado.
        </p>
        <ol>
          {[1, 2, 3, 4, 5].map((_, i) => (
            <li key={i}>
              <span>Texto descriptivo</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

List.story = { name: 'Con lista descriptiva' };
