// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Header/Mobile',
  decorators: [withA11y]
};

export const HeaderSearchSelected = (): JSX.Element => {
  return (
    <header className="navbar navbar-light">
      <div className="container">
        <div className="navbar-search active-search">
          <form className="form-inline">
            <input
              type="search"
              className="form-control input-search"
              id="name-input"
              name="name"
              placeholder="Buscar..."
            />
          </form>
        </div>
      </div>
    </header>
  );
};

HeaderSearchSelected.story = {
  name: 'Buscador seleccionado'
};

export const HeaderSearch = (): JSX.Element => {
  return (
    <header className="navbar navbar-light">
      <div className="container">
        <div className="navbar-search active-search">
          <form className="form-inline">
            <input
              type="search"
              className="form-control input-search"
              id="name-input"
              name="name"
              placeholder="Buscar..."
              value="Coronavirus"
            />
          </form>
        </div>
      </div>
    </header>
  );
};

HeaderSearch.story = {
  name: 'Busqueda realizada'
};
