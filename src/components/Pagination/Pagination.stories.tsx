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

export const Paginacion = (): JSX.Element => {
  return (
    <div>
      <div className="mt-5">
        <Pagination pages={56} default={0} ariaLabel="Primer ejemplo de paginación simple" />
      </div>

      <div className="mt-5">
        <Pagination pages={56} default={1} ariaLabel="Segundo ejemplo de paginación simple" />
      </div>
      <div className="mt-5">
        <Pagination pages={56} default={55} ariaLabel="Tercer ejemplo de paginación simple" />
      </div>
    </div>
  );
};

Paginacion.story = { name: 'Paginación' };

export const NavegacionDePagina = (): JSX.Element => (
  <>
    <div className="pagination">
      <div className="page-navigation">
        <div className="page-item">
          <a className="btn page-link" href="#">
            <span className="page-previous-icon" aria-hidden="true"></span>
            <span className="page-next-text">Anterior</span>
          </a>
        </div>
        <div className="page-item">
          <a className="btn page-link" href="#">
            <span className="page-next-text">Siguiente</span>
            <span className="page-next-icon" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </div>
  </>
);

NavegacionDePagina.story = {
  name: 'Navegación de página'
};
