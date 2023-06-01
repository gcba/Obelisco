// Base
import React from 'react';
import './Panel.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Panel/Chico/Vertical',
  decorators: [withA11y]
};

export const SmallPanelVerticalColors = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small">
      {/* Transparente */}
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
      </div>
      {/* Blanco */}
      <div className="card card-simple panel-sm bg-white">
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
      </div>
      {/* Grisulado */}
      <div className="card card-simple panel-sm bg-light">
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
      </div>
    </div>
  );
};

SmallPanelVerticalColors.story = { name: 'Con fondo' };

export const SmallPanelVerticalButtons = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small">
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
    </div>
  );
};

SmallPanelVerticalButtons.story = { name: 'Con botones' };

export const SmallPanelVerticalLink = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small">
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
    </div>
  );
};

SmallPanelVerticalLink.story = { name: 'Con enlace' };

export const SmallPanelVerticalListLink = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small">
      <div className="card card-simple panel-list-link">
        <img
          src="cards/paseobajo-wide.png"
          className="rounded-lg mb-4"
          width={154}
          height={154}
          alt="descripción alternativa"
        />
        <div className="card-body">
          <h3 className="card-title">Lista de enlaces con imagen</h3>
          <p className="card-text">
            Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.
          </p>
        </div>
        <div className="list-link">
          <a className="download card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
          <a className="download card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
          <a className="download card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
          <a className="download card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
          <a className="download card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
          <a className="download card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
        </div>
      </div>
    </div>
  );
};

SmallPanelVerticalListLink.story = { name: 'Con lista de enlaces' };

export const SmallPanelVerticalListDownloadButton = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-small">
      <div className="card card-simple panel-list-link">
        <img
          src="cards/paseobajo-wide.png"
          className="rounded-lg mb-4"
          width={154}
          height={154}
          alt="descripción alternativa"
        />
        <div className="card-body">
          <h3 className="card-title">Lista de enlaces con imagen</h3>
          <p className="card-text">
            Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.
          </p>
        </div>
        <div className="list-link">
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="btn btn-secondary btn-sm download-link card-link" href="#" target="_blank" rel="noreferrer">
            Descargar
          </a>
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="btn btn-secondary btn-sm download-link card-link" href="#" target="_blank" rel="noreferrer">
            Descargar
          </a>
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="btn btn-secondary btn-sm download-link card-link" href="#" target="_blank" rel="noreferrer">
            Descargar
          </a>
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="btn btn-secondary btn-sm download-link card-link" href="#" target="_blank" rel="noreferrer">
            Descargar
          </a>
        </div>
      </div>
    </div>
  );
};

SmallPanelVerticalListDownloadButton.story = { name: 'Con lista de botón de descarga' };
