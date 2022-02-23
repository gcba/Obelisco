import React from 'react';
import { withA11Y } from '@storybook/addon-a11y';

//config
export default {
  title: 'Componentes|Customize Header',
  decorators: [withA11Y]
};

export const CustomizeHeader = (): JSX.Element => {
  const HEADERS = [
    {
      name: 'No logueado',
      secondName: 'Sin buscador',
      isLoggedIn: false,
      isSearch: false
    },
    {
      name: '',
      secondName: 'Sin buscador',
      isLoggedIn: false,
      isSearch: true
    },
    {
      name: 'Logueado',
      secondName: 'Sin buscador',
      isLoggedIn: true,
      isSearch: false
    },
    {
      name: '',
      secondName: 'Con buscador',
      isLoggedIn: true,
      isSearch: true
    }
  ];
  return (
    <div>
      {HEADERS.map(({ name, secondName, isLoggedIn, isSearch }, index) => (
        <div className="mt-5" key={index}>
          <h4>{name}</h4>
          <h4 className="text-danger">{secondName}</h4>
          <header className="navbar navbar-light">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img className="header-logo" src="header/header-logo.svg" alt="Logo de la ciudad de buenos aires" />
              </a>
              <div className="navbar-search">
                <a className="btn btn-info">Inicio</a>
                <a className="btn btn-light">Chateá con BOTI</a>
                {isLoggedIn && <a className="btn btn-light">Mi actividad</a>}
                {isLoggedIn && <a className="btn btn-light">Mi cuenta</a>}
                {isLoggedIn && (
                  <a className="btn btn-light">
                    <i className="bx bxs-bell"></i>
                  </a>
                )}

                {isSearch && (
                  <form className="form-inline">
                    <input
                      type="search"
                      className="form-control input-search"
                      id="name-input"
                      name="name"
                      placeholder="Buscar..."
                    />
                  </form>
                )}
                {!isLoggedIn && <a className="btn btn-link">Accedé a tu cuenta</a>}
                {isLoggedIn && (
                  <a className="btn btn-outline-danger">
                    <i className="bx bx-log-out icon-log-out "></i>
                  </a>
                )}
              </div>
            </div>
          </header>
        </div>
      ))}
    </div>
  );
};

export const CustomizeHeaderMobile = (): JSX.Element => {
  const HEADERS = [
    {
      name: 'No logueado',
      secondName: 'Sin buscador',
      isLoggedIn: false,
      isSearch: false
    },
    {
      name: '',
      secondName: 'Sin buscador',
      isLoggedIn: false,
      isSearch: true
    },
    {
      name: 'Logueado',
      secondName: 'Sin buscador',
      isLoggedIn: true,
      isSearch: false
    },
    {
      name: '',
      secondName: 'Con buscador',
      isLoggedIn: true,
      isSearch: true
    }
  ];
  return (
    <div>
      {HEADERS.map(({ name, secondName, isLoggedIn, isSearch }, index) => (
        <div className="mt-5" key={index}>
          <h4>{name}</h4>
          <h4 className="text-danger">{secondName}</h4>
          <header className="navbar navbar-light">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img className="header-logo" src="header/header-logo.svg" alt="Logo de la ciudad de buenos aires" />
              </a>
              <div className="navbar-search">
                {isSearch && (
                  <form className="form-inline">
                    <input
                      style={{ width: 0, padding: '0 1.25rem' }}
                      type="search"
                      className="form-control input-search"
                      id="name-input"
                      name="name"
                      placeholder="Buscar..."
                    />
                  </form>
                )}
                <button
                  className="navbar-toggler btn btn-collapse"
                  type="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  data-toggle="collapse"
                  data-target={`#${index}`}>
                  <span>Menú</span>
                  <span className="navbar-toggler-icon"></span>
                </button>
                {isLoggedIn && (
                  <a className="btn btn-outline-danger">
                    <i className="bx bx-log-out icon-log-out "></i>
                  </a>
                )}
              </div>
            </div>
          </header>
          <div className="collapse bg-light collapse-height p-4 " id={`${index}`}>
            <div className="navbar-collapse  ">
              <a className="btn btn-info">Inicio</a>
              <a className="btn btn-light">Chateá con BOTI</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CustomizeHeaderSearcher = (): JSX.Element => {
  const HEADERS = [
    {
      name: 'Buscador seleccionado'
    },
    {
      name: 'Busqueda realizada',
      style: 'completed'
    }
  ];
  return (
    <div>
      {HEADERS.map(({ name, style }, index) => (
        <div className="mt-5" key={index}>
          <h4 className="text-danger">{name}</h4>
          <header className="navbar navbar-light">
            <form className="form-inline">
              <input
                type="search"
                className={`form-control input-search ${style}`}
                id="name-input"
                name="name"
                placeholder="Buscar..."
              />
            </form>
          </header>
        </div>
      ))}
    </div>
  );
};
