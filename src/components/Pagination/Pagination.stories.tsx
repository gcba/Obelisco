// Base
import React from 'react';
import './Pagination.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Pagination } from '.';

// Config
export default {
  title: 'Componentes|Paginación',
  component: Pagination,
  decorators: [withA11y]
};

export const Simple = (): JSX.Element => {
  return <Pagination pages={3} ariaLabel="Ejemplo de paginación simple" />;
};

export const Compleja = (): JSX.Element => {
  return <Pagination pages={60} default={9} ariaLabel="Ejemplo de paginación compleja" />;
};

export const NavegacionDePagina = (): JSX.Element => (
  <div className="page-navigation-wrapper">
    <div className="page-navigation">
      <div className="row">
        <div className="col-6">
          <a className="page-navigation-prev" href="#">
            <span className="page-previous-icon" aria-hidden="true" /> Página anterior
          </a>
        </div>
        <div className="col-6 text-right">
          <a className="page-navigation-next" href="#">
            Página siguiente <span className="page-next-icon" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </div>
);
NavegacionDePagina.story = {
  name: 'Navegación de página'
};
