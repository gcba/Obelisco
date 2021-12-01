// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

import './Access.stories.scss';

// Configuración del general del componente
export default {
  title: 'Componentes|Accesos',
  decorators: [withA11y]
};

export const AccesoGrande = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      <a href="#" className="list-group-item list-group-item-lg icon-access">Datos de mi cuenta</a>
      <a href="#" className="list-group-item icon-access">Datos de mi cuenta</a>
    </div>
  </div>
);

export const AccesoPequeno = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      <a href="#" className="list-group-item icon-access">Opción 1</a>
      <a href="#" className="list-group-item icon-access">Opción 2</a>
      <a href="#" className="list-group-item icon-access">Opción 3</a>
    </div>
  </div>
);
AccesoPequeno.story = { name: 'Acceso Pequeño' };

export const VarianteCerrarSesion = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      <a href="#" className="list-group-item list-group-item-logout close-sesion">Cerrar sesión</a>
    </div>
  </div>  
);
VarianteCerrarSesion.story = { name: 'Variante Cerrar Sesión' };