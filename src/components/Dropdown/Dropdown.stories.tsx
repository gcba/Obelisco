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
    <div className="btn-group dropdown">
      <button type="button" className="btn btn-dropdown btn-dropdown-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Mi perfil <span className="btn dropdown-user dropdown-lg dropdown-toggle-split"></span>
      </button>
      <div className="dropdown-menu">
        <button className="dropdown-item" type="button">Opción 1</button>
        <button className="dropdown-item" type="button">Opción 2</button>
        <button className="dropdown-item" type="button">Opción 3</button>
      </div>
    </div>
  </div>
);

export const DesplegablePequeno = (): JSX.Element => (
  <div className="dropdown-container">
    <div className="btn-group dropdown">
      <button type="button" className="btn btn-dropdown btn-dropdown-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Filtro
        <span className="btn dropdown-chevron"></span>
      </button>
      <div className="dropdown-menu">
        <button className="dropdown-item" type="button">Opción 1</button>
        <button className="dropdown-item" type="button">Opción 2</button>
        <button className="dropdown-item" type="button">Opción 3</button>
      </div>
    </div>
  </div>
);
DesplegablePequeno.story = { name: 'Desplegable pequeño' };


export const SoloIcono = (): JSX.Element => (
  <div className="dropdown-container">
      <div className="btn-group dropdown">
        <button type="button" className="btn btn-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="btn dropdown-user dropdown-toggle-split ml-0"></span>
        </button>
        <div className="dropdown-menu">
          <button className="dropdown-item" type="button">Opción 1</button>
          <button className="dropdown-item" type="button">Opción 2</button>
          <button className="dropdown-item" type="button">Opción 3</button>
        </div>
      </div>
  </div>
);


export const Idioma = (): JSX.Element => (
  <div className="dropdown-container">
      <div className="btn-group dropdown">
        <button type="button" className="btn btn-dropdown btn-dropdown-es" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ES<span className="btn dropdown-es"></span>
        </button>
        <div className="dropdown-menu">
          <button className="dropdown-item" type="button">Inglés</button>
          <button className="dropdown-item" type="button">Español</button>
        </div>
      </div>
  </div>
);