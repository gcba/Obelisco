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
        <a href="#" className="navbar-brand">
          <img className="header-logo" src="header/header-logo.svg" alt="Ciudad de Buenos Aires" />
        </a>
        <button
          className="navbar-toggler collapsed"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false">
          Menú <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                <span>Inicio</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span>Chateá con BOTI</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="btn btn-link">
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
        <a href="#" className="navbar-brand">
          <img className="header-logo" src="header/header-logo.svg" alt="Ciudad de Buenos Aires" />
        </a>
        <button
          className="navbar-toggler collapsed ml-auto"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false">
          Menú <span className="navbar-toggler-icon"></span>
        </button>
        <div className="list-group-content d-responsive ml-2">
          <a href="#" aria-label="Cerrar sesión" className="list-group-item list-group-item-logout logout-sm">
            &nbsp;
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                <span>Inicio</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span>Chateá con BOTI</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span>Mi actividad</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span>Mi cuenta</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" aria-label="Notificaciones" className="nav-link">
                <i className="bx bxs-bell"></i>
              </a>
            </li>
            <li className="nav-item d-responsive">
              <a href="#" aria-label="Cerrar sesión" className="list-group-item list-group-item-logout logout-sm">
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
