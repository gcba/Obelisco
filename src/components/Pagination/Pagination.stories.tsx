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
        <Pagination isShowNext={true} pages={56} default={0} ariaLabel="Ejemplo de paginación simple" />
      </div>

      <div className="mt-5">
        <Pagination
          isShowNext={true}
          isShowPrev={true}
          pages={10}
          default={1}
          ariaLabel="Ejemplo de paginación simple"
        />
      </div>
      <div className="mt-5">
        <Pagination isShowPrev={true} pages={56} default={55} ariaLabel="Ejemplo de paginación simple" />
      </div>
    </div>
  );
};

Paginacion.story = { name: 'Paginación' };
