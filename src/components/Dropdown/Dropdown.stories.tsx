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
      <DropdownItem itemIconLeft="info" itemIconRight="info" isAlignRight isDisabled />
      <DropdownItem itemIconLeft="logout" isDanger />
    </Dropdown>
    <Dropdown btnIconLeft="menu" isBordered>
      <DropdownItem itemIconLeft="info" />
      <DropdownItem itemIconRight="info" isAlignRight />
      <DropdownItem itemIconRight="logout" isDanger isAlignRight />
    </Dropdown>
    <Dropdown btnIconLeft="menu" onlyIcon isBordered>
      <DropdownItem itemIconLeft="info" />
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
      <DropdownItem />
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
      <DropdownItem />
      <DropdownItem />
      <DropdownItem />
      <DropdownItem />
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
        btnIconRightClass="btn-dropdown-icon">
        <DropdownItem isSubItem />
        <DropdownItem isSubItem />
        <DropdownItem isSubItem />
      </Dropdown>
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
      isNested
      idDropdown="dropdownContentRight"
      isMenuRight>
      <Dropdown
        title="Opción en cascada"
        isSubDropdown
        btnIconLeft="expand_more"
        btnIconLeftClass="btn-dropdown-icon"
        isMenuRight>
        <DropdownItem isSubItem />
        <DropdownItem isSubItem />
        <DropdownItem isSubItem />
      </Dropdown>
      <DropdownItem />
      <DropdownItem />
      <DropdownItem />
      <DropdownItem itemIconRight="logout" isDanger />
    </Dropdown>
  </div>
);

DropdownNested.story = {
  name: 'Con cascada'
};
