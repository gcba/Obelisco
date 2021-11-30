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
  <ul className="d-flex flex-column justify-content-between">
    <li className="access-link access-large icon-access p-4">Datos de mi cuenta</li>
    <li className="access-link access-large icon-access p-4">Datos de mi cuenta</li>
    <li className="access-link access-large icon-access p-4">Datos de mi cuenta</li>
  </ul>
);

export const AccesoPequeno = (): JSX.Element => (
  <ul className="d-flex flex-column justify-content-between">
    <li className="access-link access-small icon-access">Opción 1</li>
    <li className="access-link access-small icon-access">Opción 1</li>
    <li className="access-link access-small icon-access">Opción 1</li>
  </ul>
);
AccesoPequeno.story = { name: 'Acceso Pequeño' };

export const VarianteCerrarSesion = (): JSX.Element => (
  <ul className="d-flex flex-column justify-content-between">
    <li className="access-link access-small close-sesion">Cerrar sesión</li>
    <li className="access-link access-small close-sesion">Cerrar sesión</li>
    <li className="access-link access-small close-sesion">Cerrar sesión</li>
  </ul>
);
VarianteCerrarSesion.story = { name: 'Variante Cerrar Sesión' };