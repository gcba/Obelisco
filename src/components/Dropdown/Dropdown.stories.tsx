// Base
import React from 'react';
import './Dropdown.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración del general del componente
export default {
  title: 'Componentes | Desplegables',
  decorators: [withA11y]
};

export const DesplegableGrande = (): JSX.Element => (
  <div className="dropdown-container">
    <div className="dropdown">
      <button
        type="button"
        className="btn btn-dropdown btn-dropdown-lg"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Mi perfil <span className="dropdown-user-icon"></span>
      </button>
      <div className="dropdown-menu">
        <button className="dropdown-item" type="button">
          Opción 1
        </button>
        <button className="dropdown-item" type="button">
          Opción 2
        </button>
        <button className="dropdown-item" type="button">
          Opción 3
        </button>
      </div>
    </div>
  </div>
);

export const DesplegablePequeno = (): JSX.Element => (
  <>
    <div className="dropdown-container">
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-dropdown btn-dropdown-sm dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          Filtro
        </button>
        <div className="dropdown-menu">
          <button className="dropdown-item" type="button">
            Opción 1
          </button>
          <button className="dropdown-item" type="button">
            Opción 2
          </button>
          <button className="dropdown-item" type="button">
            Opción 3
          </button>
        </div>
      </div>
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-dropdown btn-dropdown-sm dropdown-toggle active"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          Filtro (1)
        </button>
        <div className="dropdown-menu">
          <button className="dropdown-item" type="button">
            Opción 1
          </button>
          <button className="dropdown-item" type="button">
            Opción 2
          </button>
          <button className="dropdown-item" type="button">
            Opción 3
          </button>
        </div>
      </div>
    </div>
  </>
);
DesplegablePequeno.story = { name: 'Desplegable pequeño' };

export const SoloIcono = (): JSX.Element => (
  <div className="dropdown-container">
    <div className="dropdown">
      <button
        type="button"
        className="btn btn-dropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <span className="dropdown-user-icon ml-0"></span>
      </button>
      <div className="dropdown-menu">
        <button className="dropdown-item" type="button">
          Opción 1
        </button>
        <button className="dropdown-item" type="button">
          Opción 2
        </button>
        <button className="dropdown-item" type="button">
          Opción 3
        </button>
      </div>
    </div>
  </div>
);

export const Idioma = (): JSX.Element => (
  <div className="dropdown-container">
    <div className="dropdown">
      <button
        type="button"
        className="btn btn-dropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        ES <span className="dropdown-language-icon"></span>
      </button>
      <div className="dropdown-menu">
        <button className="dropdown-item" type="button">
          Inglés
        </button>
        <button className="dropdown-item" type="button">
          Español
        </button>
      </div>
    </div>
  </div>
);
