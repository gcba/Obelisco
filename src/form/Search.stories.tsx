// Base
import React from 'react';
import './Form.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Formulario|Buscador',
  decorators: [withA11y]
};

export const Buscador = (): JSX.Element => {
  return (
    <div className="storybook__container-form">
      <form className="form-search">
        <div className="form-group">
          <label className="sr-only" htmlFor="search-input">
            Buscador
          </label>
          <input
            type="search"
            className="form-control input-search"
            id="search-input"
            name="name"
            placeholder="Buscar..."
          />
          <button className="reset" type="reset" aria-label="Borrar"></button>
        </div>
      </form>
    </div>
  );
};
