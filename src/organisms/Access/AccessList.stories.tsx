// Base
import React from 'react';
import './Access.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Organismos|Acceso/Lista de accesos',
  decorators: [withA11y]
};

export const Horizontal = (): JSX.Element => (
  <div className="list-group list-group-row">
    <a href="#" className="list-group-item item-sm">
      <span className="access-title">
        <i className="bx bxs-info-circle"></i>
        Acceso
      </span>
    </a>
    <a href="#" className="list-group-item item-sm">
      <span className="access-title">
        <i className="bx bxs-info-circle"></i>
        Acceso
      </span>
    </a>
    <a href="#" className="list-group-item item-sm">
      <span className="access-title">
        <i className="bx bxs-info-circle"></i>
        Acceso
      </span>
    </a>
    <a href="#" className="list-group-item item-sm">
      <span className="access-title">
        <i className="bx bxs-info-circle"></i>
        Acceso
      </span>
    </a>
  </div>
);

export const Vertical = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bxs-info-circle"></i>
          Acceso
        </span>
      </a>
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bxs-info-circle"></i>
          Acceso
        </span>
      </a>
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bxs-info-circle"></i>
          Acceso
        </span>
      </a>
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bxs-info-circle"></i>
          Acceso
        </span>
      </a>
    </div>
  </div>
);
