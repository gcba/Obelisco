// Base
import React from 'react';
import './Form.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Formulario/Buscador',
  decorators: [withA11y]
};

export const Buscador = (): JSX.Element => {
  return (
    <div className="form-wrapper">
      <div className="form-group">
        <label htmlFor="search-input">Buscar</label>
        <input
          type="search"
          className="form-control input-search"
          id="name-input"
          name="name"
          placeholder="Buscar..."
        />
      </div>
    </div>
  );
};
