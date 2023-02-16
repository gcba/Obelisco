// Base
import React from 'react';
import './Link.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Enlace/Lista',
  decorators: [withA11y]
};

export const BtnDownload = (): JSX.Element => {
  return (
    <div className="panel-container">
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
        </div>
      </div>
      <br />
      <br />
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
        </div>
      </div>
      <br />
      <br />
      <div className="card card-simple panel-list-link">
        <div className="card-body">
          <h3 className="card-title">Lista de enlaces</h3>
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
        </div>
      </div>
    </div>
  );
};

BtnDownload.story = { name: 'Con botón de descarga' };

export const BtnLink = (): JSX.Element => {
  return (
    <div className="panel-container">
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
          <a className="card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
        </div>
      </div>
      <br />
      <br />
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
        </div>
        <div className="list-link">
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
        </div>
      </div>
      <br />
      <br />
      <div className="card card-simple panel-list-link">
        <div className="card-body">
          <h3 className="card-title">Lista de enlaces</h3>
          <p className="card-text">
            Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.
          </p>
        </div>
        <div className="list-link">
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
        </div>
      </div>
    </div>
  );
};

BtnLink.story = { name: 'Con enlace' };

export const BtnLinkDownload = (): JSX.Element => {
  return (
    <div className="panel-container">
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
          <a className="download card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="download card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="download card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
        </div>
      </div>
      <br />
      <br />
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
        </div>
        <div className="list-link">
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="download card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="download card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="download card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
        </div>
      </div>
      <br />
      <br />
      <div className="card card-simple panel-list-link">
        <div className="card-body">
          <h3 className="card-title">Lista de enlaces</h3>
          <p className="card-text">
            Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.
          </p>
        </div>
        <div className="list-link">
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="download card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="download card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
          <h4 className="list-link-item-title">Nombre del archivo</h4>
          <a className="download card-link" href="#" target="_blank" rel="noreferrer">
            Enlace
          </a>
        </div>
      </div>
    </div>
  );
};

BtnLinkDownload.story = { name: 'Con enlace de descarga' };
