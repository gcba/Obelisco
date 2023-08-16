// Base
import React from 'react';
import './Dropdown.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

import { Dropdown } from './index';

// Configuración general del componente
export default {
  title: 'Componentes|Desplegables/De navegación',
  decorators: [withA11y]
};

export const DropdownIcons = (): JSX.Element => (
  <div className="storybook__container-dropdown">
    <div className="dropdown">
      <button
        type="button"
        className="btn btn-dropdown dropdown-toggle btn-dropdown-lg btn-dropdown-border"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <span>Desplegable</span>
        <span className="material-icons-round btn-dropdown-icon">expand_more</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">
          <span className="material-icons-round">info</span>
          <span className="item-text">Opción de navegación</span>
          <span className="material-icons-round">info</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="material-icons-round">info</span>
          <span className="item-text text-right">Opción de navegación</span>
          <span className="material-icons-round">info</span>
        </a>
        <a className="dropdown-item item-danger" href="#">
          <span className="material-icons-round">logout</span>
          <span className="item-text">Cerrar sesión</span>
        </a>
      </div>
    </div>
    <div className="dropdown">
      <button
        type="button"
        className="btn btn-dropdown dropdown-toggle btn-dropdown-lg btn-dropdown-border"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <span className="material-icons-round">menu</span>
        <span>Desplegable</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">
          <span className="material-icons-round">info</span>
          <span className="item-text">Opción de navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text text-right">Opción de navegación</span>
          <span className="material-icons-round">info</span>
        </a>
        <a className="dropdown-item item-danger" href="#">
          <span className="item-text text-right">Cerrar sesión</span>
          <span className="material-icons-round">logout</span>
        </a>
      </div>
    </div>
    <div className="dropdown">
      <button
        type="button"
        className="btn btn-dropdown dropdown-toggle btn-dropdown-lg btn-dropdown-border"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <span className="material-icons-round">menu</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item item-border" href="#">
          <span className="material-icons-round">info</span>
          <span className="item-text">Opción de navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Opción de navegación</span>
        </a>
        <a className="dropdown-item item-danger" href="#">
          <span className="material-icons-round">logout</span>
          <span className="item-text">Cerrar sesión</span>
        </a>
      </div>
    </div>
  </div>
);

DropdownIcons.story = {
  name: 'Con íconos'
};

export const DropdownPosition = (): JSX.Element => (
  <div className="storybook__container-dropdown-position">
    <div className="dropdown">
      <button
        type="button"
        className="btn btn-dropdown dropdown-toggle btn-dropdown-lg btn-dropdown-border"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <span>Desplegable Izq.</span>
        <span className="material-icons-round btn-dropdown-icon">expand_more</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">
          <span className="material-icons-round">info</span>
          <span className="item-text">Opción de navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Opción de navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Opción de navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Opción de navegación</span>
        </a>
        <a className="dropdown-item item-danger" href="#">
          <span className="material-icons-round">logout</span>
          <span className="item-text">Cerrar sesión</span>
        </a>
      </div>
    </div>
    <div className="dropdown">
      <button
        type="button"
        className="btn btn-dropdown dropdown-toggle btn-dropdown-lg btn-dropdown-border"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <span className="material-icons-round btn-dropdown-icon">expand_more</span>
        <span>Desplegable Der.</span>
      </button>
      <div className="dropdown-menu dropdown-menu-right">
        <a className="dropdown-item" href="#">
          <span className="item-text">Opción de navegación</span>
          <span className="material-icons-round">info</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Opción de navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Opción de navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Opción de navegación</span>
        </a>
        <a className="dropdown-item item-danger" href="#">
          <span className="item-text">Cerrar sesión</span>
          <span className="material-icons-round">logout</span>
        </a>
      </div>
    </div>
  </div>
);

DropdownPosition.story = {
  name: 'Disposición'
};

export const DropdownNested = (): JSX.Element => (
  <div className="storybook__container-dropdown-position">
    <div className="dropdown">
      <button
        className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
        type="button"
        data-toggle="collapse"
        data-target="#dropdownContent"
        aria-controls="dropdownContent"
        aria-expanded="false"
        aria-label="Toggle">
        <span>Desplegable Izq.</span>
        <span className="material-icons-round btn-dropdown-icon">expand_more</span>
      </button>

      <div className="dropdown-menu collapse" id="dropdownContent">
        <div className="dropdown sub-dropdown">
          <button
            type="button"
            className="btn btn-dropdown dropdown-toggle btn-dropdown-lg sub-btn-dropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <span className="material-icons-round">info</span>
            <span className="item-text">Opción en cascada</span>
            <span className="material-icons-round btn-dropdown-icon">expand_more</span>
          </button>
          <div className="sub-dropdown-container">
            <div className="dropdown-menu sub-dropdown-menu">
              <a className="dropdown-item sub-item" href="#">
                <span className="item-text">Opción de navegación</span>
              </a>
              <a className="dropdown-item sub-item" href="#">
                <span className="item-text">Opción de navegación</span>
              </a>
              <a className="dropdown-item sub-item" href="#">
                <span className="item-text">Opción de navegación</span>
              </a>
            </div>
          </div>
        </div>
        <a className="dropdown-item" href="#">
          <span className="item-text">Opción de navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="material-icons-round">info</span>
          <span className="item-text">Opción de navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Opción de navegación</span>
        </a>
        <a className="dropdown-item item-danger" href="#">
          <span className="material-icons-round">logout</span>
          <span className="item-text">Cerrar sesión</span>
        </a>
      </div>
    </div>
    <div className="dropdown">
      <button
        className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
        type="button"
        data-toggle="collapse"
        data-target="#dropdownContentLeft"
        aria-controls="dropdownContentLeft"
        aria-expanded="false"
        aria-label="Toggle">
        <span className="material-icons-round btn-dropdown-icon">expand_more</span>
        <span>Desplegable Der.</span>
      </button>
      <div className="dropdown-menu dropdown-menu-right collapse" id="dropdownContentLeft">
        <div className="dropdown sub-dropdown">
          <button
            type="button"
            className="btn btn-dropdown dropdown-toggle btn-dropdown-lg sub-btn-dropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <span className="material-icons-round btn-dropdown-icon">expand_more</span>
            <span className="item-text">Opción en cascada</span>
            <span className="material-icons-round">info</span>
          </button>
          <div className="sub-dropdown-container">
            <div className="dropdown-menu sub-dropdown-menu dropdown-menu-right">
              <a className="dropdown-item sub-item" href="#">
                <span className="item-text">Opción de navegación</span>
              </a>
              <a className="dropdown-item sub-item" href="#">
                <span className="item-text">Opción de navegación</span>
              </a>
              <a className="dropdown-item sub-item" href="#">
                <span className="item-text">Opción de navegación</span>
              </a>
            </div>
          </div>
        </div>
        <a className="dropdown-item" href="#">
          <span className="item-text">Opción de navegación</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Opción de navegación</span>
          <span className="material-icons-round">info</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Opción de navegación</span>
        </a>
        <a className="dropdown-item item-danger" href="#">
          <span className="item-text">Cerrar sesión</span>
          <span className="material-icons-round">logout</span>
        </a>
      </div>
    </div>
  </div>
);

DropdownNested.story = {
  name: 'Anidado'
};

export const DesplegableEspecificos = (): JSX.Element => (
  <div className="storybook__container-dropdown">
    <Dropdown className="mb-3" size="lg" title="Mi perfil" buttonIcon={<span className="dropdown-user-icon"></span>}>
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
    </Dropdown>

    <Dropdown title="Mi perfil" isBordered={true} buttonIcon={<span className="dropdown-user-icon"></span>}>
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
    </Dropdown>
    <Dropdown onlyIcon={true} buttonIcon={<span className="dropdown-user-icon ml-0">&nbsp;</span>}>
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
    </Dropdown>
    <Dropdown title="ES " buttonIcon={<span className="dropdown-language-icon"></span>}>
      <div className="dropdown-menu">
        <button className="dropdown-item" type="button">
          Inglés
        </button>
        <button className="dropdown-item" type="button">
          Español
        </button>
      </div>
    </Dropdown>
  </div>
);

DesplegableEspecificos.story = {
  name: 'Específicos'
};
/* export const Desplegable = (): JSX.Element => (
  <>
    <div className="storybook__container-dropdown">
      <Dropdown className="mb-3" size="sm">
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
      </Dropdown>

      <Dropdown className="mb-3" size="sm" isActive={true} title="Desplegable (1)">
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
      </Dropdown>

      <Dropdown size="sm" isBordered={true} title="Desplegable (1)">
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
      </Dropdown>
    </div>
  </>
);

Desplegable.story = {
  name: 'Desplegable botón'
};

export const DesplegableConEnlaces = (): JSX.Element => (
  <>
    <div className="storybook__container-dropdown">
      <Dropdown className="mb-3" size="sm" isBordered={true}>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Opción 1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Opción 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Opción 3
            </a>
          </li>
        </ul>
      </Dropdown>

      <Dropdown className="mb-3" isBordered={true}>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Opción 1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Opción 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Opción 3
            </a>
          </li>
        </ul>
      </Dropdown>

      <Dropdown className="mb-3" size="lg" isBordered={true}>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Opción 1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Opción 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Opción 3
            </a>
          </li>
        </ul>
      </Dropdown>

      <Dropdown size="lg" isActive={true}>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Opción 1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Opción 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Opción 3
            </a>
          </li>
        </ul>
      </Dropdown>
    </div>
  </>
);

DesplegableConEnlaces.story = {
  name: 'Desplegable enlace'
}; */

/* export const DesplegableConIcono = (): JSX.Element => (
  <div className="storybook__container-dropdown">
    <Dropdown className="mb-3" size="lg" title="Mi perfil" buttonIcon={<span className="dropdown-user-icon"></span>}>
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
    </Dropdown>

    <Dropdown title="Mi perfil" isBordered={true} buttonIcon={<span className="dropdown-user-icon"></span>}>
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
    </Dropdown>
  </div>
);

DesplegableConIcono.story = {
  name: 'Desplegable con ícono'
};

export const SoloIcono = (): JSX.Element => (
  <div className="storybook__container-dropdown">
    <Dropdown onlyIcon={true} buttonIcon={<span className="dropdown-user-icon ml-0">&nbsp;</span>}>
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
    </Dropdown>
  </div>
);

SoloIcono.story = {
  name: 'Desplegable solo ícono'
};

export const Idioma = (): JSX.Element => (
  <div className="storybook__container-dropdown">
    <Dropdown title="ES " buttonIcon={<span className="dropdown-language-icon"></span>}>
      <div className="dropdown-menu">
        <button className="dropdown-item" type="button">
          Inglés
        </button>
        <button className="dropdown-item" type="button">
          Español
        </button>
      </div>
    </Dropdown>
  </div>
);

Idioma.story = {
  name: 'Desplegable idioma'
}; */

/* export const Sizes = (): JSX.Element => (
  <div className="storybook__container-dropdown">
    <Dropdown className="mb-3" size="lg" isBordered={true} title="Desplegable (1)">
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
    </Dropdown>

    <Dropdown className="mb-3" isBordered={true} title="Desplegable (1)">
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
    </Dropdown>

    <Dropdown size="sm" isBordered={true} title="Desplegable (1)">
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
    </Dropdown>
  </div>
);

Sizes.story = { name: 'Tamaños' }; */
