// Base
import React from 'react';
import './Header.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Organismos|Header (encabezado)/Sin buscador',
  decorators: [withA11y]
};

export const NoLoginOneLine = (): JSX.Element => {
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
NoLoginOneLine.story = {
  name: 'No Logueado con 1 línea'
};
export const NoLoginTwoLines = (): JSX.Element => {
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
NoLoginTwoLines.story = {
  name: 'No Logueado con 2 líneas'
};
export const LoginOneLine = (): JSX.Element => {
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
                <h3 className="navbar-user-mobile-title">Perfil</h3>
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
LoginOneLine.story = {
  name: 'Logueado con 1 línea'
};
export const LoginTwoLines = (): JSX.Element => {
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
                <h3 className="navbar-user-mobile-title">Perfil</h3>
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
LoginTwoLines.story = {
  name: 'Logueado con 2 líneas'
};

export const OneLine = (): JSX.Element => {
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
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
OneLine.story = {
  name: 'Sin logueo'
};
