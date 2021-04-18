// Base
import React from 'react';
import './Card.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Tarjetas',
  decorators: [withA11y]
};

export const TitleSubtitleText = (): JSX.Element => {
  return (
    <div className="cards-container">
      <a className="card" href="#">
        <div className="card-body">
          <h4 className="card-title">Título de tarjeta</h4>
          <div className="card-subtitle">Subtítulo de tarjeta</div>
          <p className="card-text">
            Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.
          </p>
        </div>
        <div className="card-footer text-right">
          <small>Last updated 3 mins ago</small>
        </div>
      </a>
    </div>
  );
};
TitleSubtitleText.story = { name: 'Contenedor simple' };

export const Ícono = (): JSX.Element => {
  return (
    <div className="cards-container">
      <a className="card" href="#">
        <div className="card-body">
          <i className="bx bx-news card-icon text-info" />
          <h4 className="card-title">Título de tarjeta</h4>
          <p className="card-text">
            Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.
          </p>
        </div>
      </a>
    </div>
  );
};

export const TitleSubtitleLink = (): JSX.Element => {
  return (
    <div className="cards-container">
      <button className="card">
        <img src="cards/paseobajo.jpg" className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">Título Tarjeta</h4>
          <div className="card-subtitle">Subtítulo</div>
          <p className="card-text">
            Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.
          </p>
        </div>
      </button>
    </div>
  );
};
TitleSubtitleLink.story = { name: 'Contenedor con imagen' };

export const HorizontalCard = (): JSX.Element => {
  return (
    <div className="horizontal-container">
      <button className="card card-horizontal">
        <img src="cards/paseobajo-wide.png" className="card-img-left" width={168} />
        <div className="card-body">
          <h4 className="card-title">Título Tarjeta</h4>
          <p className="card-text">
            Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.
          </p>
        </div>
      </button>
    </div>
  );
};
HorizontalCard.story = { name: 'Contenedor con imagen horizontal' };

export const TitleTextLink = (): JSX.Element => {
  return (
    <div className="cards-container">
      <div className="card card-simple">
        <div className="card-body">
          <h4 className="card-title">
            <a href="#">Título Tarjeta</a>
          </h4>
          <p className="card-text">
            Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.
          </p>
        </div>
      </div>
    </div>
  );
};
TitleTextLink.story = { name: 'Sin contenedor' };

export const TitleIconTextLink = (): JSX.Element => {
  return (
    <div className="cards-container">
      <div className="card card-simple">
        <div className="card-body">
          <i className="bx bx-news card-icon text-success" />
          <h4 className="card-title">
            <a href="#">Título Tarjeta</a>
          </h4>
          <p className="card-text">
            Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.
          </p>
        </div>
      </div>
    </div>
  );
};
TitleIconTextLink.story = { name: 'Sin contenedor con ícono' };
