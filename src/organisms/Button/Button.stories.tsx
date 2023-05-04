// Base
import React from 'react';
import './Button.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Organismos|Botones',
  decorators: [withA11y]
};

export const ButtonBox = (): JSX.Element => {
  return (
    <div className="btn-container">
      <div className="card">
        <div className="card-body">
          <button type="button" className="btn btn-primary btn-block btn-sm">
            Botón
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <button type="button" className="btn btn-primary btn-block">
            Botón
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <button type="button" className="btn btn-primary btn-block btn-lg">
            Botón
          </button>
        </div>
      </div>
    </div>
  );
};

ButtonBox.story = { name: 'Con botón' };

export const ButtonBoxLink = (): JSX.Element => {
  return (
    <div className="btn-container">
      <div className="card">
        <div className="card-body">
          <a className="btn btn-primary btn-block btn-sm" href="#" target="_blank">
            Enlace
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <a className="btn btn-primary btn-block" href="#" target="_blank">
            Enlace
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <a className="btn btn-primary btn-block btn-lg" href="#" target="_blank">
            Enlace
          </a>
        </div>
      </div>
    </div>
  );
};

ButtonBoxLink.story = { name: 'Con enlace' };
