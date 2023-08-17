// Base
import React from 'react';
import './Dropdown.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

import { DropdownOption } from './index';

// Configuración general del componente
export default {
  title: 'Componentes|Desplegables/De selección',
  decorators: [withA11y]
};

const checkboxOptions = [
  { value: 'checkOne', label: 'Opción 1' },
  { value: 'checkTwo', label: 'Opción 2' },
  { value: 'checkThree', label: 'Opción 3' }
];

const radioOptions = [
  { value: 'radioOne', label: 'Opción 1' },
  { value: 'radioTwo', label: 'Opción 2' },
  { value: 'radioThree', label: 'Opción 3' }
];

export const DropdownSelectionCheckbox = (): JSX.Element => {
  return (
    <div className="storybook__container-dropdown">
      <DropdownOption
        options={checkboxOptions}
        idDropdown="checkboxExample"
        icon={<span className="material-icons-round">person</span>}
        iconType="material">
        <i className="bx bxs-check"></i>
      </DropdownOption>
    </div>
  );
};
DropdownSelectionCheckbox.story = { name: 'Con selección múltiple' };

export const DropdownSelectionRadio = (): JSX.Element => {
  return (
    <div className="storybook__container-dropdown">
      <DropdownOption
        options={radioOptions}
        isRadio={true}
        idDropdown="radioExample"
        icon={<span className="material-icons-round">person</span>}
        iconType="material">
        <span className="material-icons-round">done</span>
      </DropdownOption>
    </div>
  );
};
DropdownSelectionRadio.story = { name: 'Con selección única' };

export const DropdownSelectionSizes = (): JSX.Element => {
  return (
    <div className="storybook__container-dropdown">
      <DropdownOption options={radioOptions} isRadio={true} size="small" idDropdown="radioSmall">
        <span className="material-icons-round">done</span>
      </DropdownOption>
      <DropdownOption options={radioOptions} isRadio={true} idDropdown="radio">
        <span className="material-icons-round">done</span>
      </DropdownOption>
      <DropdownOption options={radioOptions} isRadio={true} size="large" idDropdown="radioLarge">
        <span className="material-icons-round">done</span>
      </DropdownOption>
    </div>
  );
};
DropdownSelectionSizes.story = { name: 'Tamaños' };
