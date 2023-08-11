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

export const DropdownSelectionSizes = (): JSX.Element => {
  //TODO
  const checkboxOptions = [
    { value: 'checkOne', label: 'Opción 1' },
    { value: 'checkTwo', label: 'Opción 2' },
    { value: 'checkThree', label: 'Opción 3' }
  ];

  return (
    <div className="storybook__container-dropdown-form">
      <DropdownOption options={checkboxOptions}>
        <i className="bx bxs-check"></i>
      </DropdownOption>
    </div>
  );
};
DropdownSelectionSizes.story = { name: 'Tamaños' };

export const DropdownSelectionCheckbox = (): JSX.Element => {
  const checkboxOptions = [
    { value: 'checkOne', label: 'Opción 1' },
    { value: 'checkTwo', label: 'Opción 2' },
    { value: 'checkThree', label: 'Opción 3' }
  ];

  return (
    <div className="storybook__container-dropdown-form">
      <DropdownOption options={checkboxOptions}>
        <i className="bx bxs-check"></i>
      </DropdownOption>
    </div>
  );
};
DropdownSelectionCheckbox.story = { name: 'Con checkbox' };

export const DropdownSelectionRadio = (): JSX.Element => {
  const radioOptions = [
    { value: 'radioOne', label: 'Opción 1' },
    { value: 'radioTwo', label: 'Opción 2' },
    { value: 'radioThree', label: 'Opción 3' }
  ];

  return (
    <div className="storybook__container-dropdown-form">
      <DropdownOption options={radioOptions} isRadio={true}>
        <span className="material-icons-round">done</span>
      </DropdownOption>
    </div>
  );
};
DropdownSelectionRadio.story = { name: 'Con radio' };

export const DropdownSelectionIcon = (): JSX.Element => {
  const radioOptions = [
    { value: 'radioOne', label: 'Opción 1' },
    { value: 'radioTwo', label: 'Opción 2' },
    { value: 'radioThree', label: 'Opción 3' }
  ];

  return (
    <div className="storybook__container-dropdown-form">
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
    </div>
  );
};
DropdownSelectionIcon.story = { name: 'Con ícono' };
