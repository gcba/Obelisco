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
    <header className="navbar navbar-light search-active">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="d-none d-md-inline" src="header/header-logo.png" alt="Logo de la ciudad de buenos aires" />
          <img className="d-md-none" src="header/header-logo-sm.png" alt="Logo de la ciudad de buenos aires" />
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
          <img className="d-none d-md-inline" src="header/header-logo.png" alt="Logo de la ciudad de buenos aires" />
          <img className="d-md-none" src="header/header-logo-sm.png" alt="Logo de la ciudad de buenos aires" />
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
