// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Accesos/Horizontal',
  decorators: [withA11y]
};

export const HorizontalAccess = (): JSX.Element => (
  <>
    <div className="list-group list-group-row">
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
  </>
);

HorizontalAccess.story = { name: 'Acceso horizontal' };

export const HorizontalAccessSmall = (): JSX.Element => (
  <>
    <div className="list-group list-group-row">
      <a href="#" className="list-group-item item-sm ">
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
  </>
);

HorizontalAccessSmall.story = {
  name: 'Acceso horizontal chico'
};

export const SmallHorizontalAccessDescription = (): JSX.Element => (
  <div className="list-group list-group-row">
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
);

SmallHorizontalAccessDescription.story = {
  name: 'Acceso horizontal chico con descripción'
};

export const HorizontalAccessWithIcon = (): JSX.Element => (
  <>
    <div className="list-group list-group-row">
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
    <div className="card-deck max-cards-2">
      <div className="group-access" style={{ width: '324px' }}>
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
      <div className="group-access" style={{ width: '324px' }}>
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
      <div className="group-access" style={{ width: '324px' }}>
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
  </>
);

HorizontalAccessWithIcon.story = {
  name: 'Acceso horizontal con ícono'
};

export const SmallHorizontalAccessWithIcon = (): JSX.Element => (
  <div className="list-group list-group-row">
    <a href="#" className="list-group-item item-sm">
      <span className="access-title">
        <i className="bx bx-sm align-middle mr-2 bxl-facebook-circle"></i>
        Acceso chico
      </span>
    </a>
    <a href="#" className="list-group-item item-sm ">
      <span className="access-title">
        <i className="bx bx-sm align-middle mr-2 bxl-instagram"></i>
        Acceso chico
      </span>
    </a>
    <a href="#" className="list-group-item item-sm ">
      <span className="access-title">
        <i className="bx bx-sm align-middle mr-2 bxl-twitter"></i>
        Acceso chico
      </span>
    </a>
    <a href="#" className="list-group-item item-sm ">
      <span className="access-title">
        <i className="bx bx-sm align-middle mr-2 bxl-youtube"></i>
        Acceso chico
      </span>
    </a>
  </div>
);

SmallHorizontalAccessWithIcon.story = {
  name: 'Acceso horizontal chico con ícono'
};
