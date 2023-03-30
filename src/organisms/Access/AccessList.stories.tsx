// Base
import React from 'react';
import './Access.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { ListaAccesoHorizontal, ListaAccesoVertical } from '.';

// Configuración general del componente
export default {
  title: 'Organismos|Acceso/Lista de accesos',
  decorators: [withA11y]
};

export const Horizontal = (): JSX.Element => <ListaAccesoHorizontal />;

export const Vertical = (): JSX.Element => (
  <div className="list-group-container">
    <ListaAccesoVertical />
  </div>
);
