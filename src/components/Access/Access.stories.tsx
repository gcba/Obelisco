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
  <div className="d-flex justify-content-between align-items-center">
    <button className="access-link access-large icon-access">Datos de mi cuenta</button>
  </div>
);

export const AccesoPequeño = (): JSX.Element => (
  <div className="d-flex justify-content-between align-items-center">
    <button className="access-link access-small icon-access">Opción 1</button>
  </div>
);
AccesoPequeño.story = { name: 'Acceso Pequeño' };

export const VarianteCerrarSesion = (): JSX.Element => (
  <div className="d-flex justify-content-between align-items-center">
    <button className="access-link access-small close-sesion">Cerrar sesión</button>
  </div>
);
VarianteCerrarSesion.story = { name: 'Variante Cerrar Sesión' };