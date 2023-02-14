// Base
import React from 'react';
import './Button.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Botones/En caja',
  decorators: [withA11y]
};

export const ConBoton = (): JSX.Element => {
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

ConBoton.story = { name: 'Con botón' };

export const ConEnlace = (): JSX.Element => {
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

ConEnlace.story = { name: 'Con enlace' };

export const Completo = (): JSX.Element => {
  return (
    <div className="btn-container">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Iniciá el trámite y completá todos los pasos</h4>
          <p className="card-text">Si tenés un trámite iniciado podés continuarlo desde acá.</p>
          <a className="btn btn-primary btn-block" href="#" target="_blank">
            Iniciar trámite
          </a>
        </div>
      </div>
    </div>
  );
};

Completo.story = {
  name: 'Con título y bajada'
};
