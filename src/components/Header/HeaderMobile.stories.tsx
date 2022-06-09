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
          <form className="form-search form-search-sm">
            <div className="form-group">
              <input
                type="search"
                className="form-control form-control-sm input-search"
                id="name-input"
                name="name"
                placeholder="Buscar..."
                aria-label="Ingrese su búsqueda"
              />
              <button className="reset" type="reset"></button>
            </div>
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
          <form className="form-search form-search-sm">
            <div className="form-group">
              <input
                type="search"
                className="form-control form-control-sm input-search"
                id="name-input"
                name="name"
                placeholder="Buscar..."
                aria-label="Ingrese su búsqueda"
                value="coronavirus"
              />
              <button className="reset" type="reset"></button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

HeaderSearch.story = {
  name: 'Busqueda realizada'
};
