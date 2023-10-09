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

export const SearchNoLoginOneLine = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light navbar-expand-lg">
        <div className="container header-container">
          <a href="https://buenosaires.gob.ar" className="navbar-brand">
            <img className="header-logo" src="header/logotipo_ba.svg" alt="Inicio" />
          </a>
          <div className="navbar-login-mobile">
            <a
              className="btn btn-lg btn-icon btn-outline-link"
              href="#"
              target="_blank"
              aria-label="Acceder a mi cuenta">
              <span className="material-icons-round">login</span>
              <span className="btn-text">Acceder</span>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"></button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">
              <div className="navbar-sections">
                <nav aria-label="sections">
                  <h3 className="navbar-sections-title">Secciones</h3>
                  <ul className="nav nav-pills nav-sections">
                    <li className="dropdown">
                      <button
                        type="button"
                        className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        <span className="btn-dropdown-text">Navegación</span>
                        <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item item-link" href="#">
                          <span className="item-text">Navegación</span>
                          <span className="material-icons-round">arrow_forward</span>
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-link-lg" href="#">
                        <span>Navegación</span>
                      </a>
                    </li>
                    <li className="dropdown">
                      <button
                        type="button"
                        className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        <span className="btn-dropdown-text">Navegación</span>
                        <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item item-link" href="#">
                          <span className="item-text">Navegación</span>
                          <span className="material-icons-round">arrow_forward</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="navbar-search">
                <form className="form-search">
                  <div className="form-group">
                    <label className="sr-only" htmlFor="search-input">
                      Buscador
                    </label>
                    <input
                      type="search"
                      className="form-control input-search"
                      id="search-input"
                      name="name"
                      placeholder="Buscar en Buenos Aires"
                    />
                    <button className="reset" type="reset" aria-label="Borrar"></button>
                    <button className="submit-search" type="submit" aria-label="Buscar"></button>
                  </div>
                </form>
              </div>
              <div className="navbar-login">
                <a
                  className="btn btn-lg btn-icon btn-outline-link"
                  href="#"
                  target="_blank"
                  aria-label="Acceder a mi cuenta">
                  <span className="material-icons-round">login</span>
                  <span className="btn-text">Acceder</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
SearchNoLoginOneLine.story = {
  name: 'No Logueado con 1 línea'
};

export const SearchNoLoginTwoLines = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light navbar-expand-lg">
        <div className="container header-container">
          <a href="https://buenosaires.gob.ar" className="navbar-brand">
            <img className="header-logo" src="header/logotipo_ba.svg" alt="Inicio" />
          </a>
          <div className="navbar-login-mobile">
            <a
              className="btn btn-lg btn-icon btn-outline-link"
              href="#"
              target="_blank"
              aria-label="Acceder a mi cuenta">
              <span className="material-icons-round">login</span>
              <span className="btn-text">Acceder</span>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"></button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">
              <div className="navbar-sections">
                <nav aria-label="sections">
                  <h3 className="navbar-sections-title">Secciones</h3>
                  <ul className="nav nav-pills nav-sections">
                    <li className="dropdown">
                      <button
                        type="button"
                        className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        <span className="btn-dropdown-text">Navegación</span>
                        <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item item-link" href="#">
                          <span className="item-text">Navegación</span>
                          <span className="material-icons-round">arrow_forward</span>
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-link-lg" href="#">
                        <span>Navegación</span>
                      </a>
                    </li>
                    <li className="dropdown">
                      <button
                        type="button"
                        className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        <span className="btn-dropdown-text">Navegación</span>
                        <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item item-link" href="#">
                          <span className="item-text">Navegación</span>
                          <span className="material-icons-round">arrow_forward</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="navbar-search">
                <form className="form-search">
                  <div className="form-group">
                    <label className="sr-only" htmlFor="search-input">
                      Buscador
                    </label>
                    <input
                      type="search"
                      className="form-control input-search"
                      id="search-input"
                      name="name"
                      placeholder="Buscar en Buenos Aires"
                    />
                    <button className="reset" type="reset" aria-label="Borrar"></button>
                    <button className="submit-search" type="submit" aria-label="Buscar"></button>
                  </div>
                </form>
              </div>
              <div className="navbar-login">
                <a
                  className="btn btn-lg btn-icon btn-outline-link"
                  href="#"
                  target="_blank"
                  aria-label="Acceder a mi cuenta">
                  <span className="material-icons-round">login</span>
                  <span className="btn-text">Acceder</span>
                </a>
              </div>
            </div>
            <div className="navbar-content-extended">
              <nav aria-label="sections-extended">
                <h3 className="navbar-sections-title">Secciones</h3>
                <ul className="nav nav-pills nav-sections">
                  <li className="dropdown">
                    <button
                      type="button"
                      className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <span className="btn-dropdown-text">Navegación</span>
                      <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item item-link" href="#">
                        <span className="item-text">Navegación</span>
                        <span className="material-icons-round">arrow_forward</span>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="dropdown">
                    <button
                      type="button"
                      className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <span className="btn-dropdown-text">Navegación</span>
                      <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item item-link" href="#">
                        <span className="item-text">Navegación</span>
                        <span className="material-icons-round">arrow_forward</span>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
SearchNoLoginTwoLines.story = {
  name: 'No Logueado con 2 líneas'
};

export const SearchLoginOneLine = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light navbar-expand-lg">
        <div className="container header-container">
          <a href="https://buenosaires.gob.ar" className="navbar-brand">
            <img className="header-logo" src="header/logotipo_ba.svg" alt="Inicio" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"></button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">
              <div className="navbar-sections">
                <nav aria-label="sections">
                  <h3 className="navbar-sections-title">Secciones</h3>
                  <ul className="nav nav-pills nav-sections">
                    <li className="dropdown">
                      <button
                        type="button"
                        className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        <span className="btn-dropdown-text">Navegación</span>
                        <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item item-link" href="#">
                          <span className="item-text">Navegación</span>
                          <span className="material-icons-round">arrow_forward</span>
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-link-lg" href="#">
                        <span>Navegación</span>
                      </a>
                    </li>
                    <li className="dropdown">
                      <button
                        type="button"
                        className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        <span className="btn-dropdown-text">Navegación</span>
                        <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item item-link" href="#">
                          <span className="item-text">Navegación</span>
                          <span className="material-icons-round">arrow_forward</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="navbar-search">
                <form className="form-search">
                  <div className="form-group">
                    <label className="sr-only" htmlFor="search-input">
                      Buscador
                    </label>
                    <input
                      type="search"
                      className="form-control input-search"
                      id="search-input"
                      name="name"
                      placeholder="Buscar en Buenos Aires"
                    />
                    <button className="reset" type="reset" aria-label="Borrar"></button>
                    <button className="submit-search" type="submit" aria-label="Buscar"></button>
                  </div>
                </form>
              </div>
              <div className="navbar-user">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <span className="material-icons-round">person</span>
                    <span className="btn-dropdown-text">Perfil</span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">
                      <span className="item-text">Navegación 1</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <span className="item-text">Navegación 2</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <span className="item-text">Navegación 3</span>
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
            </div>
            <div className="navbar-user-mobile">
              <nav>
                <h3>Perfil</h3>
                <ul className="nav flex-column nav-pills nav-user">
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación 1</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación 2</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación 3</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Notificaciones</span>
                      <span className="item-notifications"></span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-danger nav-link-lg" href="#">
                      <div className="nav-icon">
                        <span className="material-icons-round">logout</span>
                        <span>Cerrar sesión</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
SearchLoginOneLine.story = {
  name: 'Logueado con 1 línea'
};

export const SearchLoginTwoLines = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light navbar-expand-lg">
        <div className="container header-container">
          <a href="https://buenosaires.gob.ar" className="navbar-brand">
            <img className="header-logo" src="header/logotipo_ba.svg" alt="Inicio" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"></button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">
              <div className="navbar-sections">
                <nav aria-label="sections">
                  <h3 className="navbar-sections-title">Secciones</h3>
                  <ul className="nav nav-pills nav-sections">
                    <li className="dropdown">
                      <button
                        type="button"
                        className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        <span className="btn-dropdown-text">Navegación</span>
                        <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item item-link" href="#">
                          <span className="item-text">Navegación</span>
                          <span className="material-icons-round">arrow_forward</span>
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-link-lg" href="#">
                        <span>Navegación</span>
                      </a>
                    </li>
                    <li className="dropdown">
                      <button
                        type="button"
                        className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        <span className="btn-dropdown-text">Navegación</span>
                        <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item item-link" href="#">
                          <span className="item-text">Navegación</span>
                          <span className="material-icons-round">arrow_forward</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="navbar-search">
                <form className="form-search">
                  <div className="form-group">
                    <label className="sr-only" htmlFor="search-input">
                      Buscador
                    </label>
                    <input
                      type="search"
                      className="form-control input-search"
                      id="search-input"
                      name="name"
                      placeholder="Buscar en Buenos Aires"
                    />
                    <button className="reset" type="reset" aria-label="Borrar"></button>
                    <button className="submit-search" type="submit" aria-label="Buscar"></button>
                  </div>
                </form>
              </div>
              <div className="navbar-user">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <span className="material-icons-round">person</span>
                    <span className="btn-dropdown-text">Perfil</span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">
                      <span className="item-text">Navegación 1</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <span className="item-text">Navegación 2</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <span className="item-text">Navegación 3</span>
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
            </div>
            <div className="navbar-content-extended">
              <nav aria-label="sections-extended">
                <h3 className="navbar-sections-title">Secciones</h3>
                <ul className="nav nav-pills nav-sections">
                  <li className="dropdown">
                    <button
                      type="button"
                      className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <span className="btn-dropdown-text">Navegación</span>
                      <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item item-link" href="#">
                        <span className="item-text">Navegación</span>
                        <span className="material-icons-round">arrow_forward</span>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="dropdown">
                    <button
                      type="button"
                      className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <span className="btn-dropdown-text">Navegación</span>
                      <span className="material-icons-round btn-dropdown-icon">expand_more</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item item-link" href="#">
                        <span className="item-text">Navegación</span>
                        <span className="material-icons-round">arrow_forward</span>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="navbar-user-mobile">
              <nav>
                <h3>Perfil</h3>
                <ul className="nav flex-column nav-pills nav-user">
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación 1</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación 2</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación 3</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Notificaciones</span>
                      <span className="item-notifications"></span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-danger nav-link-lg" href="#">
                      <div className="nav-icon">
                        <span className="material-icons-round">logout</span>
                        <span>Cerrar sesión</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
SearchLoginTwoLines.story = {
  name: 'Logueado con 2 líneas'
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
