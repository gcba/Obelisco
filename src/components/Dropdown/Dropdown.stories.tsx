// Base
import React from 'react';
import './Dropdown.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

import { Dropdown, DropdownItem } from './index';

// Configuración general del componente
export default {
  title: 'Componentes|Desplegables/De navegación',
  decorators: [withA11y]
};

export const DropdownIcons = (): JSX.Element => (
  <div className="storybook__container-dropdown">
    <Dropdown btnIconRight="expand_more" btnIconRightClass="btn-dropdown-icon" isBordered>
      <DropdownItem itemIconLeft="info" itemIconRight="info" />
      <DropdownItem itemIconLeft="info" itemIconRight="info" isAlignRight />
      <DropdownItem itemIconLeft="logout" isDanger />
    </Dropdown>
    <Dropdown btnIconLeft="menu" isBordered>
      <DropdownItem itemIconLeft="info" />
      <DropdownItem itemIconRight="info" isAlignRight />
      <DropdownItem itemIconRight="logout" isDanger isAlignRight />
    </Dropdown>
    <Dropdown btnIconLeft="menu" onlyIcon isBordered>
      <DropdownItem itemIconLeft="info" isBordered />
      <DropdownItem itemIconRight="info" isAlignRight />
      <DropdownItem itemIconRight="logout" isDanger isAlignRight />
    </Dropdown>
  </div>
);

DropdownIcons.story = {
  name: 'Con íconos'
};

export const DropdownPosition = (): JSX.Element => (
  <div className="storybook__container-dropdown-position">
    <Dropdown title="Desplegable Izq." btnIconRight="expand_more" btnIconRightClass="btn-dropdown-icon" isBordered>
      <DropdownItem itemIconLeft="info" />
      <DropdownItem />
      <DropdownItem />
      <DropdownItem />
      <DropdownItem itemIconLeft="logout" isDanger />
    </Dropdown>
    <Dropdown
      title="Desplegable Der."
      btnIconLeft="expand_more"
      btnIconLeftClass="btn-dropdown-icon"
      isBordered
      isMenuRight>
      <DropdownItem itemIconRight="info" isAlignRight />
      <DropdownItem isAlignRight />
      <DropdownItem isAlignRight />
      <DropdownItem isAlignRight />
      <DropdownItem itemIconRight="logout" isDanger isAlignRight />
    </Dropdown>
  </div>
);

DropdownPosition.story = {
  name: 'Disposición'
};

export const DropdownNested = (): JSX.Element => (
  <div className="storybook__container-dropdown-position">
    <Dropdown
      title="Desplegable Izq."
      btnIconRight="expand_more"
      btnIconRightClass="btn-dropdown-icon"
      isBordered
      isNested
      idDropdown="dropdownContentLeft">
      <Dropdown
        title="Opción en cascada"
        isSubDropdown
        btnIconRight="expand_more"
        btnIconRightClass="btn-dropdown-icon"
        btnIconLeft="info">
        <DropdownItem isSubItem />
        <DropdownItem isSubItem />
        <DropdownItem isSubItem />
      </Dropdown>
      <DropdownItem />
      <DropdownItem itemIconLeft="info" />
      <DropdownItem />
      <DropdownItem itemIconLeft="logout" isDanger />
    </Dropdown>
    <Dropdown
      title="Desplegable Der."
      btnIconLeft="expand_more"
      btnIconLeftClass="btn-dropdown-icon"
      isBordered
      isNested
      idDropdown="dropdownContentRight"
      isMenuRight>
      <Dropdown
        title="Opción en cascada"
        isSubDropdown
        btnIconLeft="expand_more"
        btnIconLeftClass="btn-dropdown-icon"
        btnIconRight="info"
        isMenuRight>
        <DropdownItem isSubItem />
        <DropdownItem isSubItem />
        <DropdownItem isSubItem />
      </Dropdown>
      <DropdownItem />
      <DropdownItem itemIconRight="info" />
      <DropdownItem />
      <DropdownItem itemIconRight="logout" isDanger />
    </Dropdown>
  </div>
);

DropdownNested.story = {
  name: 'Anidado'
};

/* export const DesplegableEspecificos = (): JSX.Element => (
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
}; */
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
