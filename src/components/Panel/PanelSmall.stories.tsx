// Base
import React from 'react';
import './Panel.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración del general del componente
export default {
  title: 'Componentes|Panel',
  decorators: [withA11y]
};

export const SmallPanel = (): JSX.Element => {
  return (
    <div className="panel-container">
      <div className="card card-simple panel-sm">
        <img
          src="cards/paseobajo-wide.png"
          className="rounded-lg mb-4"
          width={154}
          height={154}
          alt="descripción alternativa"
        />
        <div className="card-body">
          <h3 className="card-title">Título de tarjeta</h3>
          <p className="card-text">
            Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.
          </p>
        </div>
        <div className="panel-footer">
          <button type="button" className="btn btn-secondary btn-sm card-link">
            Acción 1
          </button>
          <button type="button" className="btn btn-link btn-sm card-link">
            Acción 2
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="card card-simple panel-sm">
        <img
          src="cards/paseobajo-wide.png"
          className="rounded-lg mb-4"
          width={154}
          height={154}
          alt="descripción alternativa"
        />
        <div className="card-body">
          <h3 className="card-title">Título de tarjeta</h3>
        </div>
        <div className="panel-footer">
          <button type="button" className="btn btn-secondary btn-sm card-link">
            Acción 1
          </button>
          <button type="button" className="btn btn-link btn-sm card-link">
            Acción 2
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="card card-simple panel-sm">
        <div className="card-body">
          <h3 className="card-title">Título de tarjeta</h3>
          <p className="card-text">
            Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.
          </p>
        </div>
        <div className="panel-footer">
          <button type="button" className="btn btn-secondary btn-sm card-link">
            Acción 1
          </button>
          <button type="button" className="btn btn-link btn-sm card-link">
            Acción 2
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="card card-simple panel-sm">
        <img
          src="cards/paseobajo-wide.png"
          className="rounded-lg mb-4"
          width={154}
          height={154}
          alt="descripción alternativa"
        />
        <div className="card-body">
          <h3 className="card-title">Título de tarjeta</h3>
          <p className="card-text">
            Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.
          </p>
        </div>
        <div className="panel-footer">
          <a className="" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="card card-simple panel-sm">
        <div className="card-body">
          <h3 className="card-title">Título de tarjeta</h3>
          <p className="card-text">
            Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.
          </p>
        </div>
        <div className="panel-footer">
          <a className="" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
        </div>
      </div>
    </div>
  );
};

SmallPanel.story = { name: 'Panel destacado chico' };
