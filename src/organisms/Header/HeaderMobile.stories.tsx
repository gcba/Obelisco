// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Organismos|Header (encabezado)/Mobile',
  decorators: [withA11y]
};

export const HeaderSearchSelected = (): JSX.Element => {
  return (
    <div className="header-container">
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
    </div>
  );
};

HeaderSearchSelected.story = {
  name: 'Buscador seleccionado'
};

export const HeaderSearch = (): JSX.Element => {
  return (
    <div className="header-container">
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
    </div>
  );
};

HeaderSearch.story = {
  name: 'Busqueda realizada'
};
