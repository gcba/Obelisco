// Base
import React from 'react';
import './Options.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { Dropdown } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Desplegables/Opciones',
  decorators: [withA11y]
};

const items = [1, 2, 3];

const optionItem = (name: string, number: number): JSX.Element => (
  <>
    <input type="radio" id={'options-example' + number} name={name} className="sr-only" />
    <label htmlFor={'options-example' + number} className="dropdown-item">
      Opción {number}
    </label>
  </>
);

export const OpcionesGrande = (): JSX.Element => (
  <form className="d-flex flex-row justify-content-start options-container">
    <Dropdown option size="lg">
      <div className="dropdown-menu">{items.map((item) => optionItem('example1', item))}</div>
    </Dropdown>

    <Dropdown option size="lg">
      <div className="dropdown-menu">{items.map((item) => optionItem('example1', item))}</div>
    </Dropdown>

    <Dropdown option size="lg">
      <div className="dropdown-menu">{items.map((item) => optionItem('example1', item))}</div>
    </Dropdown>
  </form>
);

OpcionesGrande.story = { name: 'Opciones grande' };

export const OpcionesMediano = (): JSX.Element => (
  <form className="d-flex flex-row justify-content-start options-container">
    <Dropdown option>
      <div className="dropdown-menu">{items.map((item) => optionItem('example2', item))}</div>
    </Dropdown>

    <Dropdown option>
      <div className="dropdown-menu">{items.map((item) => optionItem('example2', item))}</div>
    </Dropdown>

    <Dropdown option>
      <div className="dropdown-menu">{items.map((item) => optionItem('example2', item))}</div>
    </Dropdown>
  </form>
);

OpcionesMediano.story = { name: 'Opciones mediano' };

export const OpcionesChico = (): JSX.Element => (
  <form className="d-flex flex-row justify-content-start options-container">
    <Dropdown option size="sm">
      <div className="dropdown-menu">{items.map((item) => optionItem('example3', item))}</div>
    </Dropdown>

    <Dropdown option size="sm">
      <div className="dropdown-menu">{items.map((item) => optionItem('example3', item))}</div>
    </Dropdown>

    <Dropdown option size="sm">
      <div className="dropdown-menu">{items.map((item) => optionItem('example3', item))}</div>
    </Dropdown>
  </form>
);

OpcionesChico.story = { name: 'Opciones chico' };
