// Base
import React from 'react';
import './Alert.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Alert, ListLinks, AlertFullWidthComponent } from '.';
import { alertHighlight, alertLink, alertTypes } from './index';
import { Card } from '../Card';

// Configuración general del componente
export default {
  title: 'Componentes|Alerta',
  decorators: [withA11y]
};

const BUTTONS_ALERT = [
  {
    name: 'Botón',
    className: 'btn btn-sm btn-link',
    url: '#'
  }
];
const BUTTONS_ALERT_COOKIE = [
  {
    name: 'Aceptar todo',
    className: 'btn btn-sm btn-link',
    url: '#'
  }
];
const BUTTONS_ALERT_ARR = [
  {
    name: 'Ver más',
    className: 'btn btn-sm btn-primary',
    url: '#'
  },
  {
    name: 'Ver más',
    className: 'btn btn-sm btn-secondary',
    url: '#'
  }
];

export const Simple = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      <Alert arrayAlerts={alertTypes} />
    </div>
  );
};

export const SimpleClose = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      <Alert arrayAlerts={alertTypes} isDismissible />
    </div>
  );
};

SimpleClose.story = {
  name: 'Con cierre'
};

export const SimpleHighlight = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      <Alert arrayAlerts={alertHighlight} />
    </div>
  );
};

SimpleHighlight.story = {
  name: 'Con destacado'
};

export const SimpleHiperlink = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      <Alert arrayAlerts={alertLink} />
    </div>
  );
};

SimpleHiperlink.story = {
  name: 'Con hipervínculo'
};

export const ListLinksExample = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      <ListLinks
        type="danger"
        text="<strong>Este es un destacado de una alerta de error.</strong> Esta es la descripción de una alerta de error que continua al texto destacado."
        textLink="Ancla al error"
        isListLinks
      />
    </div>
  );
};

ListLinksExample.story = { name: 'Con lista de enlaces' };

export const List = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      <ListLinks
        type="info"
        text="<strong>Este es un destacado de una alerta de información.</strong> Esta es la descripción de una alerta de información que continua al texto destacado."
        textLink="Texto descriptivo"
        isListLinks={false}
      />
    </div>
  );
};

List.story = { name: 'Con lista descriptiva' };

export const AlertFullWidthTest = (): JSX.Element => {
  return (
    <div className="storybook-container-alert-full-width">
      <AlertFullWidthComponent alertBgColor="info" buttons={BUTTONS_ALERT} />
      <AlertFullWidthComponent alertBgColor="dark" buttons={BUTTONS_ALERT} />
      <AlertFullWidthComponent alertBgColor="info" buttons={BUTTONS_ALERT_ARR} isDismissible={true} />
      <AlertFullWidthComponent isLink={true} isDismissible={true} />
      <AlertFullWidthComponent alertBgColor="info" isLink={true} isDismissible={true} />
      <AlertFullWidthComponent buttons={BUTTONS_ALERT_ARR} />
      <div className="alert alert-full-width alert-dismissible show fade" role="alert">
        <div className="alert-content bg-white rounded-lg">
          <h3>titulo</h3>
          <span className="material-icons-round">info</span>
          <ul>
            <li>prueba</li>
            <li>prueba</li>
            <li>prueba</li>
            <li>prueba</li>
            <li>prueba</li>
          </ul>
          <a href="#" className="btn btn primary text-right">
            Botón
          </a>
          <p>
            test con enlace <a href="#">enlace</a> y mas texto
          </p>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span className="material-icons-round">close</span>
          </button>
        </div>
      </div>
    </div>
  );
};
AlertFullWidthTest.story = { name: 'Ancho completo test' };

export const AlertFullWidth = (): JSX.Element => {
  return (
    <div className="storybook-container-alert-full-width">
      <AlertFullWidthComponent alertBgColor="info" isLink={true} />
      <AlertFullWidthComponent alertBgColor="info" />
      <AlertFullWidthComponent alertBgColor="info" buttons={BUTTONS_ALERT} />
      <AlertFullWidthComponent alertBgColor="info" isDismissible={true} />
      <AlertFullWidthComponent alertBgColor="dark" isLink={true} />
      <AlertFullWidthComponent alertBgColor="dark" />
      <AlertFullWidthComponent alertBgColor="dark" buttons={BUTTONS_ALERT} />
      <AlertFullWidthComponent alertBgColor="dark" isDismissible={true} />
      <AlertFullWidthComponent isCookie={true} buttons={BUTTONS_ALERT_COOKIE} />
    </div>
  );
};
AlertFullWidth.story = { name: 'Ancho completo' };

export const AlertFullWidthPosition = (): JSX.Element => {
  return (
    <div className="storybook-container-alert-full-width-placement">
      <div>
        <header className="navbar navbar-light navbar-md">
          <div className="container">
            <a href="#" className="navbar-brand">
              <img className="header-logo" src="header/LogoBA.svg" alt="Ciudad de buenos aires" />
            </a>
            <div className="navbar-search d-responsive ml-auto">
              <form className="form-search form-search-sm">
                <div className="form-group">
                  <input
                    type="search"
                    className="form-control form-control-sm input-search"
                    id="header-search-example-1"
                    name="header-search"
                    placeholder="Buscar..."
                    aria-label="Ingrese su búsqueda"
                  />
                  <button className="reset" type="reset"></button>
                </div>
              </form>
            </div>
            <button
              className="navbar-toggler collapsed ml-2"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false">
              <span className="navbar-toggler-icon"></span>
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
                <li className="nav-item d-responsive">
                  <div className="navbar-search">
                    <form className="form-search form-search-sm">
                      <div className="form-group">
                        <input
                          type="search"
                          className="form-control form-control-sm input-search"
                          id="header-search-example-2"
                          name="header-search"
                          placeholder="Buscar..."
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
        <div>
          <AlertFullWidthComponent alertBgColor="info" isDismissible={true} />
          <img src="cards/frame.png" alt="descripcion alternativa" />
        </div>
      </div>
      <div>
        <header className="navbar navbar-light navbar-md">
          <div className="container">
            <a href="#" className="navbar-brand">
              <img className="header-logo" src="header/LogoBA.svg" alt="Ciudad de buenos aires" />
            </a>
            <div className="navbar-search d-responsive ml-auto">
              <form className="form-search form-search-sm">
                <div className="form-group">
                  <input
                    type="search"
                    className="form-control form-control-sm input-search"
                    id="header-search-example-1"
                    name="header-search"
                    placeholder="Buscar..."
                    aria-label="Ingrese su búsqueda"
                  />
                  <button className="reset" type="reset"></button>
                </div>
              </form>
            </div>
            <button
              className="navbar-toggler collapsed ml-2"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false">
              <span className="navbar-toggler-icon"></span>
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
                <li className="nav-item d-responsive">
                  <div className="navbar-search">
                    <form className="form-search form-search-sm">
                      <div className="form-group">
                        <input
                          type="search"
                          className="form-control form-control-sm input-search"
                          id="header-search-example-2"
                          name="header-search"
                          placeholder="Buscar..."
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
        <div>
          <img src="cards/frame.png" alt="descripcion alternativa" />
          <AlertFullWidthComponent alertBgColor="info" buttons={BUTTONS_ALERT} />
        </div>
      </div>
    </div>
  );
};

AlertFullWidthPosition.story = { name: 'Ancho completo Posición' };

export const AlertFullWidthFixed = (): JSX.Element => {
  return (
    <div className="storybook-container-alert-full-width-placement">
      <div>
        <header className="navbar navbar-light navbar-md">
          <div className="container">
            <a href="#" className="navbar-brand">
              <img className="header-logo" src="header/LogoBA.svg" alt="Ciudad de buenos aires" />
            </a>
            <div className="navbar-search d-responsive ml-auto">
              <form className="form-search form-search-sm">
                <div className="form-group">
                  <input
                    type="search"
                    className="form-control form-control-sm input-search"
                    id="header-search-example-1"
                    name="header-search"
                    placeholder="Buscar..."
                    aria-label="Ingrese su búsqueda"
                  />
                  <button className="reset" type="reset"></button>
                </div>
              </form>
            </div>
            <button
              className="navbar-toggler collapsed ml-2"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false">
              <span className="navbar-toggler-icon"></span>
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
                <li className="nav-item d-responsive">
                  <div className="navbar-search">
                    <form className="form-search form-search-sm">
                      <div className="form-group">
                        <input
                          type="search"
                          className="form-control form-control-sm input-search"
                          id="header-search-example-2"
                          name="header-search"
                          placeholder="Buscar..."
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
        <div>
          <img className="w-100" src="cards/frame.png" alt="descripcion alternativa" />
          <div className="container py-5">
            <h2>H2 - Titular</h2>
            <div className="card-deck card-column max-cards-2">
              <Card
                title="Título de tarjeta"
                description="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
                picture={{
                  src: 'cards/paseobajo-wide.png',
                  alt: 'descripción alternativa'
                }}
                orientation="horizontal"
                className="card-lg"
                href="#"
              />
              <Card
                title="Título de tarjeta"
                description="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
                picture={{
                  src: 'cards/paseobajo-wide.png',
                  alt: 'descripción alternativa'
                }}
                orientation="horizontal"
                className="card-lg"
                href="#"
              />
              <Card
                title="Título de tarjeta"
                description="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
                picture={{
                  src: 'cards/paseobajo-wide.png',
                  alt: 'descripción alternativa'
                }}
                orientation="horizontal"
                className="card-lg"
                href="#"
              />
              <Card
                title="Título de tarjeta"
                description="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
                picture={{
                  src: 'cards/paseobajo-wide.png',
                  alt: 'descripción alternativa'
                }}
                orientation="horizontal"
                className="card-lg"
                href="#"
              />
            </div>
          </div>
        </div>
      </div>
      <AlertFullWidthComponent isCookie={true} buttons={BUTTONS_ALERT_COOKIE} isFixed={true} />
    </div>
  );
};
AlertFullWidthFixed.story = { name: 'Ancho completo Fixed' };
