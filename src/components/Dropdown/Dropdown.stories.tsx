// Base
import './Dropdown.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import React from 'react';

import { Dropdown, DropdownOption } from './index';

// Configuración general del componente
export default {
  title: 'Componentes|Desplegables',
  decorators: [withA11y]
};

export const Desplegable = (): JSX.Element => (
  <>
    <div className="dropdown-container">
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
    <div className="dropdown-container">
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
};

export const DesplegableConIcono = (): JSX.Element => (
  <div className="dropdown-container">
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
  <div className="dropdown-container">
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
  <div className="dropdown-container">
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
};

export const Tamanos = (): JSX.Element => (
  <div className="dropdown-container">
    <Dropdown className="mb-3" size="lg" isBordered={true} title="Filtro (1)">
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

    <Dropdown className="mb-3" isBordered={true} title="Filtro (1)">
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

    <Dropdown size="sm" isBordered={true} title="Filtro (1)">
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

Tamanos.story = { name: 'Tamaños' };

export const Options = (): JSX.Element => {
  const checkboxOptions = [
    { value: 'checkOne', label: 'Opción 1' },
    { value: 'checkTwo', label: 'Opción 2' },
    { value: 'checkThree', label: 'Opción 3' }
  ];

  const checkboxOptionsTwo = [
    { value: 'checkOne', label: 'Opción 1' },
    { value: 'checkTwo', label: 'Opción 2' },
    { value: 'checkThree', label: 'Opción 3' }
  ];

  const radioOptions = [
    { value: 'radioOne', label: 'Opción 1' },
    { value: 'radioTwo', label: 'Opción 2' },
    { value: 'radioThree', label: 'Opción 3' }
  ];

  return (
    <>
      <DropdownOption options={checkboxOptions}>
        <i className="bx bxs-check"></i>
      </DropdownOption>
      <DropdownOption options={radioOptions} isRadio={true}>
        <span className="material-icons-round">done</span>
      </DropdownOption>
      <DropdownOption
        options={radioOptions}
        isRadio={true}
        icon={<span className="material-icons-round">event</span>}
        iconType="material">
        <i className="bx bx-check"></i>
      </DropdownOption>
      <DropdownOption options={radioOptions} isRadio={true} icon="bx-ghost" iconType="boxicon">
        <i className="bx bx-check"></i>
      </DropdownOption>
    </>
  );
};

Options.story = { name: 'Formulario' };
