// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración del general del componente
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
  name: 'Acceso Vertical'
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
    </div>
  </div>
);

VerticalAccessSmall.story = {
  name: 'Acceso Vertical pequeño'
};
