// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Accesos/Vertical',
  decorators: [withA11y]
};

export const VerticalAccess = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      <a href="#" className="list-group-item">
        <span className="access-title">Acceso grande</span>
      </a>
      <a href="#" className="list-group-item hover">
        <span className="access-title">Acceso grande</span>
      </a>
      <a href="#" className="list-group-item focus">
        <span className="access-title">Acceso grande</span>
      </a>
      <a href="#" className="list-group-item list-group-item-logout">
        <span className="access-title">Cerrar sesión </span>
      </a>
    </div>
  </div>
);

VerticalAccess.story = {
  name: 'Acceso vertical'
};

export const VerticalAccessSmall = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">Acceso chico</span>
      </a>
      <a href="#" className="list-group-item item-sm hover">
        <span className="access-title">Acceso chico</span>
      </a>
      <a href="#" className="list-group-item item-sm focus">
        <span className="access-title">Acceso chico</span>
      </a>
      <a href="#" className="list-group-item item-sm list-group-item-logout">
        <span className="access-title">Cerrar sesión </span>
      </a>
    </div>
  </div>
);

VerticalAccessSmall.story = {
  name: 'Acceso vertical chico'
};

export const SmallVerticalAccessDescription = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      <a href="#" className="list-group-item item-sm">
        <div className="access-content">
          <span className="access-title">Acceso chico</span>
          <p className="access-text">Descripción</p>
        </div>
      </a>
      <a href="#" className="list-group-item item-sm hover">
        <div className="access-content">
          <span className="access-title">Acceso chico</span>
          <p className="access-text">Descripción</p>
        </div>
      </a>
      <a href="#" className="list-group-item item-sm focus">
        <div className="access-content">
          <span className="access-title">Acceso chico</span>
          <p className="access-text">Descripción</p>
        </div>
      </a>
    </div>
  </div>
);

SmallVerticalAccessDescription.story = {
  name: 'Acceso vertical chico con descripción'
};

export const VerticalAccessWithIcon = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      <a href="#" className="list-group-item">
        <span className="access-title">
          <i className="bx bx-sm align-middle mr-2 bxl-facebook-circle"></i>
          Acceso grande
        </span>
      </a>
      <a href="#" className="list-group-item">
        <span className="access-title">
          <i className="bx bx-sm align-middle mr-2 bxl-instagram"></i>
          Acceso grande
        </span>
      </a>
      <a href="#" className="list-group-item">
        <span className="access-title">
          <i className="bx bx-sm align-middle mr-2 bxl-twitter"></i>
          Acceso grande
        </span>
      </a>
      <a href="#" className="list-group-item">
        <span className="access-title">
          <i className="bx bx-sm align-middle mr-2 bxl-youtube"></i>
          Acceso grande
        </span>
      </a>
    </div>
    <div className="group-access">
      <div className="card-access">
        <div className="card-access-body">
          <div>
            <h3 className="card-access-title">Título</h3>
            <p className="card-access-text">Bajada</p>
          </div>
          <i className="bx bxs-shield-x card-access-icon"></i>
        </div>
        <a href="#" className="list-group-item card-item">
          <span className="access-title">Acceso grande</span>
        </a>
      </div>
    </div>
    <div className="group-access">
      <div className="card-access">
        <div className="card-access-body reverse">
          <div>
            <h3 className="card-access-title">Título</h3>
            <p className="card-access-text">Bajada</p>
          </div>
          <i className="bx bxs-shield-x card-access-icon"></i>
        </div>
        <a href="#" className="list-group-item card-item">
          <span className="access-title">Acceso grande</span>
        </a>
      </div>
    </div>
  </div>
);

VerticalAccessWithIcon.story = {
  name: 'Acceso vertical con ícono'
};

export const SmallVerticalAccessWithIcon = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bx-sm align-middle mr-2 bxl-facebook-circle"></i>
          Acceso chico
        </span>
      </a>
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bx-sm align-middle mr-2 bxl-instagram"></i>
          Acceso chico
        </span>
      </a>
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bx-sm align-middle mr-2 bxl-twitter"></i>
          Acceso chico
        </span>
      </a>
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bx-sm align-middle mr-2 bxl-youtube"></i>
          Acceso chico
        </span>
      </a>
    </div>
  </div>
);

SmallVerticalAccessWithIcon.story = {
  name: 'Acceso vertical chico con ícono'
};
