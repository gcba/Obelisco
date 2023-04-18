// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Pagination } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Paginado/Numerado',
  component: Pagination,
  decorators: [withA11y]
};

export const Initial = (): JSX.Element => (
  <div className="pagination-wrapper">
    <Pagination pages={10} ariaLabel="Ejemplo de paginado numerado inicial" />
  </div>
);
Initial.story = { name: 'Inicial' };

export const Central = (): JSX.Element => (
  <div className="pagination-wrapper">
    <Pagination pages={10} default={4} ariaLabel="Ejemplo de paginado numerado central" />
  </div>
);

export const Final = (): JSX.Element => (
  <div className="pagination-wrapper">
    <Pagination pages={10} default={9} ariaLabel="Ejemplo de paginado numerado final" />
  </div>
);
