// Base
import React from 'react';
import './List-group.stories.scss';

// Addons
import { withA11Y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Accesos',
  decorators: [withA11Y]
};

export const AccesoGrandeBorde = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">Acceso</span>
      </a>
      <a href="#" className="list-group-item item-sm hover">
        <span className="access-title">Acceso</span>
      </a>
      <a href="#" className="list-group-item item-sm active">
        <span className="access-title">Acceso</span>
      </a>
      <a href="#" className="list-group-item item-sm focus">
        <span className="access-title">Acceso</span>
      </a>
    </div>
  </div>
);

AccesoGrandeBorde.story = {
  name: 'Accesos con borde'
};

export const AccesoConDescripcion = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      <a href="#" className="list-group-item item-sm">
        <div className="access-content">
          <span className="access-title">Acceso</span>
          <p className="access-text">Descripción (Opcional)</p>
        </div>
      </a>
      <a href="#" className="list-group-item item-sm hover">
        <div className="access-content">
          <span className="access-title">Acceso</span>
          <p className="access-text">Descripción (Opcional)</p>
        </div>
      </a>
      <a href="#" className="list-group-item item-sm active">
        <div className="access-content">
          <span className="access-title">Acceso</span>
          <p className="access-text">Descripción (Opcional)</p>
        </div>
      </a>
      <a href="#" className="list-group-item item-sm focus">
        <div className="access-content">
          <span className="access-title">Acceso</span>
          <p className="access-text">Descripción (Opcional)</p>
        </div>
      </a>
    </div>
  </div>
);

AccesoConDescripcion.story = {
  name: 'Accesos con descripción'
};

export const AccesosConIcono = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      <a href="#" className="list-group-item item-sm">
        <i className="bx bxs-info-circle align-self-center"></i>
        <div className="access-content">
          <span className="access-title">Acceso</span>
          <p className="access-text">Descripción (Opcional)</p>
        </div>
      </a>
      <a href="#" className="list-group-item item-sm hover">
        <i className="bx bxs-info-circle align-self-center"></i>
        <div className="access-content">
          <span className="access-title">Acceso</span>
          <p className="access-text">Descripción (Opcional)</p>
        </div>
      </a>
      <a href="#" className="list-group-item item-sm active">
        <i className="bx bxs-info-circle align-self-center"></i>
        <div className="access-content">
          <span className="access-title">Acceso</span>
          <p className="access-text">Descripción (Opcional)</p>
        </div>
      </a>
      <a href="#" className="list-group-item item-sm focus">
        <i className="bx bxs-info-circle align-self-center"></i>
        <div className="access-content">
          <span className="access-title">Acceso</span>
          <p className="access-text">Descripción (Opcional)</p>
        </div>
      </a>
    </div>
  </div>
);

AccesosConIcono.story = {
  name: 'Accesos con ícono'
};

export const AccesosTamanos = (): JSX.Element => (
  <div className="list-group-container-sizes">
    <div className="list-group">
      <a href="#" className="list-group-item">
        <span className="access-title">Acceso grande</span>
      </a>
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">Acceso chico</span>
      </a>
    </div>
  </div>
);

AccesosTamanos.story = {
  name: 'Tamaños de accesos'
};
