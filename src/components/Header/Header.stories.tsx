// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Header',
  decorators: [withA11y]
};

export const BusquedaCerrada = (): JSX.Element => {
  return (
    <header className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="header-logo" src="header/header-logo.svg" alt="Logo de la ciudad de buenos aires" />
        </a>
        <div className="navbar-search">
          <form className="form-inline">
            <input
              type="search"
              className="form-control input-search"
              id="name-input"
              name="name"
              placeholder="Buscar..."
            />
          </form>
        </div>
      </div>
    </header>
  );
};

BusquedaCerrada.story = {
  name: 'Búsqueda cerrada en mobile'
};

export const BusquedaAbierta = (): JSX.Element => {
  return (
    <header className="navbar navbar-light active-search">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="header-logo" src="header/header-logo.svg" alt="Logo de la ciudad de buenos aires" />
        </a>
        <div className="navbar-search">
          <form className="form-inline">
            <input
              type="search"
              className="form-control input-search"
              id="name-input"
              name="name"
              placeholder="Buscar..."
            />
          </form>
        </div>
      </div>
    </header>
  );
};

BusquedaAbierta.story = {
  name: 'Búsqueda abierta en mobile'
};
