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
      <form className="form-search">
        <div className="form-group">
          <input
            type="search"
            className="form-control input-search"
            id="name-input"
            name="name"
            placeholder="Buscar..."
          />
          <button className="reset" type="reset"></button>
        </div>
      </form>
    </div>
  );
};
