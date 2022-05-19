// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Header/Con Buscador',
  decorators: [withA11y]
};

export const HeaderNoLogin = (): JSX.Element => {
  return (
    <header className="navbar navbar-light navbar-md">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="header-logo" src="header/header-logo.svg" alt="Logo de la ciudad de buenos aires" />
        </a>
        <div className="navbar-search d-responsive ml-auto">
          <form className="form-inline">
            <input
              type="search"
              className="form-control input-search"
              id="name-input-no-login-1"
              name="name"
              placeholder="Buscar..."
              aria-label="search"
            />
          </form>
        </div>
        <button
          className="navbar-toggler collapsed ml-2"
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
              <a type="button" className="nav-link nav-link-sm active">
                <span>Inicio</span>
              </a>
            </li>
            <li className="nav-item">
              <a type="button" className="nav-link nav-link-sm">
                <span>Chateá con BOTI</span>
              </a>
            </li>
            <li className="nav-item d-responsive">
              <div className="navbar-search">
                <form className="form-inline">
                  <input
                    type="search"
                    className="form-control input-search"
                    id="name-input-no-login-2"
                    name="name"
                    placeholder="Buscar..."
                    aria-label="search"
                  />
                </form>
              </div>
            </li>
            <li className="nav-item">
              <a type="button" className="btn btn-link">
                <span>Accedé a tu cuenta</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

HeaderNoLogin.story = {
  name: 'No logueado'
};

export const HeaderLogin = (): JSX.Element => {
  return (
    <header className="navbar navbar-light navbar-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="header-logo" src="header/header-logo.svg" alt="Logo de la ciudad de buenos aires" />
        </a>
        <div className="navbar-search d-responsive ml-auto">
          <form className="form-inline">
            <input
              type="search"
              className="form-control input-search"
              id="name-input-login-1"
              name="name"
              placeholder="Buscar..."
              aria-label="search"
            />
          </form>
        </div>
        <button
          className="navbar-toggler collapsed ml-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          Menú <span className="navbar-toggler-icon"></span>
        </button>
        <div className="list-group-content d-responsive ml-2">
          <a href="#" aria-label="logout" className="list-group-item list-group-item-logout">
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
              <div className="navbar-search">
                <form className="form-inline">
                  <input
                    type="search"
                    className="form-control input-search"
                    id="name-input-login-2"
                    name="name"
                    placeholder="Buscar..."
                    aria-label="search"
                  />
                </form>
              </div>
            </li>
            <li className="nav-item d-responsive">
              <a href="#" aria-label="logout" className="list-group-item list-group-item-logout">
                &nbsp;
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

HeaderLogin.story = {
  name: 'Logueado'
};
