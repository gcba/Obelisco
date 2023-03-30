// Base
import React from 'react';
import './Access.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { SimpleComponent, ListaDeAccesosComponent, CategoriasComponent } from '.';

// Configuración general del componente
export default {
  title: 'Organismos|Acceso/Acceso completo',
  decorators: [withA11y]
};

export const Simple = (): JSX.Element => (
  <div className="list-group-container">
    <SimpleComponent />
  </div>
);

export const ConListaDeAccesos = (): JSX.Element => (
  <div className="list-group-container">
    <ListaDeAccesosComponent />
  </div>
);

ConListaDeAccesos.story = {
  name: 'Con lista de accesos'
};

export const ConCategorias = (): JSX.Element => (
  <div className="list-group-container">
    <CategoriasComponent />
  </div>
);

ConCategorias.story = {
  name: 'Con categorías'
};
