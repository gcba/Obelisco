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
