// Base
import React from 'react';
import '../../components/List-group/List-group.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { SimpleComponent, AccessListComponent, CategoriesComponent } from '.';

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

export const AccessList = (): JSX.Element => (
  <div className="list-group-container">
    <AccessListComponent />
  </div>
);

AccessList.story = {
  name: 'Con lista de accesos'
};

export const Categories = (): JSX.Element => (
  <div className="list-group-container">
    <CategoriesComponent />
  </div>
);

Categories.story = {
  name: 'Con categorías'
};
