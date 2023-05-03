// Base
import React from 'react';
import '../../components/List-group/List-group.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { AccessOrganisms, AccessInfo, CategoryList } from '.';

// Configuración general del componente
export default {
  title: 'Organismos|Accesos',
  decorators: [withA11y]
};

const accessList: AccessInfo[] = [
  {
    title: 'Acceso',
    description: 'Descripción (Opcional)'
  },
  {
    title: 'Acceso',
    description: 'Descripción (Opcional)'
  },
  {
    title: 'Acceso',
    description: 'Descripción (Opcional)'
  }
];

const accessCategory: CategoryList[] = [
  {
    title: 'Categoría 1',
    items: ['Acceso chico', 'Acceso chico']
  },
  {
    title: 'Categoría 2',
    items: ['Acceso chico', 'Acceso chico']
  }
];

export const Simple = (): JSX.Element => (
  <div className="list-group-container">
    <AccessOrganisms simpleComponent={true} />
  </div>
);

export const AccessList = (): JSX.Element => (
  <div className="list-group-container">
    <AccessOrganisms accessList={accessList} />
  </div>
);

AccessList.story = {
  name: 'Con lista de accesos'
};

export const Categories = (): JSX.Element => (
  <div className="list-group-container">
    <AccessOrganisms categoryList={accessCategory} />
  </div>
);

Categories.story = {
  name: 'Con categorías'
};
