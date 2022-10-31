// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración del general del componente
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

HorizontalAccess.story = { name: 'Acceso Horizontal' };

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
  name: 'Acceso Horizontal Pequeño'
};
