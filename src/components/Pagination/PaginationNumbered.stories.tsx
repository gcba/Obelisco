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

export const Inicial = (): JSX.Element => {
  return <Pagination pages={10} default={0} ariaLabel="Ejemplo de paginado numerado inicial" />;
};

export const Central = (): JSX.Element => {
  return <Pagination pages={10} default={5} ariaLabel="Ejemplo de paginado numerado central" />;
};

export const Final = (): JSX.Element => {
  return <Pagination pages={10} default={9} ariaLabel="Ejemplo de paginado numerado final" />;
};
