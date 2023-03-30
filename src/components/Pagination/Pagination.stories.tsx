// Base
import React from 'react';
import './Pagination.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Pagination } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Paginado',
  component: Pagination,
  decorators: [withA11y]
};

export const Descriptive = (): JSX.Element => (
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

Descriptive.story = { name: 'Descriptivo' };
