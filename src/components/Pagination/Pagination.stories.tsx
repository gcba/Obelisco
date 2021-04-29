// Base
import React from 'react';
import './Pagination.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Paginación',
  decorators: [withA11y]
};

export const Simple = (): JSX.Element => {
  return (
    <nav aria-label="Ejemplo de paginación">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#">
            <span className="page-previous-icon" aria-hidden="true" /> Anterior
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Siguiente <span className="page-next-icon" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export const Compleja = (): JSX.Element => {
  return (
    <nav aria-label="Ejemplo de paginación">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#">
            <span className="page-previous-icon" aria-hidden="true" /> Anterior
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        {[2, 3, 4, 5, 6, 7].map(i => (
          <li className="page-item" key={i}>
            <a className="page-link" href="#">
              {i}
            </a>
          </li>
        ))}
        <li className="page-item disabled">
          <span className="page-link">...</span>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            60
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Siguiente <span className="page-next-icon" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </nav>
  );
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
