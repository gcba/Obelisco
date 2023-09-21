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

/* export const HeaderNoLogin = (): JSX.Element => {
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
              aria-controls="navbarBrand navbarToggler">
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
              aria-controls="navbarBrand navbarToggler">
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
}; */

export const SearchNoLogin = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light">
        <div className="container" id="collapsed-items2">
          <a href="#" className="navbar-brand">
            <img className="header-logo" src="header/header_logotipo_ba.svg" alt="Inicio" />
          </a>
          <div className="navbar-sections-dropdown">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
                data-toggle="collapse"
                data-target="#dropdownSections"
                aria-controls="dropdownSections"
                aria-expanded="false"
                aria-label="Toggle">
                <span className="btn-dropdown-text">Menú</span>
                <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                <span className="material-icons-round btn-dropdown-icon-mobile">menu</span>
                <span className="sr-only">Menú</span>
              </button>
              <div className="dropdown-menu collapse" id="dropdownSections" data-parent="#collapsed-items2">
                <div className="dropdown sub-dropdown">
                  <button
                    type="button"
                    className="btn btn-dropdown btn-dropdown-lg dropdown-toggle sub-btn-dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <span className="item-text">Opción en cascada</span>
                    <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                  </button>
                  <div className="dropdown-menu sub-dropdown-menu">
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
                <a className="dropdown-item" href="#">
                  <span className="item-text">Sección 1</span>
                </a>
                <a className="dropdown-item" href="#">
                  <span className="item-text">Sección 2</span>
                </a>
                <a className="dropdown-item" href="#">
                  <span className="item-text">Sección 3</span>
                </a>
                <a className="dropdown-item" href="#">
                  <span className="item-text">Sección 4</span>
                </a>
                <a className="dropdown-item" href="#">
                  <span className="item-text">Sección 5</span>
                </a>
              </div>
            </div>
          </div>
          <button
            className="navbar-toggler collapsed navbar-search-btn"
            data-toggle="collapse"
            data-target="#navbarSearch2"
            aria-controls="navbarSearch2"
            aria-expanded="false"
            aria-label="Buscador">
            <i className="bx bx-search"></i>
          </button>
          <div className="navbar-user-btn">
            <a
              className="btn btn-lg btn-icon btn-outline-link"
              href="#"
              target="_blank"
              aria-label="Acceder a mi cuenta">
              <span className="material-icons-round">login</span>
              <span className="btn-text">Acceder</span>
            </a>
          </div>
          <div className="collapse navbar-collapse navbar-search" id="navbarSearch2" data-parent="#collapsed-items2">
            <div className="nav nav-search-content">
              <form className="form-search">
                <div className="form-group">
                  <input
                    type="search"
                    className="form-control input-search"
                    id="name-input3"
                    name="name"
                    aria-label="Buscar en Buenos Aires - 3"
                    placeholder="Buscar en Buenos Aires..."
                  />
                  <button className="reset" type="reset"></button>
                  <button className="btn btn-secondary btn-icon btn-submit" type="submit">
                    <span className="material-icons-round">east</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
      <header className="navbar navbar-light">
        <div className="container" id="collapsed-items1">
          <a href="#" className="navbar-brand">
            <img className="header-logo" src="header/header_logotipo_ba.svg" alt="Inicio" />
          </a>
          <button
            className="navbar-toggler collapsed navbar-sections-btn"
            data-toggle="collapse"
            data-target="#navbarSections"
            aria-controls="navbarSections"
            aria-expanded="false"
            aria-label="Menú">
            <i className="bx bx-menu"></i>
          </button>
          <button
            className="navbar-toggler collapsed navbar-search-btn"
            data-toggle="collapse"
            data-target="#navbarSearch1"
            aria-controls="navbarSearch1"
            aria-expanded="false"
            aria-label="Buscador">
            <i className="bx bx-search"></i>
          </button>
          <div className="navbar-user-btn">
            <a
              className="btn btn-lg btn-icon btn-outline-link"
              href="#"
              target="_blank"
              aria-label="Acceder a mi cuenta">
              <span className="material-icons-round">login</span>
              <span className="btn-text">Acceder</span>
            </a>
          </div>
          <div className="collapse navbar-collapse navbar-sections" id="navbarSections" data-parent="#collapsed-items1">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-lg">
                  <span>Sección 1</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-lg active">
                  <span>Sección 2</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-lg">
                  <span>Sección 3</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-lg">
                  <span>Sección 4</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse navbar-search" id="navbarSearch1" data-parent="#collapsed-items1">
            <div className="nav nav-search-content">
              <form className="form-search">
                <div className="form-group">
                  <input
                    type="search"
                    className="form-control input-search"
                    id="name-input2"
                    name="name"
                    aria-label="Buscar en Buenos Aires - 2"
                    placeholder="Buscar en Buenos Aires..."
                  />
                  <button className="reset" type="reset"></button>
                  <button className="btn btn-secondary btn-icon btn-submit" type="submit">
                    <span className="material-icons-round">east</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
      <header className="navbar navbar-light">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img className="header-logo" src="header/header_logotipo_ba.svg" alt="Inicio" />
          </a>
          <button
            className="navbar-toggler collapsed navbar-search-btn"
            data-toggle="collapse"
            data-target="#navbarSearch"
            aria-controls="navbarSearch"
            aria-expanded="false"
            aria-label="Buscador">
            <i className="bx bx-search"></i>
          </button>
          <div className="navbar-user-btn">
            <a
              className="btn btn-lg btn-icon btn-outline-link"
              href="#"
              target="_blank"
              aria-label="Acceder a mi cuenta">
              <span className="material-icons-round">login</span>
              <span className="btn-text">Acceder</span>
            </a>
          </div>
          <div className="collapse navbar-collapse navbar-search" id="navbarSearch">
            <div className="nav nav-search-content">
              <form className="form-search">
                <div className="form-group">
                  <input
                    type="search"
                    className="form-control input-search"
                    id="name-input1"
                    name="name"
                    aria-label="Buscar en Buenos Aires - 1"
                    placeholder="Buscar en Buenos Aires..."
                  />
                  <button className="reset" type="reset"></button>
                  <button className="btn btn-secondary btn-icon btn-submit" type="submit">
                    <span className="material-icons-round">east</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
SearchNoLogin.story = {
  name: 'No logueado'
};

export const SearchLogin = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light">
        <div className="container" id="collapsed-items3">
          <a href="#" className="navbar-brand">
            <img className="header-logo" src="header/header_logotipo_ba.svg" alt="Inicio" />
          </a>
          <div className="navbar-sections-dropdown">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
                data-toggle="collapse"
                data-target="#dropdownSections"
                aria-controls="dropdownSections"
                aria-expanded="false"
                aria-label="Toggle">
                <span className="btn-dropdown-text">Menú</span>
                <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                <span className="material-icons-round btn-dropdown-icon-mobile">menu</span>
                <span className="sr-only">Menú</span>
              </button>
              <div className="dropdown-menu collapse" id="dropdownSections" data-parent="#collapsed-items3">
                <div className="dropdown sub-dropdown">
                  <button
                    type="button"
                    className="btn btn-dropdown btn-dropdown-lg dropdown-toggle sub-btn-dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <span className="item-text">Opción en cascada</span>
                    <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                  </button>
                  <div className="dropdown-menu sub-dropdown-menu">
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
                <a className="dropdown-item" href="#">
                  <span className="item-text">Sección 1</span>
                </a>
                <a className="dropdown-item" href="#">
                  <span className="item-text">Sección 2</span>
                </a>
                <a className="dropdown-item" href="#">
                  <span className="item-text">Sección 3</span>
                </a>
                <a className="dropdown-item" href="#">
                  <span className="item-text">Sección 4</span>
                </a>
                <a className="dropdown-item" href="#">
                  <span className="item-text">Sección 5</span>
                </a>
              </div>
            </div>
          </div>
          <button
            className="navbar-toggler collapsed navbar-search-btn"
            data-toggle="collapse"
            data-target="#navbarSearch3"
            aria-controls="navbarSearch3"
            aria-expanded="false"
            aria-label="Buscador">
            <i className="bx bx-search"></i>
          </button>
          <div className="navbar-user-dropdown">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
                data-toggle="collapse"
                data-target="#dropdownUser3"
                aria-controls="dropdownUser3"
                aria-expanded="false"
                aria-label="Toggle">
                <span className="material-icons-round">person</span>
                <span className="btn-dropdown-text">Martina Pérez Leloir</span>
                <span className="sr-only">Mi perfil</span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-right collapse "
                id="dropdownUser3"
                data-parent="#collapsed-items3">
                <div className="dropdown sub-dropdown">
                  <button
                    type="button"
                    className="btn btn-dropdown btn-dropdown-lg dropdown-toggle sub-btn-dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                    <span className="item-text">Opción en cascada</span>
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
                <a className="dropdown-item" href="#">
                  <span className="item-text">Opción de navegación</span>
                </a>
                <a className="dropdown-item" href="#">
                  <span className="item-text">Opción de navegación</span>
                </a>
                <a className="dropdown-item" href="#">
                  <span className="item-text">Notificaciones</span>
                  <span className="item-notifications"></span>
                </a>
                <a className="dropdown-item item-danger" href="#">
                  <span className="item-text">Cerrar sesión</span>
                  <span className="material-icons-round">logout</span>
                </a>
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse navbar-search" id="navbarSearch3" data-parent="#collapsed-items3">
            <div className="nav nav-search-content">
              <form className="form-search">
                <div className="form-group">
                  <input
                    type="search"
                    className="form-control input-search"
                    id="name-input3"
                    name="name"
                    aria-label="Buscar en Buenos Aires - 3"
                    placeholder="Buscar en Buenos Aires..."
                  />
                  <button className="reset" type="reset"></button>
                  <button className="btn btn-secondary btn-icon btn-submit" type="submit">
                    <span className="material-icons-round">east</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
      <header className="navbar navbar-light">
        <div className="container" id="collapsed-items2">
          <a href="#" className="navbar-brand">
            <img className="header-logo" src="header/header_logotipo_ba.svg" alt="Inicio" />
          </a>
          <button
            className="navbar-toggler collapsed navbar-sections-btn"
            data-toggle="collapse"
            data-target="#navbarSections"
            aria-controls="navbarSections"
            aria-expanded="false"
            aria-label="Menu">
            <i className="bx bx-menu"></i>
          </button>
          <button
            className="navbar-toggler collapsed navbar-search-btn"
            data-toggle="collapse"
            data-target="#navbarSearch2"
            aria-controls="navbarSearch2"
            aria-expanded="false"
            aria-label="Buscador">
            <i className="bx bx-search"></i>
          </button>
          <div className="navbar-user-dropdown">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
                data-toggle="collapse"
                data-target="#dropdownUser2"
                aria-controls="dropdownUser2"
                aria-expanded="false"
                aria-label="Toggle">
                <span className="material-icons-round">person</span>
                <span className="btn-dropdown-text">Martina Pérez Leloir</span>
                <span className="sr-only">Mi perfil</span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-right collapse "
                id="dropdownUser2"
                data-parent="#collapsed-items2">
                <div className="dropdown sub-dropdown">
                  <button
                    type="button"
                    className="btn btn-dropdown btn-dropdown-lg dropdown-toggle sub-btn-dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                    <span className="item-text">Opción en cascada</span>
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
                <a className="dropdown-item" href="#">
                  <span className="item-text">Opción de navegación</span>
                </a>
                <a className="dropdown-item" href="#">
                  <span className="item-text">Opción de navegación</span>
                </a>
                <a className="dropdown-item" href="#">
                  <span className="item-text">Notificaciones</span>
                  <span className="item-notifications"></span>
                </a>
                <a className="dropdown-item item-danger" href="#">
                  <span className="item-text">Cerrar sesión</span>
                  <span className="material-icons-round">logout</span>
                </a>
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse navbar-sections" id="navbarSections" data-parent="#collapsed-items2">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-lg">
                  <span>Sección 1</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-lg active">
                  <span>Sección 2</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-lg">
                  <span>Sección 3</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-lg">
                  <span>Sección 4</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse navbar-search" id="navbarSearch2" data-parent="#collapsed-items2">
            <div className="nav nav-search-content">
              <form className="form-search">
                <div className="form-group">
                  <input
                    type="search"
                    className="form-control input-search"
                    id="name-input2"
                    name="name"
                    aria-label="Buscar en Buenos Aires - 2"
                    placeholder="Buscar en Buenos Aires..."
                  />
                  <button className="reset" type="reset"></button>
                  <button className="btn btn-secondary btn-icon btn-submit" type="submit">
                    <span className="material-icons-round">east</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
      <header className="navbar navbar-light">
        <div className="container" id="collapsed-items1">
          <a href="#" className="navbar-brand">
            <img className="header-logo" src="header/header_logotipo_ba.svg" alt="Inicio" />
          </a>
          <button
            className="navbar-toggler collapsed navbar-search-btn"
            data-toggle="collapse"
            data-target="#navbarSearch1"
            aria-controls="navbarSearch1"
            aria-expanded="false"
            aria-label="Buscador">
            <i className="bx bx-search"></i>
          </button>
          <div className="navbar-user-dropdown">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border collapsed"
                data-toggle="collapse"
                data-target="#dropdownUser1"
                aria-controls="dropdownUser1"
                aria-expanded="false"
                aria-label="Toggle">
                <span className="material-icons-round">person</span>
                <span className="btn-dropdown-text">Martina Pérez Leloir</span>
                <span className="sr-only">Mi perfil</span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-right collapse"
                id="dropdownUser1"
                data-parent="#collapsed-items1">
                <div className="dropdown sub-dropdown">
                  <button
                    type="button"
                    className="btn btn-dropdown btn-dropdown-lg dropdown-toggle sub-btn-dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                    <span className="item-text">Opción en cascada</span>
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
                <a className="dropdown-item" href="#">
                  <span className="item-text">Opción de navegación</span>
                </a>
                <a className="dropdown-item" href="#">
                  <span className="item-text">Opción de navegación</span>
                </a>
                <a className="dropdown-item" href="#">
                  <span className="item-text">Notificaciones</span>
                  <span className="item-notifications"></span>
                </a>
                <a className="dropdown-item item-danger" href="#">
                  <span className="item-text">Cerrar sesión</span>
                  <span className="material-icons-round">logout</span>
                </a>
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse navbar-search" id="navbarSearch1" data-parent="#collapsed-items1">
            <div className="nav nav-search-content">
              <form className="form-search">
                <div className="form-group">
                  <input
                    type="search"
                    className="form-control input-search"
                    id="name-input1"
                    name="name"
                    aria-label="Buscar en Buenos Aires - 1"
                    placeholder="Buscar en Buenos Aires..."
                  />
                  <button className="reset" type="reset"></button>
                  <button className="btn btn-secondary btn-icon btn-submit" type="submit">
                    <span className="material-icons-round">east</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
SearchLogin.story = {
  name: 'Logueado'
};
