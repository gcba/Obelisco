// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Header/Sin Buscador',
  decorators: [withA11y]
};

export const HeaderNoLoginSearch = (): JSX.Element => {
  return (
    <header className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="header-logo" src="header/header-logo.svg" alt="Logo de la ciudad de buenos aires" />
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          Menú <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link nav-link-sm active">
                <span>Inicio</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-sm">
                <span>Chateá con BOTI</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-link">
                <span>Accedé a tu cuenta</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

HeaderNoLoginSearch.story = {
  name: 'No logueado'
};

export const HeaderLoginSearch = (): JSX.Element => {
  return (
    <header className="navbar navbar-light navbar-md">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="header-logo" src="header/header-logo.svg" alt="Logo de la ciudad de buenos aires" />
        </a>
        <button
          className="navbar-toggler collapsed ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          Menú <span className="navbar-toggler-icon"></span>
        </button>
        <div className="list-group-content d-responsive ml-2">
          <a href="#" aria-label="logout" className="list-group-item list-group-item-logout logout-sm">
            &nbsp;
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link nav-link-sm active">
                <span>Inicio</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-sm">
                <span>Chateá con BOTI</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-sm">
                <span>Mi actividad</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-sm">
                <span>Mi cuenta</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-sm">
                <i className="bx bxs-bell"></i>
              </a>
            </li>
            <li className="nav-item d-responsive">
              <a href="#" aria-label="logout" className="list-group-item list-group-item-logout logout-sm">
                &nbsp;
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

HeaderLoginSearch.story = {
  name: 'Logueado'
};
