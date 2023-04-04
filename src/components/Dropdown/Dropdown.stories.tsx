// Base
import React from 'react';
import './Dropdown.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { Dropdown } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Desplegables',
  decorators: [withA11y]
};

export const DropdownButton = (): JSX.Element => (
  <>
    <div className="dropdown-container">
      <Dropdown items={['Opción 1', 'Opción 2', 'Opción 3']} size="small" isToggle>
        Desplegable
      </Dropdown>
    </div>
  </>
);

DropdownButton.story = {
  name: 'Desplegable botón'
};

export const DropdownLink = (): JSX.Element => (
  <>
    <div className="dropdown-container">
      <Dropdown items={['Opción 1', 'Opción 2', 'Opción 3']} isLink isBorder isToggle>
        Desplegable
      </Dropdown>
    </div>
  </>
);

DropdownLink.story = {
  name: 'Desplegable enlace'
};

export const DropdownIcon = (): JSX.Element => (
  <div className="dropdown-container">
    <Dropdown items={['Opción 1', 'Opción 2', 'Opción 3']} isBorder icon='<span class="dropdown-user-icon"></span>'>
      Mi perfil
    </Dropdown>
    <Dropdown items={['Opción 1', 'Opción 2', 'Opción 3']} icon='<i class="bx bxs-user-circle"></i>'>
      Mi perfil
    </Dropdown>
  </div>
);

DropdownIcon.story = {
  name: 'Desplegable con ícono'
};

export const DropdownOnlyIcon = (): JSX.Element => (
  <div className="dropdown-container">
    <Dropdown
      items={['Opción 1', 'Opción 2', 'Opción 3']}
      icon='<span class="dropdown-user-icon ml-0">&nbsp;</span>'></Dropdown>
  </div>
);

DropdownOnlyIcon.story = {
  name: 'Desplegable solo ícono'
};

export const Language = (): JSX.Element => (
  <div className="dropdown-container">
    <Dropdown items={['Español', 'English', 'Portugues']} icon='<span class="dropdown-language-icon"></span>'>
      ES
    </Dropdown>
  </div>
);

Language.story = {
  name: 'Desplegable idioma'
};

export const DropdownSizes = (): JSX.Element => (
  <div className="dropdown-container">
    <Dropdown items={['Opción 1', 'Opción 2', 'Opción 3']} isToggle isBorder size="small">
      Filtro
    </Dropdown>
    <Dropdown items={['Opción 1', 'Opción 2', 'Opción 3']} isToggle isBorder>
      Filtro
    </Dropdown>
    <Dropdown items={['Opción 1', 'Opción 2', 'Opción 3']} isToggle isBorder size="large">
      Filtro
    </Dropdown>
  </div>
);

DropdownSizes.story = { name: 'Tamaños' };

const DropMenu = (): JSX.Element => (
  <div className="dropdown-menu" key="menu">
    <div>
      <h6>Titulo H6</h6>
      <p>
        Información importante Para el examen práctico te brindaremos un turno en otra fecha en la Pista de Parque
        Extremo
      </p>
    </div>
    <div>
      <h6>Titulo H6</h6>
      <p>
        Información importante Para el examen práctico te brindaremos un turno en otra fecha en la Pista de Parque
        Extremo
      </p>
    </div>
    <div>
      <h6>Titulo H6</h6>
      <p>
        Información importante Para el examen práctico te brindaremos un turno en otra fecha en la Pista de Parque
        Extremo
      </p>
    </div>
    <div>
      <h6>Titulo H6</h6>
      <p>
        Información importante Para el examen práctico te brindaremos un turno en otra fecha en la Pista de Parque
        Extremo
      </p>
    </div>
    <button className="btn btn-sm btn-link" type="button">
      Botón
    </button>
  </div>
);

export const DropdownList = (): JSX.Element => (
  <div className="dropdown-list-container">
    <div className="dropdown">
      <Dropdown items={[]} isToggle isBorder isList customMenu={<DropMenu />}>
        <div className="dropdown-body" key="body">
          <span className="material-icons-round">receipt</span>
          <p>
            <span>Infracción de tránsito: Exceso de velocidad</span>
            <span className="font-weight-bold">$10.000,00</span>
          </p>
        </div>
      </Dropdown>
    </div>
  </div>
);

DropdownList.story = { name: 'Desplegable lista' };
