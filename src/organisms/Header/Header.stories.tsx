// Base
import React from 'react';
import './Header.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Organismos|Header (encabezado)/Con buscador',
  decorators: [withA11y]
};

export const HeaderNoLogin = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light navbar-lg">
        <div className="container">
          <a className="navbar-brand collapse multi-collapse show" id="navbarBrand" href="#">
            <img className="header-logo" src="header/logotipo_ba.svg" alt="Logo de la Ciudad de Buenos Aires" />
          </a>
          <div className="navbar-btn-search">
            <button
              id="navbarTogglerBack"
              className="navbar-toggler btn-icon"
              data-toggle="collapse"
              data-target=".multi-collapse"
              aria-expanded="false"
              aria-controls="navbarBrand navbarToggler icon-search icon-close">
              <i className="bx bx-search collapse multi-collapse show"></i>
              <i className="bx bx-left-arrow-alt collapse multi-collapse"></i>
            </button>
            <div className="collapse multi-collapse" id="navbarSearch">
              <form className="form-search">
                <div className="form-group">
                  <input
                    type="search"
                    className="form-control input-search"
                    id="name-input"
                    name="name"
                    placeholder="Buscar en Buenos Aires..."
                  />
                  <button className="reset" type="reset"></button>
                </div>
              </form>
            </div>
          </div>
          <div className="collapse multi-collapse show" id="navbarToggler">
            <button
              className="navbar-toggler collapsed"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  <span>Sección 1</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <span>Sección 2</span>
                </a>
              </li>
              <li className="nav-item d-responsive">
                <div className="navbar-search">
                  <form className="form-search form-search-sm">
                    <div className="form-group">
                      <input
                        type="search"
                        className="form-control form-control-sm input-search"
                        id="header-search-example-2"
                        name="header-search"
                        placeholder="Buscar en Buenos Aires..."
                        aria-label="Ingrese su búsqueda"
                      />
                      <button className="reset" type="reset"></button>
                    </div>
                  </form>
                </div>
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
    </div>
  );
};

HeaderNoLogin.story = {
  name: 'No logueado'
};

export const HeaderLogin = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light navbar-lg">
        <div className="container">
          <a className="navbar-brand collapse multi-collapse show" id="navbarBrand" href="#">
            <img className="header-logo" src="header/logotipo_ba.svg" alt="Logo de la Ciudad de Buenos Aires" />
          </a>
          <div className="navbar-btn-search">
            <button
              id="navbarTogglerBack"
              className="navbar-toggler btn-icon"
              data-toggle="collapse"
              data-target=".multi-collapse"
              aria-expanded="false"
              aria-controls="navbarBrand navbarToggler icon-search icon-close">
              <i className="bx bx-search collapse multi-collapse show"></i>
              <i className="bx bx-left-arrow-alt collapse multi-collapse"></i>
            </button>
            <div className="collapse multi-collapse" id="navbarSearch">
              <form className="form-search">
                <div className="form-group">
                  <input
                    type="search"
                    className="form-control input-search"
                    id="name-input"
                    name="name"
                    placeholder="Buscar en Buenos Aires..."
                  />
                  <button className="reset" type="reset"></button>
                </div>
              </form>
            </div>
          </div>
          <div className="collapse multi-collapse show" id="navbarToggler">
            <button
              className="navbar-toggler collapsed"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  <span>Sección 1</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <span>Sección 2</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <span>Sección 3</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <span>Sección 4</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" aria-label="Notificaciones" className="nav-link notifications">
                  <span className="material-icons-round">notifications</span>
                  <span>Notificaciones</span>
                </a>
              </li>
              <li className="nav-item d-responsive">
                <div className="navbar-search">
                  <form className="form-search form-search-sm">
                    <div className="form-group">
                      <input
                        type="search"
                        className="form-control form-control-sm input-search"
                        id="header-search-example-4"
                        name="header-search"
                        aria-label="Ingrese su búsqueda"
                        placeholder="Buscar en Buenos Aires..."
                      />
                      <button className="reset" type="reset"></button>
                    </div>
                  </form>
                </div>
              </li>
              <li className="nav-item d-responsive-logout">
                <a href="#" aria-label="Cerrar sesión" className="list-group-item list-group-item-logout logout-sm">
                  &nbsp;
                </a>
                <a href="#" aria-label="Cerrar sesión" className=" list-group-item-logout logout-sm logout">
                  <span>Cerrar sesión</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

HeaderLogin.story = {
  name: 'Logueado'
};

export const WithDropdown = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light navbar-lg">
        <div className="container">
          <a className="navbar-brand collapse multi-collapse show" id="navbarBrand" href="#">
            <img className="header-logo" src="header/logotipo_ba.svg" alt="Logo de la Ciudad de Buenos Aires" />
          </a>
          <div className="navbar-btn-search">
            <button
              id="navbarTogglerBack"
              className="navbar-toggler btn-icon"
              data-toggle="collapse"
              data-target=".multi-collapse"
              aria-expanded="false"
              aria-controls="navbarBrand navbarToggler icon-search icon-close">
              <i className="bx bx-search collapse multi-collapse show"></i>
              <i className="bx bx-left-arrow-alt collapse multi-collapse"></i>
            </button>
            <div className="collapse multi-collapse" id="navbarSearch">
              <form className="form-search">
                <div className="form-group">
                  <input
                    type="search"
                    className="form-control input-search"
                    id="name-input"
                    name="name"
                    placeholder="Buscar en Buenos Aires..."
                  />
                  <button className="reset" type="reset"></button>
                </div>
              </form>
            </div>
          </div>
          <div className="collapse multi-collapse show" id="navbarToggler">
            <button
              className="navbar-toggler collapsed"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  <span>Inicio</span>
                </a>
              </li>
              <li className="nav-item d-responsive">
                <div className="navbar-search">
                  <form className="form-search form-search-sm">
                    <div className="form-group">
                      <input
                        type="search"
                        className="form-control form-control-sm input-search"
                        id="header-search-example-4"
                        name="header-search"
                        aria-label="Ingrese su búsqueda"
                        placeholder="Buscar en Buenos Aires..."
                      />
                      <button className="reset" type="reset"></button>
                    </div>
                  </form>
                </div>
              </li>
              <li className="nav-item">
                <a href="#" aria-label="Notificaciones" className="nav-link notifications">
                  <span className="material-icons-round">notifications</span>
                  <span>Notificaciones</span>
                </a>
              </li>
              <li className="nav-item nav-dropdown">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-dropdown btn-dropdown-lg"
                    data-toggle="collapse"
                    data-target="#dropdownContentRight"
                    aria-controls="dropdownContentRight"
                    aria-expanded="false"
                    aria-label="Toggle">
                    <i className="bx bxs-user"></i>
                    <span className="btn-dropdown-text">Max Power</span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right collapse" id="dropdownContentRight">
                    <div className="dropdown sub-dropdown">
                      <button
                        type="button"
                        className="btn btn-dropdown btn-dropdown-lg dropdown-toggle sub-btn-dropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                        <span className="item-text">Opciones</span>
                        <i className="bx bx-list-plus"></i>
                      </button>
                      <div className="dropdown-menu dropdown-menu-right sub-dropdown-menu">
                        <a className="dropdown-item sub-item" href="#">
                          <span className="item-text">Opción de navegación</span>
                        </a>
                        <a className="dropdown-item sub-item" href="#">
                          <span className="item-text">Opción de navegación</span>
                        </a>
                        <a className="dropdown-item sub-item" href="#">
                          <span className="item-text">Opción de navegación</span>
                        </a>
                      </div>
                    </div>
                    <a className="dropdown-item justify-content-between" href="#">
                      <span className="item-text">Mis turnos</span>
                      <i className="bx bxs-calendar"></i>
                    </a>
                    <a className="dropdown-item justify-content-between" href="#">
                      <span className="item-text">Mis documentos digitalizados</span>
                      <i className="bx bxs-file"></i>
                    </a>
                    <a className="dropdown-item justify-content-between" href="#">
                      <span className="item-text">Mi cuenta</span>
                      <i className="bx bxs-user-circle"></i>
                    </a>
                    <a className="dropdown-item item-danger justify-content-between" href="#">
                      <span className="item-text">Cerrar sesión</span>
                      <span className="material-icons-round">logout</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

WithDropdown.story = {
  name: 'Con desplegable'
};

//TODO: Eliminar las clases "justify-content-between" se corrige con un fix en la rama fix 1.51.0
